# Office Blinds Dubai — Strategic Master Plan

> **For Hermes:** This is a comprehensive strategic plan covering brand, conversion, deployment, marketing, and operations. Use `plan` skill for code-level execution plans; use `delegate_task` for parallel research/implementation.

**Goal:** Transform the current MVP into a production-ready, high-converting blinds e-commerce brand, launch on a real domain, and build the operational infrastructure for a self-running business.

**Current State:** Next.js 16 + Supabase + Tailwind v4 MVP with 32 routes, product catalog, multi-step quote wizard, OTP auth, admin dashboard, AI chat widget, SEO pages. Dark theme with orange/gold (#ec7a14) brand colors. Builds clean.

**Primary Gaps:** No real brand identity (no logo, no product images, no real content), quote calculator hidden behind a separate page, UI lacks the polish of established blinds brands, no production deployment, no marketing infrastructure connected.

---

## 1. BRAND IDENTITY & VISUAL UPGRADE

### 1.1 Immediate Needs
- **Logo** — Vector SVG logo for header, footer, favicon, social media, PDF quotes
- **Product Images** — High-quality hero images for each blind type (11 products × at least 3 images each = 33 images minimum)
- **Office/Commercial Context Photography** — Blinds installed in actual Dubai offices, meeting rooms, commercial spaces
- **Icon Set** — Replace emoji-based icons with a professional icon set (Lucide, Phosphor, or custom SVG)
- **Typography Refinement** — Current Inter/Geist stack is good. Add display font for hero headings (optional)

### 1.2 Brand Architecture Checklist
| Item | Status | Action |
|------|--------|--------|
| Logo (SVG) | ❌ Missing | Design or commission |
| Favicon | ❌ Missing | Derive from logo |
| Color system | ✅ Done | brand-500: #ec7a14, dark theme |
| Typography | ✅ Done | Inter + Geist |
| Product photography | ❌ Missing | Source from suppliers or commission |
| Brand voice/tone guide | ❌ Missing | Define: professional, confident, helpful |
| Business cards / letterhead | ❌ Missing | Template for PDF quotes |
| Social media assets | ❌ Missing | Profile pics, cover images |

---

## 2. QUOTE CALCULATOR ON HERO PAGE

### 2.1 Concept
Replace or supplement the current hero CTA with an **inline mini-quote calculator** that gives instant pricing without leaving the homepage. This is the #1 conversion mechanism of successful blinds e-commerce sites (247blinds.co.uk does a version of this).

### 2.2 Mini Calculator Spec
```
┌─────────────────────────────────────────────┐
│  Get Your Instant Price                      │
│                                              │
│  [Blind Type ▼]  [Width (cm)]  [Height (cm)] │
│  [Material ▼]                                │
│                                              │
│  Your Estimate: AED 1,250  (incl. VAT)       │
│  [Get Detailed Quote →]                      │
└─────────────────────────────────────────────┘
```

- 4 dropdowns + auto-calculating price display
- Simple per-sqm pricing table for quick estimates (not the full wizard)
- "Get Detailed Quote" button links to full `/estimate` page
- Animated price counter when values change
- Shows below the hero headline, replacing or supplementing the current CTA buttons

---

## 3. COMPETITOR ARCHITECTURE ANALYSIS — 10 Brands

### 3.1 Brands to Study

| # | Brand | Region | Why |
|---|-------|--------|-----|
| 1 | **247blinds.co.uk** | UK | Best price-forward UX, local landing pages |
| 2 | **selectblinds.com** | USA | Best schema markup, Shopify-based |
| 3 | **theshadestore.com** | USA | Best SEO architecture, rich blog |
| 4 | **blinds.com** | USA | Largest selection, best filtering |
| 5 | **blindsdirect.co.uk** | UK | Cleanest quote flow, strong CTAs |
| 6 | **dubai-blinds.com** | UAE | Direct competitor (if accessible) |
| 7 | **blindsandcurtains.ae** | UAE | Local competitor |
| 8 | **hillarys.co.uk** | UK | Best trust signals, in-home consultation model |
| 9 | **blindsgalore.com** | USA | Best product comparison UX |
| 10 | **smithandnoble.com** | USA | Best premium/luxury positioning |

### 3.2 Analysis Points (per brand)
1. **Homepage structure** — Hero, CTAs, trust signals, social proof placement
2. **Product page layout** — Images, specs, pricing, CTAs, cross-sells
3. **Quote/estimate flow** — How many steps? What info collected? When is price revealed?
4. **Mobile experience** — How does the calculator work on mobile?
5. **Trust signals** — Reviews, guarantees, certifications, payment badges
6. **Content strategy** — Blog, guides, buying advice, FAQ depth
7. **Conversion tactics** — Exit intents, urgency, social proof, free samples

### 3.3 20 Features to Consider Implementing

**Conversion & UX (1-8)**
1. **Inline hero calculator** — Instant pricing without leaving homepage
2. **Visual size guide** — Animated diagram showing how to measure
3. **Free sample ordering** — Mail physical fabric swatches (high conversion)
4. **Live price comparison** — Side-by-side blind type pricing table
5. **"Build Your Own" configurator** — Visual blind builder with real-time preview
6. **Sticky CTA bar** — "Get Quote" follows scroll on mobile
7. **Social proof ticker** — "12 offices quoted today in Dubai Marina"
8. **Exit-intent popup** — "Wait! Get 5% off your first order"

**Product Experience (9-14)**
9. **360° product viewer** — Rotate blind samples (or image galleries as MVP)
10. **Room visualizer** — Upload office photo, overlay blind preview (advanced)
11. **Fabric/material filter** — Filter by blackout %, color, texture
12. **Product comparison table** — Compare up to 3 blinds side by side
13. **"Frequently Bought Together"** — Cross-sell motorization with blinds
14. **Installation cost calculator** — Separate line item for installation

**Trust & Credibility (15-20)**
15. **Google Reviews widget** — Embedded reviews on homepage
16. **Project gallery** — Real completed installations with client logos
17. **"As Seen In"** — Press/logos if any media coverage
18. **Live chat with real human fallback** — Already have AI widget, add human handoff
19. **Money-back guarantee badge** — Prominent on every page
20. **Dubai-specific certifications** — DM, Trakhees, Civil Defense compliance badges

---

## 4. UI/UX GAP ANALYSIS — Current vs. Professional Brand

### 4.1 What's Working
- Clean dark theme with consistent color system
- Good typography hierarchy (Inter + Geist)
- Proper component structure (Header, Footer, Cards)
- SEO metadata in place
- Glass-morphism cards give premium feel
- Build compiles clean (32/32 routes)

### 4.2 What's Missing (The "Brand Gap")

| Gap | Current State | Professional Standard |
|-----|--------------|----------------------|
| **Hero imagery** | Abstract gradient blobs | Real product photography, lifestyle shots |
| **Product images** | None — emoji/card placeholders | High-res product photos with zoom |
| **Logo** | Text only | Distinctive vector logo mark |
| **Trust section** | 4 text badges | Client logos, review counts, certification badges |
| **Social proof** | None | "Rated 4.9★ by 200+ Dubai businesses" |
| **Pricing visibility** | Hidden behind CTA → separate page | Visible on homepage |
| **Mobile polish** | Functional | Needs spacing/animation optimization |
| **Page transitions** | None | Smooth page transitions, loading states |
| **Empty states** | Default Next.js | Branded loading skeletons |
| **Error states** | Default | Branded error pages (404, 500) |
| **Content depth** | Minimal | Rich guides, case studies, testimonials |
| **Newsletter/signup** | None | Email capture for remarketing |

### 4.3 Design Reference: 247blinds.co.uk Architecture
- **Hero**: Full-width product image + price badge + "Up to 70% Off" + CTA
- **Below fold**: Category cards with product images → Trust bar → How it works → Reviews → Blog teaser → Footer
- **Key lesson**: They answer "how much?" within 3 seconds of landing

---

## 5. DOMAIN, HOSTING & DEPLOYMENT

### 5.1 Domain
- **Recommended**: `officeblindsdubai.com` (check availability)
- **Alternatives**: `officeblinds.ae`, `dubaiofficeblinds.com`
- **Registrar**: Namecheap, GoDaddy, or Gandi
- **DNS**: Cloudflare (free CDN, DDoS protection, SSL)

### 5.2 Hosting Options (ranked)

| Option | Cost/mo | Pros | Cons |
|--------|---------|------|------|
| **Vercel (Hobby)** | Free | Zero-config Next.js, preview deploys | Commercial limits on Pro ($20) |
| **Vercel Pro** | $20 | Analytics, team, password protection | Cost adds up |
| **Cloudflare Pages** | Free | Global CDN, unlimited bandwidth | Next.js support improving |
| **Railway** | $5+ | Full-stack, includes Postgres | More manual setup |
| **DigitalOcean App** | $12+ | Simple, predictable pricing | Less Next.js optimized |

### 5.3 Supabase
- Already set up ✅ (ref: tiujxmoemxlfrnokaeqk)
- **Before launch**: Upgrade from free tier if needed (free = 500MB DB, 2 projects)
- **Backups**: Enable automated backups (Pro tier, $25/mo)

### 5.4 Deployment Checklist
- [ ] Purchase domain
- [ ] Configure Cloudflare DNS
- [ ] Deploy to Vercel (connect GitHub repo)
- [ ] Set environment variables in Vercel (Supabase keys, etc.)
- [ ] Enable SSL (automatic with Vercel + Cloudflare)
- [ ] Configure custom domain
- [ ] Set up preview deploys for staging
- [ ] Add `www` → root redirect
- [ ] Submit sitemap to Google Search Console
- [ ] Configure `robots.txt` (already exists ✅)

---

## 6. SEO TOOLS, GOOGLE MAPS & SOCIAL MEDIA

### 6.1 Google Business Profile
- **Critical for local SEO**: "Office Blinds Dubai" needs a verified Google Business Profile
- Steps: Create → Verify address → Add photos → Add services → Collect reviews
- This alone drives 30-40% of local service business leads

### 6.2 Google Maps Integration
- Embed Google Map on Contact page with office location
- Add `LocalBusiness` schema with geo-coordinates (already have basic schema ✅)
- Area pages should include embedded maps for each Dubai district

### 6.3 Google Search Console
- Verify domain ownership
- Submit sitemap.xml (already generated ✅)
- Monitor: impressions, clicks, CTR, average position
- Track keywords: "office blinds dubai", "commercial blinds dubai", "roller blinds dubai"

### 6.4 Google Analytics
- GA4 property setup
- Track: quote starts, quote completions, chat interactions, CTA clicks
- Conversion goals: Quote submitted, Phone call clicked, Chat initiated

### 6.5 Social Media Setup
| Platform | Priority | Purpose |
|----------|----------|---------|
| **LinkedIn** | 🔥 High | B2B — office managers, facility managers, procurement |
| **Instagram** | 🔥 High | Visual — before/after installations, product showcase |
| **Facebook** | ⭐ Medium | Community + ads retargeting |
| **Pinterest** | ⭐ Medium | Office design inspiration boards |
| **TikTok** | 💡 Later | Installation timelapses, office transformations |
| **YouTube** | 💡 Later | How-to guides, product reviews |

### 6.6 Content Calendar (First 30 Days)
- 8 blog posts targeting Dubai commercial blinds keywords
- 3 LinkedIn articles about office design in Dubai
- Daily Instagram: product shots, installation progress, client showcases
- Weekly email newsletter to captured leads

---

## 7. DASHBOARD REPORTS — Daily & Weekly Sales/Accounts

### 7.1 Daily Dashboard Report
```
┌────────────────────────────────────────────┐
│  📊 Daily Report — [Date]                   │
│                                             │
│  💰 New Quotes:    5    (+2 vs yesterday)   │
│  ✅ Quotes Confirmed: 2                     │
│  💵 Revenue Today:  AED 8,400              │
│  📅 Site Visits Scheduled: 3               │
│  🔧 In Production:  4                      │
│  📦 Installations Today: 2                 │
│  ⭐ New Reviews:    1                      │
│                                             │
│  📈 Charts: Quote funnel, Revenue trend     │
└────────────────────────────────────────────┘
```

### 7.2 Weekly Dashboard Report
```
┌────────────────────────────────────────────┐
│  📊 Weekly Report — Week [N], July 2026     │
│                                             │
│  💰 Total Revenue:     AED 42,000          │
│  📋 Total Quotes:      28                  │
│  ✅ Conversion Rate:   21% (6 confirmed)    │
│  📅 Site Visits:       12                  │
│  🔧 In Production:     8                   │
│  📦 Installed:         5                   │
│  ⭐ Avg Review:        4.7/5               │
│                                             │
│  📈 vs Last Week: Revenue +12%, Quotes +8%  │
│  🏆 Top Product: Roller Blinds (40%)        │
│  📍 Top Area: Dubai Marina (35%)            │
│                                             │
│  ⚠️ Alerts: 3 quotes > 7 days no follow-up │
└────────────────────────────────────────────┘
```

### 7.3 Growth/Failure Analysis Metrics
- **Quote-to-Order Conversion Rate** — Target: >20%. Below 15% = problem with pricing or sales process
- **Average Order Value (AOV)** — Track weekly. Declining = customers choosing cheaper options
- **Customer Acquisition Cost (CAC)** — Ad spend ÷ new customers
- **Repeat Rate** — % customers who order again (target: >15% for commercial)
- **Time-to-Close** — Days from quote to confirmation. Increasing = bottleneck
- **Revenue per Product** — Which blinds make the most money?
- **Area Performance** — Which Dubai districts convert best?
- **Chat-to-Quote Rate** — AI chat conversations that lead to quotes

### 7.4 Implementation
- Add `/admin/reports` page with charts (Recharts or Chart.js)
- Supabase queries for aggregations
- Daily email report (cron job via Hermes)
- Weekly PDF summary auto-generated

---

## 8. CONTENT QUESTIONNAIRE — Information Needed From You

### 8.1 Company Information
- [ ] Full company legal name
- [ ] Trade license number
- [ ] Physical address (for Google Maps, schema, contact page)
- [ ] Phone number(s) — sales, support, WhatsApp
- [ ] Email addresses — info@, sales@, support@
- [ ] VAT registration number (TRN)
- [ ] Years in business / founding story

### 8.2 Pricing Data
- [ ] Price per sqm for EACH blind type × material grade (A, B, C)
- [ ] Price per sqm for EACH fabric type (Blackout, Sunscreen, Translucent)
- [ ] Motorization add-on prices (per blind)
- [ ] Cassette/side channel add-on prices
- [ ] Installation charges (per blind or per sqm)
- [ ] Minimum order value (if any)
- [ ] Discount structure (volume, repeat customer, seasonal)
- [ ] Payment terms (70/30 split confirmed? Any other options?)

### 8.3 Product Specifications
- [ ] Exact width/height limits per blind type (min/max in cm)
- [ ] Available colors per blind type and material
- [ ] Fabric specifications (UV protection %, blackout %, fire rating)
- [ ] Warranty terms per product type
- [ ] Lead time per product (production days)
- [ ] Installation time estimates

### 8.4 Images & Media
- [ ] Logo files (AI, SVG, PNG — all formats you have)
- [ ] Product photos (each blind type, each material, multiple angles)
- [ ] Installation photos (before/after of real projects)
- [ ] Office/team photos (for About page)
- [ ] Video content (product demos, installation process)
- [ ] Client logos (for trust section — with permission)

### 8.5 Content & Marketing
- [ ] Existing marketing materials (brochures, PDFs, catalogs)
- [ ] Customer testimonials (with names/companies for social proof)
- [ ] Press mentions or awards (if any)
- [ ] Competitor names you want to beat
- [ ] Target areas in Dubai (sorted by priority)
- [ ] Social media handles (if already exist)

### 8.6 Operations
- [ ] Calendar availability (working days, hours, holidays)
- [ ] Service areas (all Dubai or specific districts only?)
- [ ] Team structure (how many sales, installers, admin?)
- [ ] Current lead management process (if any)

---

## 9. CONVERSION PSYCHOLOGY — Learning from the Best

### 9.1 The 247blinds.co.uk Conversion Formula

**What they do brilliantly:**
1. **Price-first homepage** — "Up to 70% Off" is the FIRST thing you see
2. **"Made to Measure" everywhere** — Reassures custom-fit = premium
3. **Free samples CTA** — Low-commitment first touch, captures address/email
4. **Trust bar** — Stars, review count, payment methods, delivery info — all above fold
5. **Urgency without sleaze** — "Sale ends Sunday" banner, countdown timers
6. **Category cards with prices** — You see prices before clicking anything
7. **Mobile-first design** — Calculator works perfectly on phone
8. **Exit intent** — "Before you go..." with discount or sample offer

### 9.2 The Psychology of a First-Time Visitor

```
SECOND 0-3:    "Am I in the right place?"
               → Logo + headline must instantly say "Office Blinds Dubai"
               
SECOND 3-10:   "Can they solve my problem?"
               → Trust badges, "1000+ Offices", Google rating visible
               
SECOND 10-30:  "How much will it cost?"
               → Inline calculator gives instant answer
               
SECOND 30-60:  "Why should I trust them?"
               → Reviews, project gallery, certifications
               
AFTER 60s:     "I want a quote" or "I'm leaving"
               → Sticky CTA, exit intent, free sample offer
```

### 9.3 Conversion Tactics to Implement

| Tactic | Where | Impact |
|--------|-------|--------|
| **Price anchoring** | Hero | Show "From AED 89/sqm" to set expectation low |
| **Risk reversal** | Every CTA | "Free quote. No obligation. Cancel anytime." |
| **Social proof density** | Homepage | Multiple review widgets, client logos, counters |
| **Scarcity (ethical)** | Quote page | "Our Dubai Marina team has 3 slots this week" |
| **Micro-commitments** | Flow | Start with "Just 2 measurements" before full form |
| **Loss aversion** | Blog/Content | "5 Mistakes When Choosing Office Blinds" |
| **Authority** | About/Footer | Certifications, memberships, years in business |

### 9.4 Comparison: Office Blinds Dubai vs. 247blinds.co.uk

| Element | 247 Blinds | Our Current State | Gap |
|---------|-----------|-------------------|-----|
| Price visible on homepage | ✅ "From £X" | ❌ Hidden behind CTA | **Critical** |
| Product images on cards | ✅ Real photos | ❌ Gradient placeholders | **Critical** |
| Trust bar (reviews) | ✅ Above fold | ❌ Text only, below fold | **High** |
| Free sample CTA | ✅ Every page | ❌ Not implemented | **High** |
| Mobile calculator | ✅ Works great | ⚠️ Untested | **Medium** |
| Exit intent | ✅ Yes | ❌ No | **Medium** |
| Blog content depth | ✅ 100+ articles | ✅ 5 articles | **Medium** |
| Category filtering | ✅ Advanced | ⚠️ Basic | **Low** |

---

## 10. AI SALES AGENT TRAINING

### 10.1 Current State
- ChatWidget exists ✅ (OpenAI-compatible, product-context aware)
- Has basic memory and admin handoff
- Needs: product knowledge, pricing info, objection handling, lead qualification

### 10.2 Knowledge Base to Inject
```
SYSTEM PROMPT ADDITIONS:
- Complete product catalog with specs, materials, price ranges
- Common objections and responses:
  • "Too expensive" → "We offer free site visits to give exact pricing"
  • "I'll think about it" → "Would a free sample help you decide?"
  • "I need to compare" → "Here's how we compare on warranty, installation, service"
- Lead qualification questions:
  • How many windows need blinds?
  • What's your timeline?
  • Are you the decision maker?
  • What's your budget range?
- Upsell triggers:
  • Multiple windows → suggest bulk discount
  • Manual blinds → suggest motorized upgrade
  • Office high-floor → suggest UV protection
- Dubai-specific knowledge:
  • Common building regulations
  • Typical office sizes in each district
  • Climate considerations (heat, dust, sun direction)
```

### 10.3 Training Process
1. Feed all product specs and pricing into the system prompt
2. Simulate 50 common customer conversations, review responses
3. Identify gaps → update prompt → retest
4. Set up human handoff triggers (price negotiation, complaints, technical queries)
5. Weekly review of chat logs to improve responses

---

## 11. LEARNING TOPICS — What to Study for This Business

### 11.1 Technical Skills
| Topic | Why | Resource |
|-------|-----|----------|
| **Next.js App Router** | Your stack | nextjs.org/docs |
| **Supabase Row-Level Security** | Data protection | supabase.com/docs/guides/auth/row-level-security |
| **Tailwind CSS v4** | Styling efficiency | tailwindcss.com/docs |
| **SEO Technical Fundamentals** | Google ranking | Google SEO Starter Guide |
| **Google Search Console** | Monitor performance | search.google.com/search-console |
| **Vercel Deployments** | Hosting | vercel.com/docs |
| **Schema.org structured data** | Rich results | schema.org + Google Rich Results Test |

### 11.2 Business Skills
| Topic | Why | Resource |
|-------|-----|----------|
| **Conversion Rate Optimization (CRO)** | Turn visitors into customers | CXL Institute, Baymard Institute |
| **Local SEO for Dubai** | Rank for "office blinds Dubai" | Moz Local, BrightLocal |
| **B2B Sales Process** | Commercial clients | "Predictable Revenue" — Aaron Ross |
| **Customer Psychology** | Understand buyer behavior | "Influence" — Robert Cialdini |
| **Google Ads for Local Services** | Paid acquisition | Google Skillshop |
| **Financial Literacy for Small Business** | Margins, cash flow, pricing | "Profit First" — Mike Michalowicz |

### 11.3 Industry Knowledge
| Topic | Why |
|-------|-----|
| Dubai commercial real estate trends | Know your market |
| UAE construction and fit-out regulations | Compliance |
| Window covering materials and technology | Product expertise |
| Competitor pricing in UAE market | Stay competitive |
| Supply chain for blinds in UAE | Reliable sourcing |

---

## 12. MASTER ACTION PLAN — Steps to Deployment

### Phase A: Foundation (Week 1-2)
```
A1. [ ] Complete content questionnaire (Section 8 above)
A2. [ ] Procure/design logo (SVG vector)
A3. [ ] Source product images (from suppliers or stock)
A4. [ ] Gather real pricing data for all products × materials
A5. [ ] Purchase domain (officeblindsdubai.com)
A6. [ ] Set up Cloudflare DNS
```

### Phase B: Brand & Visual Upgrade (Week 2-3)
```
B1. [ ] Replace all placeholder/emoji icons with Lucide icon set
B2. [ ] Create branded loading skeletons
B3. [ ] Design and add logo to Header, Footer, Favicon
B4. [ ] Replace gradient product cards with image-based cards
B5. [ ] Add project gallery component
B6. [ ] Build branded 404 and error pages
B7. [ ] Add smooth page transitions
```

### Phase C: Homepage Conversion Optimization (Week 3)
```
C1. [ ] Build inline hero quote calculator component
C2. [ ] Add "From AED X/sqm" price anchoring
C3. [ ] Add social proof section (review widget, client logos)
C4. [ ] Add trust bar (payment methods, warranty, certifications)
C5. [ ] Add "Free Sample Request" CTA
C6. [ ] Add Google Reviews embed
```

### Phase D: Content & SEO (Week 3-4)
```
D1. [ ] Write 8 blog articles targeting Dubai commercial blinds keywords
D2. [ ] Create real area pages with unique content (not just keyword-swapped)
D3. [ ] Add FAQPage schema to FAQ sections
D4. [ ] Add Product schema to product pages
D5. [ ] Optimize all image alt text
D6. [ ] Submit sitemap to Google Search Console
D7. [ ] Set up Google Analytics 4
```

### Phase E: Dashboard & Reports (Week 4)
```
E1. [ ] Build admin reports page with charts
E2. [ ] Daily sales summary query
E3. [ ] Weekly performance summary query
E4. [ ] Revenue trend visualization
E5. [ ] Conversion funnel visualization
E6. [ ] Auto-email daily report (Hermes cron job)
```

### Phase F: Deployment (Week 4)
```
F1. [ ] Push code to GitHub
F2. [ ] Connect Vercel to GitHub repo
F3. [ ] Configure environment variables
F4. [ ] Deploy to production
F5. [ ] Configure custom domain
F6. [ ] Enable SSL
F7. [ ] Test all routes on production
F8. [ ] Set up monitoring (Vercel Analytics)
```

### Phase G: Marketing Launch (Week 5)
```
G1. [ ] Create + verify Google Business Profile
G2. [ ] Set up social media accounts (LinkedIn, Instagram)
G3. [ ] Create initial social media content (10 posts queued)
G4. [ ] Set up Google Ads campaign (target: "office blinds dubai")
G5. [ ] Install Facebook Pixel for retargeting
G6. [ ] Create lead magnet (free PDF: "Office Blinds Buyer's Guide")
G7. [ ] Email capture form on homepage
```

### Phase H: Operations & Training (Week 5-6)
```
H1. [ ] Train AI sales agent with product + pricing data
H2. [ ] Simulate and refine chat responses
H3. [ ] Set up human handoff rules
H4. [ ] Document standard operating procedures
H5. [ ] Train staff on dashboard usage
H6. [ ] Set up automated follow-up emails for quotes
```

---

## 13. HERMES DEVELOPER BEST PRACTICES

### 13.1 Proven Workflows from Other Hermes Developers

| Practice | Why | How |
|----------|-----|-----|
| **Skills for repeatable tasks** | Don't re-explain your project every session | Create `office-blinds-dubai` skill with project context |
| **Delegate parallel research** | Competitor analysis, SEO research, content writing | `delegate_task` with 3 subagents in parallel |
| **Plan before code** | Token-efficient, fewer rewrites | Use `plan` skill for each phase |
| **Cron jobs for reports** | Automated daily/weekly reports | `cronjob` to generate and deliver dashboard reports |
| **Project context files** | Hermes reads AGENTS.md/CLAUDE.md on session start | Your `AGENTS.md` already exists ✅ — keep it updated |
| **Skills for deployment** | Reuse deployment steps | Create a `deploy-my-curtain-app` skill |
| **Memory hygiene** | Keep memory under 50%, consolidate regularly | You're at 24% ✅ |
| **Session resumption** | Continue long sessions efficiently | `hermes --resume <session_id>` |
| **Git commit discipline** | Small, frequent commits | Commit after each component/task |

### 13.2 Recommended Skills to Create
1. **`office-blinds-dubai`** — Project context, DB schema, route map, color tokens, build commands
2. **`deploy-office-blinds`** — Vercel deployment steps, env vars, domain config
3. **`blinds-seo-checklist`** — Schema types, keyword targets, content templates
4. **`blinds-pricing-engine`** — Pricing formulas, material grades, VAT calculation

### 13.3 Suggested Cron Jobs
```bash
# Daily sales report to Telegram every morning at 9am
cronjob create --schedule "0 9 * * *" --prompt "Generate daily sales report..."

# Weekly performance report every Monday at 8am
cronjob create --schedule "0 8 * * 1" --prompt "Generate weekly performance report..."

# SEO health check every Sunday
cronjob create --schedule "0 10 * * 7" --prompt "Check sitemap, broken links, Google Search Console..."

# Competitor price monitoring (monthly)
cronjob create --schedule "0 9 1 * *" --prompt "Check competitor pricing..."
```

---

## 14. IMMEDIATE NEXT ACTIONS (This Session)

Here's what we can start on RIGHT NOW:

1. **Create project skill** — Save all context so future sessions start instantly
2. **Build inline hero calculator** — The #1 conversion improvement
3. **Audit and fix UI gaps** — Icons, placeholders, missing images
4. **Design logo placeholder** — SVG logo while you source a professional one
5. **Set up the content questionnaire** — Interactive checklist to gather your data

---

**Which of these should we tackle first?** I recommend: #1 (save project skill so we don't lose context) → #2 (hero calculator) → #4 (logo placeholder) → #3 (UI audit). This gives you the biggest visible impact fastest.