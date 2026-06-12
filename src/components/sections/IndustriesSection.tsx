import { motion } from 'framer-motion';
import { Stethoscope, Zap, Factory, HardHat, Building, GraduationCap, Settings, Building2 } from 'lucide-react';

const industries = [
  { name: 'Healthcare', icon: Stethoscope, description: 'Hospitals, clinics, and medical facilities' },
  { name: 'Energy', icon: Zap, description: 'Renewable and traditional energy sectors' },
  { name: 'Manufacturing', icon: Factory, description: 'Production and processing plants' },
  { name: 'Construction', icon: HardHat, description: 'Building and infrastructure projects' },
  { name: 'Financial Institutions', icon: Building, description: 'Banks and insurance companies' },
  { name: 'Education', icon: GraduationCap, description: 'Schools, colleges, and universities' },
  { name: 'Industrial Operations', icon: Settings, description: 'Heavy industry and logistics' },
  { name: 'Corporate Offices', icon: Building2, description: 'Business and administrative centers' },
];

export const IndustriesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="industries" className="py-20 bg-bg-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy font-sora mb-4">
            Industries We Serve
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Expert OSH solutions tailored to the unique needs of diverse industry sectors
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-xl transition-all cursor-pointer border border-gray-100"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-navy to-primary-green/80 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <industry.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-primary-navy mb-2 font-sora">
                {industry.name}
              </h3>
              <p className="text-gray-600 text-sm">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
