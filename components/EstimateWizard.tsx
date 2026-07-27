'use client';

import { useState, useCallback } from 'react';
import { PRODUCTS_SEED } from '@/src/data/products';
import { calculateQuotePricing, formatAED, generateQuoteNumber, cmToM } from '@/lib/pricing';
import Link from 'next/link';

// Types
interface WindowItem {
  id: string;
  name: string;
  width_cm: number;
  height_cm: number;
  quantity: number;
  productSlug: string;
  modelSlug: string;
  options: string[];
  notes: string;
}

interface RoomItem {
  id: string;
  name: string;
  windows: WindowItem[];
}

type Step = 'rooms' | 'products' | 'options' | 'review' | 'details' | 'done';

const STEP_COLORS = ['#3B82F6', '#8B5CF6', '#22C55E', '#F59E0B', '#EC4899'];
const _STEP_LABELS = ['Rooms', 'Products', 'Options', 'Review', 'Details'];

export default function EstimateWizard() {
  const [step, setStep] = useState<Step>('rooms');
  const [rooms, setRooms] = useState<RoomItem[]>([]);
  const [discountPercent, setDiscountPercent] = useState(0);
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    company_name: '',
    address: '',
    notes: '',
  });
  const [saving, setSaving] = useState(false);
  const [savedQuote, setSavedQuote] = useState<{ number: string; id: string } | null>(null);
  const [error, setError] = useState('');

  const addRoom = useCallback(() => {
    const num = rooms.length + 1;
    setRooms(prev => [...prev, {
      id: `room-${Date.now()}`,
      name: `Room ${num}`,
      windows: [],
    }]);
  }, [rooms.length]);

  const updateRoomName = useCallback((roomId: string, name: string) => {
    setRooms(prev => prev.map(r => r.id === roomId ? { ...r, name } : r));
  }, []);

  const removeRoom = useCallback((roomId: string) => {
    setRooms(prev => prev.filter(r => r.id !== roomId));
  }, []);

  const addWindow = useCallback((roomId: string) => {
    setRooms(prev => prev.map(r => {
      if (r.id !== roomId) return r;
      const num = r.windows.length + 1;
      return {
        ...r,
        windows: [...r.windows, {
          id: `win-${Date.now()}`,
          name: `Window ${num}`,
          width_cm: 100,
          height_cm: 150,
          quantity: 1,
          productSlug: '',
          modelSlug: '',
          options: [],
          notes: '',
        }],
      };
    }));
  }, []);

  const updateWindow = useCallback((roomId: string, windowId: string, updates: Partial<WindowItem>) => {
    setRooms(prev => prev.map(r => {
      if (r.id !== roomId) return r;
      return {
        ...r,
        windows: r.windows.map(w => w.id === windowId ? { ...w, ...updates } : w),
      };
    }));
  }, []);

  const removeWindow = useCallback((roomId: string, windowId: string) => {
    setRooms(prev => prev.map(r => {
      if (r.id !== roomId) return r;
      return { ...r, windows: r.windows.filter(w => w.id !== windowId) };
    }));
  }, []);

  const duplicateRoom = useCallback((roomId: string) => {
    setRooms(prev => {
      const room = prev.find(r => r.id === roomId);
      if (!room) return prev;
      const newRoom = {
        ...room,
        id: `room-${Date.now()}`,
        name: `${room.name} (copy)`,
        windows: room.windows.map(w => ({
          ...w,
          id: `win-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        })),
      };
      return [...prev, newRoom];
    });
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setError('');
    try {
      const res = await fetch('/api/estimate/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer,
          rooms,
          discount_percent: discountPercent,
          quote_number: generateQuoteNumber(),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to save quote');
      setSavedQuote({ number: data.quote_number, id: data.id });
      setStep('done');
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Failed to save quote');
    } finally {
      setSaving(false);
    }
  };

  // Build pricing data for windows that have products selected
  const pricedWindows = rooms.flatMap(room =>
    room.windows
      .filter(w => w.productSlug)
      .map(w => {
        const product = PRODUCTS_SEED.find(p => p.slug === w.productSlug)!;
        const model = product.models.find(m => m.slug === w.modelSlug);
        const area_sqm = (w.width_cm / 100) * (w.height_cm / 100);
        return {
          windowName: w.name,
          roomName: room.name,
          width_cm: w.width_cm,
          height_cm: w.height_cm,
          quantity: w.quantity,
          area_sqm,
          productName: product.name,
          modelName: model?.name || 'Standard',
          modelPriceModifier: model?.price_modifier || 0,
          modelModifierType: (model?.price_modifier_type || 'percentage') as 'percentage' | 'fixed',
          basePricePerSqm: product.base_price_per_sqm,
          selectedOptions: [] as { name: string; price: number; priceType: 'fixed' | 'per_sqm' | 'per_unit' }[],
          lineTotal: 0,
        };
      })
  );

  const pricing = pricedWindows.length > 0
    ? calculateQuotePricing(pricedWindows, discountPercent)
    : null;

  const totalWindows = rooms.reduce((sum, r) => sum + r.windows.length, 0);
  const allProductsSelected = rooms.every(r => r.windows.every(w => w.productSlug !== ''));
  const allModelsSelected = rooms.every(r => r.windows.every(w => w.modelSlug !== ''));

  return (
    <div className="pb-20">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Form */}
          <div className="lg:col-span-2">
            {/* Step Indicator - Enhanced */}
            <div className="mb-8">
              {/* Progress bar */}
              <div className="relative h-2 rounded-full bg-white/5 mb-4 overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${(['rooms', 'products', 'review', 'details', 'done'].indexOf(step) + 1) / 5 * 100}%`,
                    background: `linear-gradient(90deg, ${STEP_COLORS.slice(0, ['rooms', 'products', 'review', 'details', 'done'].indexOf(step) + 1).join(', ')})`,
                  }}
                />
              </div>
              {/* Step labels */}
              <div className="flex items-center justify-between">
                {(['rooms', 'products', 'review', 'details'] as const).map((s, i) => {
                  const stepIndex = ['done', 'details', 'review', 'products', 'rooms'].indexOf(step);
                  const thisIndex = ['done', 'details', 'review', 'products', 'rooms'].indexOf(s);
                  const isComplete = stepIndex > thisIndex;
                  const isActive = step === s;
                  return (
                    <div key={s} className="flex flex-col items-center gap-1.5" style={{ width: '25%' }}>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                          isComplete ? 'scale-100' : isActive ? 'scale-110' : 'scale-95'
                        }`}
                        style={{
                          backgroundColor: isComplete ? '#22C55E' : isActive ? '#F59E0B' : 'rgba(255,255,255,0.08)',
                          color: isComplete || isActive ? '#fff' : 'rgba(255,255,255,0.4)',
                          boxShadow: isActive ? '0 0 20px rgba(245,158,11,0.4)' : 'none',
                        }}
                      >
                        {isComplete ? '✓' : i + 1}
                      </div>
                      <span
                        className="text-[10px] font-medium text-center leading-tight transition-all"
                        style={{
                          color: isActive ? '#F59E0B' : isComplete ? '#22C55E' : 'rgba(255,255,255,0.35)',
                        }}
                      >
                        {s === 'rooms' ? 'Rooms' : s === 'products' ? 'Products' : s === 'review' ? 'Review' : 'Details'}
                      </span>
                    </div>
                  );
                })}
              </div>
              <p className="text-deep-500 text-[10px] mt-3 text-center">
                {['rooms', 'products', 'review', 'details', 'done'].indexOf(step) === 0 && 'Start by adding rooms and windows'}
                {['rooms', 'products', 'review', 'details', 'done'].indexOf(step) === 1 && 'Select products for each window'}
                {['rooms', 'products', 'review', 'details', 'done'].indexOf(step) === 2 && 'Review your pricing breakdown'}
                {['rooms', 'products', 'review', 'details', 'done'].indexOf(step) === 3 && 'Enter your details to receive the quote'}
                {['rooms', 'products', 'review', 'details', 'done'].indexOf(step) === 4 && 'Quote submitted!'}
              </p>
            </div>

            {/* STEP 1: ROOMS & WINDOWS */}
            {step === 'rooms' && (
              <div className="space-y-4">
                {/* Measurement Guide */}
                <div className="card p-4 flex items-start gap-4 bg-gradient-to-r from-navy-800/30 to-transparent border-navy-500/20">
                  <div className="w-20 h-20 flex-shrink-0 rounded-xl bg-white/5 flex items-center justify-center">
                    <svg viewBox="0 0 80 80" className="w-16 h-16 text-deep-300">
                      <rect x="10" y="10" width="60" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4,3" />
                      <line x1="10" y1="5" x2="10" y2="75" stroke="#F59E0B" strokeWidth="2" />
                      <line x1="10" y1="5" x2="70" y2="5" stroke="#22C55E" strokeWidth="2" />
                      <line x1="70" y1="5" x2="70" y2="10" stroke="#22C55E" strokeWidth="2" />
                      <line x1="10" y1="10" x2="10" y2="15" stroke="#F59E0B" strokeWidth="2" />
                      <text x="40" y="90" textAnchor="middle" fill="#22C55E" fontSize="8">Width (cm)</text>
                      <text x="-55" y="40" transform="rotate(-90)" textAnchor="middle" fill="#F59E0B" fontSize="8">Height (cm)</text>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">How to measure</p>
                    <p className="text-deep-400 text-xs mt-1">Measure width (left to right) and drop (top to bottom) at three points. Use the smallest measurement.</p>
                    <a href="#" className="text-brand-400 text-xs font-medium mt-1 inline-block hover:underline">Full measuring guide →</a>
                  </div>
                </div>

                {rooms.map(room => (
                  <div key={room.id} className="card p-5">
                    <div className="flex items-center justify-between mb-4">
                      <input
                        value={room.name}
                        onChange={e => updateRoomName(room.id, e.target.value)}
                        className="input-field max-w-xs !py-2 font-semibold"
                        placeholder="Room name"
                      />
                      <div className="flex items-center gap-1">
                        <button onClick={() => duplicateRoom(room.id)} className="text-xs text-deep-400 hover:text-brand-400 px-2 py-1 rounded-lg hover:bg-white/5 transition-all" title="Duplicate room">
                          📋
                        </button>
                        <button onClick={() => removeRoom(room.id)} className="text-deep-500 hover:text-red-400 text-sm transition-colors">
                          Remove
                        </button>
                      </div>
                    </div>

                    {room.windows.map(win => (
                      <div key={win.id} className="flex flex-wrap items-end gap-3 p-3 rounded-xl bg-white/5 border border-white/5 mb-2">
                        <div className="min-w-[120px]">
                          <label className="label">Name</label>
                          <input
                            value={win.name}
                            onChange={e => updateWindow(room.id, win.id, { name: e.target.value })}
                            className="input-field !py-2"
                          />
                        </div>
                        <div className="w-20">
                          <label className="label">Width (cm)</label>
                          <input
                            type="number"
                            min={50}
                            max={300}
                            value={win.width_cm}
                            onChange={e => updateWindow(room.id, win.id, { width_cm: Math.min(300, Math.max(50, +e.target.value)) })}
                            className="input-field !py-2"
                          />
                        </div>
                        <div className="w-20">
                          <label className="label">Height (cm)</label>
                          <input
                            type="number"
                            min={50}
                            max={300}
                            value={win.height_cm}
                            onChange={e => updateWindow(room.id, win.id, { height_cm: Math.min(300, Math.max(50, +e.target.value)) })}
                            className="input-field !py-2"
                          />
                        </div>
                        <div className="w-20">
                          <label className="label">Qty</label>
                          <input
                            type="number"
                            min={1}
                            value={win.quantity}
                            onChange={e => updateWindow(room.id, win.id, { quantity: Math.max(1, +e.target.value) })}
                            className="input-field !py-2"
                          />
                        </div>
                        <button onClick={() => removeWindow(room.id, win.id)} className="p-2 text-deep-500 hover:text-red-400 transition-colors">
                          ✕
                        </button>
                        <div className="w-full text-xs text-deep-500 mt-1">
                          = {cmToM(win.width_cm)}m × {cmToM(win.height_cm)}m × {win.quantity} unit(s) = {(win.width_cm/100 * win.height_cm/100 * win.quantity).toFixed(2)} m²
                        </div>
                      </div>
                    ))}

                    <button onClick={() => addWindow(room.id)} className="text-sm text-brand-400 hover:text-brand-300 transition-colors mt-2">
                      + Add Window to {room.name}
                    </button>
                  </div>
                ))}

                <button onClick={addRoom} className="w-full p-4 rounded-2xl border-2 border-dashed border-white/10 text-deep-400 hover:border-brand-500/30 hover:text-brand-400 transition-all text-sm font-medium">
                  + Add Another Room
                </button>

                <div className="flex justify-end pt-4">
                  <button
                    onClick={() => setStep('products')}
                    disabled={totalWindows === 0}
                    className="px-8 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 text-white font-semibold hover:translate-y-[-2px] transition-all shadow-lg shadow-brand-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Select Products →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: PRODUCTS */}
            {step === 'products' && (
              <div className="space-y-6">
                {rooms.map(room => (
                  <div key={room.id} className="card p-5">
                    <h3 className="text-white font-semibold text-sm mb-4">{room.name}</h3>
                    {room.windows.map(win => {
                      return (
                        <div key={win.id} className="p-4 rounded-xl bg-white/5 border border-white/5 mb-3">
                          <div className="text-deep-200 text-sm font-medium mb-3">{win.name} — {cmToM(win.width_cm)}m × {cmToM(win.height_cm)}m</div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="label">Blind Type</label>
                              <select
                                value={win.productSlug}
                                onChange={e => updateWindow(room.id, win.id, { productSlug: e.target.value, modelSlug: '' })}
                                className="input-field"
                              >
                                <option value="">Select blind type...</option>
                                {PRODUCTS_SEED.map(p => (
                                  <option key={p.slug} value={p.slug}>{p.name} (from AED {p.base_price_per_sqm}/m²)</option>
                                ))}
                              </select>
                            </div>
                            {win.productSlug && (
                              <div>
                                <label className="label">Model / Fabric</label>
                                <select
                                  value={win.modelSlug}
                                  onChange={e => updateWindow(room.id, win.id, { modelSlug: e.target.value })}
                                  className="input-field"
                                >
                                  <option value="">Select model...</option>
                                  {PRODUCTS_SEED.find(p => p.slug === win.productSlug)?.models.map(m => (
                                    <option key={m.slug} value={m.slug}>
                                      {m.name}
                                      {m.price_modifier > 0 ? ` (+AED ${m.price_modifier}/m²)` : m.price_modifier < 0 ? ` (-AED ${Math.abs(m.price_modifier)}/m²)` : ''}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}

                <div className="flex justify-between pt-4">
                  <button onClick={() => setStep('rooms')} className="px-6 py-3 rounded-xl text-deep-300 hover:text-white border border-white/10 transition-all text-sm">
                    ← Back
                  </button>
                  <button
                    onClick={() => setStep('review')}
                    disabled={!allProductsSelected || !allModelsSelected}
                    className="px-8 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 text-white font-semibold hover:translate-y-[-2px] transition-all shadow-lg shadow-brand-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Review Quote →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: REVIEW */}
            {step === 'review' && pricing && (
              <div className="space-y-6">
                {/* Rooms summary */}
                {rooms.map(room => (
                  <div key={room.id} className="card p-5">
                    <h3 className="text-white font-semibold mb-3">{room.name}</h3>
                    {room.windows.map(win => {
                      const product = PRODUCTS_SEED.find(p => p.slug === win.productSlug);
                      const model = product?.models.find(m => m.slug === win.modelSlug);
                      const area = (win.width_cm / 100) * (win.height_cm / 100);
                      return (
                        <div key={win.id} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0 text-sm">
                          <div>
                            <span className="text-white">{win.name}</span>
                            <span className="text-deep-400 ml-2">
                              {cmToM(win.width_cm)} × {cmToM(win.height_cm)}m × {win.quantity} | {product?.name} — {model?.name}
                            </span>
                          </div>
                          <span className="text-brand-400 font-medium">
                            {formatAED(
                              area * (product?.base_price_per_sqm || 0) * win.quantity +
                              (model?.price_modifier || 0) * area * win.quantity
                            )}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                ))}

                {/* Discount */}
                <div className="card p-5">
                  <div className="flex items-center gap-3">
                    <label className="label mb-0">Discount (%)</label>
                    <input
                      type="number"
                      min={0}
                      max={100}
                      value={discountPercent}
                      onChange={e => setDiscountPercent(Math.min(100, Math.max(0, +e.target.value)))}
                      className="input-field !py-2 w-20"
                    />
                    {discountPercent > 0 && (
                      <span className="text-green-400 text-sm">-{formatAED(pricing.discount_amount)} saved!</span>
                    )}
                  </div>
                </div>

                {/* Pricing breakdown */}
                <div className="card p-6">
                  <h3 className="text-white font-bold text-lg mb-4">Quote Summary</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between text-deep-300">
                      <span>Total Area</span>
                      <span>{pricing.total_sqm} m²</span>
                    </div>
                    <div className="flex justify-between text-deep-300">
                      <span>Subtotal</span>
                      <span>{formatAED(pricing.subtotal)}</span>
                    </div>
                    {pricing.discount_amount > 0 && (
                      <div className="flex justify-between text-green-400">
                        <span>Discount ({pricing.discount_percent}%)</span>
                        <span>-{formatAED(pricing.discount_amount)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-deep-300">
                      <span>VAT ({pricing.vat_percent}%)</span>
                      <span>{formatAED(pricing.vat_amount)}</span>
                    </div>
                    <div className="border-t border-white/10 pt-3 flex justify-between text-lg font-bold">
                      <span className="text-white">Estimated Total</span>
                      <span className="text-brand-400">{formatAED(pricing.total)}</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs">
                    ⚠ This is a preliminary estimate. Final pricing confirmed after free on-site measurement.
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button onClick={() => setStep('products')} className="px-6 py-3 rounded-xl text-deep-300 hover:text-white border border-white/10 transition-all text-sm">
                    ← Back
                  </button>
                  <button
                    onClick={() => setStep('details')}
                    className="px-8 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 text-white font-semibold hover:translate-y-[-2px] transition-all shadow-lg shadow-brand-500/25"
                  >
                    Continue →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: CUSTOMER DETAILS */}
            {step === 'details' && (
              <div className="space-y-6">
                <div className="card p-6">
                  <h3 className="text-white font-bold text-lg mb-1">Your Details</h3>
                  <p className="text-deep-400 text-sm mb-6">We&apos;ll send your quote to this email and follow up within 24 hours.</p>

                  <div className="space-y-4">
                    <div>
                      <label className="label">Full Name *</label>
                      <input
                        value={customer.name}
                        onChange={e => setCustomer(prev => ({ ...prev, name: e.target.value }))}
                        className="input-field"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="label">Email *</label>
                        <input
                          type="email"
                          value={customer.email}
                          onChange={e => setCustomer(prev => ({ ...prev, email: e.target.value }))}
                          className="input-field"
                          placeholder="you@company.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="label">Phone *</label>
                        <input
                          type="tel"
                          value={customer.phone}
                          onChange={e => setCustomer(prev => ({ ...prev, phone: e.target.value }))}
                          className="input-field"
                          placeholder="+971 50 123 4567"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="label">Company Name</label>
                      <input
                        value={customer.company_name}
                        onChange={e => setCustomer(prev => ({ ...prev, company_name: e.target.value }))}
                        className="input-field"
                        placeholder="Your company name (optional)"
                      />
                    </div>
                    <div>
                      <label className="label">Office Address</label>
                      <input
                        value={customer.address}
                        onChange={e => setCustomer(prev => ({ ...prev, address: e.target.value }))}
                        className="input-field"
                        placeholder="Building, street, area, Dubai"
                      />
                    </div>
                    <div>
                      <label className="label">Notes / Special Requests</label>
                      <textarea
                        value={customer.notes}
                        onChange={e => setCustomer(prev => ({ ...prev, notes: e.target.value }))}
                        className="input-field min-h-[80px] resize-none"
                        placeholder="Any specific requirements, preferred colors, etc."
                      />
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">{error}</div>
                )}

                <div className="flex justify-between pt-4">
                  <button onClick={() => setStep('review')} className="px-6 py-3 rounded-xl text-deep-300 hover:text-white border border-white/10 transition-all text-sm">
                    ← Back
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={saving || !customer.name || !customer.email || !customer.phone}
                    className="px-8 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 text-white font-semibold hover:translate-y-[-2px] transition-all shadow-lg shadow-brand-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {saving ? 'Saving...' : 'Get My Free Quote'}
                  </button>
                </div>
              </div>
            )}

            {/* STEP 5: DONE */}
            {step === 'done' && savedQuote && (
              <div className="text-center py-16">
                <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Quote Submitted!</h2>
                <p className="text-deep-300 mb-2">Your quote reference: <span className="text-brand-400 font-bold">{savedQuote.number}</span></p>
                <p className="text-deep-400 text-sm mb-8">We&apos;ve sent a copy to {customer.email}. Our team will contact you within 24 hours.</p>

                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <Link
                    href={`/dashboard`}
                    className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 text-white font-semibold hover:translate-y-[-2px] transition-all shadow-lg shadow-brand-500/25"
                  >
                    View My Quotes
                  </Link>
                  <Link
                    href="/"
                    className="px-8 py-3.5 rounded-xl glass-light text-deep-100 font-semibold hover:bg-white/10 hover:translate-y-[-2px] transition-all"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Right: Live Pricing Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <div className="card p-6">
                <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quote Summary</h3>
                {pricing ? (
                  <div className="space-y-3 text-sm">
                    <div className="text-deep-400 text-xs">{totalWindows} window(s) across {rooms.length} room(s)</div>
                    <div className="flex justify-between text-deep-300">
                      <span>Total Area</span>
                      <span>{pricing.total_sqm} m²</span>
                    </div>
                    <div className="flex justify-between text-deep-300">
                      <span>Subtotal</span>
                      <span>{formatAED(pricing.subtotal)}</span>
                    </div>
                    {pricing.discount_amount > 0 && (
                      <div className="flex justify-between text-green-400">
                        <span>Discount</span>
                        <span>-{formatAED(pricing.discount_amount)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-deep-300 pt-2 border-t border-white/5">
                      <span>VAT (5%)</span>
                      <span>{formatAED(pricing.vat_amount)}</span>
                    </div>
                    <div className="flex justify-between text-white font-bold text-lg pt-2 border-t border-white/10">
                      <span>Total</span>
                      <span className="text-brand-400">{formatAED(pricing.total)}</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-deep-500 text-sm text-center py-8">
                    Add rooms and select products to see pricing
                  </div>
                )}
              </div>

              <div className="card p-5 mt-3">
                <h4 className="text-white text-sm font-semibold mb-2">💡 What happens next?</h4>
                <ol className="text-deep-400 text-xs space-y-2">
                  <li>1. We review your estimate within 24h</li>
                  <li>2. Free site visit to take measurements</li>
                  <li>3. Final quote with fabric samples</li>
                  <li>4. Production &amp; professional installation</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}