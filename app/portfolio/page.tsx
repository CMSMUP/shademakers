import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Curtain Makers',
  description:
    'Explore our portfolio of premium curtain and blind installations across Abu Dhabi and Dubai. Villas, hotels, offices, and commercial projects.',
  openGraph: {
    title: 'Curtain Makers Portfolio — Premium Installations Abu Dhabi & Dubai',
    description:
      'See our work: villa curtains, hotel projects, office blinds, outdoor curtains & motorized systems',
  },
  alternates: {
    canonical: 'https://curtainmakers.ae/portfolio',
  },
};

const PROJECTS = [
  // --- Villa Curtains ---
  {
    type: 'Villa Curtains',
    title: 'Beachfront Villa — Saadiyat Island',
    desc: 'Floor-to-ceiling sheers and blackout curtains for a luxury private residence with panoramic Gulf views. Layered drapes with motorized track system.',
    category: 'Residential',
  },
  {
    type: 'Villa Curtains',
    title: 'Garden Villa — Khalifa City',
    desc: 'Custom Roman blinds and curtain sets for a spacious family villa with large garden-facing windows. Elegant linen blends with thermal lining.',
    category: 'Residential',
  },
  {
    type: 'Villa Curtains',
    title: 'Mountain View Villa — Al Ain',
    desc: 'Full villa package including blackout curtains for bedrooms, sheer curtains for living areas, and motorized blinds for skylights.',
    category: 'Residential',
  },
  // --- Hotel Curtains ---
  {
    type: 'Hotel Curtains',
    title: 'Boutique Hotel — Al Raha Beach',
    desc: 'Custom patterned curtains and motorized blinds for 40 guest suites and public areas. Flame-retardant fabrics meeting hospitality standards.',
    category: 'Hospitality',
  },
  {
    type: 'Hotel Curtains',
    title: 'Five-Star Resort — Yas Island',
    desc: 'Full FF&E package for 120 rooms, lobbies, and restaurants. Luxurious velvet draperies with blackout lining and automated day/night shades.',
    category: 'Hospitality',
  },
  // --- Office Blinds ---
  {
    type: 'Office Blinds',
    title: 'Corporate HQ — Al Reem Island',
    desc: 'Full fit-out of sunscreen roller blinds and smart motorized systems for a 12-story office tower. 600+ workstations with glare-free light control.',
    category: 'Commercial',
  },
  {
    type: 'Office Blinds',
    title: 'Business Bay Tower Fit-Out',
    desc: 'Premium roller and zebra blinds for a multinational corporate office in Dubai. Zoned automation with sunrise/sunset scheduling.',
    category: 'Commercial',
  },
  // --- Villa Project Curtains (Motorized) ---
  {
    type: 'Villa Project Curtains',
    title: 'Smart Villa — Al Gurm Resort',
    desc: 'Fully integrated motorized curtains, blinds, and outdoor screens controlled via KNX home automation system. 14-meter panoramic drape track.',
    category: 'Motorized Solutions',
  },
  {
    type: 'Villa Project Curtains',
    title: 'Executive Villa — Al Bateen',
    desc: 'Custom motorized roller blinds, blackout curtains, and sheer drapes across 12 rooms. BMS-integrated with voice control and scene setting.',
    category: 'Motorized Solutions',
  },
  // --- Outdoor Curtains ---
  {
    type: 'Outdoor Curtains',
    title: 'Rooftop Terrace — Marina District',
    desc: 'Weather-resistant outdoor curtains with stainless steel grommets and UV-stabilized fabric for a penthouse terrace overlooking the marina.',
    category: 'Outdoor Living',
  },
  {
    type: 'Outdoor Curtains',
    title: 'Poolside Pavilion — Al Raha Gardens',
    desc: 'Large-scale outdoor droper screens and side curtains for a private villa pool area. Wind-rated tracks with quick-release system.',
    category: 'Outdoor Living',
  },
  // --- Interior Designer Projects ---
  {
    type: 'Interior Designer Projects',
    title: 'The Royal Suite — Emirates Palace',
    desc: 'Designer collaboration project: bespoke silk-blend curtains with Swarovski crystal tiebacks, handmade valances, and layered window treatments.',
    category: 'Designer Collaboration',
  },
  {
    type: 'Interior Designer Projects',
    title: 'Penthouse — Etihad Towers',
    desc: 'Collaboration with leading interior design firm. Custom motorized curtain system with integrated LED backlighting and designer fabric collection.',
    category: 'Designer Collaboration',
  },
];

export default function PortfolioPage() {
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
            <span className="text-white">Portfolio</span>
          </nav>
          <div className="max-w-2xl">
            <div className="section-label">
              <span>Our Work</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-brand-500">Portfolio</span>
            </h1>
            <p className="text-deep-300 text-lg leading-relaxed">
              From beachfront villas to corporate towers — explore our curated
              selection of projects across Abu Dhabi and Dubai, each reflecting
              our commitment to quality and craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Fabric Library Counter */}
      <section className="bg-navy-900 border-t border-deep-800 border-b border-deep-800">
        <div className="container-wide py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm">
            <span className="text-deep-300">
              <strong className="text-white font-semibold">2500+</strong>{' '}
              Curtain Fabrics
            </span>
            <span className="text-deep-500 hidden sm:inline">|</span>
            <span className="text-deep-300">
              <strong className="text-white font-semibold">1000+</strong>{' '}
              Sheer Fabrics
            </span>
            <span className="text-deep-500 hidden sm:inline">|</span>
            <span className="text-deep-300">
              <strong className="text-white font-semibold">200+</strong>{' '}
              Designer Collections
            </span>
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="section bg-deep-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => (
              <div key={i} className="card p-6 group flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-brand-500 text-xs font-semibold uppercase tracking-wider">
                    {project.type}
                  </span>
                  <span className="text-deep-400 text-[10px] font-medium uppercase tracking-wider border border-deep-200 rounded-full px-2 py-0.5">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-navy-900 font-semibold text-base mb-2 group-hover:text-brand-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-navy-500 text-sm leading-relaxed flex-1">
                  {project.desc}
                </p>
                <div className="mt-4 pt-4 border-t border-deep-200">
                  <span className="text-brand-500 text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Project
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
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-white">
        <div className="container-wide max-w-3xl text-center">
          <div className="section-label justify-center">
            <span>Why Curtain Makers</span>
          </div>
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Experienced. Reliable. Professional.
          </h2>
          <p className="text-navy-500 text-lg max-w-xl mx-auto leading-relaxed">
            With 15+ years in the industry and 500+ projects delivered, Curtain
            Makers is Abu Dhabi&apos;s most trusted name for premium curtains,
            blinds, and motorized systems. Every project — from villa to
            high-rise — gets the same attention to detail and craftsmanship.
          </p>
          {/* Highlight counters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-500">500+</div>
              <div className="text-navy-500 text-sm mt-1">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-500">15+</div>
              <div className="text-navy-500 text-sm mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-500">6</div>
              <div className="text-navy-500 text-sm mt-1">Service Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-500">100%</div>
              <div className="text-navy-500 text-sm mt-1">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-deep-50">
        <div className="container-wide">
          <div className="card-dark p-10 md:p-14 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-3">
              Ready to Start Your Project?
            </h2>
            <p className="text-deep-300 mb-8 max-w-md mx-auto">
              Get a free site visit, consultation, and no-obligation quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get a Free Quote
              </Link>
              <Link
                href="/estimate"
                className="btn-secondary !text-white !border-white/20 hover:!bg-white/10"
              >
                Calculate Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}