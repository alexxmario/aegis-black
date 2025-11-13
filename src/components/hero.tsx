import { ShieldCheck, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedHeadline } from './reactbits/AnimatedHeadline';
import { AuroraBackground } from './reactbits/AuroraBackground';

export function Hero() {
  return (
    <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/hero.jpg" alt="Night convoy of black luxury SUVs" className="h-full w-full object-cover opacity-60" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-midnight/70 via-black/60 to-black/80" />
      </div>
      <div className="relative mx-auto max-w-5xl px-6 py-24 text-center text-brand-ivory">
        <p className="text-xs uppercase tracking-[0.5em] text-brand-gold">Aegis Black</p>
        <h1 className="mt-6 font-serif text-4xl leading-tight text-balance text-brand-ivory md:text-6xl">
          <AnimatedHeadline text={'Elite Protection. Discreet Service.\nAbsolute Security.'} />
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-brand-silver">
          Private bodyguard and executive escort teams with armored luxury transport, vetted globally and ready 24/7.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-midnight shadow-glow transition hover:bg-[#b9922b]"
          >
            Book Confidential Consultation
          </Link>
          <Link
            to="/fleet"
            className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-brand-ivory transition hover:border-brand-gold/60"
          >
            View Luxury Fleet
          </Link>
        </div>
      </div>
      <div className="relative -mt-16 px-6">
        <AuroraBackground>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { label: 'Licensed Close Protection', detail: 'Global + Diplomatic' },
              { label: 'Armored Fleet', detail: 'B4–B7 Certified' },
              { label: '24/7 Global Ops', detail: 'Secure comms + intel' },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/5 bg-white/5 p-6 text-left">
                <p className="text-xs uppercase tracking-[0.4em] text-brand-gold">{item.detail}</p>
                <p className="mt-4 text-xl font-semibold">{item.label}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm text-brand-silver">
                  <Star className="h-4 w-4 text-brand-gold" /> Verified
                </div>
              </div>
            ))}
          </div>
        </AuroraBackground>
      </div>
      <div className="absolute left-1/2 top-10 hidden -translate-x-1/2 md:block">
        <ShieldCheck className="h-12 w-12 text-brand-gold" />
      </div>
    </section>
  );
}
