import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { navLinks, site } from '../lib/site';
import { submitLead } from '../lib/leads';

export function AdvancedFooter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const currentYear = new Date().getFullYear();

  const handleSubscribe = async (event: FormEvent) => {
    event.preventDefault();
    setStatus('loading');
    try {
      await submitLead({ type: 'newsletter', email, service: 'Newsletter', sourcePage: 'footer', message: 'Newsletter subscription' });
      setEmail('');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[#080216] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(124,58,237,0.35),transparent_28%),radial-gradient(circle_at_85%_30%,rgba(14,165,233,0.22),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:70px_70px] opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-violet-100">
                <Sparkles size={15} /> Aiwana Growth Brief
              </div>
              <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl">Get IT, SaaS and AI automation insights.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-violet-100">
                Practical notes on external IT teams, SEO/GEO/AEO, SaaS systems, social presence and AI agents.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Work email"
                className="min-w-0 flex-1 rounded-2xl border border-white/15 bg-white/10 px-4 py-4 text-sm text-white outline-none placeholder:text-violet-100/70 focus:border-sky-200"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-bold text-violet-800 transition hover:bg-violet-50 disabled:opacity-60"
              >
                <Send size={18} />
                {status === 'loading' ? 'Sending' : 'Subscribe'}
              </button>
            </form>
          </div>
          {status === 'success' && <p className="mt-3 text-sm text-emerald-200">Subscribed. Thank you.</p>}
          {status === 'error' && <p className="mt-3 text-sm text-rose-200">Could not subscribe right now. Please email us.</p>}
        </motion.div>

        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src="/Aiwana-logo.png" alt="Aiwana Solution" className="h-14 w-auto" />
              <div>
                <div className="text-2xl font-bold">Aiwana</div>
                <div className="text-xs font-bold uppercase tracking-[0.24em] text-violet-200">Solution</div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-violet-100">{site.tagline}</p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-violet-200">Explore</h3>
            <div className="mt-5 grid gap-3">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="text-sm text-violet-50 transition hover:text-sky-200">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-violet-200">Legal</h3>
            <div className="mt-5 grid gap-3">
              <Link to="/privacy" className="text-sm text-violet-50 transition hover:text-sky-200">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-violet-50 transition hover:text-sky-200">Terms of Service</Link>
              <Link to="/contact" className="text-sm text-violet-50 transition hover:text-sky-200">Free IT Audit</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-violet-200">Contact</h3>
            <div className="mt-5 grid gap-4 text-sm text-violet-50">
              <a href={`mailto:${site.email}`} className="flex items-start gap-3 transition hover:text-sky-200">
                <Mail size={18} className="mt-0.5 shrink-0" /> <span className="break-all">{site.email}</span>
              </a>
              <a href={site.phoneHref} className="flex items-center gap-3 transition hover:text-sky-200">
                <Phone size={18} /> {site.phone}
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0" /> {site.address}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-violet-100">
          © {currentYear} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
