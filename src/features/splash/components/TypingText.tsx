import { useTypingAnimation } from '../hooks/useTypingAnimation';

type TypingTextProps = {
  text: string;
  className?: string;
  delayMs?: number;
  startDelay?: number;
};

export function TypingText({ text, className, delayMs = 40, startDelay = 300 }: TypingTextProps) {
  const visibleCount = useTypingAnimation(text, delayMs, startDelay);

  return (
    <span className={className}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          style={{
            opacity: i < visibleCount ? 1 : 0,
            transition: 'opacity 0.08s ease',
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
