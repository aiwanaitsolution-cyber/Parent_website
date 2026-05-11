import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Crown, ExternalLink, Sparkles } from 'lucide-react';
import { LeadCaptureForm } from '../components/LeadCaptureForm';
import { SEO } from '../components/SEO';
import { AuroraStage, GlowCard, PrimaryCTA, Reveal, SectionBadge } from '../components/FuturisticUI';
import { businessSuiteApps, lmsProduct, saasProducts } from '../lib/site';

export function ProductsPage() {
  return (
    <>
      <SEO
        title="Products - HRMS, CRM, ERP, AI Trip Planner, LMS and Sales Copilot"
        description="Aiwana SaaS products include separate HRMS, CRM and ERP apps, AI Trip Planner, LMS platform and upcoming AI Sales Copilot."
      />

      <AuroraStage>
        <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <Reveal>
            <SectionBadge>Aiwana products</SectionBadge>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-white sm:text-6xl">
              SaaS products that run teams, customers, operations and learning.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-violet-100">
              Business Management Suite is not one generic app. It includes three separate SaaS products: HRMS, CRM and
              ERP. Along with AI Trip Planner, LMS and upcoming Sales Copilot, Aiwana becomes a real product ecosystem.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryCTA to="/contact">Request product consultation</PrimaryCTA>
              <a
                href="https://hrms.aiwanasolution.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-4 text-sm font-bold text-white backdrop-blur-xl transition hover:bg-white/20"
              >
                Open HRMS Live <ExternalLink size={18} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative min-h-[560px] [perspective:1200px]">
              <motion.div
                animate={{ rotateY: [0, -8, 0, 8, 0], rotateX: [0, 4, 0, -3, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-x-4 top-6 rounded-[2.5rem] border border-white/15 bg-white/10 p-5 shadow-[0_34px_130px_rgba(124,58,237,0.34)] backdrop-blur-2xl [transform-style:preserve-3d]"
              >
                <div className="rounded-[2rem] bg-white p-5 text-slate-950 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-600">Business Suite</p>
                      <h2 className="mt-2 text-2xl font-black">HRMS + CRM + ERP</h2>
                    </div>
                    <div className="rounded-2xl bg-violet-600 px-4 py-2 text-xs font-bold text-white">SaaS</div>
                  </div>
                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    {businessSuiteApps.map((app, index) => (
                      <motion.div
                        key={app.title}
                        animate={{ y: [0, index % 2 ? 10 : -10, 0] }}
                        transition={{ duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }}
                        className="rounded-2xl border border-violet-100 bg-[#fbf8ff] p-4"
                      >
                        <p className="text-lg font-black text-slate-950">{app.title.replace('Aiwana ', '')}</p>
                        <p className="mt-2 text-xs leading-5 text-slate-600">{app.transformation}</p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6 h-28 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-sky-500 p-4 text-white">
                    <p className="text-sm font-bold">One suite. Three separate engines. Customizable for your organization.</p>
                    <div className="mt-4 grid grid-cols-5 gap-2">
                      {[78, 52, 88, 64, 92].map((height, index) => (
                        <motion.div
                          key={height}
                          animate={{ height: [`${height * 0.55}%`, `${height}%`, `${height * 0.7}%`] }}
                          transition={{ duration: 2.4, delay: index * 0.18, repeat: Infinity }}
                          className="self-end rounded-full bg-white/70"
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
          <Reveal className="max-w-3xl">
            <SectionBadge light>Business Management Suite</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold text-slate-950 sm:text-5xl">
              HRMS, CRM and ERP are three separate SaaS apps.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              A company can use one product first, adopt the full suite later, or ask Aiwana for a custom implementation
              around its departments, roles and business process.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-7 lg:grid-cols-3">
            {businessSuiteApps.map((app, index) => (
              <Reveal key={app.title} delay={index * 0.08}>
                <GlowCard light className="h-full">
                  <div className="flex items-start justify-between gap-4">
                    <span className="rounded-full bg-violet-50 px-4 py-2 text-xs font-bold text-violet-700">{app.label}</span>
                    <span className="text-3xl font-black text-violet-200">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 text-3xl font-bold text-slate-950">{app.title}</h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">{app.description}</p>
                  <div className="mt-5 rounded-2xl bg-[#fbf8ff] p-4 text-sm font-semibold leading-7 text-violet-900">
                    {app.transformation}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {app.features.map((feature) => (
                      <span key={feature} className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                        {feature}
                      </span>
                    ))}
                  </div>
                  {app.liveUrl ? (
                    <div className="mt-7 flex flex-wrap gap-4">
                      <Link to="/hrms" className="inline-flex items-center gap-2 text-sm font-bold text-violet-700">
                        Explore HRMS page <ArrowRight size={16} />
                      </Link>
                      <a
                        href={app.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-sky-700"
                      >
                        Open live HRMS <ExternalLink size={16} />
                      </a>
                    </div>
                  ) : (
                    <Link to={app.slug} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-violet-700">
                      Explore product <ArrowRight size={16} />
                    </Link>
                  )}
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf8ff] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <SectionBadge light>Full product ecosystem</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold text-slate-950 sm:text-5xl">Beyond business suite, Aiwana builds industry SaaS.</h2>
          </Reveal>
          <div className="mt-12 grid gap-7 lg:grid-cols-2">
            {saasProducts.slice(1).map((product, index) => (
              <Reveal key={product.title} delay={index * 0.08}>
                <GlowCard light className="h-full">
                  <product.icon className="text-violet-600" size={42} />
                  <h3 className="mt-6 text-3xl font-bold text-slate-950">{product.title}</h3>
                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.22em] text-violet-600">{product.subtitle}</p>
                  <p className="mt-5 text-base leading-8 text-slate-600">{product.description}</p>
                  <div className="mt-6 grid gap-3">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 rounded-2xl bg-white p-3 text-sm text-slate-700">
                        <CheckCircle2 className="mt-0.5 shrink-0 text-violet-600" size={18} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <Reveal>
            <SectionBadge light>LMS product</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold text-slate-950 sm:text-5xl">{lmsProduct.title}</h2>
            <p className="mt-4 text-lg font-semibold text-violet-700">{lmsProduct.subtitle}</p>
            <p className="mt-5 text-base leading-8 text-slate-600">{lmsProduct.description}</p>
            <div className="mt-8 grid gap-3">
              {lmsProduct.roles.map((role) => (
                <div key={role} className="rounded-2xl border border-violet-100 bg-[#fbf8ff] p-4 text-sm font-semibold leading-7 text-slate-700">
                  {role}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="grid gap-3 sm:grid-cols-2">
              {lmsProduct.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  whileHover={{ rotateY: 8, y: -6 }}
                  transition={{ type: 'spring', stiffness: 240, damping: 20 }}
                  className="rounded-2xl border border-violet-100 bg-white p-4 shadow-[0_16px_45px_rgba(88,28,135,0.08)] [transform-style:preserve-3d]"
                >
                  <span className="text-xs font-black text-violet-300">#{String(index + 1).padStart(2, '0')}</span>
                  <p className="mt-2 text-sm font-bold text-slate-900">{feature}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fbf8ff] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_24%,rgba(124,58,237,0.12),transparent_26%),radial-gradient(circle_at_84%_72%,rgba(14,165,233,0.12),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_480px] lg:px-8">
          <Reveal>
            <SectionBadge light>Why SaaS matters</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              Products create repeatable systems for businesses that want speed.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              A subscription SaaS model helps businesses avoid expensive from-scratch software. Custom builds are still
              available when your organization needs unique workflow, branding or data structure.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Crown, title: 'Subscription-ready', text: 'Start with HRMS, CRM, ERP or LMS without building from zero.' },
                { icon: Sparkles, title: 'Custom-buildable', text: 'Customize workflows, roles, branding and reports for your organization.' },
                { icon: CheckCircle2, title: 'Demo-led', text: 'See the product flow before deciding implementation scope.' },
                { icon: ArrowRight, title: 'Roadmap-ready', text: 'Add automation, dashboards and integrations as your business grows.' },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl bg-white p-5 shadow-[0_20px_60px_rgba(88,28,135,0.1)]">
                  <item.icon className="text-violet-600" size={30} />
                  <p className="mt-3 font-bold text-slate-950">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="rounded-[2rem] bg-gradient-to-br from-violet-950 via-violet-800 to-sky-700 p-1">
              <LeadCaptureForm type="product-demo" sourcePage="products" title="Request product consultation" defaultService="Product Demo" compact />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
