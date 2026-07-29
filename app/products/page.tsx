import Link from 'next/link';
import type { Metadata } from 'next';
import { PRODUCTS_SEED } from '@/src/data/products';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'All Products | ShadeMakers',
  description: 'Browse our complete range of premium commercial blinds for offices in Dubai. Roller blinds, Venetian blinds, Smart motorized blinds, Zebra blinds and more.',
  openGraph: {
    title: 'ShadeMakers — Complete Product Range',
    description: 'Browse all commercial blind types for your Dubai office.',
  },
};

const CATEGORY_GRADIENTS: Record<string, string> = {
  roller: 'from-blue-600 to-purple-600',
  venetian: 'from-amber-600 to-orange-600',
  vertical: 'from-emerald-600 to-green-600',
  smart: 'from-cyan-600 to-teal-600',
  zebra: 'from-rose-600 to-pink-600',
  roman: 'from-violet-600 to-indigo-600',
  'aluminium-venetian': 'from-slate-600 to-zinc-600',
  pleated: 'from-fuchsia-600 to-purple-600',
  panel: 'from-neutral-600 to-stone-600',
  skylight: 'from-sky-600 to-blue-600',
  flyscreen: 'from-lime-600 to-emerald-600',
};

const CATEGORY_ICONS: Record<string, string> = {
  roller: '▤',
  venetian: '▦',
  vertical: '∥',
  smart: '⚡',
  zebra: '≡',
  roman: '⌺',
  'aluminium-venetian': '▭',
  pleated: '≋',
  panel: '▯',
  skylight: '◈',
  flyscreen: '⊞',
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px]" />
        <div className="container-wide relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Complete Range of{" "}
            <span className="text-brand-500">Commercial Blinds</span>
          </h1>
          <p className="text-deep-300 text-lg max-w-2xl">
            Every blind type your Dubai office needs — from budget-friendly essentials to
            premium smart solutions. All made-to-measure and professionally installed.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="pb-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {PRODUCTS_SEED.map((product, i) => {
              const gradient = CATEGORY_GRADIENTS[product.category] || 'from-brand-600 to-brand-500';
              const icon = CATEGORY_ICONS[product.category] || '◆';
              return (
                <ProductCard
                  key={product.slug}
                  slug={product.slug}
                  name={product.name}
                  tagline={`From AED ${product.base_price_per_sqm}/m²`}
                  desc={product.short_description}
                  gradient={gradient}
                  icon={icon}
                  index={i}
                  showImage={true}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container-wide">
          <div className="relative overflow-hidden rounded-3xl p-10 md:p-14 card text-center">
            <div className="absolute inset-0 bg-navy-900" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Not Sure Which Blind Is Right for Your Office?
              </h2>
              <p className="text-deep-300 mb-6 max-w-lg mx-auto">
                Our team will help you choose the perfect blinds for your space.
                Free consultation and site visit.
              </p>
              <Link
                href="/estimate"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg from-brand-600 to-brand-500 text-white font-bold hover:translate-y-[-2px] transition-all"
              >
                Get Expert Advice
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}