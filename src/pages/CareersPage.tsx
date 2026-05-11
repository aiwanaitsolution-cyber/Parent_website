import { Briefcase, Mail, Users } from 'lucide-react';
import { LeadCaptureForm } from '../components/LeadCaptureForm';
import { SEO } from '../components/SEO';
import { site } from '../lib/site';

export function CareersPage() {
  return (
    <>
      <SEO
        title="Careers - Work With Aiwana Solution"
        description="Explore future career and collaboration opportunities with Aiwana Solution in IT, AI automation, software development and growth systems."
      />

      <section className="bg-slate-950 px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase text-cyan-300">Careers</p>
          <h1 className="mt-4 max-w-4xl break-words text-3xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            We are building a focused network of builders, designers, marketers and AI engineers.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            There are no public openings right now. If your work fits Aiwana's mission, share your profile and we will
            keep it in our talent pool.
          </p>
        </div>
      </section>

      <section className="bg-slate-950 py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            { icon: Briefcase, title: 'Software builders', text: 'React, Node, APIs, dashboards and business systems.' },
            { icon: Users, title: 'Growth operators', text: 'SEO, content, ads, analytics and conversion strategy.' },
            { icon: Mail, title: 'AI automation talent', text: 'AI agents, prompts, workflows, CRM and WhatsApp automation.' },
          ].map((item) => (
            <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <item.icon className="text-cyan-300" size={34} />
              <h2 className="mt-5 text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_460px] lg:px-8">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-5xl">Join the talent pool</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Send your role, experience, portfolio and why you want to work with {site.name}. We will contact you when
              a relevant opportunity opens.
            </p>
          </div>
          <LeadCaptureForm
            type="career-talent"
            sourcePage="careers"
            title="Share your profile"
            defaultService="Career Talent Pool"
            buttonLabel="Submit profile"
            compact
          />
        </div>
      </section>
    </>
  );
}
