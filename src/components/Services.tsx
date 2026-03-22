import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code, Smartphone, Megaphone, Palette, Cloud, ShoppingCart, Bot, Workflow, Sparkles, MessageSquare, Brain, Cpu } from 'lucide-react';

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Brain,
      title: 'AI Agent Development',
      description: 'Intelligent AI agents that automate complex tasks, make decisions, and learn from interactions to improve business processes.',
      color: 'from-violet-500 to-purple-600',
      features: ['Autonomous Systems', 'Decision Making', 'Task Automation', 'Continuous Learning'],
    },
    {
      icon: Sparkles,
      title: 'Generative AI Solutions',
      description: 'Advanced Gen AI systems for content creation, code generation, image synthesis, and creative automation.',
      color: 'from-fuchsia-500 to-pink-600',
      features: ['Content Generation', 'Code Assistance', 'Image Creation', 'Custom Models'],
    },
    {
      icon: MessageSquare,
      title: 'AI Chatbot Development',
      description: 'Intelligent conversational AI chatbots powered by NLP and machine learning for 24/7 customer support.',
      color: 'from-blue-500 to-cyan-500',
      features: ['Natural Language', 'Multi-Channel', 'Smart Responses', 'Integration Ready'],
    },
    {
      icon: Workflow,
      title: 'Business Automation',
      description: 'End-to-end workflow automation using RPA, AI, and smart integrations to streamline operations.',
      color: 'from-emerald-500 to-teal-600',
      features: ['Process Automation', 'RPA Solutions', 'Workflow Design', 'API Integration'],
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
      color: 'from-blue-500 to-blue-600',
      features: ['Responsive Design', 'Fast Performance', 'SEO Optimized', 'Secure & Scalable'],
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with seamless functionality.',
      color: 'from-purple-500 to-purple-600',
      features: ['iOS & Android', 'Cross-Platform', 'User-Friendly UI', 'Cloud Integration'],
    },
    {
      icon: Cpu,
      title: 'Machine Learning',
      description: 'Custom ML models and predictive analytics solutions to extract insights from your data.',
      color: 'from-indigo-500 to-blue-600',
      features: ['Predictive Analytics', 'Data Mining', 'Model Training', 'AI Integration'],
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Strategic digital marketing campaigns to boost your online presence and drive conversions.',
      color: 'from-pink-500 to-pink-600',
      features: ['SEO/SEM', 'Social Media', 'Content Marketing', 'Analytics'],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive designs that provide exceptional user experiences and drive engagement.',
      color: 'from-orange-500 to-orange-600',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for improved performance and reliability.',
      color: 'from-cyan-500 to-cyan-600',
      features: ['Cloud Migration', 'Infrastructure', 'DevOps', 'Monitoring'],
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration, inventory management, and more.',
      color: 'from-green-500 to-green-600',
      features: ['Online Stores', 'Payment Gateway', 'Inventory', 'Analytics'],
    },
    {
      icon: Bot,
      title: 'AI Integration Services',
      description: 'Seamlessly integrate AI capabilities into your existing systems and workflows.',
      color: 'from-rose-500 to-red-600',
      features: ['API Integration', 'Custom Solutions', 'Legacy Systems', 'Training & Support'],
    },
  ];

  return (
    <section id="services" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 mb-4 block">Our Services</span>
          <h2 className="text-gray-900 mb-6">
            Comprehensive IT Solutions
            <br />
            for Your Business
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We offer a full spectrum of IT services designed to help your business 
            succeed in the digital world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-8">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-2`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Get a Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
