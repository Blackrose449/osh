/*
  # Create website content schema

  1. New Tables
    - `site_settings` - Global website settings (logo, phone, email, WhatsApp number)
      - `id` (uuid, primary key)
      - `logo_url` (text) - URL for the company logo
      - `company_name` (text) - Company name
      - `phone` (text) - Main phone number
      - `email` (text) - Contact email
      - `whatsapp_number` (text) - WhatsApp phone number with country code
      - `address` (text) - Physical address
      - `description` (text) - Company description
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `services` - Company services offered
      - `id` (uuid, primary key)
      - `title` (text) - Service name
      - `description` (text) - Service description
      - `icon_name` (text) - Lucide icon name
      - `display_order` (integer) - Order of display
      - `is_active` (boolean) - Active status
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `testimonials` - Client testimonials
      - `id` (uuid, primary key)
      - `client_name` (text) - Client name
      - `company` (text) - Client company
      - `content` (text) - Testimonial content
      - `rating` (integer) - Star rating (1-5)
      - `display_order` (integer) - Order of display
      - `is_active` (boolean) - Active status
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `trust_metrics` - Company achievements and metrics
      - `id` (uuid, primary key)
      - `label` (text) - Metric label
      - `value` (text) - Metric value
      - `description` (text) - Additional description
      - `display_order` (integer) - Order of display
      - `is_active` (boolean) - Active status
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Public read access for active content
    - No write access from frontend (admin only)

  3. Important Notes
    - WhatsApp number should include country code (e.g., +254700000000)
    - Icon names correspond to Lucide React icon names
    - All tables have created_at and updated_at timestamps
*/

-- Create site_settings table
CREATE TABLE IF NOT EXISTS site_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  logo_url text DEFAULT '',
  company_name text DEFAULT 'LOTAN Services Limited',
  phone text DEFAULT '+254 700 000 000',
  email text DEFAULT 'lotanservices@gmail.com',
  whatsapp_number text DEFAULT '+254700000000',
  address text DEFAULT '',
  description text DEFAULT 'Your trusted partner in occupational safety, health, and environmental management.',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  icon_name text DEFAULT 'shield',
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  company text NOT NULL,
  content text NOT NULL,
  rating integer DEFAULT 5,
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create trust_metrics table
CREATE TABLE IF NOT EXISTS trust_metrics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  label text NOT NULL,
  value text NOT NULL,
  description text DEFAULT '',
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE trust_metrics ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public can view site settings"
  ON site_settings FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Public can view active services"
  ON services FOR SELECT
  TO public
  USING (is_active = true);

CREATE POLICY "Public can view active testimonials"
  ON testimonials FOR SELECT
  TO public
  USING (is_active = true);

CREATE POLICY "Public can view active trust metrics"
  ON trust_metrics FOR SELECT
  TO public
  USING (is_active = true);

-- Insert default site settings
INSERT INTO site_settings (logo_url, company_name, phone, email, whatsapp_number, address, description)
VALUES (
  '',
  'LOTAN Services Limited',
  '+254 700 000 000',
  'lotanservices@gmail.com',
  '+254700000000',
  'Nairobi, Kenya',
  'Your trusted partner in occupational safety, health, and environmental management. We provide comprehensive OSH solutions tailored to your needs.'
) ON CONFLICT DO NOTHING;

-- Insert default services
INSERT INTO services (title, description, icon_name, display_order, is_active) VALUES
('Safety Audits', 'Comprehensive workplace safety assessments and compliance audits to identify risks and ensure regulatory adherence.', 'shield-check', 1, true),
('Risk Assessment', 'Detailed hazard identification and risk evaluation services to protect your workforce and business operations.', 'alert-triangle', 2, true),
('Training Programs', 'Professional OSH training programs designed to empower your team with essential safety skills and knowledge.', 'graduation-cap', 3, true),
('Incident Investigation', 'Thorough investigation services to determine root causes and prevent future workplace incidents.', 'search', 4, true),
('Compliance Consulting', 'Expert guidance on DOSH requirements and regulatory compliance to keep your business legally protected.', 'file-text', 5, true),
('Environmental Management', 'Sustainable environmental practices and monitoring solutions for responsible business operations.', 'leaf', 6, true);

-- Insert default testimonials
INSERT INTO testimonials (client_name, company, content, rating, display_order, is_active) VALUES
('John Kamau', 'Manufacturing Solutions Ltd', 'LOTAN Services transformed our safety protocols. Their comprehensive audit identified critical gaps we had overlooked. Highly professional and thorough.', 5, 1, true),
('Sarah Wanjiku', 'Construction Partners Kenya', 'The training programs provided by LOTAN have significantly reduced workplace incidents. Our team is more safety-conscious than ever.', 5, 2, true),
('Michael Ochieng', 'AgroProcessing Industries', 'Exceptional compliance consulting services. They guided us through DOSH requirements seamlessly. Our operations are now fully compliant.', 5, 3, true);

-- Insert default trust metrics
INSERT INTO trust_metrics (label, value, description, display_order, is_active) VALUES
('Clients Served', '24+', 'Trusted by leading organizations across Kenya', 1, true),
('DOSH Compliance', '100%', 'Aligned with DOSHS requirements', 2, true),
('Years Experience', '10+', 'Decades of expertise in OSH management', 3, true),
('Success Rate', '99%', 'Incident resolution and prevention rate', 4, true);