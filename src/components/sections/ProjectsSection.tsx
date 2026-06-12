import { motion } from 'framer-motion';
import { TrendingUp, Users, Shield, Award } from 'lucide-react';

const projects = [
  {
    title: 'Kenyatta National Hospital',
    category: 'Healthcare',
    description: 'Implemented a comprehensive OSH management system for Kenya\'s largest referral and teaching hospital, including safety audits, training programs, and compliance monitoring.',
    metrics: [
      { value: '15,000+', label: 'Staff Covered', icon: Users },
      { value: '95%', label: 'Compliance Score', icon: Shield },
      { value: '-45%', label: 'Incident Reduction', icon: TrendingUp },
    ],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Kipeto Wind Farm',
    category: 'Energy',
    description: 'Safety management for one of Africa\'s largest wind farms during construction and operational phases, achieving zero lost-time incidents.',
    metrics: [
      { value: '150+ MW', label: 'Capacity', icon: Award },
      { value: '100%', label: 'Compliance', icon: Shield },
      { value: '0', label: 'Incidents', icon: TrendingUp },
    ],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Nairobi Securities Exchange',
    category: 'Financial Services',
    description: 'Fire safety audits and emergency response planning for East Africa\'s leading securities exchange, ensuring business continuity and staff safety.',
    metrics: [
      { value: '500+', label: 'Employees', icon: Users },
      { value: '98%', label: 'Safety Rating', icon: Shield },
      { value: '-60%', label: 'Risk Factors', icon: TrendingUp },
    ],
    gradient: 'from-purple-500 to-pink-500',
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white font-sora mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Case studies showcasing our impact across diverse industries
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              {/* Project Image/Visual */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`w-full lg:w-1/2 h-64 md:h-80 rounded-2xl bg-gradient-to-br ${project.gradient} p-8 flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative z-10 text-center text-white">
                  <p className="text-sm font-semibold mb-2 uppercase tracking-wide">Case Study</p>
                  <h3 className="text-3xl font-bold font-sora mb-2">{project.title}</h3>
                  <p className="text-white/80">{project.category}</p>
                </div>
              </motion.div>

              {/* Project Details */}
              <div className="w-full lg:w-1/2">
                <span className="inline-block px-4 py-1 bg-primary-green/10 text-primary-green rounded-full text-sm font-semibold mb-4">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white font-sora mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="text-center bg-gray-900 rounded-lg p-4 border border-gray-800">
                      <metric.icon className="w-6 h-6 text-primary-green mx-auto mb-2" />
                      <p className="text-2xl font-bold text-white">{metric.value}</p>
                      <p className="text-xs text-gray-400">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
