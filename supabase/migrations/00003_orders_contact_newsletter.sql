-- ============================================================
-- CurtainMakers — Migration 00003: Orders table, Contact & Newsletter
-- Creates tables that API routes reference + new contact/lead capture
-- ============================================================

-- 1. ORDERS TABLE (API routes reference "orders" not "jobs")
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  quote_id UUID REFERENCES quotes(id) ON DELETE SET NULL,
  customer_id UUID REFERENCES customers(id) ON DELETE SET NULL,
  order_number TEXT UNIQUE NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  -- 'pending','confirmed','in_production','ready_for_install','installed','completed','cancelled'
  deposit_amount DECIMAL(12,2) DEFAULT 0,
  deposit_paid BOOLEAN DEFAULT false,
  deposit_paid_at TIMESTAMPTZ,
  balance_amount DECIMAL(12,2) DEFAULT 0,
  balance_paid BOOLEAN DEFAULT false,
  balance_paid_at TIMESTAMPTZ,
  total_paid DECIMAL(12,2) DEFAULT 0,
  scheduled_date TIMESTAMPTZ,
  payment_terms TEXT DEFAULT '70% deposit, 30% on completion',
  production_notes TEXT,
  installation_notes TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. CONTACT MESSAGES (contact form submissions)
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  source TEXT DEFAULT 'website',
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. NEWSLETTER SUBSCRIBERS
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  source TEXT DEFAULT 'website',
  is_active BOOLEAN DEFAULT true,
  subscribed_at TIMESTAMPTZ DEFAULT now(),
  unsubscribed_at TIMESTAMPTZ
);

-- 4. INDEXES
-- ------------------------------------------------------------
CREATE INDEX IF NOT EXISTS idx_orders_customer ON orders(customer_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_quote ON orders(quote_id);
CREATE INDEX IF NOT EXISTS idx_contact_messages_read ON contact_messages(is_read);
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);

-- 5. TRIGGERS for orders
-- ------------------------------------------------------------
DROP TRIGGER IF EXISTS update_orders_updated_at ON orders;
CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON orders
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 6. Row Level Security (permissive for anon key usage)
-- ------------------------------------------------------------
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts on contact_messages and newsletter
CREATE POLICY IF NOT EXISTS allow_anon_insert_contact ON contact_messages
  FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE POLICY IF NOT EXISTS allow_anon_insert_newsletter ON newsletter_subscribers
  FOR INSERT TO anon, authenticated WITH CHECK (true);

-- Allow service_role full access to orders (admin API uses service_role key implicitly)
CREATE POLICY IF NOT EXISTS allow_service_all_orders ON orders
  FOR ALL TO service_role USING (true) WITH CHECK (true);