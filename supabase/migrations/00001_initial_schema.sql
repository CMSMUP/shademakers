-- ============================================================
-- Office Blinds Dubai — Initial Database Schema
-- Migration 00001
-- ============================================================

-- 1. PRODUCTS CATALOG
-- ---------------------------

CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  short_description TEXT,
  description TEXT,
  category TEXT NOT NULL,
  -- categories: 'roller', 'venetian', 'vertical', 'smart', 'zebra',
  -- 'roman', 'panel', 'aluminium-venetian', 'pleated', 'skylight', 'flyscreen'
  base_price_per_sqm DECIMAL(10,2) NOT NULL DEFAULT 0,
  image_url TEXT,
  meta_title TEXT,
  meta_description TEXT,
  features JSONB DEFAULT '[]',
  specifications JSONB DEFAULT '{}',
  is_featured BOOLEAN DEFAULT false,
  sort_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE product_models (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  description TEXT,
  price_modifier DECIMAL(10,2) DEFAULT 0,
  price_modifier_type TEXT DEFAULT 'percentage',
  -- 'percentage' (e.g. 10 = +10%) or 'fixed' (e.g. 50 = +50 AED)
  material_grade TEXT,
  -- 'A', 'B', 'C' — quality tiers
  min_width_cm DECIMAL(7,2) DEFAULT 50,
  max_width_cm DECIMAL(7,2) DEFAULT 300,
  min_height_cm DECIMAL(7,2) DEFAULT 50,
  max_height_cm DECIMAL(7,2) DEFAULT 300,
  image_url TEXT,
  sort_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE product_options (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  price_type TEXT NOT NULL DEFAULT 'fixed',
  -- 'fixed' (one-time), 'per_sqm' (per m² of window), 'per_unit' (per window)
  price DECIMAL(10,2) DEFAULT 0,
  category TEXT,
  -- 'motor', 'cassette', 'side_channel', 'warranty', 'installation',
  -- 'control', 'bottom_bar', 'accessory', 'fabric'
  is_required BOOLEAN DEFAULT false,
  is_multi_select BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. CUSTOMERS & AUTH
-- ---------------------------

CREATE TABLE customers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,                                               
    company_name TEXT,                                         
    phone TEXT,
  address TEXT,
  city TEXT,
  area TEXT,
  notes TEXT,
  source TEXT DEFAULT 'website',
  -- 'website', 'chat', 'referral', 'walk_in', 'call'
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE otp_codes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  code TEXT NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  used BOOLEAN DEFAULT false,
  attempt_count INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE staff_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'admin',
  -- 'admin', 'sales', 'manager'
  phone TEXT,
  avatar_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 3. QUOTING ENGINE
-- ---------------------------

CREATE TABLE rooms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID REFERENCES customers(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  floor TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE windows (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  room_id UUID REFERENCES rooms(id) ON DELETE CASCADE,
  name TEXT,
  width_cm DECIMAL(7,2) NOT NULL,
  height_cm DECIMAL(7,2) NOT NULL,
  quantity INT DEFAULT 1,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE quotes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  quote_number TEXT UNIQUE NOT NULL,
  customer_id UUID REFERENCES customers(id) ON DELETE SET NULL,
  staff_user_id UUID REFERENCES staff_users(id) ON DELETE SET NULL,
  status TEXT NOT NULL DEFAULT 'draft',
  -- 'draft', 'sent', 'visit_requested', 'visit_scheduled',
  -- 'visit_completed', 'confirmed', 'expired', 'cancelled'
  subtotal DECIMAL(12,2) DEFAULT 0,
  discount_percent DECIMAL(5,2) DEFAULT 0,
  discount_amount DECIMAL(12,2) DEFAULT 0,
  vat_percent DECIMAL(5,2) DEFAULT 5,
  vat_amount DECIMAL(12,2) DEFAULT 0,
  total DECIMAL(12,2) DEFAULT 0,
  valid_until DATE,
  notes TEXT,
  terms_conditions TEXT,
  pdf_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE quote_line_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  quote_id UUID REFERENCES quotes(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id),
  product_model_id UUID REFERENCES product_models(id),
  window_id UUID REFERENCES windows(id),
  width_cm DECIMAL(7,2) NOT NULL,
  height_cm DECIMAL(7,2) NOT NULL,
  quantity INT DEFAULT 1,
  unit_price DECIMAL(10,2) NOT NULL,
  total_price DECIMAL(12,2) NOT NULL,
  options_json JSONB DEFAULT '[]',
  -- array of { option_id, name, price }
  notes TEXT,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 4. SITE VISITS & ORDERS
-- ---------------------------

CREATE TABLE site_visits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  quote_id UUID REFERENCES quotes(id) ON DELETE CASCADE,
  customer_id UUID REFERENCES customers(id),
  staff_user_id UUID REFERENCES staff_users(id),
  scheduled_date TIMESTAMPTZ NOT NULL,
  status TEXT DEFAULT 'requested',
  -- 'requested', 'confirmed', 'completed', 'cancelled', 'rescheduled'
  customer_notes TEXT,
  staff_notes TEXT,
  visit_report JSONB DEFAULT '{}',
  -- technical measurements captured on site
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  quote_id UUID REFERENCES quotes(id),
  customer_id UUID REFERENCES customers(id),
  order_number TEXT UNIQUE NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending_deposit',
  -- 'pending_deposit', 'confirmed', 'in_production',
  -- 'installation_scheduled', 'installed', 'completed',
  -- 'issues', 'cancelled'
  deposit_amount DECIMAL(12,2) DEFAULT 0,
  deposit_paid BOOLEAN DEFAULT false,
  deposit_paid_at TIMESTAMPTZ,
  balance_amount DECIMAL(12,2) DEFAULT 0,
  balance_paid BOOLEAN DEFAULT false,
  balance_paid_at TIMESTAMPTZ,
  total_paid DECIMAL(12,2) DEFAULT 0,
  payment_terms TEXT DEFAULT '70% deposit, 30% on completion',
  production_notes TEXT,
  installation_notes TEXT,
  estimated_completion DATE,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE order_status_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  from_status TEXT,
  to_status TEXT NOT NULL,
  changed_by UUID REFERENCES staff_users(id),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 5. AI CHAT
-- ---------------------------

CREATE TABLE conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID REFERENCES customers(id) ON DELETE SET NULL,
  session_id TEXT,
  is_active BOOLEAN DEFAULT true,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id UUID REFERENCES conversations(id) ON DELETE CASCADE,
  sender_type TEXT NOT NULL,
  -- 'customer', 'ai', 'admin'
  content TEXT NOT NULL,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 6. REVIEWS
-- ---------------------------

CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  customer_id UUID REFERENCES customers(id),
  rating INT CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  is_public BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 7. NOTIFICATIONS
-- ---------------------------

CREATE TABLE email_notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  to_email TEXT NOT NULL,
  subject TEXT NOT NULL,
  body TEXT,
  template_name TEXT,
  reference_type TEXT,
  -- 'quote', 'order', 'otp', 'visit', 'review'
  reference_id UUID,
  status TEXT DEFAULT 'pending',
  -- 'pending', 'sent', 'failed'
  sent_at TIMESTAMPTZ,
  error TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 8. INDEXES
-- ---------------------------

CREATE INDEX idx_products_slug ON products(slug);
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_product_models_product ON product_models(product_id);
CREATE INDEX idx_product_options_product ON product_options(product_id);
CREATE INDEX idx_customers_email ON customers(email);
CREATE INDEX idx_otp_codes_email ON otp_codes(email);
CREATE INDEX idx_otp_codes_code ON otp_codes(code, email);
CREATE INDEX idx_quotes_customer ON quotes(customer_id);
CREATE INDEX idx_quotes_status ON quotes(status);
CREATE INDEX idx_quote_line_items_quote ON quote_line_items(quote_id);
CREATE INDEX idx_rooms_customer ON rooms(customer_id);
CREATE INDEX idx_windows_room ON windows(room_id);
CREATE INDEX idx_site_visits_quote ON site_visits(quote_id);
CREATE INDEX idx_site_visits_date ON site_visits(scheduled_date);
CREATE INDEX idx_orders_customer ON orders(customer_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_conversations_customer ON conversations(customer_id);
CREATE INDEX idx_messages_conversation ON messages(conversation_id);

-- 9. AUTO-UPDATE TIMESTAMPS FUNCTION
-- ---------------------------

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply to tables with updated_at
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON products FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_customers_updated_at
  BEFORE UPDATE ON customers FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_quotes_updated_at
  BEFORE UPDATE ON quotes FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_rooms_updated_at
  BEFORE UPDATE ON rooms FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_windows_updated_at
  BEFORE UPDATE ON windows FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_site_visits_updated_at
  BEFORE UPDATE ON site_visits FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON orders FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_conversations_updated_at
  BEFORE UPDATE ON conversations FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_staff_users_updated_at
  BEFORE UPDATE ON staff_users FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();