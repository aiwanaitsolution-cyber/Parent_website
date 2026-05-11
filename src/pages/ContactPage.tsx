import { FormEvent, useState } from 'react';
import { CalendarCheck, Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react';
import { LeadCaptureForm } from '../components/LeadCaptureForm';
import { SEO } from '../components/SEO';
import { AuroraStage, GlowCard, Reveal, SectionBadge } from '../components/FuturisticUI';
import { site } from '../lib/site';

function BookMeetingForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    date: '',
    time: '',
    topic: 'Free IT Audit Meeting',
    agenda: '',
  });

  const update = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Meeting Request - ${form.topic} - ${form.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        `Company: ${form.company}`,
        `Preferred Date: ${form.date}`,
        `Preferred Time: ${form.time}`,
        `Meeting Topic: ${form.topic}`,
        '',
        `Agenda / Requirement:`,
        form.agenda,
      ].join('\n'),
    );
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${site.email}&su=${subject}&body=${body}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <form onSubmit={submit} className="rounded-[2rem] border border-violet-100 bg-white p-6 shadow-[0_26px_80px_rgba(88,28,135,0.14)]">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-sky-500 text-white">
          <CalendarCheck size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-950">Book a meeting</h3>
          <p className="text-sm text-slate-500">Opens Gmail with your meeting request ready.</p>
        </div>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {[
          ['name', 'Name *', 'text'],
          ['email', 'Email *', 'email'],
          ['phone', 'Phone', 'tel'],
          ['company', 'Company', 'text'],
          ['date', 'Preferred date', 'date'],
          ['time', 'Preferred time', 'time'],
        ].map(([field, label, type]) => (
          <label key={field} className="block">
            <span className="mb-2 block text-sm font-medium text-slate-600">{label}</span>
            <input
              required={field === 'name' || field === 'email'}
              type={type}
              value={form[field as keyof typeof form]}
              onChange={(event) => update(field as keyof typeof form, event.target.value)}
              className="w-full rounded-xl border border-violet-100 bg-[#fbf8ff] px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
            />
          </label>
        ))}
      </div>
      <label className="mt-4 block">
        <span className="mb-2 block text-sm font-medium text-slate-600">Meeting topic</span>
        <select
          value={form.topic}
          onChange={(event) => update('topic', event.target.value)}
          className="w-full rounded-xl border border-violet-100 bg-[#fbf8ff] px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
        >
          <option>Free IT Audit Meeting</option>
          <option>AI Automation Demo</option>
          <option>HRMS / CRM / ERP Demo</option>
          <option>Website + SEO Growth Plan</option>
          <option>Custom Software Discussion</option>
        </select>
      </label>
      <label className="mt-4 block">
        <span className="mb-2 block text-sm font-medium text-slate-600">Agenda</span>
        <textarea
          rows={4}
          value={form.agenda}
          onChange={(event) => update('agenda', event.target.value)}
          className="w-full rounded-xl border border-violet-100 bg-[#fbf8ff] px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
        />
      </label>
      <button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-sky-500 px-5 py-3 text-sm font-bold text-white shadow-[0_16px_42px_rgba(124,58,237,0.25)]">
        <Send size={18} />
        Send meeting request via Gmail
      </button>
    </form>
  );
}

export function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Aiwana Solution - Free IT, SaaS and AI Automation Audit"
        description="Contact Aiwana Solution for external IT team, SaaS product consultation, SEO/GEO/AEO growth, Meta ads and AI automation setup."
      />

      <AuroraStage>
        <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <Reveal>
            <SectionBadge>Start execution</SectionBadge>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-white sm:text-6xl">
              Tell us your vision. Aiwana will plan the execution.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-violet-100">
              Request an audit for complete IT handling, SaaS product setup, SEO/GEO/AEO, social media, Meta ads or AI
              automation.
            </p>
            <div className="mt-8 grid gap-4">
              {[
                { icon: Mail, text: site.email, href: `mailto:${site.email}` },
                { icon: Phone, text: site.phone, href: site.phoneHref },
              ].map((item) => (
                <a key={item.text} href={item.href} className="flex items-center gap-4 rounded-3xl border border-white/15 bg-white/10 p-5 text-white backdrop-blur-xl">
                  <item.icon className="text-violet-200" size={24} />
                  {item.text}
                </a>
              ))}
              <div className="flex items-start gap-4 rounded-3xl border border-white/15 bg-white/10 p-5 text-white backdrop-blur-xl">
                <MapPin className="mt-1 text-violet-200" size={24} />
                {site.address}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-xl">
              <LeadCaptureForm type="audit" sourcePage="contact" title="Free IT + AI audit request" defaultService="Free IT Audit" showDateFields />
            </div>
          </Reveal>
        </div>
      </AuroraStage>

      <section className="relative overflow-hidden bg-white py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(124,58,237,0.1),transparent_28%),radial-gradient(circle_at_88%_70%,rgba(14,165,233,0.1),transparent_32%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <Reveal>
            <GlowCard light>
              <Sparkles className="text-violet-600" size={34} />
              <h2 className="mt-5 text-3xl font-bold text-slate-950">What happens after you submit?</h2>
              <div className="mt-6 grid gap-4 text-sm leading-7 text-slate-600">
                <p>1. We review your business, current website and system requirement.</p>
                <p>2. We identify whether you need external IT support, SaaS product setup or AI automation.</p>
                <p>3. We share the next-step roadmap for execution.</p>
              </div>
            </GlowCard>
          </Reveal>
          <Reveal delay={0.1}>
            <iframe
              src="https://www.google.com/maps?q=Alpha%201%20Greater%20Noida%20Uttar%20Pradesh&output=embed"
              title="Aiwana Solution location"
              loading="lazy"
              className="min-h-[420px] w-full rounded-[2rem] border border-violet-100 shadow-[0_24px_80px_rgba(88,28,135,0.12)]"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-[#fbf8ff] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <Reveal>
            <SectionBadge light>Meeting request</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">Book a focused execution call.</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Choose a date, time and agenda. The form opens Gmail with a ready meeting request to Aiwana, so your team
              can send it directly.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <BookMeetingForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
