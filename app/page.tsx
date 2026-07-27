import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import HeroCalculator from "@/components/HeroCalculator";

const FEATURED_PRODUCTS = [
  {
    slug: "roller-blinds",
    name: "Roller Blinds",
    tagline: "Sleek. Minimal. Professional.",
    desc: "Blackout, Sunscreen & Translucent options for every office space",
    gradient: "from-blue-600 to-purple-600",
    icon: "▤",
  },
  {
    slug: "wooden-venetian-blinds",
    name: "Wooden Venetian",
    tagline: "Classic. Warm. Prestigious.",
    desc: "50mm & 25mm real wood and faux wood options",
    gradient: "from-amber-600 to-orange-600",
    icon: "▦",
  },
  {
    slug: "smart-blinds",
    name: "Smart Motorized",
    tagline: "Automated. Effortless. Future-ready.",
    desc: "App-controlled, voice-activated, and automated scheduling",
    gradient: "from-cyan-600 to-teal-600",
    icon: "⚡",
  },
  {
    slug: "zebra-blinds",
    name: "Zebra Blinds",
    tagline: "Dual layer. Elegant. Versatile.",
    desc: "Day & Night zebra blinds for perfect light control",
    gradient: "from-rose-600 to-pink-600",
    icon: "≡",
  },
  {
    slug: "vertical-blinds",
    name: "Vertical Blinds",
    tagline: "Practical. Spacious. Modern.",
    desc: "Perfect for large windows and sliding doors",
    gradient: "from-emerald-600 to-green-600",
    icon: "∥",
  },
  {
    slug: "roman-blinds",
    name: "Roman Blinds",
    tagline: "Timeless. Soft. Luxurious.",
    desc: "Soft fabric folds for executive offices",
    gradient: "from-violet-600 to-indigo-600",
    icon: "⌺",
  },
  {
    slug: "aluminium-venetian-blinds",
    name: "Aluminium Venetian",
    tagline: "Sleek. Durable. Contemporary.",
    desc: "50mm, 25mm & Perforated for modern workplaces",
    gradient: "from-slate-600 to-zinc-600",
    icon: "▭",
  },
  {
    slug: "pleated-blinds",
    name: "Pleated Blinds",
    tagline: "Compact. Efficient. Stylish.",
    desc: "Translucent, Blackout & Thermal pleated solutions",
    gradient: "from-fuchsia-600 to-purple-600",
    icon: "≋",
  },
  {
    slug: "panel-blinds",
    name: "Panel Blinds",
    tagline: "Contemporary. Minimal. Bold.",
    desc: "Modern sliding panel systems for large spans",
    gradient: "from-neutral-600 to-stone-600",
    icon: "▯",
  },
  {
    slug: "skylight-blinds",
    name: "Skylight Blinds",
    tagline: "Specialist. Precision. Perfect.",
    desc: "Custom roof and skylight blind solutions",
    gradient: "from-sky-600 to-blue-600",
    icon: "◈",
  },
  {
    slug: "flyscreen-blinds",
    name: "Flyscreen Blinds",
    tagline: "Protection. Ventilation. Clarity.",
    desc: "Insect screens that blend seamlessly",
    gradient: "from-lime-600 to-emerald-600",
    icon: "⊞",
  },
];

const WHY_US = [
  {
    title: "Dubai-Based Expertise",
    desc: "We understand Dubai's unique climate and commercial requirements. 10+ years serving local businesses.",
    icon: "📍",
  },
  {
    title: "Instant Online Quoting",
    desc: "Get a preliminary estimate in minutes. Our smart calculator handles everything from roller to smart blinds.",
    icon: "⚡",
  },
  {
    title: "Free On-Site Survey",
    desc: "Our experts visit your office, take precise measurements, and recommend the perfect blind solutions.",
    icon: "📐",
  },
  {
    title: "Professional Installation",
    desc: "Certified installation team with minimal disruption to your office operations. Same-day options available.",
    icon: "🔧",
  },
  {
    title: "Full Warranty & Support",
    desc: "Comprehensive warranty on all products and installation. Dedicated after-sales support team.",
    icon: "🛡️",
  },
  {
    title: "Automated Journey",
    desc: "From quote to installation to review — track everything online. No chasing, no paperwork.",
    icon: "🔄",
  },
];

