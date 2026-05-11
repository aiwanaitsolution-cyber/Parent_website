import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  BarChart3,
  Bot,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Globe2,
  Headphones,
  Languages,
  Mail,
  MessageCircle,
  PhoneCall,
  Puzzle,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Home as HomeIcon,
  GraduationCap,
  Magnet,
  ClipboardCheck,
  ShoppingCart,
  Target,
  Workflow,
  Zap,
} from 'lucide-react';
import { LeadCaptureForm } from '../components/LeadCaptureForm';
import { SEO } from '../components/SEO';
import { AuroraStage, GlowCard, PrimaryCTA, Reveal, SectionBadge } from '../components/FuturisticUI';

const automationTypes = ['Voice Bot', 'Chat Bot', 'WhatsApp Bot', 'AI Agents', 'AI Solution'];

const aiSolutions = [
  {
    icon: PhoneCall,
    title: 'AI Calling Agents',
    image: '/exteam.png',
    description:
      'Intelligent voice AI that handles customer calls, appointment requests, lead qualification and support conversations 24/7.',
    benefits: ['Handle high call volume', 'Natural human-like conversations', 'Multi-language support', 'Call recording and analytics', 'CRM integration', 'Appointment scheduling'],
    industries: ['Healthcare: appointment reminders, prescription refills, patient queries', 'Real Estate: property inquiries, viewing scheduling, follow-ups', 'E-commerce: order tracking, customer support, product inquiries'],
    roi: 'Target outcome: lower call handling workload, faster response and higher customer satisfaction.',
  },
  {
    icon: Target,
    title: 'AI Lead Generation Agents',
    image: '/ai_bot.png',
    description:
      'Automated lead qualification, nurturing and conversion workflows powered by AI scoring, follow-ups and behavior-based engagement.',
    benefits: ['Automated lead scoring', 'Intelligent follow-up sequences', 'Behavior-based engagement', 'Real-time qualification', 'Predictive analytics', 'Multi-channel outreach'],
    industries: ['B2B SaaS: trial conversion, demo scheduling, upselling', 'Insurance: quote requests, renewals, claim inquiries', 'Education: course enrollment, student queries, campus tours'],
    roi: 'Target outcome: more qualified leads, cleaner pipeline and faster sales cycle.',
  },
  {
    icon: MessageCircle,
    title: 'AI WhatsApp Business',
    image: '/whatsappbot.png',
    description:
      'Automated WhatsApp messaging for customer engagement, sales, support, product discovery, reminders and rich media conversations.',
    benefits: ['Instant automated responses', 'Product catalog support', 'Order processing via WhatsApp', 'Payment link flow', 'Broadcast campaigns', 'Rich media support'],
    industries: ['Retail: order updates, product queries, support', 'Restaurants: menu sharing, order taking, delivery updates', 'Services: booking confirmations, reminders, payments'],
    roi: 'Target outcome: faster response time, higher message engagement and reduced manual chat load.',
  },
  {
    icon: CalendarCheck,
    title: 'AI Appointment Booking',
    image: '/appointment.png',
    description:
      'Smart scheduling system that manages appointments, sends reminders, handles rescheduling and optimizes team calendars.',
    benefits: ['Smart calendar optimization', 'Automated reminders', 'Rescheduling management', 'No-show reduction', 'Multi-location support', 'Team availability sync'],
    industries: ['Medical: patient appointments, doctor scheduling, teleconsultation', 'Salon and Spa: service booking, stylist scheduling, packages', 'Consulting: client meetings, project kickoffs, follow-ups'],
    roi: 'Target outcome: fewer no-shows, cleaner calendar and smoother booking operations.',
  },
];

const superAgentFeatures = [
  'Automate emails and inbox management',
  'Lead follow-ups and CRM updates',
  'WhatsApp and team notifications',
  'Smart scheduling and calendar optimization',
  'Business reporting and analytics',
  'Multi-platform integrations',
];

const superAgentUseCases = [
  { title: 'Inbox Automation', detail: 'Email summaries and reply drafts', icon: Mail },
  { title: 'Lead Management', detail: 'Auto follow-ups and CRM notes', icon: Target },
  { title: 'Travel Planning', detail: 'Alerts, bookings and itinerary support', icon: Sparkles },
  { title: 'Personal Assistant', detail: 'Reservations and reminders', icon: Headphones },
  { title: 'Business Reports', detail: 'Weekly summaries and analytics', icon: BarChart3 },
  { title: 'Calendar Optimization', detail: 'Auto scheduling and reminders', icon: CalendarCheck },
];

