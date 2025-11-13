import services from '../../data/services.json';
import fleet from '../../data/fleet.json';
import { Hero } from '../../components/hero';
import { IconStat } from '../../components/icon-stat';
import { ServiceCard } from '../../components/service-card';
import { TestimonialCarousel } from '../../components/testimonial-carousel';
import { ScrollReveal } from '../../components/reactbits/ScrollReveal';
import { Button } from '../../components/ui/button';
import { Shield, Headphones, Globe, ShieldCheck, Compass } from 'lucide-react';
import { usePageMetadata } from '../../lib/seo';
import { useNavigate } from 'react-router-dom';

export default function HomeRoute() {
  const navigate = useNavigate();
  usePageMetadata({
    title: 'Aegis Black | Elite Protection & Secure Transport',
    description: 'Aegis Black delivers private bodyguards, armored convoy escorts, and discreet intelligence-led operations worldwide.',
  });

  return (
    <div className="space-y-24">
      <Hero />

      <section className="grid gap-4 md:grid-cols-4">
        <IconStat icon={<Shield className="h-6 w-6" />} label="Licensed" detail="Close Protection" />
        <IconStat icon={<Headphones className="h-6 w-6" />} label="Ops" detail="24/7 Watch" />
        <IconStat icon={<Globe className="h-6 w-6" />} label="Global" detail="EMEA • APAC" />
        <IconStat icon={<ShieldCheck className="h-6 w-6" />} label="Armored" detail="B4–B7" />
      </section>

      <section>
        <div className="flex flex-col gap-4 text-left md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-white/40">Services</p>
            <h2 className="mt-2 text-3xl font-serif">Protection frameworks built for every principal</h2>
          </div>
          <Button variant="ghost" onClick={() => navigate('/services')}>
            View all services
          </Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-white/40">Fleet</p>
            <h2 className="mt-2 text-3xl font-serif">Luxury + Armored transport on standby</h2>
          </div>
          <Button variant="outline" onClick={() => navigate('/fleet')}>
            Explore Fleet
          </Button>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {fleet.slice(0, 3).map((vehicle) => (
            <article key={vehicle.slug} className="glass-panel rounded-3xl border border-white/10">
              <img src={vehicle.images[0]} alt={`${vehicle.make} ${vehicle.model}`} className="h-56 w-full rounded-3xl object-cover" loading="lazy" />
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.4em] text-white/40">{vehicle.armoring}</p>
                <h3 className="mt-2 text-2xl font-serif text-brand-ivory">
                  {vehicle.make} {vehicle.model}
                </h3>
                <p className="text-sm text-white/70">Capacity {vehicle.capacity} • {vehicle.type}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-10 md:grid-cols-2">
        <ScrollReveal className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="text-xs uppercase tracking-[0.5em] text-white/40">Why us</p>
          <h2 className="mt-4 text-3xl font-serif">Discretion, expertise, operational excellence</h2>
          <ul className="mt-6 space-y-4 text-sm text-white/70">
            {[
              'Discretion-first mindset with anonymized team call signs and NDA-backed ops',
              'Intelligence cell delivers advance packages, travel advisories, and red-team drills',
              'Armored fleet with defensive driving specialists, medics, and comms technicians',
            ].map((point) => (
              <li key={point} className="flex items-start gap-3">
                <Compass className="mt-1 h-4 w-4 text-brand-gold" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
        <ScrollReveal className="rounded-3xl border border-brand-gold/20 bg-brand-gunmetal/60 p-8 text-brand-ivory">
          <h3 className="text-2xl font-serif">“Aegis Black functions like a private embassy detail.”</h3>
          <p className="mt-4 text-sm text-white/70">— Director of Protective Services, UHNW Family Office</p>
          <Button className="mt-6" variant="ghost" onClick={() => navigate('/contact')}>
            Audit our playbooks
          </Button>
        </ScrollReveal>
      </section>

      <section className="rounded-[2.5rem] border border-brand-gold/30 bg-brand-midnight/70 p-10 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-brand-gold">Ready</p>
        <h2 className="mt-3 text-3xl font-serif text-brand-ivory">Book a confidential consultation</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-white/70">
          Our operations desk responds within 30 minutes via encrypted channels. Share itineraries, convoy sizes, and intelligence requirements.
        </p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button onClick={() => navigate('/contact')}>Signal OPS Desk</Button>
          <Button variant="outline" onClick={() => navigate('/services')}>
            Download capabilities deck
          </Button>
        </div>
      </section>

      <TestimonialCarousel />
    </div>
  );
}
