'use client';

import React from 'react';
import Link from 'next/link';
import { Sprout, ArrowRight } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

export const BrandVision: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-forest text-cream relative overflow-hidden text-center">
      {/* Subtle organic light gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-forest-800 via-forest to-forest-950 opacity-80" />

      <FadeIn direction="up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        <div className="w-12 h-12 rounded-full bg-leaf/20 text-leaf-light mx-auto flex items-center justify-center animate-pulse-glow">
          <Sprout className="w-6 h-6" />
        </div>

        <span className="text-xs uppercase tracking-widest text-sage font-semibold">
          The Leaf Lover Philosophy
        </span>

        <h2 className="editorial-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-cream max-w-3xl mx-auto leading-tight">
          Growing something bigger than a nursery.
        </h2>

        <p className="text-cream/80 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
          We believe a greener future begins with everyday spaces — one home, one balcony, one office, and one plant at a time.
        </p>

        <div className="pt-2">
          <p className="font-serif text-2xl sm:text-3xl text-sage italic font-medium">
            &ldquo;Our vision: to build a giant company for nature.&rdquo;
          </p>
        </div>

        <div className="pt-6">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-cream text-forest hover:bg-white font-semibold text-sm transition-all shadow-lg hover:scale-105 active:scale-100"
          >
            <span>Grow With Us</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </FadeIn>
    </section>
  );
};
