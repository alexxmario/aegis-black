import { useEffect, useMemo, useState } from 'react';
import { Quote } from 'lucide-react';
import testimonials from '../data/testimonials.json';

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const items = useMemo(() => testimonials, []);

  useEffect(() => {
    const id = setInterval(() => setIndex((current) => (current + 1) % items.length), 7000);
    return () => clearInterval(id);
  }, [items.length]);

  const current = items[index];

  return (
    <section className="glass-panel rounded-3xl border border-white/10 p-8 text-left" aria-live="polite">
      <div className="flex items-center gap-3 text-brand-gold">
        <Quote className="h-10 w-10" />
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-white/40">Testimonials</p>
          <h2 className="text-2xl font-serif text-brand-ivory">Trusted by principals worldwide</h2>
        </div>
      </div>
      <blockquote className="mt-6 text-xl text-brand-ivory">“{current.quote}”</blockquote>
      <p className="mt-4 text-sm text-white/70">{current.by}</p>
      <div className="mt-6 flex gap-2" role="tablist" aria-label="Select testimonial">
        {items.map((item, idx) => (
          <button
            key={item.by}
            role="tab"
            aria-selected={idx === index}
            aria-label={`Show testimonial from ${item.by}`}
            className={`h-2 flex-1 rounded-full ${idx === index ? 'bg-brand-gold' : 'bg-white/20'}`}
            onClick={() => setIndex(idx)}
          />
        ))}
      </div>
    </section>
  );
}
