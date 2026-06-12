import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { SiteSettings, Service, Testimonial, TrustMetric } from '../lib/types';

export function useSiteContent() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [trustMetrics, setTrustMetrics] = useState<TrustMetric[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchContent() {
      try {
        setLoading(true);

        const [settingsResult, servicesResult, testimonialsResult, metricsResult] = await Promise.all([
          supabase.from('site_settings').select('*').maybeSingle(),
          supabase.from('services').select('*').eq('is_active', true).order('display_order'),
          supabase.from('testimonials').select('*').eq('is_active', true).order('display_order'),
          supabase.from('trust_metrics').select('*').eq('is_active', true).order('display_order'),
        ]);

        if (settingsResult.error) throw settingsResult.error;
        if (servicesResult.error) throw servicesResult.error;
        if (testimonialsResult.error) throw testimonialsResult.error;
        if (metricsResult.error) throw metricsResult.error;

        setSettings(settingsResult.data);
        setServices(servicesResult.data || []);
        setTestimonials(testimonialsResult.data || []);
        setTrustMetrics(metricsResult.data || []);
      } catch (err) {
        console.error('Error fetching site content:', err);
        setError(err instanceof Error ? err.message : 'Failed to load content');
      } finally {
        setLoading(false);
      }
    }

    fetchContent();
  }, []);

  return {
    settings,
    services,
    testimonials,
    trustMetrics,
    loading,
    error,
  };
}
