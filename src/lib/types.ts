export interface SiteSettings {
  id: string;
  logo_url: string;
  company_name: string;
  phone: string;
  email: string;
  whatsapp_number: string;
  address: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon_name: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Testimonial {
  id: string;
  client_name: string;
  company: string;
  content: string;
  rating: number;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface TrustMetric {
  id: string;
  label: string;
  value: string;
  description: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}
