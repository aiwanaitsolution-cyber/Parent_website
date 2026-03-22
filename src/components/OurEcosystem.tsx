import { motion } from 'motion/react';
import { Building2, GraduationCap, Briefcase, Plane, Laptop, ArrowRight } from 'lucide-react';

export function OurEcosystem() {
  const ecosystem = {
    parent: {
      name: 'Aiwana Solution',
      tagline: 'Driving AI-powered innovation across industries',
      icon: Building2,
    },
    children: [
      {
        name: 'Aiwana Edusphere',
        label: 'LMS Platform',
        description: 'Smart learning management system for students, institutions, and organizations.',
        icon: GraduationCap,
        gradient: 'from-blue-500 to-cyan-500',
      },
      {
        name: 'Business Management Suite',
        label: 'HGRMS | CRM | ERP',
        description: 'Complete business automation tools for HR, customer management, and enterprise operations.',
        icon: Briefcase,
        gradient: 'from-purple-500 to-pink-500',
      },
      {
        name: 'AI Trip Planner',
        label: 'Travel Solution',
        description: 'Intelligent trip planning with automated itineraries, bookings, and recommendations.',
        icon: Plane,
        gradient: 'from-green-500 to-emerald-500',
      },
      {
        name: 'Aiwana IT Solutions',
        label: 'IT Services for Non-Tech Businesses',
        description: 'End-to-end IT services including website development, maintenance, and digital growth.',
        icon: Laptop,
        gradient: 'from-orange-500 to-red-500',
      },
    ],
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-gray-900 mb-4 text-2xl sm:text-3xl md:text-4xl">Our Ecosystem</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
            A unified AI-powered ecosystem delivering education, business solutions, travel planning, and IT services.
          </p>
        </motion.div>

        {/* Parent Company Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-6 sm:p-8 rounded-3xl shadow-2xl text-white">
            <div className="absolute top-0 left-0 right-0 h-full bg-white/10 backdrop-blur-sm rounded-3xl" />
            <div className="relative z-10">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center mb-4">
                  <ecosystem.parent.icon size={40} />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl mb-2">{ecosystem.parent.name}</h3>
                <p className="text-sm sm:text-base text-blue-100 italic mb-4">(Parent Company)</p>
                <p className="text-sm sm:text-base max-w-md">{ecosystem.parent.tagline}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Connecting Lines Visualization */}
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-0.5 h-12 bg-gradient-to-b from-blue-600 to-purple-600"
            style={{ originY: 0 }}
          />
        </div>

        {/* Child Companies Grid */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {ecosystem.children.map((child, index) => (
            <motion.div
              key={child.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${child.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${child.gradient} rounded-xl items-center justify-center mb-4 shadow-lg`}>
                  <child.icon className="text-white" size={28} />
                </div>

                {/* Content */}
                <div className="mb-2">
                  <span className={`inline-block text-xs px-3 py-1 rounded-full bg-gradient-to-r ${child.gradient} text-white mb-3`}>
                    {child.label}
                  </span>
                </div>
                <h4 className="text-gray-900 mb-2 text-lg sm:text-xl">{child.name}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{child.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 sm:p-8 rounded-2xl text-center shadow-xl"
        >
          <p className="text-base sm:text-lg md:text-xl mb-6">
            From startups to enterprises, Aiwana delivers complete digital transformation under one ecosystem.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-full hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2 text-sm sm:text-base"
          >
            Explore Our Services
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
