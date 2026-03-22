import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

export function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const blogPosts = [
    {
      id: 1,
      title: 'The Rise of AI Agents: Transforming Business Operations in 2025',
      excerpt: 'Discover how AI agents are revolutionizing business processes, from customer service to data analysis, and why your company needs to adopt this technology now.',
      image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjQ2NjMyMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'AI Technology',
      author: 'Sarah Johnson',
      date: 'Nov 28, 2025',
      readTime: '5 min read',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 2,
      title: 'Generative AI: Creating Content at Scale with ChatGPT and Beyond',
      excerpt: 'Learn how generative AI tools are changing content creation, code generation, and creative workflows for businesses of all sizes.',
      image: 'https://images.unsplash.com/photo-1751448582395-27fc57293f1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0Ym90JTIwY29udmVyc2F0aW9ufGVufDF8fHx8MTc2NDY3NjgyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Generative AI',
      author: 'Michael Chen',
      date: 'Nov 25, 2025',
      readTime: '7 min read',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 3,
      title: 'Business Automation: Streamlining Operations with Smart Technology',
      excerpt: 'Explore how automation technologies are reducing costs, improving efficiency, and freeing up your team to focus on strategic initiatives.',
      image: 'https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwcm9ib3RpY3N8ZW58MXx8fHwxNzY0NjY5OTIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Automation',
      author: 'Emily Rodriguez',
      date: 'Nov 22, 2025',
      readTime: '6 min read',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 4,
      title: 'Chatbots 2025: Delivering 24/7 Customer Support with AI',
      excerpt: 'Modern chatbots powered by AI are providing personalized customer experiences and resolving issues faster than ever before.',
      image: 'https://images.unsplash.com/photo-1566709603326-610ec233ee77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwYmxvZyUyMHdyaXRpbmd8ZW58MXx8fHwxNzY0Njc2ODI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Customer Service',
      author: 'David Park',
      date: 'Nov 20, 2025',
      readTime: '4 min read',
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 5,
      title: 'Machine Learning Integration: From Data to Insights',
      excerpt: 'Understanding how machine learning can transform your business data into actionable insights and predictive analytics.',
      image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjQ2NjMyMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Machine Learning',
      author: 'Lisa Anderson',
      date: 'Nov 18, 2025',
      readTime: '8 min read',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      id: 6,
      title: 'The Future of Work: AI-Powered Productivity Tools',
      excerpt: 'Discover the latest AI-powered tools that are reshaping how teams collaborate, communicate, and complete projects.',
      image: 'https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwcm9ib3RpY3N8ZW58MXx8fHwxNzY0NjY5OTIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Productivity',
      author: 'James Wilson',
      date: 'Nov 15, 2025',
      readTime: '5 min read',
      color: 'from-teal-500 to-blue-500',
    },
  ];

  return (
    <section id="blog" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 mb-4 block">Latest Insights</span>
          <h2 className="text-gray-900 mb-6">
            Blog & Industry Updates
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Stay informed with the latest trends, insights, and best practices 
            in technology and digital innovation.
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl overflow-hidden shadow-xl">
            <div className="relative h-80 lg:h-auto">
              <ImageWithFallback
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute top-6 left-6 bg-gradient-to-r ${blogPosts[0].color} text-white px-4 py-2 rounded-full text-sm`}>
                Featured Post
              </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className={`bg-gradient-to-r ${blogPosts[0].color} text-white px-3 py-1 rounded-full text-sm`}>
                  {blogPosts[0].category}
                </span>
                <div className="flex items-center text-gray-600 text-sm gap-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {blogPosts[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {blogPosts[0].readTime}
                  </span>
                </div>
              </div>
              <h3 className="text-gray-900 mb-4">{blogPosts[0].title}</h3>
              <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                    {blogPosts[0].author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-gray-900 text-sm">{blogPosts[0].author}</div>
                    <div className="text-gray-500 text-xs">Author</div>
                  </div>
                </div>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Read More
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${post.color} text-white px-3 py-1 rounded-full text-sm`}>
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-gray-500 text-sm mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
                <h4 className="text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-gray-400" />
                    <span className="text-gray-700 text-sm">{post.author}</span>
                  </div>
                  <a
                    href="#"
                    className="group/link flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors text-sm"
                  >
                    Read
                    <ArrowRight className="group-hover/link:translate-x-1 transition-transform" size={16} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors duration-300 inline-flex items-center gap-2">
            Load More Articles
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
