import { projectProofs, site } from './site';

export const aiwanaKnowledgeDocument = `
Aiwana Solution official context

Brand:
- Name: Aiwana Solution
- Tagline: Vision is yours. Execution is Aiwana.
- Public email: ${site.email}
- Public phone: ${site.phone}
- Location: ${site.address}
- Main conversion offer: Free IT Audit
- Core promise: Aiwana works as a complete external IT team so business owners can focus on their business while Aiwana handles technology, digital presence, growth systems and automation.

Core services:
- Website development and redesign
- Software development
- Software maintenance and support
- Complete IT handling as an external IT team
- Social media presence and ongoing maintenance
- SEO, GEO and AEO visibility work
- Meta ads and conversion funnels
- CRM, ERP, HRMS and internal business systems
- AI agents and custom AI automation setup for organizations

AI automation:
- AI Calling Agents for customer calls, appointment booking, lead qualification and support.
- AI Lead Generation Agents for lead capture, lead scoring, follow-ups, CRM updates and sales pipeline support.
- AI WhatsApp Business automation for instant replies, catalogue support, booking confirmations, payment links and customer support.
- AI Appointment Booking for reminders, rescheduling, calendar optimization and no-show reduction.
- AI Superagents for inbox automation, lead management, reporting, scheduling, WhatsApp notifications and multi-tool workflows.
- Aiwana does not promise unrealistic magic. It builds practical automation with human handoff where needed.

Products:
- Business Management Suite includes three separate SaaS products: HRMS, CRM and ERP.
- HRMS is live at hrms.aiwanasolution.com. It manages employee records, attendance, leave, payroll, recruitment, onboarding, performance, documents, reports and employee self-service.
- CRM helps businesses manage leads, customers, follow-ups, pipeline, reminders and sales visibility.
- ERP helps businesses manage operations, inventory/processes, departments, reporting and centralized workflows.
- AI Trip Planner is an AI automation SaaS app that helps users like a tour guide for trip planning, alerts and itinerary support.
- LMS is for tutors, coaching institutes and schools who need their own learning platform. It supports teacher, student and admin roles, courses, lectures, assignments, tests, attendance, AI tutor, digital library, forums, games, leaderboards, analytics and notifications.
- Upcoming product: Aiwana Sales Copilot, a future AI sales-team style copilot for organizations.

Team and company:
- CEO: Shankranand Sarswati.
- Aiwana has specialist teams for software, AI automation, SEO/GEO/AEO, digital marketing, SaaS products, support and maintenance.
- Aiwana is based in Noida, Uttar Pradesh, India and serves businesses that need trustworthy digital execution.

Proof of work:
${projectProofs
  .map(
    (project) => `- ${project.name} (${project.url}): ${project.category}. Business context: ${project.business} Aiwana work: ${project.work} Proof note: ${project.outcome}`
  )
  .join('\n')}

Recommended CTA:
- For most visitors, recommend booking a Free IT Audit.
- The audit reviews website, software needs, social media presence, SEO/GEO/AEO gaps, Meta ads readiness and AI automation opportunities.
`;

