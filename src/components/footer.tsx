import { Mail, Phone, Shield } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Fleet', to: '/fleet' },
  { label: 'Team', to: '/team' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact', to: '/contact' },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black/50">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 text-brand-gold">
            <Shield className="h-6 w-6" />
            <span className="font-serif text-xl text-brand-ivory">Aegis Black</span>
          </div>
          <p className="mt-4 text-sm text-brand-silver">
            Elite Protection. Discreet Service. Absolute Security.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/40">Licensed • Insured • Global Operations</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Navigate</h4>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className="text-white/70 transition hover:text-brand-gold">
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="space-y-3 text-sm text-white/80">
          <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Secure Contact</h4>
          <p className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-brand-gold" /> +1 (202) 555-0118
          </p>
          <p className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-brand-gold" /> ops@aegisblack.example
          </p>
          <div className="flex gap-4 text-sm">
            <a className="text-white/60 hover:text-brand-gold" href="https://www.linkedin.com" aria-label="LinkedIn">
              LinkedIn→
            </a>
            <a className="text-white/60 hover:text-brand-gold" href="https://www.instagram.com" aria-label="Instagram">
              Instagram→
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Aegis Black. All rights reserved. Replace with licensing details.
      </div>
    </footer>
  );
}
