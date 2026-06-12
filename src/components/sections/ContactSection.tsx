import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { useState } from 'react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hello! I would like to book a consultation.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nService: ${formData.service}\n\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/254700000000?text=${message}`, '_blank');
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello! I would like to book a consultation with LOTAN Services.');
    window.open(`https://wa.me/254142668226?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy font-sora mb-4">
            Book Your Consultation
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get in touch with our expert team for comprehensive OSH solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-bg-main rounded-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-primary-navy font-sora mb-6">
                Request a Consultation
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all"
                      placeholder="+254 700 000 000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all"
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="OSH Audits">OSH Audits</option>
                    <option value="Risk Assessment">Risk Assessment</option>
                    <option value="Compliance Consulting">Compliance Consulting</option>
                    <option value="Industrial Inspections">Industrial Inspections</option>
                    <option value="Fire Safety Audits">Fire Safety Audits</option>
                    <option value="Safety Training">Safety Training</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your safety needs..."
                  />
                </div>

                <Button type="submit" size="lg" fullWidth className="mt-6">
                  <Send className="w-5 h-5" />
                  Send via WhatsApp
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quick Contact Cards */}
            <div className="bg-gradient-to-br from-primary-navy to-primary-green rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold font-sora mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-center gap-4 bg-white/20 backdrop-blur-sm px-6 py-4 rounded-lg hover:bg-white/30 transition-all"
                >
                  <MessageCircle className="w-8 h-8" />
                  <div className="text-left">
                    <p className="font-semibold">WhatsApp Us</p>
                    <p className="text-sm text-white/80">+254 142 668 226</p>
                  </div>
                </motion.button>

                <a href="tel:+254142668226" className="flex items-center gap-4 bg-white/20 backdrop-blur-sm px-6 py-4 rounded-lg hover:bg-white/30 transition-all">
                  <Phone className="w-8 h-8" />
                  <div className="text-left">
                    <p className="font-semibold">Call Us</p>
                    <p className="text-sm text-white/80">+254 142 668 226</p>
                  </div>
                </a>

                <a href="mailto:lotanservices@gmail.com" className="flex items-center gap-4 bg-white/20 backdrop-blur-sm px-6 py-4 rounded-lg hover:bg-white/30 transition-all">
                  <Mail className="w-8 h-8" />
                  <div className="text-left">
                    <p className="font-semibold">Email Us</p>
                    <p className="text-sm text-white/80">lotanservices@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Office Location */}
            <div className="bg-bg-main rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-primary-navy font-sora mb-4">Office Location</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary-green mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Nairobi, Kenya</p>
                    <p className="text-sm text-gray-600">Main Office</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary-green mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Office Hours</p>
                    <p className="text-sm text-gray-600">Mon - Fri: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