const whyAI = [
  { icon: Clock3, title: '24/7 Availability', text: 'Never miss a lead or customer inquiry, even after business hours.' },
  { icon: Zap, title: 'Cost Efficient', text: 'Reduce repetitive operational workload while your business scales.' },
  { icon: Sparkles, title: 'Instant Response', text: 'Give customers quick answers instead of long wait times.' },
  { icon: Workflow, title: 'Scalability', text: 'Handle more conversations, bookings and follow-ups without chaos.' },
  { icon: BarChart3, title: 'Data Insights', text: 'Track lead source, response quality, conversion and bottlenecks.' },
  { icon: Languages, title: 'Human-Like', text: 'Natural conversations with clear human handoff where needed.' },
];

const voiceBenefits = [
  { icon: PhoneCall, text: 'Handle high call volume simultaneously' },
  { icon: Globe2, text: 'Multi-language support' },
  { icon: Puzzle, text: 'CRM integration' },
  { icon: BarChart3, text: 'Instant call recording and analytics' },
  { icon: CalendarCheck, text: 'Appointment scheduling' },
  { icon: Headphones, text: 'Natural human-like conversations' },
];

const voiceIndustries = [
  {
    icon: Stethoscope,
    title: 'Healthcare',
    text: 'Appointment reminders, prescription refills, patient queries',
    tone: 'from-blue-50 to-sky-50 text-blue-700',
  },
  {
    icon: HomeIcon,
    title: 'Real Estate',
    text: 'Property inquiries, viewing scheduling, follow-ups',
    tone: 'from-emerald-50 to-green-50 text-emerald-700',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    text: 'Order tracking, customer support, product inquiries',
    tone: 'from-orange-50 to-amber-50 text-orange-700',
  },
];

const callFlow = ['Customer Calls', 'AI Agent Answers', 'Understands and Responds', 'Schedules or Resolves', 'Records and Analyzes', 'Improved Efficiency'];
const callFlowIcons = [PhoneCall, Bot, MessageCircle, CalendarCheck, BarChart3, ShieldCheck];

const leadBenefits = [
  'Automated lead scoring',
  'Intelligent follow-up sequences',
  'Behavior-based engagement',
  'Real-time qualification',
  'Predictive analytics',
  'Multi-channel outreach',
];

const leadIndustries = [
  { icon: Bot, title: 'B2B SaaS', text: 'Trial conversion, demo scheduling, upselling', tone: 'from-blue-50 to-indigo-50 text-blue-700' },
  { icon: ShieldCheck, title: 'Insurance', text: 'Quote requests, policy renewals, claim inquiries', tone: 'from-emerald-50 to-green-50 text-emerald-700' },
  { icon: GraduationCap, title: 'Education', text: 'Course enrollment, student queries, campus tours', tone: 'from-orange-50 to-amber-50 text-orange-700' },
];

const leadFlow = [
  { icon: Magnet, label: 'Captures Leads' },
  { icon: Bot, label: 'Nurtures' },
  { icon: ClipboardCheck, label: 'Qualifies in Real Time' },
  { icon: BarChart3, label: 'Converts Leads' },
];

