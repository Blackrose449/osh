import { motion } from 'framer-motion';
import { Stethoscope, Zap, Factory, HardHat, Building, GraduationCap, Settings, Building2, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';

const industries = [
  {
    icon: Stethoscope,
    name: 'Healthcare',
    description: 'Hospitals, clinics, and medical facilities require specialized safety protocols for patient and staff protection.',
    services: ['Infection control', 'Medical waste management', 'Emergency response', 'Staff safety training'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Zap,
    name: 'Energy',
    description: 'Renewable and traditional energy sectors face unique challenges in worker safety and environmental protection.',
    services: ['High-voltage safety', 'Environmental compliance', 'Emergency procedures', 'Risk assessment'],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Factory,
    name: 'Manufacturing',
    description: 'Production and processing plants require comprehensive safety systems to protect workers and equipment.',
    services: ['Machine guarding', 'Chemical safety', 'Industrial hygiene', 'Process safety'],
    color: 'from-gray-500 to-gray-700',
  },
  {
    icon: HardHat,
    name: 'Construction',
    description: 'Building and infrastructure projects demand rigorous safety standards to prevent accidents and injuries.',
    services: ['Fall protection', 'Site safety', 'Equipment safety', 'Heavy machinery'],
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Building,
    name: 'Financial Institutions',
    description: 'Banks and insurance companies need safety systems for office environments and branch networks.',
    services: ['Fire safety', 'Emergency evacuation', 'Office ergonomics', 'Security systems'],
    color: 'from-green-500 to-teal-500',
  },
  {
    icon: GraduationCap,
    name: 'Education',
    description: 'Schools, colleges, and universities require safety systems that protect students, staff, and visitors.',
    services: ['Campus safety', 'Laboratory safety', 'Sports safety', 'Emergency drills'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Settings,
    name: 'Industrial Operations',
    description: 'Heavy industry and logistics operations face complex safety challenges requiring expert solutions.',
    services: ['Warehouse safety', 'Logistics safety', 'Loading dock safety', 'Vehicle safety'],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Building2,
    name: 'Corporate Offices',
    description: 'Business and administrative centers need modern workplace safety systems and ergonomics.',
    services: ['Office ergonomics', 'Indoor air quality', 'Fire safety', 'Emergency planning'],
    color: 'from-teal-500 to-cyan-500',
  },
];

export const IndustriesPage = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello! I would like to inquire about industry-specific safety solutions.');
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
              Industries We Serve
            </h1>
            <p className="text-xl text-white/90">
              Expert OSH solutions tailored to the unique needs of diverse industry sectors
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-bg-main rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className={`h-32 bg-gradient-to-br ${industry.color} p-6 flex items-center`}>
                  <industry.icon className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary-navy font-sora mb-2">{industry.name}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.services.map((service, i) => (
                        <span key={i} className="px-3 py-1 bg-white text-gray-700 rounded-full text-xs font-medium">
                          {service}
                        </span>
                      ))}
                    </div>
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
            Need Industry-Specific Solutions?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your sector's unique safety requirements
          </p>
          <Button onClick={handleWhatsAppClick} size="lg">
            <MessageCircle className="w-5 h-5" />
            Get Expert Advice
          </Button>
        </div>
      </section>
    </div>
  );
};
