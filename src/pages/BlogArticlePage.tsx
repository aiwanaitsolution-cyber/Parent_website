import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { SEO } from '../components/SEO';
import { AuroraStage, GlowCard, Reveal, SectionBadge } from '../components/FuturisticUI';
import { blogPosts, site } from '../lib/site';

export function BlogArticlePage() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <SEO
        title={`${post.title} | Aiwana Blog`}
        description={post.excerpt}
        type="article"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          author: { '@type': 'Organization', name: site.name },
          publisher: { '@type': 'Organization', name: site.name },
        }}
      />

      <AuroraStage>
        <article className="mx-auto max-w-4xl px-4 pb-20 pt-36 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-violet-100">
            <ArrowLeft size={16} /> Back to blog
          </Link>
          <Reveal>
            <div className="mt-8">
              <SectionBadge>{post.category}</SectionBadge>
              <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-white sm:text-6xl">{post.title}</h1>
              <div className="mt-5 flex flex-wrap gap-4 text-sm text-violet-100">
                <span className="flex items-center gap-1"><Calendar size={16} /> {post.date}</span>
                <span className="flex items-center gap-1"><Clock size={16} /> {post.readTime}</span>
              </div>
            </div>
          </Reveal>
        </article>
      </AuroraStage>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-7 text-lg leading-9 text-slate-700">
            {post.content.map((paragraph) => (
              <Reveal key={paragraph}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf8ff] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionBadge light>Related</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold text-slate-950">More Aiwana insights</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.08}>
                <Link to={`/blog/${item.slug}`}>
                  <GlowCard light className="h-full">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">{item.category}</span>
                    <h3 className="mt-3 text-xl font-bold text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.excerpt}</p>
                  </GlowCard>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
