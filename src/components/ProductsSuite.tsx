import { motion } from 'motion/react';
import { GraduationCap, Users, TrendingUp, Package, Plane, Bot, CheckCircle, ArrowRight } from 'lucide-react';

export function ProductsSuite() {
  const products = [
    {
      icon: GraduationCap,
      title: 'Aiwana Edusphere',
      subtitle: 'LMS Platform',
      description: 'Complete Learning Management System with courses, live classes, AI tutor, and student dashboards',
      gradient: 'from-purple-500 to-pink-500',
      features: [
        'Course Management',
        'Live Classes',
        'AI Tutor Assistant',
        'Student Dashboard',
        'Progress Tracking',
        'Assessments & Quizzes',
      ],
      availability: 'SaaS + Custom',
    },
    {
      icon: Users,
      title: 'HRM System',
      subtitle: 'Manage your people efficiently',
      description: 'Human Resource Management solution for complete employee lifecycle management',
      gradient: 'from-blue-500 to-cyan-500',
      features: [
        'Employee Management',
        'Attendance & Payroll',
        'Performance Tracking',
        'Recruitment & Onboarding',
        'Leave Management',
        'Document Management',
      ],
      availability: 'SaaS or Custom-Built',
      highlight: true,
    },
    {
      icon: TrendingUp,
      title: 'CRM System',
      subtitle: 'Convert leads into customers',
      description: 'Customer Relationship Management for sales pipeline and customer engagement',
      gradient: 'from-green-500 to-emerald-500',
      features: [
        'Lead Tracking',
        'Sales Pipeline',
        'WhatsApp Integration',
        'Follow-up Automation',
        'Analytics Dashboard',
        'Email Campaigns',
      ],
      availability: 'SaaS or Custom-Built',
      highlight: true,
    },
    {
      icon: Package,
      title: 'ERP System',
      subtitle: 'Run your entire business',
      description: 'Enterprise Resource Planning for complete business operations management',
      gradient: 'from-orange-500 to-red-500',
      features: [
        'Inventory Management',
        'Accounting & Finance',
        'Order Management',
        'GST Compliance',
        'Vendor Management',
        'Reporting & Analytics',
      ],
      availability: 'SaaS or Custom-Built',
      highlight: true,
    },
    {
      icon: Plane,
      title: 'AI Trip Planner',
      subtitle: 'AI-based travel assistant',
      description: 'Intelligent travel planning with AI-powered recommendations and booking',
      gradient: 'from-cyan-500 to-blue-500',
      features: [
        'Smart Itinerary Generation',
        'Budget Planning',
        'Booking Suggestions',
        'Real-time Updates',
        'Travel Recommendations',
        'Multi-destination Support',
      ],
      availability: 'SaaS',
    },
    {
      icon: Bot,
      title: 'AI Agent Suite',
      subtitle: 'Coming Soon / Premium',
      description: 'Next-generation AI agents for complete business automation',
      gradient: 'from-violet-500 to-purple-500',
      features: [
        'AI Voice Agent',
        'AI Sales Agent',
        'AI WhatsApp Agent',
        'AI Super Agent',
        'Custom AI Solutions',
        '24/7 Automation',
      ],
      availability: 'Premium',
      comingSoon: true,
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl" />
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-gray-900">
            Our Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Ecosystem</span>
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive business solutions tailored to your needs
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Coming Soon Badge */}
              {product.comingSoon && (
                <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs z-10">
                  Coming Soon
                </div>
              )}

              {/* Highlight Badge */}
              {product.highlight && (
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs z-10">
                  Business Suite
                </div>
              )}

              {/* Gradient Header */}
              <div className={`bg-gradient-to-br ${product.gradient} p-8 relative overflow-hidden`}>
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-20">
                  {[...Array(10)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-16 h-16 border border-white rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.2, 0.5, 0.2],
                      }}
                      transition={{
                        duration: Math.random() * 5 + 3,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>

                {/* Icon */}
                <motion.div
                  className="relative z-10"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <product.icon className="text-white mx-auto mb-4" size={56} />
                </motion.div>

                <h3 className="text-2xl text-white text-center relative z-10">
                  {product.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-3 italic">
                  {product.subtitle}
                </p>
                <p className="text-gray-700 mb-4">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Availability */}
                <div className="bg-gray-50 rounded-xl p-4 mb-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Availability:</span> {product.availability}
                  </p>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full bg-gradient-to-r ${product.gradient} text-white px-6 py-3 rounded-full inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all ${
                    product.comingSoon ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={product.comingSoon}
                >
                  {product.comingSoon ? 'Coming Soon' : 'Learn More'}
                  {!product.comingSoon && <ArrowRight size={20} />}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl text-white mb-4">
            👉 Available as SaaS or Fully Customized Software
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Choose the deployment model that works best for your business
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-10 py-4 rounded-full text-lg shadow-lg inline-flex items-center gap-2"
          >
            Get Custom Quote
            <ArrowRight size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
