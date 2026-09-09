// ============================================================
// Curtain Makers — 50 Customer FAQ Knowledge Base
// For AI reply machine & chatbot
// ============================================================

export interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
  keywords: string[];
  relatedQuestions: string[];
}

export const FAQS: FAQ[] = [
  // === PRICING ===
  {
    id: 'p1', category: 'Pricing',
    question: 'How much do curtains cost in Abu Dhabi?',
    answer: 'Curtain prices in Abu Dhabi vary by style, fabric, and size. At Curtain Makers, our Value tier starts from AED 180/m, Mid Range from AED 380/m, and Premium from AED 750/m. All prices include the curtain style, fabric, lining, and track. Get an instant estimate using our online Curtain Price Calculator. Final pricing is confirmed after a free on-site measurement.',
    keywords: ['price', 'cost', 'how much', 'curtains cost', 'abu dhabi price', 'per meter', 'aed'],
    relatedQuestions: ['p2', 'p3', 'p4'],
  },
  {
    id: 'p2', category: 'Pricing',
    question: 'Do you offer free curtain quotes?',
    answer: 'Yes! We offer free no-obligation quotes for all curtain and blind projects. Use our online calculator for an instant estimate, and our team provides a detailed quote within 24 hours after the free site survey. We are the only curtain company in Abu Dhabi offering transparent online pricing.',
    keywords: ['free quote', 'free estimate', 'quote', 'estimate', 'no obligation'],
    relatedQuestions: ['p1', 'p3', 's1'],
  },
  {
    id: 'p3', category: 'Pricing',
    question: 'What is the average cost of blackout curtains in Abu Dhabi?',
    answer: 'Blackout curtains typically range from AED 380/m to AED 750/m depending on fabric quality. At Curtain Makers, we have over 2,500 blackout fabric options. Mid Range blackout curtains start at AED 380/m including lining. Blackout lining adds approximately 25-40% to the base curtain cost.',
    keywords: ['blackout', 'blackout curtains', 'blackout price', 'light blocking', 'aed blackout'],
    relatedQuestions: ['p1', 'p2', 'f1'],
  },
  {
    id: 'p4', category: 'Pricing',
    question: 'How much do blinds cost for an office in Dubai?',
    answer: 'Office blinds in Dubai start from AED 65/m\u00b2 for Vertical Blinds, AED 75/m\u00b2 for Aluminium Venetian, AED 85/m\u00b2 for Roller Blinds, and AED 110/m\u00b2 for Zebra Blinds. Motorized options start from AED 185/m\u00b2. Volume discounts are available for commercial projects over 100 windows.',
    keywords: ['office blinds', 'dubai office', 'commercial blinds', 'office price', 'per square meter'],
    relatedQuestions: ['p1', 'o1', 'o2'],
  },
  {
    id: 'p5', category: 'Pricing',
    question: 'Are there any discounts or promotions available?',
    answer: 'Yes! We regularly offer up to 30% off selected fabrics. Join Abu Dhabi\'s Curtain Club for exclusive discounts, free pillow matching, free swatch samples, and curtain design ideas. Sign up on our website or ask our team during your free design visit about current promotions.',
    keywords: ['discount', 'promotion', 'sale', 'offer', '30% off', 'curtain club', 'deal'],
    relatedQuestions: ['p2', 'p1', 's1'],
  },

  // === ORDERING & PROCESS ===
  {
    id: 'o1', category: 'Ordering Process',
    question: 'How do I order curtains in Abu Dhabi?',
    answer: 'Ordering is simple: 1) Book a free design visit. 2) Select fabrics, style, and design at your home. 3) We manufacture and install within 3 days. You can also start with our online price calculator for an instant estimate. No showroom visit needed.',
    keywords: ['how to order', 'order curtains', 'process', 'steps', 'buy curtains', 'abu dhabi order'],
    relatedQuestions: ['o2', 'o3', 'o4'],
  },
  {
    id: 'o2', category: 'Ordering Process',
    question: 'How long does curtain installation take?',
    answer: 'Installation takes just 3 days from design confirmation. For large commercial projects (100+ windows), installation is typically completed in 1-3 weeks. Our certified crews work efficiently with minimal disruption to your home or office.',
    keywords: ['installation time', 'how long', 'installation days', '3 days', 'quick installation', 'fitting'],
    relatedQuestions: ['o1', 'o3', 'i1'],
  },
  {
    id: 'o3', category: 'Ordering Process',
    question: 'Do I need to visit a showroom to order curtains?',
    answer: 'No! We bring the showroom to you. Our experts visit your home with fabric catalogs and samples, take precise measurements, and help you design your perfect curtains. Free service with no obligation.',
    keywords: ['showroom', 'home visit', 'design visit', 'in-home', 'catalogs', 'samples', 'free visit'],
    relatedQuestions: ['o1', 'o2', 's1'],
  },
  {
    id: 'o4', category: 'Ordering Process',
    question: 'Can I order curtains online?',
    answer: 'Yes! Curtain Makers is the first company in Abu Dhabi to offer online curtain pricing. Use our calculator for an instant estimate, add rooms and windows through our quote builder, and download the estimate as PDF or email. For fabric selection we recommend a free in-home design visit.',
    keywords: ['online order', 'order online', 'website', 'buy online', 'ecommerce'],
    relatedQuestions: ['o1', 'o3', 'p1', 'p2'],
  },

  // === SERVICES ===
  {
    id: 's1', category: 'Services',
    question: 'Do you offer free curtain design visits?',
    answer: 'Yes, absolutely! Our curtain experts come to your home or office with fabric catalogs and samples. We measure windows, recommend styles, and provide an instant quote at no cost with no obligation. Covers all of Abu Dhabi and Dubai.',
    keywords: ['free design visit', 'design consultation', 'free consultation', 'home visit', 'in-home service', 'measurement'],
    relatedQuestions: ['o3', 'o1', 's2'],
  },
  {
    id: 's2', category: 'Services',
    question: 'What areas do you serve?',
    answer: 'All of Abu Dhabi and Dubai including: Abu Dhabi City, Al Reem Island, Saadiyat Island, Al Raha Beach, Khalifa City, Al Ain, Dubai Marina, JLT, Business Bay, DIFC, Downtown Dubai, and Dubai Silicon Oasis. We also cover Sharjah, Ajman, and Ras Al Khaimah.',
    keywords: ['service area', 'areas', 'abu dhabi', 'dubai', 'locations', 'coverage'],
    relatedQuestions: ['o3', 's1', 's3'],
  },
  {
    id: 's3', category: 'Services',
    question: 'Do you offer commercial curtain and blind services?',
    answer: 'Yes! From single offices to full tower fit-outs, we handle 10 to 1,000+ windows. Services include project management, volume pricing, after-hours installation, and 5-year warranty. Corporate offices, hotels, government buildings, co-working spaces, and retail.',
    keywords: ['commercial', 'business', 'office', 'corporate', 'project', 'fit-out', 'tower', 'hotel'],
    relatedQuestions: ['s1', 's2', 'o1', 'o2'],
  },
  {
    id: 's4', category: 'Services',
    question: 'Do you offer motorized curtain installation?',
    answer: 'Yes! Silent electric motors with remote, app, or voice control (Alexa, Google Assistant). Features: automated scheduling, battery/hardwired options, group control, smart home integration. Battery lasts up to 1 year per charge.',
    keywords: ['motorized', 'electric', 'automated', 'smart', 'motor', 'remote', 'app', 'alexa', 'google home'],
    relatedQuestions: ['s1', 's3', 'p4'],
  },

  // === FABRICS ===
  {
    id: 'f1', category: 'Fabrics',
    question: 'How many curtain fabrics do you have?',
    answer: 'Over 3,700 curtain fabrics in stock: 2,500+ blackout options, 1,000+ sheer and chiffon, 200+ cotton collections, plus premium velvets, linens, designer fabrics, and satin. All quality checked for shading and durability. Sourced from Europe, Turkey, India, and China.',
    keywords: ['fabrics', 'how many', 'collection', 'fabric count', 'blackout', 'sheer', 'selection'],
    relatedQuestions: ['f2', 'f3', 'f4', 'f5'],
  },
  {
    id: 'f2', category: 'Fabrics',
    question: 'What types of curtain fabrics do you offer?',
    answer: '8 main categories: 1) Blackout (100% light block, 2,500+), 2) Sheer/Chiffon (translucent, 1,000+), 3) Dim-out (80% block), 4) Cotton (natural, breathable), 5) Velvet (luxurious), 6) Designer Collections (curated), 7) Linen (natural elegance), 8) Satin (shiny, smooth).',
    keywords: ['fabric types', 'types of fabric', 'which fabric', 'material', 'velvet', 'linen', 'cotton', 'satin'],
    relatedQuestions: ['f1', 'f3', 'f4', 'c1'],
  },
  {
    id: 'f3', category: 'Fabrics',
    question: 'What is the difference between blackout and dim-out curtains?',
    answer: 'Blackout blocks 100% of light using poly/cotton with silicon coating ideal for bedrooms. Dim-out blocks approximately 80% of light, softening sunlight while maintaining warmth, perfect for living rooms.',
    keywords: ['blackout vs dimout', 'difference', 'light blocking', 'opacity', 'dimout'],
    relatedQuestions: ['f2', 'f1', 'c1'],
  },
  {
    id: 'f4', category: 'Fabrics',
    question: 'Which curtain fabric is best for Abu Dhabi\'s climate?',
    answer: 'Blackout lined curtains for bedrooms (blocks heat and light). Sunscreen roller blinds for offices (UV protection with visibility). Thermal pleated blinds for energy efficiency. Linen and cotton blends breathe well for living areas.',
    keywords: ['climate', 'abu dhabi weather', 'heat', 'sun', 'hot climate', 'thermal', 'uv protection'],
    relatedQuestions: ['f2', 'f3', 'c1', 'c2'],
  },
  {
    id: 'f5', category: 'Fabrics',
    question: 'Can I get fabric samples before ordering?',
    answer: 'Yes! Our experts bring fabric catalogs and swatches during your free design visit. Join Abu Dhabi\'s Curtain Club for free swatch samples by mail. We recommend seeing fabrics in person for accurate color matching.',
    keywords: ['samples', 'swatches', 'fabric samples', 'sample request', 'see before buy', 'color matching'],
    relatedQuestions: ['f1', 'f2', 'o3', 's1'],
  },

  // === CURTAIN STYLES ===
  {
    id: 'c1', category: 'Curtain Styles',
    question: 'What curtain styles do you offer?',
    answer: '12 styles: Pinch Pleat (best seller), Ripple Wave (modern S-wave), Pair Curtains (double layer), Vogue (curtain+roller combo), Fancy (roman+sheer), Pelmet Box (upholstered with LED), Royal Luxury (velvet, tassels), Motorized (app/voice), Pencil Pleat (classic), Pole Ring (decorative), Valances (Victorian), Borders (trim accents).',
    keywords: ['curtain styles', 'curtain types', 'which style', 'pinch pleat', 'wave', 'ripple', 'valance', 'pelmet'],
    relatedQuestions: ['c2', 'c3', 'c4', 'f2'],
  },
  {
    id: 'c2', category: 'Curtain Styles',
    question: 'What is the most popular curtain style in Abu Dhabi?',
    answer: 'Pinch Pleat curtains are the most popular. Pair Curtains (double layer sheers + blackout) are also highly recommended for Abu Dhabi homes. For offices, Ripple Wave curtains are increasingly popular for their clean, minimalist look.',
    keywords: ['popular style', 'best style', 'most common', 'abu dhabi style', 'pinch pleat', 'trending'],
    relatedQuestions: ['c1', 'c3', 'f2'],
  },
  {
    id: 'c3', category: 'Curtain Styles',
    question: 'What is the difference between Pinch Pleat and Ripple Wave curtains?',
    answer: 'Pinch Pleat has stitched pleats creating elegant formal folds. Ripple Wave has continuous S-curve folds without visible pleats for a sleek modern look. Pinch Pleat uses 2.5x fabric fullness, Ripple Wave uses 2.2x.',
    keywords: ['pinch pleat vs wave', 'difference', 'pleat vs ripple', 'pinch pleat', 'ripple wave', 's-wave'],
    relatedQuestions: ['c1', 'c2', 'c4'],
  },
  {
    id: 'c4', category: 'Curtain Styles',
    question: 'Do you offer Royal Swags and Tails curtains?',
    answer: 'Yes! Ornate draped valances with cascading tails using velvet, silk, and jacquard with tassels, fringes, and embroidery. Preferred by villa owners for luxury settings. Requires approximately 4x fabric fullness.',
    keywords: ['royal', 'swags', 'tails', 'valance', 'luxury', 'premium', 'villa', 'ornate'],
    relatedQuestions: ['c1', 'c2', 'f2'],
  },

  // === BLINDS ===
  {
    id: 'b1', category: 'Blinds',
    question: 'What types of blinds do you offer?',
    answer: '11 types: Roller Blinds, Roman Blinds, Wooden Venetian, Aluminium Venetian, Vertical Blinds, Zebra Blinds (Day/Night), Smart Motorized, Pleated (cellular), Panel Blinds, Skylight Blinds, Flyscreen Blinds.',
    keywords: ['blinds types', 'types of blinds', 'roller', 'roman', 'venetian', 'vertical', 'zebra', 'motorized', 'pleated', 'panel', 'skylight'],
    relatedQuestions: ['b2', 'b3', 'b4', 'p4'],
  },
  {
    id: 'b2', category: 'Blinds',
    question: 'What is the best blind for offices in Dubai?',
    answer: 'Roller Blinds (AED 85/m\u00b2) are most popular for their clean look. Blackout for boardrooms, Sunscreen for UV protection with visibility. Smart Motorized Blinds (AED 185/m\u00b2) are increasingly popular for modern offices.',
    keywords: ['best office blinds', 'office blinds dubai', 'commercial blinds', 'roller blinds office', 'dubai office'],
    relatedQuestions: ['b1', 'b3', 'p4', 's3'],
  },
  {
    id: 'b3', category: 'Blinds',
    question: 'What is the difference between blackout and sunscreen roller blinds?',
    answer: 'Blackout blocks 100% of light. Sunscreen allows outward visibility while blocking UV and reducing glare. Blackout has a thicker coated backing; sunscreen has a mesh-like weave.',
    keywords: ['blackout vs sunscreen', 'roller blind types', 'difference', 'uv protection'],
    relatedQuestions: ['b2', 'b1', 'f3'],
  },
  {
    id: 'b4', category: 'Blinds',
    question: 'Do you offer motorized or smart blinds?',
    answer: 'Yes! Available across all blind types. Control via app, voice (Alexa/Google), remote, or automated scheduling. Battery (no wiring, 1yr life), hardwired, or solar power. From AED 185/m\u00b2 with 5-year motor warranty.',
    keywords: ['motorized blinds', 'smart blinds', 'automated', 'app control', 'voice control', 'alexa blinds', 'smart home'],
    relatedQuestions: ['b2', 'b1', 's4', 'p4'],
  },

  // === WARRANTY & AFTERCARE ===
  {
    id: 'w1', category: 'Warranty & Aftercare',
    question: 'What warranty do you offer?',
    answer: '3-year warranty on all curtain products including free repairs. 5-year warranty on motors. Optional annual maintenance contracts (AMC) available for facility managers.',
    keywords: ['warranty', 'guarantee', 'repair', 'maintenance', 'amc', '3 year', '5 year'],
    relatedQuestions: ['w2', 'w3', 's3'],
  },
  {
    id: 'w2', category: 'Warranty & Aftercare',
    question: 'What if something goes wrong after installation?',
    answer: 'We provide responsive after-sales support. Contact us for free inspection and repair during the warranty period. Available Sun-Thu, 9am-6pm. AMC available for commercial clients.',
    keywords: ['problem', 'issue', 'repair', 'after sales', 'support', 'complaint', 'fix'],
    relatedQuestions: ['w1', 'w3', 's3'],
  },
  {
    id: 'w3', category: 'Warranty & Aftercare',
    question: 'Do you clean curtains or blinds?',
    answer: 'We provide care instructions. Most curtains are dry-cleanable. Roller blinds dust or wipe clean. Professional cleaning recommended for velvet/silk. AMC includes scheduled cleaning.',
    keywords: ['cleaning', 'wash', 'dry clean', 'care', 'maintenance', 'clean curtains'],
    relatedQuestions: ['w1', 'w2', 'f5'],
  },

  // === INSTALLATION ===
  {
    id: 'i1', category: 'Installation',
    question: 'How do I measure my windows for curtains?',
    answer: 'Measure track width (left to right) adding 20-30cm each side for stack-back. Measure drop at three points (left, center, right), use the smallest. Better yet, book our free design visit for professional measurement.',
    keywords: ['measure', 'measurement', 'how to measure', 'window size', 'dimensions', 'width', 'drop'],
    relatedQuestions: ['i2', 'i3', 's1', 'o2'],
  },
  {
    id: 'i2', category: 'Installation',
    question: 'Do you install curtains and blinds?',
    answer: 'Yes! Professional installation included. Certified crews experienced in villas, offices, hotels, and commercial buildings. After-hours and weekend installation available for commercial clients.',
    keywords: ['installation', 'install', 'fitting', 'mount', 'professional installation', 'installer'],
    relatedQuestions: ['o2', 'i1', 'i3', 's1'],
  },
  {
    id: 'i3', category: 'Installation',
    question: 'Can you install curtains after I move into my new villa?',
    answer: 'Absolutely! Book a free design visit early. Our experts measure all windows, recommend per-room styles, and provide a complete quote. Full villa installation within 3 days of confirmation.',
    keywords: ['new villa', 'move in', 'new home', 'villa curtains', 'abu dhabi villa', 'new property'],
    relatedQuestions: ['o1', 'o2', 's2', 'i1'],
  },

  // === COMPARISON ===
  {
    id: 'cm1', category: 'Comparison',
    question: 'Why should I choose Curtain Makers over other companies?',
    answer: '1) In-house manufacturing. 2) 3,700+ fabrics in stock. 3) Free in-home design visits. 4) 3-day installation. 5) Online pricing transparency. 6) 3-year warranty. 7) 15+ years, 500+ projects.',
    keywords: ['why choose', 'best company', 'why curtain makers', 'comparison', 'advantages'],
    relatedQuestions: ['cm2', 'o1', 'w1'],
  },
  {
    id: 'cm2', category: 'Comparison',
    question: 'How does Curtain Makers compare to other curtain shops?',
    answer: 'We lead in key areas: in-house manufacturing vs outsourced, 3,700+ fabrics vs limited, free in-home visits vs paid/showroom only, 3-day install vs 1-3 weeks, instant online pricing vs opaque quotes, 3-year warranty vs 1-year standard.',
    keywords: ['vs', 'versus', 'compared to', 'other shops', 'competition', 'better service'],
    relatedQuestions: ['cm1', 'o1', 's1', 'w1'],
  },

  // === PAYMENT ===
  {
    id: 'pm1', category: 'Payment',
    question: 'What payment methods do you accept?',
    answer: 'Cash, bank transfer, credit/debit cards (Visa, Mastercard). Commercial invoicing available. Standard: 70% deposit to confirm, 30% on completion and satisfaction.',
    keywords: ['payment', 'credit card', 'cash', 'bank transfer', 'deposit', 'how to pay'],
    relatedQuestions: ['pm2', 'pm3', 'o1'],
  },
  {
    id: 'pm2', category: 'Payment',
    question: 'Do you offer payment plans?',
    answer: 'Milestone-based payment plans available for commercial projects and bulk orders. Standard residential: 70% deposit, 30% on completion. Contact us for custom arrangements.',
    keywords: ['payment plan', 'installments', 'finance', 'monthly payment', 'milestone'],
    relatedQuestions: ['pm1', 'pm3', 'o1'],
  },
  {
    id: 'pm3', category: 'Payment',
    question: 'Is a deposit required to confirm an order?',
    answer: 'Yes, 70% deposit to confirm and begin manufacturing. 30% balance on completion and satisfaction. Covers fabric procurement and manufacturing costs.',
    keywords: ['deposit', 'advance payment', 'down payment', 'confirm order', '70%'],
    relatedQuestions: ['pm1', 'pm2', 'o1'],
  },

  // === DELIVERY ===
  {
    id: 'd1', category: 'Delivery',
    question: 'How long does it take to get curtains after ordering?',
    answer: 'Manufactured and installed within 3 days of design confirmation. Commercial projects (100+ windows) allow 1-3 weeks.',
    keywords: ['delivery time', 'lead time', 'manufacturing time', 'when ready', '3 days'],
    relatedQuestions: ['o2', 'd2', 'd3', 'i1'],
  },
  {
    id: 'd2', category: 'Delivery',
    question: 'Do you deliver to Dubai from your Abu Dhabi base?',
    answer: 'Yes! Dedicated Dubai commercial division. Same quality, warranty, and service standards. Free site surveys available across both cities.',
    keywords: ['deliver dubai', 'dubai service', 'abu dhabi to dubai', 'dubai office'],
    relatedQuestions: ['s2', 's3', 'd1', 'd3'],
  },
  {
    id: 'd3', category: 'Delivery',
    question: 'Can you ship curtains outside the UAE?',
    answer: 'Our primary service area is Abu Dhabi and Dubai with installation. For overseas orders, contact us to discuss shipping options for fabrics and made-to-measure products.',
    keywords: ['international', 'shipping', 'export', 'outside uae', 'overseas', 'global'],
    relatedQuestions: ['d1', 'd2', 's2'],
  },

  // === PRODUCT SPECIFIC ===
  {
    id: 'ps1', category: 'Products',
    question: 'Do you offer sheer curtains?',
    answer: 'Yes! Over 1,000 sheer and chiffon fabrics in stock. Lightweight, translucent, perfect for living rooms and layering behind blackout curtains.',
    keywords: ['sheer', 'sheer curtains', 'chiffon', 'translucent', 'light filtering'],
    relatedQuestions: ['f2', 'f1', 'c1', 'ps2'],
  },
  {
    id: 'ps2', category: 'Products',
    question: 'Do you offer outdoor curtains?',
    answer: 'Yes! Weather-resistant outdoor curtains for courtyards, poolside pavilions, and terraces. Stainless steel grommets, UV-stabilized fabrics, wind-rated tracks. Motorized options available.',
    keywords: ['outdoor', 'outdoor curtains', 'patio', 'terrace', 'courtyard', 'weather resistant'],
    relatedQuestions: ['ps1', 'b1', 's4'],
  },
  {
    id: 'ps3', category: 'Products',
    question: 'Do you offer curtain tracks and poles?',
    answer: 'Yes! Manual pull cord (AED 45/m), corded wand (AED 65/m), and motorized tracks (AED 150/m). Decorative poles available for pole ring curtain styles. Included in your curtain quote.',
    keywords: ['curtain track', 'curtain pole', 'hardware', 'track system', 'rail', 'rod'],
    relatedQuestions: ['c1', 's4', 'p1'],
  },
  {
    id: 'ps4', category: 'Products',
    question: 'Do you offer curtain valances and pelmets?',
    answer: 'Yes! Victorian-style valances and fabric-upholstered pelmet boxes with optional LED lighting. Add a polished, sophisticated appearance to any window.',
    keywords: ['valance', 'pelmet', 'top treatment', 'decorative top', 'led pelmet'],
    relatedQuestions: ['c1', 'c4', 'ps3'],
  },
  {
    id: 'ps5', category: 'Products',
    question: 'Do you offer flyscreen blinds?',
    answer: 'Yes! Fine fiberglass mesh for insect protection with outward visibility. Standard or Hi-View Mesh options. Roll away when not in use. Ideal for offices and villa doors.',
    keywords: ['flyscreen', 'insect screen', 'mosquito net', 'mesh screen', 'bug screen'],
    relatedQuestions: ['b1', 'b4', 'ps2'],
  },

  // === CONTACT ===
  {
    id: 'ct1', category: 'Contact',
    question: 'How do I contact Curtain Makers?',
    answer: 'Phone (Sat-Thu 9am-6pm), Email: info@curtainmakers.ae, WhatsApp for quick responses, or book a free in-home design visit on our website. We respond within 24 hours.',
    keywords: ['contact', 'phone', 'email', 'whatsapp', 'call', 'message', 'get in touch'],
    relatedQuestions: ['ct2', 'ct3', 's1'],
  },
  {
    id: 'ct2', category: 'Contact',
    question: 'What are your opening hours?',
    answer: 'Saturday to Thursday, 9:00 AM to 6:00 PM. Friday: Closed. Design visits can be arranged at your convenience including evenings.',
    keywords: ['hours', 'opening hours', 'timing', 'business hours', 'friday closed'],
    relatedQuestions: ['ct1', 'ct3', 's1'],
  },
  {
    id: 'ct3', category: 'Contact',
    question: 'How quickly do you respond to inquiries?',
    answer: 'All inquiries within 24 hours. Phone during business hours. WhatsApp fastest. Web forms acknowledged within 2 business hours.',
    keywords: ['response time', 'reply', 'how fast', '24 hours', 'urgent', 'fast response'],
    relatedQuestions: ['ct1', 'ct2', 's1'],
  },
];

