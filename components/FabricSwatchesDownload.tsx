'use client';

import { useRef, useCallback } from 'react';
import { FABRIC_SWATCHES, getFabricsByGrade } from '@/src/data/fabric-swatches';

export default function FabricSwatchesDownload() {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  const gradeA = getFabricsByGrade('A');
  const gradeAPlus = getFabricsByGrade('A+');

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={handlePrint}
        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg from-brand-600 to-brand-500 text-white font-semibold hover:translate-y-[-2px] transition-all"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6V4a2 2 0 012-2h8a2 2 0 012 2v2m0 0h2a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2m0 0h12M12 12v8m-4-4h8" />
        </svg>
        Download Fabric Swatches (PDF)
      </button>

      {/* Print-only content */}
      <div className="hidden print:block">
        {FABRIC_SWATCHES.length > 0 && (
          <div ref={printRef} className="p-8 bg-white text-black">
            {/* Header */}
            <div className="text-center mb-8 pb-6 border-b-2 border-gray-300">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">CurtainMakers</h1>
              <p className="text-xl text-gray-700">Fabric & Material Swatches</p>
              <p className="text-sm text-gray-500 mt-1">Premium curtains, blinds & motorized systems — Abu Dhabi & Dubai</p>
            </div>

            {/* Grade A+ Swatches */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Premium Collection (Grade A+)</h2>
              <p className="text-sm text-gray-500 mb-4">Our finest materials — real wood, premium linen, and luxury velvet</p>
              <div className="grid grid-cols-4 gap-4">
                {gradeAPlus.map((swatch) => (
                  <SwatchCard key={swatch.slug} swatch={swatch} />
                ))}
              </div>
            </div>

            {/* Grade A Swatches grouped by type */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Standard Collection (Grade A)</h2>
              <p className="text-sm text-gray-500 mb-4">Commercial-grade materials suitable for offices, hotels, and homes</p>

              {/* Blackout */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Blackout Fabrics (100% Light Blocking)</h3>
              <div className="grid grid-cols-4 gap-4 mb-6">
                {gradeA.filter(f => f.name.startsWith('Blackout')).map((swatch) => (
                  <SwatchCard key={swatch.slug} swatch={swatch} />
                ))}
              </div>

              {/* Sunscreen */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Sunscreen Fabrics (UV Protection)</h3>
              <div className="grid grid-cols-4 gap-4 mb-6">
                {gradeA.filter(f => f.name.startsWith('Sunscreen')).map((swatch) => (
                  <SwatchCard key={swatch.slug} swatch={swatch} />
                ))}
              </div>

              {/* Translucent */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Translucent Fabrics (Light Diffusing)</h3>
              <div className="grid grid-cols-4 gap-4 mb-6">
                {gradeA.filter(f => f.name.startsWith('Translucent')).map((swatch) => (
                  <SwatchCard key={swatch.slug} swatch={swatch} />
                ))}
              </div>

              {/* Faux Wood */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Faux Wood Finishes</h3>
              <div className="grid grid-cols-4 gap-4 mb-6">
                {gradeA.filter(f => f.name.startsWith('Faux Wood')).map((swatch) => (
                  <SwatchCard key={swatch.slug} swatch={swatch} />
                ))}
              </div>

              {/* Aluminium */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Aluminium Finishes</h3>
              <div className="grid grid-cols-4 gap-4 mb-6">
                {gradeA.filter(f => f.name.startsWith('Aluminium') || f.name.startsWith('Thermal')).map((swatch) => (
                  <SwatchCard key={swatch.slug} swatch={swatch} />
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-10 pt-6 border-t-2 border-gray-300 text-center text-sm text-gray-500">
              <p className="mb-1">CurtainMakers — curtainmakers.ae</p>
              <p className="mb-1">Abu Dhabi | Dubai | UAE</p>
              <p className="mb-1">Free Design Visit · 3-Day Installation · 3-Year Warranty</p>
              <p className="text-xs mt-2">Contact: info@curtainmakers.ae | WhatsApp: +971 XX XXX XXXX</p>
              <p className="text-xs mt-1">Colors shown are indicative. Actual shades may vary slightly. Swatches available on request.</p>
            </div>
          </div>
        )}
      </div>

      {/* Print styles */}
      <style jsx global>{`
        @media print {
          body { margin: 0; padding: 0; }
          @page { margin: 15mm; size: A4 portrait; }
          .no-print { display: none !important; }
        }
      `}</style>
    </>
  );
}

function SwatchCard({ swatch }: { swatch: (typeof FABRIC_SWATCHES)[0] }) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      {/* Color swatch */}
      <div
        className="h-16 w-full"
        style={{
          background: swatch.gradient || swatch.color,
          borderBottom: '1px solid rgba(0,0,0,0.08)',
        }}
      />
      {/* Info */}
      <div className="p-2.5">
        <p className="text-[11px] font-bold text-gray-900 leading-tight">{swatch.name}</p>
        <div className="flex items-center gap-1.5 mt-1">
          <span className="text-[9px] px-1 py-0.5 rounded bg-gray-100 text-gray-700 font-medium">
            {swatch.material_grade}
          </span>
          <span className="text-[9px] text-gray-500">
            {swatch.opacity_percent === 100 ? 'Blockout' : `${swatch.opacity_percent}%`}
          </span>
        </div>
        <p className="text-[9px] text-gray-500 mt-1 leading-tight line-clamp-2">{swatch.description}</p>
      </div>
    </div>
  );
}