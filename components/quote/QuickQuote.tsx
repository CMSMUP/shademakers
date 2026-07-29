'use client';

import { useState } from 'react';
import { PRODUCTS_SEED } from '@/src/data/products';
import { formatAED, cmToM } from '@/lib/pricing';
import Link from 'next/link';

interface QuickQuoteProps {
  defaultProductSlug?: string;
  compact?: boolean;
}

export default function QuickQuote({ defaultProductSlug, compact = false }: QuickQuoteProps) {
  const [width, setWidth] = useState(120);
  const [height, setHeight] = useState(150);
  const [qty, setQty] = useState(1);
  const [productSlug, setProductSlug] = useState(defaultProductSlug || '');

  const product = productSlug ? PRODUCTS_SEED.find(p => p.slug === productSlug) : null;
  const area_sqm = ((width / 100) * (height / 100));
  const subtotal = product ? area_sqm * product.base_price_per_sqm * qty : 0;
  const vat = subtotal * 0.05;
  const total = subtotal + vat;

  return (
    <div className={`${compact ? 'card p-4' : 'card p-6'}`}>
      <h3 className={`text-white font-bold ${compact ? 'text-sm mb-3' : 'text-lg mb-4'}`}>
        ⚡ Quick Quote
      </h3>

      <div className="space-y-3">
        {/* Product selector (shown when no default) */}
        {!defaultProductSlug && (
          <div>
            <label className="label">Blind Type</label>
            <select
              value={productSlug}
              onChange={e => setProductSlug(e.target.value)}
              className="input-field"
            >
              <option value="">Select...</option>
              {PRODUCTS_SEED.map(p => (
                <option key={p.slug} value={p.slug}>{p.name}</option>
              ))}
            </select>
          </div>
        )}

        {/* Width slider */}
        <div>
          <label className="label">Width: {width} cm ({cmToM(width)}m)</label>
          <input
            type="range"
            min={50}
            max={300}
            value={width}
            onChange={e => setWidth(+e.target.value)}
            className="w-full accent-brand-500"
          />
          <div className="flex justify-between text-[10px] text-deep-500">
            <span>50cm</span>
            <span>300cm</span>
          </div>
        </div>

        {/* Height slider */}
        <div>
          <label className="label">Height: {height} cm ({cmToM(height)}m)</label>
          <input
            type="range"
            min={50}
            max={300}
            value={height}
            onChange={e => setHeight(+e.target.value)}
            className="w-full accent-brand-500"
          />
          <div className="flex justify-between text-[10px] text-deep-500">
            <span>50cm</span>
            <span>300cm</span>
          </div>
        </div>

        {/* Quantity */}
        <div className="flex items-center justify-between">
          <label className="label mb-0">Quantity</label>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setQty(Math.max(1, qty - 1))}
              className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all"
            >
              −
            </button>
            <span className="text-white font-semibold text-sm w-6 text-center">{qty}</span>
            <button
              onClick={() => setQty(qty + 1)}
              className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all"
            >
              +
            </button>
          </div>
        </div>

        {/* Area display */}
        <div className="text-deep-400 text-xs">
          Area: {(area_sqm * qty).toFixed(2)} m² × {qty} unit(s)
        </div>
      </div>

      {/* Pricing */}
      {product && (
        <div className="mt-4 pt-4 border-t border-white/10 space-y-1.5 text-sm">
          <div className="flex justify-between text-deep-300">
            <span>Subtotal</span>
            <span>{formatAED(subtotal)}</span>
          </div>
          <div className="flex justify-between text-deep-300">
            <span>VAT (5%)</span>
            <span>{formatAED(vat)}</span>
          </div>
          <div className="flex justify-between text-white font-bold text-lg pt-2 border-t border-white/10">
            <span>Est. Total</span>
            <span className="text-brand-400">{formatAED(total)}</span>
          </div>

          <div className="mt-3">
            <Link
              href={`/estimate?product=${productSlug}&w=${width}&h=${height}&qty=${qty}`}
              className="block w-full text-center py-3 rounded-xl bg from-brand-600 to-brand-500 text-white font-semibold text-sm hover:translate-y-[-2px] transition-all"
            >
              Get Detailed Quote
            </Link>
          </div>
        </div>
      )}

      {!product && (
        <p className="text-deep-500 text-xs mt-3 text-center">
          Select a blind type to see pricing
        </p>
      )}
    </div>
  );
}