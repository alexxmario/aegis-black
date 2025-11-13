import type { TextareaHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

const baseStyles = 'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-brand-ivory placeholder:text-white/40 focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/50';

export function TextArea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn(baseStyles, className)} {...props} />;
}
