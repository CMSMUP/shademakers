import Link from 'next/link';
import type { Metadata } from 'next';
import { PRODUCTS_SEED } from '@/src/data/products';
import ProductCard from '@/components/ProductCard';
import {
  IconRoller, IconVenetian, IconVertical, IconDefault,
  IconZebra, IconRoman, IconAluminium, IconPleated,
  IconPanel, IconSkylight, IconFlyscreen,
} from '@/src/data/icons';
import { JsonLd, buildFaqSchema } from '@/src/data/schema';

const PRODUCTS_FAQS = [
  { question: 'What curtain and blind types do you offer?', answer: 'We offer 11 product types including roller blinds, roman blinds, wooden and aluminium venetian blinds, vertical blinds, zebra (day & night) blinds, smart motorized blinds, pleated blinds, panel blinds, skylight blinds, and flyscreen blinds — all made-to-measure.' },
  { question: 'Do you provide curtains as well as blinds?', answer: 'Yes. We are a full curtain and blinds specialist offering 12 curtain styles (pinch pleat, wave, pencil pleat, motorized and more) across 3,700+ fabrics, alongside our complete blinds range.' },
  { question: 'Are your prices per square meter or per meter?', answer: 'Blinds are priced per square meter (m²) and curtains per linear meter of track width. Every product page shows a "From AED X" starting price, and our online calculator gives an instant estimate for your exact dimensions.' },
];

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
      <JsonLd data={buildFaqSchema(PRODUCTS_FAQS)} />
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
