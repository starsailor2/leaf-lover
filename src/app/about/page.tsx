'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sprout, Heart, ShieldCheck, TreePine, ArrowRight } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { FadeIn } from '@/components/ui/FadeIn';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream py-8 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero */}
        <FadeIn direction="up" className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-leaf font-semibold">
            Our Story & Vision
          </span>
          <h1 className="editorial-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-forest leading-tight">
            We are growing something significantly bigger than a nursery.
          </h1>
          <p className="text-forest/75 text-base sm:text-lg leading-relaxed">
            Leaf Lover was born from a simple truth: modern cities separate us from the natural rhythms that keep us grounded, calm, and healthy.
          </p>
        </FadeIn>

        {/* Narrative Image Banner */}
        <FadeIn direction="up" className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-card border border-forest/10 bg-cream-dark">
          <Image
            src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80"
            alt="Leaf Lover botanical nursery greenhouses"
            fill
            priority
            className="object-cover"
          />
        </FadeIn>

        {/* Core Vision Statement Callout */}
        <FadeIn direction="up" className="p-8 sm:p-12 rounded-3xl bg-forest text-cream text-center space-y-4 shadow-2xl">
          <span className="text-xs uppercase tracking-widest text-sage font-semibold">
            Core Brand Vision
          </span>
          <blockquote className="editorial-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-cream max-w-2xl mx-auto">
            &ldquo;To build a giant company for nature.&rdquo;
          </blockquote>
          <p className="text-cream/70 text-sm sm:text-base max-w-xl mx-auto leading-relaxed pt-2">
            Not just an online store that sells potted foliage, but a company that transforms concrete balconies into thriving personal sanctuaries, greens workspaces, and champions biodiversity across cities.
          </p>
        </FadeIn>

        {/* Pillars */}
        <div className="space-y-8">
          <FadeIn direction="up" className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="editorial-heading text-3xl font-bold text-forest">
              The Principles That Guide Us
            </h2>
            <p className="text-forest/70 text-xs sm:text-sm">
              We operate on quiet quality, genuine care, and transparent horticulture.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn direction="up" delay={0} className="p-6 rounded-2xl bg-white/70 border border-forest/10 space-y-3 shadow-soft hover:shadow-card hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-forest/5 text-leaf flex items-center justify-center">
                <Sprout className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-forest">Cultivated for Longevity</h3>
              <p className="text-xs sm:text-sm text-forest/70 leading-relaxed">
                We reject chemically forced greenhouse growth. Our plants are acclimated to real home and office light environments before they leave our care.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={100} className="p-6 rounded-2xl bg-white/70 border border-forest/10 space-y-3 shadow-soft hover:shadow-card hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-forest/5 text-leaf flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-forest">Radical Plant Honesty</h3>
              <p className="text-xs sm:text-sm text-forest/70 leading-relaxed">
                If your space is too dim for a Fiddle Leaf Fig, we will say so honestly and guide you to an architectural Snake Plant or ZZ that will actually thrive.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={200} className="p-6 rounded-2xl bg-white/70 border border-forest/10 space-y-3 shadow-soft hover:shadow-card hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-forest/5 text-leaf flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-forest">Lifetime Relationship</h3>
              <p className="text-xs sm:text-sm text-forest/70 leading-relaxed">
                Delivery isn’t the end of our work — it is the start. Our WhatsApp Plant Doctor is always one message away whenever leaves show distress.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* CTA */}
        <FadeIn direction="up" className="p-8 sm:p-10 rounded-2xl bg-sage/50 border border-forest/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif text-2xl font-bold text-forest">
              Grow with Leaf Lover
            </h3>
            <p className="text-xs sm:text-sm text-forest/70">
              Browse our nursery catalogue or speak to our team on WhatsApp.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/shop"
              className="px-6 py-3 bg-forest hover:bg-forest-800 text-cream text-xs font-semibold rounded-md shadow"
            >
              Shop Plants
            </Link>
            <WhatsAppButton variant="outline" size="md">
              WhatsApp Us
            </WhatsAppButton>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