const reply = {
  greeting:
    'Hello, welcome to Aiwana Solution. Vision is yours, execution is Aiwana. Ask me about services, products, AI automation, project work, team, pricing approach or the Free IT Audit.',
  services:
    'Aiwana works as your complete external IT team. We handle website development, software development, maintenance, social media, SEO, GEO, AEO, Meta ads, CRM/ERP/HRMS systems, AI agents and custom automation setup.',
  audit:
    'The best first step is a Free IT Audit. Aiwana reviews your website, software needs, social presence, SEO/GEO/AEO gaps, Meta ads readiness and AI automation opportunities, then suggests what to improve first.',
  ai:
    'Aiwana builds practical AI automation: AI calling agents, lead generation agents, WhatsApp automation, appointment booking, CRM follow-ups, inbox workflows, reporting and custom AI agents with human handoff where needed.',
  products:
    'Aiwana products include the Business Management Suite with HRMS, CRM and ERP as separate SaaS apps, plus AI Trip Planner, LMS for education and the upcoming Aiwana Sales Copilot.',
  hrms:
    'Aiwana HRMS is live at hrms.aiwanasolution.com. It manages employees, attendance, leave, payroll, recruitment, onboarding, performance, documents, reports and employee self-service, reducing manual HR workload.',
  lms:
    'Aiwana LMS is for tutors, coaching institutes and schools that need their own learning platform. It supports students, teachers and admins with courses, lectures, tests, assignments, attendance, AI tutor, digital library, games, analytics and notifications.',
  projects:
    'Aiwana project proof includes NXTMobility for EV mobility presence, Kwick for a learning/digital product experience, GoRide PE for EV rental and booking flow, and Iconica Globex for import-export/global trade presence.',
  team:
    'Aiwana is led by CEO Shankranand Sarswati and has specialist teams for software, AI automation, SEO/GEO/AEO, digital marketing, SaaS products, support and maintenance.',
  contact: `You can contact Aiwana at ${site.email}, call ${site.phone}, or request a Free IT Audit from the contact page. Location: ${site.address}.`,
  price:
    'Pricing depends on scope, service package, product customization and automation complexity. Aiwana recommends starting with a Free IT Audit so the right plan can be suggested instead of guessing.',
  fallback:
    'I can help with Aiwana services, Free IT Audit, AI automation, HRMS, CRM, ERP, LMS, project proof, team details, pricing approach and contact information. What do you want to improve first?',
};

export const aiwanaBotSuggestions = [
  'What services do you offer?',
  'Tell me about AI automation',
  'What products does Aiwana have?',
  'Show project proof',
  'How do I book a Free IT Audit?',
];

export function answerAiwanaQuestion(text: string): string {
  const lower = text.toLowerCase();

  if (lower.match(/\b(hello|hi|hey|namaste|start)\b/)) return reply.greeting;
  if (lower.includes('audit') || lower.includes('website check') || lower.includes('free')) return reply.audit;
  if (lower.includes('ai') || lower.includes('automation') || lower.includes('agent') || lower.includes('whatsapp') || lower.includes('calling') || lower.includes('lead')) return reply.ai;
  if (lower.includes('hrms') || lower.includes('attendance') || lower.includes('payroll') || lower.includes('leave')) return reply.hrms;
  if (lower.includes('lms') || lower.includes('school') || lower.includes('teacher') || lower.includes('student') || lower.includes('tutor') || lower.includes('coaching')) return reply.lms;
  if (lower.includes('product') || lower.includes('saas') || lower.includes('crm') || lower.includes('erp') || lower.includes('trip planner') || lower.includes('sales copilot')) return reply.products;
  if (lower.includes('project') || lower.includes('portfolio') || lower.includes('testimonial') || lower.includes('proof') || lower.includes('client') || lower.includes('nxt') || lower.includes('kwick') || lower.includes('goride') || lower.includes('iconica')) return reply.projects;
  if (lower.includes('service') || lower.includes('external it') || lower.includes('it team') || lower.includes('development') || lower.includes('seo') || lower.includes('geo') || lower.includes('aeo') || lower.includes('ads') || lower.includes('marketing')) return reply.services;
  if (lower.includes('team') || lower.includes('about') || lower.includes('ceo') || lower.includes('founder') || lower.includes('shankranand')) return reply.team;
  if (lower.includes('contact') || lower.includes('email') || lower.includes('phone') || lower.includes('call') || lower.includes('location') || lower.includes('address') || lower.includes('noida')) return reply.contact;
  if (lower.includes('price') || lower.includes('cost') || lower.includes('pricing') || lower.includes('budget') || lower.includes('charge')) return reply.price;

  return reply.fallback;
}
