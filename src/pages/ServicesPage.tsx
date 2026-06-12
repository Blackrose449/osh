import { motion } from 'framer-motion';
import { Shield, Search, FileText, Factory, Flame, GraduationCap, Settings, AlertTriangle, Droplets, FileCheck, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';

const services = [
  {
    icon: Shield,
    title: 'OSH Audits',
    description: 'Comprehensive occupational safety and health audits to ensure compliance with DOSH and regulatory standards.',
    features: ['Workplace inspection', 'Hazard identification', 'Compliance assessment', 'Gap analysis', 'Recommendations report'],
  },
  {
    icon: Search,
    title: 'Workplace Risk Assessment',
    description: 'Thorough risk assessments to identify potential hazards and implement effective control measures.',
    features: ['Hazard identification', 'Risk evaluation', 'Control measures', 'Monitoring plan', 'Documentation'],
  },
  {
    icon: FileText,
    title: 'Safety Compliance Consulting',
    description: 'Expert consulting to navigate complex safety regulations and achieve full compliance.',
    features: ['Regulatory guidance', 'Policy development', 'Compliance monitoring', 'Training support', 'Documentation'],
  },
  {
    icon: Factory,
    title: 'Industrial Inspections',
    description: 'Detailed inspections of industrial facilities to ensure safety and operational efficiency.',
    features: ['Equipment inspection', 'Process evaluation', 'Safety systems check', 'Certification support', 'Follow-up audits'],
  },
  {
    icon: Flame,
    title: 'Fire Safety Audits',
    description: 'Fire risk assessments and safety audits to protect your facilities and workforce.',
    features: ['Fire risk assessment', 'Equipment inspection', 'Evacuation planning', 'Training programs', 'Certification'],
  },
  {
    icon: GraduationCap,
    title: 'Safety Training Programs',
    description: 'Professional training programs to empower your workforce with essential safety skills.',
    features: ['First aid training', 'Fire safety', 'Hazard awareness', 'Emergency response', 'Certification'],
  },
  {
    icon: Settings,
    title: 'Workplace Safety Systems',
    description: 'Implementation of comprehensive safety management systems tailored to your needs.',
    features: ['System design', 'Implementation', 'Training', 'Monitoring', 'Continuous improvement'],
  },
  {
    icon: AlertTriangle,
    title: 'Incident Investigation',
    description: 'Expert investigation services to determine root causes and prevent future incidents.',
    features: ['Root cause analysis', 'Evidence collection', 'Report generation', 'Recommendations', 'Follow-up'],
  },
  {
    icon: Droplets,
    title: 'Occupational Hygiene',
    description: 'Assessment and control of workplace environmental factors affecting worker health.',
    features: ['Air quality testing', 'Noise assessment', 'Chemical exposure', 'Ergonomics', 'Control measures'],
  },
  {
    icon: FileCheck,
    title: 'Safety Policy Development',
    description: 'Development of comprehensive safety policies aligned with industry best practices.',
    features: ['Policy drafting', 'Procedure development', 'Implementation guide', 'Training', 'Review schedule'],
  },
];

export const ServicesPage = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello! I would like to inquire about your services.');
    window.open(`https://wa.me/254142668226?text=${message}`, '_blank');
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary-navy to-primary-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-sora mb-6">
              Our Premium Services
            </h1>
            <p className="text-xl text-white/90">
              Comprehensive occupational health and safety solutions tailored to your industry needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-bg-main rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary-navy to-primary-green flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary-navy font-sora mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-green" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-navy to-primary-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-sora mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your safety needs
          </p>
          <Button onClick={handleWhatsAppClick} size="lg">
            <MessageCircle className="w-5 h-5" />
            Book Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};
