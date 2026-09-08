import type { Metadata } from 'next';
import Link from 'next/link';

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
    image: '◆',
  },
  {
    slug: 'benefits-smart-motorized-blinds',
    title: '5 Benefits of Smart Motorized Blinds for UAE Offices',
    excerpt: 'Discover how automated blinds can improve energy efficiency, productivity, and convenience in your workplace.',
    date: '2026-07-15',
    category: 'Smart Blinds',
    image: '⚡',
  },
  {
    slug: 'roller-vs-venetian-blinds',
    title: 'Roller Blinds vs Venetian Blinds: Which Is Best for Your Office?',
    excerpt: 'Compare the pros and cons of roller and venetian blinds for different office environments in the UAE.',
    date: '2026-07-10',
    category: 'Comparison',
    image: '▤',
  },
  {
    slug: 'curtains-vs-blinds-abu-dhabi',
    title: 'Curtains vs Blinds: What Works Best in Abu Dhabi Homes?',
    excerpt: 'A guide to choosing between curtains and blinds for your Abu Dhabi villa — climate, maintenance, and style considerations.',
    date: '2026-06-28',
    category: 'Tips',
    image: '🏠',
  },
  {
    slug: 'energy-saving-blinds-dubai',
    title: 'How Energy-Efficient Blinds Can Reduce Your Office Cooling Costs',
    excerpt: 'Learn how the right blinds can lower your energy bills by reducing heat gain in Dubai\'s climate.',
    date: '2026-06-28',
    category: 'Tips',
    image: '🌡️',
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
                  {post.image}
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