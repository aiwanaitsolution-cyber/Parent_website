import { motion } from 'motion/react';
import { Building2, Code, GraduationCap, Database, Plane, Bot, ChevronDown } from 'lucide-react';

export function EcosystemTree() {
  const branches = [
    {
      icon: Code,
      title: 'IT & Business Growth Services',
      subtitle: 'CORE',
      tagline: 'Your external IT team',
      color: 'blue',
      features: [
        'Website Development',
        'App Development',
        'Full IT Handling',
        'Marketing & Ads',
        'Business Automation',
      ],
    },
    {
      icon: GraduationCap,
      title: 'Aiwana Edusphere',
      subtitle: 'LMS',
      tagline: 'SaaS + Custom LMS platform',
      color: 'purple',
      features: [
        'Courses',
        'Live classes',
        'AI Tutor',
        'Student dashboard',
      ],
    },
    {
      icon: Database,
      title: 'Business Management Suite',
      subtitle: 'SaaS + Custom Software',
      tagline: 'Available as SaaS or fully customized software',
      color: 'green',
      subSections: [
        {
          name: 'HRM',
          desc: 'Manage your people efficiently',
          items: ['Employee management', 'Attendance & payroll', 'Performance tracking', 'Recruitment & onboarding'],
        },
        {
          name: 'CRM',
          desc: 'Convert leads into customers',
          items: ['Lead tracking', 'Sales pipeline', 'WhatsApp integration', 'Follow-up automation'],
        },
        {
          name: 'ERP',
          desc: 'Run your entire business',
          items: ['Inventory', 'Accounting', 'Orders', 'GST compliance'],
        },
      ],
    },
    {
      icon: Plane,
      title: 'AI Trip Planner',
      subtitle: 'AI Travel Assistant',
      tagline: 'AI-based travel assistant',
      color: 'orange',
      features: [
        'Smart itinerary',
        'Budget planning',
        'Booking suggestions',
      ],
    },
    {
      icon: Bot,
      title: 'AI Agent Systems',
      subtitle: 'Future + Premium',
      tagline: 'Next-gen intelligent automation',
      color: 'violet',
      features: [
        'AI Voice Agent',
        'AI Sales Agent',
        'AI WhatsApp Agent',
        'AI Super Agent',
      ],
    },
  ];

  const colorMap: { [key: string]: { gradient: string; light: string; text: string; border: string } } = {
    blue: {
      gradient: 'from-blue-500 to-cyan-500',
      light: 'from-blue-500/10 to-cyan-500/10',
      text: 'text-blue-600',
      border: 'border-blue-500/30',
    },
    purple: {
      gradient: 'from-purple-500 to-pink-500',
      light: 'from-purple-500/10 to-pink-500/10',
      text: 'text-purple-600',
      border: 'border-purple-500/30',
    },
    green: {
      gradient: 'from-green-500 to-emerald-500',
      light: 'from-green-500/10 to-emerald-500/10',
      text: 'text-green-600',
      border: 'border-green-500/30',
    },
    orange: {
      gradient: 'from-orange-500 to-red-500',
      light: 'from-orange-500/10 to-red-500/10',
      text: 'text-orange-600',
      border: 'border-orange-500/30',
    },
    violet: {
      gradient: 'from-violet-500 to-purple-500',
      light: 'from-violet-500/10 to-purple-500/10',
      text: 'text-violet-600',
      border: 'border-violet-500/30',
    },
  };

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
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
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text text-sm uppercase tracking-wider px-4 py-2 border-2 border-blue-200 rounded-full inline-block mb-4"
          >
            Our Ecosystem
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-6xl mb-6">
            <span className="text-gray-900">One Company.</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Multiple Powerful Solutions.
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aiwana Solution is the parent company powering multiple advanced IT and SaaS solutions designed to help businesses grow.
          </p>
        </motion.div>

        {/* Root - Parent Company */}
        <div className="flex flex-col items-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
              <Building2 className="text-white mx-auto mb-4" size={48} />
              <h3 className="text-3xl sm:text-4xl text-white mb-2">Aiwana Solution</h3>
              <p className="text-xl text-blue-100">Complete IT & Growth Ecosystem</p>
            </div>
          </motion.div>

          {/* Connecting Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="w-1 bg-gradient-to-b from-purple-600 to-purple-300"
          />

          {/* Branches Connector */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="w-full max-w-5xl h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent relative"
          >
            {branches.map((_, index) => (
              <div
                key={index}
                className="absolute top-0 w-1 h-12 bg-purple-400"
                style={{
                  left: `${(100 / (branches.length + 1)) * (index + 1)}%`,
                  transform: 'translateX(-50%)',
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Branches */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {branches.map((branch, index) => {
            const colors = colorMap[branch.color];
            return (
              <motion.div
                key={branch.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + index * 0.15, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                {/* Connecting Line from Top */}
                <div className="absolute -top-12 left-1/2 w-1 h-12 bg-purple-400 -translate-x-1/2" />

                <div className={`bg-gradient-to-br ${colors.light} backdrop-blur-sm border-2 ${colors.border} rounded-2xl p-6 h-full group hover:shadow-2xl transition-all duration-300`}>
                  {/* Icon */}
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-4 shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <branch.icon className="text-white" size={28} />
                  </motion.div>

                  {/* Title */}
                  <h4 className={`text-xl mb-1 ${colors.text}`}>
                    {branch.title}
                  </h4>
                  <div className={`text-sm ${colors.text} opacity-70 mb-3`}>
                    {branch.subtitle}
                  </div>

                  {/* Tagline */}
                  <p className="text-gray-600 text-sm mb-4 italic">
                    👉 {branch.tagline}
                  </p>

                  {/* Features or Subsections */}
                  {branch.features && (
                    <ul className="space-y-2">
                      {branch.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 1.2 + index * 0.15 + idx * 0.05 }}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <ChevronDown className={`${colors.text} flex-shrink-0`} size={16} />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  )}

                  {branch.subSections && (
                    <div className="space-y-4">
                      {branch.subSections.map((sub, idx) => (
                        <div key={idx} className="border-l-2 border-gray-300 pl-4">
                          <div className="font-semibold text-gray-900 mb-1">
                            🔹 {sub.name}
                          </div>
                          <div className="text-xs text-gray-600 mb-2 italic">
                            {sub.desc}
                          </div>
                          <ul className="space-y-1">
                            {sub.items.map((item, i) => (
                              <li key={i} className="text-xs text-gray-700 flex items-start gap-1">
                                <span className={`${colors.text} mt-0.5`}>•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12">
            <p className="text-2xl sm:text-3xl text-white">
              From services to SaaS to AI —<br />
              <span className="text-yellow-300">everything is connected under one ecosystem.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
