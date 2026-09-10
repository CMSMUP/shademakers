import Link from 'next/link';
import { JsonLd, buildFaqSchema } from '@/src/data/schema';

const ABOUT_FAQS = [
  { question: 'How long has Curtain Makers been in business?', answer: 'We have been making and installing curtains and blinds in Abu Dhabi for over 15 years. What started as a small workshop is now a full team serving villas, hotels, and offices across the UAE.' },
  { question: 'Do you manufacture your own curtains?', answer: 'Yes. We manufacture in-house, which is why we can install most orders in 3 days and offer free repairs under warranty without waiting on a third party.' },
  { question: 'Can I see fabrics before I commit?', answer: 'Yes. Book a free design visit and our team brings catalogs to your home or office. You pick fabrics, we measure on the spot, and you get a confirmed price before anything is made.' },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={buildFaqSchema(ABOUT_FAQS)} />
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
              A curtain workshop that grew into
              <br />
              <span className="text-brand-500">Abu Dhabi&apos;s most recommended</span> curtain shop
            </h1>
            <p className="text-deep-300 text-lg leading-relaxed">
              Fifteen years ago we were a small workshop stitching curtains by hand. Today we fit out
              villas, hotels, and offices across the UAE, and we still make every piece ourselves.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section bg-deep-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-4">The workshop is still ours</h2>
              <div className="space-y-4 text-navy-500 leading-relaxed">
                <p>
                  Curtain Makers started as a curtain workshop and grew into the company Abu Dhabi
                  residents recommend to each other. We keep our manufacturing in-house, which is the
                  whole reason we can install most orders in three days and repair a curtain under
                  warranty without sending it away.
                </p>
                <p>
                  Along the way we became the only shop in Abu Dhabi that publishes curtain prices
                  online. You can see a real number on our calculator before you ever pick up the
                  phone. We also run a 30% discount on selected fabrics, offer a 3-year warranty with
                  free repairs, and bring fabric catalogs to your door for a free design visit.
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-8 border border-deep-200">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { num: '15+', label: 'Years in business' },
                  { num: '500+', label: 'Projects completed' },
                  { num: '3,700+', label: 'Fabrics in stock' },
                  { num: '4.9', label: 'Client rating' },
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

      {/* Features */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <div className="section-label justify-center"><span>Why Choose Us</span></div>
            <h2 className="text-3xl font-bold text-navy-900 mb-3">What makes us different</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Premium fabrics',
                desc: 'Over 3,700 fabrics in stock, including more than 2,500 blackout options. Cotton, linen, velvet, European and Turkish weaves. If you can describe it, we probably have a swatch for it.',
              },
              {
                title: 'Our own installers',
                desc: 'The team that measures your windows is the same team that installs them. Most jobs are done within three days of you confirming the design. No subcontractors, no finger-pointing.',
              },
              {
                title: 'Honest pricing',
                desc: 'We publish curtain prices online and give you an instant estimate from our calculator. The quote you approve is the price you pay. VAT is shown separately, never buried.',
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

      {/* Values */}
      <section className="section bg-deep-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <div className="section-label justify-center"><span>What We Stand For</span></div>
            <h2 className="text-3xl font-bold text-navy-900 mb-3">Our principles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Quality materials',
                desc: 'We buy fabric, motors, and hardware from suppliers we have worked with for years, and every piece is checked before it leaves the workshop.',
              },
              {
                title: 'Careful installation',
                desc: 'A curtain only looks good if it hangs right. Our installers check the drop, the stacking, and the light gaps before they call a job finished.',
              },
              {
                title: 'Aftercare that answers',
                desc: 'Three-year warranty with free repairs, and a real person on the phone if something goes wrong. We would rather fix it than argue about it.',
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

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl font-bold text-navy-900 mb-6 text-center">Questions people ask us</h2>
          <div className="space-y-3">
            {ABOUT_FAQS.map((faq, i) => (
              <details key={i} className="card p-5 group cursor-pointer">
                <summary className="font-medium text-sm flex items-center justify-between list-none text-navy-900">
                  {faq.question}
                  <svg className="w-4 h-4 group-open:rotate-180 transition-transform text-navy-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-sm mt-3 leading-relaxed text-navy-500">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-deep-50">
        <div className="container-wide">
          <div className="card-dark p-10 md:p-14 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-3">Book your free design visit</h2>
            <p className="text-deep-300 mb-8 max-w-md mx-auto">
              We bring the catalogs to you, measure on the spot, and quote a real price. 30% off
              selected fabrics right now.
            </p>
            <Link href="/contact" className="btn-primary">Book Free Design Visit</Link>
          </div>
        </div>
      </section>
    </>
  );
}
