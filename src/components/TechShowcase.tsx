import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Brain, MessageSquare, Sparkles, Workflow, Cpu, Zap, Database, Network } from 'lucide-react';

export function TechShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    {
      icon: Brain,
      title: 'AI Agents',
      description: 'Autonomous intelligent systems that can reason, plan, and execute complex tasks independently.',
      capabilities: [
        'Multi-agent collaboration',
        'Context-aware decision making',
        'Self-learning capabilities',
        'Tool integration & API calls',
      ],
      color: 'from-purple-600 to-pink-600',
      stats: { value: '99.9%', label: 'Accuracy' },
    },
    {
      icon: Sparkles,
      title: 'Generative AI',
      description: 'Advanced models for creating original content, code, images, and solutions at scale.',
      capabilities: [
        'Text & code generation',
        'Image & video synthesis',
        'Custom fine-tuning',
        'Multi-modal outputs',
      ],
      color: 'from-blue-600 to-cyan-600',
      stats: { value: '10x', label: 'Faster Production' },
    },
    {
      icon: MessageSquare,
      title: 'Intelligent Chatbots',
      description: 'Conversational AI with deep understanding, context retention, and human-like interactions.',
      capabilities: [
        'Natural language processing',
        'Sentiment analysis',
        'Multi-language support',
        'CRM integration',
      ],
      color: 'from-green-600 to-emerald-600',
      stats: { value: '24/7', label: 'Availability' },
    },
    {
      icon: Workflow,
      title: 'Smart Automation',
      description: 'Intelligent process automation that adapts, learns, and optimizes workflows continuously.',
      capabilities: [
        'End-to-end automation',
        'Intelligent routing',
        'Exception handling',
        'Performance analytics',
      ],
      color: 'from-orange-600 to-red-600',
      stats: { value: '80%', label: 'Cost Reduction' },
    },
  ];

  const techStack = [
    { name: 'GPT-4 & Claude', icon: Cpu },
    { name: 'LangChain', icon: Network },
    { name: 'TensorFlow', icon: Brain },
    { name: 'PyTorch', icon: Database },
    { name: 'OpenAI API', icon: Zap },
    { name: 'Vector DBs', icon: Database },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      {/* Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-blue-400 rounded-full"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 mb-4 block">Cutting-Edge Technology</span>
          <h2 className="text-white mb-6">
            Powered by Advanced AI & Automation
          </h2>
          <p className="text-blue-100 max-w-3xl mx-auto text-lg">
            We leverage the latest breakthroughs in artificial intelligence, machine learning, 
            and automation to deliver solutions that give you a competitive edge.
          </p>
        </motion.div>

        {/* Technology Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-500">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tech.color} flex items-center justify-center`}>
                    <tech.icon className="text-white" size={32} />
                  </div>
                  <div className="text-right">
                    <div className="text-white text-2xl">{tech.stats.value}</div>
                    <div className="text-blue-300 text-sm">{tech.stats.label}</div>
                  </div>
                </div>
                <h3 className="text-white mb-3">{tech.title}</h3>
                <p className="text-blue-100 mb-6">{tech.description}</p>
                <div className="space-y-2">
                  {tech.capabilities.map((capability, idx) => (
                    <motion.div
                      key={capability}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.15 + idx * 0.1, duration: 0.4 }}
                      className="flex items-center text-blue-200 text-sm"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${tech.color} mr-3`}></div>
                      {capability}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3 className="text-white text-center mb-10">Our AI Technology Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 text-center group"
              >
                <tech.icon className="text-blue-400 mx-auto mb-3 group-hover:text-blue-300 transition-colors" size={32} />
                <div className="text-white text-sm">{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
            <h3 className="text-white mb-4">
              Ready to Harness AI for Your Business?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              Let's discuss how our AI and automation solutions can transform 
              your operations and accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-full hover:bg-blue-50 transition-colors duration-300 inline-flex items-center justify-center"
              >
                Schedule a Consultation
              </a>
              <a
                href="#services"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300 inline-flex items-center justify-center"
              >
                Explore AI Services
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
