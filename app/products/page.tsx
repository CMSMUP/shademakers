import Link from 'next/link';
import type { Metadata } from 'next';
import { PRODUCTS_SEED } from '@/src/data/products';
import ProductCard from '@/components/ProductCard';
import {
  IconRoller, IconVenetian, IconVertical, IconDefault,
  IconZebra, IconRoman, IconAluminium, IconPleated,
  IconPanel, IconSkylight, IconFlyscreen,
} from '@/src/data/icons';

export const metadata: Metadata = {
  title: 'All Products — Curtains & Blinds | Curtain Makers',
  description: 'Browse our complete range of premium curtains and blinds for homes and businesses in Abu Dhabi and Dubai. Roller blinds, curtains, Venetian blinds, smart motorized blinds, zebra blinds and more.',
  openGraph: {
    title: 'Curtain Makers — Complete Curtain & Blind Range',
    description: 'Browse all curtain and blind types for your Abu Dhabi or Dubai property.',
  },
  alternates: {
    canonical: 'https://curtainmakers.ae/products',
  },
};

const CATEGORY_ICONS: Record<string, React.FC<{ size?: number; className?: string }>> = {
  roller: IconRoller,
  venetian: IconVenetian,
  vertical: IconVertical,
  smart: IconDefault,
  zebra: IconZebra,
  roman: IconRoman,
  'aluminium-venetian': IconAluminium,
  pleated: IconPleated,
  panel: IconPanel,
  skylight: IconSkylight,
  flyscreen: IconFlyscreen,
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 pt-24 pb-16">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-sm text-deep-300 mb-6">
            <Link href="/" className="hover:text-brand-500">Home</Link>
            <span>/</span>
            <span className="text-white">Products</span>
          </nav>
          <div className="max-w-2xl">
            <div className="section-label">
              <span>Curtains & Blinds</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Complete Range of<br />
              <span className="text-brand-500">Curtains & Blinds</span>
            </h1>
            <p className="text-deep-300 text-lg leading-relaxed max-w-2xl">
              Premium custom curtains, blinds, and motorized systems for
              villas in Abu Dhabi, offices in Dubai, and businesses across the UAE.
              All made-to-measure and professionally installed.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="section bg-deep-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {PRODUCTS_SEED.map((product, i) => {
              const Icon = CATEGORY_ICONS[product.category] || IconDefault;
              return (
                <ProductCard
                  key={product.slug}
                  slug={product.slug}
                  name={product.name}
                  tagline={`From AED ${product.base_price_per_sqm}/m²`}
                  desc={product.short_description}
                  icon={<Icon size={32} className="text-brand-500" />}
                  index={i}
                  showImage={true}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="card-dark p-10 md:p-14 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Not Sure Which Curtain or Blind Is Right for You?
            </h2>
            <p className="text-deep-300 mb-6 max-w-md mx-auto">
              Our team will help you choose the perfect solution for your space.
              Free consultation and site visit available.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 btn-primary"
            >
              Get Expert Advice
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
