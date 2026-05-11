import type { ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const fieldDots = Array.from({ length: 60 }, (_, index) => ({
  id: index,
  left: (index * 41) % 100,
  top: (index * 67) % 100,
  delay: (index % 12) * 0.18,
  size: 2 + (index % 4),
}));

export function AuroraStage({ children, light = false }: { children: ReactNode; light?: boolean }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -160]);

  return (
    <section className={`relative overflow-hidden ${light ? 'bg-white text-slate-950' : 'bg-[#080216] text-white'}`}>
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-violet-500/30 blur-3xl" />
        <div className="absolute right-[-160px] top-20 h-[620px] w-[620px] rounded-full bg-sky-400/25 blur-3xl" />
        <div className="absolute bottom-[-220px] left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-fuchsia-400/20 blur-3xl" />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 opacity-50">
        {fieldDots.map((dot) => (
          <motion.span
            key={dot.id}
            className={`absolute rounded-full ${light ? 'bg-violet-500' : 'bg-white'}`}
            style={{ left: `${dot.left}%`, top: `${dot.top}%`, width: dot.size, height: dot.size }}
            animate={{ opacity: [0.1, 0.8, 0.1], scale: [1, 1.8, 1] }}
            transition={{ duration: 3.8, delay: dot.delay, repeat: Infinity }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.08)_1px,transparent_1px)] bg-[size:64px_64px] opacity-60" />
      <div className="relative">{children}</div>
    </section>
  );
}

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionBadge({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] ${
        light
          ? 'border-violet-200 bg-violet-50 text-violet-700'
          : 'border-violet-300/30 bg-white/10 text-violet-100 backdrop-blur-xl'
      }`}
    >
      <Sparkles size={15} />
      {children}
    </span>
  );
}

export function GlowCard({ children, className = '', light = false }: { children: ReactNode; className?: string; light?: boolean }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className={`group relative overflow-hidden rounded-[2rem] border p-6 ${
        light
          ? 'border-violet-100 bg-white shadow-[0_24px_80px_rgba(88,28,135,0.12)]'
          : 'border-white/10 bg-white/[0.07] shadow-2xl backdrop-blur-xl'
      } ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -right-24 -top-24 h-52 w-52 rounded-full bg-violet-400/30 blur-3xl" />
        <div className="absolute -bottom-24 left-8 h-52 w-52 rounded-full bg-cyan-300/20 blur-3xl" />
      </div>
      <div className="relative">{children}</div>
    </motion.div>
  );
}

export function PrimaryCTA({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-sky-500 px-6 py-4 text-sm font-semibold text-white shadow-[0_18px_48px_rgba(124,58,237,0.35)] transition hover:shadow-[0_22px_70px_rgba(124,58,237,0.5)] sm:w-auto sm:px-7"
    >
      {children}
      <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
    </Link>
  );
}

export function OrbitVisual({ labels }: { labels: string[] }) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      <motion.div
        className="absolute inset-8 rounded-full border border-violet-300/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute inset-20 rounded-full border border-sky-300/30"
        animate={{ rotate: -360 }}
        transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute inset-32 rounded-full border border-fuchsia-300/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      />
      <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="h-full w-full overflow-hidden rounded-[2rem] border border-white/20 bg-white/15 p-2 shadow-2xl backdrop-blur-xl"
          animate={{ y: [0, -12, 0], rotateY: [0, 12, 0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <img src="/exteam.png" alt="Aiwana automation system" className="h-full w-full rounded-[1.5rem] object-cover object-center" />
          <div className="absolute inset-2 rounded-[1.5rem] bg-gradient-to-t from-violet-950/35 via-transparent to-white/5" />
        </motion.div>
      </div>
      {labels.map((label, index) => {
        const angle = (index / labels.length) * Math.PI * 2;
        const x = 50 + Math.cos(angle) * 38;
        const y = 50 + Math.sin(angle) * 38;
        return (
          <motion.div
            key={label}
            className="absolute rounded-2xl border border-white/15 bg-white/15 px-3 py-2 text-xs font-semibold text-white shadow-xl backdrop-blur-xl"
            style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
            animate={{ y: [0, -8, 0], scale: [1, 1.04, 1] }}
            transition={{ duration: 3.2, delay: index * 0.18, repeat: Infinity }}
          >
            {label}
          </motion.div>
        );
      })}
    </div>
  );
}

export function FlowLine({ items }: { items: string[] }) {
  return (
    <div className="relative grid gap-4 md:grid-cols-4">
      <div className="absolute left-8 right-8 top-8 hidden h-px bg-gradient-to-r from-violet-300 via-fuchsia-300 to-sky-300 md:block" />
      {items.map((item, index) => (
        <Reveal key={item} delay={index * 0.08}>
          <div className="relative rounded-3xl border border-violet-100 bg-white p-5 shadow-[0_20px_60px_rgba(88,28,135,0.1)]">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-sky-500 text-lg font-bold text-white">
              {index + 1}
            </div>
            <h3 className="mt-5 text-lg font-semibold text-slate-950">{item}</h3>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
