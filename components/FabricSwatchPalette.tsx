'use client';

import { useState } from 'react';
import { getFabricSwatchesForProduct, type FabricSwatch } from '@/src/data/fabric-swatches';

interface FabricSwatchPaletteProps {
  productSlug: string;
  selectedSlug?: string;
  onSelect?: (swatch: FabricSwatch) => void;
  compact?: boolean;
}

/**
 * Interactive fabric swatch palette for product pages.
 * Shows material swatches as colored circles with tooltip details.
 * Supports compact mode for cards and expanded mode for detail pages.
 */
export default function FabricSwatchPalette({
  productSlug,
  selectedSlug,
  onSelect,
  compact = false,
}: FabricSwatchPaletteProps) {
  const swatches = getFabricSwatchesForProduct(productSlug);
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  if (swatches.length === 0) return null;

  return (
    <div className={compact ? '' : 'card p-5'}>
      {!compact && (
        <h3 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
          <svg className="w-4 h-4 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
          Available Fabrics & Materials
        </h3>
      )}

      <div className={`flex flex-wrap ${compact ? 'gap-2' : 'gap-3'}`}>
        {swatches.map((swatch) => {
          const isSelected = selectedSlug === swatch.slug;
          const isHovered = hoveredSlug === swatch.slug;

          return (
            <div key={swatch.slug} className="relative">
              <button
                onClick={() => onSelect?.(swatch)}
                onMouseEnter={() => setHoveredSlug(swatch.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
                className={`
                  relative rounded-xl transition-all duration-200
                  ${compact ? 'w-8 h-8' : 'w-12 h-12'}
                  ${isSelected ? 'ring-2 ring-brand-500 ring-offset-2 ring-offset-deep-950 scale-110' : 'hover:scale-110'}
                  border border-white/10 hover:border-white/20
                `}
                style={{
                  background: swatch.gradient || swatch.color,
                }}
                aria-label={swatch.name}
                title={swatch.name}
              >
                {/* Material grade badge */}
                {swatch.material_grade !== 'A' && (
                  <span className={`
                    absolute -top-1 -right-1 rounded-full text-[8px] font-bold px-1
                    ${swatch.material_grade === 'A+' ? 'bg-gold-500 text-deep-950' : 'bg-deep-600 text-deep-200'}
                  `}>
                    {swatch.material_grade}
                  </span>
                )}
              </button>

              {/* Tooltip */}
              {isHovered && !compact && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-3 rounded-xl glass border border-white/10 z-50 shadow-xl">
                  <p className="text-white text-xs font-semibold mb-1">{swatch.name}</p>
                  <p className="text-deep-400 text-[10px] leading-relaxed">{swatch.description}</p>
                  <div className="flex items-center gap-2 mt-2 text-[10px] text-deep-400">
                    <span className="px-1.5 py-0.5 rounded bg-brand-500/20 text-brand-400 font-medium">
                      {swatch.material_grade} Grade
                    </span>
                    <span>
                      {swatch.opacity_percent === 100 ? '100% Blockout' : `${swatch.opacity_percent}% Openness`}
                    </span>
                  </div>
                </div>
              )}

              {/* Label */}
              {!compact && (
                <span className="block text-[10px] text-deep-400 mt-1 text-center truncate max-w-[48px]">
                  {swatch.name.split('—')[1]?.trim() || swatch.name}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Compact label */}
      {compact && hoveredSlug && (
        <span className="text-[10px] text-deep-300 mt-1 block">
          {swatches.find(s => s.slug === hoveredSlug)?.name}
        </span>
      )}
    </div>
  );
}