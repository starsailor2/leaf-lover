'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import { WhatsAppButton } from '../ui/WhatsAppButton';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-6 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text */}
          <div className="lg:col-span-7 space-y-6 lg:pr-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/5 border border-forest/10 text-xs text-forest font-medium">
              <span className="w-2 h-2 rounded-full bg-leaf animate-pulse" />
              <span>Modern Botanical Living & Services</span>
            </div>

            <h1 className="editorial-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-forest leading-[1.1] tracking-tight">
              Bring a little more <span className="italic font-normal text-leaf">nature</span> home.
            </h1>

            <p className="text-base sm:text-lg text-forest/75 max-w-xl font-normal leading-relaxed">
              Plants, planters, gardening guidance and spaces designed to grow with you. From living room specimen foliage to full balcony transformations.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-forest hover:bg-forest-800 text-cream font-medium rounded-md shadow-md hover:shadow-lg transition-all text-sm group"
              >
                <span>Explore Plants</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <WhatsAppButton
                variant="outline"
                size="lg"
                options={{
                  type: 'general',
                  customMessage: 'Hi Leaf Lover, I would like to talk with a plant expert about my space.'
                }}
                className="text-sm font-medium py-3.5"
              >
                Talk to a Plant Expert
              </WhatsAppButton>
            </div>

            {/* Value Highlights */}
            <div className="pt-8 border-t border-forest/10 grid grid-cols-3 gap-4 text-xs text-forest/70">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-leaf flex-shrink-0" />
                <span>Hand-Delivered Safely</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-leaf flex-shrink-0" />
                <span>Healthy Arrival Promise</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-leaf flex-shrink-0" />
                <span>Lifetime Care Support</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-forest/10 bg-cream-dark">
                <Image
                  src="https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1000&q=85"
                  alt="Lush green botanical apartment interior"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent" />
                
                {/* Floating Quote Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/85 backdrop-blur-md border border-white/40 shadow-soft animate-float-slow">
                  <p className="font-serif text-sm italic text-forest leading-snug">
                    &ldquo;Plants do not just decorate a room — they slow down time and make a space feel truly alive.&rdquo;
                  </p>
                  <p className="text-[11px] text-leaf font-medium mt-1 uppercase tracking-wider">
                    Leaf Lover Botanical Studio
                  </p>
                </div>
              </div>

              {/* Decorative Subtle Accent Badge */}
              <div className="hidden sm:block absolute -top-4 -right-4 bg-terracotta text-cream px-4 py-2 rounded-lg shadow-lg transform rotate-2 text-xs font-serif font-medium">
                Fresh Nursery Cultivation
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
