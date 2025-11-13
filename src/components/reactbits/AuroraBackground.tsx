import type { ReactNode } from 'react';

// Adapted from ReactBits aurora background snippet
export function AuroraBackground({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-brand-gunmetal/80 via-brand-navy/80 to-black/80 p-[1px]">
      <div className="relative rounded-[2.5rem] bg-brand-midnight/60 p-10 backdrop-blur">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-0 h-64 w-64 animate-pulse rounded-full bg-brand-gold/30 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-80 w-80 animate-[spin_18s_linear_infinite] rounded-full bg-brand-navy/40 blur-[140px]" />
        </div>
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}
