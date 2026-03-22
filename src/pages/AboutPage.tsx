import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Target, Eye, Heart, Users, Award, TrendingUp } from 'lucide-react';

export function AboutPage() {
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
              Your Dream is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Our Vision</span>
            </h1>
            <p className="text-blue-100 text-lg sm:text-xl max-w-3xl mx-auto px-4">
              Building the future of business technology, one innovation at a time
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
                  Founded in November 2025, Axcelgro Solution emerged from a simple vision: to make cutting-edge 
                  technology accessible to businesses of all sizes. What started as a small team of passionate 
                  developers in Noida has rapidly grown into a powerhouse of innovation, serving clients across 
                  the globe.
                </p>
                <p>
                  We believe that every business deserves world-class technology solutions, regardless of their 
                  size or budget. That's why we've dedicated ourselves to creating affordable, scalable, and 
                  powerful software that drives real business growth.
                </p>
                <p>
                  Today, we're proud to be a team of 40+ professionals, serving 150+ clients across 25+ industries, 
                  with a 98% satisfaction rate. Our journey has just begun, and we're excited to continue 
                  transforming businesses with cutting-edge AI and automation solutions.
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
                  src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NjQ4MzI0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-gray-900 mb-4 text-2xl sm:text-3xl md:text-4xl">Mission & Vision</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl"
            >
              <div className="bg-blue-100 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6">
                <Target className="text-blue-600" size={32} />
              </div>
              <h3 className="text-gray-900 mb-4 text-xl sm:text-2xl">Our Mission</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                To empower businesses worldwide with innovative AI automation and software solutions that drive 
                growth, efficiency, and success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl"
            >
              <div className="bg-purple-100 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="text-purple-600" size={32} />
              </div>
              <h3 className="text-gray-900 mb-4 text-xl sm:text-2xl">Our Vision</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                To become the most trusted technology partner for businesses seeking digital transformation and 
                AI-powered automation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-gray-900 mb-4 text-2xl sm:text-3xl md:text-4xl">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: TrendingUp, title: 'Innovation First', desc: 'We embrace new technologies and creative solutions' },
              { icon: Heart, title: 'Customer Success', desc: 'Your success is our primary goal and measure of achievement' },
              { icon: Award, title: 'Quality Excellence', desc: 'We never compromise on quality and attention to detail' },
              { icon: Users, title: 'Transparent Communication', desc: 'Open, honest, and clear communication always' },
              { icon: Target, title: 'Continuous Learning', desc: 'We invest in growth and staying ahead of the curve' },
              { icon: TrendingUp, title: 'Result-Driven', desc: 'Focused on delivering measurable business outcomes' },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-white w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="text-blue-600" size={24} />
                </div>
                <h4 className="text-gray-900 mb-2 text-base sm:text-lg">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-white mb-4 text-2xl sm:text-3xl md:text-4xl">Meet Our Growing Team</h2>
            <p className="text-blue-100 max-w-3xl mx-auto text-sm sm:text-base px-4">
              We're a rapidly growing team of 40+ specialists including developers, AI engineers, designers, 
              and business consultants. Based in our Noida headquarters, we're united by a passion for 
              technology and a commitment to client success.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { number: '40+', label: 'Team Members' },
              { number: '15+', label: 'Years Combined Experience' },
              { number: '10+', label: 'Technology Experts' },
              { number: '24/7', label: 'Support Team' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 text-center"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl text-white mb-2">{stat.number}</div>
                <div className="text-blue-200 text-sm sm:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-gray-900 mb-6 text-2xl sm:text-3xl md:text-4xl">Visit Our Office</h2>
              <div className="space-y-4">
                <div>
                  <h4 className="text-gray-900 mb-2 text-lg sm:text-xl">Axcelgro Solution</h4>
                  <p className="text-gray-600 text-sm sm:text-base">SK-64, Sector 112</p>
                  <p className="text-gray-600 text-sm sm:text-base">Noida, Uttar Pradesh</p>
                  <p className="text-gray-600 text-sm sm:text-base">India</p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-700 mb-2 text-sm sm:text-base">
                    <span className="text-blue-600">Email:</span> shankranandsarswati8@gmail.com
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    <span className="text-blue-600">Phone:</span> +91 6203447902
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8 rounded-2xl"
            >
              <h3 className="text-gray-900 mb-6 text-xl sm:text-2xl">Why Choose Axcelgro?</h3>
              <ul className="space-y-4">
                {[
                  'Expertise: Decades of combined experience in cutting-edge technologies',
                  'Innovation: Always ahead of technology trends',
                  'Support: 24/7 dedicated support for your business',
                  'Results: 200+ successful projects and 98% client satisfaction',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3 text-gray-700 text-sm sm:text-base"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Award className="text-white" size={14} />
                    </div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
