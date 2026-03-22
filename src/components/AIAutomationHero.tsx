import { motion } from 'motion/react';
import { Bot, Sparkles } from 'lucide-react';

export function AIAutomationHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0a0420] via-[#1a0b3f] to-white overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
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

      {/* Violet-Purple Glow */}
      <div className="absolute inset-0 overflow-hidden opacity-50">
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, transparent 70%)',
            filter: 'blur(100px)',
            left: '30%',
            top: '20%',
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
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
            className="inline-flex items-center gap-2 mb-6 bg-violet-500/20 backdrop-blur-sm border border-violet-500/30 px-6 py-3 rounded-full"
          >
            <Bot className="text-violet-400" size={24} />
            <span className="text-violet-200 text-sm uppercase tracking-wider">
              AI Automation
            </span>
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-6">
            <span className="text-white">Supercharge Your Business</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400">
              with AI Automation
            </span>
          </h1>
          
          <p className="text-xl text-purple-200 max-w-3xl mx-auto mb-8">
            Intelligent AI agents that work 24/7 to grow your business and delight your customers
          </p>

          {/* Floating Features */}
          <div className="flex justify-center items-center gap-4 flex-wrap">
            {['Voice Bot', 'Chat Bot', 'WhatsApp Bot', 'AI Agents'].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-white text-sm flex items-center gap-2"
              >
                <Sparkles size={16} />
                {feature}
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
