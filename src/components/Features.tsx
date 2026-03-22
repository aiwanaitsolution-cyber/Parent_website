import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Shield, Zap, Clock, HeadphonesIcon, TrendingUp, CheckCircle } from 'lucide-react';

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and reliability for all our solutions.',
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimized for speed and efficiency to deliver the best user experience.',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We respect deadlines and deliver projects on schedule, every time.',
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Round-the-clock support to ensure your business runs smoothly.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Build solutions that grow with your business needs and demands.',
    },
    {
      icon: CheckCircle,
      title: 'Quality Assured',
      description: 'Rigorous testing and quality assurance for flawless performance.',
    },
  ];

  return (
    <section id="features" ref={ref} className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-blue-300 mb-4 block">Why Choose Us</span>
          <h2 className="text-white mb-6">
            What Makes Us Different
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            We combine expertise, innovation, and dedication to deliver exceptional 
            results for every project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-blue-500/30 w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                >
                  <feature.icon className="text-white" size={32} />
                </motion.div>
                <h3 className="text-white mb-4">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 text-center"
        >
          <h3 className="text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Let's discuss how we can help you achieve your digital goals with our 
            comprehensive IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full hover:bg-blue-50 transition-colors duration-300"
            >
              Start Your Project
            </a>
            <a
              href="#services"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
