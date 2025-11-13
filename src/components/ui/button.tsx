import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';

type ButtonVariant = 'primary' | 'ghost' | 'outline';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  icon?: ReactNode;
};

const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold disabled:opacity-50 disabled:cursor-not-allowed';

const variantMap: Record<ButtonVariant, string> = {
  primary: 'bg-brand-gold text-brand-midnight shadow-glow hover:bg-[#b9922b]',
  ghost: 'bg-transparent text-brand-ivory border border-white/20 hover:border-brand-gold/60',
  outline: 'border border-brand-gold/70 text-brand-gold hover:text-brand-ivory hover:border-brand-ivory',
};

export function Button({ className, variant = 'primary', icon, children, type = 'button', ...props }: ButtonProps) {
  return (
    <button type={type} className={cn(baseStyles, variantMap[variant], className)} {...props}>
      {icon}
      {children}
    </button>
  );
}
