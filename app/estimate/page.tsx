import type { Metadata } from 'next';
import EstimateWizard from '@/components/EstimateWizard';

export const metadata: Metadata = {
  title: 'Free Quote | Office Blinds Dubai — Online Blinds Estimator',
  description: 'Get an instant free quote for office blinds in Dubai. Use our online calculator for roller, venetian, smart, and all commercial blinds. Price in 2 minutes.',
  openGraph: {
    title: 'Free Blinds Quote — Office Blinds Dubai',
    description: 'Instant online quote for commercial blinds in Dubai.',
  },
};

export default function EstimatePage() {
  return (
    <div className="min-h-[calc(100vh-5rem)]">
      {/* Hero */}
      <section className="pt-24 pb-8">
        <div className="container-wide">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Get Your Free{" "}
            <span className="text-gradient">Blinds Quote</span>
          </h1>
          <p className="text-deep-300 max-w-xl">
            Add your rooms and windows, select your preferred blinds, and get an instant
            estimate. No commitment — free site visit included.
          </p>
        </div>
      </section>

      <EstimateWizard />
    </div>
  );
}