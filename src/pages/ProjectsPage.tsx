import { motion } from 'framer-motion';
import { TrendingUp, Users, Shield, Award } from 'lucide-react';
import { Button } from '../components/ui/Button';

const projects = [
  {
    title: 'Kenyatta National Hospital',
    category: 'Healthcare',
    year: '2019',
    description: 'Comprehensive OSH management system implementation for Kenya\'s premier teaching hospital.',
    achievements: ['15,000+ Staff Trained', '95% Compliance', '45% Incident Reduction'],
    gradient: 'from-blue-500 to-cyan-500',
    details: 'Implemented comprehensive safety protocols, trained medical staff, and established emergency response systems.',
  },
  {
    title: 'Royal Nairobi Golf Club',
    category: 'Hospitality',
    year: '2020',
    description: 'Environmental and occupational safety assessments for premier golf facility.',
    achievements: ['200+ Staff', '100% Compliance', 'Zero Violations'],
    gradient: 'from-green-500 to-emerald-500',
    details: 'Conducted environmental impact assessments and implemented sustainable safety practices.',
  },
  {
    title: 'Kipeto Wind Farm',
    category: 'Energy',
    year: '2022',
    description: 'Safety systems for Africa\'s largest wind farm during construction and operation.',
    achievements: ['150+ MW Capacity', 'Zero Accidents', 'ISO 45001 Certified'],
    gradient: 'from-teal-500 to-cyan-500',
    details: 'Provided comprehensive safety management during construction and operational phases.',
  },
  {
    title: 'Nairobi Securities Exchange',
    category: 'Financial Services',
    year: '2021',
    description: 'Fire safety audits and emergency response planning for financial sector operations.',
    achievements: ['500+ Employees', '98% Compliance', '60% Incident Reduction'],
    gradient: 'from-purple-500 to-pink-500',
    details: 'Fire safety audits, emergency response planning, and business continuity frameworks.',
  },
  {
    title: 'Insurance Regulatory Authority',
    category: 'Government',
    year: '2023',
    description: 'Safety compliance audit and risk management for financial sector regulator.',
    achievements: ['500+ Staff', '100% DOSHS Compliant', '45% Risk Reduction'],
    gradient: 'from-orange-500 to-red-500',
    details: 'Comprehensive compliance audit and risk management framework development.',
  },
  {
    title: 'Kenyatta University Teaching Hospital',
    category: 'Healthcare',
    year: '2024',
    description: 'Safety systems for Kenya\'s newest and most advanced teaching hospital.',
    achievements: ['15,000+ Staff', '99% Compliance', 'Zero Incidents'],
    gradient: 'from-blue-600 to-purple-500',
    details: 'Full OSH management system implementation with modern safety technologies.',
  },
];

export const ProjectsPage = () => {
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
              Our Projects
            </h1>
            <p className="text-xl text-white/90">
              Case studies showcasing our impact across diverse industries in Kenya
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} p-6 flex items-end`}>
                  <div className="text-white">
                    <span className="text-sm font-semibold opacity-90">{project.category}</span>
                    <h3 className="text-2xl font-bold font-sora">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-bg-main text-gray-700 rounded-full text-sm font-medium">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <Shield className="w-4 h-4 text-primary-green" />
                        <span className="text-gray-700">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
