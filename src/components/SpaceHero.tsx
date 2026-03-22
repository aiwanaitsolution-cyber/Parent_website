import aiwanaBot from '@/image/aiwana-bot.png';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export function SpaceHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0420] via-[#1a0b3f] to-[#2d1560]">
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
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

      {/* Purple Nebula Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, transparent 70%)',
            filter: 'blur(80px)',
            left: '10%',
            top: '20%',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)',
            filter: 'blur(80px)',
            right: '10%',
            top: '40%',
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Parallax Mouse Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          x: mousePosition.x * 0.01,
          y: mousePosition.y * 0.01,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      >
        {/* Glowing Rings */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full border border-purple-500/20"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 40, repeat: Infinity, ease: 'linear' },
            scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
          }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full border border-blue-500/20"
          animate={{
            rotate: -360,
            scale: [1, 1.15, 1],
          }}
          transition={{
            rotate: { duration: 35, repeat: Infinity, ease: 'linear' },
            scale: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 mb-6 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 px-4 py-2 rounded-full"
            >
              <Sparkles className="text-yellow-400" size={20} />
              <span className="text-purple-200 text-sm sm:text-base">
                AI-Powered Business Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-tight"
            >
              <span className="text-white">Your Complete</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                External IT Team
              </span>
              <br />
              <span className="text-white">for Business Growth</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg sm:text-xl text-blue-200 mb-6 max-w-2xl"
            >
              From website development to marketing to automation — we build, manage, and scale your entire digital business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/20 px-6 py-4 rounded-2xl mb-8 inline-block"
            >
              <p className="text-xl sm:text-2xl text-white">
                You focus on your business. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                  We handle everything else.
                </span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full inline-flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/50">
                Get Started Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="bg-transparent border-2 border-purple-400 text-purple-200 px-8 py-4 rounded-full hover:bg-purple-400/10 transition-all duration-300">
                View Our Services
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="flex flex-wrap gap-6 mt-8 text-sm text-blue-300"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Quick Response</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Expert Team</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - AI Robot Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            {/* Glowing Platform Effect */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%)',
                filter: 'blur(60px)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Main Robot Image */}
            <motion.div
              className="relative z-10"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <img
                src={aiwanaBot}
                alt="AI Robot Assistant"
                className="w-full h-auto max-w-md mx-auto drop-shadow-2xl"
                style={{ objectFit: 'contain' }}
              />
            </motion.div>

            {/* Floating Tech Icons */}
            {[
              { delay: 0, x: -80, y: -50 },
              { delay: 0.5, x: 80, y: -30 },
              { delay: 1, x: -60, y: 50 },
              { delay: 1.5, x: 100, y: 80 },
            ].map((pos, i) => (
              <motion.div
                key={i}
                className="absolute w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl flex items-center justify-center"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{
                  x: pos.x,
                  y: pos.y,
                  opacity: 1,
                }}
                transition={{
                  delay: pos.delay,
                  duration: 1,
                }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <Sparkles className="text-purple-400" size={24} />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-24"
        >
          <motion.path
            d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z"
            fill="rgba(255,255,255,0.05)"
            animate={{
              d: [
                'M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z',
                'M0,0 C300,120 900,80 1200,0 L1200,120 L0,120 Z',
                'M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z',
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </svg>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
