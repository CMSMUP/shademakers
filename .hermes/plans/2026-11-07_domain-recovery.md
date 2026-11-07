# curtainmakers.ae — Domain & Email Recovery Runbook

**Created:** 2026-11-07
**Status:** 🔴 CRITICAL — production domain down, business email dead
**Owner:** Sayed Abdulla Shad
**Prepared by:** Hermes Agent (diagnosis verified live against DNS, TLS CT logs, and HTTP responses)

> **UPDATE 2026-11-07 — domain detached from Vercel at owner's request.**
> `curtainmakers.ae` and `www.curtainmakers.ae` were removed from the Vercel
> account (`vercel domains remove curtainmakers.ae`). The project
> **`shademakers`** (`prj_5AgL0PUnFSAv0TAxAFg75EHfCT8y`) was left fully intact
> and still serves at `my-curtain-app.vercel.app` (200 OK).
>
> **Consequence:** Step 2 below is now mandatory, not optional — the domain must
> be **re-added** to the Vercel project before the A record will do anything.
> Account domain count is currently `0`.
>
> Also note: the live Vercel project is named **`shademakers`**, not
> `my-curtain-app`. The local `.vercel/project.json` has a stale
> `projectName` (`my-curtain-app` does not exist) although its `projectId` is
> correct. A leftover deployment alias `curtainmakers.vercel.app` also survives
> (60d old, SSO-protected) and can be removed separately if desired.


---

## 1. Executive summary

`curtainmakers.ae` does **not** serve the website. It has not since approximately
**23 October 2026** (Dynadot SOA serial `2026102301`). The domain points to a
wildcard placeholder IP that returns `410 Gone` for every hostname and path.

Simultaneously, the domain has **no MX record at all**, while the website
publishes `info@curtainmakers.ae` as its contact address. Mail to that address
bounces.

**Both lead channels are down at once:**
- Website → no traffic, no GBP clicks, no backlink value
- Email → `info@curtainmakers.ae` non-deliverable
- Contact form + price calculator → also dead (they run on the same app the
  domain cannot reach)

The Next.js app itself is **healthy and current**. This is purely a DNS problem.
No code changes are required to restore service.

---

## 2. Verified findings

### 2.1 The domain points to a dead placeholder

```
curtainmakers.ae       ->  185.53.179.149
www.curtainmakers.ae   ->  185.53.179.149
```

`185.53.179.149` ownership:

```
inetnum  : 185.53.179.0/24      netname : DC-Germany
country  : DE                   admin-c : MO7159-RIPE
mnt-by   : TIA27-MNT            status  : ASSIGNED PA
reverse DNS : none              other domains on IP : none
```

It is a **wildcard catch-all that hosts nothing.** Proof — a random hostname
returns the same 410:

```
GET http://185.53.179.149/   Host: totally-random-xyz123.example   -> 410
GET http://185.53.179.149/   Host: curtainmakers.ae               -> 410
GET http://185.53.179.149/   Host: pickles-and-gravy.curtainmakers.ae -> 410
```

Every path 410s: `/`, `/index.html`, `/404`, `/login`, `/panel`,
`/.well-known/security.txt`, `/robots.txt`.

Response body (decompressed):

```html
<h2>It is gone!<br/>So be gone</h2><h1>410</h1><p>ID: PC410NAML1</p>
```

HTTPS returns `403 Forbidden` from `Caddy` — no vhost matches the SNI.
No valid certificate is served.

### 2.2 The zone is a stripped wildcard

```
*.curtainmakers.ae            A    185.53.179.149    <-- wildcard, must be deleted
SOA serial                    2026102301            <-- 2026-10-23, change #01
NS                            ns1.dyna-ns.net, ns2.dyna-ns.net  (Dynadot)

A     apex  -> 185.53.179.149
MX          -> NONE  (NOERROR, zero records)
TXT         -> NONE
CAA         -> NONE
AAAA        -> NONE
```

Because of the wildcard, `mail.`, `smtp.`, `imap.`, and `webmail.` all resolve
to the dead 410 box. Someone configured subdomains for a mail host on that IP
that never existed.

### 2.3 Timeline from certificate transparency (tamper-proof)

