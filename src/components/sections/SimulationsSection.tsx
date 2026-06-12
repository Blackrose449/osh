import { motion } from 'framer-motion';
import { Activity, AlertTriangle, BarChart3, Search, AlertCircle } from 'lucide-react';
import { Card } from '../ui/Card';
import { Skeleton } from '../ui/Skeleton';

const modules = [
  { name: 'Risk Assessment Dashboard', icon: Activity, color: 'from-blue-500 to-cyan-500' },
  { name: 'Incident Reporting System', icon: AlertTriangle, color: 'from-red-500 to-orange-500' },
  { name: 'Compliance Analytics', icon: BarChart3, color: 'from-purple-500 to-pink-500' },
  { name: 'Safety Inspection Workflow', icon: Search, color: 'from-green-500 to-emerald-500' },
  { name: 'Hazard Reporting System', icon: AlertCircle, color: 'from-yellow-500 to-orange-500' },
];

const mockData = {
  totalIncidents: 23,
  resolvedIncidents: 18,
  pendingInspections: 12,
  complianceScore: 94,
  riskLevel: 'Low',
  activeHazards: 7,
};

export const SimulationsSection = () => {
  return (
    <section id="simulations" className="py-20 bg-gradient-to-br from-primary-navy to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 left-0 w-96 h-96 bg-primary-green/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white font-sora mb-4">
            Interactive Safety Simulations
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Future-ready dashboards for modern safety management and analytics
          </p>
        </motion.div>

        {/* Modules Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8"
        >
          {modules.map((module, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all cursor-pointer border border-white/10"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${module.color} flex items-center justify-center mx-auto mb-3`}>
                <module.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-white text-sm font-medium">{module.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mock Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white font-sora">Dashboard Preview</h3>
            <span className="px-3 py-1 bg-primary-green/20 text-primary-green rounded-full text-sm font-medium">Live Demo</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {Object.entries(mockData).slice(0, 3).map(([key, value], index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 rounded-lg p-4"
              >
                <p className="text-gray-400 text-sm mb-1">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                <p className="text-3xl font-bold text-white font-sora">{value}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(mockData).slice(3, 6).map(([key, value], index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 rounded-lg p-4"
              >
                <p className="text-gray-400 text-sm mb-1">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                <p className="text-3xl font-bold text-primary-green font-sora">{value}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <button className="px-6 py-3 bg-white text-primary-navy rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Open Full Dashboard
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
