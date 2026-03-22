import { motion } from 'motion/react';
import { Code, Settings, TrendingUp, Database, Bot } from 'lucide-react';

export function WhatYouDo() {
  const services = [
    {
      icon: Code,
      title: 'Website + App Development',
      description: 'Custom built solutions tailored to your needs',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Settings,
      title: 'Full IT Handling',
      description: 'Complete technical management and support',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: TrendingUp,
      title: 'Marketing & Ads',
      description: 'Google Ads & Meta campaigns that convert',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Database,
      title: 'Business Systems (CRM, ERP, HRMS)',
      description: 'Streamline your operations efficiently',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Bot,
      title: 'AI Automation (Advanced Stage)',
      description: 'Intelligent automation for modern business',
      gradient: 'from-violet-500 to-purple-500',
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl" />
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text text-sm uppercase tracking-wider px-4 py-2 border-2 border-blue-200 rounded-full inline-block">
              What We Do
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
            <span className="text-gray-900">Without hiring an in-house IT team,</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              businesses struggle to grow
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            👉 So we provide:
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              {/* Icon */}
              <motion.div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 relative z-10`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <service.icon className="text-white" size={32} />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl mb-3 text-gray-900 relative z-10">
                {service.title}
              </h3>
              <p className="text-gray-600 relative z-10">
                {service.description}
              </p>

              {/* Animated Border */}
              <motion.div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.gradient}`}
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Core Promise Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center relative overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-20 h-20 border border-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: Math.random() * 5 + 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="relative z-10"
            >
              <h3 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
                We don't just build —
              </h3>
              <p className="text-2xl sm:text-3xl lg:text-4xl text-white">
                we <span className="underline decoration-yellow-400 decoration-4">build, run, manage, and grow</span> your business systems.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
