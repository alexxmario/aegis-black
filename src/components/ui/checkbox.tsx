import type { InputHTMLAttributes } from 'react';

export function Checkbox(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="checkbox"
      className="h-5 w-5 rounded border border-white/20 bg-white/10 accent-brand-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-gold"
      {...props}
    />
  );
}
