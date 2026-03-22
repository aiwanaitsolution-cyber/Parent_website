import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle, PhoneCall, Clock, Users, Target, Zap, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

export function StartupHero() {
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [
    {
      title: 'Young Startup, Big Dreams',
      highlight: 'Expert Solutions',
      description: 'A passionate team of specialists delivering cutting-edge AI automation and software development. Fresh thinking, proven expertise.',
      gradient: 'from-blue-900 via-blue-800 to-indigo-900',
      accentColor: 'from-blue-400 to-cyan-300',
    },
    {
      title: 'Innovation-First Approach',
      highlight: 'AI Automation',
      description: 'We leverage the latest AI technologies to transform your business. Agile, innovative, and committed to your success.',
      gradient: 'from-purple-900 via-indigo-900 to-blue-900',
      accentColor: 'from-purple-400 to-pink-400',
    },
    {
      title: 'Built by Experts',
      highlight: 'For Visionaries',
      description: 'Our specialist team brings deep expertise in AI, cloud, and software development. Partner with us for world-class solutions.',
      gradient: 'from-indigo-900 via-purple-900 to-pink-900',
      accentColor: 'from-cyan-400 to-blue-400',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const currentData = banners[currentBanner];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBanner}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={`absolute inset-0 bg-gradient-to-br ${currentData.gradient}`}
        />
      </AnimatePresence>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-10"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Animated Grid Background */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 2px, transparent 2px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 2px, transparent 2px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Sparkles className="text-yellow-400" size={24} />
            <span className="text-yellow-400 text-sm sm:text-base px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              Startup Energy, Expert Execution
            </span>
          </motion.div>

          {/* Main Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentBanner}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-white mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-4">
                {currentData.title}
                <br />
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentData.accentColor}`}>
                  {currentData.highlight}
                </span>
              </h1>

              <p className="text-blue-100 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 px-4">
                {currentData.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4"
          >
            <a
              href="#contact"
              className="group bg-white text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full inline-flex items-center justify-center gap-2 hover:bg-blue-50 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              Get Started Now
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#services"
              className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full inline-flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all duration-300 text-sm sm:text-base"
            >
              Meet Our Team
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-16 px-4 text-sm sm:text-base"
          >
            {[
              { icon: CheckCircle, text: 'Free Consultation' },
              { icon: PhoneCall, text: 'Quick Response' },
              { icon: Clock, text: 'Flexible Hours' },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-blue-100">
                <item.icon size={18} className="text-green-400 flex-shrink-0" />
                <span className="whitespace-nowrap">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Team Highlights - Startup Style */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto px-4"
          >
            {[
              { icon: Users, label: 'Expert Team', subtext: 'Specialized professionals' },
              { icon: Target, label: 'Client-Focused', subtext: 'Your success is ours' },
              { icon: Zap, label: 'Agile & Fast', subtext: 'Quick turnaround' },
              { icon: Award, label: 'Quality First', subtext: 'Excellence in delivery' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <stat.icon className="text-cyan-300 mx-auto mb-3" size={32} />
                <div className="text-sm sm:text-base text-blue-200 mb-1">{stat.label}</div>
                <div className="text-xs sm:text-sm text-blue-300 opacity-80">{stat.subtext}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Banner Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-24 sm:bottom-32 left-1/2 transform -translate-x-1/2 flex gap-2"
        >
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                index === currentBanner ? 'w-8 sm:w-12 bg-white' : 'w-1.5 sm:w-2 bg-white/50'
              }`}
            />
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
