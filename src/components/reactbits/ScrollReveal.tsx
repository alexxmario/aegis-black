import type { HTMLAttributes } from 'react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/utils';

// Adapted from ReactBits scroll reveal container
export function ScrollReveal({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'transition duration-700 ease-out will-change-transform',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
