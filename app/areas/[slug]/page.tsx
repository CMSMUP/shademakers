import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { AREAS } from '@/src/data/areas';
import { PRODUCTS_SEED } from '@/src/data/products';

type Props = { params: { slug: string } };

function getArea(slug: string) {
  return AREAS.find(a => a.slug === slug);
}

export async function generateStaticParams() {
  return AREAS.map(area => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = getArea(params.slug);
  if (!area) return { title: 'Not Found' };

  return {
    title: `${area.name} Office Blinds | Commercial Blinds in ${area.name}`,
    description: `Premium office blinds in ${area.name}, Dubai. Roller blinds, Venetian blinds, smart motorized blinds & more. Free quote & site visit in ${area.name}.`,
    alternates: { canonical: `https://officeblindsdubai.com/areas/${area.slug}` },
  };
}

export default function AreaPage({ params }: Props) {
  const area = getArea(params.slug);
  if (!area) notFound();

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-10 overflow-hidden relative">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px]" />
        <div className="container-wide relative z-10">
          <nav className="flex items-center gap-2 text-sm text-deep-400 mb-6">
            <Link href="/" className="hover:text-brand-400">Home</Link>
            <span>/</span>
            <span className="text-deep-200">Areas</span>
            <span>/</span>
            <span className="text-deep-200">{area.name}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Office Blinds in{" "}
            <span className="text-brand-500">{area.name}</span>
          </h1>
          <p className="text-deep-300 text-lg max-w-2xl">
            Premium commercial blinds for {area.desc}. Free quote, free site visit,
            and professional installation across {area.name}.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="pb-10">
        <div className="container-wide">
          <h2 className="text-xl font-bold text-white mb-6">Blinds Available in {area.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {PRODUCTS_SEED.map(p => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="card p-4 group hover:border-brand-500/30 transition-all"
              >
                <h3 className="text-white font-semibold text-sm group-hover:text-brand-400 transition-colors">
                  {p.name}
                </h3>
                <p className="text-deep-400 text-xs mt-1">From AED {p.base_price_per_sqm}/m²</p>
                <p className="text-deep-500 text-xs mt-1 line-clamp-2">{p.short_description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-10">
        <div className="container-wide max-w-3xl">
          <div className="card p-8">
            <h2 className="text-xl font-bold text-white mb-4">Why Choose ShadeMakers in {area.name}?</h2>
            <div className="text-deep-300 text-sm leading-relaxed space-y-4">
              <p>
                {area.name} is home to some of Dubai&apos;s most prestigious businesses. Your office
                deserves window coverings that match the quality of your location. At ShadeMakers,
                we specialize in providing premium commercial blinds to offices across {area.name}.
              </p>
              <p>
                Our team understands the unique requirements of {area.name} offices — from
                the specific building regulations to the aesthetic expectations of the area.
                We&apos;ve installed blinds in hundreds of offices across {area.name}, ranging from
                small boutique spaces to large corporate headquarters.
              </p>
              <h3 className="text-white font-semibold text-base mt-6">Our Services in {area.name}</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Free online quote — instant estimate for your office</li>
                <li>Free site visit — we come to your {area.name} office for measurements</li>
                <li>Professional installation — minimal disruption to your operations</li>
                <li>5-year warranty on all products and installation</li>
                <li>Fast turnaround — typically 7-14 days from order to installation</li>
              </ul>
              <h3 className="text-white font-semibold text-base mt-6">Popular Blinds in {area.name}</h3>
              <p>
                The most popular choices for {area.name} offices include roller blinds for their
                clean, modern look, smart motorized blinds for tech-forward companies, and
                wooden venetian blinds for executive offices requiring a classic aesthetic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container-wide max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 card text-center">
            <div className="absolute inset-0 bg-navy-900" />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-3">
                Get a Free Quote for Your {area.name} Office
              </h2>
              <p className="text-deep-300 mb-6 text-sm max-w-md mx-auto">
                Fill in your details and we&apos;ll get back to you within 24 hours with a
                free, no-obligation quote.
              </p>
              <Link
                href="/estimate"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-500 text-navy-950 font-bold hover:bg-brand-600 transition-all text-white font-bold hover:translate-y-[-2px] transition-all"
              >
                Get Free Quote
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}