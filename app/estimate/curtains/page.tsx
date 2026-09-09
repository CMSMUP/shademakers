'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useMemo, Suspense } from 'react';
import {
  CURTAIN_STYLES, CURTAIN_TYPES, FABRIC_TIERS, FABRIC_TYPES, CURTAIN_OPERATIONS,
  calculateCurtainPrice, formatAED,
} from '@/src/data/curtain-pricing';

interface RoomWindow {
  id: string;
  name: string;
  widthCm: number;
  dropCm: number;
}

interface Room {
  id: string;
  name: string;
  windows: RoomWindow[];
}

function CurtainsQuoteContent() {
  const params = useSearchParams();
  const styleSlug = params.get('style') || 'pinch-pleat';
  const curtainTypeSlug = params.get('type') || 'normal';
  const tierSlug = params.get('tier') || 'mid-range';
  const fabricTypeSlug = params.get('fabric') || 'cotton';
  const operationSlug = params.get('op') || 'manual';
  const initialWidth = parseInt(params.get('w') || '250');
  const initialDrop = parseInt(params.get('d') || '270');
  const userName = params.get('name') || 'Customer';
  const userEmail = params.get('email') || '';

  const [rooms, setRooms] = useState<Room[]>([
    { id: 'room-1', name: 'Room 1', windows: [{ id: 'win-1', name: 'Window 1', widthCm: initialWidth, dropCm: initialDrop }] },
  ]);

  const style = CURTAIN_STYLES.find(s => s.slug === styleSlug)!;
  const curtainType = CURTAIN_TYPES.find(c => c.slug === curtainTypeSlug)!;
  const tier = FABRIC_TIERS.find(t => t.slug === tierSlug)!;
  const fabricType = FABRIC_TYPES.find(f => f.slug === fabricTypeSlug)!;
  const operation = CURTAIN_OPERATIONS.find(o => o.slug === operationSlug)!;

  const addRoom = () => {
    const num = rooms.length + 1;
    setRooms([...rooms, { id: `room-${Date.now()}`, name: `Room ${num}`, windows: [{ id: `win-${Date.now()}`, name: 'Window 1', widthCm: 250, dropCm: 270 }] }]);
  };

  const addWindow = (roomId: string) => {
    setRooms(rooms.map(r => {
      if (r.id !== roomId) return r;
      const num = r.windows.length + 1;
      return { ...r, windows: [...r.windows, { id: `win-${Date.now()}`, name: `Window ${num}`, widthCm: 250, dropCm: 270 }] };
    }));
  };

  const updateWindow = (roomId: string, winId: string, updates: Partial<RoomWindow>) => {
    setRooms(rooms.map(r => r.id !== roomId ? r : { ...r, windows: r.windows.map(w => w.id === winId ? { ...w, ...updates } : w) }));
  };

  const removeWindow = (roomId: string, winId: string) => {
    setRooms(rooms.map(r => r.id !== roomId ? r : { ...r, windows: r.windows.filter(w => w.id !== winId) }));
  };

  const removeRoom = (roomId: string) => {
    setRooms(rooms.filter(r => r.id !== roomId));
  };

  const totalResult = useMemo(() => {
    let total = 0;
    rooms.forEach(room => {
      room.windows.forEach(win => {
        const r = calculateCurtainPrice({
          trackWidthCm: win.widthCm, dropCm: win.dropCm, quantity: 1,
          style, curtainType, tier, fabricType, operation,
        });
        total += r.total;
      });
    });
    return total;
  }, [rooms, style, curtainType, tier, fabricType, operation]);

  const totalWindows = rooms.reduce((sum, r) => sum + r.windows.length, 0);

  const generateQuoteText = () => {
    let text = `CURTAIN MAKERS — QUOTE ESTIMATE\n`;
    text += `Customer: ${userName}\n`;
    text += `Email: ${userEmail}\n`;
    text += `Style: ${style.name}\n`;
    text += `Curtain Type: ${curtainType.name}\n`;
    text += `Tier: ${tier.name}\n`;
    text += `Fabric: ${fabricType.name}\n`;
    text += `Operation: ${operation.name}\n`;
    text += `\n--- ROOMS & WINDOWS ---\n`;
    rooms.forEach(room => {
      text += `\n${room.name}:\n`;
      room.windows.forEach(win => {
        const r = calculateCurtainPrice({
          trackWidthCm: win.widthCm, dropCm: win.dropCm, quantity: 1,
          style, curtainType, tier, fabricType, operation,
        });
        text += `  ${win.name}: ${(win.widthCm/100).toFixed(2)}m × ${(win.dropCm/100).toFixed(2)}m = ${formatAED(r.total)}\n`;
      });
    });
    text += `\nTOTAL (${totalWindows} windows): ${formatAED(totalResult)}\n`;
    text += `Inclusive of 5% VAT. Preliminary estimate.\n`;
    return text;
  };

  const downloadPdf = () => {
    const text = generateQuoteText();
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `CurtainMakers-Quote-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const emailQuote = () => {
    const text = generateQuoteText();
    const subject = encodeURIComponent('Your Curtain Makers Quote Estimate');
    const body = encodeURIComponent(text);
    window.location.href = `mailto:${userEmail || 'info@curtainmakers.ae'}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-deep-50)' }}>
      <div className="container-wide py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-navy-900)' }}>
              Your Curtain <span style={{ color: 'var(--color-brand-500)' }}>Quote</span>
            </h1>
            <p className="text-navy-500 text-sm mt-1">
              {userName} &middot; {style.name} &middot; {tier.name} &middot; {fabricType.name} &middot; {operation.name}
            </p>
          </div>
          <div className="flex gap-3">
            <button onClick={downloadPdf} className="btn-primary text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Quote
            </button>
            <button onClick={emailQuote} className="btn-secondary text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Quote
            </button>
          </div>
        </div>

        {/* Total bar */}
        <div className="card p-5 mb-8 flex items-center justify-between">
          <div>
            <span className="text-navy-500 text-sm">Total Estimate ({totalWindows} window{totalWindows !== 1 ? 's' : ''})</span>
            <p className="text-2xl font-bold mt-1" style={{ color: 'var(--color-brand-600)' }}>{formatAED(totalResult)}</p>
            <p className="text-navy-400 text-xs mt-1">Incl. 5% VAT. Preliminary — final after site visit.</p>
          </div>
          <button onClick={addRoom} className="btn-primary">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Add Room
          </button>
        </div>

        {/* Rooms */}
        <div className="space-y-6">
          {rooms.map(room => (
            <div key={room.id} className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <input
                  value={room.name}
                  onChange={e => setRooms(rooms.map(r => r.id === room.id ? { ...r, name: e.target.value } : r))}
                  className="input-field max-w-xs !py-2 font-semibold"
                />
                <button onClick={() => removeRoom(room.id)} className="text-xs text-deep-400 hover:text-red-400 transition-colors">Remove Room</button>
              </div>

              <div className="space-y-3">
                {room.windows.map(win => (
                  <div key={win.id} className="flex flex-wrap items-end gap-3 p-3 rounded-xl" style={{ backgroundColor: 'var(--color-deep-50)' }}>
                    <div>
                      <label className="label text-xs">Window Name</label>
                      <input value={win.name} onChange={e => updateWindow(room.id, win.id, { name: e.target.value })} className="input-field !py-1.5 !text-xs max-w-[120px]" />
                    </div>
                    <div>
                      <label className="label text-xs">Width (cm)</label>
                      <input type="number" min={50} max={600} value={win.widthCm} onChange={e => updateWindow(room.id, win.id, { widthCm: Math.min(600, Math.max(50, +e.target.value || 50)) })} className="input-field !py-1.5 !text-xs max-w-[100px]" />
                    </div>
                    <div>
                      <label className="label text-xs">Drop (cm)</label>
                      <input type="number" min={50} max={400} value={win.dropCm} onChange={e => updateWindow(room.id, win.id, { dropCm: Math.min(400, Math.max(50, +e.target.value || 50)) })} className="input-field !py-1.5 !text-xs max-w-[100px]" />
                    </div>
                    <div className="text-xs font-medium pt-2" style={{ color: 'var(--color-brand-600)' }}>
                      {(() => {
                        const r = calculateCurtainPrice({ trackWidthCm: win.widthCm, dropCm: win.dropCm, quantity: 1, style, curtainType, tier, fabricType, operation });
                        return formatAED(r.total);
                      })()}
                    </div>
                    <button onClick={() => removeWindow(room.id, win.id)} className="text-deep-400 hover:text-red-400 text-xs pt-2">&times; Remove</button>
                  </div>
                ))}
              </div>

              <button onClick={() => addWindow(room.id)} className="mt-3 text-xs font-medium flex items-center gap-1" style={{ color: 'var(--color-brand-500)' }}>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                Add Window
              </button>
            </div>
          ))}
        </div>

        {/* Bottom actions */}
        <div className="flex flex-wrap gap-4 mt-8 justify-center">
          <button onClick={downloadPdf} className="btn-primary text-base">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF Estimate
          </button>
          <button onClick={emailQuote} className="btn-secondary text-base">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Quote to Me
          </button>
          <a href="/contact" className="btn-secondary text-base">
            Book Free Site Visit
          </a>
        </div>
      </div>
    </div>
  );
}

export default function CurtainsQuotePage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="w-8 h-8 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" /></div>}>
      <CurtainsQuoteContent />
    </Suspense>
  );
}