export const FAQ_CATEGORIES = [
  { id: 'Pricing', label: 'Pricing & Quotes', icon: '\uD83D\uDCB0', count: FAQS.filter(f => f.category === 'Pricing').length },
  { id: 'Ordering Process', label: 'Ordering Process', icon: '\uD83D\uDCCB', count: FAQS.filter(f => f.category === 'Ordering Process').length },
  { id: 'Services', label: 'Services', icon: '\uD83D\uDD27', count: FAQS.filter(f => f.category === 'Services').length },
  { id: 'Fabrics', label: 'Fabrics & Materials', icon: '\uD83E\uDDF5', count: FAQS.filter(f => f.category === 'Fabrics').length },
  { id: 'Curtain Styles', label: 'Curtain Styles', icon: '\uD83E\uDEAA', count: FAQS.filter(f => f.category === 'Curtain Styles').length },
  { id: 'Blinds', label: 'Blinds', icon: '\uD83C\uDFE2', count: FAQS.filter(f => f.category === 'Blinds').length },
  { id: 'Warranty & Aftercare', label: 'Warranty & Aftercare', icon: '\uD83D\uDEE1\uFE0F', count: FAQS.filter(f => f.category === 'Warranty & Aftercare').length },
  { id: 'Installation', label: 'Measurement & Installation', icon: '\uD83D\uDCD0', count: FAQS.filter(f => f.category === 'Installation').length },
  { id: 'Comparison', label: 'Why Curtain Makers', icon: '\u2B50', count: FAQS.filter(f => f.category === 'Comparison').length },
  { id: 'Payment', label: 'Payment', icon: '\uD83D\uDCB3', count: FAQS.filter(f => f.category === 'Payment').length },
  { id: 'Delivery', label: 'Delivery', icon: '\uD83D\uDE9A', count: FAQS.filter(f => f.category === 'Delivery').length },
  { id: 'Products', label: 'Products', icon: '\uD83D\uDECD\uFE0F', count: FAQS.filter(f => f.category === 'Products').length },
  { id: 'Contact', label: 'Contact', icon: '\uD83D\uDCDE', count: FAQS.filter(f => f.category === 'Contact').length },
];

export function findFAQ(query: string): FAQ | null {
  const lower = query.toLowerCase();
  let best: FAQ | null = null;
  let bestScore = 0;
  for (const faq of FAQS) {
    let score = 0;
    for (const kw of faq.keywords) {
      if (lower.includes(kw.toLowerCase())) score += 2;
    }
    if (lower.includes(faq.question.toLowerCase().slice(0, 20))) score += 5;
    if (score > bestScore) { bestScore = score; best = faq; }
  }
  return best;
}

export function getFAQsByCategory(category: string): FAQ[] {
  return FAQS.filter(f => f.category === category);
}

export function searchFAQs(query: string): FAQ[] {
  const lower = query.toLowerCase();
  return FAQS.filter(f =>
    f.question.toLowerCase().includes(lower) ||
    f.answer.toLowerCase().includes(lower) ||
    f.keywords.some(k => lower.includes(k.toLowerCase()))
  );
}