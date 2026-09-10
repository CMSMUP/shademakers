import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd, buildFaqSchema, buildLocalBusinessSchema } from '@/src/data/schema';

const DUBAI_AREAS = [
  {
    slug: 'dubai-marina',
    name: 'Dubai Marina',
    desc: 'prime waterfront and residential-commercial district',
    short: 'Marina',
    blurb: 'Dubai Marina is home to hundreds of corporate offices, luxury apartments, and hospitality venues along its famous waterfront. Its floor-to-ceiling windows and western-facing towers make solar heat gain a real challenge — which is why sunscreen roller blinds and motorized systems are in such high demand here. We outfit offices, boardrooms, and serviced apartments across Marina Walk, JBR, and the surrounding towers.',
    features: [
      'Sunscreen roller blinds for west-facing marina towers',
      'Motorized blinds for floor-to-ceiling windows',
      'Blackout blinds for AV rooms and boardrooms',
      'Serviced apartment and hotel projects',
    ],
  },
  {
    slug: 'difc',
    name: 'DIFC',
    desc: 'Dubai International Financial Centre — the city\'s financial hub',
    short: 'DIFC',
    blurb: 'DIFC is the financial heart of Dubai, home to global banks, law firms, and investment houses. Offices here demand a premium, executive aesthetic — wooden venetian blinds, motorized roller systems, and acoustic blackout curtains are the standard. We understand the access protocols and after-hours installation requirements of DIFC towers and work to precise corporate specifications.',
    features: [
      'Wooden venetian blinds for executive offices',
      'Motorized roller blinds with building integration',
      'Acoustic and blackout curtains for meeting rooms',
      'After-hours installation to avoid disruption',
    ],
  },
  {
    slug: 'business-bay',
    name: 'Business Bay',
    desc: 'vibrant commercial and business district',
    short: 'Business Bay',
    blurb: 'Business Bay is one of Dubai\'s fastest-growing commercial corridors, packed with modern towers, co-working spaces, and corporate headquarters. Fit-out contractors and facility managers rely on us for high-volume blind supply, BOQ pricing, and phased installation. From single offices to 500+ window fit-outs, we deliver consistent specifications across entire floors.',
    features: [
      'High-volume blind supply for fit-out projects',
      'BOQ pricing for contractors',
      'Co-working space standardization',
      'Phased installation for large towers',
    ],
  },
  {
    slug: 'downtown-dubai',
    name: 'Downtown Dubai',
    desc: 'the heart of the city — home to Burj Khalifa and Dubai Mall',
    short: 'Downtown',
    blurb: 'Downtown Dubai is the city\'s most prestigious address, surrounding the Burj Khalifa and Dubai Mall. Offices and premium residences here require window coverings that match their iconic surroundings — motorized curtains, smart blinds, and premium fabrics. We deliver boutique-quality installations with the discretion and scheduling flexibility that premium towers demand.',
    features: [
      'Smart motorized curtains and blinds',
      'Premium fabric and finish selection',
      'Discreet, schedule-flexible installation',
      'Luxury residential and office projects',
    ],
  },
  {
    slug: 'jlt',
    name: 'JLT',
    desc: 'Jumeirah Lakes Towers — bustling commercial and residential zone',
    short: 'JLT',
    blurb: 'Jumeirah Lakes Towers (JLT) is a dense cluster of 80+ towers hosting thousands of SMEs and startups. Value-for-money roller blinds, vertical blinds, and zebra blinds are the most requested products here. We offer competitive bulk pricing for multi-window offices and quick turnaround for growing businesses moving into new space.',
    features: [
      'Cost-effective roller and vertical blinds',
      'Zebra blinds for modern offices',
      'Quick turnaround for new tenancies',
      'Bulk pricing for multi-window offices',
    ],
  },
  {
    slug: 'silicon-oasis',
    name: 'Dubai Silicon Oasis',
    desc: 'technology and innovation park with modern offices',
    short: 'Silicon Oasis',
    blurb: 'Dubai Silicon Oasis (DSO) is a self-contained tech hub with modern office parks and residential communities. Tech and innovation companies here favor smart, energy-efficient solutions — motorized blinds with app control, cellular/pleated blinds for insulation, and sunscreen fabrics to reduce cooling loads across large glass facades.',
    features: [
      'Smart motorized blinds with app control',
      'Cellular/pleated blinds for energy savings',
      'Sunscreen fabrics for large glass facades',
      'Tech-campus and innovation-park projects',
    ],
  },
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

  const areaFaqs = [
    { question: `Do you install blinds in ${area.name}?`, answer: `Yes, we supply and install premium office blinds and curtains throughout ${area.name}, Dubai. Our team provides free on-site surveys and professional installation with minimal disruption to your operations.` },
    { question: `How much do office blinds cost in ${area.name}?`, answer: `Office blinds in ${area.name} start from AED 65/m² for vertical blinds, AED 85/m² for roller blinds, and AED 110/m² for zebra blinds. Motorized options start from AED 185/m². Get an instant estimate with our online calculator.` },
    { question: `How fast can you install blinds in ${area.name}?`, answer: `For standard projects in ${area.name}, installation typically takes 7–14 days from order confirmation. Larger fit-out projects are scheduled in phases.` },
  ];

  return (
    <>
      <JsonLd data={buildFaqSchema(areaFaqs)} />
      <JsonLd data={buildLocalBusinessSchema({ areaServed: [area.name, 'Dubai'] })} />

      <section className="relative pt-24 pb-10 bg-navy-900">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-sm text-deep-300 mb-6">
            <Link href="/" className="hover:text-brand-500 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/dubai/office-blinds" className="hover:text-brand-500">Office Blinds</Link>
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
                href={`/products/${p.slug}`}
                className="card p-4 group hover:border-brand-500/50 transition-all"
              >
                <h3 className="text-navy-900 font-semibold text-sm group-hover:text-brand-500 transition-colors">{p.name}</h3>
                <p className="text-brand-500 text-xs font-medium mt-1">From AED {p.price}/m²</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Unique area content */}
      <section className="section bg-white">
        <div className="container-wide max-w-3xl">
          <div className="card p-8">
            <h2 className="text-xl font-bold text-navy-900 mb-4">
              Office Window Coverings in {area.name}
            </h2>
            <div className="text-navy-500 text-sm leading-relaxed space-y-4">
              <p>{area.blurb}</p>
              <h3 className="font-semibold text-navy-900 pt-2">
                What we deliver in {area.name}
              </h3>
              <ul className="space-y-2">
                {area.features.map((item, i) => (
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

      {/* FAQ */}
      <section className="section bg-deep-50">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl font-bold text-navy-900 mb-6 text-center">
            Office Blinds in {area.name} — FAQs
          </h2>
          <div className="space-y-3">
            {areaFaqs.map((faq, i) => (
              <details key={i} className="card p-5 group cursor-pointer">
                <summary className="font-medium text-sm flex items-center justify-between list-none text-navy-900">
                  {faq.question}
                  <svg className="w-4 h-4 group-open:rotate-180 transition-transform text-navy-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-sm mt-3 leading-relaxed text-navy-500">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-deep-50 pt-0">
        <div className="container-wide max-w-3xl">
          <div className="card-dark p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Get a Free Quote for Your {area.name} Office
            </h2>
            <p className="text-deep-300 text-sm max-w-md mx-auto mb-6">
              Schedule your free site survey today.
            </p>
            <Link href="/contact" className="btn-primary">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
