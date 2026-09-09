import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Curtain Makers',
  description: 'Curtain Makers privacy policy — how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-[calc(100vh-5rem)]">
      <section className="bg-navy-900 pt-24 pb-16">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-sm text-deep-300 mb-6">
            <Link href="/" className="hover:text-brand-500">Home</Link>
            <span>/</span>
            <span className="text-white">Privacy Policy</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy <span className="text-brand-500">Policy</span>
          </h1>
        </div>
      </section>
      <section className="section bg-deep-50">
        <div className="container-wide max-w-3xl">
          <div className="prose prose-sm max-w-none text-navy-500 space-y-4 leading-relaxed">
            <p>Last updated: January 2026</p>
            <h2 className="text-lg font-bold text-navy-900">1. Information We Collect</h2>
            <p>We collect information you provide directly: name, email, phone number, and project details when you submit a contact form, request a quote, or communicate with us. We also automatically collect usage data (pages visited, time spent) via cookies and analytics.</p>
            <h2 className="text-lg font-bold text-navy-900">2. How We Use Your Information</h2>
            <p>We use your information to: respond to inquiries and provide quotes, process orders and schedule installations, improve our website and services, send relevant communications (with your consent), and comply with legal obligations.</p>
            <h2 className="text-lg font-bold text-navy-900">3. Data Sharing</h2>
            <p>We do not sell your personal information. We may share data with trusted third parties who assist in operating our website and business (analytics, email delivery) under strict confidentiality agreements.</p>
            <h2 className="text-lg font-bold text-navy-900">4. Data Security</h2>
            <p>We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>
            <h2 className="text-lg font-bold text-navy-900">5. Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal data at any time by contacting us at info@curtainmakers.ae.</p>
            <h2 className="text-lg font-bold text-navy-900">6. Contact</h2>
            <p>For privacy-related inquiries: info@curtainmakers.ae</p>
          </div>
        </div>
      </section>
    </div>
  );
}