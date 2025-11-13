import { useEffect, useMemo, useState } from 'react';

// Adapted from ReactBits animated headline pattern
export function AnimatedHeadline({ text }: { text: string }) {
  const characters = useMemo(() => text.split(''), [text]);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    setVisibleCount(0);
    const interval = setInterval(() => {
      setVisibleCount((count) => {
        if (count >= characters.length) {
          clearInterval(interval);
          return count;
        }
        return count + 1;
      });
    }, 45);
    return () => clearInterval(interval);
  }, [characters]);

  return (
    <span aria-live="polite" className="inline-flex w-full flex-wrap text-balance">
      {characters.map((char, index) =>
        char === '\n' ? (
          <span key={`break-${index}`} className="basis-full" aria-hidden="true" />
        ) : (
          <span
            key={`${char}-${index}`}
            className={`inline-block translate-y-3 opacity-0 transition-all duration-300 ease-out ${
              index < visibleCount ? 'translate-y-0 opacity-100' : ''
            }`}
            style={{ transitionDelay: `${index * 35}ms` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ),
      )}
    </span>
  );
}
