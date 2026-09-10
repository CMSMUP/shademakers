import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { NEW_BLOG_POSTS } from '@/src/data/blog-posts-new';

const BLOG_POSTS = {
  'choosing-office-blinds-dubai': {
    title: 'How to Choose the Perfect Office Blinds in Dubai',
    date: '2026-07-20',
    category: 'Guide',
    author: 'Curtain Makers Team',
    readTime: '6 min read',
    metaDesc: 'A comprehensive guide to selecting the right commercial blinds for your Dubai office. Compare roller, venetian, smart, and zebra blinds for your workspace.',
    content: `Choosing the right blinds for your office in Dubai is about more than just aesthetics, it's about functionality, energy efficiency, and creating the right environment for your team.

## Why Office Blinds Matter in Dubai

Dubai's unique climate presents specific challenges for commercial spaces. With intense sunlight, high temperatures, and the need for privacy in professional settings, the right window coverings are essential.

## Types of Office Blinds

### Roller Blinds
The most popular choice for Dubai offices. Clean, minimal, and available in three fabric types:
- **Blackout**: Complete darkness for boardrooms and AV rooms
- **Sunscreen**: UV protection while maintaining outward visibility
- **Translucent**: Soft diffused light for a warm atmosphere

**Best for**: Open-plan offices, meeting rooms, reception areas
**Price range**: From AED 85/m²

### Smart Motorized Blinds
The future of office window coverings. Control via app, voice command, or automated scheduling.
- App control via smartphone
- Voice control (Alexa, Google Home compatible)
- Automated scheduling (time-based or sunrise/sunset)

**Best for**: Executive offices, modern workplaces, hard-to-reach windows
**Price range**: From AED 185/m²

### Venetian Blinds
Classic elegance with adjustable slats for precise light control. Available in wood and aluminium.
- 50mm and 25mm slat options
- Real wood or faux wood materials
- Perfect for professional environments

**Best for**: Executive offices, law firms, corporate headquarters
**Price range**: From AED 75/m²

### Zebra (Day & Night) Blinds
Innovative dual-layer design with alternating translucent and opaque fabric bands.
- Switch between privacy and visibility instantly
- Cordless operation option
- Modern, clean appearance

**Best for**: Modern offices, consulting rooms, client-facing spaces
**Price range**: From AED 110/m²

## Factors to Consider

### Light Control
Consider how much natural light each area needs. Boardrooms need blackout capability, while general offices benefit from sunscreen fabrics.

### Energy Efficiency
The right blinds can reduce cooling costs by up to 30% by blocking solar heat gain, a significant saving in Dubai's climate.

### Maintenance
Roller and vertical blinds are easiest to maintain. Venetian blinds may require occasional dusting between slats.

### Budget
Our online calculator gives you an instant estimate. Remember to factor in 5% UAE VAT.

## The Curtain Makers Process

1. **Free online quote**: Use our calculator for an instant estimate
2. **Free site visit**: Our team measures and recommends
3. **Final quote**: Confirmed pricing with fabric samples
4. **Professional installation**: Minimal disruption to your operations
5. **Aftercare**: 5-year warranty and ongoing support

Ready to get started? [Get your free quote](/estimate) today.`,
  },
  'benefits-smart-motorized-blinds': {
    title: '5 Benefits of Smart Motorized Blinds for Dubai Offices',
    date: '2026-07-15',
    category: 'Smart Blinds',
    author: 'Curtain Makers Team',
    readTime: '5 min read',
    metaDesc: 'Discover why smart motorized blinds are transforming Dubai offices. Learn about energy savings, automation, and how they improve workplace productivity.',
    content: `Smart motorized blinds are rapidly becoming the standard for modern offices in Dubai. Here's why forward-thinking businesses are making the switch.

## 1. Energy Efficiency

Smart blinds can be programmed to close during the hottest part of the day, reducing solar heat gain and lowering air conditioning costs by up to 30%. In Dubai's climate, this translates to significant annual savings.

## 2. Improved Productivity

Studies show that access to natural light improves employee productivity and well-being by up to 15%. Smart blinds can automatically adjust to maintain optimal light levels throughout the day.

## 3. Professional Image

Motorized blinds create a sleek, modern appearance that impresses clients and visitors. The clean look without dangling cords or chains elevates any office environment.

## 4. Convenience and Control

Control every blind in your office from a single app. Create scenes like "Presentation Mode" that darkens the boardroom and "Morning Mode" that opens all blinds gradually.

## 5. Integration with Smart Buildings

Our smart blinds integrate with building management systems, occupancy sensors, and voice assistants, making them a key component of any smart office ecosystem.

## Available Options

- **Battery-powered**: Quick installation, no wiring needed
- **Hardwired**: Permanent power with clean installation
- **Solar-powered**: Eco-friendly with zero maintenance

[Get a free quote](/estimate) for smart motorized blinds for your Dubai office.`,
  },
  'roller-vs-venetian-blinds': {
    title: 'Roller Blinds vs Venetian Blinds: Which Is Best for Your Office?',
    date: '2026-07-10',
    category: 'Comparison',
    author: 'Curtain Makers Team',
    readTime: '4 min read',
    metaDesc: 'Compare roller blinds and venetian blinds for Dubai offices. We break down the pros, cons, pricing, and best use cases for each option.',
    content: `Two of the most popular choices for Dubai offices are roller blinds and venetian blinds. But which one is right for your space?

## Roller Blinds: Pros and Cons

### Pros
- Sleek, minimal appearance
- Excellent light blocking (blackout fabric)
- Easy to clean and maintain
- Cost-effective for large areas
- Motorization-friendly

### Cons
- Limited light control (fully up or fully down)
- Fewer aesthetic variations
- Not ideal for humid areas

**Best for**: Open-plan offices, conference rooms, modern spaces
**Price**: From AED 85/m²

## Venetian Blinds: Pros and Cons

### Pros
- Precise light control via adjustable slats
- Classic, professional appearance
- Available in wood, faux wood, and aluminium
- Suitable for high-humidity areas (faux wood/aluminium)

### Cons
- More dust accumulation between slats
- Generally higher cost
- Cords can be visible

**Best for**: Executive offices, law firms, traditional settings
**Price**: From AED 75/m² (aluminium), from AED 130/m² (wood)

## Quick Decision Guide

| Need | Choose |
|------|--------|
| Modern look | Roller |
| Light control precision | Venetian |
| Budget-friendly | Roller |
| Executive appearance | Venetian |
| Easy maintenance | Roller |
| Humidity resistance | Venetian (faux wood) |
| Motorization | Both work well |

## The Verdict

For most Dubai offices, we recommend **roller blinds as the default choice**: they offer the best balance of price, appearance, and functionality. However, for executive offices where a classic, prestigious look is desired, **wooden venetian blinds** remain unmatched.

Need help deciding? [Get a free consultation](/contact), our team will visit your office and recommend the perfect solution.`,
  },
  'curtains-vs-blinds-abu-dhabi': {
    title: 'Curtains vs Blinds: What Works Best in Abu Dhabi Homes?',
    date: '2026-06-28',
    category: 'Tips',
    author: 'Curtain Makers Team',
    readTime: '4 min read',
    metaDesc: 'A guide to choosing between curtains and blinds for your Abu Dhabi villa, climate, maintenance, and style considerations for each option.',
    content: `One of the most common questions we hear from homeowners in Abu Dhabi is whether curtains or blinds are the better choice. The answer depends on your specific needs, but here's a comprehensive comparison.

## Curtains: Pros and Cons

### Pros
- Superior aesthetic, soft fabrics add warmth and elegance
- Better insulation, heavy fabrics reduce heat transfer
- Sound absorption, fabrics dampen noise, ideal for bedrooms
- Design versatility, thousands of fabrics, colors, and styles
- Custom fit, made-to-measure for any window shape

### Cons
- More expensive than standard blinds
- Require professional cleaning
- Take up more visual space
- Not ideal for high-humidity areas (bathrooms)

**Best for**: Living rooms, master bedrooms, villas, formal spaces
**Price range**: From AED 180/m

## Blinds: Pros and Cons

### Pros
- Clean, modern appearance
- Easy maintenance, wipe clean
- Better light control, adjustable slats or position
- Space-efficient, sit inside window recess
- More affordable entry point
- Motorization-friendly

### Cons
- Less fabric variety
- Can look "office-like" in wrong setting
- Less sound absorption
- May not suit traditional or luxury interiors

**Best for**: Offices, kitchens, bathrooms, modern apartments
**Price range**: From AED 65/m²

## Quick Decision Guide

| Need | Best Choice | Reason |
|------|-------------|--------|
| Luxury villa living room | Curtains | Elegance and insulation |
| Modern apartment bedroom | Both | Curtains + roller blind combo |
| Office or study | Blinds | Clean, professional look |
| Kids room | Curtains | Soft, safe, playful fabrics |
| Bathroom | Blinds | Moisture resistant |
| Large villa windows | Curtains | Proportion and drama |

## The Abu Dhabi Factor

Abu Dhabi's climate, intense sun, dust, and humidity, means your choice should factor in:

- **Sun protection**: Both work well, but curtains with blackout lining offer superior UV blocking
- **Dust**: Blinds are easier to clean; curtains need regular vacuuming
- **Cooling costs**: Heavy curtains with thermal lining reduce AC costs more effectively
- **Maintenance**: Blinds win on ease; curtains win on longevity

## Our Recommendation

For most Abu Dhabi villas, we recommend a **combination approach**: curtains for living rooms and master bedrooms, and blinds for guest rooms, offices, and service areas. This gives you the best of both worlds.

Need help deciding? [Book a free design visit](/contact), we'll bring samples and recommend the perfect solution for each room in your home.`,
  },
  'dubai-building-regulations-blinds': {
    title: 'Dubai Building Regulations for Office Window Coverings',
    date: '2026-07-05',
    category: 'Guide',
    author: 'Curtain Makers Team',
    readTime: '5 min read',
    metaDesc: 'Learn about Dubai building codes and safety regulations for commercial window coverings. Fire safety compliance, child safety standards, and more.',
    content: `When outfitting an office in Dubai, it's essential to understand the local building regulations that apply to window coverings. Here's what you need to know.

## Fire Safety Compliance

Dubai Civil Defense requires that all window coverings in commercial buildings meet fire resistance standards. Our blinds use certified fire-retardant fabrics that comply with UAE fire safety codes (UAE.S 5001:2020).

## Child Safety Standards

While primarily relevant to residential settings, offices that welcome visitors with children should be aware of UAE child safety standards for blind cords. All our blinds can be specified with cordless or safety-breakaway mechanisms.

## Building Code Requirements

Dubai Municipality's building codes specify:
- Emergency escape routes must remain unobstructed
- Window coverings near fire exits must be easily retractable
- High-rise buildings may have specific wind load requirements for external blinds
- ADA/accessibility requirements apply to public-facing areas

## Our Compliance Guarantee

All Curtain Makers products are:
- ✅ Fire-retardant certified (UAE Civil Defense compliant)
- ✅ Child-safe options available
- ✅ Professionally installed to building code standards
- ✅ Fully insured

## Working with Developers

We regularly work with major Dubai developers including Emaar, Nakheel, and Dubai Properties to ensure our installations meet their specific requirements.

For specific compliance questions about your project, [contact our team](/contact).`,
  },
  'curtain-fabric-guide-abu-dhabi': {
    title: 'Choosing Curtain Fabrics for the UAE Climate',
    date: '2026-07-01',
    category: 'Guide',
    author: 'Curtain Makers Team',
    readTime: '5 min read',
    metaDesc: 'Learn about the best curtain fabrics for Abu Dhabi and Dubai. From light-filtering sheers to thermal blackout linings, find the perfect fabric for your home or office.',
    content: `Choosing the right curtain fabric in Abu Dhabi and Dubai is about balancing aesthetics with the realities of the UAE climate. Here is what actually matters.

## Understanding the UAE Climate Challenge

With summer temperatures exceeding 45°C, intense UV radiation, and year-round sunshine, curtain fabrics in the UAE need to perform. The right fabric can reduce cooling costs, protect your furniture from fading, and create a comfortable indoor environment.

## Fabric Types for the UAE

### Sheer Fabrics
Lightweight and translucent, sheers allow natural light while providing daytime privacy. Best for living rooms and spaces where you want to maintain a connection to the outdoors.

**Best for**: Living rooms, reception areas, layering under heavier curtains
**Light control**: 20-40% blockout
**Thermal**: Low

### Lining Fabrics
Essential for UAE homes. A good lining extends curtain life, blocks light, and adds insulation.

- **Standard lining**: Basic light protection, moderate thermal benefits
- **Blackout lining**: Complete darkness, excellent for bedrooms and media rooms
- **Thermal lining**: Maximum insulation, reduces cooling costs by up to 25%

### Velvet & Heavy Drapes
Luxurious and substantial, velvet curtains provide excellent insulation and a premium feel. Perfect for executive offices and formal living spaces.

**Best for**: Executive offices, formal dining rooms, luxury villas
**Light control**: 90-100% with blackout lining
**Thermal**: Excellent

### Cotton & Linen Blends
Natural fabrics that breathe well and offer a relaxed, elegant look. Linen blends are popular for their texture and durability.

**Best for**: Casual living spaces, coastal homes (Al Raha, Saadiyat)
**Light control**: 50-70%
**Thermal**: Moderate

## Fabric Selection Guide by Room

| Room | Recommended Fabric | Lining |
|------|-------------------|--------|
| Living Room | Sheer + Drape combo | Light-filtering |
| Master Bedroom | Velvet or Heavy Drape | Blackout |
| Guest Room | Cotton/Linen blend | Standard |
| Home Office | Roller blind + Curtain | Sunscreen |
| Kids Room | Cotton blend | Blackout |

## Care & Maintenance in the UAE

- **Dust accumulation**: Abu Dhabi's dusty environment means curtains should be vacuumed monthly
- **Dry cleaning**: Professional clean every 6-12 months
- **Sun damage**: Rotate curtains seasonally to prevent uneven fading
- **Humidity**: Avoid pure cotton in bathrooms; opt for polyester blends

## Why Choose Curtain Makers?

We offer over 200 fabric samples from leading global suppliers. Our design consultants help you select the perfect fabric for your specific needs and budget. Every order is made-to-measure and professionally installed.

[Browse our curtain collection](/products) or [book a free consultation](/contact) to see fabric samples in person.`,
  },
  'energy-saving-blinds-dubai': {
    title: 'How Energy-Efficient Blinds Can Reduce Your Office Cooling Costs',
    date: '2026-06-28',
    category: 'Tips',
    author: 'Curtain Makers Team',
    readTime: '4 min read',
    metaDesc: 'Learn how the right office blinds can reduce your energy bills in Dubai. Smart blinds, thermal fabrics, and positioning strategies for maximum savings.',
    content: `In Dubai, air conditioning accounts for up to 70% of a commercial building's electricity bill. The right window coverings can significantly reduce this cost.

## How Blinds Save Energy

Window coverings reduce cooling costs through:
- **Solar heat gain reduction**: Blocking up to 80% of solar radiation
- **Insulation**: Creating an air gap between window and room
- **Glare reduction**: Reducing the need for artificial lighting
- **Automated scheduling**: Closing blinds during peak heat hours

## Best Blind Types for Energy Efficiency

### Cellular/Pleated Blinds
The honeycomb structure traps air, providing excellent insulation. Best for offices with high cooling loads.

### Roller Blinds with Sunscreen Fabric
Blocks UV rays while maintaining visibility. Reduces heat gain without darkening the space.

### Smart Motorized Blinds
Programmable to close during peak sun hours (10am-3pm) and open during cooler periods. Can reduce AC costs by up to 30%.

## Dubai-Specific Tips

- **East-facing windows**: Close blinds by mid-morning
- **South-facing windows**: Keep closed during midday (11am-3pm)
- **West-facing windows**: Close from early afternoon
- **North-facing windows**: Minimal heat gain, keep open for natural light

## Calculate Your Savings

Use our [free quote calculator](/estimate) to see how much you could save with energy-efficient blinds.

## ROI Analysis

| Investment | Average Payback Period |
|------------|----------------------|
| Roller blinds (sunscreen) | 12-18 months |
| Pleated/cellular blinds | 8-14 months |
| Smart motorized blinds | 18-24 months |

Ready to start saving? [Get your free quote](/estimate) today.`,
  },
  ...NEW_BLOG_POSTS,
};

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return Object.keys(BLOG_POSTS).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS[params.slug as keyof typeof BLOG_POSTS];
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | Curtain Makers Blog`,
    description: post.metaDesc,
    openGraph: {
      title: post.title,
      description: post.metaDesc,
      type: 'article',
      publishedTime: post.date,
    },
    alternates: {
      canonical: `https://curtainmakers.ae/blog/${params.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS[params.slug as keyof typeof BLOG_POSTS];
  if (!post) notFound();

  return (
    <div style={{ backgroundColor: 'var(--color-navy-900)' }}>
      <section className="pt-24 pb-4">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-sm text-deep-400">
            <Link href="/" className="hover:text-brand-400">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-brand-400">Blog</Link>
            <span>/</span>
            <span className="text-deep-200">{post.title}</span>
          </nav>
        </div>
      </section>

      <article className="pb-20">
        <div className="container-wide max-w-3xl">
          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 text-sm text-deep-400 mb-4">
              <span className="px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs font-medium">
                {post.category}
              </span>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {post.title}
            </h1>
            <p className="text-deep-400 text-sm mt-3">By {post.author}</p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            {(() => {
              const lines = post.content.split('\n');
              const elements: React.ReactNode[] = [];
              let inTable = false;
              let tableRows: string[][] = [];
              let inList = false;
              let listItems: React.ReactNode[] = [];

              const flushList = () => {
                if (inList && listItems.length > 0) {
                  elements.push(<ul key={`ul-${elements.length}`} className="space-y-1 mb-4">{listItems}</ul>);
                  listItems = [];
                  inList = false;
                }
              };

              const renderInline = (text: string) => {
                // Handle inline links: [text](/path)
                const linkRegex = /\[([^\]]+)\]\(\/([^)]+)\)/g;
                const parts: React.ReactNode[] = [];
                let lastIdx = 0;
                let match;
                let idx = 0;
                while ((match = linkRegex.exec(text)) !== null) {
                  if (match.index > lastIdx) {
                    parts.push(text.slice(lastIdx, match.index));
                  }
                  parts.push(<Link key={`l-${idx++}`} href={`/${match[2]}`} className="text-brand-400 hover:underline">{match[1]}</Link>);
                  lastIdx = match.index + match[0].length;
                }
                if (lastIdx < text.length) {
                  parts.push(text.slice(lastIdx));
                }
                // Handle bold
                return parts.length > 0 ? parts : text;
              };

              lines.forEach((line, i) => {
                if (line.startsWith('## ')) {
                  flushList();
                  elements.push(<h2 key={i} className="text-xl font-bold text-white mt-10 mb-4">{line.replace('## ', '')}</h2>);
                } else if (line.startsWith('### ')) {
                  flushList();
                  elements.push(<h3 key={i} className="text-lg font-semibold text-white mt-8 mb-3">{line.replace('### ', '')}</h3>);
                } else if (line.startsWith('|') && line.endsWith('|') && line.includes('---') === false) {
                  // Table data row
                  flushList();
                  inTable = true;
                  const cells = line.split('|').filter(Boolean).map(c => c.trim());
                  tableRows.push(cells);
                } else if (line.startsWith('|') && line.includes('---')) {
                  // Table header separator - skip
                } else if (inTable && line.trim() === '') {
                  // End of table
                  if (tableRows.length > 0) {
                    const header = tableRows[0];
                    const body = tableRows.slice(1);
                    elements.push(
                      <table key={`t-${i}`} className="w-full text-sm mb-6 border-collapse">
                        <thead>
                          <tr className="border-b border-navy-700">
                            {header.map((h, ci) => <th key={ci} className="text-left py-2 pr-4 text-white font-semibold">{h}</th>)}
                          </tr>
                        </thead>
                        <tbody>
                          {body.map((row, ri) => (
                            <tr key={ri} className="border-b border-navy-800">
                              {row.map((cell, ci) => <td key={ci} className="py-2 pr-4 text-deep-300">{cell}</td>)}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    );
                  }
                  tableRows = [];
                  inTable = false;
                } else if (line.startsWith('- ') || line.startsWith('* ')) {
                  inList = true;
                  listItems.push(<li key={`li-${i}`} className="text-deep-300 text-sm ml-4 mb-1 list-disc">{renderInline(line.replace(/^[-*] /, ''))}</li>);
                } else if (line.startsWith('[') && line.includes('](/')) {
                  flushList();
                  const match = line.match(/\[(.+?)\]\(\/(.+?)\)/);
                  if (match) {
                    elements.push(<p key={i} className="mb-4"><Link href={`/${match[2]}`} className="text-brand-400 hover:underline text-sm">{match[1]}</Link></p>);
                  }
                } else if (line.trim() === '') {
                  flushList();
                  elements.push(<div key={`sp-${i}`} className="h-4" />);
                } else {
                  flushList();
                  elements.push(<p key={i} className="text-deep-300 text-sm leading-relaxed mb-4">{renderInline(line)}</p>);
                }
              });
              flushList();
              return elements;
            })()}
          </div>

          {/* Share + CTA */}
          <div className="mt-12 p-8 rounded-2xl card text-center">
            <h3 className="text-xl font-bold text-white mb-3">Ready for Your Free Quote?</h3>
            <p className="text-deep-300 text-sm mb-6">Get an instant estimate for your Abu Dhabi or Dubai project, takes 2 minutes.</p>
            <Link
              href="/estimate"
              className="btn-primary"
            >
              Get Free Quote
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}