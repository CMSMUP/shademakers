import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import CurtainPriceCalculator from "@/components/CurtainPriceCalculator";
import NewsletterSignup from "@/components/NewsletterSignup";

const CURTAIN_STYLES = [
  { name: "Pinch Pleat Curtains", desc: "The most popular curtain style in Abu Dhabi. Stitched and pinched pleats create elegant flowing fabric folds.", tag: "Best Seller" },
  { name: "Ripple Wave Curtains", desc: "Sleek, modern S-wave folds with continuous even fabric drapes. Minimalist luxury for contemporary spaces.", tag: "Modern" },
  { name: "Pair Curtains", desc: "Double layer curtains — sheers behind blackout drapes. Hundreds of color and texture combinations.", tag: "Recommended" },
  { name: "Vogue (Curtain + Roller)", desc: "Innovative curtain and roller blind combination. Blackout or sheer on either side.", tag: "Innovative" },
  { name: "Fancy Curtains", desc: "Roman blind paired with sheer curtains — classic elegance with a touch of fancy.", tag: "Elegant" },
  { name: "Curtain Pelmet Box", desc: "Wooden pelmet boxes conceal curtain tracks with fabric-upholstered frames. LED-lighted options available.", tag: "Premium" },
  { name: "Royal Luxury Curtains", desc: "Velvet, silk, and jacquard fabrics with ornate details, tassels, fringes, and embroidery. Preferred by villa owners.", tag: "Luxury" },
  { name: "Motorized Curtains", desc: "Automated curtains with remote, app, or voice control (Alexa/Google Assistant). Set timers for sunrise/sunset.", tag: "Smart" },
  { name: "Pencil Pleat Curtains", desc: "Classic vertical folds created with drawn cords in the heading tape. Timeless and versatile.", tag: "Classic" },
  { name: "Pole Ring Curtains", desc: "Decorative pole and ring design with visible rings that add definition to windows.", tag: "Decorative" },
  { name: "Curtain Valances", desc: "Victorian-era valances add a polished, sophisticated appearance to any window.", tag: "Add-on" },
  { name: "Curtain Borders", desc: "Stitched fabric border trims that add decorative accents and visual interest to plain curtains.", tag: "Add-on" },
];

const FABRIC_TYPES = [
  { name: "Blackout Fabric", count: "2,500+", desc: "100% light blocking. Poly/Cotton + Silicon coating. Complete darkness for bedrooms and AV rooms." },
  { name: "Sheer & Chiffon", count: "1,000+", desc: "Translucent and see-through. Softens home lighting beautifully." },
  { name: "Dim-out Fabric", count: "200+", desc: "Blocks 80% of light. Poly/Linen/Silk blends. Perfect for living areas." },
  { name: "Cotton Fabric", count: "200+", desc: "100% natural cotton. Soft, breathable, and eco-friendly." },
  { name: "Velvet Curtains", count: "Premium", desc: "Luxurious velvet textures. Rich colors and opulent drape." },
  { name: "Designer Fabrics", count: "Curated", desc: "Interior designer-curated collections. Exclusive patterns and weaves." },
  { name: "Linen Curtains", count: "Premium", desc: "Natural linen fabrics. Timeless texture and elegant simplicity." },
  { name: "Satin Fabric", count: "Premium", desc: "Shiny, smooth textured fabrics. Glamorous and light-reflecting." },
];

const ROOM_TYPES = [
  { name: "Bedroom Curtains", icon: "🛏️", desc: "Blackout lined for perfect sleep. Soft fabrics for a cozy sanctuary." },
  { name: "Living Area Curtains", icon: "🛋️", desc: "Statement curtains that define your living space. Light control and style." },
  { name: "Kids Room Curtains", icon: "🧸", desc: "Colorful, playful, and practical. Washable fabrics available." },
  { name: "Villa Courtyard", icon: "🌿", desc: "Motorized outdoor curtains for villa courtyards. Weather-resistant." },
  { name: "Hotel Curtains", icon: "🏨", desc: "Contract-grade fabrics meeting hotel standards. Fire retardant options." },
  { name: "Office Curtains", icon: "🏢", desc: "Professional window treatments for corporate environments." },
];

