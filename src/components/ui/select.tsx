import type { SelectHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

const baseStyles = 'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-brand-ivory focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/50';

export function Select({ className, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className={cn(baseStyles, className)} {...props} />;
}
