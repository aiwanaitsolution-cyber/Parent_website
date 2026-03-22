import { motion } from 'motion/react';
import { Code, Wrench, TrendingUp, Layers, Sparkles } from 'lucide-react';

export function ServicesSnapshot() {
  const services = [
    {
      icon: Code,
      title: 'Website & App Development',
      description: 'Custom solutions built for your success',
      color: 'blue',
    },
    {
      icon: Wrench,
      title: 'Maintenance & Tech Support',
      description: 'Keep your systems running smoothly',
      color: 'purple',
    },
    {
      icon: TrendingUp,
      title: 'Social Media & Ads',
      description: 'Via Google Ads & Meta platforms',
      color: 'pink',
    },
    {
      icon: Layers,
      title: 'Business Systems Setup',
      description: 'CRM, ERP, HRMS implementation',
      color: 'indigo',
    },
    {
      icon: Sparkles,
      title: 'AI Automation',
      description: 'Intelligent systems for growth',
      color: 'violet',
    },
  ];

  const colorMap: { [key: string]: { bg: string; border: string; icon: string; text: string } } = {
    blue: {
      bg: 'from-blue-500/10 to-cyan-500/10',
      border: 'border-blue-500/30',
      icon: 'from-blue-500 to-cyan-500',
      text: 'text-blue-600',
    },
    purple: {
      bg: 'from-purple-500/10 to-pink-500/10',
      border: 'border-purple-500/30',
      icon: 'from-purple-500 to-pink-500',
      text: 'text-purple-600',
    },
    pink: {
      bg: 'from-pink-500/10 to-rose-500/10',
      border: 'border-pink-500/30',
      icon: 'from-pink-500 to-rose-500',
      text: 'text-pink-600',
    },
    indigo: {
      bg: 'from-indigo-500/10 to-blue-500/10',
      border: 'border-indigo-500/30',
      icon: 'from-indigo-500 to-blue-500',
      text: 'text-indigo-600',
    },
    violet: {
      bg: 'from-violet-500/10 to-purple-500/10',
      border: 'border-violet-500/30',
      icon: 'from-violet-500 to-purple-500',
      text: 'text-violet-600',
    },
  };

  return (
    <section className="py-20 sm:py-32 bg-white relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

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
            Services Snapshot
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
              Everything You Need to Succeed
            </span>
          </h2>
        </motion.div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const colors = colorMap[service.color];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`relative bg-gradient-to-br ${colors.bg} backdrop-blur-sm border-2 ${colors.border} rounded-2xl p-8 group cursor-pointer overflow-hidden`}
              >
                {/* Animated Background Glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${colors.icon} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Icon */}
                <motion.div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors.icon} flex items-center justify-center mb-6 shadow-lg relative z-10`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="text-white" size={28} />
                </motion.div>

                {/* Content */}
                <h3 className={`text-xl mb-3 ${colors.text} relative z-10`}>
                  {service.title}
                </h3>
                <p className="text-gray-600 relative z-10">
                  {service.description}
                </p>

                {/* Floating Dots */}
                <div className="absolute top-4 right-4 flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${colors.icon}`}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
}
