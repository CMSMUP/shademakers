import type { Metadata } from 'next';
import Link from 'next/link';
import { PRODUCTS_SEED } from '@/src/data/products';

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

const COMMERCIAL_PRODUCTS = PRODUCTS_SEED.filter(p =>
  ['roller-blinds', 'vertical-blinds', 'aluminium-venetian-blinds', 'zebra-blinds', 'smart-blinds', 'wooden-venetian-blinds', 'panel-blinds', 'pleated-blinds'].includes(p.slug)
);

export default function DubaiOfficeBlindsPage() {
  return (
    <>
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
              <Link href="/dubai/quote" className="btn-primary">
                Get Project Quote
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
            {COMMERCIAL_PRODUCTS.map((p) => (
              <Link
                key={p.slug}
                href={`/dubai/office-blinds/${p.slug}`}
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
            ))}
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
              <Link href="/dubai/quote" className="btn-primary">
                Request Quote
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