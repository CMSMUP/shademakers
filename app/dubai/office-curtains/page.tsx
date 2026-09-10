import type { Metadata } from 'next';
import Link from 'next/link';
import HeroCalculator from '@/components/HeroCalculator';
import { JsonLd, buildFaqSchema, buildLocalBusinessSchema } from '@/src/data/schema';

export const metadata: Metadata = {
  title: 'Dubai Office Curtains & Blinds | Curtain Makers',
  description: 'Premium office curtains and commercial blinds in Dubai. Custom roller blinds, motorized blinds & curtain installation for offices, towers & fit-out projects. Free quote & site survey.',
  openGraph: {
    title: 'Office Curtains Dubai — Curtain Makers',
    description: 'Commercial curtains and blinds for Dubai offices. Free project quote.',
  },
  alternates: {
    canonical: 'https://curtainmakers.ae/dubai/office-curtains/',
  },
};

const DUBAI_CURTAIN_FAQS = [
  { question: 'Do you install curtains in Dubai offices?', answer: 'Yes, we supply and install premium office curtains and blinds across all Dubai commercial districts. Our team handles corporate offices, co-working spaces, hotels, and large fit-out projects with dedicated project managers.' },
  { question: 'How much do office curtains cost in Dubai?', answer: 'Office curtains in Dubai are priced per linear meter of track width. Curtains start from AED 180/m for Value tier, AED 380/m for Mid Range, and AED 750/m for Premium fabrics. Blinds start from AED 65/m². Free site survey included.' },
  { question: 'Can you handle large commercial fit-out projects?', answer: 'Absolutely. We regularly deliver projects from 10 to 1,000+ windows with phased installation, BOQ supply for fit-out contractors, and after-hours or weekend installation to avoid disruption.' },
  { question: 'Do you offer motorized curtains for Dubai offices?', answer: 'Yes, we offer fully motorized curtain and blind systems with remote, app, and voice control (Alexa/Google Home), plus integration with building management systems and occupancy sensors.' },
];

