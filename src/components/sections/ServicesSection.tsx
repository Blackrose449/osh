import { motion } from 'framer-motion';
import { Shield, Search, FileText, Factory, Flame, GraduationCap, Settings, AlertTriangle, Droplets, FileCheck } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'OSH Audits',
    description: 'Comprehensive occupational safety and health audits to ensure compliance with regulatory standards.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Search,
    title: 'Workplace Risk Assessment',
    description: 'Thorough risk assessments to identify potential hazards and implement effective control measures.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: FileText,
    title: 'Safety Compliance Consulting',
    description: 'Expert consulting to navigate complex safety regulations and achieve full compliance.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Factory,
    title: 'Industrial Inspections',
    description: 'Detailed inspections of industrial facilities to ensure safety and operational efficiency.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Flame,
    title: 'Fire Safety Audits',
    description: 'Fire risk assessments and safety audits to protect your facilities and workforce.',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: GraduationCap,
    title: 'Safety Training Programs',
    description: 'Professional training programs to empower your workforce with essential safety skills.',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: Settings,
    title: 'Workplace Safety Systems',
    description: 'Implementation of comprehensive safety management systems tailored to your needs.',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: AlertTriangle,
    title: 'Incident Investigation',
    description: 'Expert investigation services to determine root causes and prevent future incidents.',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    icon: Droplets,
    title: 'Occupational Hygiene',
    description: 'Assessment and control of workplace environmental factors affecting worker health.',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: FileCheck,
    title: 'Safety Policy Development',
    description: 'Development of comprehensive safety policies aligned with industry best practices.',
    color: 'from-emerald-500 to-emerald-600',
  },
];

export const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="py-20 bg-bg-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy font-sora mb-4">
            Our Premium Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive OSH solutions tailored to protect your workforce and ensure regulatory compliance
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
            >
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-primary-navy mb-2 font-sora">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
