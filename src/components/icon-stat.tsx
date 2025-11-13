import type { ReactNode } from 'react';

export function IconStat({ icon, label, detail }: { icon: ReactNode; label: string; detail: string }) {
  return (
    <div className="glass-panel flex flex-col items-center gap-2 rounded-2xl border border-white/10 px-4 py-5 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-gold/50 bg-black/30 text-brand-gold">
        {icon}
      </div>
      <p className="text-sm uppercase tracking-[0.4em] text-white/40">{label}</p>
      <p className="text-lg font-semibold text-brand-ivory">{detail}</p>
    </div>
  );
}
