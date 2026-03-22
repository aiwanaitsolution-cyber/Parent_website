
import { motion } from 'motion/react';
import { Sparkles, Package } from 'lucide-react';
import aiwanaBot from '@/image/aiwana-bot.png';

export function ProductsHero() {
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

      {/* Blue-Purple Glow */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%)',
            filter: 'blur(80px)',
            left: '10%',
            top: '20%',
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.6) 0%, transparent 70%)',
            filter: 'blur(80px)',
            right: '10%',
            top: '10%',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Animated Aiwana Bot Image */}
      <motion.div
        className="absolute left-1/2 top-10 z-20"
        style={{ x: '-50%' }}
        animate={{
          y: [0, -30, 0, 30, 0],
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <img
          src={aiwanaBot}
          alt="Aiwana Bot"
          className="w-24 h-24 sm:w-32 sm:h-32 object-contain drop-shadow-lg"
          style={{ filter: 'drop-shadow(0 8px 24px rgba(59,130,246,0.3))' }}
        />
      </motion.div>

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
            className="inline-flex items-center gap-2 mb-6 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 px-6 py-3 rounded-full"
          >
            <Package className="text-blue-400" size={24} />
            <span className="text-blue-200 text-sm uppercase tracking-wider">
              Our Products
            </span>
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
            <span className="text-white">Scalable SaaS Platforms</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              & Custom Software
            </span>
          </h1>
          
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
            Powerful business management tools available as SaaS or fully customized to your needs
          </p>

          {/* Floating Icons */}
          <div className="flex justify-center items-center gap-4 flex-wrap">
            {[Sparkles, Package].map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.2 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-white flex items-center gap-2"
              >
                <Icon size={20} />
                <span className="text-sm">{i === 0 ? 'SaaS' : 'Custom Built'}</span>
              </motion.div>
            ))}
          </div>
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
