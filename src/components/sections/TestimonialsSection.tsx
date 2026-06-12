import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const testimonials = [
  {
    name: 'Dr. Sarah Mwaniki',
    role: 'Safety Director',
    company: 'Kenyatta National Hospital',
    content: 'LOTAN Services transformed our safety protocols. Their comprehensive audit identified critical gaps we had overlooked. The team is highly professional and thorough.',
    rating: 5,
  },
  {
    name: 'James Kipchoge',
    role: 'Operations Manager',
    company: 'Kipeto Wind Farm',
    content: 'Exceptional safety consulting services. They helped us achieve zero accidents during construction and operational phases. Highly recommended for energy sector projects.',
    rating: 5,
  },
  {
    name: 'Mary Wambui',
    role: 'HR Director',
    company: 'Nairobi Securities Exchange',
    content: 'The training programs provided by LOTAN have significantly reduced workplace incidents. Our team is more safety-conscious than ever. Great partnership.',
    rating: 5,
  },
  {
    name: 'Peter Ochieng',
    role: 'Facilities Manager',
    company: 'Insurance Regulatory Authority',
    content: 'Expert compliance consulting services. They guided us through DOSH requirements seamlessly. Our operations are now fully compliant and safer.',
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-bg-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy font-sora mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Trusted by leading organizations across Kenya for occupational safety excellence
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all h-full border border-gray-100 relative"
              >
                <Quote className="w-10 h-10 text-primary-green/20 absolute top-4 right-4" />

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="border-t pt-4">
                  <p className="font-semibold text-primary-navy">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-primary-green">{testimonial.company}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
