import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';

const clients = [
  'Mwalimu National Sacco Ltd',
  'Royal Nairobi Golf Club',
  'Kenyatta National Hospital',
  'Kipeto Wind Farm',
  'Bimas Kenya Limited',
  'Electricom Solutions Limited',
  'Tradco Services Limited',
  'Insurance Regulatory Authority (IRA)',
  'MUKI Sacco',
  'Tugende Limited',
  'Crawford International School',
  'CIPLA Kenya',
  'Nairobi Securities Exchange',
  'African Economic Research Consortium',
  'MEDS Centre',
  'Harambee Sacco',
  'NKG Coffee Mills',
  'Novel Paints',
  'GDC Sacco Ltd',
  'Marie Stopes Kisumu Clinic',
  'Baraza Media Lab',
  'Toptouch Marketing Limited',
  'Upeo Safety Solutions',
  'Kenyatta University Teaching Referral and Research Hospital',
];

export const ClientsSection = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy font-sora mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-gray-600 text-lg">
            Partnering with enterprises across diverse industries in Kenya
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={30}
          slidesPerView="auto"
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={3000}
          loop={true}
          className="w-full"
        >
          {[...clients, ...clients].map((client, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 bg-gray-50 rounded-lg border border-gray-100 min-w-[250px] flex items-center justify-center group cursor-pointer"
              >
                <p className="text-sm font-medium text-gray-400 group-hover:text-primary-navy transition-colors">
                  {client}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
