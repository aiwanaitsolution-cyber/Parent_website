import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Users, Globe, Cpu, HeadphonesIcon, Zap, DollarSign } from 'lucide-react';

export function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Users,
      title: 'Expert Team of 40+ Professionals',
      description: 'Skilled developers, designers, and consultants dedicated to your success',
    },
    {
      icon: Globe,
      title: 'Based in Noida, Serving Globally',
      description: 'Local presence with global reach and international quality standards',
    },
    {
      icon: Cpu,
      title: 'Cutting-Edge Technology Stack',
      description: 'Latest tools and frameworks for modern, scalable solutions',
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Customer Support',
      description: 'Round-the-clock assistance to keep your business running smoothly',
    },
    {
      icon: Zap,
      title: 'Agile Development Process',
      description: 'Fast iterations, continuous feedback, and on-time delivery',
    },
    {
      icon: DollarSign,
      title: 'Money-Back Guarantee',
      description: 'Your satisfaction is guaranteed or get your money back',
    },
  ];

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-gray-900 mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl">Why Choose Us?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg px-4">
            We're not just another IT company. We're your growth partner, dedicated to transforming 
            your vision into reality with cutting-edge technology and unmatched expertise.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-blue-100 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <feature.icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={24} />
              </div>
              <h3 className="text-gray-900 mb-3 text-base sm:text-lg">{feature.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
