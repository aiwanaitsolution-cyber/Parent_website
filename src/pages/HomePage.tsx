import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ExternalLink, Sparkles } from 'lucide-react';
import { LeadCaptureForm } from '../components/LeadCaptureForm';
import { SEO } from '../components/SEO';
import { AuroraStage, FlowLine, GlowCard, PrimaryCTA, Reveal, SectionBadge } from '../components/FuturisticUI';
import { businessPillars, heroSignals, processSteps, projectProofs, proofCards, saasProducts, servicePillars, site, trustStats } from '../lib/site';

export function HomePage() {
  return (
    <>
      <SEO
        title="Aiwana Solution - External IT Team, SaaS Products and AI Automation"
        description="Aiwana Solution builds complete IT systems, SaaS products, SEO/GEO/AEO growth engines and AI automation for modern businesses."
      />

      <AuroraStage>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(124,58,237,0.22),transparent_26%),radial-gradient(circle_at_80%_36%,rgba(14,165,233,0.18),transparent_28%),linear-gradient(115deg,rgba(255,255,255,0.04),transparent_34%,rgba(56,189,248,0.08))]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.05)_45%,transparent_58%)] opacity-70" />
        <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-violet-100 backdrop-blur-xl"
            >
              <Sparkles size={18} />
              Your complete external IT team for business growth
            </motion.div>
            <h1 className="mt-7 max-w-5xl text-4xl font-bold leading-[1.04] tracking-normal text-white sm:text-6xl lg:text-7xl">
              Focus on business.
              <span className="block bg-gradient-to-r from-violet-200 via-fuchsia-200 to-sky-200 bg-clip-text text-transparent">
                IT execution is ours.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              You do not need to hire a separate IT team for website, software, maintenance, social media, SEO, GEO,
              AEO, Meta ads and AI automation. Aiwana works as your external IT team and executes according to your vision.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {['No in-house IT hiring stress', 'Website to automation ownership', 'Growth + software under one team'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.22 + index * 0.08 }}
                  className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-3 py-3 text-xs font-semibold text-violet-50 backdrop-blur-xl"
                >
                  <CheckCircle2 size={16} className="shrink-0 text-sky-200" />
                  {item}
                </motion.div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryCTA to="/contact">Start Free IT Audit</PrimaryCTA>
              <Link
                to="/products"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/20 sm:w-auto sm:px-7"
              >
                Explore SaaS Products <ArrowRight size={18} />
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {trustStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + index * 0.07 }}
                  className="rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl"
                >
                  <div className="text-lg font-bold text-white">{stat.value}</div>
                  <div className="mt-1 text-xs leading-5 text-violet-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <div className="relative mx-auto min-h-[560px] max-w-[620px]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-10 rounded-full border border-dashed border-violet-200/25"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-24 rounded-full border border-sky-200/18"
              />
              <div className="absolute inset-0 rounded-[3rem] bg-[radial-gradient(circle_at_50%_60%,rgba(168,85,247,0.48),transparent_38%),radial-gradient(circle_at_45%_45%,rgba(14,165,233,0.22),transparent_45%)] blur-2xl" />
              <motion.div
                animate={{ y: [0, -18, 0], scale: [1, 1.02, 1], rotateY: [0, -5, 0, 5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-x-10 top-20 z-10 overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/10 p-5 shadow-[0_30px_120px_rgba(124,58,237,0.35)] backdrop-blur-2xl"
              >
                <div className="relative h-[360px] overflow-hidden rounded-[1.8rem] bg-[#120623]">
                  <img src="/exteam.png" alt="Aiwana external IT team automation visual" className="absolute inset-0 h-full w-full object-cover object-center drop-shadow-[0_30px_70px_rgba(147,51,234,0.35)]" />
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-950/10 via-transparent to-sky-950/25" />
                  <div className="absolute bottom-0 right-0 h-36 w-44 bg-gradient-to-br from-transparent via-[#25134b]/70 to-[#25134b]/95 backdrop-blur-[1px]" />
                </div>
                <div className="pointer-events-none absolute inset-x-10 bottom-12 h-16 rounded-full bg-violet-300/30 blur-2xl" />
              </motion.div>
              <motion.div
                animate={{ x: [0, 10, 0], y: [0, -8, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-16 left-0 z-30 w-56 rounded-3xl border border-white/20 bg-white/15 p-4 text-white shadow-2xl backdrop-blur-xl"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-100">Execution board</p>
                <div className="mt-3 grid gap-2">
                  {['Website live', 'SEO/GEO/AEO running', 'AI agent connected'].map((item) => (
                    <div key={item} className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-xs font-semibold">
                      <span className="h-2 w-2 rounded-full bg-emerald-300" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
              <div className="absolute left-3 right-3 top-0 z-30 flex flex-wrap justify-center gap-3">
                {heroSignals.map((signal, index) => (
                  <motion.div
                    key={signal}
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: [0, index % 2 === 0 ? -5 : 5, 0] }}
                    transition={{ delay: 0.45 + index * 0.06, y: { duration: 4 + index * 0.18, repeat: Infinity, ease: 'easeInOut' } }}
                    className="rounded-2xl border border-white/20 bg-white/15 px-4 py-3 text-xs font-bold text-white shadow-[0_18px_55px_rgba(15,23,42,0.22)] backdrop-blur-xl sm:text-sm"
                  >
                    {signal}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AuroraStage>

      <section className="relative overflow-hidden bg-white py-24 text-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(124,58,237,0.12),transparent_28%),radial-gradient(circle_at_90%_70%,rgba(14,165,233,0.12),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionBadge light>Aiwana ecosystem</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl">
              One futuristic company. Three business engines.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              The site now communicates exactly what Aiwana does: execution, products and automation.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {businessPillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.08}>
                <GlowCard light className="h-full">
                  <pillar.icon className="text-violet-600" size={38} />
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-violet-500">{pillar.eyebrow}</p>
                  <h3 className="mt-3 text-2xl font-bold text-slate-950">{pillar.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{pillar.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {pillar.metrics.map((metric) => (
                      <span key={metric} className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
                        {metric}
                      </span>
                    ))}
                  </div>
                  <Link to={pillar.path} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-violet-700">
                    Explore <ArrowRight size={16} />
                  </Link>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf8ff] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <SectionBadge light>External IT team</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
              We build, maintain and grow your complete digital presence.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {servicePillars.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.06}>
                <GlowCard light className="h-full p-5">
                  <service.icon className="text-violet-600" size={32} />
                  <h3 className="mt-5 text-lg font-bold text-slate-950">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AuroraStage>
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <SectionBadge>Product universe</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-5xl">
              Aiwana SaaS products are not side features. They are a business ecosystem.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {saasProducts.map((product, index) => (
              <Reveal key={product.title} delay={index * 0.08}>
                <GlowCard className="h-full">
                  <product.icon className="text-violet-200" size={36} />
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.22em] text-sky-200">{product.subtitle}</p>
                  <h3 className="mt-3 text-2xl font-bold text-white">{product.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-violet-100">{product.description}</p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </AuroraStage>

      <section className="bg-white py-24 text-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionBadge light>Execution system</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl">Vision to execution, without chaos.</h2>
          </Reveal>
          <div className="mt-12">
            <FlowLine items={processSteps.map((step) => `${step.title}: ${step.detail}`)} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fbf8ff] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(124,58,237,0.10),transparent_28%),radial-gradient(circle_at_82%_75%,rgba(14,165,233,0.10),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionBadge light>Selected project proof</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
              Real businesses we have helped move online.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              These project snapshots show how Aiwana thinks: understand the business, create a clear digital experience,
              and make the website work as a conversion system.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {projectProofs.map((project, index) => (
              <Reveal key={project.name} delay={index * 0.06}>
                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -8, rotateX: 2, rotateY: index % 2 ? -2 : 2 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                  className="group block h-full rounded-[2rem] border border-violet-100 bg-white p-6 shadow-[0_20px_70px_rgba(88,28,135,0.09)]"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <motion.div
                        animate={{ y: [0, -5, 0], boxShadow: ['0 0 0 0 rgba(124,58,237,0.16)', '0 0 0 10px rgba(124,58,237,0)', '0 0 0 0 rgba(124,58,237,0)'] }}
                        transition={{ duration: 3.2, repeat: Infinity, delay: index * 0.2 }}
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-violet-600"
                      >
                        <project.icon size={27} />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-black text-slate-950">{project.name}</h3>
                        <p className="mt-1 text-sm font-bold text-violet-600">{project.category}</p>
                      </div>
                    </div>
                    <ExternalLink className="text-slate-300 transition-colors group-hover:text-violet-600" size={22} />
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl bg-[#fbf8ff] p-4">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-600">Business</p>
                      <p className="mt-3 text-sm leading-6 text-slate-700">{project.business}</p>
                    </div>
                    <div className="rounded-2xl bg-sky-50 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-sky-700">Aiwana work</p>
                      <p className="mt-3 text-sm leading-6 text-slate-700">{project.work}</p>
                    </div>
                    <div className="rounded-2xl bg-emerald-50 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">Proof note</p>
                      <p className="mt-3 text-sm leading-6 text-slate-700">{project.outcome}</p>
                    </div>
                  </div>
                </motion.a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf8ff] py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_480px] lg:px-8">
          <Reveal>
            <SectionBadge light>Conversion offer</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
              Start with a free IT, SEO and automation audit.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              We review your website, software needs, social presence, SEO/GEO/AEO gaps, Meta ads readiness and AI
              automation opportunities.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {proofCards.map((card) => (
                <div key={card.title} className="rounded-3xl bg-white p-5 shadow-[0_20px_60px_rgba(88,28,135,0.1)]">
                  <card.icon className="text-violet-600" size={28} />
                  <p className="mt-3 text-sm font-bold text-slate-950">{card.title}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="rounded-[2rem] bg-gradient-to-br from-violet-950 via-violet-800 to-sky-700 p-1">
              <LeadCaptureForm type="audit" sourcePage="home" title="Request Free IT Audit" defaultService="Free IT Audit" compact />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
