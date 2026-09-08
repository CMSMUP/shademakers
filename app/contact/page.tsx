import Link from 'next/link';
import type { Metadata } from 'next';

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
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Form — takes 3/5 columns */}
            <div className="lg:col-span-3">
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-navy-900 mb-6">
                  Send Us a Message
                </h2>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="label">Full Name *</label>
                      <input
                        type="text"
                        className="input-field"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="label">Phone Number</label>
                      <input
                        type="tel"
                        className="input-field"
                        placeholder="+971 50 123 4567"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="label">Email Address *</label>
                    <input
                      type="email"
                      className="input-field"
                      placeholder="you@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="label">Subject</label>
                    <select className="input-field">
                      <option value="">Select a topic...</option>
                      <option value="curtains">Curtains</option>
                      <option value="blinds">Blinds</option>
                      <option value="motorized">Motorized Systems</option>
                      <option value="commercial">Commercial Project</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="label">Message *</label>
                    <textarea
                      className="input-field min-h-[140px] resize-none"
                      placeholder="Tell us about your project — size, location, style preferences, and any special requirements..."
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full justify-center text-base py-4"
                  >
                    Send Message
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
                      Sun–Thu, 9am–6pm
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
                    <p className="text-navy-500 text-sm">info@curtainmakers.ae</p>
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
    </>
  );
}