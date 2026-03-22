import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Calendar, Phone } from 'lucide-react';

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-5"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 7,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-white mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-4 sm:mb-6 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
            We build, run, and scale your business with complete IT solutions and advanced AI systems.
          </p>
          <p className="text-blue-100 mb-8 sm:mb-12 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Let's discuss how we can transform your business with our cutting-edge solutions
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full inline-flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors duration-300 text-sm sm:text-base"
            >
              <Calendar size={20} />
              Schedule Free Consultation
            </motion.a>
            <motion.a
              href="tel:+916203447902"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full inline-flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all duration-300 text-sm sm:text-base"
            >
              <Phone size={20} />
              <span className="hidden sm:inline">Call +91 6203447902</span>
              <span className="sm:hidden">Call Now</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}