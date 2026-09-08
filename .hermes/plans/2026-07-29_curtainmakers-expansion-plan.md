# CurtainMakers — Strategic Expansion Plan
## Abu Dhabi (Main Site) → Dubai Office Curtains Subfolder

> **For Hermes:** This is a business + technical strategy document. Use `delegate_task` for parallel research, `plan` for implementation. Don't execute code yet — this requires user sign-off first.

---

## 1. EXISTING SITE ANALYSIS — CurtainMakers.ae (Webflow)

### 1.1 Current Performance Summary

| Metric | Status |
|--------|--------|
| **Platform** | Webflow (hand-coded HTML/CSS/JS with Webflow framework) |
| **Page count** | 30+ indexed pages |
| **Primary Keywords** | "curtains Abu Dhabi", "best curtain shop Abu Dhabi", "villa curtains Abu Dhabi" |
| **Secondary Keywords** | "roller blinds Abu Dhabi", "motorized curtains Abu Dhabi", "blackout curtains Abu Dhabi" |
| **Domain Authority** | Established (years old, quality leads coming in) |
| **Google Business Profile** | Embedded on homepage (Abu Dhabi location) |
| **Reviews** | 5-star mentions visible on homepage |
| **WhatsApp CTA** | Prominent banner + multiple WhatsApp links |
| **Page Speed (est.)** | Moderate — Webflow sites typically score 60-75 on mobile |
| **Sitemap** | ✅ Clean XML sitemap at /sitemap.xml |
| **Robots.txt** | ✅ Present, sitemap linked |
| **GA4** | G-ZN536WM4WV — active |
| **Fonts** | Montserrat (headings), Inter (body), Archivo, PT Serif |
| **Brand Colors** | White/light bg, teal/green accents (based on Webflow CSS) |
| **Booking** | "Book Free Design Visit" → /appointment |

### 1.2 What's Working (Keep This)
- **Strong Abu Dhabi local SEO** — ranks for "curtains Abu Dhabi", "curtain shop Abu Dhabi"
- **WhatsApp-first lead capture** — low friction, instant response
- **Project-category pages** — hotel, villa, interior designer segments
- **Real product images** — actual photography of installed work
- **Free design visit CTA** — reduces purchase anxiety
- **Google reviews widget** — embedded social proof
- **Motor brand logos** — Forest, Somfy, Fujikawa, SMUP trust signals
- **Member area** — sign up/in in footer (indicates existing CRM)

### 1.3 What Needs Improvement
- **Page speed** — Webflow sites are typically slower than coded Next.js
- **Mobile UX** — heavy page weight from Webflow framework
- **SEO structure** — some thin pages with duplicate imagery
- **No blog/content engine** — missing SEO content lever
- **No instant quoting** — users must call/whatsapp for pricing
- **No order tracking** — no customer portal for quote→order tracking
- **No contractor/BD portal** — no way for interior designers to submit BOQs

---

## 2. DOMAIN & URL STRATEGY

### 2.1 The Subfolder Approach (Recommended)

```
curtainmakers.ae                           ← Abu Dhabi HQ (villas, hotels, residential)
curtainmakers.ae/dubai/                    ← Dubai hub page
curtainmakers.ae/dubai/office-curtains/    ← Dubai office curtains landing
curtainmakers.ae/dubai/office-blinds/      ← Dubai commercial blinds hub
curtainmakers.ae/dubai/office-blinds/roller-blinds/
curtainmakers.ae/dubai/office-blinds/vertical-blinds/
curtainmakers.ae/dubai/office-blinds/smart-blinds/
curtainmakers.ae/dubai/office-blinds/zebra-blinds/
curtainmakers.ae/dubai/office-blinds/[...product]/
curtainmakers.ae/dubai/office-curtains/quote   ← Instant quote calculator
curtainmakers.ae/dubai/blog/                   ← Dubai office content
curtainmakers.ae/dubai/areas/dubai-marina      ← Area pages
curtainmakers.ae/dubai/areas/difc
curtainmakers.ae/dubai/areas/business-bay
```

