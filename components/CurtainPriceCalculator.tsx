'use client';

import { useState, useMemo } from 'react';
import {
  CURTAIN_STYLES,
  CURTAIN_TYPES,
  FABRIC_TIERS,
  FABRIC_TYPES,
  CURTAIN_OPERATIONS,
  calculateCurtainPrice,
  formatAED,
} from '@/src/data/curtain-pricing';

export default function CurtainPriceCalculator() {
  const [styleSlug, setStyleSlug] = useState(CURTAIN_STYLES[0].slug);
  const [curtainTypeSlug, setCurtainTypeSlug] = useState(CURTAIN_TYPES[1].slug);
  const [tierSlug, setTierSlug] = useState(FABRIC_TIERS[1].slug);
  const [fabricTypeSlug, setFabricTypeSlug] = useState(FABRIC_TYPES[0].slug);
  const [operationSlug, setOperationSlug] = useState(CURTAIN_OPERATIONS[0].slug);
  const [width, setWidth] = useState(250);
  const [drop, setDrop] = useState(270);
  const [showLogin, setShowLogin] = useState(false);
  const [loginData, setLoginData] = useState({ name: '', email: '', phone: '' });

  const style = CURTAIN_STYLES.find(s => s.slug === styleSlug)!;
  const curtainType = CURTAIN_TYPES.find(c => c.slug === curtainTypeSlug)!;
  const tier = FABRIC_TIERS.find(t => t.slug === tierSlug)!;
  const fabricType = FABRIC_TYPES.find(f => f.slug === fabricTypeSlug)!;
  const operation = CURTAIN_OPERATIONS.find(o => o.slug === operationSlug)!;

  const result = useMemo(() => {
    return calculateCurtainPrice({
      trackWidthCm: width, dropCm: drop, quantity: 1,
      style, curtainType, tier, fabricType, operation,
    });
  }, [width, drop, style, curtainType, tier, fabricType, operation]);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      style: styleSlug, type: curtainTypeSlug, tier: tierSlug,
      fabric: fabricTypeSlug, op: operationSlug,
      w: String(width), d: String(drop),
      name: loginData.name, email: loginData.email, phone: loginData.phone,
    });
    window.location.href = `/estimate/curtains?${params}`;
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-deep-200 bg-white shadow-sm">
      <div className="px-6 py-5 border-b border-deep-200 bg-deep-50">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-brand-500" />
          <span className="text-navy-600 text-xs font-medium uppercase tracking-wider">Curtain Price Calculator</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-navy-900">Estimate Your Curtains</h2>
        <p className="text-navy-500 text-sm mt-1">
          Select style, fabric, and options for an instant estimate. Free site visit included.
        </p>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
          {/* Width */}
          <div>
            <label className="label">Track Width (cm) <span className="text-deep-400 font-normal ml-1">100–600</span></label>
            <input type="number" min={100} max={600} value={width}
              onChange={e => setWidth(Math.min(600, Math.max(100, +e.target.value || 100)))}
              className="input-field" />
            <span className="text-deep-400 text-xs mt-0.5 block">{(width / 100).toFixed(2)}m</span>
          </div>

          {/* Drop */}
          <div>
            <label className="label">Drop / Height (cm) <span className="text-deep-400 font-normal ml-1">100–400</span></label>
            <input type="number" min={100} max={400} value={drop}
              onChange={e => setDrop(Math.min(400, Math.max(100, +e.target.value || 100)))}
              className="input-field" />
            <span className="text-deep-400 text-xs mt-0.5 block">{(drop / 100).toFixed(2)}m</span>
          </div>

          {/* Curtain Style */}
          <div>
            <label className="label">Curtain Style</label>
            <select value={styleSlug} onChange={e => setStyleSlug(e.target.value)} className="input-field">
              {CURTAIN_STYLES.map(s => (
                <option key={s.slug} value={s.slug}>{s.name}</option>
              ))}
            </select>
            <p className="text-deep-400 text-[11px] mt-0.5">{style.description}</p>
          </div>

          {/* Fabric & Accessories Price Tier */}
          <div>
            <label className="label">Fabric &amp; Accessories Price Tier</label>
            <select value={tierSlug} onChange={e => setTierSlug(e.target.value)} className="input-field">
              {FABRIC_TIERS.map(t => (
                <option key={t.slug} value={t.slug}>{t.name}</option>
              ))}
            </select>
            <p className="text-deep-400 text-[11px] mt-0.5">{tier.description}</p>
          </div>

          {/* Curtain Type */}
          <div>
            <label className="label">Curtain Type</label>
            <select value={curtainTypeSlug} onChange={e => setCurtainTypeSlug(e.target.value)} className="input-field">
              {CURTAIN_TYPES.map(c => (
                <option key={c.slug} value={c.slug}>{c.name}</option>
              ))}
            </select>
            <p className="text-deep-400 text-[11px] mt-0.5">{curtainType.description}</p>
          </div>

          {/* Fabric Type */}
          <div>
            <label className="label">Fabric Type</label>
            <select value={fabricTypeSlug} onChange={e => setFabricTypeSlug(e.target.value)} className="input-field">
              {FABRIC_TYPES.map(f => (
                <option key={f.slug} value={f.slug}>{f.name}</option>
              ))}
            </select>
            <p className="text-deep-400 text-[11px] mt-0.5">{fabricType.description}</p>
          </div>

          {/* Operation */}
          <div>
            <label className="label">Operation Type</label>
            <select value={operationSlug} onChange={e => setOperationSlug(e.target.value)} className="input-field">
              {CURTAIN_OPERATIONS.map(o => (
                <option key={o.slug} value={o.slug}>{o.name}</option>
              ))}
            </select>
            <p className="text-deep-400 text-[11px] mt-0.5">{operation.description}</p>
          </div>
        </div>

        {/* Price Display */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="rounded-xl border border-deep-200 p-4 bg-deep-50">
            <h3 className="text-navy-900 font-bold text-sm mb-3">Price Estimate</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-navy-500">
                <span>Style</span>
                <span className="text-navy-900 font-medium">{style.name}</span>
              </div>
              <div className="flex justify-between text-navy-500">
                <span>Curtain Type</span>
                <span className="text-navy-900 font-medium">{curtainType.name}</span>
              </div>
              <div className="flex justify-between text-navy-500">
                <span>Tier</span>
                <span className="text-navy-900 font-medium">{tier.name}</span>
              </div>
              <div className="flex justify-between text-navy-500">
                <span>Fabric</span>
                <span className="text-navy-900 font-medium">{fabricType.name}</span>
              </div>
              <div className="flex justify-between text-navy-500">
                <span>Operation</span>
                <span className="text-navy-900 font-medium">{operation.name}</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-brand-500/30 p-5 bg-brand-50 flex flex-col justify-center">
            <p className="text-navy-500 text-xs uppercase tracking-wider font-medium mb-1">Estimated Total (1 window)</p>
            <p className="text-brand-600 text-3xl sm:text-4xl font-bold">{formatAED(result.total)}</p>
            <p className="text-navy-400 text-xs mt-2">
              {result.trackWidthM.toFixed(2)}m × {(result.dropM).toFixed(2)}m | Incl. 5% VAT
            </p>
            <div className="flex items-start gap-1.5 mt-3 p-2 rounded-lg bg-brand-50 border border-brand-100">
              <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-brand-700 text-xs">Preliminary estimate. Final price confirmed after free on-site measurement.</p>
            </div>
          </div>
        </div>

        {/* Add More Windows CTA */}
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowLogin(true)}
            className="btn-primary text-base px-8 py-3"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Add More Windows &amp; Get Full Quote
          </button>
        </div>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fade-in-up">
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-4 right-4 text-deep-400 hover:text-navy-900 transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="w-14 h-14 rounded-xl bg-brand-500/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-navy-900 text-center mb-1">Continue Your Quote</h3>
            <p className="text-navy-500 text-sm text-center mb-6">
              Enter your details to add multiple rooms and windows, then download your PDF estimate.
            </p>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="label">Full Name *</label>
                <input
                  type="text" required
                  value={loginData.name}
                  onChange={e => setLoginData(prev => ({ ...prev, name: e.target.value }))}
                  className="input-field"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="label">Email Address *</label>
                <input
                  type="email" required
                  value={loginData.email}
                  onChange={e => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                  className="input-field"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="label">Phone Number</label>
                <input
                  type="tel"
                  value={loginData.phone}
                  onChange={e => setLoginData(prev => ({ ...prev, phone: e.target.value }))}
                  className="input-field"
                  placeholder="+971 50 123 4567"
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center text-base py-3">
                Continue to Full Quote
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </form>
            <p className="text-deep-400 text-[11px] text-center mt-4">We don&apos;t share your info. Unsubscribe anytime.</p>
          </div>
        </div>
      )}
    </div>
  );
}