Certificate Transparency logs are append-only and cannot be edited, so they
give an accurate reconstruction.

| Date | Event | Issuer |
|---|---|---|
| 2026-01-20 → **2026-10-15** | **Webflow site serving normally.** Certs auto-renewing every ~60 days for apex + www | Google Trust Services (Webflow's CA) |
| **2026-09-10 14:59** | Single **Let's Encrypt `YR1`** cert issued for **`www.curtainmakers.ae` only**, valid → 2026-12-09. The Vercel cert, issued the same day the DNS record was added | Let's Encrypt |
| **2026-10-14 / 10-15** | Last two GTS certs **expire. No renewal issued** → Webflow stopped serving | — |
| **2026-10-23** | **Dynadot zone rewritten** → wildcard to dead IP, all other records stripped | — |
| 2026-10-23 → today | **Zero certificates issued.** No cutover attempt since | — |

Last good Wayback capture: `20260305145610` (200, the Webflow site,
`<title>Best Shop For Curtains in Abu Dhabi, CM Curtain Makers</title>`).

**Conclusion:** the Vercel cutover never completed. A cert was issued for `www`
only; the apex never got one; no renewals followed; the record was never
actually pointed at Vercel. On 23 Oct the zone was reset to a parking state —
most likely the old Webflow hosting lapsed and DNS fell back to a panel
default. `curtainmakers.webflow.io` also 404s, so there is no fallback host.

### 2.4 The app is fine

```
https://my-curtain-app.vercel.app   ->  200 OK
commit f4d2b0b content verified live:
  "What Our Customers Say" section          present
  Nicole Becker / Mihaela Hanganu cards     present
  "5.0 rating on Google"                    present
  page size                                 218 KB
```

```
https://curtainmakers.vercel.app    ->  302 -> vercel.com/sso-api (Deployment Protection ON)
```

That alias is behind Vercel SSO — not publicly viewable. Do not give this URL
to customers.

### 2.5 Content gaps still open (separate from DNS)

- **Zero real photos.** Live site has 22 `.svg` placeholder refs (11 product
  SVGs), 0 `.jpg`/`.jpeg`/`.webp`.
- **Placeholder logo.** `logo.svg` referenced 6× in
  `components/Header.tsx:42`, `components/Footer.tsx:39`, `app/layout.tsx:80`.
  The real logo at `E:\CM images\Logo\Logo.png` (81 KB) was never installed.
- **118 sized photos unused** on `E:\CM images\Sized All images\`
  (Bedroom 35, Living Room 31, Royal Luxury Bedroom 16, Roller Blinds 10,
  Raman Blinds 9, Kids Room 6, Shutters 6, curtain header type 5).

---

## 3. Recovery steps

Execute in this order. Steps 1–3 restore service; 4–5 protect against a repeat;
6 resets your SEO baseline.

### Step 1 — Point DNS at Vercel (Dynadot panel)

Log in to Dynadot → **Manage Domains → curtainmakers.ae → DNS Settings**.

| Type | Host | Value | TTL | Action |
|---|---|---|---|---|
| A | `@` | `76.76.21.21` | 600 | **add / replace** |
| CNAME | `www` | `cname.vercel-dns.com` | 600 | **add / replace** |
| A | `*` | `185.53.179.149` | — | **DELETE the wildcard** |
| AAAA | `@` | (none) | — | ensure absent |
| CAA | `@` | (none, or allow `letsencrypt.org`) | — | ensure absent |

> Confirm the apex target against Vercel's dashboard when you add the domain —
> Vercel prints the exact record values for your project. `76.76.21.21` is the
> documented Vercel anycast apex IP, but always trust the dashboard output.

**Deleting the wildcard is essential.** Left in place it will shadow any
subdomain you add later and keep serving 410s.

### Step 2 — Attach the domain in Vercel

Vercel → Project (`my-curtain-app`) → **Settings → Domains**:

1. Add `curtainmakers.ae`
2. Add `www.curtainmakers.ae`
3. Set `curtainmakers.ae` as the **primary** domain (redirect `www` → apex, or
   the reverse — pick one and be consistent with your canonical tags)
4. Wait for both to show **Valid Configuration** (cert issuance is automatic,
   usually 1–10 min after DNS resolves)

### Step 3 — Turn off Deployment Protection

This is why `curtainmakers.vercel.app` redirects to a Vercel login.

Vercel → Project → **Settings → Deployment Protection**:

- Disable **Vercel Authentication** for Production
  (and for Preview, if you want shareable preview links)

Without this, even a correctly pointed domain can serve an SSO wall to the
public.

### Step 4 — Restore email (URGENT — separate from the website)

`info@curtainmakers.ae` is advertised on the site and currently bounces.
**Pick one provider and set MX + SPF + DKIM + DMARC.**

| Option | Cost | Best for | Notes |
|---|---|---|---|
| **Google Workspace** | ~$6/user/mo | Matches your Google Business Profile; best deliverability & calendar/Drive integration | MX `smtp.google.com` pri 1. Needs TXT SPF + DKIM |
| **Zoho Mail** | Free tier (1 user, custom domain) / ~$1/user/mo | Cheapest professional option | MX `mx.zoho.com` pri 10, `mx2.zoho.com` pri 20, `mx3.zoho.com` pri 50 |
| **ImprovMX** (forwarding only) | Free | Fastest possible — just forwards `info@` to your existing Gmail | MX `mx1.improvmx.com` pri 10, `mx2.improvmx.com` pri 20. **Cannot send as `info@` without extra SMTP setup** |
| **Cloudflare Email Routing** | Free | Same as above but requires nameserver move to Cloudflare | Not worth it while staying on Dynadot DNS |

**Recommendation: Google Workspace.** You already live in Google (GBP, Search
Console, Analytics). A `@curtainmakers.ae` mailbox that also does calendar and
Drive is worth the ~$6, and deliverability from a fresh Zoho/forwarder setup is
worse for a business that quotes customers by email.

**Minimum records once a provider is chosen:**

```
MX     @                    <provider MX, with priority>
TXT    @                    "v=spf1 include:<provider> -all"
TXT    _dmarc               "v=DMARC1; p=none; rua=mailto:info@curtainmakers.ae"
TXT    <provider._domainkey> <DKIM key from provider panel>
```

Start DMARC at `p=none` and tighten to `p=quarantine` after 2–3 weeks of clean
reports. Do **not** start at `reject` — you will silently drop legitimate mail.

### Step 5 — Harden against a repeat

The zone was silently rewritten and nobody noticed for weeks. Close that:

1. **Find out who has registrar access.** Check Dynadot's account users and
   enable 2FA on the registrar account.
2. **Check the Dynadot DNS change log** for 2026-10-23 and identify the actor.
3. **Enable registrar lock** (clientTransferProhibited).
4. **Add uptime monitoring** on `https://curtainmakers.ae` (UptimeRobot free
   tier: 5-min checks, email/SMS alert). This alone would have caught a
   multi-week outage on day one.