function VoiceCallingShowcase() {
  return (
    <Reveal>
      <motion.article
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="relative -mx-4 overflow-hidden bg-white px-4 py-10 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(124,58,237,0.12),transparent_34%),radial-gradient(circle_at_90%_72%,rgba(16,185,129,0.08),transparent_26%)]" />
        <div className="relative text-center">
          <h3 className="text-4xl font-black leading-none tracking-normal text-slate-950 sm:text-6xl">
            <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">AI</span> CALLING AGENTS
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600">
            Intelligent voice AI that handles customer calls 24/7, schedules appointments, qualifies leads and provides support.
          </p>
        </div>

        <div className="relative mt-7 grid items-center gap-6 lg:grid-cols-[250px_minmax(0,1fr)_310px]">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="rounded-2xl border border-violet-100 bg-white/95 p-4 shadow-[0_14px_38px_rgba(88,28,135,0.07)]"
          >
            <div className="mx-auto -mt-7 w-max rounded-lg bg-gradient-to-r from-violet-700 to-blue-600 px-7 py-2 text-base font-black text-white shadow-lg">
              KEY BENEFITS
            </div>
            <div className="mt-5 grid gap-4">
              {voiceBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  animate={{ x: [0, index % 2 ? 3 : -3, 0] }}
                  transition={{ duration: 4 + index * 0.25, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    animate={{ boxShadow: ['0 0 0 0 rgba(124,58,237,0.22)', '0 0 0 8px rgba(124,58,237,0)', '0 0 0 0 rgba(124,58,237,0)'] }}
                    transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.18 }}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-violet-200 text-violet-700"
                  >
                    <benefit.icon size={20} />
                  </motion.div>
                  <p className="text-sm font-semibold leading-5 text-slate-700">{benefit.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="relative min-h-[470px] overflow-hidden bg-transparent">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
              className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-violet-200"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-100/60"
            />
            <motion.img
              src="/aiwana_voice_agent.png"
              alt="Aiwana AI calling agent"
              className="absolute inset-0 z-10 h-full w-full object-contain object-center"
              animate={{ y: [0, -10, 0], scale: [1, 1.025, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              animate={{ opacity: [0.25, 0.65, 0.25], scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-12 left-1/2 z-0 h-16 w-80 -translate-x-1/2 rounded-full bg-violet-400/30 blur-2xl"
            />
          </div>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
            className="rounded-2xl border border-blue-100 bg-white/95 p-4 shadow-[0_14px_38px_rgba(14,165,233,0.07)]"
          >
            <div className="mx-auto -mt-7 w-max rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 px-7 py-2 text-base font-black text-white shadow-lg">
              INDUSTRY APPLICATIONS
            </div>
            <div className="mt-5 grid gap-4">
              {voiceIndustries.map((industry, index) => (
                <motion.div
                  key={industry.title}
                  animate={{ x: [0, index % 2 ? -4 : 4, 0] }}
                  transition={{ duration: 4.5 + index * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                  className={`rounded-2xl bg-gradient-to-r ${industry.tone} p-4`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                      <industry.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-black">{industry.title}</h4>
                      <p className="mt-1 text-sm font-medium leading-5 text-slate-700">{industry.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="relative mt-8 grid items-start gap-3 md:grid-cols-6">
          {callFlow.map((step, index) => {
            const FlowIcon = callFlowIcons[index];
            return (
            <motion.div
              key={step}
              animate={{ y: [0, index % 2 ? 7 : -7, 0] }}
              transition={{ duration: 4.8 + index * 0.2, repeat: Infinity, ease: 'easeInOut' }}
              className="relative px-3 py-2 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-white to-violet-50 text-violet-700 shadow-[0_12px_30px_rgba(88,28,135,0.14)]">
                <FlowIcon size={28} />
              </div>
              <p className="mt-3 text-sm font-bold leading-5 text-slate-700">{step}</p>
              {index < callFlow.length - 1 && (
                <motion.div
                  animate={{ x: [0, 8, 0], opacity: [0.35, 1, 0.35] }}
                  transition={{ duration: 1.8, repeat: Infinity, delay: index * 0.12 }}
                  className="absolute right-[-10px] top-8 hidden text-3xl font-bold text-slate-400 md:block"
                >
                  →
                </motion.div>
              )}
            </motion.div>
            );
          })}
        </div>

        <div className="relative mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-green-50 to-sky-50 p-5 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-2xl font-black text-emerald-700">ROI: lower call handling workload</p>
            <p className="mt-1 text-base font-bold text-emerald-700">faster response and higher customer satisfaction</p>
          </div>
          <div className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-black text-white shadow-lg">Improved Efficiency</div>
        </div>
      </motion.article>
    </Reveal>
  );
}

function LeadGenerationShowcase() {
  return (
    <Reveal>
      <motion.article
        id="ai-lead-generation-agents"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="relative -mx-4 scroll-mt-28 overflow-hidden bg-[#f8fbff] px-4 py-9 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(245,158,11,0.16),transparent_28%),radial-gradient(circle_at_18%_68%,rgba(124,58,237,0.11),transparent_24%),radial-gradient(circle_at_88%_68%,rgba(16,185,129,0.1),transparent_26%)]" />
        <div className="relative text-center">
          <h3 className="text-3xl font-black leading-none tracking-normal text-slate-950 sm:text-5xl">
            <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">AI</span> LEAD GENERATION AGENTS
          </h3>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
            Automated lead qualification, nurturing and conversion powered by advanced AI scoring, follow-ups and predictive analytics.
          </p>
        </div>

        <div className="relative mt-7 grid items-center gap-5 lg:grid-cols-[230px_minmax(0,1fr)_280px]">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="rounded-2xl border border-fuchsia-100 bg-white/95 p-3 shadow-[0_14px_38px_rgba(168,85,247,0.08)]"
          >
            <div className="mx-auto -mt-6 w-max rounded-xl bg-gradient-to-r from-fuchsia-600 to-violet-600 px-5 py-2 text-sm font-black text-white shadow-lg">
              KEY BENEFITS
            </div>
            <div className="mt-4 grid gap-3">
              {leadBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  animate={{ x: [0, index % 2 ? 3 : -3, 0] }}
                  whileHover={{ x: 8, scale: 1.03 }}
                  transition={{ duration: 4 + index * 0.22, repeat: Infinity, ease: 'easeInOut' }}
                  className="group flex cursor-default items-center gap-3 rounded-xl px-2 py-1.5 transition-colors hover:bg-violet-50"
                >
                  <motion.div
                    animate={{ boxShadow: ['0 0 0 0 rgba(147,51,234,0.22)', '0 0 0 8px rgba(147,51,234,0)', '0 0 0 0 rgba(147,51,234,0)'] }}
                    transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.16 }}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-violet-200 text-violet-700 transition-colors group-hover:border-violet-500 group-hover:bg-violet-600 group-hover:text-white"
                  >
                    <CheckCircle2 size={18} />
                  </motion.div>
                  <p className="text-[13px] font-semibold leading-5 text-slate-700 transition-colors group-hover:text-violet-900">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="relative min-h-[390px] overflow-hidden bg-transparent">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
              className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-amber-200"
            />
            <motion.div
              animate={{ scale: [0.96, 1.04, 0.96], opacity: [0.45, 0.75, 0.45] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-100/70 blur-sm"
            />
            <div className="absolute inset-x-0 top-0 bottom-0 z-10 overflow-hidden rounded-[1.75rem] bg-white/20">
              <motion.img
                src="/lagent.png"
                alt="Aiwana AI lead generation agent"
                className="h-full w-full object-cover object-center"
                animate={{ y: [0, -10, 0], scale: [1.02, 1.06, 1.02] }}
                transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,251,255,0.14),transparent_30%,transparent_68%,rgba(248,251,255,0.24))]" />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0], opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.08, rotate: -2 }}
              className="absolute left-[6%] top-[14%] z-20 rounded-2xl bg-white/95 px-4 py-3 text-sm font-black text-amber-600 shadow-[0_16px_40px_rgba(245,158,11,0.18)]"
            >
              Lead Score +92
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0], opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.08, rotate: 2 }}
              className="absolute right-[5%] top-[18%] z-20 rounded-2xl bg-white/95 px-4 py-3 text-sm font-black text-emerald-600 shadow-[0_16px_40px_rgba(16,185,129,0.18)]"
            >
              Demo Ready
            </motion.div>
          </div>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
            className="rounded-2xl border border-blue-100 bg-white/95 p-3 shadow-[0_14px_38px_rgba(14,165,233,0.08)]"
          >
            <div className="mx-auto -mt-6 w-max rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 px-5 py-2 text-sm font-black text-white shadow-lg">
              INDUSTRY APPLICATIONS
            </div>
            <div className="mt-4 grid gap-3">
              {leadIndustries.map((industry, index) => (
                <motion.div
                  key={industry.title}
                  animate={{ x: [0, index % 2 ? -4 : 4, 0] }}
                  whileHover={{ x: -8, scale: 1.03 }}
                  transition={{ duration: 4.5 + index * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                  className={`group cursor-default rounded-2xl bg-gradient-to-r ${industry.tone} p-3 shadow-sm transition-shadow hover:shadow-[0_16px_42px_rgba(37,99,235,0.12)]`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm transition-transform group-hover:scale-110">
                      <industry.icon size={22} />
                    </div>
                    <div>
                      <h4 className="text-sm font-black">{industry.title}</h4>
                      <p className="mt-1 text-[13px] font-medium leading-5 text-slate-700">{industry.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="relative mt-5 overflow-hidden rounded-[1.6rem] border border-violet-100 bg-white px-4 py-7 shadow-[0_18px_60px_rgba(88,28,135,0.08)] sm:px-6">
          <div className="grid gap-5 sm:grid-cols-4">
            {leadFlow.map((step, index) => (
              <motion.div
                key={step.label}
                animate={{ y: [0, index % 2 ? 3 : -3, 0] }}
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ duration: 4.4 + index * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                className="group relative text-center text-slate-950"
              >
                <motion.div
                  animate={{ boxShadow: ['0 0 0 0 rgba(124,58,237,0.18)', '0 0 0 10px rgba(124,58,237,0)', '0 0 0 0 rgba(124,58,237,0)'] }}
                  transition={{ duration: 2.6, repeat: Infinity, delay: index * 0.18 }}
                  className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 transition-colors group-hover:bg-violet-600 group-hover:text-white"
                >
                  <step.icon className="transition-transform group-hover:scale-110" size={23} />
                </motion.div>
                <p className="mt-3 text-sm font-black leading-4 sm:text-base">{step.label}</p>
                {index < leadFlow.length - 1 && (
                  <motion.div
                    animate={{ x: [0, 8, 0], opacity: [0.35, 1, 0.35] }}
                    transition={{ duration: 1.8, repeat: Infinity, delay: index * 0.16 }}
                    className="absolute right-[-18px] top-4 hidden text-3xl font-black text-violet-200 sm:block"
                  >
                    →
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative mt-5 flex flex-col items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-green-50 to-amber-50 p-4 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-xl font-black text-emerald-700 sm:text-2xl">ROI: 300% increase in qualified leads</p>
            <p className="mt-1 text-sm font-bold text-emerald-700 sm:text-base">60% faster sales cycle with automated qualification</p>
          </div>
          <div className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-black text-white shadow-lg">Sales Pipeline Growth</div>
        </div>
      </motion.article>
    </Reveal>
  );
}

export function AIAutomationPage() {
  return (
    <>
      <SEO
        title="AI Automation Services - Voice Bot, Chat Bot, WhatsApp Bot and AI Agents"
        description="Aiwana Solution builds AI calling agents, AI lead generation agents, WhatsApp automation, appointment booking bots and AI superagents for business automation."
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'AI Automation Services by Aiwana Solution',
          serviceType: 'AI automation, AI agents, voice bot, chat bot, WhatsApp automation and appointment booking',
          provider: { '@type': 'Organization', name: 'Aiwana Solution' },
          areaServed: 'India',
        }}
      />

      <AuroraStage>
        <div className="mx-auto grid min-h-[800px] max-w-7xl items-center gap-12 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
          <Reveal>
            <SectionBadge>AI Automation</SectionBadge>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Supercharge your business with AI automation.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-violet-100">
              Intelligent AI agents that work 24/7 to grow your business, respond to customers, qualify leads, book
              appointments, update tools and delight customers with fast service.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {automationTypes.map((type) => (
                <span key={type} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur-xl">
                  {type}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryCTA to="/contact">Get Free AI Demo</PrimaryCTA>
              <Link to="/services" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-xl">
                View all services <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>

          <div className="relative min-h-[560px] [perspective:1200px]">
            <motion.div
              animate={{ y: [0, -14, 0], rotateY: [0, -7, 0, 7, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-x-0 top-6 overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/10 p-5 shadow-[0_34px_130px_rgba(124,58,237,0.34)] backdrop-blur-2xl"
            >
              <img src="/exteam.png" alt="Aiwana AI automation assistant" className="h-[360px] w-full rounded-[2rem] object-cover" />
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {['Email', 'WhatsApp', 'Dashboard', 'Calendar'].map((item, index) => (
                  <motion.div
                    key={item}
                    animate={{ y: [0, index % 2 ? 8 : -8, 0] }}
                    transition={{ duration: 4.4 + index * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                    className="rounded-2xl bg-white/12 px-3 py-3 text-center text-xs font-bold text-white"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </AuroraStage>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionBadge light>AI solutions</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold text-slate-950 sm:text-5xl">
              Automation designed for real calls, chats, leads and bookings.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8">
            {aiSolutions.map((solution, index) => (
              index === 0 ? (
                <VoiceCallingShowcase key={solution.title} />
              ) : index === 1 ? (
                <LeadGenerationShowcase key={solution.title} />
              ) : (
              <Reveal key={solution.title} delay={index * 0.06}>
                <GlowCard light className="p-0">
                  <div className="grid overflow-hidden lg:grid-cols-[0.88fr_1.12fr]">
                    <div className="relative min-h-[360px] overflow-hidden">
                      <img src={solution.image} alt={solution.title} className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-violet-950/88 via-violet-950/18 to-transparent" />
                      <span className="absolute left-6 top-6 rounded-full bg-violet-600 px-4 py-2 text-xs font-bold text-white">AI Solution</span>
                      <motion.div
                        animate={{ y: [0, -8, 0], opacity: [0.65, 1, 0.65] }}
                        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute right-5 top-5 rounded-2xl border border-white/20 bg-white/15 px-4 py-3 text-xs font-bold text-white backdrop-blur-xl"
                      >
                        24/7 Agent
                      </motion.div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <solution.icon className="text-white" size={42} />
                        <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">{solution.title}</h3>
                        <p className="mt-3 max-w-md text-sm leading-6 text-violet-100">{solution.description}</p>
                      </div>
                    </div>
                    <div className="p-7 lg:p-9">
                      <div className="grid gap-6 lg:grid-cols-2">
                        <div>
                          <h4 className="font-bold text-slate-950">Key Benefits</h4>
                          <div className="mt-3 grid gap-2">
                            {solution.benefits.map((benefit) => (
                              <div key={benefit} className="flex gap-2 text-sm text-slate-700">
                                <CheckCircle2 className="mt-0.5 shrink-0 text-violet-600" size={17} />
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-950">Industry Applications</h4>
                          <div className="mt-3 grid gap-2">
                            {solution.industries.map((industry) => (
                              <div key={industry} className="rounded-2xl bg-[#fbf8ff] p-3 text-sm leading-6 text-slate-700">
                                {industry}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 rounded-2xl bg-gradient-to-r from-violet-50 to-sky-50 p-4 text-sm font-bold leading-7 text-violet-900">
                        {solution.roi}
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </Reveal>
              )
            ))}
          </div>
        </div>
      </section>

      <AuroraStage>
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <Reveal>
            <SectionBadge>AI Superagents</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold text-white sm:text-5xl">
              Autonomous agents that do more than respond. They act.
            </h2>
            <p className="mt-5 text-base leading-8 text-violet-100">
              Aiwana Superagents can automate emails, follow-ups, reporting, scheduling and business communication
              across your tools with monitored human handoff.
            </p>
            <div className="mt-8 grid gap-3">
              {superAgentFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-3 rounded-2xl bg-white/10 p-3 text-sm text-violet-50">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-sky-200" size={18} />
                  {feature}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              {superAgentUseCases.map((item, index) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -8, rotateY: 7 }}
                  transition={{ type: 'spring', stiffness: 240, damping: 20 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.08] p-5 text-white shadow-2xl backdrop-blur-xl"
                >
                  <item.icon className="text-violet-200" size={30} />
                  <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-violet-100">{item.detail}</p>
                  <span className="mt-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-sky-100">0{index + 1}</span>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </AuroraStage>

      <section className="bg-[#fbf8ff] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionBadge light>Why AI automation?</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold text-slate-950 sm:text-5xl">
              Experience the transformation AI brings to operations.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyAI.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <GlowCard light className="h-full">
                  <item.icon className="text-violet-600" size={34} />
                  <h3 className="mt-5 text-xl font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(124,58,237,0.12),transparent_26%),radial-gradient(circle_at_86%_68%,rgba(14,165,233,0.12),transparent_30%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_480px] lg:px-8">
          <Reveal className="relative">
            <SectionBadge light>Start your AI journey</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              Book a free consultation to see what AI can automate first.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              We review your calls, WhatsApp flow, lead handling, appointment process, CRM and internal operations, then
              recommend the first automation with the highest business value.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'Voice bot opportunity map',
                'WhatsApp automation flow',
                'Lead qualification logic',
                'Appointment + CRM handoff',
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-violet-100 bg-white p-5 shadow-[0_20px_60px_rgba(88,28,135,0.08)]">
                  <CheckCircle2 className="text-violet-600" size={22} />
                  <p className="mt-3 text-sm font-bold text-slate-900">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="rounded-[2rem] bg-gradient-to-br from-violet-950 via-violet-800 to-sky-700 p-1">
              <LeadCaptureForm type="audit" sourcePage="ai-automation" title="Get Free AI Demo" defaultService="AI Automation Demo" compact />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
