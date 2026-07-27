// ============================================================
// Office Blinds Dubai — TypeScript Types
// ============================================================

// ---- Products ----

export interface Product {
  id: string;
  slug: string;
  name: string;
  short_description: string | null;
  description: string | null;
  category: ProductCategory;
  base_price_per_sqm: number;
  image_url: string | null;
  meta_title: string | null;
  meta_description: string | null;
  features: string[];
  specifications: Record<string, string>;
  is_featured: boolean;
  sort_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export type ProductCategory =
  | 'roller'
  | 'venetian'
  | 'vertical'
  | 'smart'
  | 'zebra'
  | 'roman'
  | 'panel'
  | 'aluminium-venetian'
  | 'pleated'
  | 'skylight'
  | 'flyscreen';

export const PRODUCT_CATEGORIES: { value: ProductCategory; label: string }[] = [
  { value: 'roller', label: 'Roller Blinds' },
  { value: 'venetian', label: 'Wooden Venetian Blinds' },
  { value: 'vertical', label: 'Vertical Blinds' },
  { value: 'smart', label: 'Smart / Motorized Blinds' },
  { value: 'zebra', label: 'Day & Night Zebra Blinds' },
  { value: 'roman', label: 'Roman Blinds' },
  { value: 'panel', label: 'Panel Blinds' },
  { value: 'aluminium-venetian', label: 'Aluminium Venetian Blinds' },
  { value: 'pleated', label: 'Pleated Blinds' },
  { value: 'skylight', label: 'Skylight Blinds' },
  { value: 'flyscreen', label: 'Flyscreen Blinds' },
];

export interface ProductModel {
  id: string;
  product_id: string;
  name: string;
  slug: string;
  description: string | null;
  price_modifier: number;
  price_modifier_type: 'percentage' | 'fixed';
  material_grade: string | null;
  min_width_cm: number;
  max_width_cm: number;
  min_height_cm: number;
  max_height_cm: number;
  image_url: string | null;
  sort_order: number;
  is_active: boolean;
  created_at: string;
}

export interface ProductOption {
  id: string;
  product_id: string;
  name: string;
  description: string | null;
  price_type: 'fixed' | 'per_sqm' | 'per_unit';
  price: number;
  category: string | null;
  is_required: boolean;
  is_multi_select: boolean;
  is_active: boolean;
  sort_order: number;
  created_at: string;
}

// ---- Customers ----

export interface Customer {
  id: string;
  email: string;
  name: string | null;
  company_name: string | null;
  phone: string | null;
  address: string | null;
  city: string | null;
  area: string | null;
  notes: string | null;
  source: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface OtpCode {
  id: string;
  email: string;
  code: string;
  expires_at: string;
  used: boolean;
  attempt_count: number;
  created_at: string;
}

export type StaffRole = 'admin' | 'sales' | 'manager';

export interface StaffUser {
  id: string;
  email: string;
  name: string;
  role: StaffRole;
  phone: string | null;
  avatar_url: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// ---- Quoting ----

export interface Room {
  id: string;
  customer_id: string;
  name: string;
  floor: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface Window {
  id: string;
  room_id: string;
  name: string | null;
  width_cm: number;
  height_cm: number;
  quantity: number;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export type QuoteStatus =
  | 'draft'
  | 'sent'
  | 'visit_requested'
  | 'visit_scheduled'
  | 'visit_completed'
  | 'confirmed'
  | 'expired'
  | 'cancelled';

export interface QuoteLineItemOption {
  option_id: string;
  name: string;
  price: number;
}

export interface QuoteLineItem {
  id: string;
  quote_id: string;
  product_id: string;
  product_model_id: string | null;
  window_id: string | null;
  width_cm: number;
  height_cm: number;
  quantity: number;
  unit_price: number;
  total_price: number;
  options_json: QuoteLineItemOption[];
  notes: string | null;
  sort_order: number;
  created_at: string;
}

export interface Quote {
  id: string;
  quote_number: string;
  customer_id: string | null;
  staff_user_id: string | null;
  status: QuoteStatus;
  subtotal: number;
  discount_percent: number;
  discount_amount: number;
  vat_percent: number;
  vat_amount: number;
  total: number;
  valid_until: string | null;
  notes: string | null;
  terms_conditions: string | null;
  pdf_url: string | null;
  created_at: string;
  updated_at: string;
  // Joined
  customer?: Customer;
  line_items?: QuoteLineItem[];
}

// ---- Site Visits & Orders ----

export type VisitStatus =
  | 'requested'
  | 'confirmed'
  | 'completed'
  | 'cancelled'
  | 'rescheduled';

export interface SiteVisit {
  id: string;
  quote_id: string;
  customer_id: string;
  staff_user_id: string | null;
  scheduled_date: string;
  status: VisitStatus;
  customer_notes: string | null;
  staff_notes: string | null;
  visit_report: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

export type OrderStatus =
  | 'pending_deposit'
  | 'confirmed'
  | 'in_production'
  | 'installation_scheduled'
  | 'installed'
  | 'completed'
  | 'issues'
  | 'cancelled';

export interface Order {
  id: string;
  quote_id: string;
  customer_id: string;
  order_number: string;
  status: OrderStatus;
  deposit_amount: number;
  deposit_paid: boolean;
  deposit_paid_at: string | null;
  balance_amount: number;
  balance_paid: boolean;
  balance_paid_at: string | null;
  total_paid: number;
  payment_terms: string;
  production_notes: string | null;
  installation_notes: string | null;
  estimated_completion: string | null;
  created_at: string;
  updated_at: string;
}

export interface OrderStatusHistory {
  id: string;
  order_id: string;
  from_status: string | null;
  to_status: string;
  changed_by: string | null;
  notes: string | null;
  created_at: string;
}

// ---- Chat ----

export interface Conversation {
  id: string;
  customer_id: string | null;
  session_id: string | null;
  is_active: boolean;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

export type MessageSender = 'customer' | 'ai' | 'admin';

export interface Message {
  id: string;
  conversation_id: string;
  sender_type: MessageSender;
  content: string;
  metadata: Record<string, unknown>;
  created_at: string;
}

// ---- Reviews ----

export interface Review {
  id: string;
  order_id: string;
  customer_id: string;
  rating: number;
  comment: string | null;
  is_public: boolean;
  created_at: string;
}

// ---- Notifications ----

export interface EmailNotification {
  id: string;
  to_email: string;
  subject: string;
  body: string | null;
  template_name: string | null;
  reference_type: string | null;
  reference_id: string | null;
  status: 'pending' | 'sent' | 'failed';
  sent_at: string | null;
  error: string | null;
  created_at: string;
}

// ---- Pricing Helpers ----

export interface QuoteCalculationInput {
  width_cm: number;
  height_cm: number;
  quantity: number;
  base_price_per_sqm: number;
  price_modifier: number;
  price_modifier_type: 'percentage' | 'fixed';
  options: { price: number; price_type: 'fixed' | 'per_sqm' | 'per_unit' }[];
}

export interface QuoteCalculationResult {
  subtotal: number;
  discount_percent: number;
  discount_amount: number;
  vat_percent: number;
  vat_amount: number;
  total: number;
}

// ---- Form Types ----

export interface EstimateFormStep {
  rooms: EstimateRoom[];
}

export interface EstimateRoom {
  id: string;
  name: string;
  windows: EstimateWindow[];
}

export interface EstimateWindow {
  id: string;
  name: string;
  width_cm: number;
  height_cm: number;
  quantity: number;
  product_id: string;
  model_id: string;
  options: string[];
  notes: string;
}

// ---- Auth ----

export interface AuthSession {
  customer: Customer | null;
  staff: StaffUser | null;
  isAuthenticated: boolean;
}