import Link from 'next/link';
import OptimizedProductImage from './OptimizedProductImage';
import { getProductMainImage } from '@/src/data/product-images';
import { PRODUCTS_SEED } from '@/src/data/products';

interface ProductCardProps {
  slug: string;
  name: string;
  tagline: string;
  desc: string;
  icon: React.ReactNode;
  index: number;
  showImage?: boolean;
  gradient?: string;
}

export default function ProductCard({ slug, name, tagline, desc, icon, index, showImage = true }: ProductCardProps) {
  const delay = (index % 4) * 100;
  const image = showImage ? getProductMainImage(slug) : null;
  const productData = PRODUCTS_SEED.find(p => p.slug === slug);

  return (
    <Link
      href={`/products/${slug}`}
      className="card group flex flex-col overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Product Image or Fallback */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-deep-50">
        {image ? (
          <OptimizedProductImage
            src={image.src}
            alt={image.alt}
            fill
            className="group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-navy-900 text-4xl opacity-80 bg-brand-50">
            {icon}
          </div>
        )}
        {/* Softer overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />

        {/* Tagline badge */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-white/80 border border-deep-200">
          <span className="text-navy-900 text-[10px] font-medium">{tagline}</span>
        </div>

        {/* Price badge */}
        {productData && (
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-brand-500 border border-brand-400">
            <span className="text-navy-900 text-[10px] font-bold">
              From AED {productData.base_price_per_sqm}/m²
            </span>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-navy-900 font-semibold text-base mb-1 group-hover:text-brand-500 transition-colors">
          {name}
        </h3>
        <p className="text-navy-500 text-xs leading-relaxed flex-1">{desc}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-brand-500 text-xs font-medium group-hover:gap-2 transition-all flex items-center gap-1">
            View Details
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
          {productData && (
            <span className="text-navy-400 text-[10px]">
              {productData.models.length} options
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}