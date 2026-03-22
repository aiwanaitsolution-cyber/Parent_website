import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Calendar, User, ArrowRight, Clock, TrendingUp, Zap, Target } from 'lucide-react';

export function BlogPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'Why Automation is No Longer Optional for Modern Industries',
      excerpt: 'Discover how automation is transforming businesses across sectors and why companies that resist change risk falling behind in 2025.',
      image: 'https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwaW5kdXN0cnklMjByb2JvdHN8ZW58MXx8fHwxNzY1MDE3MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Automation',
      author: 'AxcelGro Team',
      date: 'December 5, 2025',
      readTime: '8 min read',
      content: `
# Why Automation is No Longer Optional for Modern Industries

In today's hyper-competitive business landscape, automation has evolved from a luxury to a necessity. Companies across all sectors are discovering that automation isn't just about reducing costs—it's about survival and growth in an increasingly digital world.

## The Automation Revolution

The global automation market is projected to reach $265 billion by 2025, and for good reason. Businesses that have embraced automation are seeing transformative results:

- **70% reduction** in operational costs
- **10x increase** in productivity
- **95% improvement** in accuracy
- **24/7 availability** without human fatigue

## Key Industries Transformed by Automation

### 1. Healthcare
Automation in healthcare has revolutionized patient care, from AI-powered diagnostics to automated appointment scheduling. Hospitals using our AI calling agents have reduced appointment no-shows by 70% and freed up staff to focus on patient care.

### 2. Manufacturing
Smart factories using automated systems have increased production efficiency by 300% while reducing errors to near-zero levels. Predictive maintenance powered by AI prevents costly downtime.

### 3. Retail & E-commerce
From inventory management to personalized customer recommendations, automation has transformed the shopping experience. Our clients report 250% increase in customer satisfaction scores.

### 4. Financial Services
Automated fraud detection, customer service chatbots, and algorithmic trading have made financial services faster, safer, and more accessible.

## The Cost of Not Automating

Companies that resist automation face serious risks:

- **Lost Competitive Edge**: Competitors who automate can operate faster and cheaper
- **Talent Shortage**: Manual processes struggle to scale as skilled labor becomes scarce
- **Human Error**: Manual workflows are prone to costly mistakes
- **Customer Expectations**: Modern customers expect instant, 24/7 service

## Getting Started with Automation

The good news? Automation is more accessible than ever. Here's how to begin:

1. **Identify Repetitive Tasks**: Look for processes that consume time but add little value
2. **Start Small**: Begin with one department or process
3. **Measure Results**: Track ROI and efficiency gains
4. **Scale Gradually**: Expand automation based on proven success

## The Future is Automated

By 2030, it's estimated that 85% of customer interactions will be handled without human agents. The question isn't whether to automate, but how quickly you can implement it.

At AxcelGro Solution, we're a passionate startup helping businesses transform their operations through AI automation. Our clients typically see ROI within 3-6 months and cost savings of 60-80%.

Ready to join the automation revolution? Contact us today for a free consultation.
      `,
    },
    {
      id: 2,
      title: 'AI Automation: The Complete Guide for Business Owners in 2025',
      excerpt: 'Everything you need to know about implementing AI automation in your business, from chatbots to predictive analytics.',
      image: 'https://images.unsplash.com/photo-1708373100061-f75279dbaa7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MXx8fHwxNzY0OTExNTE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'AI',
      author: 'Tech Insights',
      date: 'December 3, 2025',
      readTime: '12 min read',
      content: `
# AI Automation: The Complete Guide for Business Owners in 2025

Artificial Intelligence is no longer science fiction—it's the backbone of modern business operations. This comprehensive guide will walk you through everything you need to know about AI automation.

## What is AI Automation?

AI automation combines artificial intelligence with process automation to create systems that can learn, adapt, and make decisions with minimal human intervention.

## Types of AI Automation for Business

### 1. AI Calling Agents
Handle customer calls 24/7 with natural language processing. Our AI calling agents can:
- Schedule appointments
- Answer FAQs
- Qualify leads
- Process orders
- Handle customer support

**Real Results**: Clients have reported handling thousands of calls monthly with AI agents, saving significant operational costs.

### 2. AI Chatbots & WhatsApp Business
Instant customer engagement across multiple channels:
- 90% faster response times
- Handle unlimited simultaneous conversations
- Multi-language support
- Seamless handoff to human agents when needed

### 3. Predictive Analytics
Use historical data to forecast trends:
- Sales predictions
- Inventory optimization
- Customer behavior analysis
- Market trend forecasting

### 4. Process Automation
Automate repetitive business processes:
- Data entry and processing
- Report generation
- Email responses
- Document management

## ROI of AI Automation

Our clients typically see:
- **3-6 months** to break even
- **70%** reduction in operational costs
- **300%** increase in lead conversion
- **95%** customer satisfaction rate

## Implementation Roadmap

### Phase 1: Assessment (Week 1-2)
- Identify automation opportunities
- Calculate potential ROI
- Set clear objectives

### Phase 2: Planning (Week 3-4)
- Choose the right AI solutions
- Design integration strategy
- Train your team

### Phase 3: Implementation (Month 2-3)
- Deploy AI systems
- Monitor performance
- Optimize based on data

### Phase 4: Scale (Month 4+)
- Expand to other departments
- Add advanced features
- Continuously improve

## Common Misconceptions

**Myth**: "AI will replace all human jobs"
**Reality**: AI handles repetitive tasks, freeing humans for strategic work. Our clients have redeployed staff to higher-value roles.

**Myth**: "AI is too expensive for SMBs"
**Reality**: AI automation often pays for itself within months. Our plans start at just $49/month.

**Myth**: "AI implementation is too complex"
**Reality**: With the right partner, implementation can be completed in weeks, not months.

## Choosing the Right AI Partner

Look for:
- Proven track record
- Industry-specific expertise
- Responsive support
- Transparent pricing
- Scalable solutions

## The AxcelGro Difference

As a dynamic startup, we've successfully implemented AI automation for:
- Healthcare providers
- E-commerce businesses
- Financial services
- Manufacturing companies
- Professional services

Our approach combines cutting-edge technology with personalized service. Every implementation includes free training, ongoing support, and regular optimization.

Ready to transform your business with AI? Schedule a free consultation today.
      `,
    },
    {
      id: 3,
      title: 'Digital Transformation: How to Future-Proof Your Business',
      excerpt: 'Learn the essential strategies for digital transformation and why waiting could cost you millions in lost opportunities.',
      image: 'https://images.unsplash.com/photo-1644325349124-d1756b79dd42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb258ZW58MXx8fHwxNzY0OTA3MzIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Digital Transformation',
      author: 'Business Strategy',
      date: 'December 1, 2025',
      readTime: '10 min read',
      content: `
# Digital Transformation: How to Future-Proof Your Business

Digital transformation isn't just about technology—it's about reimagining how you do business in the digital age. Companies that successfully transform see 5x revenue growth compared to their peers.

## What is Digital Transformation?

Digital transformation is the integration of digital technology into all areas of business, fundamentally changing how you operate and deliver value to customers.

## The 5 Pillars of Digital Transformation

### 1. Customer Experience
Put customers at the center of everything:
- Omnichannel presence
- Personalized interactions
- Self-service options
- Real-time support

### 2. Operational Agility
Make your business more flexible:
- Cloud infrastructure
- Automated workflows
- Real-time analytics
- Remote collaboration tools

### 3. Culture & Leadership
Transform your organization:
- Digital-first mindset
- Continuous learning
- Data-driven decisions
- Innovation culture

### 4. Technology Integration
Modernize your tech stack:
- Cloud computing
- AI and automation
- Mobile-first solutions
- API integrations

### 5. Data & Analytics
Leverage your data:
- Business intelligence
- Predictive analytics
- Customer insights
- Performance tracking

## Industry Success Stories

### Healthcare: Efficiency Gains
A multi-location clinic implemented our HRM and appointment booking system:
- Reduced administrative time significantly
- Increased patient satisfaction
- Eliminated scheduling conflicts
- Improved staff productivity

### Retail: Revenue Growth
An e-commerce company using our CRM and AI chatbots:
- Faster customer response times
- Increased conversion rates
- Reduced cart abandonment
- Automated marketing campaigns

### Manufacturing: Cost Savings
A manufacturing firm with our ERP and automation:
- Reduced inventory costs
- Improved order accuracy
- Real-time production visibility
- Better maintenance planning

## The Cost of Delay

Every month you wait costs you:
- **Market Share**: Competitors gain ground
- **Revenue**: Missed opportunities compound
- **Talent**: Best people join digital-first companies
- **Efficiency**: Manual processes waste resources

Research shows companies that delay digital transformation experience:
- 25% lower revenue growth
- 30% higher operational costs
- 50% lower customer satisfaction
- Risk of becoming obsolete

## Getting Started: Your 90-Day Plan

### Days 1-30: Assess
- Audit current systems
- Identify pain points
- Set transformation goals
- Calculate potential ROI

### Days 31-60: Plan
- Choose solutions
- Design integration
- Prepare your team
- Create timeline

### Days 61-90: Execute
- Implement systems
- Train staff
- Monitor metrics
- Optimize processes

## Common Pitfalls to Avoid

1. **Lack of Leadership Buy-in**: Ensure executive support
2. **No Clear Strategy**: Define specific goals
3. **Ignoring Culture**: People matter as much as technology
4. **Trying to Do Everything**: Start focused, then expand
5. **Insufficient Training**: Invest in your team

## Measuring Success

Track these KPIs:
- Customer satisfaction scores
- Operational efficiency metrics
- Revenue growth
- Cost savings
- Employee productivity
- Time-to-market

## The AxcelGro Approach

We're a startup that has guided businesses through digital transformation:

**Assessment**: Free consultation to identify opportunities
**Strategy**: Customized roadmap for your business
**Implementation**: Expert deployment and integration
**Training**: Comprehensive team enablement
**Support**: Ongoing assistance
**Optimization**: Continuous improvement

Our clients see significant ROI through improved efficiency and reduced costs.

## The Future is Now

Digital transformation isn't a one-time project—it's an ongoing journey. The companies that thrive are those that embrace change, invest in technology, and put customers first.

Don't let your competitors leave you behind. Start your digital transformation journey today.

Contact AxcelGro Solution for a free digital transformation assessment.
      `,
    },
  ];

  const categories = ['all', 'Automation', 'AI', 'Digital Transformation'];

  const filteredPosts =
    selectedCategory === 'all'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div ref={ref} className="pt-20">
      {/* Hero */}
      <section className="relative py-16 sm:py-20 md:py-32 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full opacity-5"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: Math.random() * 8 + 7,
                repeat: Infinity,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-white mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-300">Innovation</span>
            </h1>
            <p className="text-blue-100 text-lg sm:text-xl max-w-3xl mx-auto px-4">
              Expert insights on AI automation, digital transformation, and business growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 sm:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 sm:px-6 py-2 rounded-full transition-all duration-300 text-sm sm:text-base ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-gray-900 mb-3 text-lg sm:text-xl group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <div className="text-blue-600 flex items-center gap-2 group-hover:gap-3 transition-all text-sm">
                      Read More
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8 md:p-12 rounded-2xl">
              <div className="flex items-center gap-2 text-blue-600 mb-4">
                <TrendingUp size={24} />
                <span className="text-sm">Featured Article</span>
              </div>
              <h2 className="text-gray-900 mb-4 text-2xl sm:text-3xl md:text-4xl">
                {blogPosts[0].title}
              </h2>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">{blogPosts[0].excerpt}</p>
              <div className="prose prose-sm sm:prose max-w-none text-gray-700 mb-6">
                <div className="whitespace-pre-line text-sm sm:text-base">{blogPosts[0].content.slice(0, 500)}...</div>
              </div>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-full hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 text-sm sm:text-base">
                Read Full Article
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Zap className="text-cyan-300 mx-auto mb-6" size={48} />
            <h2 className="text-white mb-4 text-2xl sm:text-3xl md:text-4xl">Ready to Transform Your Business?</h2>
            <p className="text-blue-100 mb-8 text-sm sm:text-base max-w-2xl mx-auto">
              Join businesses that have already automated their operations with AxcelGro
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Get Free Consultation
                <Target size={20} />
              </a>
              <a
                href="tel:+916203447902"
                className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center text-sm sm:text-base"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}