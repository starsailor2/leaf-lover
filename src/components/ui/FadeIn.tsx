'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type AnimVariant = 'up' | 'down' | 'left' | 'right' | 'none' | 'scale' | 'blur' | 'clip';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Stagger helper: multiplies delay by index (delay + staggerIndex * 80ms) */
  staggerIndex?: number;
  direction?: AnimVariant;
  duration?: number;
  threshold?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  className,
  delay = 0,
  staggerIndex = 0,
  direction = 'up',
  duration = 700,
  threshold = 0.08,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);
  const totalDelay = delay + staggerIndex * 80;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    const current = domRef.current;
    if (current) observer.observe(current);
    return () => { if (current) observer.unobserve(current); };
  }, [threshold]);

  /* ── Per-variant styles ── */
  const hiddenStyle = (): React.CSSProperties => {
    switch (direction) {
      case 'scale':
        return { opacity: 0, transform: 'scale(0.94)' };
      case 'blur':
        return { opacity: 0, filter: 'blur(10px)', transform: 'translateY(8px)' };
      case 'clip':
        return { opacity: 0, clipPath: 'inset(0 100% 0 0)' };
      case 'up':
        return { opacity: 0, transform: 'translate3d(0, 24px, 0)' };
      case 'down':
        return { opacity: 0, transform: 'translate3d(0, -24px, 0)' };
      case 'left':
        return { opacity: 0, transform: 'translate3d(24px, 0, 0)' };
      case 'right':
        return { opacity: 0, transform: 'translate3d(-24px, 0, 0)' };
      default:
        return { opacity: 0 };
    }
  };

  const visibleStyle = (): React.CSSProperties => {
    switch (direction) {
      case 'clip':
        return { opacity: 1, clipPath: 'inset(0 0% 0 0)' };
      case 'blur':
        return { opacity: 1, filter: 'blur(0px)', transform: 'translateY(0)' };
      case 'scale':
        return { opacity: 1, transform: 'scale(1)' };
      default:
        return { opacity: 1, transform: 'translate3d(0, 0, 0)' };
    }
  };

  return (
    <div
      ref={domRef}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${totalDelay}ms`,
        transitionProperty: 'opacity, transform, filter, clip-path',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        ...(isVisible ? visibleStyle() : hiddenStyle()),
      }}
      className={cn(className)}
    >
      {children}
    </div>
  );
};
