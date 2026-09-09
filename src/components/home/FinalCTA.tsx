'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { FadeIn } from '../ui/FadeIn';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-sage/40 border-t border-forest/10">
      <FadeIn direction="up" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs uppercase tracking-widest text-leaf font-semibold">
          Begin Today
        </span>

        <h2 className="editorial-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-forest">
          Ready to bring more nature into your space?
        </h2>

        <p className="text-forest/70 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Explore our nursery collection online, or message our team for personal recommendations on light, species, and balcony design.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/shop"
            className="w-full sm:w-auto px-8 py-3.5 bg-forest hover:bg-forest-800 text-cream font-semibold text-sm rounded-md shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <span>Shop Plants & Vessels</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <WhatsAppButton
            variant="primary"
            size="lg"
            options={{
              type: 'general',
              customMessage: 'Hi Leaf Lover, I would like to explore options for my space.'
            }}
            className="w-full sm:w-auto text-sm py-3.5"
          >
            Talk on WhatsApp
          </WhatsAppButton>
        </div>
      </FadeIn>
    </section>
  );
};
