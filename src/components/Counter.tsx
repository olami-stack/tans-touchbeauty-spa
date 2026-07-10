import { useEffect, useState, useRef } from 'react';

interface CounterProps {
  value: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
}

export default function Counter({ value, duration = 1200, decimals = 0, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;
          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // Quad-out easing: progress * (2 - progress)
            const easeProgress = progress * (2 - progress);
            const currentVal = easeProgress * value;
            setCount(currentVal);
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(value);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}