### 2.2 Why Subfolder Over Subdomain

| Factor | Subfolder (`/dubai/`) | Subdomain (`dubai.curtainmakers.ae`) |
|--------|----------------------|--------------------------------------|
| **Domain authority inheritance** | ✅ 100% from root domain | ❌ Treated as separate domain by Google |
| **Ranking speed** | ✅ Weeks | ❌ Months |
| **SEO effort** | ✅ Lower — leverages existing backlinks | ❌ Higher — needs separate backlink profile |
| **Implementation** | ✅ Same Next.js app, route prefix | ⚠️ Separate deployment needed |
| **GMB compatibility** | ✅ Can point GMB to subfolder URL | ✅ Can point GMB to subdomain URL |
| **Separation of concerns** | ⚠️ Shared codebase | ✅ Independent |

### 2.3 Google Business Profile (Dubai)
- **Dubai GMB listing name**: "Curtain Makers — Office Curtains Dubai"
- **Link to**: `curtainmakers.ae/dubai/office-curtains/`
- **Categories**: Window Treatment Store, Office Equipment Supplier, Commercial Blinds Installer
- **Service areas**: Dubai Marina, DIFC, Business Bay, Downtown Dubai, JLT, Silicon Oasis, Barsha, Deira

### 2.4 Abu Dhabi Site — Focus Remains
- **Main homepage** stays Abu Dhabi focused: villas, hotels, residential curtains
- **Navigation** adds "Dubai Office" as a top-level link
- **Footer** links to Dubai subfolder
- **Schema**: `curtainmakers.ae` has LocalBusiness with Abu Dhabi address
- **Schema**: `curtainmakers.ae/dubai/office-curtains/` has additional LocalBusiness with Dubai area served

---

## 3. COMPETITOR LANDSCAPE — Abu Dhabi

### 3.1 Abu Dhabi Blinds & Curtains Competitors

| Competitor | Focus | Strengths | Weaknesses |
|-----------|-------|-----------|------------|
| **curtainmakers.ae** (us) | All curtains + blinds | Strong reviews, years of authority | Webflow limits, no instant quote |
| **dubaiblindsandcurtains.com** | Both cities | Wider product range | Less focused on Abu Dhabi |
| **curtainsandblindsabudhabi.com** | Abu Dhabi only | Location-specific | Small site, thin content |
| **zuleycurtains.com** | Abu Dhabi | Design-focused | Limited online quoting |
| **alfuttaim.com** | UAE-wide | Big brand trust | Not specialist, expensive |
| **thecurtainshop.ae** | Dubai + Abu Dhabi | Both locations | Newer, less authority |

### 3.2 Key Gaps in Market
1. **No one offers instant online quoting for curtains/blinds in Abu Dhabi**
2. **No contractor/designer portal for BOQ submission**
3. **No blog/SEO content engine for "office curtains Dubai"**
4. **No combined curtains + blinds specialist with coded platform**

---

## 4. TARGET AUDIENCE & CONTENT STRATEGY

### 4.1 Primary Audiences

#### Audience A: Commercial Project Decision Makers (Dubai)
- **Who**: Facility managers, fit-out contractors, project managers, interior designers
- **Need**: Multi-window project quotes, BOQ pricing, bulk discounts
- **Keywords**: "office blinds Dubai", "commercial curtains Dubai", "fit-out window coverings Dubai"
- **Content**: Project showcases, BOQ calculator, case studies
- **Conversion**: "Get Project Quote" → calculator → site visit → confirmation

#### Audience B: Abu Dhabi Villa/Homeowners (Main Site)
- **Who**: Villa owners, homeowners, hotel procurement
- **Need**: Custom curtains, fabric selection, installation
- **Keywords**: "curtains Abu Dhabi", "villa curtains Abu Dhabi", "blackout curtains Abu Dhabi"
- **Content**: Fabric guides, room-type galleries, motorization explainers
- **Conversion**: "Book Free Design Visit" → appointment → installation

