import { motion } from 'motion/react';
import { useState } from 'react';
import { Briefcase, MapPin, Clock, DollarSign, Send } from 'lucide-react';

export function CareersPage() {
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    portfolio: '',
    coverLetter: '',
  });

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Application submitted successfully! We will review and contact you soon.');
    setApplicationData({ name: '', email: '', phone: '', position: '', experience: '', portfolio: '', coverLetter: '' });
  };

  const openings = [
    {
      title: 'Full Stack Developer',
      location: 'Noida, India',
      type: 'Full-time',
      experience: '2-5 years',
      salary: '₹6-12 LPA',
      skills: ['React', 'Node.js', 'MongoDB', 'AWS'],
    },
    {
      title: 'AI/ML Engineer',
      location: 'Noida, India / Remote',
      type: 'Full-time',
      experience: '3-6 years',
      salary: '₹10-18 LPA',
      skills: ['Python', 'TensorFlow', 'NLP', 'Computer Vision'],
    },
    {
      title: 'UI/UX Designer',
      location: 'Noida, India',
      type: 'Full-time',
      experience: '1-4 years',
      salary: '₹4-8 LPA',
      skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
    },
    {
      title: 'Digital Marketing Specialist',
      location: 'Noida, India',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹4-7 LPA',
      skills: ['SEO', 'Google Ads', 'Social Media', 'Analytics'],
    },
    {
      title: 'DevOps Engineer',
      location: 'Remote',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹8-15 LPA',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    },
    {
      title: 'Business Development Executive',
      location: 'Noida, India',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '₹3-6 LPA + Incentives',
      skills: ['Sales', 'Communication', 'CRM', 'Negotiation'],
    },
  ];

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
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-300">Amazing Team</span>
            </h1>
            <p className="text-blue-100 text-lg sm:text-xl max-w-3xl mx-auto px-4">
              Be part of a rapidly growing tech company shaping the future of business automation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-900 mb-12 text-2xl sm:text-3xl md:text-4xl text-center"
          >
            Why Work With Us?
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Competitive Salary', desc: 'Industry-leading compensation packages' },
              { title: 'Flexible Work', desc: 'Remote and hybrid options available' },
              { title: 'Learning & Growth', desc: 'Continuous training and skill development' },
              { title: 'Health Benefits', desc: 'Comprehensive health insurance' },
              { title: 'Work-Life Balance', desc: 'Flexible hours and paid time off' },
              { title: 'Innovation Culture', desc: 'Work with cutting-edge technologies' },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl"
              >
                <h3 className="text-gray-900 mb-2 text-lg">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-900 mb-12 text-2xl sm:text-3xl md:text-4xl text-center"
          >
            Current Openings
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {openings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <h3 className="text-gray-900 mb-4 text-xl">{job.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <MapPin size={16} />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Briefcase size={16} />
                    {job.type}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Clock size={16} />
                    {job.experience}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <DollarSign size={16} />
                    {job.salary}
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-gray-700 text-sm mb-2">Required Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span key={skill} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href="#apply"
                  className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm"
                >
                  Apply Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-gray-900 mb-8 text-2xl sm:text-3xl md:text-4xl text-center">Apply for a Position</h2>
            <form onSubmit={handleApply} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8 rounded-2xl space-y-4">
              <div>
                <label className="block text-gray-700 mb-2 text-sm">Full Name *</label>
                <input
                  type="text"
                  required
                  value={applicationData.name}
                  onChange={(e) => setApplicationData({ ...applicationData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2 text-sm">Email *</label>
                  <input
                    type="email"
                    required
                    value={applicationData.email}
                    onChange={(e) => setApplicationData({ ...applicationData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 text-sm">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={applicationData.phone}
                    onChange={(e) => setApplicationData({ ...applicationData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2 text-sm">Position Applied For *</label>
                <select
                  required
                  value={applicationData.position}
                  onChange={(e) => setApplicationData({ ...applicationData, position: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                >
                  <option value="">Select a position</option>
                  {openings.map((job) => (
                    <option key={job.title} value={job.title}>{job.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2 text-sm">Years of Experience *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., 3 years"
                  value={applicationData.experience}
                  onChange={(e) => setApplicationData({ ...applicationData, experience: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 text-sm">Portfolio/LinkedIn URL</label>
                <input
                  type="url"
                  placeholder="https://"
                  value={applicationData.portfolio}
                  onChange={(e) => setApplicationData({ ...applicationData, portfolio: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 text-sm">Cover Letter *</label>
                <textarea
                  required
                  rows={6}
                  placeholder="Tell us why you're a great fit for this role..."
                  value={applicationData.coverLetter}
                  onChange={(e) => setApplicationData({ ...applicationData, coverLetter: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
