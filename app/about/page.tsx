import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-navy-900">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-sm text-deep-300 mb-6">
            <Link href="/" className="hover:text-brand-500">Home</Link>
            <span>/</span>
            <span className="text-white">About Us</span>
          </nav>
          <div className="max-w-2xl">
            <div className="section-label">
              <span>Our Story</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Abu Dhabi&apos;s Trusted<br />
              <span className="text-brand-500">Curtain &amp; Blinds Specialist</span>
            </h1>
            <p className="text-deep-300 text-lg leading-relaxed">
              From a small workshop to Abu Dhabi&apos;s most recommended curtain and blinds company — 
              serving villas, hotels, offices, and commercial projects across the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section bg-deep-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-4">Built on Quality, Driven by Service</h2>
              <div className="space-y-4 text-navy-500 leading-relaxed">
                <p>
                  Curtain Makers started with a simple mission: provide Abu Dhabi with premium-quality 
                  curtains and blinds at fair prices, backed by expert installation and genuine after-sales support.
                </p>
                <p>
                  Over 15 years, we&apos;ve grown from a curtain workshop into a full-service window 
                  covering company serving villas, hotels, government buildings, and commercial offices 
                  across Abu Dhabi and now Dubai.
                </p>
                <p>
                  Every project — whether a single villa room or a 500-window tower fit-out — gets 
                  the same attention to detail, quality materials, and professional installation 
                  that our reputation is built on.
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-8 border border-deep-200">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { num: '15+', label: 'Years in Business' },
                  { num: '500+', label: 'Projects Completed' },
                  { num: '50+', label: 'Dubai Offices Served' },
                  { num: '4.9★', label: 'Client Rating' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="stat-number text-3xl">{s.num}</div>
                    <div className="text-navy-500 text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <div className="section-label justify-center"><span>What We Stand For</span></div>
            <h2 className="text-3xl font-bold text-navy-900 mb-3">Our Principles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Quality Materials', desc: 'We source only the finest fabrics, motors, and hardware from trusted global suppliers. Every product meets our strict quality standards before it reaches your space.' },
              { title: 'Expert Installation', desc: 'Our certified installation team ensures every curtain, blind, and motorized system is fitted to perfection. No shortcuts, no compromises.' },
              { title: 'Genuine Aftercare', desc: 'We stand behind our work with comprehensive warranties and responsive support. If something isn\'t right, we make it right — no questions asked.' },
            ].map((v) => (
              <div key={v.title} className="card p-6">
                <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center mb-4">
                  <div className="w-4 h-4 rounded-sm bg-brand-500" />
                </div>
                <h3 className="text-navy-900 font-semibold mb-2">{v.title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-deep-50">
        <div className="container-wide">
          <div className="card-dark p-10 md:p-14 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-3">Ready to Work With Us?</h2>
            <p className="text-deep-300 mb-8 max-w-md mx-auto">Get a free design visit and quote. No obligation.</p>
            <Link href="/appointment" className="btn-primary">Book Free Design Visit</Link>
          </div>
        </div>
      </section>
    </>
  );
}