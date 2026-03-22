import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function ServicesPageHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0a0420] via-[#1a0b3f] to-white overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 80}%`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Purple Glow */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.6) 0%, transparent 70%)',
            filter: 'blur(80px)',
            left: '20%',
            top: '20%',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 mb-6 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 px-6 py-3 rounded-full"
          >
            <Sparkles className="text-yellow-400" size={24} />
            <span className="text-purple-200 text-sm uppercase tracking-wider">
              Our Services
            </span>
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
            <span className="text-white">Complete IT & Growth</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              Solutions for Your Business
            </span>
          </h1>
          
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            We build, run, and scale your business with complete IT solutions and advanced AI systems.
          </p>
        </motion.div>
      </div>

      {/* Bottom Wave Transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-24"
        >
          <path
            d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
