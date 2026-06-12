import { motion } from 'framer-motion';
import { ArrowRight, Play, MessageCircle, Shield, TrendingUp, Users, Award } from 'lucide-react';

const stats = [
  { value: '24+', label: 'Enterprise Clients', icon: Users },
  { value: '100%', label: 'DOSHS Aligned', icon: Award },
  { value: '10+', label: 'Years Experience', icon: TrendingUp },
  { value: '94%', label: 'Compliance Score', icon: Shield },
];

export const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello! I would like to book a consultation with LOTAN Services.');
    window.open(`https://wa.me/254142668226?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-navy via-[#0a2d4f] to-primary-navy">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary-green/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32 md:pt-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-6"
            >
              <Shield className="w-4 h-4" />
              Trusted by 24+ Enterprise Organizations
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-sora leading-tight mb-6">
              Protecting Organizations Through{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-green-400">
                Professional Health & Safety
              </span>{' '}
              Consultancy
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              LOTAN Services Limited provides expert occupational health and safety consultancy services
              including OSH audits, workplace inspections, risk assessments, compliance consulting,
              industrial inspections, and safety training across Kenya.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(75, 174, 79, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsAppClick}
                className="flex items-center justify-center gap-3 bg-primary-green text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-6 h-6" />
                Book Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.a
                href="#services"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all"
              >
                <Play className="w-5 h-5" />
                Explore Services
              </motion.a>
            </div>
          </motion.div>

          {/* Animated Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glassmorphism-dark rounded-xl p-6 group cursor-pointer"
              >
                <stat.icon className="w-8 h-8 text-primary-green mb-4 group-hover:scale-110 transition-transform" />
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-4xl font-bold text-white font-sora mb-2"
                >
                  {stat.value}
                </motion.p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
