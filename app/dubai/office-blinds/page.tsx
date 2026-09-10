import type { Metadata } from 'next';
import Link from 'next/link';
import { PRODUCTS_SEED } from '@/src/data/products';
import { JsonLd, buildFaqSchema, buildLocalBusinessSchema } from '@/src/data/schema';

export const metadata: Metadata = {
  title: 'Office Blinds Dubai | Curtain Makers — Commercial Blinds',
  description: 'Premium office blinds in Dubai for commercial spaces. Roller, vertical, zebra, venetian, and smart motorized blinds. Free quote & site survey for Dubai offices.',
  openGraph: {
    title: 'Office Blinds Dubai — Curtain Makers',
    description: 'Premium commercial blinds for Dubai offices. Free quote & installation.',
  },
  alternates: {
    canonical: 'https://curtainmakers.ae/dubai/office-blinds/',
  },
};

const DUBAI_OFFICE_FAQS = [
  { question: 'How much do office blinds cost in Dubai?', answer: 'Office blinds in Dubai start from AED 65/m² for vertical blinds, AED 75/m² for aluminium venetian, AED 85/m² for roller blinds, and AED 110/m² for zebra blinds. Motorized options start from AED 185/m². Volume discounts are available for commercial projects over 100 windows.' },
  { question: 'What type of blinds are best for offices in Dubai?', answer: 'Roller blinds are the most popular for Dubai offices due to their clean, minimal look and sun protection. Sunscreen roller blinds reduce heat gain while maintaining outward visibility — ideal for open-plan offices. For executive offices, wooden venetian blinds add prestige.' },
  { question: 'Do you offer free site surveys for office blinds?', answer: 'Yes, we offer a free on-site survey across all Dubai districts including Dubai Marina, DIFC, Business Bay, Downtown Dubai, and JLT. Our team takes precise measurements and recommends the right solution per facade orientation.' },
  { question: 'How long does office blind installation take in Dubai?', answer: 'For standard commercial projects, installation typically takes 7–14 days from order confirmation. Large fit-out projects with 100+ windows are scheduled in phases to minimize disruption to your operations.' },
  { question: 'Do office blinds come with a warranty?', answer: 'Yes, all our commercial blinds include a 5-year warranty covering product and installation. Annual maintenance contracts are also available for larger office portfolios.' },
];

const COMMERCIAL_PRODUCTS = PRODUCTS_SEED.filter(p =>
  ['roller-blinds', 'vertical-blinds', 'aluminium-venetian-blinds', 'zebra-blinds', 'smart-blinds', 'wooden-venetian-blinds', 'panel-blinds', 'pleated-blinds'].includes(p.slug)
);

export default function DubaiOfficeBlindsPage() {
  return (
    <>
      <JsonLd data={buildFaqSchema(DUBAI_OFFICE_FAQS)} />
      <JsonLd data={buildLocalBusinessSchema({ areaServed: ['Dubai'] })} />
      {/* HERO */}
      <section className="relative pt-24 pb-16 bg-navy-900">
        <div className="container-wide">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-500 text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
            Dubai Commercial Office Division
          </div>
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Commercial Office Blinds{' '}
              <span className="text-brand-500">in Dubai</span>
            </h1>
            <p className="text-deep-300 text-lg mb-8 max-w-xl">
              From roller blinds to smart motorized systems — we supply and install 
              premium window coverings for offices, towers, and commercial projects across Dubai.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/estimate" className="btn-primary">
                              Get a Free Project Quote
              </Link>
              <Link href="/dubai/office-curtains" className="btn-secondary !border-white !text-white">
                View Office Curtains
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section bg-deep-50">
        <div className="container-wide">
          <div className="text-center mb-10">
            <div className="section-label justify-center">
              <span>Blind Types</span>
            </div>
            <h2 className="text-3xl font-bold text-navy-900 mb-3">
              Office Blind Types in Dubai
            </h2>
            <p className="text-navy-500 max-w-2xl mx-auto">
              Every blind type your Dubai office needs — from budget-friendly essentials to premium smart solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {['roller-blinds', 'vertical-blinds', 'aluminium-venetian-blinds', 'zebra-blinds', 'smart-blinds', 'wooden-venetian-blinds', 'panel-blinds', 'pleated-blinds'].map((slug) => {
              const p = PRODUCTS_SEED.find(pr => pr.slug === slug)!;
              return (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="card p-5 group hover:border-brand-500/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-4 group-hover:bg-brand-500/20 transition-colors">
                    <div className="w-5 h-5 bg-brand-500 rounded-sm" />
                  </div>
                  <h3 className="text-navy-900 font-semibold text-base mb-1 group-hover:text-brand-500 transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-navy-500 text-xs leading-relaxed mb-3">{p.short_description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-brand-500 font-semibold text-sm">
                      From AED {p.base_price_per_sqm}/m²
                    </span>
                    <span className="text-navy-400 text-xs group-hover:text-brand-500 transition-colors">
                      Details →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="text-center mb-10">
            <div className="section-label justify-center">
              <span>Who We Serve</span>
            </div>
            <h2 className="text-3xl font-bold text-navy-900 mb-3">
              Dubai Commercial Projects
            </h2>
            <p className="text-navy-500 max-w-xl mx-auto">
              We work with facility managers, fit-out contractors, and business owners across Dubai.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Corporate Offices', desc: 'Single offices to HQ fit-outs' },
              { label: 'Fit-Out Contractors', desc: 'BOQ supply & installation' },
              { label: 'Co-Working Spaces', desc: 'High-volume consistent specs' },
              { label: 'Hotels & Hospitality', desc: 'Curtains & blinds for guest rooms' },
            ].map((t) => (
              <div key={t.label} className="card p-5 text-center group hover:border-brand-500/50 transition-all">
                <h3 className="text-navy-900 font-semibold text-sm group-hover:text-brand-500 transition-colors">{t.label}</h3>
                <p className="text-navy-400 text-xs mt-1">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-deep-50">
        <div className="container-wide">
          <div className="card-dark p-10 md:p-14 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-500 mb-3">
              Get Started
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">
              Need Blinds for Your Dubai Office?
            </h2>
            <p className="text-deep-300 max-w-lg mx-auto mb-8">
              Get a free project quote within 24 hours. Site survey included.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/estimate" className="btn-primary">
                              Get a Free Project Quote
              </Link>
              <Link href="/contact" className="btn-secondary !border-white !text-white">
                Contact Our Dubai Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}