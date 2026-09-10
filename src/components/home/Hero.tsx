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
        <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/30 to-forest/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/40 via-transparent to-transparent" />
      </div>

      {/* Content anchored to lower third */}
      <div className="relative z-10 flex flex-col justify-end min-h-[90vh] lg:min-h-screen">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-14 lg:pb-20 w-full">

          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs text-cream font-medium mb-6 animate-fade-in-up"
            style={{ animationDelay: '100ms' }}
          >
            <span className="w-2 h-2 rounded-full bg-leaf animate-pulse" />
            <span>Modern Botanical Living &amp; Services</span>
          </div>

          <h1 className="editorial-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-cream leading-[1.05] tracking-tight max-w-3xl">
            <span className="inline-block animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Bring a little
            </span>{' '}
            <span className="inline-block italic font-normal text-sage animate-fade-in-up" style={{ animationDelay: '340ms' }}>
              more nature
            </span>{' '}
            <span className="inline-block animate-fade-in-up" style={{ animationDelay: '480ms' }}>
              home.
            </span>
          </h1>

          <p
            className="text-cream/75 text-base sm:text-lg max-w-xl mt-5 leading-relaxed font-normal animate-fade-in-up"
            style={{ animationDelay: '580ms' }}
          >
            Plants, planters, gardening guidance and spaces designed to grow with you.
            From living room specimen foliage to full balcony transformations.
          </p>

          <div
            className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 animate-fade-in-up"
            style={{ animationDelay: '680ms' }}
          >
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cream hover:bg-white text-forest font-semibold rounded-md shadow-lg hover:shadow-xl transition-all text-sm group"
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
              className="text-sm font-medium py-4 border-white/40 text-cream hover:bg-white/10"
            >
              Talk to a Plant Expert
            </WhatsAppButton>
          </div>

          <div
            className="mt-10 pt-7 border-t border-white/15 grid grid-cols-3 gap-4 text-xs text-cream/60 max-w-md animate-fade-in-up"
            style={{ animationDelay: '780ms' }}
          >
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-sage flex-shrink-0" />
              <span>Hand-Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sage flex-shrink-0" />
              <span>Healthy Arrival</span>
            </div>
            <div className="flex items-center gap-2">
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
