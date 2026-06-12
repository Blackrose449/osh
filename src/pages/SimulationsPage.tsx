import { motion } from 'framer-motion';
import { Activity, AlertTriangle, BarChart3, Search, AlertCircle, TrendingUp, Users, Shield, Clock } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Skeleton } from '../components/ui/Skeleton';

const modules = [
  {
    name: 'Risk Assessment Dashboard',
    icon: Activity,
    description: 'Real-time risk monitoring and assessment tools for proactive safety management.',
    status: 'Active',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Incident Reporting System',
    icon: AlertTriangle,
    description: 'Streamlined incident reporting and tracking for rapid response and analysis.',
    status: 'Active',
    color: 'from-red-500 to-orange-500',
  },
  {
    name: 'Compliance Analytics',
    icon: BarChart3,
    description: 'Comprehensive compliance monitoring and reporting dashboards.',
    status: 'Active',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Safety Inspection Workflow',
    icon: Search,
    description: 'Digital inspection checklists and workflow automation for safety audits.',
    status: 'Active',
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Hazard Reporting System',
    icon: AlertCircle,
    description: 'Mobile hazard identification and reporting with real-time notifications.',
    status: 'Active',
    color: 'from-yellow-500 to-orange-500',
  },
];

const mockAnalytics = {
  totalIncidents: 23,
  resolvedIncidents: 18,
  pendingInspections: 12,
  complianceScore: 94,
  riskLevel: 'Low',
  activeHazards: 7,
  staffTrained: 1245,
  responseTime: '2.4h',
};

export const SimulationsPage = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary-navy via-gray-900 to-primary-navy text-white relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              className="absolute w-1 h-1 bg-primary-green/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-primary-green/20 text-primary-green rounded-full text-sm font-semibold mb-4">
              Future-Ready Safety Systems
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-sora mb-6">
              Interactive Safety Simulations
            </h1>
            <p className="text-xl text-white/80">
              Modern dashboards and simulation tools for comprehensive safety management
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-bg-main rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br ${module.color} flex items-center justify-center mb-4">
                  <module.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-primary-navy font-sora">{module.name}</h3>
                  <span className="px-2 py-1 bg-primary-green/10 text-primary-green text-xs rounded-full font-medium">
                    {module.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{module.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-bg-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy font-sora mb-4">
              Dashboard Preview
            </h2>
            <p className="text-gray-600 text-lg">
              Interactive safety analytics and monitoring
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-primary-navy font-sora">Safety Overview</h3>
                <p className="text-gray-600 text-sm">Real-time monitoring dashboard</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-green rounded-full animate-pulse" />
                <span className="text-sm text-gray-600">Live Data</span>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-bg-main rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <Activity className="w-8 h-8 text-blue-500" />
                  <TrendingUp className="w-5 h-5 text-primary-green" />
                </div>
                <p className="text-3xl font-bold text-primary-navy font-sora">{mockAnalytics.totalIncidents}</p>
                <p className="text-sm text-gray-600">Total Incidents</p>
              </div>

              <div className="bg-bg-main rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <Shield className="w-8 h-8 text-primary-green" />
                  <TrendingUp className="w-5 h-5 text-primary-green" />
                </div>
                <p className="text-3xl font-bold text-primary-navy font-sora">{mockAnalytics.resolvedIncidents}</p>
                <p className="text-sm text-gray-600">Resolved</p>
              </div>

              <div className="bg-bg-main rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <Search className="w-8 h-8 text-purple-500" />
                  <Clock className="w-5 h-5 text-yellow-500" />
                </div>
                <p className="text-3xl font-bold text-primary-navy font-sora">{mockAnalytics.pendingInspections}</p>
                <p className="text-sm text-gray-600">Pending Inspections</p>
              </div>

              <div className="bg-bg-main rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <BarChart3 className="w-8 h-8 text-pink-500" />
                  <TrendingUp className="w-5 h-5 text-primary-green" />
                </div>
                <p className="text-3xl font-bold text-primary-green font-sora">{mockAnalytics.complianceScore}%</p>
                <p className="text-sm text-gray-600">Compliance Score</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-primary-navy/5 rounded-lg p-6">
                <p className="text-sm text-gray-600 mb-1">Risk Level</p>
                <p className="text-2xl font-bold text-primary-green font-sora">{mockAnalytics.riskLevel}</p>
              </div>

              <div className="bg-primary-navy/5 rounded-lg p-6">
                <p className="text-sm text-gray-600 mb-1">Active Hazards</p>
                <p className="text-2xl font-bold text-primary-navy font-sora">{mockAnalytics.activeHazards}</p>
              </div>

              <div className="bg-primary-navy/5 rounded-lg p-6">
                <p className="text-sm text-gray-600 mb-1">Avg. Response Time</p>
                <p className="text-2xl font-bold text-primary-navy font-sora">{mockAnalytics.responseTime}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