5. **Set domain + hosting renewal reminders** 60 days ahead — a lapsed Webflow
   subscription is the most likely root cause here.
6. **Add an SPF/MX monitor** (free: `mxtoolbox.com` blacklist + MX alerts).

### Step 6 — Reset the SEO baseline after cutover

1. **Google Search Console** → add `curtainmakers.ae` property → verify by DNS
   TXT record → submit `https://curtainmakers.ae/sitemap.xml`.
2. Check GSC for **"Site errors" / coverage collapse** and the Crawl Stats
   report — expect a dip, then recovery once Google recrawls.
3. **Google Business Profile** → verify the website link resolves. A dead site
   link on a GBP suppresses local ranking. Confirm the "Office Curtains" Dubai
   GBP points at `curtainmakers.ae/dubai/office-curtains`.
4. Request indexing for the top 10 money pages (homepage, `/products`,
   `/dubai/office-curtains`, `/dubai/office-blinds`, `/estimate/curtains`,
   areas pages).
5. Expect **2–6 weeks** to recover lost organic positions. The domain has
   history and backlinks, so recovery should be faster than a cold start.

---

## 4. Verification commands

Run these after each step. All are read-only.

```bash
# 1. DNS points at Vercel?
curl -s "https://dns.google/resolve?name=curtainmakers.ae&type=A"
# expect: 76.76.21.21

curl -s "https://dns.google/resolve?name=www.curtainmakers.ae&type=CNAME"
# expect: cname.vercel-dns.com

# 2. Wildcard gone? (should now fail to resolve)
curl -s "https://dns.google/resolve?name=test123.curtainmakers.ae&type=A"
# expect: no Answer / NXDOMAIN

# 3. Site live?
curl -s -o /dev/null -w "%{http_code}\n" https://curtainmakers.ae
# expect: 200

# 4. Latest commit serving?
curl -sL https://curtainmakers.ae | grep -c "What Our Customers Say"
# expect: >= 1

# 5. TLS cert issued by Vercel (Let's Encrypt)?
curl -s "https://crt.sh/?q=curtainmakers.ae&output=json" | grep -o "Let's Encrypt" | head -1

# 6. Mail works? (after Step 4)
curl -s "https://dns.google/resolve?name=curtainmakers.ae&type=MX"
# expect: provider MX records, not NONE

# 7. SPF present?
curl -s "https://dns.google/resolve?name=curtainmakers.ae&type=TXT"
```

