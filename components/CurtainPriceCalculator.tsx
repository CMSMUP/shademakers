'use client';

import { useState, useMemo } from 'react';
import {
  CURTAIN_STYLES,
  CURTAIN_LINING,
  FABRIC_TIERS,
  FABRIC_ORIGINS,
  CURTAIN_OPERATIONS,
  calculateCurtainPrice,
  formatAED,
} from '@/src/data/curtain-pricing';

export default function CurtainPriceCalculator() {
  const [styleSlug, setStyleSlug] = useState(CURTAIN_STYLES[0].slug);
  const [liningSlug, setLiningSlug] = useState(CURTAIN_LINING[2].slug);
  const [tierSlug, setTierSlug] = useState(FABRIC_TIERS[1].slug);
  const [originSlug, setOriginSlug] = useState(FABRIC_ORIGINS[4].slug);
  const [operationSlug, setOperationSlug] = useState(CURTAIN_OPERATIONS[0].slug);
  const [width, setWidth] = useState(250);
  const [drop, setDrop] = useState(270);
  const [quantity, setQuantity] = useState(1);

  const style = CURTAIN_STYLES.find(s => s.slug === styleSlug)!;
  const lining = CURTAIN_LINING.find(l => l.slug === liningSlug)!;
  const tier = FABRIC_TIERS.find(t => t.slug === tierSlug)!;
  const origin = FABRIC_ORIGINS.find(o => o.slug === originSlug)!;
  const operation = CURTAIN_OPERATIONS.find(o => o.slug === operationSlug)!;

  const result = useMemo(() => {
    return calculateCurtainPrice({ trackWidthCm: width, dropCm: drop, quantity, style, lining, tier, origin, operation });
  }, [width, drop, quantity, style, lining, tier, origin, operation]);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-deep-200 bg-white shadow-sm">
      {/* Header */}
      <div className="px-6 py-5 border-b border-deep-200 bg-deep-50">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-brand-500" />
          <span className="text-navy-600 text-xs font-medium uppercase tracking-wider">Curtain Price Calculator</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-navy-900">
          Estimate Your Curtains
        </h2>
        <p className="text-navy-500 text-sm mt-1">
          Select style, fabric, and operation for an instant estimate. Final price confirmed after free site visit.
        </p>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
          {/* Width */}
          <div>
            <label className="label">
              Track Width (cm)
              <span className="text-deep-400 font-normal ml-1">100–600</span>
            </label>
            <input
              type="number"
              min={100}
              max={600}
              value={width}
              onChange={e => setWidth(Math.min(600, Math.max(100, +e.target.value || 100)))}
              className="input-field"
            />
            <span className="text-deep-400 text-xs mt-0.5 block">{(width / 100).toFixed(2)}m track length</span>
          </div>

          {/* Drop */}
          <div>
            <label className="label">
              Drop / Height (cm)
              <span className="text-deep-400 font-normal ml-1">100–400</span>
            </label>
            <input
              type="number"
              min={100}
              max={400}
              value={drop}
              onChange={e => setDrop(Math.min(400, Math.max(100, +e.target.value || 100)))}
              className="input-field"
            />
            <span className="text-deep-400 text-xs mt-0.5 block">{(drop / 100).toFixed(2)}m drop</span>
          </div>

          {/* Quantity */}
          <div>
            <label className="label">
              Windows / Panels
              <span className="text-deep-400 font-normal ml-1">1–50</span>
            </label>
            <input
              type="number"
              min={1}
              max={50}
              value={quantity}
              onChange={e => setQuantity(Math.max(1, Math.min(50, +e.target.value || 1)))}
              className="input-field"
            />
          </div>

          {/* Curtain Style */}
          <div className="sm:col-span-2 lg:col-span-1">
            <label className="label">Curtain Style</label>
            <select
              value={styleSlug}
              onChange={e => setStyleSlug(e.target.value)}
              className="input-field"
            >
              {CURTAIN_STYLES.map(s => (
                <option key={s.slug} value={s.slug}>
                  {s.name}
                </option>
              ))}
            </select>
            <p className="text-deep-400 text-[11px] mt-0.5">{style.description}</p>
          </div>

          {/* Fabric Tier */}
          <div>
            <label className="label">Fabric Quality Tier</label>
            <select
              value={tierSlug}
              onChange={e => setTierSlug(e.target.value)}
              className="input-field"
            >
              {FABRIC_TIERS.map(t => (
                <option key={t.slug} value={t.slug}>
                  {t.name} — {formatAED(t.basePricePerMeter)}/m
                </option>
              ))}
            </select>
            <p className="text-deep-400 text-[11px] mt-0.5">{tier.description}</p>
          </div>

          {/* Fabric Origin */}
          <div>
            <label className="label">Fabric Origin / Type</label>
            <select
              value={originSlug}
              onChange={e => setOriginSlug(e.target.value)}
              className="input-field"
            >
              {FABRIC_ORIGINS.map(o => (
                <option key={o.slug} value={o.slug}>
                  {o.name}
                </option>
              ))}
            </select>
            <p className="text-deep-400 text-[11px] mt-0.5">{origin.description}</p>
          </div>

          {/* Lining */}
          <div>
            <label className="label">Lining / Opacity</label>
            <select
              value={liningSlug}
              onChange={e => setLiningSlug(e.target.value)}
              className="input-field"
            >
              {CURTAIN_LINING.map(l => (
                <option key={l.slug} value={l.slug}>
                  {l.name} {l.priceModifierPercent > 0 ? `(+${l.priceModifierPercent}%)` : ''}
                </option>
              ))}
            </select>
            <p className="text-deep-400 text-[11px] mt-0.5">{lining.description}</p>
          </div>

          {/* Operation */}
          <div>
            <label className="label">Operation Type</label>
            <select
              value={operationSlug}
              onChange={e => setOperationSlug(e.target.value)}
              className="input-field"
            >
              {CURTAIN_OPERATIONS.map(o => (
                <option key={o.slug} value={o.slug}>
                  {o.name}
                  {o.fixedCost > 0 ? ` (+AED ${o.fixedCost})` : ''}
                </option>
              ))}
            </select>
            <p className="text-deep-400 text-[11px] mt-0.5">{operation.description}</p>
          </div>
        </div>

        {/* Price Display */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Breakdown */}
          <div className="rounded-xl border border-deep-200 p-4 bg-deep-50">
            <h3 className="text-navy-900 font-bold text-sm mb-3">Price Breakdown</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-navy-500">
                <span>Style</span>
                <span className="text-navy-900 font-medium">{style.name}</span>
              </div>
              <div className="flex justify-between text-navy-500">
                <span>Effective fabric rate</span>
                <span className="text-navy-900 font-medium">{formatAED(result.effectiveFabricPricePerMeter)}/m</span>
              </div>
              <div className="flex justify-between text-navy-500">
                <span>Fabric needed</span>
                <span className="text-navy-900 font-medium">{result.fabricWidthNeeded.toFixed(1)}m width</span>
              </div>
              <div className="border-t border-deep-200 my-2" />
              <div className="flex justify-between text-navy-500">
                <span>Fabric</span>
                <span className="text-navy-900 font-medium">{formatAED(result.fabricCost)}</span>
              </div>
              {result.liningCost > 0 && (
                <div className="flex justify-between text-navy-500">
                  <span>Lining ({lining.name})</span>
                  <span className="text-navy-900 font-medium">{formatAED(result.liningCost)}</span>
                </div>
              )}
              <div className="flex justify-between text-navy-500">
                <span>Track ({operation.name})</span>
                <span className="text-navy-900 font-medium">{formatAED(result.trackCost)}</span>
              </div>
              {result.operationFixedCost > 0 && (
                <div className="flex justify-between text-navy-500">
                  <span>Operation fixed</span>
                  <span className="text-navy-900 font-medium">{formatAED(result.operationFixedCost)}</span>
                </div>
              )}
            </div>
          </div>

          {/* Total */}
          <div className="rounded-xl border border-brand-500/30 p-5 bg-brand-50 flex flex-col justify-center">
            <p className="text-navy-500 text-xs uppercase tracking-wider font-medium mb-1">
              Estimated Total ({quantity} window{quantity > 1 ? 's' : ''})
            </p>
            <p className="text-brand-600 text-3xl sm:text-4xl font-bold">
              {formatAED(result.total)}
            </p>
            <p className="text-navy-400 text-xs mt-2">
              {result.trackWidthM.toFixed(2)}m track × {(result.dropM).toFixed(2)}m drop × {quantity} unit(s) | {style.name} | {tier.name} | {origin.name}
            </p>
            <div className="flex items-start gap-1.5 mt-3 p-2 rounded-lg bg-brand-50 border border-brand-100">
              <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-brand-700 text-xs">
                Preliminary estimate. Incl. 5% VAT. Final price confirmed after free on-site measurement & fabric selection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}