#### Audience C: Interior Designers & Contractors (Both)
- **Who**: Design firms, fit-out companies, main contractors
- **Need**: Trade pricing, reliable installation, project management
- **Content**: Trade portal, project case studies, BOQ submission
- **Conversion**: "Contractor Registration" → trade account → recurring projects

### 4.2 Content Pillars for Dubai Office Subfolder

| Pillar | Topics | Target Keywords |
|--------|--------|-----------------|
| **Product Guides** | Roller blinds vs Venetian, Blackout guide, Smart blinds for offices | "roller blinds Dubai offices" |
| **Area Pages** | Dubai Marina, DIFC, Business Bay, Downtown, JLT, Silicon Oasis | "office blinds Dubai Marina" |
| **Project Types** | Fit-out projects, Building standards, Installation timeline | "commercial blinds project Dubai" |
| **Why Us** | Same Abu Dhabi quality, Now servicing Dubai, Certifications | "curtain makers Dubai office" |
| **Compare** | Curtains vs blinds for offices, Manual vs motorized, Fabric vs vinyl | "blinds vs curtains office Dubai" |

---

## 5. TECHNICAL ARCHITECTURE

### 5.1 Technology Stack (Recommended)

```
Frontend:    Next.js 16 + TypeScript + Tailwind CSS v4
Backend:     Supabase (shared DB or separate project)
Hosting:     Vercel (main domain + subfolder routing)
Auth:        OTP email (existing pattern from ShadeMakers)
Quoting:     Same pricing engine from ShadeMakers (lib/pricing.ts)
Images:      Webp/AVIF from CDN (existing Supabase storage or Cloudinary)
SEO:         Dynamic sitemap, Schema.org JSON-LD, OG tags
Analytics:   GA4 + Google Search Console
```

### 5.2 Route Architecture

```
┌── curtainmakers.ae (Main — Abu Dhabi)
│   ├── /                          → Abu Dhabi homepage
│   ├── /about
│   ├── /curtains/[slug]           → Curtain product pages
│   ├── /blinds/[slug]             → Blinds product pages
│   ├── /projects                  → Project portfolio
│   ├── /gallery
│   ├── /appointment               → Free design visit booking
│   ├── /blog/[slug]               → Abu Dhabi blog
│   ├── /account                   → Customer/login portal
│   └── /sitemap.xml
│
└── curtainmakers.ae/dubai/ (Subfolder — Dubai Office)
    ├── /                          → Dubai hub (redirect or hub page)
    ├── /office-curtains/          → Dubai office curtains (main landing)
    ├── /office-blinds/            → Dubai office blinds hub
    │   ├── /roller-blinds         → Product detail
    │   ├── /vertical-blinds
    │   ├── /smart-blinds
    │   ├── /zebra-blinds
    │   ├── /venetian-blinds
    │   └── /[...product]
    ├── /areas/[slug]              → Dubai district pages
    ├── /quote                     → Instant quote calculator
    ├── /blog/[slug]               → Dubai office content
    ├── /contractors               → Trade/contractor portal
    ├── /sitemap.xml
    └── /robots.txt
```

### 5.3 Subfolder Implementation (Next.js)

```tsx
// app/dubai/layout.tsx — wraps all /dubai/* routes
export default function DubaiLayout({ children }) {
  return (
    <>
      {/* Dubai-specific header: "Dubai Office Curtains" branding */}
      <DubaiHeader />
      <main>{children}</main>
      <DubaiFooter /> {/* links to Abu Dhabi HQ + Dubai subfolder */}
    </>
  );
}

// app/dubai/office-blinds/page.tsx — Dubai office blinds hub
export const metadata = {
  title: 'Office Blinds Dubai | Curtain Makers — Commercial Blinds',
  description: 'Premium office blinds for commercial spaces in Dubai...',
  alternates: { canonical: 'https://curtainmakers.ae/dubai/office-blinds/' },
};
```

