import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import HeroCalculator from "@/components/HeroCalculator";

const FEATURED_PRODUCTS = [
  { slug: "roller-blinds", name: "Roller Blinds", tagline: "Sleek. Minimal. Professional.", desc: "Blackout, Sunscreen & Translucent options for every office space", icon: "▤" },
  { slug: "wooden-venetian-blinds", name: "Wooden Venetian", tagline: "Classic. Warm. Prestigious.", desc: "50mm & 25mm real wood and faux wood options", icon: "▦" },
  { slug: "smart-blinds", name: "Smart Motorized", tagline: "Automated. Effortless. Future-ready.", desc: "App-controlled, voice-activated, and automated scheduling", icon: "⚡" },
  { slug: "zebra-blinds", name: "Zebra Blinds", tagline: "Dual layer. Elegant. Versatile.", desc: "Day & Night zebra blinds for perfect light control", icon: "≡" },
  { slug: "vertical-blinds", name: "Vertical Blinds", tagline: "Practical. Spacious. Modern.", desc: "Perfect for large windows and sliding doors", icon: "∥" },
  { slug: "roman-blinds", name: "Roman Blinds", tagline: "Timeless. Soft. Luxurious.", desc: "Soft fabric folds for executive offices", icon: "⌺" },
  { slug: "aluminium-venetian-blinds", name: "Aluminium Venetian", tagline: "Sleek. Durable. Contemporary.", desc: "50mm, 25mm & Perforated for modern workplaces", icon: "▭" },
  { slug: "pleated-blinds", name: "Pleated Blinds", tagline: "Compact. Efficient. Stylish.", desc: "Translucent, Blackout & Thermal pleated solutions", icon: "≋" },
  { slug: "panel-blinds", name: "Panel Blinds", tagline: "Contemporary. Minimal. Bold.", desc: "Modern sliding panel systems for large spans", icon: "▯" },
  { slug: "skylight-blinds", name: "Skylight Blinds", tagline: "Specialist. Precision. Perfect.", desc: "Custom roof and skylight blind solutions", icon: "◈" },
  { slug: "flyscreen-blinds", name: "Flyscreen Blinds", tagline: "Protection. Ventilation. Clarity.", desc: "Insect screens that blend seamlessly", icon: "⊞" },
];

const WHY_US = [
  { title: "Project-Scale Delivery", desc: "From 10 windows to 1,000+ — we handle full floor and tower fit-outs with dedicated project managers." },
  { title: "Instant Project Quoting", desc: "Get a preliminary estimate in minutes. Our smart calculator scales from single rooms to full projects." },
  { title: "Free On-Site Survey", desc: "Our experts visit your site, take precise measurements, and recommend solutions per facade & orientation." },
  { title: "Certified Installation", desc: "Trained installation crews for commercial buildings. After-hours & weekend options to avoid disruption." },
  { title: "Full Warranty & AMC", desc: "5-year warranty on all products with optional annual maintenance contracts for facility managers." },
  { title: "Live Project Tracking", desc: "From quote to handover — track production, delivery, and installation status online in real time." },
];

const STEPS = [
  { num: "01", title: "Submit Your Quote Request", desc: "Use calculator or send your BOQ. Response within 24 hours." },
  { num: "02", title: "Free Site Survey", desc: "We measure every window, assess facades, and finalize specs." },
  { num: "03", title: "Approve & Confirm", desc: "Sign off on final quotation. 70% deposit kicks off production." },
  { num: "04", title: "Install & Handover", desc: "Certified crews install floor-by-floor. Minimal disruption." },
  { num: "05", title: "Enjoy Warranty & AMC", desc: "Balance on completion. 5-year warranty + optional maintenance." },
];

