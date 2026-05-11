import {
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarCheck,
  ChartNoAxesCombined,
  CloudCog,
  Code2,
  DatabaseZap,
  GraduationCap,
  LineChart,
  Map,
  Megaphone,
  MessageSquare,
  Plane,
  Rocket,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Wrench,
} from 'lucide-react';

export const site = {
  name: 'Aiwana Solution',
  shortName: 'Aiwana',
  tagline: 'Vision is yours. Execution is Aiwana.',
  email: 'aiwanaitsolution@gmail.com',
  phone: '+91 6203447902',
  phoneHref: 'tel:+916203447902',
  whatsappNumber: '916203447902',
  address: 'Noida, Uttar Pradesh, India',
  baseUrl: 'https://aiwanasolution.com',
  city: 'Noida',
  region: 'Uttar Pradesh',
};

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Products', path: '/products' },
  { name: 'AI Automation', path: '/ai-automation' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export const heroSignals = [
  'External IT Team',
  'Business SaaS Suite',
  'AI Automation Lab',
  'SEO + GEO + AEO',
  'Meta Ads + Social',
  'AI Agents',
];

export const businessPillars = [
  {
    icon: BriefcaseBusiness,
    eyebrow: 'Pillar 01',
    title: 'External IT Team',
    description:
      'Complete IT service for businesses: website development, software development, maintenance, social media presence, SEO, GEO, AEO and Meta ads execution.',
    path: '/services',
    metrics: ['Build', 'Maintain', 'Grow'],
  },
  {
    icon: Rocket,
    eyebrow: 'Pillar 02',
    title: 'Aiwana SaaS Products',
    description:
      'Subscription-ready and custom-buildable software products: Business Management Suite, AI Trip Planner, LMS platform and upcoming Sales Copilot.',
    path: '/products',
    metrics: ['HRMS', 'CRM', 'ERP', 'LMS'],
  },
  {
    icon: BrainCircuit,
    eyebrow: 'Pillar 03',
    title: 'AI Automation Setup',
    description:
      'Custom AI agents and automation workflows that smooth business operations, speed up replies, qualify leads and reduce manual service load.',
    path: '/ai-automation',
    metrics: ['Agents', 'Workflows', 'Autopilot'],
  },
];

export const servicePillars = [
  {
    icon: Code2,
    title: 'Website and Software Development',
    description:
      'Premium websites, portals, dashboards, SaaS MVPs, internal tools, mobile-ready apps and custom software for real business workflows.',
    outcomes: ['Conversion-first UI', 'Admin systems', 'Fast responsive builds'],
  },
  {
    icon: Wrench,
    title: 'Maintenance and Complete IT Handling',
    description:
      'Aiwana becomes your external IT team for updates, hosting support, bug fixes, analytics, performance and ongoing roadmap execution.',
    outcomes: ['Monthly improvements', 'Tech support', 'System ownership'],
  },
  {
    icon: Megaphone,
    title: 'Social Media and Meta Ads',
    description:
      'A strong social presence with content direction, campaign setup, creative testing and Meta ads support for lead generation.',
    outcomes: ['Social trust', 'Lead campaigns', 'Creative experiments'],
  },
  {
    icon: SearchCheck,
    title: 'SEO, GEO and AEO Presence',
    description:
      'Search presence for Google, generative AI answers and answer engines so your business can be discovered where modern buyers search.',
    outcomes: ['Technical SEO', 'Content clusters', 'AI answer visibility'],
  },
  {
    icon: Bot,
    title: 'AI Agents and Custom Automation',
    description:
      'AI calling, WhatsApp automation, lead qualification, support bots, booking flows and custom automations for your organization.',
    outcomes: ['24/7 response', 'CRM sync', 'Service automation'],
  },
];

export const saasProducts = [
  {
    icon: DatabaseZap,
    title: 'Business Management Suite',
    subtitle: 'Three SaaS apps: HRMS, CRM and ERP',
    status: 'Subscription + custom organization build',
    description:
      'A complete business operating suite made of three separate SaaS apps: Aiwana HRMS, Aiwana CRM and Aiwana ERP. Use them individually, together, on subscription, or customize them for your organization.',
    features: [
      'HRMS for employees, attendance, leave and payroll support',
      'CRM for leads, follow-ups, sales pipeline and customer history',
      'ERP for inventory, orders, reports and operational visibility',
      'Role-based dashboards for owners and teams',
    ],
  },
  {
    icon: Plane,
    title: 'AI Trip Planner',
    subtitle: 'Automation SaaS travel guide',
    status: 'AI automation product',
    description:
      'A travel automation app that acts like a smart tour guide: planning, recommendations, reminders and itinerary support on your behalf.',
    features: [
      'AI itinerary planning',
      'Budget and destination suggestions',
      'Travel reminders and route support',
      'Personalized tour guidance experience',
    ],
  },
  {
    icon: GraduationCap,
    title: 'lms.aiwanasolution',
    subtitle: 'Learning Management SaaS',
    status: 'For tutors, coaching centers and schools',
    description:
      'A SaaS LMS for educators who do not have their own platform. Teachers and students get a branded learning system with AI tutor and gamified learning.',
    features: [
      'Teacher and student management',
      'Courses, classes, tests and progress',
      '24/7 live AI tutor support',
      'Cool game-based learning features',
    ],
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Aiwana Sales Copilot',
    subtitle: 'Upcoming AI sales team',
    status: 'Upcoming premium product',
    description:
      'An upcoming copilot that works like a complete AI sales team for organizations: prospecting, follow-ups, lead notes and sales assistance.',
    features: [
      'AI sales follow-up',
      'Lead qualification and summaries',
      'Pipeline assistant',
      'Human team handoff',
    ],
  },
];

export const businessSuiteApps = [
  {
    title: 'Aiwana HRMS',
    slug: '/hrms',
    liveUrl: 'https://hrms.aiwanasolution.com',
    label: 'Live product',
    description:
      'A smart HR management system that handles employee data, attendance, leave, payroll, recruitment, onboarding, performance, documents and HR analytics from one platform.',
    transformation:
      'It reduces dependency on manual HR operations by giving HR teams and employees one automated system for daily workforce management.',
    features: ['Employee management', 'Attendance', 'Leave', 'Payroll', 'Recruitment', 'Onboarding', 'Performance', 'Reports'],
  },
  {
    title: 'Aiwana CRM',
    slug: '/products',
    label: 'SaaS + custom',
    description:
      'A customer relationship SaaS for leads, follow-ups, sales pipeline, customer history, reminders, team notes and conversion tracking.',
    transformation:
      'It transforms scattered leads into a clear sales workflow so teams know who to call, what to send, when to follow up and where revenue is moving.',
    features: ['Lead capture', 'Pipeline', 'Follow-ups', 'Customer timeline', 'Sales reminders', 'Reports'],
  },
  {
    title: 'Aiwana ERP',
    slug: '/products',
    label: 'SaaS + custom',
    description:
      'An enterprise resource planning SaaS for operations, inventory, orders, approvals, departments, reporting and business process visibility.',
    transformation:
      'It helps owners see operations clearly, reduce manual coordination and run business departments through structured workflows.',
    features: ['Operations', 'Inventory', 'Orders', 'Approvals', 'Department data', 'Owner reports'],
  },
];

export const hrmsModules = [
  'Employee Management',
  'Attendance Management',
  'Leave Management',
  'Payroll Management',
  'Recruitment Management',
  'Employee Onboarding',
  'Performance Management',
  'HR Analytics and Reports',
  'Employee Self-Service Portal',
  'Document Management',
  'Shift and Schedule Management',
  'Role-Based Access Control',
  'Asset Management',
  'Exit Management',
];

export const hrmsFeatureDetails = [
  {
    title: 'Employee Management',
    description: 'Employee profiles, documents, job details, department, role, reporting manager, salary info and employment history.',
  },
  {
    title: 'Attendance Management',
    description: 'Daily attendance, check-in and check-out, late marks, overtime, shift timing and monthly attendance reports.',
  },
  {
    title: 'Leave Management',
    description: 'Leave request, approval workflow, leave balance, holiday calendar, paid or unpaid leave and custom policies.',
  },
  {
    title: 'Payroll Management',
    description: 'Salary processing, allowances, deductions, bonuses, payslips, tax details and payroll reports.',
  },
  {
    title: 'Recruitment and Onboarding',
    description: 'Job openings, candidate tracking, interviews, resume database, joining checklist, documents and role assignment.',
  },
  {
    title: 'Performance and Analytics',
    description: 'Goals, KPIs, appraisals, manager feedback, attendance reports, attrition analysis and HR dashboard.',
  },
];

export const hrmsIndustries = [
  'IT Companies',
  'Startups',
  'Manufacturing',
  'Retail',
  'Healthcare',
  'Education Institutes',
  'Consulting Firms',
  'Agencies',
  'SMEs and Enterprises',
];

export const lmsProduct = {
  title: 'Edusphere LMS',
  subtitle: 'A complete academic operating system for modern digital learning.',
  description:
    'A role-based Learning Management System for schools, colleges, coaching institutes and training programs with courses, lectures, assignments, tests, attendance, live classes, AI tutor, library, forums, games, analytics and notifications.',
  roles: [
    'Student: courses, lectures, assignments, tests, AI tutor, forum and progress.',
    'Teacher: course creation, lectures, assignments, grading, attendance, live classes and announcements.',
    'Admin: users, activity, analytics, alerts, announcements and platform operations.',
  ],
  features: [
    'Role-based dashboards',
    'Course and enrollment management',
    'Assignments, tests and grading',
    'Attendance tracking',
    'Live classes and events',
    'Digital library',
    'AI tutor support',
    'Discussion forum',
    'Gamified learning',
    'Leaderboards and badges',
    'Analytics and activity logs',
    'JWT-secured API architecture',
  ],
};

export const automationWorkflows = [
  {
    icon: MessageSquare,
    title: 'AI Lead Capture',
    description: 'Capture website, WhatsApp, social and ad leads instantly with structured business context.',
  },
  {
    icon: Users,
    title: 'AI Sales and Support Agents',
    description: 'Agents answer queries, qualify prospects, book calls and hand over serious opportunities.',
  },
  {
    icon: Workflow,
    title: 'Organization Workflow Automation',
    description: 'Automate service requests, approvals, reminders, reports, onboarding and internal processes.',
  },
  {
    icon: CloudCog,
    title: 'Tool Integrations',
    description: 'Connect forms, CRM, Sheets, WhatsApp, email, dashboards and custom software into one flow.',
  },
  {
    icon: CalendarCheck,
    title: 'AI Booking System',
    description: 'Let AI collect requirements and preferred slots before your team joins the conversation.',
  },
  {
    icon: LineChart,
    title: 'Automation Analytics',
    description: 'Track response quality, lead source, conversion movement and operational bottlenecks.',
  },
];

export const processSteps = [
  { title: 'Vision', detail: 'You explain business goals, services, products, buyers and operational pain points.' },
  { title: 'Blueprint', detail: 'Aiwana designs the website, software, SEO/GEO/AEO map and automation roadmap.' },
  { title: 'Execution', detail: 'We build, animate, integrate, launch, maintain and improve the complete digital system.' },
  { title: 'Scale', detail: 'We add SaaS, AI agents, campaigns, reporting and smarter workflows as the business grows.' },
];

export const trustStats = [
  { label: 'Primary promise', value: 'Complete IT' },
  { label: 'Product ecosystem', value: '4 SaaS lines' },
  { label: 'Growth layer', value: 'SEO/GEO/AEO' },
  { label: 'Automation layer', value: 'AI agents' },
];

export const founderProfile = {
  name: 'Shankranand Sarswati',
  role: 'CEO, Aiwana Solution',
  statement:
    'I lead Aiwana with one clear belief: business owners should focus on vision, while a serious technology team handles execution, automation, growth systems and long-term maintenance.',
  initials: 'SS',
};

export const expertTeams = [
  {
    title: 'Website and Software Team',
    description: 'Frontend, backend, dashboards, portals, SaaS MVPs, mobile-ready interfaces and production maintenance.',
  },
  {
    title: 'AI Automation Team',
    description: 'AI agents, WhatsApp automation, calling flows, lead qualification, booking systems and internal workflow automation.',
  },
  {
    title: 'SEO, GEO and AEO Team',
    description: 'Technical SEO, content clusters, schema, local visibility, answer engine optimization and AI-search discoverability.',
  },
  {
    title: 'Digital Marketing Team',
    description: 'Social media presence, Meta ads, creative testing, campaign funnels, analytics and conversion improvement.',
  },
  {
    title: 'SaaS Product Team',
    description: 'HRMS, CRM, ERP, LMS, AI Trip Planner and upcoming Sales Copilot product planning and delivery.',
  },
  {
    title: 'Support and Maintenance Team',
    description: 'Monthly improvements, uptime checks, bug fixes, hosting coordination, reporting and roadmap execution.',
  },
];

export const proofCards = [
  {
    icon: ShieldCheck,
    title: 'Trust-building digital presence',
    description: 'Premium UI, clear service model, working forms, SEO structure and consistent Aiwana identity.',
  },
  {
    icon: Map,
    title: 'Business roadmap clarity',
    description: 'The site explains what Aiwana handles first, what products exist and where AI automation fits.',
  },
  {
    icon: Sparkles,
    title: 'Highly animated but conversion-first',
    description: 'Motion creates a futuristic AI-company feeling while CTA, content and service clarity stay visible.',
  },
];

export const projectProofs = [
  {
    icon: Rocket,
    name: 'NXTMobility',
    url: 'https://www.nxtemobility.com/',
    category: 'EV manufacturing and mobility',
    business:
      'Electric vehicle brand with 2-wheeler, 3-wheeler, loader, dealership and test-ride discovery needs.',
    work:
      'Structured product discovery, catalogue-style browsing, test ride intent, dealer CTA flow and a credibility-first EV brand presence.',
    outcome:
      'Helped the business present its EV range, features and enquiry paths in a way customers and dealers can understand quickly.',
  },
  {
    icon: GraduationCap,
    name: 'Kwick',
    url: 'https://kwick.in/',
    category: 'Learning and digital product',
    business:
      'Digital learning/product experience where users need fast discovery, clear value and a simple product journey.',
    work:
      'Built a clean digital experience focused on product clarity, responsive screens and quick user understanding.',
    outcome:
      'Turned the idea into a usable web presence that communicates the product without making users search for the core value.',
  },
  {
    icon: Map,
    name: 'GoRide PE',
    url: 'https://goridepe.com/',
    category: 'EV rental and booking platform',
    business:
      'EV rental platform where booking, vehicle discovery and trust signals matter before a customer takes action.',
    work:
      'Created a booking-oriented web flow with service positioning, rental context and conversion-ready navigation.',
    outcome:
      'Gave the mobility product a clearer online funnel so visitors can understand the offering and move toward enquiry/booking.',
  },
  {
    icon: BriefcaseBusiness,
    name: 'Iconica Globex',
    url: 'https://iconicaglobex.com/',
    category: 'Import, export and global trade',
    business:
      'Trade-focused business where credibility, service clarity and global supply-chain positioning are important.',
    work:
      'Designed a professional corporate presence around service trust, business identity and clear contact paths.',
    outcome:
      'Made the company feel more credible online for prospects evaluating import/export and trading capabilities.',
  },
];

export const blogPosts = [
  {
    slug: 'complete-it-team-for-business-growth',
    title: 'Why a Complete External IT Team Helps Businesses Grow Faster',
    category: 'Digital Transformation',
    author: 'Aiwana Strategy Team',
    image: '/appointment.png',
    date: '2026-05-10',
    readTime: '7 min read',
    excerpt:
      'Website, software, maintenance, SEO, social media and automation work better when one accountable team owns the full digital system.',
    content: [
      'Most businesses do not fail digitally because of one bad website. They struggle because website, social media, ads, SEO, CRM and support are disconnected.',
      'An external IT team gives the business one execution partner. The team can build the website, maintain software, improve performance, publish content, run campaigns and connect leads to a CRM.',
      'For a company like Aiwana Solution, the goal is simple: your vision stays with you, execution moves to a team that understands technology, marketing and automation together.',
    ],
  },
  {
    slug: 'seo-geo-aeo-presence-for-modern-brands',
    title: 'SEO, GEO and AEO: Why Modern Businesses Need More Than Google Ranking',
    category: 'SEO/GEO/AEO',
    author: 'Tech Insights',
    image: '/whatsappbot.png',
    date: '2026-05-10',
    readTime: '8 min read',
    excerpt:
      'Search is changing. Brands need visibility on Google, AI-generated answers and answer engines where buyers ask direct questions.',
    content: [
      'Traditional SEO is still important, but buyers now also ask AI tools and answer engines for recommendations. This creates the need for GEO and AEO alongside SEO.',
      'A strong presence needs technical SEO, structured service pages, helpful blog content, schema markup, fast pages and consistent brand information.',
      'For Aiwana clients, growth content should not be random posts. It should map business services, customer questions, locations, product categories and conversion intent.',
    ],
  },
  {
    slug: 'ai-automation-setup-for-smooth-business-operations',
    title: 'How AI Automation Makes Business Operations Smoother',
    category: 'AI Automation',
    author: 'Automation Lab',
    image: '/ai_bot.png',
    date: '2026-05-10',
    readTime: '9 min read',
    excerpt:
      'AI agents can capture leads, answer FAQs, book meetings, update CRM, send reminders and reduce manual service load.',
    content: [
      'AI automation is most useful when it removes repetitive operational friction. A good AI setup starts with lead intake, support questions, booking requests or internal reporting.',
      'The right automation does not replace your team. It helps your team respond faster, stay organized and spend more time on high-value decisions.',
      'Aiwana builds automation around your organization: tools, forms, WhatsApp, CRM, Sheets, dashboards and human handoff rules.',
    ],
  },
  {
    slug: 'business-management-suite-hrms-crm-erp',
    title: 'Why HRMS, CRM and ERP Matter for Growing Organizations',
    category: 'SaaS Products',
    author: 'Product Team',
    image: '/Aiwana-logo.png',
    date: '2026-05-10',
    readTime: '7 min read',
    excerpt:
      'A business management suite gives owners clarity across people, customers, operations and reporting.',
    content: [
      'When a company grows, spreadsheets and chats stop being enough. HRMS, CRM and ERP systems create structure for employees, leads, orders, vendors and reporting.',
      'Aiwana Business Management Suite is designed around this need. It can be used on subscription or customized for an organization that needs a specific workflow.',
      'The biggest value is visibility. Owners can see what is happening, teams know what to do next and customers get a more reliable experience.',
    ],
  },
  {
    slug: 'social-media-meta-ads-for-trust-and-leads',
    title: 'Why Social Media and Meta Ads Matter for Local Business Trust',
    category: 'Digital Transformation',
    author: 'Growth Team',
    image: '/appointment.png',
    date: '2026-05-10',
    readTime: '6 min read',
    excerpt:
      'Strong social presence, remarketing and campaign systems make a business look alive, searchable and ready for buyers.',
    content: [
      'A customer rarely trusts a business from one page alone. They check social presence, recent activity, reviews, offers, content quality and response speed.',
      'Meta ads work best when the website, forms, WhatsApp, CRM and follow-up process are already aligned. Otherwise paid traffic leaks away.',
      'Aiwana connects social media, ads, landing pages, lead capture and automation so every campaign has a stronger chance to convert.',
    ],
  },
  {
    slug: 'lms-aiwana-platform-for-coaching-schools',
    title: 'How an LMS SaaS Helps Tutors, Coaching Centers and Schools Launch Faster',
    category: 'SaaS Products',
    author: 'Aiwana Product Team',
    image: '/ai_bot.png',
    date: '2026-05-10',
    readTime: '8 min read',
    excerpt:
      'lms.aiwanasolution gives educators a branded platform with classes, students, tests, progress, gamification and AI tutor support.',
    content: [
      'Many tutors and coaching centers want their own digital platform but do not want to build one from zero. A SaaS LMS solves that gap.',
      'With LMS, teachers can manage students, courses, lessons, tests, progress and learning support in one organized environment.',
      'Aiwana plans LMS with modern learning features such as gamified experience and 24/7 AI tutor support so students get help beyond classroom hours.',
    ],
  },
];

export const blogCategories = ['All', 'AI Automation', 'SEO/GEO/AEO', 'SaaS Products', 'Digital Transformation'];

export type LeadType =
  | 'contact'
  | 'audit'
  | 'appointment'
  | 'product-demo'
  | 'newsletter'
  | 'career-talent';