### 5.4 SEO Headers & Canonical

```html
<!-- Root page doesn't link to Dubai — no dilution -->
<link rel="canonical" href="https://curtainmakers.ae/dubai/office-blinds/roller-blinds/" />

<!-- Cross-regional linking (optional) -->
<link rel="alternate" hreflang="en-ae" href="https://curtainmakers.ae/dubai/office-blinds/" />
```

---

## 6. EXISTING SITE MIGRATION PLAN — Webflow → Next.js

### 6.1 Phase Approach

**Phase 1: Dubai subfolder goes live first** (separate from existing site)
- Deploy `curtainmakers.ae/dubai/` on Next.js + Vercel
- Existing Webflow site stays untouched during Phase 1
- Use Vercel rewrites to route `/dubai/*` to Next.js app while Webflow handles rest

**Phase 2: Migrate main site from Webflow to Next.js**
- Rebuild Abu Dhabi pages in Next.js
- Port content, images, SEO metadata
- Set up 301 redirects from old Webflow URLs to new Next.js routes
- Cut over DNS → Vercel handles everything

### 6.2 Vercel Rewrites (Phase 1)
```json
{
  "rewrites": [
    { "source": "/dubai/:path*", "destination": "https://nextjs-app.vercel.app/dubai/:path*" }
  ]
}
```
This lets the existing Webflow site keep running while `/dubai/` is served by the Next.js app.

---

## 7. QUOTING & ORDER SYSTEM (CRITICAL)

### 7.1 Required Features

| Feature | Priority | Existing from ShadeMakers? |
|---------|----------|---------------------------|
| Room/Window calculator | 🔥 High | ✅ Yes (EstimateWizard) |
| Instant price display | 🔥 High | ✅ Yes (HeroCalculator) |
| Product selection per window | 🔥 High | ✅ Yes |
| Model/Fabric selection | 🔥 High | ✅ Yes |
| PDF quote download | 🔥 High | ❌ Not yet built |
| OTP email login | 🔥 High | ✅ Yes |
| Customer dashboard | 🔥 High | ✅ Yes |
| Admin dashboard | 🔥 High | ✅ Yes |
| Invoice generation | ⭐ Medium | ❌ Not yet built |
| Payment tracking | ⭐ Medium | ❌ Not yet built |
| Contractor/BD portal | ⭐ Medium | ❌ Not yet built |
| BOQ bulk upload | 💡 Later | ❌ Not yet built |

### 7.2 Accurate Commercial Pricing Required (From You)
- [ ] Price per sqm: Roller blinds (Blackout, Sunscreen, Translucent)
- [ ] Price per sqm: Venetian blinds (Wood, Aluminium, Perforated)
- [ ] Price per sqm: Smart motorized
- [ ] Price per sqm: Vertical blinds
- [ ] Price per sqm: Zebra/Day-Night
- [ ] Motorization add-on per blind
- [ ] Installation cost per window / per sqm
- [ ] Cassette / side channel add-on
- [ ] Bulk discount tiers (10+ windows, 50+, 100+, 500+)
- [ ] UAE VAT (5%) included or excluded?

---

## 8. SEO & CONTENT MIGRATION

### 8.1 Existing Pages to Preserve (Abu Dhabi)

The following pages drive leads — must be migrated with care:

| Page URL | Traffic Driver | Migration Action |
|----------|---------------|------------------|
| `/` | "curtains Abu Dhabi" | Rebuild, 301 to same URL |
| `/curtain-designs/` | "curtain designs Abu Dhabi" | Keep, enhance |
| `/blackout-curtains/` | "blackout curtains Abu Dhabi" | Keep, add product schema |
| `/bedroom-curtains/` | "bedroom curtains Abu Dhabi" | Keep, add galleries |
| `/best-curtains-abu-dhabi/` | "best curtain shop Abu Dhabi" | Keep, this is a high-conversion page |
| `/roller-blinds-abu-dhabi/` | "roller blinds Abu Dhabi" | Keep + expand to full product page |
| `/motorized-curtains-abudhabi/` | "motorized curtains" | Keep |
| `/projects/` | Project portfolio | Rebuild with case studies |
| `/appointment/` | Booking page | Keep, add calendar integration |

