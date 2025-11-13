import type { HTMLAttributes } from 'react';
import { useRef } from 'react';
import { cn } from '../../lib/utils';

// Adapted from ReactBits spotlight hover card
export function SpotlightCard({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);

  function handlePointer(event: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    el.style.setProperty('--spotlight-x', `${x}px`);
    el.style.setProperty('--spotlight-y', `${y}px`);
  }

  return (
    <div
      ref={ref}
      onPointerMove={handlePointer}
      className={cn(
        'group relative overflow-hidden rounded-3xl border border-white/10 bg-brand-gunmetal/50 p-6 transition duration-300 hover:border-brand-gold/50',
        className,
      )}
      style={{
        backgroundImage: `radial-gradient(180px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(212,175,55,0.25), transparent 60%)`,
      }}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
