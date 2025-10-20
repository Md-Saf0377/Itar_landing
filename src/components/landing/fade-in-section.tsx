
'use client';

import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

type FadeInSectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function FadeInSection({ children, className }: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={cn(
        'transition-opacity duration-1000 ease-in-out',
        isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0',
        className
      )}
    >
      {children}
    </div>
  );
}
