import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Curtain Makers',
  description: 'Curtain Makers terms of service — conditions for using our website and services.',
};

export default function TermsPage() {
  return (
    <div className="min-h-[calc(100vh-5rem)]">
      <section className="bg-navy-900 pt-24 pb-16">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-sm text-deep-300 mb-6">
            <Link href="/" className="hover:text-brand-500">Home</Link>
            <span>/</span>
            <span className="text-white">Terms of Service</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms of <span className="text-brand-500">Service</span>
          </h1>
        </div>
      </section>
      <section className="section bg-deep-50">
        <div className="container-wide max-w-3xl">
          <div className="prose prose-sm max-w-none text-navy-500 space-y-4 leading-relaxed">
            <p>Last updated: January 2026</p>
            <h2 className="text-lg font-bold text-navy-900">1. Acceptance of Terms</h2>
            <p>By accessing or using the Curtain Makers website, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
            <h2 className="text-lg font-bold text-navy-900">2. Services</h2>
            <p>Curtain Makers provides curtain and blind consultation, supply, and installation services in Abu Dhabi and Dubai. All quotes are preliminary estimates and final pricing is confirmed after a free on-site survey.</p>
            <h2 className="text-lg font-bold text-navy-900">3. Orders and Payment</h2>
            <p>A 70% deposit is required to confirm orders. The remaining 30% is due upon completion and satisfaction. All prices include 5% UAE VAT where applicable.</p>
            <h2 className="text-lg font-bold text-navy-900">4. Warranty</h2>
            <p>We offer a 3-year warranty on curtains and blinds covering manufacturing defects. Motorized products carry a 5-year motor warranty. Warranty does not cover misuse, accidental damage, or normal wear and tear.</p>
            <h2 className="text-lg font-bold text-navy-900">5. Limitation of Liability</h2>
            <p>Curtain Makers shall not be liable for indirect damages arising from the use of our products or services. Our total liability is limited to the amount paid for the specific product or service.</p>
            <h2 className="text-lg font-bold text-navy-900">6. Contact</h2>
            <p>For questions about these terms: info@curtainmakers.ae</p>
          </div>
        </div>
      </section>
    </div>
  );
}