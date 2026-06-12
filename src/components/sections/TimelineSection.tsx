import { motion } from 'framer-motion';
import { Building2, Wind, Landmark, TrendingUp, Building } from 'lucide-react';

const timeline = [
  {
    year: '2024',
    title: 'Kenyatta University Teaching Referral and Research Hospital',
    description: 'Comprehensive OSH management system implementation for Kenya\'s premier teaching hospital.',
    achievements: ['15,000+ Staff Trained', '99% Compliance', 'Zero Incidents'],
    icon: Building2,
  },
  {
    year: '2023',
    title: 'Insurance Regulatory Authority',
    description: 'Safety compliance audit and risk management framework development for financial sector regulator.',
    achievements: ['500+ Staff', '100% DOSHS Compliant', '45% Risk Reduction'],
    icon: Landmark,
  },
  {
    year: '2022',
    title: 'Kipeto Wind Farm',
    description: 'Safety systems for Africa\'s largest wind farm project during construction and operation phases.',
    achievements: ['150+ MW Capacity', 'Zero Accidents', 'ISO 45001 Certified'],
    icon: Wind,
  },
  {
    year: '2021',
    title: 'Nairobi Securities Exchange',
    description: 'Fire safety audits and emergency response planning for financial sector operations.',
    achievements: ['500+ Employees', '98% Compliance', '60% Incident Reduction'],
    icon: TrendingUp,
  },
  {
    year: '2020',
    title: 'Royal Nairobi Golf Club',
    description: 'Environmental and occupational safety assessments for premier golf facility.',
    achievements: ['200+ Staff', 'Full Compliance', 'Zero Violations'],
    icon: Building,
  },
  {
    year: '2019',
    title: 'Kenyatta National Hospital',
    description: 'Large-scale OSH audit and safety training for Kenya\'s largest referral hospital.',
    achievements: ['15,000+ Staff', '95% Compliance', '45% Incident Reduction'],
    icon: Building2,
  },
];

export const TimelineSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white font-sora mb-4">
            Our Experience Timeline
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A decade of excellence in occupational health and safety consultancy
          </p>
        </motion.div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-green to-white" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-800"
                  >
                    <span className="inline-block px-3 py-1 bg-primary-green/10 text-primary-green rounded-full text-sm font-semibold mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-white font-sora mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.achievements.map((achievement, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-800 text-primary-green rounded-full text-xs font-medium">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary-green flex items-center justify-center z-10">
                  <item.icon className="w-6 h-6 text-black" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
