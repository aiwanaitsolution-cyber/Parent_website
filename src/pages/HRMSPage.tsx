import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ExternalLink, ShieldCheck, UsersRound } from 'lucide-react';
import { LeadCaptureForm } from '../components/LeadCaptureForm';
import { SEO } from '../components/SEO';
import { AuroraStage, GlowCard, PrimaryCTA, Reveal, SectionBadge } from '../components/FuturisticUI';
import { hrmsFeatureDetails, hrmsIndustries, hrmsModules } from '../lib/site';

const benefits = [
  'HR workload reduce hota hai',
  'Manual errors kam hote hain',
  'Payroll aur attendance process fast hota hai',
  'Employees ko self-service access milta hai',
  'HR data centralized aur secure rehta hai',
  'Better decision making through reports',
  'Compliance aur documentation easy hota hai',
  'Remote and office teams dono ke liye useful',
];

const faqs = [
  {
    question: 'HRMS kya hota hai?',
    answer:
      'HRMS, Human Resource Management System hota hai jo employee data, attendance, leave, payroll, recruitment aur performance ko digital platform par manage karta hai.',
  },
  {
    question: 'Aiwana HRMS small businesses ke liye suitable hai?',
    answer: 'Haan, Aiwana HRMS startups, SMEs aur growing companies ke liye scalable solution hai.',
  },
  {
    question: 'Kya employees apni leave aur payslip khud access kar sakte hain?',
    answer:
      'Haan, employee self-service portal ke through employees leave apply kar sakte hain, attendance check kar sakte hain aur payslip download kar sakte hain.',
  },
  {
    question: 'Kya payroll automate ho sakta hai?',
    answer: 'Haan, attendance, leave, deductions aur allowances ke basis par payroll processing automate ki ja sakti hai.',
  },
];

export function HRMSPage() {
  return (
    <>
      <SEO
        title="Aiwana HRMS | Human Resource Management System for Businesses"
        description="Aiwana HRMS is a smart HR management software for employee management, attendance, leave, payroll, recruitment, onboarding, performance tracking and HR analytics."
        schema={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Aiwana HRMS',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          url: 'https://hrms.aiwanasolution.com',
          description:
            'Smart HR management software for employee management, attendance, leave, payroll, recruitment, onboarding, performance tracking and HR analytics.',
        }}
      />

      <AuroraStage>
        <div className="mx-auto grid min-h-[780px] max-w-7xl items-center gap-12 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
          <Reveal>
            <SectionBadge>Aiwana HRMS</SectionBadge>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-white sm:text-6xl">
              Smart Human Resource Management System.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-violet-100">
              Employee management, attendance, payroll, leave, recruitment, performance and HR analytics ko ek hi
              cloud platform par manage karein. Aiwana HRMS HR ke daily workload ko automate karta hai.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryCTA to="/contact">Book a Demo</PrimaryCTA>
              <a
                href="https://hrms.aiwanasolution.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-4 text-sm font-bold text-white backdrop-blur-xl transition hover:bg-white/20"
              >
                Open Live HRMS <ExternalLink size={18} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative min-h-[560px] [perspective:1100px]">
              <motion.div
                animate={{ rotateY: [0, 10, 0, -8, 0], rotateX: [0, -4, 0, 5, 0] }}
                transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-x-0 top-6 rounded-[2.5rem] border border-white/15 bg-white/10 p-5 shadow-[0_34px_130px_rgba(124,58,237,0.34)] backdrop-blur-2xl"
              >
                <div className="rounded-[2rem] bg-white p-5 text-slate-950">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-600">HR command dashboard</p>
                      <h2 className="mt-2 text-2xl font-black">Replace manual HR chaos</h2>
                    </div>
                    <UsersRound className="text-violet-600" size={38} />
                  </div>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {['Attendance synced', 'Payroll ready', 'Leave approved', 'New hire onboarded'].map((item, index) => (
                      <motion.div
                        key={item}
                        animate={{ y: [0, index % 2 ? 8 : -8, 0] }}
                        transition={{ duration: 4.6 + index * 0.25, repeat: Infinity, ease: 'easeInOut' }}
                        className="rounded-2xl border border-violet-100 bg-[#fbf8ff] p-4"
                      >
                        <CheckCircle2 className="text-violet-600" size={22} />
                        <p className="mt-3 text-sm font-bold text-slate-900">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-2xl bg-gradient-to-r from-violet-700 via-fuchsia-600 to-sky-500 p-5 text-white">
                    <p className="text-sm font-bold">Employee lifecycle: hiring to exit, all in one platform.</p>
                    <div className="mt-5 flex items-end gap-3">
                      {[42, 68, 54, 82, 76, 95].map((height, index) => (
                        <motion.div
                          key={height}
                          animate={{ height: [`${height * 0.55}px`, `${height}px`, `${height * 0.75}px`] }}
                          transition={{ duration: 2.2, delay: index * 0.14, repeat: Infinity }}
                          className="w-full rounded-full bg-white/70"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </AuroraStage>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-4xl">
            <SectionBadge light>Complete HR software</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold text-slate-950 sm:text-5xl">
              From hiring to payroll, Aiwana HRMS handles the full HR workflow.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Aiwana HRMS ek modern cloud-based HR management solution hai jo employee lifecycle manage karta hai.
              Hiring, onboarding, attendance, payroll, leave, performance tracking and employee self-service, sab ek
              secure platform me.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {hrmsFeatureDetails.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.06}>
                <GlowCard light className="h-full">
                  <ShieldCheck className="text-violet-600" size={32} />
                  <h3 className="mt-5 text-xl font-bold text-slate-950">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf8ff] py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <Reveal>
            <SectionBadge light>Modules</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold text-slate-950 sm:text-5xl">Everything HR needs inside one product.</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {hrmsModules.map((module) => (
                <span key={module} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-[0_12px_35px_rgba(88,28,135,0.08)]">
                  {module}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex gap-3 rounded-2xl bg-white p-4 shadow-[0_18px_50px_rgba(88,28,135,0.08)]">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-violet-600" size={20} />
                  <p className="text-sm font-semibold leading-6 text-slate-700">{benefit}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionBadge light>Industries</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold text-slate-950 sm:text-5xl">Useful for office, remote and growing teams.</h2>
          </Reveal>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {hrmsIndustries.map((industry) => (
              <span key={industry} className="rounded-full border border-violet-100 bg-[#fbf8ff] px-5 py-3 text-sm font-bold text-violet-800">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf8ff] py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_480px] lg:px-8">
          <Reveal>
            <SectionBadge light>FAQ</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold text-slate-950 sm:text-5xl">HRMS questions businesses ask first.</h2>
            <div className="mt-8 grid gap-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-3xl bg-white p-5 shadow-[0_18px_50px_rgba(88,28,135,0.08)]">
                  <h3 className="font-bold text-slate-950">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="rounded-[2rem] bg-gradient-to-br from-violet-950 via-violet-800 to-sky-700 p-1">
              <LeadCaptureForm type="product-demo" sourcePage="hrms" title="Schedule Free HRMS Demo" defaultService="Aiwana HRMS Demo" compact />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
