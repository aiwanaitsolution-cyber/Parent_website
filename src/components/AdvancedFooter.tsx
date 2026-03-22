import { motion } from 'motion/react';
import { useState } from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export function AdvancedFooter({ setCurrentPage }: FooterProps) {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing! We'll send updates to ${email}`);
    setEmail('');
  };

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { name: 'About Us', page: 'about' },
      { name: 'Careers', page: 'careers' },
      { name: 'Blog', page: 'blog' },
      { name: 'Contact', page: 'contact' },
    ],
    services: [
      { name: 'All Services', page: 'services' },
      { name: 'AI Automation', page: 'ai-automation' },
      { name: 'Products', page: 'products' },
    ],
    products: [
      { name: 'HRM System', page: 'products' },
      { name: 'CRM System', page: 'products' },
      { name: 'ERP System', page: 'products' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube', color: 'hover:bg-red-600' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl mb-4">
                  Subscribe to Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-300">Newsletter</span>
                </h3>
                <p className="text-blue-200 text-sm sm:text-base">
                  Get the latest updates on AI automation, technology trends, and exclusive offers delivered to your inbox.
                </p>
              </motion.div>

              <motion.form
                onSubmit={handleSubscribe}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-sm sm:text-base"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 sm:px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base whitespace-nowrap"
                  >
                    Subscribe
                    <Send size={18} />
                  </motion.button>
                </div>
              </motion.form>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-6">
                  <h2 className="text-2xl sm:text-3xl mb-2">
                    Aiwana <span className="text-cyan-300">Solution</span>
                  </h2>
                  <p className="text-blue-200 text-sm sm:text-base">
                    Transforming businesses with AI automation and cutting-edge technology
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <a
                    href="mailto:shankranandsarswati8@gmail.com"
                    className="flex items-start gap-3 text-blue-200 hover:text-cyan-300 transition-colors group text-sm"
                  >
                    <Mail className="flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" size={18} />
                    <span className="break-all">shankranandsarswati8@gmail.com</span>
                  </a>
                  <a
                    href="tel:+916203447902"
                    className="flex items-center gap-3 text-blue-200 hover:text-cyan-300 transition-colors group text-sm"
                  >
                    <Phone className="flex-shrink-0 group-hover:scale-110 transition-transform" size={18} />
                    <span>+91 6203447902</span>
                  </a>
                  <div className="flex items-start gap-3 text-blue-200 text-sm">
                    <MapPin className="flex-shrink-0 mt-0.5" size={18} />
                    <span>P Alpha 1, Greater Noida, Uttar Pradesh, 201310</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 flex-wrap">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`bg-white/10 backdrop-blur-lg w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center ${social.color} transition-all duration-300 border border-white/10`}
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4 className="text-lg sm:text-xl mb-4 sm:mb-6">Company</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => handleNavClick(link.page)}
                        className="text-blue-200 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2 group text-sm sm:text-base"
                      >
                        <ArrowRight className="opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all duration-300" size={16} />
                        <span>{link.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="text-lg sm:text-xl mb-4 sm:mb-6">Services</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => handleNavClick(link.page)}
                        className="text-blue-200 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2 group text-sm sm:text-base"
                      >
                        <ArrowRight className="opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all duration-300" size={16} />
                        <span>{link.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="text-lg sm:text-xl mb-4 sm:mb-6">Products</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.products.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => handleNavClick(link.page)}
                        className="text-blue-200 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2 group text-sm sm:text-base"
                      >
                        <ArrowRight className="opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all duration-300" size={16} />
                        <span>{link.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-blue-200 text-xs sm:text-sm text-center md:text-left">
                © {currentYear} Aiwana Solution. All rights reserved. Made with ❤️ in India
              </p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
                <a href="#" className="text-blue-200 hover:text-cyan-300 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-blue-200 hover:text-cyan-300 transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-blue-200 hover:text-cyan-300 transition-colors duration-300">
                  Cookie Policy
                </a>
                <a href="#" className="text-blue-200 hover:text-cyan-300 transition-colors duration-300">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}