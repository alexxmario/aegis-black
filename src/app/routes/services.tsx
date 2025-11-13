import services from '../../data/services.json';
import { usePageMetadata } from '../../lib/seo';
import { SpotlightCard } from '../../components/reactbits/SpotlightCard';
import { Button } from '../../components/ui/button';

export default function ServicesRoute() {
  usePageMetadata({
    title: 'Aegis Black | Protective Services',
    description: 'Bodyguard escort, executive protection, secure transportation, and event security with armored options.',
  });

  return (
    <section className="space-y-12">
      <header>
        <p className="text-xs uppercase tracking-[0.5em] text-white/40">Services</p>
        <h1 className="mt-4 text-4xl font-serif">Protection programs engineered for every mission profile</h1>
        <p className="mt-4 max-w-3xl text-sm text-white/70">
          Each engagement begins with risk modeling, advance intelligence, and secure communications. Choose an offering below, then customize operatives, vehicles, and equipment to suit threat levels B4–B7.
        </p>
      </header>
      <div className="grid gap-8 md:grid-cols-2">
        {services.map((service) => (
          <SpotlightCard key={service.slug} className="flex flex-col gap-4">
            <div className="rounded-2xl border border-white/5 bg-white/5 p-4 text-xs uppercase tracking-[0.4em] text-white/40">
              {service.slug}
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-serif text-brand-ivory">{service.title}</h2>
              <p className="text-sm text-white/70">{service.summary}</p>
            </div>
            <img src={service.image} alt={service.title} className="h-56 w-full rounded-3xl object-cover" loading="lazy" />
            <ul className="space-y-2 text-sm text-white/70">
              {service.bullets.map((bullet) => (
                <li key={bullet}>• {bullet}</li>
              ))}
            </ul>
            <Button variant="ghost" className="mt-auto self-start">
              Build this detail
            </Button>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