export default function DubaiHubPage() {
  return (
    <>
      <JsonLd data={buildFaqSchema(DUBAI_CURTAIN_FAQS)} />
      <JsonLd data={buildLocalBusinessSchema({ areaServed: ['Dubai'] })} />
      {/* HERO */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-navy-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(229,180,60,0.08)_0%,transparent_60%)]" />
        <div className="container-wide relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-500 text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
            Now Servicing Dubai — Commercial Office Division
          </div>
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Premium Office Curtains &amp;{" "}
              <span className="text-brand-500">Commercial Blinds</span>
              <br />in Dubai
            </h1>
            <p className="text-deep-300 text-lg leading-relaxed mb-8 max-w-xl">
              From single offices to full tower fit-outs — Curtain Makers supplies and installs
              custom window coverings for Dubai&apos;s commercial spaces. Roller blinds, motorized
              blinds, and curtains for every project.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/dubai/office-blinds" className="btn-primary">
                View Office Blinds
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/estimate" className="btn-secondary !border-white !text-white hover:!text-white">
                Get Project Quote
              </Link>
            </div>
          </div>
          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-10 border-t border-white/10">
            {[
              { num: '500+', label: 'Projects Completed' },
              { num: '50+', label: 'Dubai Offices Served' },
              { num: '15+', label: 'Years Experience' },
              { num: '4.9', label: 'Client Rating' },
            ].map((s) => (
              <div key={s.label}>
                <div className="stat-number text-3xl md:text-4xl">{s.num}</div>
                <div className="text-deep-300 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BLINDS PRICE CALCULATOR ===== */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="text-center mb-10">
            <div className="section-label justify-center"><span>Blinds Calculator</span></div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-3">
              Instant <span className="text-brand-500">Blinds Price</span> Calculator
            </h2>
            <p className="text-navy-500 max-w-2xl mx-auto">
              Select your blind type and enter dimensions for an instant estimate. Free site survey included.
            </p>
          </div>
          <HeroCalculator />
        </div>
      </section>

      {/* ===== Office Products ===== */}
      <section className="section bg-deep-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <div className="section-label justify-center">
              <span>Commercial Range</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-3">
              Office Blinds &amp; Curtains in Dubai
            </h2>
            <p className="text-navy-500 max-w-2xl mx-auto">
              Our Dubai commercial division specializes in window coverings for corporate offices, 
              co-working spaces, hotels, and government buildings.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { slug: 'roller-blinds', name: 'Roller Blinds', desc: 'Blackout, Sunscreen & Translucent — the most popular choice for Dubai offices', price: '85' },
              { slug: 'vertical-blinds', name: 'Vertical Blinds', desc: 'Perfect for large windows and sliding doors in commercial spaces', price: '65' },
              { slug: 'smart-blinds', name: 'Smart Motorized', desc: 'App-controlled and voice-activated blinds for modern offices', price: '185' },
              { slug: 'zebra-blinds', name: 'Zebra Blinds', desc: 'Day & Night dual-layer blinds for versatile light control', price: '110' },
              { slug: 'venetian-blinds', name: 'Venetian Blinds', desc: 'Wood and aluminium slats for executive and meeting rooms', price: '75' },
              { slug: 'office-curtains', name: 'Office Curtains', desc: 'Custom wave, pleat and blackout curtains for corporate spaces', price: '—' },
            ].map((p) => (
              <Link
                key={p.slug}
                href={p.slug === 'office-curtains' ? '/dubai/office-curtains' : `/dubai/office-blinds/${p.slug}`}
                className="card p-6 group hover:border-brand-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-4 group-hover:bg-brand-500/20 transition-colors">
                  <div className="w-5 h-5 rounded-sm bg-brand-500" />
                </div>
                <h3 className="text-navy-900 font-semibold text-base mb-1 group-hover:text-brand-500 transition-colors">
                  {p.name}
                </h3>
                <p className="text-navy-500 text-xs leading-relaxed mb-3">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-brand-500 font-semibold text-sm">
                    From AED {p.price}/m²
                  </span>
                  <span className="text-navy-400 text-xs group-hover:text-brand-500 transition-colors">
                    Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="text-center mb-10">
            <div className="section-label justify-center">
              <span>Service Areas</span>
            </div>
            <h2 className="text-3xl font-bold text-navy-900 mb-3">
              Dubai Districts We Serve
            </h2>
            <p className="text-navy-500 max-w-xl mx-auto">
              Dedicated teams for every major business district in Dubai with quick turnaround.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {['Dubai Marina', 'DIFC', 'Business Bay', 'Downtown Dubai', 'JLT', 'Silicon Oasis'].map((area) => (
              <Link
                key={area}
                href={`/dubai/areas/${area.toLowerCase().replace(/\s+/g, '-')}`}
                className="card p-4 text-center group hover:border-brand-500/50 transition-all"
              >
                <h3 className="text-sm font-semibold text-navy-900 group-hover:text-brand-500 transition-colors">{area}</h3>
                <p className="text-navy-400 text-xs mt-0.5">Office blinds & curtains</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Dubai */}
      <section className="section bg-deep-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label">
                <span>Why Choose Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                The Same Trusted Quality.{' '}
                <span className="text-brand-500">Now in Dubai.</span>
              </h2>
              <p className="text-navy-500 mb-6 leading-relaxed">
                With 15+ years of experience serving Abu Dhabi&apos;s premium villas, hotels, and 
                commercial projects, we&apos;ve expanded our office division to Dubai. 
                Same quality, same team, same warranty — now covering both cities.
              </p>
              <ul className="space-y-3">
                {[
                  '15+ years of curtain and blinds expertise',
                  'Certified installation team for commercial buildings',
                  '5-year warranty on all products and installation',
                  'Free site survey and measurement',
                  'Same Abu Dhabi quality — now in Dubai',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-navy-700 text-sm">
                    <span className="w-5 h-5 rounded-full bg-brand-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-navy-900 p-8 md:p-10">
              <div className="text-brand-500 text-4xl font-bold mb-2">15+</div>
              <div className="text-white text-lg font-semibold mb-1">Years of Excellence</div>
              <div className="text-deep-300 text-sm mb-6">Abu Dhabi&apos;s trusted curtain & blinds specialist, now serving Dubai</div>
              <Link href="/estimate" className="btn-primary">
                              Get Project Quote
                            </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="card p-10 md:p-14 text-center border-2 border-brand-500/20 max-w-3xl mx-auto">
            <div className="section-label justify-center">
              <span>Ready to Start?</span>
            </div>
            <h2 className="text-3xl font-bold text-navy-900 mb-3">
              Get a Commercial Quote in 24 Hours
            </h2>
            <p className="text-navy-500 max-w-lg mx-auto mb-8">
              Send us your window schedule or use our instant calculator. 
              A dedicated project manager will handle the rest.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/estimate" className="btn-primary">
                Get Instant Quote
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/contact" className="btn-secondary">
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}