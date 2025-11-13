import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, ShieldCheck, X } from 'lucide-react';
import { cn } from '../lib/utils';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Fleet', to: '/fleet' },
  { label: 'Team', to: '/team' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact', to: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={cn('sticky top-8 z-40 transition', isScrolled ? 'backdrop-blur-xl' : '')}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <NavLink to="/" className="flex items-center gap-3 text-brand-ivory">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-gold/60 bg-brand-midnight/70 text-brand-gold">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <p className="text-lg font-serif leading-tight">Aegis Black</p>
            <p className="text-xs uppercase tracking-[0.55em] text-brand-gold">Elite Protection</p>
          </div>
        </NavLink>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  'rounded-full px-4 py-2 text-sm font-medium text-white/70 transition hover:text-brand-gold',
                  isActive && 'bg-white/10 text-brand-gold',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:block">
          <NavLink
            to="/contact"
            className="inline-flex items-center rounded-full bg-brand-gold px-5 py-3 text-sm font-semibold text-brand-midnight transition hover:bg-[#b9922b]"
          >
            Book Detail
          </NavLink>
        </div>
        <button
          className="md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6 text-brand-gold" /> : <Menu className="h-6 w-6 text-brand-gold" />}
        </button>
      </div>
      {isOpen && (
        <div className="border-t border-white/5 bg-brand-midnight/95 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn('rounded-2xl px-4 py-3 text-lg font-medium text-white/80', isActive ? 'bg-white/10 text-brand-gold' : '')
                }
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
