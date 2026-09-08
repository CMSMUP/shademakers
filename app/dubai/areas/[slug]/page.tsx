import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';

const DUBAI_AREAS = [
  { slug: 'dubai-marina', name: 'Dubai Marina', desc: 'prime waterfront and residential-commercial district', short: 'Marina' },
  { slug: 'difc', name: 'DIFC', desc: 'Dubai International Financial Centre — the city\'s financial hub', short: 'DIFC' },
  { slug: 'business-bay', name: 'Business Bay', desc: 'vibrant commercial and business district', short: 'Business Bay' },
  { slug: 'downtown-dubai', name: 'Downtown Dubai', desc: 'the heart of the city — home to Burj Khalifa and Dubai Mall', short: 'Downtown' },
  { slug: 'jlt', name: 'JLT', desc: 'Jumeirah Lakes Towers — bustling commercial and residential zone', short: 'JLT' },
  { slug: 'silicon-oasis', name: 'Dubai Silicon Oasis', desc: 'technology and innovation park with modern offices', short: 'Silicon Oasis' },
];

type Props = { params: { slug: string } };

function getArea(slug: string) {
  return DUBAI_AREAS.find(a => a.slug === slug);
}

export async function generateStaticParams() {
  return DUBAI_AREAS.map(area => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = getArea(params.slug);
  if (!area) return { title: 'Not Found' };
  return {
    title: `Office Blinds in ${area.name} | Curtain Makers`,
    description: `Premium office blinds and curtains in ${area.name}, Dubai. Roller blinds, venetian blinds, smart motorized blinds & more. Free quote & site survey in ${area.name}.`,
    alternates: { canonical: `https://curtainmakers.ae/dubai/areas/${area.slug}/` },
  };
}

export default function DubaiAreaPage({ params }: Props) {
  const area = getArea(params.slug);
  if (!area) notFound();

  return (
    <>
      <section className="relative pt-24 pb-10 bg-navy-900">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-sm text-deep-300 mb-6">
            <Link href="/" className="hover:text-brand-500 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/dubai/office-blind" className="hover:text-brand-500">Office Blinds</Link>
            <span>/</span>
            <span className="text-white">{area.name}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Office Blinds in{' '}
            <span className="text-brand-500">{area.name}</span>
          </h1>
          <p className="text-deep-300 text-lg max-w-2xl">
            Premium commercial blinds for offices in {area.desc}. Free quote, free site survey,
            and professional installation.
          </p>
        </div>
      </section>

      <section className="section bg-deep-50">
        <div className="container-wide">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-navy-900 mb-2">
              Blinds Available in {area.name}
            </h2>
            <p className="text-navy-500 max-w-xl mx-auto">
              Every blind type your {area.name} office needs — from budget to premium.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { slug: 'roller-blinds', name: 'Roller Blinds', price: 85 },
              { slug: 'vertical-blinds', name: 'Vertical Blinds', price: 65 },
              { slug: 'smart-blinds', name: 'Smart Motorized', price: 185 },
              { slug: 'zebra-blinds', name: 'Zebra Blinds', price: 110 },
            ].map((p) => (
              <Link
                key={p.slug}
                href={`/dubai/office-blinds/${p.slug}`}
                className="card p-4 group hover:border-brand-500/50 transition-all"
              >
                <h3 className="text-navy-900 font-semibold text-sm group-hover:text-brand-500 transition-colors">{p.name}</h3>
                <p className="text-brand-500 text-xs font-medium mt-1">From AED {p.price}/m²</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-wide max-w-3xl">
          <div className="card p-8">
            <h2 className="text-xl font-bold text-navy-900 mb-4">
              Why Choose Curtain Makers in {area.name}?
            </h2>
            <div className="text-navy-500 text-sm leading-relaxed space-y-4">
              <p>
                {area.name} is home to some of Dubai&apos;s most prestigious businesses. Your office
                deserves window coverings that match the quality of your location. At Curtain Makers,
                we specialize in providing premium commercial blinds to offices across {area.name}.
              </p>
              <ul className="space-y-2">
                {[
                  'Free online quote — instant estimate for your office',
                  'Free site survey — we visit your office for precise measurements',
                  'Professional installation — minimal disruption to your operations',
                  '5-year warranty on all products and installation',
                  'Fast turnaround — typically 7-14 days from order to installation',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-brand-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-deep-50">
        <div className="container-wide max-w-3xl">
          <div className="card-dark p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Get a Free Quote for Your {area.name} Office
            </h2>
            <p className="text-deep-300 text-sm max-w-md mx-auto mb-6">
              Schedule your free site survey today.
            </p>
            <Link href="/dubai/quote" className="btn-primary">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}