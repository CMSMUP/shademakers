import type { Metadata } from 'next';
import EstimateWizard from '@/components/EstimateWizard';

export const metadata: Metadata = {
  title: 'Get a Free Quote | Curtain Makers — Instant Curtain & Blind Estimator',
  description: 'Get an instant free quote for curtains and blinds in Abu Dhabi and Dubai. Use our online calculator for roller blinds, curtains, motorized blinds. Free site survey included.',
};

export default function EstimatePage() {
  return (
    <div className="min-h-[calc(100vh-5rem)]">
      <section className="pt-24 pb-8 bg-navy-900">
        <div className="container-wide">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Get Your Free{' '}
            <span className="text-brand-500">Curtain & Blind Quote</span>
          </h1>
          <p className="text-deep-300 max-w-xl">
            Add your rooms and windows, select your preferred curtains or blinds, and get an instant
            estimate. Free site survey included — no obligation.
          </p>
        </div>
      </section>

      <section className="pb-20 bg-navy-950">
        <div className="container-wide">
          <EstimateWizard />
        </div>
      </section>
    </div>
  );
}