const AREAS = [
  { label: "Abu Dhabi City", href: "/areas/abu-dhabi" },
  { label: "Dubai Marina & JLT", href: "/areas/dubai-marina" },
  { label: "Business Bay & DIFC", href: "/areas/business-bay" },
  { label: "Downtown Dubai", href: "/areas/downtown-dubai" },
  { label: "Dubai Silicon Oasis", href: "/areas/dubai-silicon-oasis" },
  { label: "Sharjah & Ajman", href: "/areas/sharjah-ajman" },
  { label: "Al Ain", href: "/areas/al-ain" },
  { label: "Ras Al Khaimah", href: "/areas/ras-al-khaimah" },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO WITH CALCULATOR — Dark bg ===== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 pb-12" style={{ backgroundColor: 'var(--color-navy-900)' }}>
        <div className="container-wide relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left: Text */}
            <div className="pt-8 lg:pt-16">
              <div className="section-label">
                              <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: 'var(--color-brand-500)' }} />
                              Premium Curtains &amp; Blinds — Abu Dhabi &amp; Dubai
                            </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight mb-6" style={{ color: 'var(--color-deep-50)' }}>
                We Dress{' '}
                <span style={{ color: 'var(--color-brand-500)' }}>Your Windows</span>
                <br />
                <span style={{ color: 'var(--color-deep-100)' }}>for Abu Dhabi&apos;s Skyline</span>
              </h1>

              <p className="text-lg sm:text-xl max-w-xl leading-relaxed mb-8" style={{ color: 'var(--color-deep-300)' }}>
                From single villas to full tower fit-outs — CurtainMakers supplies and installs
                custom curtains and commercial blinds at project scale. Curtains, roller, venetian, smart motorized.
                <span className="font-semibold block mt-2" style={{ color: 'var(--color-brand-400)' }}>
                  Free project quote. Free site survey. Volume pricing.
                </span>
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-6">
                {['Project Specialists', 'Volume Pricing', '5-Yr Warranty', 'Certified Installers'].map((badge) => (
                  <div key={badge} className="flex items-center gap-1.5 text-sm" style={{ color: 'var(--color-deep-400)' }}>
                    <svg className="w-4 h-4" style={{ color: 'var(--color-brand-500)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {badge}
                  </div>
                ))}
              </div>

              {/* Quick links */}
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href="/products"
                  className="btn-primary"
                >
                  Browse Products
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary"
                  style={{ borderColor: 'var(--color-deep-100)', color: 'var(--color-deep-50)' }}
                >
                  Talk to Our Team
                </Link>
              </div>
            </div>

            {/* Right: Calculator */}
            <div>
              <HeroCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS GRID — Light bg ===== */}
      <section className="section" style={{ backgroundColor: 'var(--color-deep-50)' }}>
        <div className="container-wide">
          <div className="text-center mb-14">
            <div className="section-label text-center justify-center">Our Products</div>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4" style={{ color: 'var(--color-navy-900)' }}>
              Complete Range of{' '}
              <span style={{ color: 'var(--color-brand-500)' }}>Premium Blinds &amp; Curtains</span>
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--color-navy-500)' }}>
              Every window treatment your office or villa needs — from budget-friendly to premium executive solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {FEATURED_PRODUCTS.map((product, i) => (
              <ProductCard key={product.slug} {...product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATISTICS ===== */}
      <section className="section" style={{ backgroundColor: 'var(--color-navy-900)' }}>
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "5,000+", label: "Projects Completed" },
              { value: "500+", label: "Towers Served" },
              { value: "99%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="stat-number">{stat.value}</div>
                <div style={{ color: 'var(--color-deep-300)' }} className="text-sm font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS — Light bg ===== */}
      <section className="section" style={{ backgroundColor: 'var(--color-deep-50)' }}>
        <div className="container-wide">
          <div className="text-center mb-14">
            <div className="section-label text-center justify-center">Simple Process</div>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4" style={{ color: 'var(--color-navy-900)' }}>
              From Quote to{' '}
              <span style={{ color: 'var(--color-brand-500)' }}>Installation</span>
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--color-navy-500)' }}>
              Five simple steps to transform your office space. No paperwork, no chasing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {STEPS.map((step, i) => (
              <div key={step.num} className="relative text-center group">
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px" style={{ backgroundColor: 'var(--color-brand-500)' }} />
                )}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: 'rgba(229, 180, 60, 0.1)', border: '1px solid rgba(229, 180, 60, 0.2)' }}>
                  <span className="font-bold text-lg" style={{ color: 'var(--color-brand-500)' }}>{step.num}</span>
                </div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--color-navy-900)' }}>{step.title}</h3>
                <p className="text-sm" style={{ color: 'var(--color-navy-500)' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY US — Light bg ===== */}
      <section className="section pt-0" style={{ backgroundColor: 'var(--color-deep-50)' }}>
        <div className="container-wide">
          <div className="text-center mb-14">
            <div className="section-label text-center justify-center">Why CurtainMakers</div>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4" style={{ color: 'var(--color-navy-900)' }}>
              Built for{' '}
              <span style={{ color: 'var(--color-brand-500)' }}>Commercial Projects</span>
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--color-navy-500)' }}>
              Facility managers, fit-out contractors, and business owners trust us with their projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_US.map((item) => (
              <div key={item.title} className="card p-6 group">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-brand-500 transition-colors" style={{ color: 'var(--color-navy-900)' }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-navy-500)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AREAS WE SERVE — Light bg ===== */}
      <section className="section" style={{ backgroundColor: 'var(--color-deep-50)' }}>
        <div className="container-wide">
          <div className="text-center mb-14">
            <div className="section-label text-center justify-center">Service Areas</div>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4" style={{ color: 'var(--color-navy-900)' }}>
              Serving{' '}
              <span style={{ color: 'var(--color-brand-500)' }}>All of Abu Dhabi &amp; Dubai</span>
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--color-navy-500)' }}>
              From the capital to the coast — we cover every emirate with dedicated project crews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {AREAS.map((area) => (
              <Link
                key={area.label}
                href={area.href}
                className="card p-4 text-center group hover:border-brand-500/50 transition-all"
              >
                <h3 className="font-semibold text-sm group-hover:text-brand-500 transition-colors" style={{ color: 'var(--color-navy-900)' }}>
                  {area.label}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA — Dark bg ===== */}
      <section className="section" style={{ backgroundColor: 'var(--color-navy-900)' }}>
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto">
            <div className="section-label text-center justify-center">Ready to Start?</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-2" style={{ color: 'var(--color-deep-50)' }}>
              Get a Project Quote in 24 Hours
            </h2>
            <p className="text-lg mb-8" style={{ color: 'var(--color-deep-300)' }}>
              Send us your window schedule or use our instant calculator.
              A dedicated project manager will handle the rest.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/estimate"
                className="btn-primary"
              >
                Get Free Quote Now
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="btn-secondary"
                style={{ borderColor: 'var(--color-deep-100)', color: 'var(--color-deep-50)' }}
              >
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION — Light bg ===== */}
      <section className="section" style={{ backgroundColor: 'var(--color-deep-50)' }}>
        <div className="container-wide max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-navy-900)' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {[
              { q: "How quickly can I get a quote?", a: "Our online calculator gives you an instant preliminary estimate. A detailed quote is sent within 24 hours after our site survey." },
              { q: "Do you offer free site visits?", a: "Yes! Our team will visit your office at no cost, take precise measurements, and help you select the perfect blinds." },
              { q: "What areas do you service?", a: "All of Abu Dhabi and Dubai — from the Corniche and Al Maryah Island to DIFC, Business Bay, and Dubai Marina." },
              { q: "How long does installation take?", a: "Most installations are completed within 1–3 days depending on the size and complexity of the project." },
              { q: "What is the payment process?", a: "70% deposit to confirm the order, 30% balance upon completion and your satisfaction." },
            ].map((faq, i) => (
              <details
                key={i}
                className="card p-5 group cursor-pointer"
              >
                <summary className="font-medium text-sm flex items-center justify-between list-none" style={{ color: 'var(--color-navy-900)' }}>
                  {faq.q}
                  <svg className="w-4 h-4 group-open:rotate-180 transition-transform" style={{ color: 'var(--color-navy-400)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-sm mt-3 leading-relaxed" style={{ color: 'var(--color-navy-500)' }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}