### 8.2 New Pages (Dubai Subfolder)

| URL | Target Keyword |
|-----|----------------|
| `/dubai/office-curtains/` | "office curtains Dubai" |
| `/dubai/office-blinds/` | "office blinds Dubai" |
| `/dubai/office-blinds/roller-blinds/` | "roller blinds Dubai office" |
| `/dubai/office-blinds/vertical-blinds/` | "vertical blinds Dubai" |
| `/dubai/office-blinds/smart-blinds/` | "smart motorized blinds Dubai" |
| `/dubai/office-blinds/zebra-blinds/` | "zebra blinds Dubai office" |
| `/dubai/office-blinds/venetian-blinds/` | "venetian blinds Dubai" |
| `/dubai/areas/dubai-marina/` | "office blinds Dubai Marina" |
| `/dubai/areas/difc/` | "office blinds DIFC" |
| `/dubai/areas/business-bay/` | "office blinds Business Bay" |
| `/dubai/areas/downtown/` | "office blinds Downtown Dubai" |
| `/dubai/areas/jlt/` | "office blinds JLT" |
| `/dubai/areas/silicon-oasis/` | "office blinds Silicon Oasis" |
| `/dubai/blog/office-blinds-comparison/` | "best office blinds Dubai" |
| `/dubai/blog/commercial-blinds-guide/` | "commercial blinds Dubai guide" |
| `/dubai/blog/fitout-window-treatments/` | "fit-out window coverings Dubai" |

### 8.3 Schema Markup Strategy

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Roller Blinds — Commercial Grade",
  "brand": { "@type": "Brand", "name": "Curtain Makers" },
  "offer": {
    "@type": "Offer",
    "price": "85",
    "priceCurrency": "AED",
    "priceValidUntil": "2027-12-31",
    "availability": "https://schema.org/InStock",
    "areaServed": ["Dubai", "Abu Dhabi"]
  }
}
```

Plus: Organization, LocalBusiness (x2 — Abu Dhabi + Dubai), BreadcrumbList, FAQPage, Service.

---

## 9. CONTRACTOR & INTERIOR DESIGNER OUTREACH

### 9.1 Why This Is Critical

Interior designers and fit-out contractors control which supplier gets specified in a project. If you're on their preferred list, you get recurring bulk orders without CAC.

### 9.2 Strategy

| Tactic | Implementation |
|--------|---------------|
| **Contractor registration portal** | `/dubai/contractors/register` — sign up with trade license |
| **Trade pricing page** | Private pricing tier after registration |
| **BOQ upload tool** | Upload window schedule → get instant bulk quote |
| **Project referral commission** | 5-10% commission for specifying Curtain Makers |
| **LinkedIn outreach** | Connect with 100+ Abu Dhabi/Dubai fit-out PMs |
| **UAE interior design associations** | Join ADIAC (Abu Dhabi Interior Architects Collective) |
| **Sample kit for designers** | Physical fabric/color swatch kit delivered to design offices |

---

## 10. IMMEDIATE ACTION PLAN

### Week 1-2: Foundation
1. [ ] **Domain setup**: Verify you control curtainmakers.ae (DNS access)
2. [ ] **Vercel project**: Set up new project for curtainmakers.ae
3. [ ] **Current site crawl**: Full sitemap extract of existing Webflow pages
4. [ ] **Content inventory**: Download all images, copy, metadata from Webflow
5. [ ] **SEO audit**: Run existing site through PageSpeed Insights, Ahrefs/SEMrush
6. [ ] **GMB verification**: Confirm Dubai GMB listing is verified

### Week 3-4: Dubai Subfolder Launch
7. [ ] **Next.js app**: Clone ShadeMakers app → retheme to Curtain Makers brand
8. [ ] **Brand update**: Colors, logo, fonts to match existing curtainmakers.ae
9. [ ] **Dubai office-blinds pages**: 6 product pages + pricing
10. [ ] **Area pages**: 6 Dubai district landing pages
11. [ ] **Quote calculator**: Port from ShadeMakers, retheme
12. [ ] **Schema**: Add LocalBusiness (Dubai) + Product schemas
13. [ ] **Vercel deploy**: `/dubai/` subfolder live via rewrite
14. [ ] **GMB link**: Point Dubai GMB → `/dubai/office-curtains/`

### Week 5-6: Content & SEO
15. [ ] **Blog**: 5-8 articles for Dubai office blinds keywords
16. [ ] **Contractor portal**: Registration + trade pricing
17. [ ] **LinkedIn campaign**: 50 designer/contractor connections
18. [ ] **Google Search Console**: Add curtainmakers.ae, submit sitemap
19. [ ] **GA4**: Verify tracking, set up conversion goals

### Week 7-8: Main Site Migration
20. [ ] **Copy existing content**: Port 20+ Abu Dhabi pages to Next.js
21. [ ] **Images**: Migrate all Webflow images to optimized format
22. [ ] **Redirects**: Map old Webflow URLs → new Next.js URLs with 301s
23. [ ] **DNS cutover**: Point curtainmakers.ae → Vercel
24. [ ] **Testing**: Full regression test on all routes
25. [ ] **Old Webflow**: Cancel or keep as archive

---

## 11. KEY DECISIONS NEEDED FROM YOU

### Brand & Identity
- [ ] **Brand name for Dubai**: "Curtain Makers — Office Curtains" or keep "Curtain Makers"?
- [ ] **Brand color**: Keep existing Webflow teal/green or adopt our electric yellow `#FDEB07`?
- [ ] **Logo**: Use existing CM logo, or create Dubai-specific variation?
- [ ] **Tagline**: "Abu Dhabi's Best Curtain Shop" stays on main site. Dubai tagline?

