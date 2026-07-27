// ============================================================
// Office Blinds Dubai — Seed Data: Products
// ============================================================

export const PRODUCTS_SEED = [
  {
    slug: 'roller-blinds',
    name: 'Roller Blinds',
    category: 'roller',
    short_description: 'Sleek, minimal, and professional — the most popular choice for Dubai offices.',
    description: `Roller blinds are the quintessential window covering for modern commercial spaces in Dubai. Their clean, minimal profile complements any office aesthetic while providing exceptional light control and privacy.

Available in three distinct fabric types — Blackout for complete darkness, Sunscreen for UV protection with outward visibility, and Translucent for soft diffused light — our roller blinds are custom-made to your exact window dimensions.

Features include:
- Made-to-measure for perfect fit
- Available with manual chain or motorized operation
- Multiple fabric options: Blackout, Sunscreen, Translucent
- Fabric-covered bottom bar as standard
- Optional cassettes for a flush, clean finish
- Side channels for light blocking
- Compatible with smart home systems`,
    base_price_per_sqm: 85,
    meta_title: 'Roller Blinds Dubai | Commercial Office Roller Blinds',
    meta_description: 'Premium roller blinds for offices in Dubai. Blackout, Sunscreen & Translucent options. Made-to-measure with free quote & installation. 5-year warranty.',
    features: ['Blackout options', 'Sunscreen fabrics', 'Motorized compatible', 'Made to measure', '5-year warranty', 'Professional installation'],
    specifications: { 'Min Width': '50cm', 'Max Width': '300cm', 'Min Drop': '50cm', 'Max Drop': '300cm', 'Control': 'Chain / Motorized', 'Bottom Bar': 'Fabric-covered (default)' },
    models: [
      { name: 'Blackout', slug: 'blackout', description: '100% light blocking — ideal for boardrooms, meeting rooms, and AV spaces', price_modifier: 0, price_modifier_type: 'percentage', material_grade: 'A' },
      { name: 'Sunscreen', slug: 'sunscreen', description: 'UV protection with outward visibility — perfect for day-lit offices', price_modifier: -5, price_modifier_type: 'percentage', material_grade: 'A' },
      { name: 'Translucent', slug: 'translucent', description: 'Soft diffused light for a warm, inviting atmosphere', price_modifier: -10, price_modifier_type: 'percentage', material_grade: 'A' },
      { name: 'Blackout (Grade B)', slug: 'blackout-grade-b', description: 'Cost-effective blackout option', price_modifier: -20, price_modifier_type: 'percentage', material_grade: 'B' },
    ],
  },
  {
    slug: 'roman-blinds',
    name: 'Roman Blinds',
    category: 'roman',
    short_description: 'Timeless elegance with soft fabric folds — perfect for executive offices.',
    description: `Roman blinds bring a touch of sophistication to any office environment. Their soft, elegant fabric folds create a warm and inviting atmosphere while providing excellent light control.

Ideal for executive offices, reception areas, and meeting rooms where aesthetics matter as much as function.

Features include:
- Soft fabric folds for elegant appearance
- Blackout, Sunscreen, Translucent & Soft fabric options
- Chain or motorized operation
- Custom fabric selection
- Perfect for executive spaces`,
    base_price_per_sqm: 120,
    meta_title: 'Roman Blinds Dubai | Elegant Office Roman Blinds',
    meta_description: 'Premium Roman blinds for offices in Dubai. Soft fabrics, Blackout & Translucent options. Custom-made for executive spaces. Free quote & installation.',
    features: ['Soft fabric folds', 'Executive look', 'Blackout available', 'Motorized option', 'Custom fabrics', 'Professional finish'],
    specifications: { 'Min Width': '50cm', 'Max Width': '280cm', 'Min Drop': '50cm', 'Max Drop': '250cm', 'Control': 'Chain / Motorized', 'Fabric Types': 'Blackout, Sunscreen, Translucent, Soft' },
    models: [
      { name: 'Blackout', slug: 'blackout', description: 'Complete light blocking for executive privacy', price_modifier: 0, price_modifier_type: 'percentage', material_grade: 'A' },
      { name: 'Sunscreen', slug: 'sunscreen', description: 'UV protection with soft fabric appearance', price_modifier: 0, price_modifier_type: 'percentage', material_grade: 'A' },
      { name: 'Translucent', slug: 'translucent', description: 'Soft, diffused light for warm ambience', price_modifier: -10, price_modifier_type: 'percentage', material_grade: 'A' },
      { name: 'Soft Fabrics', slug: 'soft-fabrics', description: 'Premium decorative fabrics for luxury finish', price_modifier: 30, price_modifier_type: 'percentage', material_grade: 'A+' },
    ],
  },
  {
    slug: 'wooden-venetian-blinds',
    name: 'Wooden Venetian Blinds',
    category: 'venetian',
    short_description: 'Classic warmth and natural beauty for prestigious office environments.',
    description: `Wooden Venetian blinds offer timeless appeal with natural warmth that elevates any office space. Available in both genuine hardwood and premium faux wood, these blinds provide excellent light control through adjustable slats.

Perfect for executive offices, law firms, and corporate headquarters where a classic, prestigious look is desired.

Features include:
- 50mm and 25mm slat sizes available
- Real wood and faux wood options
- Adjustable slats for precise light control
- Tilt wand or cord control
- Suitable for high-humidity areas (faux wood)`,
    base_price_per_sqm: 130,
    meta_title: 'Wooden Venetian Blinds Dubai | Office Wood Blinds',
    meta_description: 'Premium wooden venetian blinds for Dubai offices. Real wood & faux wood in 50mm and 25mm slats. Classic elegance with free quote & installation.',
    features: ['Real wood options', 'Faux wood available', '50mm & 25mm slats', 'Adjustable light control', 'Premium look', 'Humidity resistant (faux)'],
    specifications: { 'Min Width': '50cm', 'Max Width': '250cm', 'Min Drop': '50cm', 'Max Drop': '250cm', 'Slat Sizes': '50mm, 25mm', 'Materials': 'Real Wood, Faux Wood' },
    models: [
      { name: '50mm Real Wood', slug: '50mm-real-wood', description: 'Premium hardwood slats for a classic, prestigious look', price_modifier: 20, price_modifier_type: 'percentage', material_grade: 'A+' },
      { name: '50mm Faux Wood', slug: '50mm-faux-wood', description: 'Durable faux wood — ideal for high-humidity areas', price_modifier: 0, price_modifier_type: 'percentage', material_grade: 'A' },
      { name: '25mm Real Wood', slug: '25mm-real-wood', description: 'Narrow hardwood slats for a more delicate appearance', price_modifier: 10, price_modifier_type: 'percentage', material_grade: 'A+' },
      { name: '25mm Faux Wood', slug: '25mm-faux-wood', description: 'Narrow slat faux wood — modern yet classic', price_modifier: -10, price_modifier_type: 'percentage', material_grade: 'A' },
    ],
  },
  {
    slug: 'vertical-blinds',
    name: 'Vertical Blinds',
    category: 'vertical',
    short_description: 'Practical, spacious, and modern — ideal for large windows and sliding doors.',
    description: `Vertical blinds are the practical choice for large office windows, sliding doors, and partition glazing. Their vertical vanes offer excellent light control and privacy while creating a sense of height and space.

Features include:
- Ideal for wide windows and sliding doors
- Blackout and Sunscreen fabric options
- Stack neatly to one side
- Wand or cord control
- Easy to clean and maintain
- Cost-effective solution for large areas`,
    base_price_per_sqm: 65,
    meta_title: 'Vertical Blinds Dubai | Office Vertical Blinds for Large Windows',
    meta_description: 'Affordable vertical blinds for Dubai offices. Perfect for large windows & sliding doors. Blackout & Sunscreen options. Free quote & professional installation.',
    features: ['Large window solution', 'Sliding door friendly', 'Blackout fabric', 'Sunscreen option', 'Easy maintenance', 'Cost-effective'],
    specifications: { 'Min Width': '50cm', 'Max Width': '400cm', 'Min Drop': '50cm', 'Max Drop': '350cm', 'Control': 'Wand / Cord', 'Vane Types': 'Blackout, Sunscreen, Translucent' },
    models: [
      { name: 'Blackout', slug: 'blackout', description: 'Complete privacy and light blocking for conference rooms', price_modifier: 0, price_modifier_type: 'percentage', material_grade: 'A' },
      { name: 'Sunscreen', slug: 'sunscreen', description: 'UV protection with visibility — great for open plan offices', price_modifier: -5, price_modifier_type: 'percentage', material_grade: 'A' },
      { name: 'Translucent', slug: 'translucent', description: 'Soft light diffusion for reception areas', price_modifier: -10, price_modifier_type: 'percentage', material_grade: 'A' },
    ],
  },
  {
    slug: 'aluminium-venetian-blinds',
    name: 'Aluminium Venetian Blinds',
    category: 'aluminium-venetian',
    short_description: 'Sleek, durable, and contemporary for modern workplaces.',
    description: `Aluminium Venetian blinds offer a sleek, contemporary look ideal for modern office environments. Lightweight yet durable, these blinds provide excellent light control through adjustable slats and are perfect for areas requiring a clean, minimalist aesthetic.

Features include:
- 50mm and 25mm slat options
- Perforated slat option for unique light effects
- Lightweight aluminium construction
- Adjustable slat control
- Durable and easy to clean
- Modern, industrial aesthetic`,
    base_price_per_sqm: 75,
    meta_title: 'Aluminium Venetian Blinds Dubai | Modern Office Blinds',
    meta_description: 'Sleek aluminium venetian blinds for Dubai offices. 50mm, 25mm & Perforated options. Lightweight, durable & modern. Free quote & installation.',
    features: ['Aluminium construction', '50mm & 25mm slats', 'Perforated option', 'Lightweight', 'Easy maintenance', 'Modern look'],
    specifications: { 'Min Width': '50cm', 'Max Width': '280cm', 'Min Drop': '50cm', 'Max Drop': '280cm', 'Slat Sizes': '50mm, 25mm', 'Special': 'Perforated (select models)' },
    models: [
      { name: '50mm Standard', slug: '50mm-standard', description: 'Classic aluminium slat for standard office use', price_modifier: 0, price_modifier_type: 'percentage', material_grade: 'A' },
      { name: '25mm Standard', slug: '25mm-standard', description: 'Narrow slat for a more refined look', price_modifier: 5, price_modifier_type: 'percentage', material_grade: 'A' },
      { name: 'Perforated', slug: 'perforated', description: 'Unique perforated slats for creative light patterns', price_modifier: 15, price_modifier_type: 'percentage', material_grade: 'A' },
    ],
  },
  {
    slug: 'zebra-blinds',
    name: 'Zebra Blinds (Day & Night)',
    category: 'zebra',
    short_description: 'Dual-layer elegance with effortless light control — the best of both worlds.',
    description: `Zebra blinds, also known as Day & Night blinds, feature alternating bands of translucent and opaque fabric that can be aligned to control light with precision. Simply shift the bands to switch from privacy to outward visibility — no cords, no fuss.

Features include:
- Dual-layer alternating fabric bands
- Quick transition from privacy to view
- Available in Translucent and Blackout
- Clean, modern appearance
- Cordless operation option
- Perfect for open-plan and executive offices`,
    base_price_per_sqm: 110,
    meta_title: 'Zebra Blinds Dubai | Day & Night Office Blinds',
    meta_description: 'Premium zebra blinds for Dubai offices. Dual-layer Day & Night design. Translucent & Blackout options. Cordless operation. Free quote & installation.',
    features: ['Dual-layer design', 'Quick light control', 'Cordless option', 'Modern appearance', 'Privacy + view', 'Motorized compatible'],
    specifications: { 'Min Width': '50cm', 'Max Width': '280cm', 'Min Drop': '50cm', 'Max Drop': '280cm', 'Operation': 'Cordless / Motorized', 'Fabric': 'Translucent, Blackout' },
    models: [
      { name: 'Translucent', slug: 'translucent', description: 'Alternating see-through and solid bands for versatile control', price_modifier: 0, price_modifier_type: 'percentage', material_grade: 'A' },
      { name: 'Blackout', slug: 'blackout', description: 'Full privacy with alternating opaque bands', price_modifier: 10, price_modifier_type: 'percentage', material_grade: 'A' },
    ],
  },
  {
    slug: 'smart-blinds',
    name: 'Smart / Motorized Blinds',
    category: 'smart',
    short_description: 'Automated, effortless, and future-ready — control your blinds from anywhere.',
    description: `Transform your office with smart motorized blinds. With the touch of a button, voice command, or automated schedule, your blinds open and close effortlessly. Compatible with smart home systems and available across our entire product range.

Features include:
- App control via smartphone
- Voice control (Alexa, Google Home)
- Automated scheduling (time-based or sunrise/sunset)
- Battery or hardwired options
- Silent motor operation
- Compatible with all blind types
- Group control for multiple blinds
- Energy-saving automation`,
    base_price_per_sqm: 185,
    meta_title: 'Smart Motorized Blinds Dubai | Automated Office Blinds',
    meta_description: 'Premium smart motorized blinds for Dubai offices. App control, voice control & automated scheduling. Compatible with Alexa & Google Home. Free quote.',
    features: ['App control', 'Voice control (Alexa/Google)', 'Automated scheduling', 'Silent operation', 'Battery or hardwired', 'Energy saving'],
    specifications: { 'Compatible': 'All blind types', 'Control': 'App, Voice, Remote', 'Motor': 'Silent DC motor', 'Power': 'Battery / Hardwired', 'Smart Home': 'Alexa, Google Home', 'Warranty': '5 years (motor)' },
    models: [
      { name: 'Battery-Powered', slug: 'battery-powered', description: 'Quick installation, no wiring needed — up to 1 year battery life', price_modifier: 0, price_modifier_type: 'percentage', material_grade: 'A' },
      { name: 'Hardwired', slug: 'hardwired', description: 'Permanent power with clean, hidden wiring', price_modifier: 30, price_modifier_type: 'percentage', material_grade: 'A' },
      { name: 'Solar-Powered', slug: 'solar-powered', description: 'Eco-friendly solar charging — zero maintenance', price_modifier: 50, price_modifier_type: 'percentage', material_grade: 'A+' },
    ],
  },
  {
    slug: 'pleated-blinds',
    name: 'Pleated Blinds',
    category: 'pleated',
    short_description: 'Compact, energy-efficient, and stylish for any office space.',
    description: `Pleated blinds offer a unique cellular construction that traps air, providing excellent thermal insulation for Dubai's climate. Their compact design and clean lines make them an attractive choice for offices where energy efficiency matters.

Features include:
- Cellular construction for thermal insulation
- Translucent, Blackout, and Thermal options
- Top-Down Bottom-Up (TDBU) operation
- Compact neat stacking when raised
- Energy-saving design
- Ideal for temperature control`,
    base_price_per_sqm: 95,
    meta_title: 'Pleated Blinds Dubai | Energy-Efficient Office Blinds',
    meta_description: 'Energy-efficient pleated blinds for Dubai offices. Thermal, Blackout & Translucent options. Top-Down Bottom-Up operation. Free quote & installation.',
    features: ['Thermal insulation', 'Energy saving', 'TDBU operation', 'Compact design', 'Multiple opacities', 'Cellular construction'],
    specifications: { 'Min Width': '50cm', 'Max Width': '250cm', 'Min Drop': '50cm', 'Max Drop': '250cm', 'Operation': 'Cord / TDBU', 'Options': 'Translucent, Blackout, Thermal, TDBU' },
    models: [
      { name: 'Translucent', slug: 'translucent', description: 'Soft light diffusion with thermal benefits', price_modifier: 0, price_modifier_type: 'percentage', material_grade: 'A' },
      { name: 'Blackout', slug: 'blackout', description: 'Complete darkness with thermal insulation', price_modifier: 10, price_modifier_type: 'percentage', material_grade: 'A' },
      { name: 'Thermal', slug: 'thermal', description: 'Maximum thermal efficiency for energy savings', price_modifier: 20, price_modifier_type: 'percentage', material_grade: 'A' },
      { name: 'TDBU (Top-Down Bottom-Up)', slug: 'tdbu', description: 'Operate from top or bottom for flexible privacy and light', price_modifier: 25, price_modifier_type: 'percentage', material_grade: 'A' },
    ],
  },
  {
    slug: 'skylight-blinds',
    name: 'Skylight Blinds',
    category: 'skylight',
    short_description: 'Specialist solutions for roof windows and skylights.',
    description: `Our skylight blind solutions are designed specifically for roof windows, atria, and overhead glazing. Whether you need light control, heat reduction, or complete blackout for a presentation space, our specialist skylight systems deliver.

Features include:
- Specialist designs for angled windows
- Manual pole or motorized operation
- Heat and glare reduction
- Custom sizes for non-standard openings
- Perfect for atria and roof windows`,
    base_price_per_sqm: 150,
    meta_title: 'Skylight Blinds Dubai | Roof Window & Skylight Blinds',
    meta_description: 'Specialist skylight blinds for Dubai offices. Custom solutions for roof windows, atria & overhead glazing. Motorized options. Free quote & installation.',
    features: ['For roof windows', 'Pole or motorized', 'Heat reduction', 'Glare control', 'Custom sizes', 'Specialist fitting'],
    specifications: { 'Min Width': '40cm', 'Max Width': '250cm', 'Control': 'Pole / Motorized', 'Application': 'Roof windows, Atria, Overhead glazing', 'Special': 'Custom angled fitting' },
    models: [
      { name: 'Manual Pole-Operated', slug: 'manual-pole', description: 'Reliable pole operation for hard-to-reach skylights', price_modifier: 0, price_modifier_type: 'percentage', material_grade: 'A' },
      { name: 'Motorized', slug: 'motorized', description: 'Effortless button control for overhead blinds', price_modifier: 60, price_modifier_type: 'percentage', material_grade: 'A' },
    ],
  },
  {
    slug: 'flyscreen-blinds',
    name: 'Flyscreen Blinds',
    category: 'flyscreen',
    short_description: 'Protection, ventilation, and clarity — keep insects out without blocking the view.',
    description: `Our flyscreen blinds provide effective insect protection while maintaining outward visibility and airflow. Made from fine mesh fabrics, they roll away neatly when not in use and are ideal for offices with opening windows or doors.

Features include:
- Fine mesh insect protection
- Maintains outward visibility
- Allows airflow while closed
- Retractable when not needed
- Multiple mesh options
- Side channel options for secure fit`,
    base_price_per_sqm: 60,
    meta_title: 'Flyscreen Blinds Dubai | Insect Screens for Offices',
    meta_description: 'Premium flyscreen blinds for Dubai offices. Insect protection with outward visibility. Retractable mesh screens. Free quote & installation.',
    features: ['Insect protection', 'Outward visibility', 'Airflow while closed', 'Retractable', 'Fine mesh', 'Side channels'],
    specifications: { 'Min Width': '50cm', 'Max Width': '250cm', 'Mesh Type': 'Standard, Hi-View', 'Operation': 'Spring / Chain', 'Frame': 'Side channels optional' },
    models: [
      { name: 'Standard Mesh', slug: 'standard-mesh', description: 'Reliable insect protection at an affordable price', price_modifier: 0, price_modifier_type: 'percentage', material_grade: 'A' },
      { name: 'Hi-View Mesh', slug: 'hi-view-mesh', description: 'Ultra-fine mesh for maximum outward clarity', price_modifier: 15, price_modifier_type: 'percentage', material_grade: 'A' },
    ],
  },
  {
    slug: 'panel-blinds',
    name: 'Panel Blinds',
    category: 'panel',
    short_description: 'Contemporary sliding panels for large windows and modern spaces.',
    description: `Panel blinds feature wide fabric panels that slide smoothly along a track, making them the ideal choice for large windows, sliding doors, and room dividers. Their clean, minimalist aesthetic is perfect for contemporary office designs.

Features include:
- Wide fabric panels
- Smooth sliding track system
- Ideal for large windows
- Can be used as room dividers
- Multiple fabric options
- Modern, minimalist look`,
    base_price_per_sqm: 100,
    meta_title: 'Panel Blinds Dubai | Modern Sliding Panel Blinds for Offices',
    meta_description: 'Contemporary panel blinds for Dubai offices. Wide sliding panels for large windows & room dividers. Clean, minimalist design. Free quote & installation.',
    features: ['Wide fabric panels', 'Smooth sliding track', 'Large window ideal', 'Room divider use', 'Modern aesthetic', 'Multiple fabrics'],
    specifications: { 'Min Width': '80cm', 'Max Width': '400cm', 'Panel Width': '60cm - 100cm', 'Max Drop': '350cm', 'Control': 'Wand', 'Track': 'Top-mounted aluminium' },
    models: [
      { name: 'Blackout Fabric', slug: 'blackout-fabric', description: 'Complete privacy for conference rooms and partitions', price_modifier: 0, price_modifier_type: 'percentage', material_grade: 'A' },
      { name: 'Translucent Fabric', slug: 'translucent-fabric', description: 'Soft light diffusion for open and airy spaces', price_modifier: -10, price_modifier_type: 'percentage', material_grade: 'A' },
      { name: 'Sunscreen Fabric', slug: 'sunscreen-fabric', description: 'UV protection with outward visibility', price_modifier: -5, price_modifier_type: 'percentage', material_grade: 'A' },
    ],
  },
];