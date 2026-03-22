import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar, Clock } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [appointmentData, setAppointmentData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    type: 'consultation',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  };

  const handleAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Appointment request received! We will confirm shortly.');
    setAppointmentData({ name: '', email: '', phone: '', date: '', time: '', type: 'consultation' });
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-16 sm:py-20 md:py-32 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-white mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-300">Connect</span>
            </h1>
            <p className="text-blue-100 text-lg sm:text-xl max-w-2xl mx-auto">
              Get in touch with us for any inquiries or schedule a meeting
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Mail, title: 'Email Us', info: 'shankranandsarswati8@gmail.com', link: 'mailto:shankranandsarswati8@gmail.com' },
              { icon: Phone, title: 'Call Us', info: '+91 6203447902', link: 'tel:+916203447902' },
              { icon: MapPin, title: 'Visit Us', info: 'SK-64, Sector 112, Noida, UP, India', link: '#' },
            ].map((item, index) => (
              <motion.a
                key={item.title}
                href={item.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl hover:shadow-xl transition-shadow"
              >
                <item.icon className="text-blue-600 mb-4" size={32} />
                <h3 className="text-gray-900 mb-2 text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.info}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Appointment Booking */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl"
            >
              <h2 className="text-gray-900 mb-6 text-2xl sm:text-3xl">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2 text-sm">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 text-sm">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 text-sm">Service Interested In</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  >
                    <option value="">Select a service</option>
                    <option value="custom-dev">Custom Software Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="ai">AI Automation</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="products">SaaS Products (HRM/CRM/ERP)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 text-sm">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Appointment Booking */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl"
            >
              <h2 className="text-gray-900 mb-6 text-2xl sm:text-3xl">Book a Meeting</h2>
              <form onSubmit={handleAppointment} className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2 text-sm">Name *</label>
                  <input
                    type="text"
                    required
                    value={appointmentData.name}
                    onChange={(e) => setAppointmentData({ ...appointmentData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 text-sm">Email *</label>
                  <input
                    type="email"
                    required
                    value={appointmentData.email}
                    onChange={(e) => setAppointmentData({ ...appointmentData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 text-sm">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={appointmentData.phone}
                    onChange={(e) => setAppointmentData({ ...appointmentData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 text-sm">Meeting Type *</label>
                  <select
                    required
                    value={appointmentData.type}
                    onChange={(e) => setAppointmentData({ ...appointmentData, type: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  >
                    <option value="consultation">Free Consultation</option>
                    <option value="demo">Product Demo</option>
                    <option value="discussion">Project Discussion</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">
                      <Calendar className="inline mr-2" size={16} />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={appointmentData.date}
                      onChange={(e) => setAppointmentData({ ...appointmentData, date: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">
                      <Clock className="inline mr-2" size={16} />
                      Preferred Time *
                    </label>
                    <input
                      type="time"
                      required
                      value={appointmentData.time}
                      onChange={(e) => setAppointmentData({ ...appointmentData, time: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Calendar size={20} />
                  Schedule Meeting
                </button>
              </form>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-900 text-sm">
                  <strong>Office Hours:</strong><br />
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-gray-900 mb-8 text-2xl sm:text-3xl text-center">Find Us</h2>
            <div className="bg-gray-200 h-96 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-blue-600 mx-auto mb-4" size={48} />
                <p className="text-gray-700">
                  SK-64, Sector 112<br />
                  Noida, Uttar Pradesh<br />
                  India
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
