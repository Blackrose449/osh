import { motion } from 'framer-motion';
import { Shield, Users, Award, Target, Heart, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const AboutPage = () => {
  const values = [
    { icon: Shield, title: 'Safety First', description: 'We prioritize workplace safety above all else, ensuring every solution protects lives.' },
    { icon: Users, title: 'Client-Centric', description: 'Our solutions are tailored to meet the unique needs of each organization we serve.' },
    { icon: Award, title: 'Excellence', description: 'We maintain the highest standards of professionalism and technical expertise.' },
    { icon: Target, title: 'Innovation', description: 'We leverage modern approaches to deliver cutting-edge safety solutions.' },
    { icon: Heart, title: 'Integrity', description: 'We operate with honesty, transparency, and ethical business practices.' },
  ];

  const milestones = [
    { year: '2010', event: 'LOTAN Services Limited founded in Nairobi' },
    { year: '2012', event: 'Achieved DOSH certification and regulatory approval' },
    { year: '2015', event: 'Expanded services to 24+ enterprise clients' },
    { year: '2018', event: 'Launched comprehensive safety training programs' },
    { year: '2020', event: 'Implemented digital safety management systems' },
    { year: '2024', event: 'Serving 100+ organizations across Kenya' },
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello! I would like to learn more about LOTAN Services.');
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
              About LOTAN Services Limited
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Kenya's trusted partner in occupational health and safety consultancy,
              delivering expert solutions for over a decade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-bg-main rounded-2xl p-8 border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-primary-navy font-sora mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To provide comprehensive, high-quality occupational health and safety consultancy
                services that protect workers, ensure regulatory compliance, and create safer
                workplace environments across Kenya and beyond.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-bg-main rounded-2xl p-8 border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-primary-navy font-sora mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To be the leading occupational safety consultancy in East Africa, recognized
                for excellence, innovation, and our unwavering commitment to protecting lives
                and creating safety-conscious organizational cultures.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-bg-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy font-sora mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary-navy to-primary-green flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary-navy mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy font-sora mb-4">
              Our Journey
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-green to-primary-navy" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-bg-main rounded-lg p-4 inline-block">
                      <span className="text-primary-green font-bold text-lg">{milestone.year}</span>
                      <p className="text-gray-700 text-sm">{milestone.event}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-navy to-primary-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-sora mb-6">
            Partner with Kenya's Safety Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 24+ leading organizations that trust LOTAN for their safety needs
          </p>
          <Button onClick={handleWhatsAppClick} size="lg">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};
