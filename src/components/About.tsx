import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Target, Users, Award, Lightbulb } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower businesses with innovative IT solutions that drive growth and success.',
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'We prioritize our clients\' needs and deliver tailored solutions for their unique challenges.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering high-quality solutions with attention to detail and best practices.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Staying ahead with cutting-edge technologies and creative problem-solving approaches.',
    },
  ];

  return (
    <section id="about" ref={ref} className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-600 mb-4 block">About Us</span>
            <h2 className="text-gray-900 mb-6">
              Building Digital Excellence Since Day One
            </h2>
            <p className="text-gray-600 mb-6">
              Axcelgro Solution is a leading IT solutions provider dedicated to transforming 
              businesses through technology. With a team of expert developers, designers, and 
              digital marketers, we deliver comprehensive solutions that drive real results.
            </p>
            <p className="text-gray-600 mb-8">
              From custom web applications to mobile apps and strategic digital marketing 
              campaigns, we combine technical expertise with creative innovation to help 
              your business thrive in the digital age.
            </p>
            <div className="flex gap-4">
              <div>
                <div className="text-blue-600 mb-1">10+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div className="w-px bg-gray-300"></div>
              <div>
                <div className="text-blue-600 mb-1">98%</div>
                <div className="text-gray-600 text-sm">Client Satisfaction</div>
              </div>
              <div className="w-px bg-gray-300"></div>
              <div>
                <div className="text-blue-600 mb-1">100%</div>
                <div className="text-gray-600 text-sm">Commitment</div>
              </div>
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
                src="https://images.unsplash.com/photo-1601509876296-aba16d4c10a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2NDY3NDUxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-2xl shadow-xl"
            >
              <div className="mb-2">Trusted Partner</div>
              <div className="text-sm opacity-90">For Your Digital Journey</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-gray-900 text-center mb-12">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="text-blue-600" size={28} />
                </div>
                <h4 className="text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
