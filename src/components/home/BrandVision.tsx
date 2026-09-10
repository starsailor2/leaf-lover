'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

export const BrandVision: React.FC = () => {
  return (
    <section className="py-24 lg:py-36 bg-forest text-cream relative overflow-hidden text-center">
      {/* Rich layered radial background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_#2d5a3d_0%,_#183A2B_55%,_#0d2219_100%)]" />
      {/* Subtle botanical texture dots */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle, #4F7659 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      <FadeIn direction="up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">

        {/* Overline */}
        <span className="text-xs uppercase tracking-widest text-sage/80 font-semibold">
          The Leaf Lover Philosophy
        </span>

        {/* Main headline — clip-reveal on scroll */}
        <FadeIn direction="clip" duration={1000} className="overflow-hidden">
          <h2 className="editorial-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-cream leading-tight max-w-3xl mx-auto">
            Growing something bigger than a nursery.
          </h2>
        </FadeIn>

        <FadeIn direction="blur" delay={200}>
          <p className="text-cream/75 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            We believe a greener future begins with everyday spaces — one home, one balcony, one office, and one plant at a time.
          </p>
        </FadeIn>

        {/* Pull quote */}
        <FadeIn direction="up" delay={350}>
          <p className="font-serif text-2xl sm:text-3xl text-sage italic font-medium px-4">
            &ldquo;Our vision: to build a giant company for nature.&rdquo;
          </p>
        </FadeIn>

        {/* Stats row */}
        <FadeIn direction="up" delay={480}>
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto pt-4">
            {[
              { value: '500+', label: 'Plants Delivered' },
              { value: '200+', label: 'Happy Homes' },
              { value: '5★', label: 'Average Rating' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="editorial-heading text-2xl sm:text-3xl font-bold text-cream">{stat.value}</p>
                <p className="text-cream/50 text-[11px] uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn direction="scale" delay={600}>
          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-cream text-forest hover:bg-white font-semibold text-sm transition-all shadow-lg hover:scale-105 active:scale-100"
            >
              <span>Grow With Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>

      </FadeIn>
    </section>
  );
};
