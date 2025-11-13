import { useEffect, useMemo, useState } from 'react';

// Adapted from ReactBits animated headline pattern
export function AnimatedHeadline({ text }: { text: string }) {
  const characters = useMemo(() => text.split(''), [text]);
  const [visibleCount, setVisibleCount] = useState(0);

  type Token =
    | { type: 'word'; chars: { char: string; index: number }[]; key: string }
    | { type: 'space'; key: string }
    | { type: 'newline'; key: string };

  const tokens = useMemo<Token[]>(() => {
    const list: Token[] = [];
    let currentWord: { char: string; index: number }[] = [];

    const flushWord = () => {
      if (currentWord.length > 0) {
        list.push({ type: 'word', chars: currentWord, key: `word-${currentWord[0].index}` });
        currentWord = [];
      }
    };

    characters.forEach((char, index) => {
      if (char === '\n') {
        flushWord();
        list.push({ type: 'newline', key: `newline-${index}` });
      } else if (char === ' ') {
        flushWord();
        list.push({ type: 'space', key: `space-${index}` });
      } else {
        currentWord.push({ char, index });
      }
    });

    flushWord();
    return list;
  }, [characters]);

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

  const renderChar = (char: string, index: number) => (
    <span
      key={`${char}-${index}`}
      className={`inline-block translate-y-3 opacity-0 transition-all duration-300 ease-out ${
        index < visibleCount ? 'translate-y-0 opacity-100' : ''
      }`}
      style={{ transitionDelay: `${index * 35}ms` }}
    >
      {char}
    </span>
  );

  return (
    <span aria-live="polite" className="inline-flex w-full flex-wrap text-balance">
      {tokens.map((token) => {
        if (token.type === 'word') {
          return (
            <span key={token.key} className="inline-flex flex-nowrap">
              {token.chars.map(({ char, index }) => renderChar(char, index))}
            </span>
          );
        }

        if (token.type === 'space') {
          return (
            <span key={token.key} className="inline-block w-2" aria-hidden="true">
              &nbsp;
            </span>
          );
        }

        return <span key={token.key} className="basis-full" aria-hidden="true" />;
      })}
    </span>
  );
}
