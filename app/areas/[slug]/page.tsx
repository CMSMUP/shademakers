import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ABU_DHABI_AREAS } from '@/src/data/areas-abu-dhabi';

type Props = {
  params: { slug: string };
};

function getArea(slug: string) {
  return ABU_DHABI_AREAS.find((a) => a.slug === slug);
}

export async function generateStaticParams() {
  return ABU_DHABI_AREAS.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = getArea(params.slug);
  if (!area) return { title: 'Not Found' };

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: {
      canonical: `https://curtainmakers.ae/areas/${area.slug}`,
    },
  };
}

export default function AreaPage({ params }: Props) {
  const area = getArea(params.slug);
  if (!area) notFound();

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
            <span className="text-deep-400">Areas</span>
            <span>/</span>
            <span className="text-white">{area.name}</span>
          </nav>
          <div className="max-w-2xl">
            <div className="section-label">
              <span>Curtains & Blinds in Abu Dhabi</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Curtains & Blinds in
              <br />
              <span className="text-brand-500">{area.name}</span>
            </h1>
            <p className="text-deep-300 text-lg leading-relaxed">
              Premium custom curtains, blinds, and motorized systems for
              properties in {area.shortDesc}. Free quote, free site visit, and
              professional installation.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-deep-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <div className="section-label justify-center">
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-3xl font-bold text-navy-900 mt-2">
              Why Curtain Makers in{' '}
              <span className="text-brand-500">{area.name}</span>?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-brand-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-navy-900 font-semibold text-base mb-2">
                Free Site Visit
              </h3>
              <p className="text-navy-500 text-sm leading-relaxed">
                We come to your {area.name} property, take precise measurements,
                and recommend the best solutions — at no cost.
              </p>
            </div>
            <div className="card p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-brand-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h3 className="text-navy-900 font-semibold text-base mb-2">
                Custom Made-to-Measure
              </h3>
              <p className="text-navy-500 text-sm leading-relaxed">
                Every curtain and blind is manufactured to your exact window
                dimensions for a perfect fit.
              </p>
            </div>
            <div className="card p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-brand-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.5l2 2L15.5 9M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-navy-900 font-semibold text-base mb-2">
                5-Year Warranty
              </h3>
              <p className="text-navy-500 text-sm leading-relaxed">
                All products and installation come with a comprehensive 5-year
                warranty for your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About {area.name} */}
      <section className="section bg-white">
        <div className="container-wide max-w-3xl">
          <div className="card p-8 md:p-10">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              About {area.name}
            </h2>
            <p className="text-navy-500 text-sm leading-relaxed mb-6">
              {area.description}
            </p>
            <h3 className="text-navy-900 font-semibold text-base mb-3">
              What We Offer in {area.name}
            </h3>
            <ul className="space-y-3">
              {area.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-navy-500">
                  <svg
                    className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Other Abu Dhabi Areas */}
      <section className="section bg-deep-50">
        <div className="container-wide">
          <div className="text-center mb-10">
            <div className="section-label justify-center">
              <span>Explore More Areas</span>
            </div>
            <h2 className="text-2xl font-bold text-navy-900 mt-2">
              Other Areas We Serve in{' '}
              <span className="text-brand-500">Abu Dhabi</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {ABU_DHABI_AREAS.filter((a) => a.slug !== area.slug).map(
              (other) => (
                <Link
                  key={other.slug}
                  href={`/areas/${other.slug}`}
                  className="card p-5 text-center group hover:border-brand-500/50 transition-all"
                >
                  <h3 className="text-navy-900 font-semibold text-sm group-hover:text-brand-500 transition-colors">
                    {other.name}
                  </h3>
                  <p className="text-navy-400 text-xs mt-1">
                    {other.shortDesc}
                  </p>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-deep-50">
        <div className="container-wide max-w-3xl">
          <div className="card-dark p-10 md:p-14 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Get a Free Quote for Your {area.name} Property
            </h2>
            <p className="text-deep-300 mb-6 max-w-md mx-auto">
              Fill in your details and we&apos;ll get back to you within 24
              hours with a free, no-obligation quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Free Quote
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
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href="/portfolio"
                className="btn-secondary !text-white !border-white/20 hover:!bg-white/10"
              >
                View Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}