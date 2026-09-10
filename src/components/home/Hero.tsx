'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import { WhatsAppButton } from '../ui/WhatsAppButton';

export const Hero: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;
    const onScroll = () => {
      el.style.transform = `translateY(${window.scrollY * 0.28}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] lg:min-h-screen overflow-hidden bg-forest">

      {/* Full-bleed background image with parallax */}
      <div
        ref={imageRef}
        className="absolute inset-0 will-change-transform"
        style={{ top: '-10%', bottom: '-10%' }}
      >
        <Image
          src="https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1800&q=90"
          alt="Lush green botanical apartment interior"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Cinematic gradient overlays — deep contrast in the text area while preserving foliage on the right */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/80 to-forest-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/95 via-forest-950/75 to-transparent sm:w-4/5 lg:w-3/5" />
        <div className="absolute bottom-0 left-0 w-full lg:w-2/3 h-full sm:h-4/5 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-forest-950/90 via-forest-950/50 to-transparent pointer-events-none" />
      </div>

      {/* Content anchored to lower third with responsive mobile padding */}
      <div className="relative z-10 flex flex-col justify-end min-h-[90vh] lg:min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-20 sm:pt-24 pb-12 sm:pb-16 lg:pb-20 w-full">

          <div
            className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[11px] sm:text-xs text-cream font-medium mb-4 sm:mb-6 animate-fade-in-up"
            style={{ animationDelay: '100ms' }}
          >
            <span className="w-2 h-2 rounded-full bg-leaf animate-pulse" />
            <span>Modern Botanical Living &amp; Services</span>
          </div>

          <h1 className="editorial-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-cream leading-[1.08] sm:leading-[1.05] tracking-tight max-w-3xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            <span className="inline-block animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Bring a little
            </span>{' '}
            <span className="inline-block italic font-normal text-sage-light animate-fade-in-up" style={{ animationDelay: '340ms' }}>
              more nature
            </span>{' '}
            <span className="inline-block animate-fade-in-up" style={{ animationDelay: '480ms' }}>
              home.
            </span>
          </h1>

          <p
            className="text-cream/90 text-sm sm:text-base lg:text-lg max-w-xl mt-3.5 sm:mt-5 leading-relaxed font-normal animate-fade-in-up drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]"
            style={{ animationDelay: '580ms' }}
          >
            Plants, planters, gardening guidance and spaces designed to grow with you.
            From living room specimen foliage to full balcony transformations.
          </p>

          <div
            className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 animate-fade-in-up w-full sm:w-auto"
            style={{ animationDelay: '680ms' }}
          >
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 bg-cream hover:bg-white text-forest font-semibold shadow-lg hover:shadow-xl transition-all text-sm group"
            >
              <span>Explore Plants</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <WhatsAppButton
              variant="outline"
              size="lg"
              options={{
                type: 'general',
                customMessage: 'Hi Leaf Lover, I would like to talk with a plant expert about my space.',
              }}
              className="text-sm font-medium py-3.5 sm:py-4 border-white/40 text-cream hover:bg-white/10 justify-center"
            >
              Talk to a Plant Expert
            </WhatsAppButton>
          </div>

          <div
            className="mt-8 sm:mt-10 pt-5 sm:pt-7 border-t border-white/15 grid grid-cols-3 gap-2 sm:gap-4 text-[10px] sm:text-xs text-cream/75 max-w-md animate-fade-in-up"
            style={{ animationDelay: '780ms' }}
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-1.5">
              <Truck className="w-4 h-4 text-sage flex-shrink-0" />
              <span>Hand-Delivered</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-1.5">
              <ShieldCheck className="w-4 h-4 text-sage flex-shrink-0" />
              <span>Healthy Arrival</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-1.5">
              <Sparkles className="w-4 h-4 text-sage flex-shrink-0" />
              <span>Lifetime Support</span>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 animate-fade-in-up"
        style={{ animationDelay: '1000ms' }}
        aria-hidden="true"
      >
        <span className="text-[10px] text-cream/40 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-cream/30 to-transparent animate-float-slow" />
      </div>

    </section>
  );
};
