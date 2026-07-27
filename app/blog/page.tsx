import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | Office Blinds Dubai — Commercial Blinds Tips & Insights',
  description: 'Expert tips, guides, and insights about commercial blinds for offices in Dubai. Roller blinds, smart blinds, installation guides, and more.',
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
    title: '5 Benefits of Smart Motorized Blinds for Dubai Offices',
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
    slug: 'dubai-building-regulations-blinds',
    title: 'Dubai Building Regulations for Office Window Coverings',
    excerpt: 'What you need to know about fire safety, building codes, and compliance requirements for office blinds in Dubai.',
    date: '2026-07-05',
    category: 'Guide',
    image: '📋',
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

const CATEGORY_COLORS: Record<string, string> = {
  'Guide': 'from-blue-600 to-cyan-600',
  'Smart Blinds': 'from-cyan-600 to-teal-600',
  'Comparison': 'from-amber-600 to-orange-600',
  'Tips': 'from-green-600 to-emerald-600',
};

export default function BlogPage() {
  return (
    <>
      <section className="pt-24 pb-10">
        <div className="container-wide">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Office Blinds <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-deep-300 max-w-xl">
            Expert tips, guides, and insights about commercial blinds for Dubai offices.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {BLOG_POSTS.map(post => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card p-6 group hover:border-brand-500/30 transition-all flex flex-col"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${CATEGORY_COLORS[post.category] || 'from-brand-600 to-brand-500'} flex items-center justify-center mb-4 text-white text-lg group-hover:scale-110 transition-transform`}>
                  {post.image}
                </div>
                <span className="text-brand-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  {post.category}
                </span>
                <h2 className="text-white font-semibold text-base mb-2 group-hover:text-brand-400 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-deep-400 text-xs leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5">
                  <span className="text-deep-500 text-xs">{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  <span className="text-brand-400 text-xs font-medium group-hover:mr-0 -mr-2 transition-all">
                    Read more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="pb-20">
        <div className="container-wide max-w-3xl">
          <div className="card p-8">
            <h2 className="text-xl font-bold text-white mb-4">Why Office Blinds Matter in Dubai</h2>
            <div className="text-deep-400 text-sm leading-relaxed space-y-3">
              <p>
                Dubai&apos;s unique climate — with intense sun, high temperatures, and a need for privacy
                in commercial settings — makes the right window treatment essential for any office.
                Whether you&apos;re outfitting a new space in DIFC, upgrading your Dubai Marina office,
                or fitting out a Business Bay tower, the right blinds can transform your workplace.
              </p>
              <p>
                From cost-effective <Link href="/products/roller-blinds" className="text-brand-400 hover:underline">roller blinds</Link> to premium <Link href="/products/smart-blinds" className="text-brand-400 hover:underline">smart motorized systems</Link>,
                Office Blinds Dubai offers tailored solutions for every commercial requirement.
                Our team handles everything from consultation and measurement to professional
                installation and aftercare.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}