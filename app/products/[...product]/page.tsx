import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { PRODUCTS_SEED } from '@/src/data/products';
import ProductQuickQuote from '@/components/ProductQuickQuote';
import OptimizedProductImage from '@/components/OptimizedProductImage';
import FabricSwatchPalette from '@/components/FabricSwatchPalette';
import FabricSwatchesDownload from '@/components/FabricSwatchesDownload';
import { getProductImage, getProductMainImage } from '@/src/data/product-images';
import { JsonLd, buildProductSchema, buildBreadcrumbSchema } from '@/src/data/schema';

type Props = { params: Promise<{ product: string[] }> };

function getProduct(slug: string) {
  return PRODUCTS_SEED.find((p) => p.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product } = await params;
  const slug = product?.[0];
  const productData = slug ? getProduct(slug) : undefined;
  if (!productData) return { title: 'Product Not Found' };
  return {
    title: productData.meta_title,
    description: productData.meta_description,
    alternates: { canonical: `https://curtainmakers.ae/products/${productData.slug}` },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { product } = await params;
  const slug = product?.[0];
  if (!slug) notFound();

  const productData = getProduct(slug);
  if (!productData) notFound();

  const mainImage = getProductMainImage(slug);
  const productImages = getProductImage(slug);

  const productSchema = buildProductSchema({
    name: productData.name,
    description: productData.short_description,
    slug: productData.slug,
    priceAed: productData.base_price_per_sqm,
    category: productData.category,
  });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: 'https://curtainmakers.ae' },
    { name: 'Products', url: 'https://curtainmakers.ae/products' },
    { name: productData.name, url: `https://curtainmakers.ae/products/${productData.slug}` },
  ]);

  return (
    <div style={{ backgroundColor: 'var(--color-navy-900)' }}>
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />

      <section className="pt-24 pb-4">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-sm text-deep-400">
            <Link href="/" className="hover:text-brand-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-brand-400 transition-colors">Products</Link>
            <span>/</span>
            <span className="text-deep-200">{productData.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Hero */}
      <section className="pb-10">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/5">
                {mainImage ? (
                  <OptimizedProductImage
                    src={mainImage.src}
                    alt={mainImage.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg from-brand-500/10 via-navy-500/5 to-deep-950 flex items-center justify-center">
                    <div className="text-center p-10">
                      <svg className="w-16 h-16 text-deep-600 mx-auto mb-3 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                      </svg>
                      <p className="text-deep-500 text-sm">Product image coming soon</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Image Gallery Thumbnails */}
              {productImages && productImages.gallery.length > 0 && (
                <div className="flex gap-2 mt-3">
                  {productImages.gallery.map((img, i) => (
                    <div key={i} className="w-16 h-16 rounded-xl overflow-hidden border border-white/5 hover:border-brand-500/50 transition-all cursor-pointer">
                      <OptimizedProductImage
                        src={img.src}
                        alt={img.alt}
                        width={64}
                        height={64}
                        className="hover:scale-110 transition-transform"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Price Badge */}
              <div className="absolute top-4 right-4 px-4 py-2 rounded-xl glass border border-brand-500/20">
                <span className="text-deep-400 text-xs">From</span>
                <p className="text-brand-400 font-bold text-lg">
                  AED {productData.base_price_per_sqm}
                  <span className="text-xs font-normal text-deep-400">/m²</span>
                </p>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
                {productData.category.replace('-', ' ')}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">{productData.name}</h1>
              <p className="text-deep-300 text-base leading-relaxed mb-6">{productData.short_description}</p>

              {/* Specifications Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {Object.entries(productData.specifications).slice(0, 6).map(([key, value]) => (
                  <div key={key} className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-deep-500 text-xs block">{key}</span>
                    <span className="text-white text-sm font-medium">{String(value)}</span>
                  </div>
                ))}
              </div>

              {/* Fabric Swatches */}
                            <div className="mb-6">
                              <FabricSwatchPalette productSlug={slug} />
                            </div>

                            {/* Fabric Swatches PDF Download */}
                            <div className="mb-6 no-print">
                              <FabricSwatchesDownload />
                            </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/estimate"
                  className="flex-1 text-center px-6 py-3.5 rounded-xl bg from-brand-600 to-brand-500 text-white font-semibold hover:translate-y-[-2px] transition-all"
                >
                  Get Free Quote
                </Link>
                <Link
                  href="/contact"
                  className="flex-1 text-center px-6 py-3.5 rounded-xl glass text-deep-100 font-semibold hover:bg-white/10 hover:translate-y-[-2px] transition-all"
                >
                  Book Site Visit
                </Link>
              </div>
            </div>

            {/* Quick Quote — Desktop sidebar */}
            <div className="hidden lg:block">
              <ProductQuickQuote slug={productData.slug} />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="pb-10">
        <div className="container-wide max-w-4xl">
          <div className="card p-8">
            <h2 className="text-xl font-bold text-white mb-4">About {productData.name}</h2>
            <div className="text-deep-300 text-sm leading-relaxed whitespace-pre-line">
              {productData.description}
            </div>
          </div>
        </div>
      </section>

      {/* Available Models */}
      <section className="pb-10">
        <div className="container-wide max-w-4xl">
          <h2 className="text-xl font-bold text-white mb-6">Available Models & Materials</h2>
          <div className="space-y-3">
            {productData.models.map((model, i) => {
              const swatch = getProductImage(slug);
              return (
                <div
                  key={i}
                  className="card p-5 flex items-center gap-4 group hover:border-brand-500/30 transition-all"
                >
                  {/* Swatch Indicator */}
                  <div
                    className="w-10 h-10 rounded-xl flex-shrink-0 border border-white/10"
                    style={{
                      background: swatch?.swatch || '#333',
                    }}
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-white font-semibold text-sm group-hover:text-brand-400 transition-colors">
                        {model.name}
                      </h3>
                      {model.material_grade && (
                        <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                          model.material_grade === 'A+'
                            ? 'bg-gold-500/20 text-gold-400'
                            : model.material_grade === 'B'
                              ? 'bg-deep-600/30 text-deep-300'
                              : 'bg-brand-500/10 text-brand-400'
                        }`}>
                          Grade {model.material_grade}
                        </span>
                      )}
                    </div>
                    <p className="text-deep-400 text-xs mt-0.5">{model.description}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-brand-400 font-semibold text-sm">
                      {model.price_modifier > 0
                        ? `+${model.price_modifier}%`
                        : model.price_modifier < 0
                          ? `${model.price_modifier}%`
                          : 'Base price'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="pb-10">
        <div className="container-wide max-w-4xl">
          <h2 className="text-xl font-bold text-white mb-6">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {productData.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-deep-200 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="pb-20">
        <div className="container-wide max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 card text-center">
            <div className="absolute inset-0 bg-navy-900" />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-3">
                Ready to Order {productData.name}?
              </h2>
              <p className="text-deep-300 mb-6 max-w-md mx-auto text-sm">
                Get your free no-obligation quote today. We&apos;ll respond within 24 hours.
              </p>
              <Link
                href="/estimate"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg from-brand-600 to-brand-500 text-white font-bold hover:translate-y-[-2px] transition-all"
              >
                Get Free Quote
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}