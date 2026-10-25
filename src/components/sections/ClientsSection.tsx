import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import { SITE_STATS } from '../../data/siteStats';
import { clients } from '../../data/clients';

const half = Math.ceil(clients.length / 2);
const rows = [clients.slice(0, half), clients.slice(half)];


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
            Serving {SITE_STATS.ORGANIZATIONS} organizations across {SITE_STATS.WORKPLACES} workplaces in Kenya
          </p>
        </motion.div>
      </div>

      <div className="relative space-y-4">
        {rows.map((row, rowIndex) => (
          <Swiper
            key={rowIndex}
            modules={[Autoplay, FreeMode]}
            spaceBetween={30}
            slidesPerView="auto"
            freeMode={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              reverseDirection: rowIndex === 1,
            }}
            speed={rowIndex === 0 ? 60000 : 70000}
            loop={true}
            className="w-full"
          >
            {[...row, ...row].map((client, index) => (
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
        ))}
      </div>
    </section>
  );
};
