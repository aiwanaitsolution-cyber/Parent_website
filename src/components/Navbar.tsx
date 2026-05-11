import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { navLinks } from '../lib/site';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const startsOnLightSurface =
    location.pathname.startsWith('/blog') ||
    ['/contact', '/careers', '/privacy', '/terms'].includes(location.pathname);
  const useLightNav = isScrolled || startsOnLightSurface;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <>
    <button
      onClick={() => setIsMobileMenuOpen((open) => !open)}
      className={`mobile-menu-fallback fixed top-6 z-[70] items-center justify-center rounded-xl border p-2 shadow-lg backdrop-blur-xl ${
        useLightNav ? 'border-violet-200 bg-white text-slate-950' : 'border-white/20 bg-white/10 text-white'
      }`}
      style={{ right: 20 }}
      aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
    >
      {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
    <nav className="fixed left-0 right-0 top-0 z-50 px-2 py-3 sm:px-3">
      <div
        className={`relative mx-auto flex h-[68px] w-full max-w-7xl items-center justify-between gap-3 rounded-[1.4rem] border px-3 pr-14 transition-all duration-300 sm:h-[72px] sm:px-6 ${
          useLightNav
            ? 'border-violet-200/70 bg-white/88 shadow-[0_20px_70px_rgba(88,28,135,0.18)] backdrop-blur-2xl'
            : 'border-white/20 bg-white/12 shadow-[0_20px_70px_rgba(15,23,42,0.12)] backdrop-blur-2xl'
        }`}
      >
        <Link to="/" className="flex min-w-0 shrink items-center gap-3 sm:gap-4" aria-label="Aiwana Solution home">
          <motion.img
            src="/Aiwana-logo.png"
            alt="Aiwana Solution"
            className="h-16 w-auto shrink-0 drop-shadow-[0_6px_18px_rgba(124,58,237,0.28)] sm:h-20"
            whileHover={{ rotate: [0, -4, 4, 0], scale: 1.05 }}
          />
          <div className="leading-tight">
            <div className={`text-lg font-bold tracking-normal sm:text-2xl ${useLightNav ? 'text-slate-950' : 'text-white'}`}>
              Aiwana
            </div>
            <div className={`text-[10px] font-bold uppercase tracking-[0.22em] sm:text-xs ${useLightNav ? 'text-violet-600' : 'text-violet-100'}`}>
              Solution
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/25'
                    : useLightNav
                      ? 'text-slate-700 hover:bg-violet-50 hover:text-violet-700'
                      : 'text-white/85 hover:bg-white/15 hover:text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden rounded-full bg-gradient-to-r from-violet-600 to-sky-500 px-5 py-3 text-sm font-bold text-white shadow-[0_16px_42px_rgba(124,58,237,0.35)] transition hover:scale-[1.02] lg:block"
        >
          Free IT Audit
        </Link>

        <button
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className={`hidden absolute right-3 top-1/2 z-20 -translate-y-1/2 shrink-0 items-center justify-center rounded-xl border p-2 ${useLightNav ? 'border-violet-200 text-slate-950' : 'border-white/20 text-white'}`}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            className="mx-auto mt-3 max-w-7xl rounded-[1.6rem] border border-violet-100 bg-white/95 p-3 shadow-[0_24px_80px_rgba(88,28,135,0.2)] backdrop-blur-2xl lg:hidden"
          >
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-sm font-semibold ${
                      isActive ? 'bg-violet-600 text-white' : 'text-slate-700 hover:bg-violet-50 hover:text-violet-700'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Link to="/contact" className="rounded-2xl bg-gradient-to-r from-violet-600 to-sky-500 px-4 py-3 text-center text-sm font-bold text-white">
                Request Free IT Audit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </>
  );
}