const PRODUCT_SERVICES = [
  { name: "Curtains", desc: "Custom-made curtains in every style — pinch pleat, wave, pencil pleat, pole ring, and more." },
  { name: "Roller Blinds", desc: "Sleek roller blinds in blackout, sunscreen, and translucent fabrics." },
  { name: "Roman Blinds", desc: "Elegant fabric-fold blinds for a tailored, soft window finish." },
  { name: "Wooden Blinds", desc: "Classic wooden Venetian blinds in real wood and faux wood options." },
  { name: "Vertical Blinds", desc: "Practical vertical vanes for large windows and sliding doors." },
  { name: "Curtain Motors", desc: "Automate any curtain with silent motors. Remote, app, or voice control." },
  { name: "Fly Screen Mesh", desc: "Fiberglass insect screens that allow fresh air and visibility." },
  { name: "Home Automation", desc: "Smart home integration — sensors, controllers, and energy savings." },
  { name: "Custom Frames", desc: "Unique decorative frames, ogee molding, fluted designs for any room." },
  { name: "Sofa & Cushions", desc: "Custom upholstered furniture and cushions to match your curtains." },
];

const COMPARISON_FEATURES = [
  { feature: "In-House Manufacturing", us: "Yes — full control over quality", others: "Usually outsourced" },
  { feature: "Fabric Collection", us: "3,700+ fabrics in stock", others: "Limited selection" },
  { feature: "Design Visit", us: "Free — we come to you with catalogs", others: "Paid or showroom only" },
  { feature: "Installation Time", us: "3 days from confirmation", others: "1–3 weeks" },
  { feature: "Online Pricing", us: "Instant calculator, transparent", others: "Quote only, opaque" },
  { feature: "Warranty", us: "3 years with free repairs", others: "1 year standard" },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO — Dark bg, single color ===== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 pb-12" style={{ backgroundColor: 'var(--color-navy-900)' }}>
        <div className="container-wide relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="section-label">
              <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: 'var(--color-brand-500)' }} />
              Best Curtain Shop in Abu Dhabi
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight mb-6" style={{ color: 'var(--color-deep-50)' }}>
              Buy Premium{' '}
              <span style={{ color: 'var(--color-brand-500)' }}>Curtains &amp; Blinds</span>
              <br />
              <span style={{ color: 'var(--color-deep-100)' }}>in Abu Dhabi &amp; Dubai</span>
            </h1>

            <p className="text-lg sm:text-xl max-w-xl leading-relaxed mb-8" style={{ color: 'var(--color-deep-300)' }}>
              Abu Dhabi&apos;s most trusted curtain shop. Thousands of fabrics, in-house manufacturing, and professional installation.
              <span className="font-semibold block mt-2" style={{ color: 'var(--color-brand-400)' }}>
                Free design visit. Free project quote. Installation in 3 days.
              </span>
            </p>

            {/* Offer badges — single color tone */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1.5 rounded-full text-xs font-bold" style={{ backgroundColor: 'rgba(229,180,60,0.15)', color: 'var(--color-brand-400)', border: '1px solid rgba(229,180,60,0.2)' }}>30% OFF Selected Fabrics</span>
              <span className="px-3 py-1.5 rounded-full text-xs font-bold" style={{ backgroundColor: 'rgba(229,180,60,0.15)', color: 'var(--color-brand-400)', border: '1px solid rgba(229,180,60,0.2)' }}>3 Year Warranty</span>
              <span className="px-3 py-1.5 rounded-full text-xs font-bold" style={{ backgroundColor: 'rgba(229,180,60,0.15)', color: 'var(--color-brand-400)', border: '1px solid rgba(229,180,60,0.2)' }}>Free Design Visit</span>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6">
              {['Curtain Specialists', 'In-House Manufacturing', '3,700+ Fabrics', '3-Day Installation'].map((badge) => (
                <div key={badge} className="flex items-center gap-1.5 text-sm" style={{ color: 'var(--color-deep-400)' }}>
                  <svg className="w-4 h-4" style={{ color: 'var(--color-brand-500)' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {badge}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/contact" className="btn-primary text-base">
                Book Free Design Visit
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/products" className="btn-secondary" style={{ borderColor: 'var(--color-deep-100)', color: 'var(--color-deep-50)' }}>
                Browse Products
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-2 mt-6 text-deep-400 text-xs">
              <span className="text-brand-500 font-bold text-sm">★★★★★</span>
              <span>Five-star reviews from Abu Dhabi homeowners</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CURTAINMAKERS — Comparison — Light bg ===== */}
      <section className="section" style={{ backgroundColor: 'var(--color-deep-50)' }}>
        <div className="container-wide">
          <div className="text-center mb-12">
            <div className="section-label text-center justify-center">Why CurtainMakers</div>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4" style={{ color: 'var(--color-navy-900)' }}>
              How We Compare to{' '}
              <span style={{ color: 'var(--color-brand-500)' }}>Other Curtain Companies</span>
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--color-navy-500)' }}>
              We don&apos;t cut corners. Here&apos;s how we deliver more value, better quality, and faster service.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-deep-200 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-deep-200" style={{ backgroundColor: 'var(--color-navy-900)' }}>
                  <th className="text-left py-4 px-5 text-white font-semibold">Feature</th>
                  <th className="text-left py-4 px-5 text-brand-400 font-semibold">CurtainMakers</th>
                  <th className="text-left py-4 px-5 text-deep-400 font-medium">Other Companies</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_FEATURES.map((row, i) => (
                  <tr key={i} className="border-b border-deep-100 last:border-0 hover:bg-deep-50 transition-colors">
                    <td className="py-3.5 px-5 text-navy-900 font-medium">{row.feature}</td>
                    <td className="py-3.5 px-5">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-navy-900">{row.us}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-5 text-deep-500">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== CURTAIN PRICE CALCULATOR — White bg ===== */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="text-center mb-10">
            <div className="section-label text-center justify-center">Curtains Estimator</div>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4" style={{ color: 'var(--color-navy-900)' }}>
              <span style={{ color: 'var(--color-brand-500)' }}>Curtain</span> Price Calculator
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--color-navy-500)' }}>
              Choose your curtain style, fabric tier, and operation for an instant estimate. First in Abu Dhabi — online curtain pricing.
            </p>
          </div>
          <CurtainPriceCalculator />
        </div>
      </section>

      {/* ===== CURTAIN STYLES — Light bg ===== */}
      <section className="section" style={{ backgroundColor: 'var(--color-deep-50)' }}>
        <div className="container-wide">
          <div className="text-center mb-12">
            <div className="section-label text-center justify-center">Abu Dhabi Curtain Styles</div>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4" style={{ color: 'var(--color-navy-900)' }}>
              Complete Guide to Different Types of{' '}
              <span style={{ color: 'var(--color-brand-500)' }}>Curtains</span>
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--color-navy-500)' }}>
              From perfectly pleated panel curtains to sophisticated royal valances — explore our full range of made-to-measure curtain styles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {CURTAIN_STYLES.map((style, i) => (
              <div key={i} className="card p-5 group">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-semibold text-sm group-hover:text-brand-500 transition-colors" style={{ color: 'var(--color-navy-900)' }}>{style.name}</h3>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-brand-500/10 text-brand-500">{style.tag}</span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-navy-500)' }}>{style.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/products" className="btn-primary">
              View All Curtains &amp; Blinds
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FABRIC FEATURES — White bg ===== */}
      <section className="section" style={{ backgroundColor: 'white' }}>
        <div className="container-wide">
          <div className="text-center mb-12">
            <div className="section-label text-center justify-center">Our Fabric Collection</div>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4" style={{ color: 'var(--color-navy-900)' }}>
              <span style={{ color: 'var(--color-brand-500)' }}>3,700+</span> Curtain Fabrics in Stock
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--color-navy-500)' }}>
              From 100% blackout to light sheers — every fabric is quality checked for shading, durability, and finish.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FABRIC_TYPES.map((fabric, i) => (
              <div key={i} className="card-dark p-5 group hover:border-brand-500/30 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-semibold text-sm">{fabric.name}</h3>
                  <span className="text-brand-500 text-xs font-bold">{fabric.count}</span>
                </div>
                <p className="text-deep-400 text-xs leading-relaxed">{fabric.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ROOMS — Light bg ===== */}
      <section className="section" style={{ backgroundColor: 'var(--color-deep-50)' }}>
        <div className="container-wide">
          <div className="text-center mb-12">
            <div className="section-label text-center justify-center">By Room Type</div>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4" style={{ color: 'var(--color-navy-900)' }}>
              Curtains Designed for{' '}
              <span style={{ color: 'var(--color-brand-500)' }}>Every Room</span>
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--color-navy-500)' }}>
              Each room has its own personality. We help you find the perfect curtain style, fabric, and finish.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ROOM_TYPES.map((room, i) => (
              <div key={i} className="card p-6 group flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ backgroundColor: 'rgba(229, 180, 60, 0.1)', border: '1px solid rgba(229, 180, 60, 0.15)' }}>
                  {room.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-sm group-hover:text-brand-500 transition-colors" style={{ color: 'var(--color-navy-900)' }}>{room.name}</h3>
                  <p className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--color-navy-500)' }}>{room.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS & SERVICES — Light bg ===== */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <div className="section-label text-center justify-center">Products & Services</div>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4" style={{ color: 'var(--color-navy-900)' }}>
              Complete{' '}
              <span style={{ color: 'var(--color-brand-500)' }}>Interior Solutions</span>
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--color-navy-500)' }}>
              Beyond curtains — we supply and install blinds, flooring, automation, and custom furniture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PRODUCT_SERVICES.map((item, i) => (
              <div key={i} className="card p-5 group">
                <h3 className="font-semibold text-sm mb-1.5 group-hover:text-brand-500 transition-colors" style={{ color: 'var(--color-navy-900)' }}>{item.name}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-navy-500)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BLINDS PRODUCTS GRID — Light bg ===== */}
      <section className="section" style={{ backgroundColor: 'var(--color-deep-50)' }}>
        <div className="container-wide">
          <div className="text-center mb-12">
            <div className="section-label text-center justify-center">Blinds Range</div>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4" style={{ color: 'var(--color-navy-900)' }}>
              Premium{' '}
              <span style={{ color: 'var(--color-brand-500)' }}>Blinds</span> Collection
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--color-navy-500)' }}>
              Roller, Venetian, Roman, Vertical, and Smart Motorized blinds — all made-to-measure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[
              { slug: "roller-blinds", name: "Roller Blinds", tagline: "Sleek. Minimal. Professional.", desc: "Blackout, Sunscreen & Translucent options", icon: "▤" },
              { slug: "roman-blinds", name: "Roman Blinds", tagline: "Timeless. Soft. Luxurious.", desc: "Soft fabric folds for elegant spaces", icon: "⌺" },
              { slug: "wooden-venetian-blinds", name: "Wooden Venetian", tagline: "Classic. Warm. Prestigious.", desc: "50mm & 25mm real and faux wood", icon: "▦" },
              { slug: "aluminium-venetian-blinds", name: "Aluminium Venetian", tagline: "Sleek. Durable. Contemporary.", desc: "50mm, 25mm & Perforated options", icon: "▭" },
              { slug: "vertical-blinds", name: "Vertical Blinds", tagline: "Practical. Spacious. Modern.", desc: "Perfect for large windows and doors", icon: "∥" },
              { slug: "zebra-blinds", name: "Zebra Blinds", tagline: "Dual layer. Elegant. Versatile.", desc: "Day & Night zebra blinds", icon: "≡" },
              { slug: "smart-blinds", name: "Smart Motorized", tagline: "Automated. Effortless.", desc: "App, voice & schedule controlled", icon: "⚡" },
              { slug: "pleated-blinds", name: "Pleated Blinds", tagline: "Compact. Efficient.", desc: "Energy-saving cellular blinds", icon: "≋" },
              { slug: "panel-blinds", name: "Panel Blinds", tagline: "Contemporary. Minimal.", desc: "Sliding panels for large spans", icon: "▯" },
              { slug: "skylight-blinds", name: "Skylight Blinds", tagline: "Specialist. Precision.", desc: "Custom roof window solutions", icon: "◈" },
              { slug: "flyscreen-blinds", name: "Flyscreen Blinds", tagline: "Protection. Ventilation.", desc: "Insect screens that blend in", icon: "⊞" },
            ].map((product, i) => (
              <ProductCard key={product.slug} slug={product.slug} name={product.name} tagline={product.tagline} desc={product.desc} icon={product.icon} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS / PROCESS — Light bg ===== */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <div className="section-label text-center justify-center">Simple Process</div>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4" style={{ color: 'var(--color-navy-900)' }}>
              Ordering Curtains Is{' '}
              <span style={{ color: 'var(--color-brand-500)' }}>as Simple as 1, 2, 3</span>
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--color-navy-500)' }}>
              Choose from our selection of curtain design themes. Continuous support and warranty on all products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { num: "1", title: "Free Design Consultation", desc: "Our curtain experts visit your home with catalogs and help you design your space. Thousands of fabric choices at your doorstep.", icon: "📋" },
              { num: "2", title: "Confirm at Home", desc: "Choose the perfect design, fabrics, and pricing at your place at your convenient time. No showroom visits needed.", icon: "✓" },
              { num: "3", title: "Installed in 3 Days", desc: "Enjoy quick curtain fixing, neat stitching, and quality workmanship. Full installation within 3 days of confirmation.", icon: "🔧" },
            ].map((step, i) => (
              <div key={i} className="card p-6 text-center group">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform text-2xl" style={{ backgroundColor: 'rgba(229, 180, 60, 0.1)', border: '1px solid rgba(229, 180, 60, 0.2)' }}>
                  {step.icon}
                </div>
                <div className="text-brand-500 font-bold text-lg mb-1">Step {step.num}</div>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: 'var(--color-navy-900)' }}>{step.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-navy-500)' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="section pt-0" style={{ backgroundColor: 'var(--color-deep-50)' }}>
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Project-Scale Delivery", desc: "From 10 windows to 1,000+ — we handle full floor and tower fit-outs with dedicated project managers." },
              { title: "Instant Project Quoting", desc: "Get a preliminary estimate in minutes. Our smart calculator scales from single rooms to full projects." },
              { title: "Free On-Site Survey", desc: "Our experts visit your site, take precise measurements, and recommend solutions per facade & orientation." },
              { title: "Certified Installation", desc: "Trained installation crews. After-hours & weekend options to avoid disruption." },
              { title: "Full Warranty & AMC", desc: "3-year warranty on all products with optional annual maintenance contracts." },
              { title: "Live Project Tracking", desc: "From quote to handover — track production, delivery, and installation status online." },
            ].map((item, i) => (
              <div key={i} className="card p-6 group">
                <h3 className="font-semibold text-sm mb-2 group-hover:text-brand-500 transition-colors" style={{ color: 'var(--color-navy-900)' }}>{item.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-navy-500)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="section" style={{ backgroundColor: 'var(--color-deep-50)' }}>
        <div className="container-wide">
          <div className="card p-8 md:p-12 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: 'var(--color-navy-900)' }}>
              Join Abu Dhabi&apos;s{' '}
              <span style={{ color: 'var(--color-brand-500)' }}>Curtain Club</span>
            </h2>
            <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: 'var(--color-navy-500)' }}>
              Get exclusive discounts on curtains, free pillow matching with your curtain fabrics, free swatch samples, curtain design ideas, and more!
            </p>
            <NewsletterSignup />
            <p className="text-deep-400 text-[11px] mt-3">We don&apos;t share your info with anyone. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* ===== AREAS WE SERVE ===== */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <div className="section-label text-center justify-center">Service Areas</div>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4" style={{ color: 'var(--color-navy-900)' }}>
              Serving{' '}
              <span style={{ color: 'var(--color-brand-500)' }}>All of Abu Dhabi &amp; Dubai</span>
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--color-navy-500)' }}>
              From Al Reem Island to Dubai Marina — we cover every emirate with dedicated project crews.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Abu Dhabi City", href: "/areas/abu-dhabi" },
              { label: "Dubai Marina & JLT", href: "/areas/dubai-marina" },
              { label: "Business Bay & DIFC", href: "/areas/business-bay" },
              { label: "Downtown Dubai", href: "/areas/downtown-dubai" },
              { label: "Dubai Silicon Oasis", href: "/areas/dubai-silicon-oasis" },
              { label: "Al Reem Island", href: "/areas/al-reem-island" },
              { label: "Saadiyat Island", href: "/areas/saadiyat-island" },
              { label: "Al Raha Beach", href: "/areas/al-rah-beach" },
            ].map((area) => (
              <Link key={area.label} href={area.href} className="card p-3 text-center group hover:border-brand-500/50 transition-all">
                <h3 className="font-semibold text-xs group-hover:text-brand-500 transition-colors" style={{ color: 'var(--color-navy-900)' }}>{area.label}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA — Dark bg ===== */}
      <section className="section" style={{ backgroundColor: 'var(--color-navy-900)' }}>
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto">
            <div className="section-label text-center justify-center">Ready to Start?</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-2" style={{ color: 'var(--color-deep-50)' }}>
              Book Your Free Curtain Design Visit
            </h2>
            <p className="text-lg mb-8" style={{ color: 'var(--color-deep-300)' }}>
              Our curtain experts will visit your home with catalogs and help you design your perfect space.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="btn-primary text-base">
                Book Free Visit
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/estimate" className="btn-secondary" style={{ borderColor: 'var(--color-deep-100)', color: 'var(--color-deep-50)' }}>
                Calculate Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section" style={{ backgroundColor: 'var(--color-deep-50)' }}>
        <div className="container-wide max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-navy-900)' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {[
              { q: "How do I order curtains in Abu Dhabi?", a: "It's simple! Book a free design visit, our experts come to you with catalogs, you select fabrics and designs at home, and we install within 3 days." },
              { q: "Do you offer free curtain design visits?", a: "Yes! Our curtain experts will visit your home with hundreds of fabric catalogs at no cost. We help you measure, select, and design at your convenience." },
              { q: "How many fabrics do you have?", a: "We have thousands of curtain fabrics — over 2,500 blackout options, 1,000+ sheers, 200+ cotton collections, plus premium velvets, linens, and designer fabrics." },
              { q: "How long does installation take?", a: "Installation takes just 3 days after design confirmation. We offer fast curtain fixing with neat stitching and quality workmanship." },
              { q: "What areas do you serve?", a: "All of Abu Dhabi and Dubai — including Al Reem Island, Saadiyat Island, Al Raha Beach, Dubai Marina, Business Bay, DIFC, and Downtown Dubai." },
              { q: "Do you offer warranty?", a: "Yes — 3 years warranty on all curtain products including free repairs. Optional annual maintenance contracts available." },
            ].map((faq, i) => (
              <details key={i} className="card p-5 group cursor-pointer">
                <summary className="font-medium text-sm flex items-center justify-between list-none" style={{ color: 'var(--color-navy-900)' }}>
                  {faq.q}
                  <svg className="w-4 h-4 group-open:rotate-180 transition-transform" style={{ color: 'var(--color-navy-400)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-sm mt-3 leading-relaxed" style={{ color: 'var(--color-navy-500)' }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WhatsApp Floating ===== */}
      <Link
        href="https://wa.me/+97123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.581-.075-.21-.67-1.625-.92-2.236-.24-.596-.481-.498-.67-.498-.171-.005-.375-.005-.564-.005-.197 0-.522.074-.796.372-.274.298-1.048 1.024-1.048 2.496 0 1.473.89 2.616 1.016 2.796.124.18 1.753 2.877 4.246 3.902.593.246 1.056.396 1.417.507.594.186 1.137.163 1.563.1.482-.074 1.497-.612 1.707-1.204.224-.615.224-1.136.16-1.24-.064-.1-.238-.149-.525-.3z" />
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10c1.797 0 3.542-.48 5.072-1.382l3.26.865-.88-3.27A9.94 9.94 0 0022 12c0-5.514-4.486-10-10-10zm5.584 14.534a8.22 8.22 0 01-1.082 1.163c-.564.498-1.302 1.013-2.18 1.326-.713.257-1.485.345-2.322.345-3.766 0-6.93-2.64-6.93-6.942 0-1.792.648-3.451 1.826-4.711.566-.609 1.278-1.088 2.095-1.413.205-.083.418-.143.638-.18.374-.068.718-.052 1.04.243.286.264.818.945 1.022 1.242.092.133.153.28.153.442 0 .465-.376.932-.47 1.072a.452.452 0 01-.295.168c-.06.012-.137.02-.215.04-.08.018-.18.073-.27.145-.19.154-.548.462-.575.746-.037.36.318.54.531.663l.084.05c.306.199.646.474.909.805.416.527.418 1.117.04 1.688-.04.057-.17.27-.238.412-.085.172-.27.108-.416.157a.85.85 0 01-.219.05c-.061.011-.113.03-.164.053a1.43 1.43 0 00-.456.264c-.189.175-.38.406-.415.697-.04.36.198.676.411.921.375.434.938.679 1.532.857.08.023.16.046.24.067.024.007.046.016.07.023.024.006.064.013.116.025.16.037.326.076.5.117.324.075.66.19.96.35 1.406.745 2.05 2.034 2.586 2.637a2.46 2.46 0 01.606.862c.6 1.257.615 2.064.615 2.246 0 .187-.029.505-.267.831z" />
        </svg>
      </Link>
    </>
  );
}