### Pricing (Critical for Calculator)
- [ ] **Provide commercial pricing** for all 6+ blind types (per sqm)
- [ ] **Installation**: Included or separate line item?
- [ ] **Bulk discounts**: Structure for 10+, 50+, 100+ windows?
- [ ] **Motorization**: Fixed add-on per blind?

### Tech & Hosting
- [ ] **Supabase**: New project for Dubai, or share existing one?
- [ ] **Domain DNS**: Do you have access to curtainmakers.ae DNS?
- [ ] **Existing CRM**: What system is behind the member login area?
- [ ] **Images**: Do you have high-res product photography ready?

### Operations
- [ ] **Dubai team**: Do you have installers in Dubai or using Abu Dhabi crew?
- [ ] **Showroom**: Physical location in Dubai or showroom-only in Abu Dhabi?
- [ ] **Lead handling**: Who responds to Dubai inquiries vs Abu Dhabi?
- [ ] **Target monthly leads**: What's the current number and target?

---

## 12. IMMEDIATE NEXT STEPS

The fastest path to getting Dubai leads is:

**1. Quick-win content deployment**: Create cornerstone content pages on curtainmakers.ae/dubai/ while we build the full Next.js app. These can be simple HTML pages (even Webflow pages under a /dubai/ folder structure) to start capturing Dubai-specific search traffic immediately.

**2. GMB optimization**: Update the existing Dubai GMB listing with accurate categories, photos, and link to subfolder URL.

**3. Migrate pricing**: Port the ShadeMakers quote calculator to a Curtain Makers themed version — this is the #1 competitive advantage (no competitor in Abu Dhabi/Dubai has instant online quoting).

**Would you like me to:**
- (A) Start building the `/dubai/` subfolder prototype in Next.js now
- (B) Create a detailed content plan with keyword research for Dubai office pages
- (C) Begin competitor research on Abu Dhabi curtains/blinds market
- (D) All of the above

What's your priority?