---

## 5. Outstanding work queue (after the domain is back)

Priority order:

1. **Install the real logo** — copy `E:\CM images\Logo\Logo.png` →
   `public/logo.png`, update the 3 refs (`Header.tsx:42`,
   `Footer.tsx:39`, `layout.tsx:80`), keep `logo.svg` as favicon fallback.
2. **Replace the 11 placeholder product SVGs with real photos** —
   `E:\CM images\Sized All images\` (118 files). Category mapping already
   known: Bedroom, Living Room, Royal Luxury Bedroom, Roller Blinds,
   Raman Blinds, Kids Room, Shutters, curtain header type.
   - Use `next/image` with explicit `width`/`height`, `sizes`, and
     `formats: ['image/avif','image/webp']` in `next.config`
   - Add descriptive, location-aware alt text (e.g. *"Grey linen wave
     curtains in an Abu Dhabi villa bedroom"*) — not keyword stuffing
   - Scrape old Webflow alt text from Wayback for reference/tone
3. **"We Lead" comparison table** — needs your real specs: warranty years,
   install time, fabric book count, showroom details. Competitor baseline for
   reference: blindsandcurtains.ae claims 18,000+ customers, 4.8★/826 reviews,
   20 years.
4. **Reviews on `/about` or a dedicated `/reviews` page** (currently only on
   the homepage).

---

## 6. Appendix — raw evidence

Captured 2026-11-07.

```
$ curl -s -o /dev/null -w "%{http_code}" https://curtainmakers.ae
410

$ curl -s -o /dev/null -w "%{http_code}" https://www.curtainmakers.ae
410

$ curl -s -o /dev/null -w "%{http_code}" https://my-curtain-app.vercel.app
200

$ curl -sI https://curtainmakers.vercel.app | grep -i location
location: https://vercel.com/sso-api?url=...

$ nslookup -type=NS curtainmakers.ae 8.8.8.8
ns1.dyna-ns.net
ns2.dyna-ns.net

$ whois 185.53.179.149 (via RIPEstat)
inetnum: 185.53.179.0/24   netname: DC-Germany   country: DE
admin-c: MO7159-RIPE       mnt-by: TIA27-MNT

$ curl http://185.53.179.149/ -H "Host: curtainmakers.ae"
HTTP/1.1 410 Gone
content-type: text/html; charset=utf-8
content-encoding: gzip
cache-control: no-store

<html>...<h2>It is gone!<br/>So be gone</h2><h1>410</h1>
<p>ID: PC410NAML1</p>...</html>

$ dig curtainmakers.ae MX   (via dns.google DoH)
Status: 0 (NOERROR)   Answer: NONE   <-- no MX record exists

$ dig *.curtainmakers.ae    (wildcard probe)
zzqtest12345.curtainmakers.ae          -> 185.53.179.149
random-nonsense-9876.curtainmakers.ae  -> 185.53.179.149
pickles-and-gravy.curtainmakers.ae     -> 185.53.179.149
```
