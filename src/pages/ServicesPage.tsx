import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Infinity, Megaphone, SearchCheck, ShieldCheck, Wrench } from 'lucide-react';
import { LeadCaptureForm } from '../components/LeadCaptureForm';
import { SEO } from '../components/SEO';
import { AuroraStage, FlowLine, GlowCard, OrbitVisual, PrimaryCTA, Reveal, SectionBadge } from '../components/FuturisticUI';
import { servicePillars } from '../lib/site';

const serviceSignals = ['Website', 'Software', 'Maintenance', 'Social', 'SEO', 'GEO', 'AEO', 'Meta Ads', 'AI Agents'];
const growthItems = [
  {
    icon: SearchCheck,
    title: 'SEO + GEO + AEO',
    text: 'Google ranking, generative engine optimization and answer engine visibility so your brand appears where buyers search.',
  },
  {
    icon: Megaphone,
    title: 'Social and Meta ads',
    text: 'Social media presence, campaign pages, creative testing and Meta ads for attention and lead generation.',
  },
  {
    icon: ShieldCheck,
    title: 'Trust maintenance',
    text: 'Continuous updates, fast pages, working forms, consistent content and credible brand signals.',
  },
];

export function ServicesPage() {
  return (
    <>
      <SEO
        title="Services - External IT Team, SEO, GEO, AEO and AI Agents"
        description="Aiwana Solution provides complete IT service: website development, software development, maintenance, social media, SEO, GEO, AEO, Meta ads and AI automation setup."
      />

      <AuroraStage>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(56,189,248,0.12),transparent_26%),radial-gradient(circle_at_22%_70%,rgba(168,85,247,0.16),transparent_30%)]" />
        <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
          <Reveal>
            <SectionBadge>External IT team</SectionBadge>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-white sm:text-6xl">
              Complete IT service, growth presence and AI setup under one team.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-violet-100">
              Website development, software development, maintenance, social media, SEO, GEO, AEO, Meta ads and AI
              agents. Aiwana is the execution team behind your business vision.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryCTA to="/contact">Book Free IT Audit</PrimaryCTA>
              <Link to="/ai-automation" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-xl">
                AI automation page
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <OrbitVisual labels={serviceSignals} />
          </Reveal>
        </div>
      </AuroraStage>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <SectionBadge light>What Aiwana handles</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold text-slate-950 sm:text-5xl">
              Full-stack execution for businesses that want technology and growth together.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {servicePillars.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.06}>
                <GlowCard light className="h-full">
                  <service.icon className="text-violet-600" size={34} />
                  <h3 className="mt-5 text-xl font-bold text-slate-950">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                  <div className="mt-5 grid gap-2">
                    {service.outcomes.map((outcome) => (
                      <div key={outcome} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle2 size={16} className="text-violet-600" />
                        {outcome}
                      </div>
                    ))}
                  </div>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf8ff] py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <Reveal>
            <SectionBadge light>Why presence matters</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold text-slate-950 sm:text-5xl">
              A business does not win online with only a website.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Buyers check your website, Google presence, social activity, AI answers, ads, speed, forms and reviews
              before trusting you. Aiwana maintains the complete presence.
            </p>
          </Reveal>
          <div className="grid gap-5">
            {growthItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <GlowCard light>
                  <div className="flex gap-5">
                    <item.icon className="mt-1 shrink-0 text-violet-600" size={34} />
                    <div>
                      <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                    </div>
                  </div>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionBadge light>Execution flow</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold text-slate-950 sm:text-5xl">How we turn business vision into systems.</h2>
          </Reveal>
          <div className="mt-12">
            <FlowLine items={['Audit digital gaps', 'Design system roadmap', 'Build + launch', 'Maintain + scale']} />
          </div>
        </div>
      </section>

      <AuroraStage>
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_480px] lg:px-8">
          <Reveal>
            <SectionBadge>Free audit</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Let Aiwana audit your website, growth presence and automation readiness.
            </h2>
            <div className="mt-7 flex flex-wrap gap-3">
              {['Website', 'Software', 'Social', 'SEO/GEO/AEO', 'Meta ads', 'AI agents'].map((item) => (
                <span key={item} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-xl">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'Website and funnel clarity',
                'Software and maintenance gaps',
                'SEO/GEO/AEO visibility score',
                'AI automation starting point',
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.08] p-5 text-sm font-bold text-white backdrop-blur-xl">
                  <CheckCircle2 className="mb-3 text-sky-200" size={22} />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <LeadCaptureForm type="audit" sourcePage="services" title="Service audit request" defaultService="Complete IT Handling" compact />
          </Reveal>
        </div>
      </AuroraStage>
    </>
  );
}
