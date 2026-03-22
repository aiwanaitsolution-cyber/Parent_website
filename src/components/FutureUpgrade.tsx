import { motion } from 'motion/react';
import { ArrowRight, Bot, MessageSquare, Zap, Sparkles } from 'lucide-react';

export function FutureUpgrade() {
  const aiFeatures = [
    {
      icon: MessageSquare,
      title: 'AI Lead Handling',
      description: 'Intelligent lead capture and qualification',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Zap,
      title: 'AI Sales Automation',
      description: 'Automated sales processes and follow-ups',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Bot,
      title: 'AI Customer Support',
      description: '24/7 intelligent customer assistance',
      gradient: 'from-violet-500 to-purple-500',
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Animated Background Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Purple Glow Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.6) 0%, transparent 70%)',
            filter: 'blur(80px)',
            left: '20%',
            top: '30%',
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%)',
            filter: 'blur(80px)',
            right: '20%',
            bottom: '30%',
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
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
            className="inline-flex items-center gap-2 mb-6 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 px-6 py-3 rounded-full"
          >
            <Sparkles className="text-yellow-400" size={24} />
            <span className="text-purple-200 text-sm uppercase tracking-wider">
              Future Upgrade
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-6xl mb-6">
            <span className="text-white">Ready to Scale?</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              Upgrade to AI
            </span>
          </h2>
          
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Once your system is ready, we integrate intelligent AI solutions to supercharge your business
          </p>
        </motion.div>

        {/* AI Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              {/* Glowing Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20 rounded-2xl blur-xl group-hover:opacity-40 transition-opacity duration-300`} />
              
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-300">
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="text-white" size={32} />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-purple-200">
                  {feature.description}
                </p>

                {/* Animated Dots */}
                <div className="absolute top-6 right-6 flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient}`}
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-10 py-5 rounded-full text-lg shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300"
          >
            <Sparkles size={24} />
            Explore AI Solutions
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
          </motion.button>
        </motion.div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/20 px-8 py-4 rounded-2xl">
            <p className="text-purple-200 text-lg">
              💡 <span className="text-white">Seamless integration</span> with your existing systems
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
