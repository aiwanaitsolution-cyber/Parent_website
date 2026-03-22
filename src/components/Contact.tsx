import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'shankranandsarswati8@gmail.com',
      subtext: 'We reply within 2 hours',
      link: 'mailto:shankranandsarswati8@gmail.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '+91 6203447902',
      subtext: 'Available 24/7',
      link: 'tel:+916203447902',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: 'SK-64, Sector 112, Noida, Uttar Pradesh, India',
      subtext: 'Schedule an appointment',
      link: '#',
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 mb-4 block">Get In Touch</span>
          <h2 className="text-gray-900 mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have a project in mind? We're here to turn your vision into reality. Get in touch with our expert team today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.link}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                  <item.icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.info}</p>
                  <p className="text-gray-500 text-sm">{item.subtext}</p>
                </div>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-8 text-white"
            >
              <h4 className="mb-4">We're Here When You Need Us</h4>
              <div className="space-y-2 text-blue-100">
                <p className="text-lg mb-4">24/7 Support - Always available for you</p>
                <div className="border-t border-blue-400 pt-4">
                  <p className="mb-2">Ready to Transform Your Business?</p>
                  <p className="text-sm">✅ Free 30-minute consultation</p>
                  <p className="text-sm">✅ Custom solution proposal</p>
                  <p className="text-sm">✅ No commitment required</p>
                  <p className="text-sm">✅ Expert guidance & support</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-gray-700 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="custom">Custom Software Development</option>
                    <option value="ai">AI Automation Solutions</option>
                    <option value="hrm">HRM System</option>
                    <option value="crm">CRM Solution</option>
                    <option value="erp">ERP Software</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="consultation">IT Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}