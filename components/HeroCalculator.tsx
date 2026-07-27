'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { PRODUCTS_SEED } from '@/src/data/products';
import { formatAED } from '@/lib/pricing';
import OptimizedProductImage from './OptimizedProductImage';
import { getProductMainImage } from '@/src/data/product-images';

/**
 * Inline hero quote calculator — gives instant pricing on the homepage.
 * Simple version: blind type + width + height + material → instant estimate.
 */
export default function HeroCalculator() {
  const [productSlug, setProductSlug] = useState('');
  const [width, setWidth] = useState(150);
  const [height, setHeight] = useState(150);
  const [modelSlug, setModelSlug] = useState('');
  const [quantity, setQuantity] = useState(1);

  const product = PRODUCTS_SEED.find(p => p.slug === productSlug);
  const model = product?.models.find(m => m.slug === modelSlug);

  const estimate = useMemo(() => {
    if (!product) return null;
    const area_sqm = (width / 100) * (height / 100);
    const basePrice = area_sqm * product.base_price_per_sqm;
    const modelAdjust = model
      ? model.price_modifier_type === 'percentage'
        ? basePrice * (model.price_modifier / 100)
        : model.price_modifier * area_sqm
      : 0;
    const subtotal = (basePrice + modelAdjust) * quantity;
    const vat = subtotal * 0.05;
    const total = subtotal + vat;
    const pricePerSqm = product.base_price_per_sqm + (model
      ? model.price_modifier_type === 'percentage'
        ? product.base_price_per_sqm * (model.price_modifier / 100)
        : model.price_modifier
      : 0);

    return {
      area_sqm: (area_sqm * quantity),
      pricePerSqm,
      subtotal,
      vat,
      total,
      modelName: model?.name || 'Standard',
    };
  }, [product, model, width, height, quantity]);

  const mainImage = productSlug ? getProductMainImage(productSlug) : null;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm">
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {/* Left: Product Preview */}
        <div className="lg:col-span-2 relative min-h-[280px] lg:min-h-[400px] bg-white/[0.02] overflow-hidden">
          {mainImage ? (
            <OptimizedProductImage
              src={mainImage.src}
              alt={mainImage.alt}
              fill
              className="opacity-90"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-deep-500">
                <svg className="w-16 h-16 mx-auto mb-3 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                </svg>
                <span className="text-xs">Select a blind type</span>
              </div>
            </div>
          )}
          {/* Price badge overlay */}
          {estimate && (
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass border border-brand-500/20">
              <div className="flex items-baseline justify-between">
                <span className="text-deep-400 text-xs">Estimated price</span>
                <span className="text-brand-400 font-bold text-lg">
                  {formatAED(estimate.total)}
                </span>
              </div>
              <div className="text-deep-500 text-[10px] mt-1">
                {estimate.area_sqm.toFixed(2)} m² × AED {Math.round(estimate.pricePerSqm)}/m² × {quantity} unit(s) + 5% VAT
              </div>
            </div>
          )}
        </div>

        {/* Right: Calculator Form */}
        <div className="lg:col-span-3 p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-deep-300 text-xs font-medium uppercase tracking-wider">
              Instant Price Calculator
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Calculate Your Price
          </h2>
          <p className="text-deep-400 text-sm mb-6">
            Select your blind type and enter dimensions for an instant estimate. Free site visit included.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Blind Type */}
            <div className="sm:col-span-2">
              <label className="label">Blind Type</label>
              <select
                value={productSlug}
                onChange={e => { setProductSlug(e.target.value); setModelSlug(''); }}
                className="input-field"
              >
                <option value="">Choose your blind type...</option>
                {PRODUCTS_SEED.map(p => (
                  <option key={p.slug} value={p.slug}>
                    {p.name} — from {formatAED(p.base_price_per_sqm)}/m²
                  </option>
                ))}
              </select>
            </div>

            {/* Width */}
            <div>
              <label className="label">
                Width (cm)
                <span className="text-deep-500 font-normal ml-1">50–300</span>
              </label>
              <div className="relative">
                <input
                  type="number"
                  min={50}
                  max={300}
                  value={width}
                  onChange={e => setWidth(Math.min(300, Math.max(50, +e.target.value || 50)))}
                  className="input-field !pr-20"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-deep-500 text-xs">
                  {(width / 100).toFixed(2)}m
                </span>
              </div>
            </div>

            {/* Height */}
            <div>
              <label className="label">
                Height (cm)
                <span className="text-deep-500 font-normal ml-1">50–300</span>
              </label>
              <div className="relative">
                <input
                  type="number"
                  min={50}
                  max={300}
                  value={height}
                  onChange={e => setHeight(Math.min(300, Math.max(50, +e.target.value || 50)))}
                  className="input-field !pr-20"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-deep-500 text-xs">
                  {(height / 100).toFixed(2)}m
                </span>
              </div>
            </div>

            {/* Model/Fabric */}
            {product && (
              <div>
                <label className="label">Material / Model</label>
                <select
                  value={modelSlug}
                  onChange={e => setModelSlug(e.target.value)}
                  className="input-field"
                >
                  <option value="">Standard</option>
                  {product.models.map(m => (
                    <option key={m.slug} value={m.slug}>
                      {m.name} ({m.material_grade} Grade)
                      {m.price_modifier > 0 ? ` +${m.price_modifier}%` : m.price_modifier < 0 ? ` ${m.price_modifier}%` : ''}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Quantity */}
            <div>
              <label className="label">Quantity</label>
              <input
                type="number"
                min={1}
                max={100}
                value={quantity}
                onChange={e => setQuantity(Math.max(1, +e.target.value || 1))}
                className="input-field"
              />
            </div>
          </div>

          {/* Price Breakdown */}
          {estimate && (
            <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-brand-500/10 to-gold-500/5 border border-brand-500/10">
              <div className="grid grid-cols-2 gap-y-2 text-sm">
                <span className="text-deep-300">Area</span>
                <span className="text-white text-right">{estimate.area_sqm.toFixed(2)} m²</span>

                <span className="text-deep-300">Rate</span>
                <span className="text-white text-right">{formatAED(estimate.pricePerSqm)}/m²</span>

                <span className="text-deep-300">Material</span>
                <span className="text-white text-right">{estimate.modelName}</span>

                <span className="text-deep-300">Subtotal</span>
                <span className="text-white text-right">{formatAED(estimate.subtotal)}</span>

                <span className="text-deep-300">VAT (5%)</span>
                <span className="text-white text-right">{formatAED(estimate.vat)}</span>

                <div className="col-span-2 border-t border-white/10 my-1" />

                <span className="text-white font-bold">Estimated Total</span>
                <span className="text-brand-400 font-bold text-right text-lg">{formatAED(estimate.total)}</span>
              </div>

              <div className="mt-3 p-2 rounded-lg bg-amber-500/10 border border-amber-500/10">
                <p className="text-amber-400/80 text-xs flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Preliminary estimate. Final price confirmed after free on-site measurement.
                </p>
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href={productSlug ? `/estimate?product=${productSlug}&w=${width}&h=${height}` : '/estimate'}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 text-white font-bold text-sm hover:translate-y-[-2px] transition-all shadow-xl shadow-brand-500/25"
            >
              Get Detailed Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            {productSlug && (
              <Link
                href={`/products/${productSlug}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass-light text-deep-200 font-semibold text-sm hover:bg-white/10 transition-all"
              >
                View Product Details
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}