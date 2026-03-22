import { motion } from 'motion/react';
import { Code, Wrench, TrendingUp, Database, Bot, ArrowRight, CheckCircle, Zap } from 'lucide-react';

export function DetailedServicesContent() {
  const services = [
    {
      icon: Code,
      title: 'Website & App Development',
      subtitle: 'You share your vision — we build it.',
      gradient: 'from-blue-500 to-cyan-500',
      features: [
        'Business websites',
        'E-commerce platforms',
        'Custom apps',
        'Progressive Web Apps (PWA)',
      ],
    },
    {
      icon: Wrench,
      title: 'Full IT Handling',
      subtitle: 'We become your IT team.',
      gradient: 'from-purple-500 to-pink-500',
      highlight: 'YOUR BIGGEST USP',
      features: [
        'Website management',
        'Regular updates',
        'Technical support',
        'Performance optimization',
        'Security monitoring',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Marketing & Brand Growth',
      subtitle: 'Grow your brand with data-driven strategies',
      gradient: 'from-pink-500 to-red-500',
      features: [
        'Social media management',
        'Ad campaigns via Google Ads & Meta',
        'Content strategy',
        'SEO optimization',
      ],
    },
    {
      icon: Database,
      title: 'Business Systems Setup',
      subtitle: 'Streamline operations with powerful tools',
      gradient: 'from-green-500 to-emerald-500',
      features: [
        'CRM - Customer Relationship Management',
        'ERP - Enterprise Resource Planning',
        'HRMS - Human Resource Management',
        'Custom workflow automation',
      ],
    },
    {
      icon: Bot,
      title: 'AI & Automation (Upgrade)',
      subtitle: 'Automate your business with intelligent systems',
      gradient: 'from-violet-500 to-purple-500',
      features: [
        'AI Chatbots & Voice Bots',
        'AI Lead Handling',
        'AI Sales Automation',
        'AI Customer Support',
        'WhatsApp Automation',
      ],
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text text-sm uppercase tracking-wider px-4 py-2 border-2 border-blue-200 rounded-full inline-block mb-4"
          >
            Our Services
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-gray-900">
            Complete IT & Growth Solutions
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              for Your Business
            </span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative ${index % 2 === 0 ? '' : ''}`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Content Side */}
                <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <motion.div
                    className={`inline-flex items-center gap-2 mb-4 bg-gradient-to-r ${service.gradient} text-white px-6 py-3 rounded-full shadow-lg`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <service.icon size={24} />
                    {service.highlight && (
                      <span className="text-xs bg-yellow-400 text-gray-900 px-2 py-1 rounded-full ml-2">
                        {service.highlight}
                      </span>
                    )}
                  </motion.div>

                  <h3 className="text-2xl sm:text-3xl text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-6 italic">
                    {service.subtitle}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * idx }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className={`flex-shrink-0 text-green-500 mt-0.5`} size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group inline-flex items-center gap-2 bg-gradient-to-r ${service.gradient} text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all`}
                  >
                    Learn More
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </motion.button>
                </div>

                {/* Visual Side */}
                <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Card with Icon */}
                    <div className={`bg-gradient-to-br ${service.gradient} rounded-3xl p-12 shadow-2xl relative overflow-hidden`}>
                      {/* Animated Background Pattern */}
                      <div className="absolute inset-0 opacity-20">
                        {[...Array(15)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-20 h-20 border-2 border-white rounded-full"
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.2, 0.5, 0.2],
                            }}
                            transition={{
                              duration: Math.random() * 5 + 3,
                              repeat: Infinity,
                              delay: Math.random() * 2,
                            }}
                          />
                        ))}
                      </div>

                      {/* Large Icon */}
                      <motion.div
                        className="relative z-10"
                        animate={{
                          y: [0, -20, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <service.icon className="text-white mx-auto" size={120} />
                      </motion.div>

                      {/* Floating Elements */}
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-4 h-4 bg-white rounded-full"
                          style={{
                            left: `${20 + i * 20}%`,
                            top: `${10 + i * 20}%`,
                          }}
                          animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 1, 0.3],
                          }}
                          transition={{
                            duration: 2 + i,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Separator */}
              {index < services.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  className={`h-1 bg-gradient-to-r ${service.gradient} opacity-20 mt-12 rounded-full`}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12">
            <Zap className="text-yellow-400 mx-auto mb-4" size={48} />
            <h3 className="text-3xl text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can help you achieve your goals
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-10 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              Get Started Today
              <ArrowRight size={24} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
