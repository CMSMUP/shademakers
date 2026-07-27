import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-[calc(100vh-5rem)]">
      {/* Hero */}
      <section className="pt-24 pb-10">
        <div className="container-wide">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Contact <span className="text-gradient">Us</span>
          </h1>
          <p className="text-deep-300 max-w-lg">
            Ready to transform your office space? Get in touch — we&apos;ll respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="card p-8">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="label">Full Name *</label>
                    <input type="text" className="input-field" placeholder="Your name" required />
                  </div>
                  <div>
                    <label className="label">Company</label>
                    <input type="text" className="input-field" placeholder="Your company" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="label">Email *</label>
                    <input type="email" className="input-field" placeholder="you@company.com" required />
                  </div>
                  <div>
                    <label className="label">Phone</label>
                    <input type="tel" className="input-field" placeholder="+971 50 123 4567" />
                  </div>
                </div>
                <div>
                  <label className="label">How can we help?</label>
                  <textarea className="input-field min-h-[120px] resize-none" placeholder="Tell us about your project..." />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 text-white font-semibold hover:translate-y-[-2px] transition-all shadow-lg shadow-brand-500/25"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-5">
              <div className="card p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-500/20 flex items-center justify-center text-brand-400 text-xl flex-shrink-0">📞</div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Phone</h3>
                  <p className="text-deep-300 text-sm">+971 4 123 4567</p>
                  <p className="text-deep-500 text-xs mt-0.5">Sun–Thu, 9am–6pm</p>
                </div>
              </div>

              <div className="card p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-500/20 flex items-center justify-center text-brand-400 text-xl flex-shrink-0">✉️</div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <p className="text-deep-300 text-sm">info@officeblindsdubai.com</p>
                  <p className="text-deep-500 text-xs mt-0.5">We reply within 24 hours</p>
                </div>
              </div>

              <div className="card p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-500/20 flex items-center justify-center text-brand-400 text-xl flex-shrink-0">📍</div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Location</h3>
                  <p className="text-deep-300 text-sm">Dubai, United Arab Emirates</p>
                  <p className="text-deep-500 text-xs mt-0.5">Serving all areas of Dubai</p>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-white font-semibold mb-3">Quick Links</h3>
                <div className="space-y-2 text-sm">
                  <Link href="/estimate" className="block text-brand-400 hover:underline">Get a Free Quote →</Link>
                  <Link href="/products" className="block text-brand-400 hover:underline">Browse Products →</Link>
                  <Link href="/blog" className="block text-brand-400 hover:underline">Read Our Blog →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}