import type { Metadata } from 'next';
import Link from 'next/link';
import {
  IconGuide, IconSmart, IconCompare, IconTips,
  IconEnergy, IconFabric, IconRegulations, IconTools,
} from '@/src/data/icons';

export const metadata: Metadata = {
  title: 'Blog | Curtain Makers — Curtain & Blind Tips for Abu Dhabi & Dubai',
  description: 'Expert tips, guides, and insights about curtains and blinds in Abu Dhabi and Dubai. Roller blinds, curtains, smart motorized blinds, installation guides, and more.',
};

const BLOG_POSTS = [
  {
    slug: 'choosing-office-blinds-dubai',
    title: 'How to Choose the Perfect Office Blinds in Dubai',
    excerpt: 'A comprehensive guide to selecting the right blinds for your commercial space in Dubai — from roller to smart motorized options.',
    date: '2026-07-20',
    category: 'Guide',
    Icon: IconGuide,
  },
  {
    slug: 'benefits-smart-motorized-blinds',
    title: '5 Benefits of Smart Motorized Blinds for UAE Offices',
    excerpt: 'Discover how automated blinds can improve energy efficiency, productivity, and convenience in your workplace.',
    date: '2026-07-15',
    category: 'Smart Blinds',
    Icon: IconSmart,
  },
  {
    slug: 'roller-vs-venetian-blinds',
    title: 'Roller Blinds vs Venetian Blinds: Which Is Best for Your Office?',
    excerpt: 'Compare the pros and cons of roller and venetian blinds for different office environments in the UAE.',
    date: '2026-07-10',
    category: 'Comparison',
    Icon: IconCompare,
  },
  {
    slug: 'curtains-vs-blinds-abu-dhabi',
    title: 'Curtains vs Blinds: What Works Best in Abu Dhabi Homes?',
    excerpt: 'A guide to choosing between curtains and blinds for your Abu Dhabi villa — climate, maintenance, and style considerations.',
    date: '2026-06-28',
    category: 'Tips',
    Icon: IconTips,
  },
  {
    slug: 'energy-saving-blinds-dubai',
    title: 'How Energy-Efficient Blinds Can Reduce Your Office Cooling Costs',
    excerpt: "Learn how the right blinds can lower your energy bills by reducing heat gain in Dubai's climate.",
    date: '2026-06-28',
    category: 'Tips',
    Icon: IconEnergy,
  },
  {
    slug: 'curtain-fabric-guide-abu-dhabi',
    title: 'Choosing Curtain Fabrics for the UAE Climate',
    excerpt: 'Learn about the best curtain fabrics for Abu Dhabi and Dubai homes and offices. From light-filtering sheers to thermal blackout linings.',
    date: '2026-07-01',
    category: 'Guide',
    Icon: IconFabric,
  },
  {
    slug: 'dubai-building-regulations-blinds',
    title: 'Dubai Building Regulations for Office Window Coverings',
    excerpt: 'Learn about Dubai building codes and safety regulations for commercial window coverings including fire safety compliance.',
    date: '2026-07-05',
    category: 'Guide',
    Icon: IconRegulations,
  },
  {
    slug: 'blackout-curtains-abu-dhabi-guide',
    title: 'The Complete Guide to Blackout Curtains in Abu Dhabi',
    excerpt: 'Everything about blackout curtains in Abu Dhabi — fabrics, blackout vs dim-out, motorized options, and real AED pricing.',
    date: '2026-09-05',
    category: 'Guide',
    Icon: IconGuide,
  },
  {
    slug: 'how-much-do-motorized-curtains-cost',
    title: 'How Much Do Motorized Curtains Cost in the UAE?',
    excerpt: 'Motorized curtain pricing explained — motor, track, fabric, and installation costs with real AED figures for villas and apartments.',
    date: '2026-09-08',
    category: 'Pricing',
    Icon: IconSmart,
  },
  {
    slug: 'how-to-measure-curtains',
    title: 'How to Measure Curtains Like a Pro (Step-by-Step)',
    excerpt: 'Measure windows for curtains and blinds correctly — width, drop, track vs pole, and common mistakes to avoid.',
    date: '2026-09-10',
    category: 'Guide',
    Icon: IconTips,
  },
  {
    slug: 'roller-blinds-vs-roman-blinds',
    title: 'Roller Blinds vs Roman Blinds: Which Should You Choose?',
    excerpt: 'Compare style, light control, cost, and maintenance for roller vs roman blinds in Abu Dhabi and Dubai.',
    date: '2026-09-03',
    category: 'Comparison',
    Icon: IconCompare,
  },
  {
    slug: 'villa-curtains-abu-dhabi-luxury-guide',
    title: 'Luxury Villa Curtains in Abu Dhabi: A Complete Guide',
    excerpt: 'Designing curtains for an Abu Dhabi villa — styles, fabrics, linings, motorization, and villa-specific pricing.',
    date: '2026-09-12',
    category: 'Guide',
    Icon: IconFabric,
  },
  {
    slug: 'curtain-cleaning-maintenance-uae',
    title: 'Curtain and Blind Maintenance in the UAE: Expert Tips',
    excerpt: "How to clean and maintain curtains and blinds in the UAE's dusty climate — vacuuming, deep cleaning, and when to replace.",
    date: '2026-09-01',
    category: 'Tips',
    Icon: IconTools,
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="relative pt-24 pb-10 bg-navy-900">
        <div className="container-wide">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Curtain &amp; Blind{' '}
            <span className="text-brand-500">Blog</span>
          </h1>
          <p className="text-deep-300 max-w-xl">
            Expert tips, guides, and insights about curtains and blinds for Abu Dhabi and Dubai.
          </p>
        </div>
      </section>

      <section className="section bg-deep-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {BLOG_POSTS.map(post => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card p-6 group hover:border-brand-500/50 transition-all flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-4 text-brand-500 text-lg group-hover:bg-brand-500/20 transition-colors">
                  <post.Icon size={20} className="text-brand-500" />
                </div>
                <span className="text-brand-500 text-xs font-semibold uppercase tracking-wider mb-2">
                  {post.category}
                </span>
                <h2 className="text-navy-900 font-semibold text-base mb-2 group-hover:text-brand-500 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-navy-400 text-xs leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-deep-200">
                  <span className="text-navy-400 text-xs">
                    {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                  <span className="text-brand-500 text-xs font-medium group-hover:mr-0 -mr-2 transition-all">
                    Read more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-wide max-w-3xl">
          <div className="card p-8">
            <h2 className="text-xl font-bold text-navy-900 mb-4">Why Curtains & Blinds Matter in the UAE</h2>
            <div className="text-navy-500 text-sm leading-relaxed space-y-3">
              <p>
                The UAE&apos;s unique climate — with intense sun, high temperatures, and a need for privacy
                in both residential and commercial settings — makes the right window treatment essential.
              </p>
              <p>
                From Abu Dhabi villas to Dubai offices, Curtain Makers offers tailored solutions for every
                requirement. Our team handles everything from consultation and measurement to professional
                installation and aftercare.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}