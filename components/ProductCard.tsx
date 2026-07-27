import Link from 'next/link';
import OptimizedProductImage from './OptimizedProductImage';
import { getProductMainImage } from '@/src/data/product-images';
import { PRODUCTS_SEED } from '@/src/data/products';

interface ProductCardProps {
  slug: string;
  name: string;
  tagline: string;
  desc: string;
  gradient: string;
  icon: string;
  index: number;
  showImage?: boolean;
}

export default function ProductCard({ slug, name, tagline, desc, gradient, icon, index, showImage = true }: ProductCardProps) {
  const delay = (index % 4) * 100;
  const image = showImage ? getProductMainImage(slug) : null;
  const productData = PRODUCTS_SEED.find(p => p.slug === slug);

  return (
    <Link
      href={`/products/${slug}`}
      className="card group flex flex-col overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Product Image or Gradient Fallback */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        {image ? (
          <OptimizedProductImage
            src={image.src}
            alt={image.alt}
            fill
            className="group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-4xl opacity-80 group-hover:opacity-100 transition-opacity`}>
            {icon}
          </div>
        )}
        {/* Overlay gradient at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-deep-950/80 to-transparent" />

        {/* Tagline badge */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10">
          <span className="text-white text-[10px] font-medium">{tagline}</span>
        </div>

        {/* Price badge */}
        {productData && (
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-brand-500/90 backdrop-blur-sm border border-brand-400/30">
            <span className="text-white text-[10px] font-bold">
              From AED {productData.base_price_per_sqm}/m²
            </span>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-white font-semibold text-base mb-1 group-hover:text-brand-400 transition-colors">
          {name}
        </h3>
        <p className="text-deep-400 text-xs leading-relaxed flex-1">{desc}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-brand-400 text-xs font-medium group-hover:gap-2 transition-all flex items-center gap-1">
            View Details
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
          {productData && (
            <span className="text-deep-500 text-[10px]">
              {productData.models.length} options
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}