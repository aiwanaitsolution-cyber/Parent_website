import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, Calendar, Clock, Search, UserRound } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Reveal, SectionBadge } from '../components/FuturisticUI';
import { blogCategories, blogPosts } from '../lib/site';

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') return blogPosts;
    return blogPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  const featuredPost = filteredPosts[0] ?? blogPosts[0];

  return (
    <>
      <SEO
        title="Aiwana Blog - SEO, GEO, AEO, AI Automation and SaaS Insights"
        description="Read Aiwana Solution insights on complete IT handling, SEO, GEO, AEO, AI automation, SaaS products, business software and digital transformation."
      />

      <section className="relative overflow-hidden bg-white pt-32 text-slate-950">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-violet-700 via-fuchsia-500 to-sky-400" />
        <div className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-violet-200/50 blur-3xl" />
        <div className="absolute right-[-6%] top-44 h-80 w-80 rounded-full bg-sky-200/50 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
          <Reveal>
            <SectionBadge light>Aiwana knowledge engine</SectionBadge>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl">
              Blog for search, answers and serious business trust.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              SEO, GEO, AEO, SaaS, AI automation and complete IT handling content built to educate buyers and help
              Aiwana appear where modern businesses search.
            </p>
            <div className="mt-8 flex max-w-xl items-center gap-3 rounded-full border border-violet-100 bg-white px-5 py-3 shadow-[0_18px_60px_rgba(88,28,135,0.12)]">
              <Search className="text-violet-600" size={20} />
              <span className="text-sm font-semibold text-slate-600">Content clusters: services, products, AI use cases, growth systems</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="relative overflow-hidden rounded-[2rem] border border-violet-100 bg-white shadow-[0_30px_100px_rgba(88,28,135,0.18)]"
            >
              <div className="relative h-72 overflow-hidden">
                <img src={featuredPost.image} alt={featuredPost.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-950/75 via-violet-950/10 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-violet-600 px-4 py-2 text-sm font-bold text-white shadow-lg">
                  {featuredPost.category}
                </span>
              </div>
              <div className="p-7">
                <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-2"><Calendar size={16} /> {featuredPost.date}</span>
                  <span className="flex items-center gap-2"><Clock size={16} /> {featuredPost.readTime}</span>
                </div>
                <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950">{featuredPost.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{featuredPost.excerpt}</p>
                <Link to={`/blog/${featuredPost.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-violet-700">
                  Read featured article <ArrowRight size={17} />
                </Link>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/80 py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-4 px-4 sm:px-6 lg:px-8">
          {blogCategories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-[0_18px_42px_rgba(124,58,237,0.32)]'
                  : 'bg-white text-slate-700 shadow-[0_10px_35px_rgba(15,23,42,0.08)] hover:text-violet-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </section>

      <section className="bg-[#f8fbff] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="popLayout">
            <motion.div layout className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filteredPosts.map((post, index) => (
                <motion.article
                  layout
                  key={post.slug}
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 18, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  whileHover={{ y: -10 }}
                  className="group overflow-hidden rounded-[1.35rem] bg-white shadow-[0_18px_60px_rgba(15,23,42,0.12)]"
                >
                  <div className="relative h-60 overflow-hidden">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 to-transparent" />
                    <span className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-7">
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
                      <span className="flex items-center gap-2"><Clock size={16} /> {post.readTime}</span>
                    </div>
                    <h2 className="mt-5 text-2xl font-semibold leading-tight text-slate-950 group-hover:text-violet-700">
                      {post.title}
                    </h2>
                    <p className="mt-4 min-h-[84px] text-sm leading-7 text-slate-600">{post.excerpt}</p>
                    <div className="mt-7 flex items-center justify-between gap-4">
                      <span className="flex items-center gap-2 text-sm text-slate-600">
                        <UserRound size={17} /> {post.author}
                      </span>
                      <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                        Read More <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
