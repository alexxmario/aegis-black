import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type BadgeVariant = 'default' | 'outline' | 'success';

const styles: Record<BadgeVariant, string> = {
  default: 'bg-white/10 text-brand-ivory',
  outline: 'border border-white/30 text-brand-silver',
  success: 'bg-emerald-500/20 text-emerald-200 border border-emerald-400/30',
};

export function Badge({ className, variant = 'default', ...props }: HTMLAttributes<HTMLSpanElement> & { variant?: BadgeVariant }) {
  return (
    <span
      className={cn('inline-flex items-center rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide', styles[variant], className)}
      {...props}
    />
  );
}
