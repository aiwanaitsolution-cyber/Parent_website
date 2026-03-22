import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO, TechStart India',
      content: 'Axcelgro transformed our business with their AI automation. Revenue increased by 300%!',
      rating: 5,
      avatar: 'RK',
    },
    {
      name: 'Priya Sharma',
      role: 'Founder, EcomGrow',
      content: 'The custom CRM they built is exactly what we needed. Exceptional service and support!',
      rating: 5,
      avatar: 'PS',
    },
    {
      name: 'Amit Patel',
      role: 'Director, CloudTech Solutions',
      content: 'Professional, innovative, and reliable. Best tech partner we\'ve ever worked with!',
      rating: 5,
      avatar: 'AP',
    },
  ];

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-gray-900 mb-4 text-2xl sm:text-3xl md:text-4xl">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Don't just take our word for it - hear from businesses we've transformed
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Quote className="absolute top-4 right-4 sm:top-6 sm:right-6 text-blue-200 opacity-50" size={48} />
              <div className="relative z-10">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={18} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-sm sm:text-base italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-gray-900 text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-gray-600 text-xs sm:text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
