import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, BrainCircuit, CheckCircle2, Crown, MapPin, Target, Users, Zap } from 'lucide-react';
import { SEO } from '../components/SEO';
import { AuroraStage, GlowCard, PrimaryCTA, Reveal, SectionBadge } from '../components/FuturisticUI';
import { expertTeams, founderProfile, processSteps, site } from '../lib/site';

export function StartupAboutPage() {
  return (
    <>
      <SEO
        title="About Aiwana Solution - Vision Is Yours, Execution Is Mine"
        description="Aiwana Solution is a Noida based AI and IT company delivering external IT teams, SaaS products and AI automation setup."
      />

      <AuroraStage>
        <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:px-8">
          <Reveal>
            <SectionBadge>About Aiwana</SectionBadge>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-white sm:text-6xl">
              Vision is yours. Execution is mine.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-violet-100">
              Aiwana Solution exists for businesses that have ambition but need a serious execution team for technology,
              growth systems, SaaS products and AI automation.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryCTA to="/contact">Start execution audit</PrimaryCTA>
              <Link to="/services" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-xl">
                View services <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-5">
              {[
                { icon: Target, title: 'Mission', text: 'Make advanced IT, SaaS and AI execution accessible to businesses that want to grow.' },
                { icon: Users, title: 'Model', text: 'Act as an external IT and AI team, not just a one-time website vendor.' },
                { icon: Zap, title: 'Belief', text: 'A business should have a powerful digital system before asking customers to trust it.' },
              ].map((item) => (
                <GlowCard key={item.title}>
                  <div className="flex gap-5">
                    <item.icon className="mt-1 shrink-0 text-violet-200" size={34} />
                    <div>
                      <h2 className="text-2xl font-bold text-white">{item.title}</h2>
                      <p className="mt-2 text-sm leading-7 text-violet-100">{item.text}</p>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </Reveal>
        </div>
      </AuroraStage>

      <section className="relative overflow-hidden bg-white py-24 text-slate-950">
        <div className="absolute left-[-10%] top-10 h-80 w-80 rounded-full bg-violet-100 blur-3xl" />
        <div className="absolute right-[-8%] bottom-10 h-80 w-80 rounded-full bg-sky-100 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <Reveal>
            <SectionBadge light>Founder and execution leadership</SectionBadge>
            <div className="mt-8 overflow-hidden rounded-[2rem] border border-violet-100 bg-white shadow-[0_30px_100px_rgba(88,28,135,0.16)]">
              <div className="relative min-h-[520px] overflow-hidden bg-slate-100">
                <motion.img
                  src="/CEO.jpeg"
                  alt="Shankranand Sarswati, CEO of Aiwana Solution"
                  className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
                  animate={{ scale: [1, 1.025, 1] }}
                  transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  animate={{ opacity: [0.12, 0.22, 0.12], scale: [0.92, 1.05, 0.92] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-0 left-1/2 h-32 w-80 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
                    <Crown size={24} />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-violet-600">{founderProfile.role}</p>
                </div>
                <h2 className="mt-4 text-3xl font-bold text-slate-950">{founderProfile.name}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{founderProfile.statement}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <SectionBadge light>Mission, vision and team model</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
              Aiwana is built like an external IT department for ambitious companies.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Clients do not only need a website. They need people who can understand the business, create software,
              maintain it, grow search presence, run campaigns, build AI agents and keep improving the full digital system.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'Mission: make complete IT execution accessible and accountable.',
                'Vision: every serious business should have AI-ready digital infrastructure.',
                'Promise: vision stays yours, execution becomes Aiwana responsibility.',
                'Approach: strategy, software, growth, automation and maintenance together.',
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-violet-100 bg-white p-4 shadow-[0_14px_38px_rgba(88,28,135,0.08)]">
                  <CheckCircle2 className="mt-1 shrink-0 text-violet-600" size={20} />
                  <p className="text-sm font-semibold leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#fbf8ff] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionBadge light>Expert teams for every sector</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold text-slate-950 sm:text-5xl">
              Every Aiwana service has specialist execution behind it.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {expertTeams.map((team, index) => (
              <Reveal key={team.title} delay={index * 0.06}>
                <GlowCard light className="h-full">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-sky-500 text-white">
                    {index % 2 === 0 ? <Users size={28} /> : <BrainCircuit size={28} />}
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-950">{team.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{team.description}</p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <SectionBadge light>How Aiwana works</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold text-slate-950 sm:text-5xl">Clear execution process, futuristic output.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08}>
                <GlowCard light className="h-full">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-sky-500 text-lg font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-950">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{step.detail}</p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf8ff] py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <Reveal>
            <SectionBadge light>Location</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold text-slate-950 sm:text-5xl">Based in Noida, built for ambitious businesses.</h2>
            <GlowCard light className="mt-8">
              <MapPin className="text-violet-600" size={32} />
              <p className="mt-4 text-sm leading-7 text-slate-700">{site.address}</p>
              <p className="mt-3 text-sm font-semibold text-violet-700">{site.email}</p>
              <p className="mt-1 text-sm text-slate-700">{site.phone}</p>
            </GlowCard>
          </Reveal>
          <Reveal delay={0.1}>
            <iframe
              src="https://www.google.com/maps?q=Alpha%201%20Greater%20Noida%20Uttar%20Pradesh&output=embed"
              title="Aiwana Solution Noida location"
              loading="lazy"
              className="min-h-[420px] w-full rounded-[2rem] border border-violet-100 shadow-[0_24px_80px_rgba(88,28,135,0.12)]"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
