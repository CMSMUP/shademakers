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
              <span className="text-brand-500">Curtain Specialist</span>
            </h1>
            <p className="text-deep-300 text-lg leading-relaxed">
              From a curtain workshop to Abu Dhabi&apos;s most recommended curtain and blinds company — 
              over 15 years serving villas, hotels, offices, and commercial projects across the UAE.
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
                  Curtain Makers started as a curtain workshop and grew into Abu Dhabi&apos;s most 
                  recommended curtain and blinds company. With thousands of fabrics, well-experienced 
                  professional curtain installers, and in-house quality manufacturing, we deliver 
                  unmatched quality for every project.
                </p>
                <p>
                  Over 15 years, we&apos;ve served villas, hotels, offices, and commercial projects 
                  across the UAE. We are the only company in Abu Dhabi offering online curtain pricing, 
                  backed by a 30% discount on selected fabrics, a 3-year warranty with free repairs, 
                  free curtain design visits with catalogs, and fast curtain services with installation 
                  in just 3 days.
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-8 border border-deep-200">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { num: '15+', label: 'Years in Business' },
                  { num: '500+', label: 'Projects Completed' },
                  { num: '3000+', label: 'Fabrics Available' },
                  { num: '4.9★', label: 'Client Rating' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-3xl font-bold text-brand-500">{s.num}</div>
                    <div className="text-navy-500 text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features — What Makes Us Different */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <div className="section-label justify-center"><span>Why Choose Us</span></div>
            <h2 className="text-3xl font-bold text-navy-900 mb-3">What Makes Us Different</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Premium Fabrics',
                desc: 'Thousands of fabrics to choose from, with over 2,500 blackout fabric options alone. We source only the finest materials from trusted global suppliers for every style and budget.',
              },
              {
                title: 'Expert Installation',
                desc: 'Our in-house trained installation teams ensure every curtain, blind, and motorized system is fitted to perfection. We deliver fast, professional installation — typically completed in just 3 days.',
              },
              {
                title: 'Complete Transparency',
                desc: 'The only curtain company in Abu Dhabi with online pricing and instant calculators. No hidden costs, no surprise markups — what you see is exactly what you pay.',
              },
            ].map((f) => (
              <div key={f.title} className="card p-6">
                <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center mb-4">
                  <div className="w-4 h-4 rounded-sm bg-brand-500" />
                </div>
                <h3 className="text-navy-900 font-semibold mb-2">{f.title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values — Our Principles */}
      <section className="section bg-deep-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <div className="section-label justify-center"><span>What We Stand For</span></div>
            <h2 className="text-3xl font-bold text-navy-900 mb-3">Our Principles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Quality Materials',
                desc: 'We source only the finest fabrics, motors, and hardware from trusted global suppliers. Every product meets our strict quality standards before it reaches your space.',
              },
              {
                title: 'Expert Installation',
                desc: 'Our certified installation team ensures every curtain, blind, and motorized system is fitted to perfection. No shortcuts, no compromises — precision every time.',
              },
              {
                title: 'Genuine Aftercare',
                desc: 'We stand behind our work with comprehensive warranties and responsive support. If something isn\'t right, we make it right — no questions asked.',
              },
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
            <h2 className="text-3xl font-bold text-white mb-3">Book Your Free Design Visit</h2>
            <p className="text-deep-300 mb-8 max-w-md mx-auto">
              Get a free curtain design visit with catalogs, online pricing, and a 30% discount 
              on selected fabrics. No obligation.
            </p>
            <Link href="/contact" className="btn-primary">Book Free Design Visit</Link>
          </div>
        </div>
      </section>
    </>
  );
}