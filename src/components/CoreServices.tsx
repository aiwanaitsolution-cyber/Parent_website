import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code, Bot, Cloud, Smartphone } from 'lucide-react';

export function CoreServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Build powerful, scalable applications tailored to your exact business needs',
      gradient: 'from-blue-500 to-cyan-500',
      features: ['Web Applications', 'API Development', 'Database Design', 'Scalable Architecture'],
    },
    {
      icon: Bot,
      title: 'AI Automation',
      description: 'Automate your business with intelligent AI-powered solutions',
      gradient: 'from-purple-500 to-pink-500',
      features: ['Process Automation', 'AI Chatbots', 'Smart Workflows', 'Predictive Analytics'],
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scale effortlessly with enterprise-grade cloud infrastructure',
      gradient: 'from-cyan-500 to-blue-500',
      features: ['Cloud Migration', 'AWS/Azure Setup', 'Auto Scaling', '99.9% Uptime'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Create stunning mobile experiences for iOS and Android',
      gradient: 'from-green-500 to-emerald-500',
      features: ['Native Apps', 'Cross-Platform', 'Push Notifications', 'Offline Support'],
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
          <h2 className="text-gray-900 mb-4 text-2xl sm:text-3xl md:text-4xl">Our Core Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Comprehensive solutions powered by cutting-edge technology
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="text-white" size={28} />
              </div>
              <h3 className="text-gray-900 mb-3 text-lg sm:text-xl">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 text-xs sm:text-sm">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-2 flex-shrink-0`}></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
