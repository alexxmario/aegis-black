import { ArrowRight, Shield } from 'lucide-react';
import { SpotlightCard } from './reactbits/SpotlightCard';
import { Badge } from './ui/badge';
import { cn } from '../lib/utils';

type Service = {
  slug: string;
  title: string;
  summary: string;
  bullets: string[];
  image: string;
};

export function ServiceCard({ service, className }: { service: Service; className?: string }) {
  const imagePosition = service.slug === 'secure-transportation' ? 'object-[50%_25%]' : 'object-center';

  return (
    <SpotlightCard className={cn('flex flex-col gap-5', className)}>
      <div className="overflow-hidden rounded-2xl">
        <img
          src={service.image}
          alt={service.title}
          className={cn('h-48 w-full object-cover transition duration-500 group-hover:scale-105', imagePosition)}
          loading="lazy"
        />
      </div>
      <Badge variant="outline">{service.slug.replace('-', ' ')}</Badge>
      <div>
        <h3 className="text-2xl font-serif text-brand-ivory">{service.title}</h3>
        <p className="mt-2 text-sm text-white/70">{service.summary}</p>
      </div>
      <ul className="space-y-2 text-sm text-white/70">
        {service.bullets.map((bullet) => (
          <li key={bullet} className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-brand-gold" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <button className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand-gold">
        Request detail <ArrowRight className="h-4 w-4" />
      </button>
    </SpotlightCard>
  );
}
