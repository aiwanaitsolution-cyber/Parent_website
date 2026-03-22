import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Target, Eye, Heart, Users, Award, TrendingUp, Zap, Lightbulb, Code, Rocket, ArrowRight } from 'lucide-react';
import { EcosystemTree } from '../components/EcosystemTree';

export function StartupAboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-32 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full opacity-5"
              style={{
                width: Math.random() * 150 + 50,
                height: Math.random() * 150 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
              }}
              transition={{
                duration: Math.random() * 8 + 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Meet the Team Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Your Success</span>
            </h1>
            <p className="text-blue-100 text-lg sm:text-xl max-w-3xl mx-auto px-4">
              A passionate startup with expert specialists committed to transforming your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-gray-900 mb-6 text-2xl sm:text-3xl md:text-4xl">Our Story</h2>
              <div className="space-y-4 text-gray-600 text-sm sm:text-base">
                <p>
                  Aiwana Solution is a fresh, dynamic startup based in Greater Noida, founded by a team of technology 
                  enthusiasts who share a common vision: making advanced AI and automation accessible to every business.
                </p>
                <p>
                  We're not your typical IT company. We're a group of passionate specialists—each an expert in their 
                  field—who came together to challenge the status quo. Our team includes AI engineers, full-stack 
                  developers, cloud architects, and digital marketing strategists, all committed to delivering 
                  innovative solutions.
                </p>
                <p>
                  As a startup, we bring agility, fresh perspectives, and hunger for excellence. We work closely 
                  with each client, treating your project as if it were our own. No bureaucracy, no long waiting 
                  times—just fast, quality delivery from people who genuinely care about your success.
                </p>
                <p>
                  While we're young, our team brings years of individual expertise from top tech companies and 
                  successful projects. We're building something special, and we want you to be part of our journey.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Startup team collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xl sm:text-2xl mb-2">Small Team, Big Impact</p>
                    <p className="text-sm sm:text-base opacity-90">Expert specialists driving innovation</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-gray-900 mb-4 text-2xl sm:text-3xl md:text-4xl">Mission & Vision</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Guided by purpose, driven by innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <Target className="text-blue-600 mb-4" size={48} />
              <h3 className="text-gray-900 mb-4 text-xl sm:text-2xl">Our Mission</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                To empower businesses with cutting-edge AI automation and software solutions that are both 
                accessible and transformative. We strive to deliver exceptional value through innovation, 
                expertise, and personalized service—making advanced technology available to businesses of all sizes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <Eye className="text-purple-600 mb-4" size={48} />
              <h3 className="text-gray-900 mb-4 text-xl sm:text-2xl">Our Vision</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                To become a leading force in AI-driven business transformation, recognized for turning startups 
                and SMBs into tech-powered success stories. We envision a future where every business, regardless 
                of size, can leverage world-class automation and software to compete on a global scale.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-gray-900 mb-4 text-2xl sm:text-3xl md:text-4xl">What Drives Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              The values that shape every decision and every line of code
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Lightbulb,
                title: 'Innovation First',
                description: 'We embrace the latest technologies and creative solutions to solve complex problems.',
                color: 'text-yellow-600',
                bg: 'bg-yellow-50',
              },
              {
                icon: Heart,
                title: 'Client Success',
                description: 'Your wins are our wins. We measure success by the impact we create for your business.',
                color: 'text-red-600',
                bg: 'bg-red-50',
              },
              {
                icon: Award,
                title: 'Quality Excellence',
                description: 'We never compromise on quality. Every project gets our absolute best effort.',
                color: 'text-blue-600',
                bg: 'bg-blue-50',
              },
              {
                icon: Zap,
                title: 'Speed & Agility',
                description: 'Startup mindset means we move fast, iterate quickly, and deliver on time.',
                color: 'text-purple-600',
                bg: 'bg-purple-50',
              },
              {
                icon: Users,
                title: 'Collaboration',
                description: 'We work as your extended team, bringing transparency and open communication.',
                color: 'text-green-600',
                bg: 'bg-green-50',
              },
              {
                icon: TrendingUp,
                title: 'Continuous Growth',
                description: 'We\'re always learning, improving, and staying ahead of technology trends.',
                color: 'text-indigo-600',
                bg: 'bg-indigo-50',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 ${value.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <value.icon className={value.color} size={28} />
                </div>
                <h3 className="text-gray-900 mb-2 text-lg sm:text-xl">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-white mb-4 text-2xl sm:text-3xl md:text-4xl">Expert Specialists</h2>
            <p className="text-blue-200 max-w-2xl mx-auto text-sm sm:text-base">
              Our team brings deep expertise across multiple technology domains
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Code, title: 'Full-Stack Developers', desc: 'MERN, Python, Cloud-native development' },
              { icon: Rocket, title: 'AI/ML Engineers', desc: 'Gen AI, NLP, Computer Vision specialists' },
              { icon: Target, title: 'Digital Marketers', desc: 'SEO, PPC, Social Media experts' },
              { icon: Award, title: 'Cloud Architects', desc: 'AWS, Azure, DevOps professionals' },
            ].map((expert, index) => (
              <motion.div
                key={expert.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <expert.icon className="text-cyan-300 mb-4 mx-auto" size={40} />
                <h3 className="text-white mb-2 text-center text-base sm:text-lg">{expert.title}</h3>
                <p className="text-blue-200 text-center text-xs sm:text-sm">{expert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Ecosystem Section */}
      <EcosystemTree />

      {/* Location */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-gray-900 mb-6 text-2xl sm:text-3xl md:text-4xl">Based in India's Tech Hub</h2>
              <div className="space-y-4 text-gray-600 text-sm sm:text-base">
                <p>
                  We're proudly based in Noida, Uttar Pradesh—one of India's fastest-growing technology hubs. 
                  Our location gives us access to top talent while keeping our costs competitive, which means 
                  better value for our clients.
                </p>
                <p>
                  While we're rooted in Noida, we serve clients globally through remote collaboration and 
                  cloud-based delivery. Distance is no barrier when it comes to delivering excellence.
                </p>
                <div className="bg-blue-50 p-4 sm:p-6 rounded-xl mt-6">
                  <h3 className="text-gray-900 mb-3 text-lg sm:text-xl">Visit Us</h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    <strong>Address:</strong> P Alpha 1, Greater Noida, Uttar Pradesh, 201310
                  </p>
                  <p className="text-gray-700 mt-2 text-sm sm:text-base">
                    <strong>Email:</strong> shankranandsarswati8@gmail.com
                  </p>
                  <p className="text-gray-700 mt-2 text-sm sm:text-base">
                    <strong>Phone:</strong> +91 6203447902
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0976834651307!2d77.3654!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjAiTiA3N8KwMjEnNTUuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AxcelGro Solution Office Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-white mb-6 text-2xl sm:text-3xl md:text-4xl">Ready to Work Together?</h2>
            <p className="text-blue-100 mb-8 text-sm sm:text-base max-w-2xl mx-auto">
              Let's discuss how our expert team can help transform your business with cutting-edge technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Schedule a Call
                <ArrowRight size={20} />
              </a>
              <a
                href="mailto:shankranandsarswati8@gmail.com"
                className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center text-sm sm:text-base"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}