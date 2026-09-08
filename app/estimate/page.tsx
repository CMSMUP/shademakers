import type { Metadata } from 'next';
import Link from 'next/link';

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

      <section className="pb-20 bg-deep-50">
        <div className="container-wide">
          <div className="card p-8 md:p-10 mt-8 text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-xl bg-brand-500/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-navy-900 mb-3">
              Need a Project Quote?
            </h2>
            <p className="text-navy-500 max-w-md mx-auto mb-8">
              Our instant calculator is being updated for the Curtain Makers product range.
              In the meantime, request a direct quote and we&apos;ll respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-primary">
                Request Quote
              </Link>
              <Link href="/dubai/office-blinds" className="btn-secondary">
                Browse Dubai Office Blinds
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}