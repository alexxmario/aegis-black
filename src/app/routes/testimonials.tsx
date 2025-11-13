import testimonials from '../../data/testimonials.json';
import { usePageMetadata } from '../../lib/seo';

export default function TestimonialsRoute() {
  usePageMetadata({
    title: 'Aegis Black | Testimonials',
    description: 'Discreet endorsements from UHNW families, corporate security directors, and touring principals.',
  });

  return (
    <section className="space-y-10">
      <header>
        <p className="text-xs uppercase tracking-[0.5em] text-white/40">Testimonials</p>
        <h1 className="mt-4 text-4xl font-serif">Discreet endorsements from principals</h1>
        <p className="mt-4 max-w-3xl text-sm text-white/70">
          Quotes are anonymized but verifiable under NDA. Each engagement scored 5/5 for communication, discretion, and threat mitigation.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((item) => (
          <article key={item.by} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-lg text-brand-ivory">“{item.quote}”</p>
            <p className="mt-4 text-sm text-white/60">{item.by}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
