import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Bot, Phone, MessageCircle, Calendar, CheckCircle, TrendingUp, DollarSign, Clock, Users, Zap } from 'lucide-react';
import { Mail } from 'lucide-react';
import { AIAutomationHero } from '../components/AIAutomationHero';

export function AIAutomationPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const aiSolutions = [
    {
      id: 'ai-calling',
      icon: Phone,
      title: 'AI Calling Agents',
      description: 'Intelligent voice AI that handles customer calls 24/7, schedules appointments, qualifies leads, and provides support.',
      image: 'https://images.unsplash.com/photo-1620429948700-24e48a41d5aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGNoYXRib3QlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc2NTAxNjMxOXww&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-blue-500 to-cyan-500',
      benefits: [
        'Handle 1000+ calls simultaneously',
        'Natural human-like conversations',
        'Multi-language support',
        'Instant call recording & analytics',
        'CRM integration',
        'Appointment scheduling',
      ],
      useCases: [
        { industry: 'Healthcare', use: 'Appointment reminders, prescription refills, patient queries' },
        { industry: 'Real Estate', use: 'Property inquiries, viewing scheduling, follow-ups' },
        { industry: 'E-commerce', use: 'Order tracking, customer support, product inquiries' },
      ],
      roi: '80% reduction in call handling costs, 95% customer satisfaction',
    },
    {
      id: 'ai-lead',
      icon: Users,
      title: 'AI Lead Generation Agents',
      description: 'Automated lead qualification, nurturing, and conversion powered by advanced AI algorithms.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NDg2MzkwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-purple-500 to-pink-500',
      benefits: [
        'Automated lead scoring',
        'Intelligent follow-up sequences',
        'Behavior-based engagement',
        'Real-time lead qualification',
        'Predictive analytics',
        'Multi-channel outreach',
      ],
      useCases: [
        { industry: 'B2B SaaS', use: 'Trial user conversion, demo scheduling, upselling' },
        { industry: 'Insurance', use: 'Quote requests, policy renewals, claim inquiries' },
        { industry: 'Education', use: 'Course enrollment, student queries, campus tours' },
      ],
      roi: '300% increase in qualified leads, 60% faster sales cycle',
    },
    {
      id: 'ai-whatsapp',
      icon: MessageCircle,
      title: 'AI WhatsApp Business',
      description: 'Automated WhatsApp messaging for customer engagement, sales, and support with smart AI responses.',
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzY0ODkyNzk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-green-500 to-emerald-500',
      benefits: [
        'Instant automated responses',
        'Product catalog integration',
        'Order processing via WhatsApp',
        'Payment link generation',
        'Broadcast campaigns',
        'Rich media support',
      ],
      useCases: [
        { industry: 'Retail', use: 'Order updates, product queries, customer support' },
        { industry: 'Restaurants', use: 'Menu sharing, order taking, delivery updates' },
        { industry: 'Services', use: 'Booking confirmations, service reminders, payments' },
      ],
      roi: '90% message open rate, 50% faster response time',
    },
    {
      id: 'ai-booking',
      icon: Calendar,
      title: 'AI Appointment Booking',
      description: 'Smart scheduling system that manages appointments, sends reminders, and optimizes your calendar automatically.',
      image: 'https://images.unsplash.com/photo-1551135049-8a33b5883817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBhcHBvaW50bWVudHxlbnwxfHx8fDE3NjUwMTYzMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-orange-500 to-red-500',
      benefits: [
        'Smart calendar optimization',
        'Automated reminders',
        'Rescheduling management',
        'No-show reduction',
        'Multi-location support',
        'Team availability sync',
      ],
      useCases: [
        { industry: 'Medical', use: 'Patient appointments, doctor scheduling, teleconsultation' },
        { industry: 'Salon & Spa', use: 'Service booking, stylist scheduling, package deals' },
        { industry: 'Consulting', use: 'Client meetings, project kickoffs, follow-ups' },
      ],
      roi: '70% reduction in no-shows, 100% booking accuracy',
    },
  ];

  return (
    <div ref={ref} className="pt-20">
      {/* Hero Section */}
      <AIAutomationHero />

      {/* AI Solutions Detail */}
      {aiSolutions.map((solution, index) => (
        <section
          key={solution.id}
          className={`py-12 sm:py-16 md:py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-gradient-to-br from-gray-50 to-indigo-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className={`inline-flex items-center gap-3 mb-4 px-4 py-2 bg-gradient-to-r ${solution.gradient} text-white rounded-full`}>
                  <solution.icon size={20} />
                  <span className="text-sm">AI Solution</span>
                </div>
                <h2 className="text-gray-900 mb-4 text-2xl sm:text-3xl md:text-4xl">{solution.title}</h2>
                <p className="text-gray-600 mb-6 text-sm sm:text-base">{solution.description}</p>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-gray-900 mb-3 text-lg">Key Benefits:</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {solution.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl mb-4">
                  <h4 className="text-gray-900 mb-4 text-lg">Industry Applications:</h4>
                  <div className="space-y-3">
                    {solution.useCases.map((useCase, idx) => (
                      <div key={idx}>
                        <h5 className="text-blue-900 mb-1">{useCase.industry}</h5>
                        <p className="text-gray-600 text-sm">{useCase.use}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ROI */}
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <p className="text-green-900 text-sm">
                    <span className="font-semibold">ROI:</span> {solution.roi}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={index % 2 === 1 ? 'lg:order-1' : ''}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-64 sm:h-80 md:h-96 object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* AI Superagents Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full">
                <Bot size={20} />
                <span className="text-sm">AI Solution</span>
              </div>
              <h2 className="text-gray-900 mb-4 text-2xl sm:text-3xl md:text-4xl">AI Superagents</h2>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Autonomous AI agents that handle workflows, communication, and business operations 24/7 across your tools.
              </p>

              <p className="text-gray-700 mb-6 text-sm sm:text-base">
                Our AI Superagents don't just respond — they act. Automate emails, follow-ups, reporting, scheduling, and more with intelligent agents that work continuously.
              </p>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-gray-900 mb-3 text-lg">Key Features:</h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    'Automate emails and inbox management',
                    'Lead follow-ups and CRM updates',
                    'WhatsApp and Slack notifications',
                    'Smart scheduling and calendar optimization',
                    'Business reporting and analytics',
                    'Multi-platform integrations',
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl mb-4">
                <h4 className="text-gray-900 mb-4 text-lg">Use Cases:</h4>
                <div className="space-y-3">
                  {[
                    { title: 'Inbox Automation', desc: 'Email summaries, replies' },
                    { title: 'Lead Management', desc: 'Auto follow-ups' },
                    { title: 'Travel Planning', desc: 'Alerts, bookings' },
                    { title: 'Personal Assistant', desc: 'Reservations, reminders' },
                    { title: 'Business Reports', desc: 'Weekly summaries' },
                    { title: 'Calendar Optimization', desc: 'Auto scheduling' },
                  ].map((useCase, idx) => (
                    <div key={idx}>
                      <h5 className="text-blue-900 mb-1 font-semibold text-sm">{useCase.title}</h5>
                      <p className="text-gray-600 text-xs">{useCase.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ROI Highlight */}
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 sm:p-6 rounded-xl shadow-lg">
                <p className="text-sm sm:text-base">
                  <span className="font-semibold">Boost productivity by 80%</span>, reduce manual work, and operate your business 24/7 with AI Superagents.
                </p>
              </div>

              <div className="mt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-full hover:shadow-xl transition-all duration-300"
                >
                  Get Your Superagent
                </motion.button>
              </div>
            </motion.div>

            {/* Right Side Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758626052247-79003b45f802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHdvcmtmbG93JTIwYXV0b21hdGlvbiUyMG5ldHdvcmt8ZW58MXx8fHwxNzc0MDE0MjM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="AI Superagents Workflow"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                />
                {/* Workflow Connections Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-transparent to-transparent flex items-end p-6">
                  <div className="grid grid-cols-2 gap-3 w-full">
                    {[
                      { icon: Mail, label: 'Email' },
                      { icon: MessageCircle, label: 'WhatsApp' },
                      { icon: TrendingUp, label: 'Dashboard' },
                      { icon: Calendar, label: 'Calendar' },
                    ].map((item, idx) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + 0.8 }}
                        className="bg-white/10 backdrop-blur-lg p-3 rounded-xl flex items-center gap-2 border border-white/20"
                      >
                        <item.icon className="text-white" size={20} />
                        <span className="text-white text-xs font-medium">{item.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose AI Automation */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-white mb-4 text-2xl sm:text-3xl md:text-4xl">Why AI Automation?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto text-sm sm:text-base">
              Experience the transformation that AI brings to your business operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: '24/7 Availability', desc: 'Never miss a lead or customer inquiry, even at 3 AM', icon: Clock },
              { title: 'Cost Efficient', desc: 'Save up to 70% on operational costs while scaling infinitely', icon: DollarSign },
              { title: 'Instant Response', desc: 'Zero wait time for customers, instant gratification', icon: Zap },
              { title: 'Scalability', desc: 'Handle 10 or 10,000 customers simultaneously', icon: TrendingUp },
              { title: 'Data Insights', desc: 'Real-time analytics and actionable business intelligence', icon: Bot },
              { title: 'Human-Like', desc: 'Natural conversations that customers love', icon: Users },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <item.icon className="text-cyan-300 mb-4" size={32} />
                <h4 className="text-white mb-2 text-lg">{item.title}</h4>
                <p className="text-blue-200 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-gray-900 mb-4 text-2xl sm:text-3xl md:text-4xl">Start Your AI Journey Today</h2>
            <p className="text-gray-600 mb-8 text-sm sm:text-base max-w-2xl mx-auto">
              Book a free consultation to see how AI automation can transform your business
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300"
            >
              Get Free AI Demo
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}