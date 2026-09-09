'use client';

import React from 'react';
import { Sprout, Compass, Sparkles, HeartHandshake } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

const pillars = [
  {
    icon: Sprout,
    title: 'Carefully Selected Plants',
    description: 'We grow and acclimate plants for indoor strength and longevity, rejecting weak nursery stock before it ever reaches you.',
  },
  {
    icon: Compass,
    title: 'Honest Guidance',
    description: 'If a plant will not thrive in your light conditions, we will tell you straight and suggest one that will flourish.',
  },
  {
    icon: Sparkles,
    title: 'From Plant to Space',
    description: 'We accompany you across the whole journey — from a single bedside succulent to turnkey balcony greenery and corporate atriums.',
  },
  {
    icon: HeartHandshake,
    title: 'Real Human Support',
    description: 'When you message us on WhatsApp, you speak with actual gardeners who care deeply about the wellbeing of your plants.',
  },
];

export const WhyLeafLover: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-cream-light/80 border-t border-forest/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn direction="up" className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-leaf font-semibold">
            Our Standards
          </span>
          <h2 className="editorial-heading text-3xl sm:text-4xl font-bold text-forest">
            Why people choose Leaf Lover.
          </h2>
          <p className="text-forest/70 text-sm">
            We are building a nature company rooted in transparency, healthy horticulture, and genuine care for your spaces.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <FadeIn
                key={pillar.title}
                direction="up"
                delay={idx * 100}
                className="p-6 rounded-2xl bg-white/70 border border-forest/10 hover:border-forest/20 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-forest/5 text-leaf flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-forest">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-forest/70 leading-relaxed">
                  {pillar.description}
                </p>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
};
