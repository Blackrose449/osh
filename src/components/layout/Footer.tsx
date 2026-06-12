import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, MessageCircle, Download } from 'lucide-react';

const quickLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Our Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Industries', path: '/industries' },
  { name: 'Simulations', path: '/simulations' },
  { name: 'Contact', path: '/contact' },
];

const serviceLinks = [
  'OSH Audits',
  'Risk Assessment',
  'Compliance Consulting',
  'Industrial Inspections',
  'Fire Safety Audits',
  'Safety Training',
];

export const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello! I would like to book a consultation with LOTAN Services.');
    window.open(`https://wa.me/254142668226?text=${message}`, '_blank');
  };

  const handleInstall = () => {
    const promptEvent = window.localStorage.getItem('pwa_prompt');
    if (promptEvent) {
      (window as any).installPWA?.();
    }
  };

  return (
    <footer className="bg-primary-navy text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/image.png"
                  alt="LOTAN Services Limited"
                  className="h-12 w-auto"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div>
                  <h3 className="text-xl font-bold font-sora">LOTAN</h3>
                  <p className="text-sm text-gray-400">For Health and Safety</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                LOTAN Services Limited is Kenya's leading occupational health and safety consultancy,
                providing expert services to protect your workforce and ensure regulatory compliance.
              </p>
              <button
                onClick={handleInstall}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm transition-colors"
              >
                <Download className="w-4 h-4" />
                Install App
              </button>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-sora">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-green transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-sora">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="/services"
                    className="text-gray-400 hover:text-primary-green transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-sora">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-green mt-0.5" />
                <span className="text-gray-400 text-sm">Nairobi, Kenya</span>
              </li>
              <li>
                <a href="tel:+254700000000" className="flex items-center gap-3 text-gray-400 hover:text-primary-green transition-colors text-sm">
                  <Phone className="w-5 h-5" />
                  +254 700 000 000
                </a>
              </li>
              <li>
                <a href="mailto:lotanservices@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-primary-green transition-colors text-sm">
                  <Mail className="w-5 h-5" />
                  lotanservices@gmail.com
                </a>
              </li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleWhatsAppClick}
              className="mt-6 w-full flex items-center justify-center gap-2 bg-primary-green text-white px-4 py-3 rounded-lg font-semibold"
            >
              <MessageCircle className="w-5 h-5" />
              Book Consultation
            </motion.button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} LOTAN Services Limited. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm text-center">
              For Health and Safety - Protecting Organizations Through Professional Consultancy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