const STEPS = [
  { num: "01", title: "Get a Free Quote", desc: "Use our online calculator or chat with us. Takes 2 minutes." },
  { num: "02", title: "Free Site Visit", desc: "We measure, check fabrics, and confirm the perfect solution." },
  { num: "03", title: "Confirm & Pay Deposit", desc: "70% deposit to begin production. Simple and secure." },
  { num: "04", title: "Professional Installation", desc: "Our team installs with zero disruption. You relax." },
  { num: "05", title: "Enjoy & Review", desc: "Pay the balance and share your experience for extended warranty." },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO WITH INLINE CALCULATOR ===== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 pb-12">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-navy-500/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gold-500/10 rounded-full blur-[100px]" />

        <div className="container-wide relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left: Text + Badges */}
            <div className="pt-8 lg:pt-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light text-xs text-brand-400 font-medium mb-8 animate-fade-in-up">
                <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse-glow" />
                Dubai&apos;s #1 Commercial Blinds Specialist
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight mb-6 animate-fade-in-up">
                Premium{" "}
                <span className="text-gradient">Office Blinds</span>
                <br />
                <span className="text-deep-100">in Dubai</span>
              </h1>

              <p className="text-lg sm:text-xl text-deep-300 max-w-xl leading-relaxed mb-8 animate-fade-in-up-delay-1">
                From roller blinds to smart motorized systems — we supply, install, and
                maintain premium window coverings for commercial spaces across Dubai.
                <span className="text-brand-400 font-semibold block mt-2">
                  Free quote. Free site visit. Zero hassle.
                </span>
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-6 animate-fade-in-up-delay-2">
                {['1000+ Offices', 'Same-Day Free Quote', '5-Yr Warranty', 'Dubai-Mainland'].map((badge) => (
                  <div key={badge} className="flex items-center gap-1.5 text-deep-400 text-sm">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {badge}
                  </div>
                ))}
              </div>

              {/* Quick links */}
              <div className="flex flex-wrap gap-4 mt-8 animate-fade-in-up-delay-3">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-light text-deep-100 font-semibold text-sm hover:bg-white/10 hover:translate-y-[-2px] transition-all"
                >
                  Browse Products
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-deep-300 text-sm hover:text-white transition-colors"
                >
                  Read Our Guide
                </Link>
              </div>
            </div>

            {/* Right: Calculator */}
            <div className="animate-fade-in-up-delay-1">
              <HeroCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS GRID ===== */}
      <section className="section relative">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-wide relative z-10">
          <div className="text-center mb-14">
            <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">Our Products</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-white">
              Complete Range of{" "}
              <span className="text-gradient">Commercial Blinds</span>
            </h2>
            <p className="text-deep-400 max-w-2xl mx-auto">
              Every blind type your office needs — from budget-friendly to premium executive solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {FEATURED_PRODUCTS.map((product, i) => (
              <ProductCard key={product.slug} {...product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section relative">
        <div className="container-wide">
          <div className="text-center mb-14">
            <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">Simple Process</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-white">
              From Quote to{" "}
              <span className="text-gradient">Installation</span>
            </h2>
            <p className="text-deep-400 max-w-2xl mx-auto">
              Five simple steps to transform your office space. No paperwork, no chasing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {STEPS.map((step, i) => (
              <div key={step.num} className="relative text-center group">
                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-brand-500/50 to-transparent" />
                )}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500/20 to-gold-500/10 border border-brand-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-brand-400 font-bold text-lg">{step.num}</span>
                </div>
                <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                <p className="text-deep-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="section relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(236,122,20,0.08)_0%,_transparent_60%)]" />
        <div className="container-wide relative z-10">
          <div className="text-center mb-14">
            <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-white">
              Built for{" "}
              <span className="text-gradient">Dubai Businesses</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_US.map((item) => (
              <div key={item.title} className="card p-6 group">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-brand-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-deep-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="section">
        <div className="container-wide">
          <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 gradient-border">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-600/20 via-navy-800/30 to-deep-950" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 rounded-full blur-[100px]" />

            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Office?
              </h2>
              <p className="text-deep-300 text-lg mb-8">
                Get your free, no-obligation quote in under 2 minutes. Our team
                will follow up within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/estimate"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 text-white font-bold text-base hover:translate-y-[-3px] transition-all shadow-xl shadow-brand-500/30"
                >
                  Get Free Quote Now
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass-light text-deep-100 font-semibold text-base hover:bg-white/10 hover:translate-y-[-3px] transition-all"
                >
                  Talk to Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="section pt-0">
        <div className="container-wide max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {[
              { q: "How quickly can I get a quote?", a: "Our online calculator gives you an instant preliminary estimate. A detailed quote is sent within 24 hours after our site survey." },
              { q: "Do you offer free site visits?", a: "Yes! Our team will visit your office at no cost, take precise measurements, and help you select the perfect blinds." },
              { q: "What areas of Dubai do you service?", a: "All of Dubai — from DIFC and Business Bay to Dubai Marina and Silicon Oasis." },
              { q: "How long does installation take?", a: "Most office installations are completed within 1–3 days depending on the size and complexity." },
              { q: "What is the payment process?", a: "70% deposit to confirm the order, 30% balance upon completion and your satisfaction." },
            ].map((faq, i) => (
              <details
                key={i}
                className="card p-5 group open:border-brand-500/30 transition-all cursor-pointer"
              >
                <summary className="text-white font-medium text-sm flex items-center justify-between list-none">
                  {faq.q}
                  <svg className="w-4 h-4 text-deep-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-deep-400 text-sm mt-3 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}