-- ============================================================
-- CurtainMakers — SEED DATA (run AFTER migration)
-- Populates products, a staff user, and demo data
-- ============================================================

-- 1. Staff user (admin login)
INSERT INTO staff_users (email, name, role) VALUES
  ('admin@curtainmakers.ae', 'Admin', 'admin')
ON CONFLICT (email) DO NOTHING;

-- 2. Products (seed data matching the app's PRODUCTS_SEED)
INSERT INTO products (slug, name, short_description, category, base_price_per_sqm, features, specifications, is_active)
VALUES
  ('roller-blinds', 'Roller Blinds', 'Sleek, minimal, and professional — the most popular choice for offices.', 'roller', 85,
   '["Blackout options","Sunscreen fabrics","Motorized compatible","Made to measure","5-year warranty","Professional installation"]'::jsonb,
   '{"Min Width":"50cm","Max Width":"300cm","Min Drop":"50cm","Max Drop":"300cm","Control":"Chain / Motorized"}'::jsonb, true),
  ('roman-blinds', 'Roman Blinds', 'Timeless elegance with soft fabric folds — perfect for executive offices.', 'roman', 120,
   '["Soft fabric folds","Executive look","Blackout available","Motorized option","Custom fabrics","Professional finish"]'::jsonb,
   '{"Min Width":"50cm","Max Width":"280cm","Min Drop":"50cm","Max Drop":"250cm","Control":"Chain / Motorized"}'::jsonb, true),
  ('wooden-venetian-blinds', 'Wooden Venetian Blinds', 'Classic warmth and natural beauty for prestigious environments.', 'venetian', 130,
   '["Real wood options","Faux wood available","50mm & 25mm slats","Adjustable light control","Premium look","Humidity resistant"]'::jsonb,
   '{"Min Width":"50cm","Max Width":"250cm","Slat Sizes":"50mm, 25mm","Materials":"Real Wood, Faux Wood"}'::jsonb, true),
  ('vertical-blinds', 'Vertical Blinds', 'Practical, spacious, and modern — ideal for large windows.', 'vertical', 65,
   '["Large window solution","Sliding door friendly","Blackout fabric","Sunscreen option","Easy maintenance","Cost-effective"]'::jsonb,
   '{"Min Width":"50cm","Max Width":"400cm","Min Drop":"50cm","Max Drop":"350cm","Control":"Wand / Cord"}'::jsonb, true),
  ('aluminium-venetian-blinds', 'Aluminium Venetian Blinds', 'Sleek, durable, and contemporary for modern workplaces.', 'aluminium-venetian', 75,
   '["Aluminium construction","50mm & 25mm slats","Perforated option","Lightweight","Easy maintenance","Modern look"]'::jsonb,
   '{"Min Width":"50cm","Max Width":"280cm","Slat Sizes":"50mm, 25mm"}'::jsonb, true),
  ('zebra-blinds', 'Zebra Blinds (Day & Night)', 'Dual-layer elegance with effortless light control.', 'zebra', 110,
   '["Dual-layer design","Quick light control","Cordless option","Modern appearance","Privacy + view","Motorized compatible"]'::jsonb,
   '{"Min Width":"50cm","Max Width":"280cm","Operation":"Cordless / Motorized"}'::jsonb, true),
  ('smart-blinds', 'Smart / Motorized Blinds', 'Automated, effortless, and future-ready — control from anywhere.', 'smart', 185,
   '["App control","Voice control (Alexa/Google)","Automated scheduling","Silent operation","Battery or hardwired","Energy saving"]'::jsonb,
   '{"Control":"App, Voice, Remote","Motor":"Silent DC motor","Power":"Battery / Hardwired","Smart Home":"Alexa, Google Home"}'::jsonb, true),
  ('pleated-blinds', 'Pleated Blinds', 'Compact, energy-efficient, and stylish for any space.', 'pleated', 95,
   '["Thermal insulation","Energy saving","TDBU operation","Compact design","Multiple opacities","Cellular construction"]'::jsonb,
   '{"Min Width":"50cm","Max Width":"250cm","Operation":"Cord / TDBU"}'::jsonb, true),
  ('skylight-blinds', 'Skylight Blinds', 'Specialist solutions for roof windows and skylights.', 'skylight', 150,
   '["For roof windows","Pole or motorized","Heat reduction","Glare control","Custom sizes","Specialist fitting"]'::jsonb,
   '{"Control":"Pole / Motorized","Application":"Roof windows, Atria, Overhead glazing"}'::jsonb, true),
  ('flyscreen-blinds', 'Flyscreen Blinds', 'Protection, ventilation, and clarity — keep insects out.', 'flyscreen', 60,
   '["Insect protection","Outward visibility","Airflow while closed","Retractable","Fine mesh","Side channels"]'::jsonb,
   '{"Mesh Type":"Standard, Hi-View","Operation":"Spring / Chain"}'::jsonb, true),
  ('panel-blinds', 'Panel Blinds', 'Contemporary sliding panels for large windows and modern spaces.', 'panel', 100,
   '["Wide fabric panels","Smooth sliding track","Large window ideal","Room divider use","Modern aesthetic","Multiple fabrics"]'::jsonb,
   '{"Min Width":"80cm","Max Width":"400cm","Panel Width":"60cm - 100cm","Control":"Wand"}'::jsonb, true)
ON CONFLICT (slug) DO NOTHING;

-- 3. Demo customer (for testing)
INSERT INTO customers (email, name, phone, source) VALUES
  ('demo@example.com', 'Demo Customer', '+971 50 123 4567', 'website')
ON CONFLICT (email) DO NOTHING;