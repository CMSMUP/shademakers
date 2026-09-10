import Link from 'next/link';
import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { JsonLd, buildFaqSchema } from '@/src/data/schema';

const CONTACT_FAQS = [
  { question: 'How fast will you respond to my enquiry?', answer: 'We reply to most enquiries within 24 hours during working days (Saturday to Thursday). For urgent requests, WhatsApp is the fastest way to reach our team.' },
  { question: 'Do you really offer free design visits?', answer: 'Yes. We bring fabric catalogs to your home or office, measure on the spot, and give you a confirmed price before anything is made. There is no charge and no obligation to buy.' },
  { question: 'Which areas do you cover?', answer: 'All of Abu Dhabi and Dubai, including Al Reem Island, Saadiyat Island, Al Raha Beach, Yas Island, Dubai Marina, DIFC, Business Bay, and Downtown Dubai.' },
];

export const metadata: Metadata = {
  title: 'Contact Us | Curtain Makers',
  description:
    "Get in touch with Curtain Makers — Abu Dhabi & Dubai's premium curtain and blinds specialist. Request a free quote, consultation, or site visit. We respond within 24 hours.",
  openGraph: {
    title: 'Contact Curtain Makers — Premium Curtains & Blinds Abu Dhabi',
    description:
      'Get a free quote or consultation for premium curtains, blinds, and motorized systems in Abu Dhabi and Dubai.',
  },
  alternates: {
    canonical: 'https://curtainmakers.ae/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={buildFaqSchema(CONTACT_FAQS)} />
      {/* Hero */}
      <section className="bg-navy-900 pt-24 pb-16">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-sm text-deep-300 mb-6">
            <Link href="/" className="hover:text-brand-500">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Contact</span>
          </nav>
          <div className="max-w-2xl">
            <div className="section-label">
              <span>Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let&apos;s Talk About
              <br />
              <span className="text-brand-500">Your Project</span>
            </h1>
            <p className="text-deep-300 text-lg leading-relaxed">
              Whether you&apos;re furnishing a villa in Al Reem Island,
              outfitting a hotel on Saadiyat, or fitting an office in Dubai —
              we&apos;re here to help. Get a free quote and consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-deep-50">
        <div className="container-wide">
          {/* Book Free Design Visit — Primary Callout */}
          <div className="mb-10">
            <div className="card p-6 sm:p-8 bg-brand-500/10 border-brand-500/30">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8">
                <div className="w-14 h-14 rounded-xl bg-brand-500 flex items-center justify-center text-navy-900 flex-shrink-0">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-1">
                    Book Your Free Design Visit
                  </h3>
                  <p className="text-navy-500 text-sm sm:text-base">
                    Our curtain experts come to your home or office — measure,
                    advise, and show you fabric samples. No obligation, no
                    pressure.
                  </p>
                </div>
                <a
                  href="tel:+97121234567"
                  className="btn-primary text-base py-3 px-6 whitespace-nowrap flex-shrink-0"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call to Book
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Form — takes 3/5 columns */}
            <div className="lg:col-span-3">
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-navy-900 mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />

                {/* WhatsApp CTA — prominent below the form */}
                <div className="mt-8 pt-6 border-t border-deep-200">
                  <p className="text-sm text-navy-400 mb-3 text-center">
                    Prefer instant messaging?
                  </p>
                  <a
                    href="https://wa.me/971XXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center text-base py-4 animate-pulse-glow"
                    style={{
                      background: '#25D366',
                    }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp — +971 XX XXX XXXX
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Info — takes 2/5 columns */}
            <div className="lg:col-span-2 space-y-5">
              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-500 text-lg flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-navy-900 font-semibold text-sm mb-0.5">
                      Call Us
                    </h3>
                    <p className="text-navy-500 text-sm">+971 2 123 4567</p>
                    <p className="text-navy-400 text-xs mt-0.5">
                      Sat–Thu, 9am–6pm
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-500 text-lg flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-navy-900 font-semibold text-sm mb-0.5">
                      Email Us
                    </h3>
                    <p className="text-navy-500 text-sm">
                      info@curtainmakers.ae
                    </p>
                    <p className="text-navy-400 text-xs mt-0.5">
                      We reply within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-500 text-lg flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-navy-900 font-semibold text-sm mb-0.5">
                      Location
                    </h3>
                    <p className="text-navy-500 text-sm">
                      Abu Dhabi, United Arab Emirates
                    </p>
                    <p className="text-navy-400 text-xs mt-0.5">
                      Serving all of Abu Dhabi &amp; Dubai
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-500 text-lg flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-navy-900 font-semibold text-sm mb-0.5">
                      Opening Hours
                    </h3>
                    <p className="text-navy-500 text-sm">
                      Sat–Thu: 9:00 AM – 6:00 PM
                    </p>
                    <p className="text-navy-400 text-xs mt-0.5">
                      Friday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="card-dark p-6">
                <h3 className="text-white font-semibold text-sm mb-3">
                  Quick Links
                </h3>
                <div className="space-y-2.5 text-sm">
                  <Link
                    href="/estimate"
                    className="flex items-center gap-2 text-brand-500 hover:text-brand-400 transition-colors"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    Get a Free Quote
                  </Link>
                  <Link
                    href="/products"
                    className="flex items-center gap-2 text-brand-500 hover:text-brand-400 transition-colors"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    Browse Products
                  </Link>
                  <Link
                    href="/portfolio"
                    className="flex items-center gap-2 text-brand-500 hover:text-brand-400 transition-colors"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    View Our Portfolio
                  </Link>
                  <Link
                    href="/blog"
                    className="flex items-center gap-2 text-brand-500 hover:text-brand-400 transition-colors"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    Read Our Blog
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-navy-900 py-16">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <div className="section-label justify-center mb-4">
              <span>Stay Inspired</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Abu Dhabi&apos;s Curtain Club
            </h2>
            <p className="text-deep-300 text-base md:text-lg leading-relaxed mb-8">
              Get exclusive discounts, free pillow matching, free swatch samples,
              and curtain design ideas delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                className="input-field flex-1 text-center sm:text-left"
                placeholder="your@email.com"
                required
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap text-base py-3 px-8"
              >
                Subscribe
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </form>
            <p className="text-navy-400 text-xs mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}