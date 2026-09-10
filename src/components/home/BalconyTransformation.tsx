'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Check, ArrowRight } from 'lucide-react';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { FadeIn } from '../ui/FadeIn';

export const BalconyTransformation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'after' | 'before'>('after');

  const steps = [
    { num: '01', title: 'Space Assessment', desc: 'We inspect balcony light, wind shear, and structural layout.' },
    { num: '02', title: 'Plant & Planter Selection', desc: 'Hardy sun-tolerant greenery, vertical trellises, and terracotta.' },
    { num: '03', title: 'Installation & Irrigation', desc: 'Clean on-site potting and optional micro-drip watering lines.' },
    { num: '04', title: 'Continuous Maintenance', desc: 'Bi-weekly horticultural checks and 30-day health guarantee.' },
  ];

  return (
    <section className="py-20 lg:py-28 bg-cream border-b border-forest/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct Visual Before/After Showcase */}
          <FadeIn direction="right" className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between pb-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-terracotta" />
                <span className="text-xs font-semibold text-forest uppercase tracking-wider">
                  Transformation Showcase
                </span>
              </div>

              {/* View Switcher Toggle - Sharp Corners */}
              <div className="inline-flex bg-forest/5 p-1 border border-forest/15 text-xs">
                <button
                  onClick={() => setActiveTab('before')}
                  className={`px-3.5 py-1 font-medium transition-all ${
                    activeTab === 'before'
                      ? 'bg-forest text-cream shadow-sm'
                      : 'text-forest/70 hover:text-forest'
                  }`}
                >
                  Empty Balcony
                </button>
                <button
                  onClick={() => setActiveTab('after')}
                  className={`px-3.5 py-1 font-medium transition-all ${
                    activeTab === 'after'
                      ? 'bg-forest text-cream shadow-sm'
                      : 'text-forest/70 hover:text-forest'
                  }`}
                >
                  Leaf Lover Oasis
                </button>
              </div>
            </div>

            {/* Direct Showcase Image - Harmonious Botanical Palette & Sharp Corners */}
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-forest/15 shadow-xl bg-forest-950 group">
              {activeTab === 'after' ? (
                <Image
                  src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=85"
                  alt="Lush green balcony sanctuary with vibrant plants"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-103"
                />
              ) : (
                <Image
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85"
                  alt="Bare concrete balcony before transformation"
                  fill
                  className="object-cover grayscale contrast-75 brightness-95 transition-all duration-700 group-hover:scale-103"
                />
              )}

              {/* Soft vignette gradient for seamless depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/40 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 bg-forest-900/90 text-cream text-xs font-semibold backdrop-blur-md border border-forest-700/60 shadow-md flex items-center gap-1.5">
                  {activeTab === 'after' ? '🌿 After: Living Sanctuary' : '🏢 Before: Unused Concrete'}
                </span>
              </div>
            </div>

            <p className="text-xs text-forest/60 italic text-center">
              Real 45-sq-ft apartment balcony transformation in Bangalore, planted with Bougainvillea, Areca palms & aromatic basil.
            </p>
          </FadeIn>

          {/* Right Column: Copy, Process & CTAs */}
          <FadeIn direction="left" className="lg:col-span-6 space-y-6 lg:pl-6">
            <span className="text-xs uppercase tracking-widest text-leaf font-semibold">
              Bespoke Green Architecture
            </span>

            <h2 className="editorial-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-forest leading-tight">
              Your balcony could be your favourite place at home.
            </h2>

            <p className="text-forest/75 text-sm sm:text-base leading-relaxed">
              Most apartment balconies end up holding laundry stands or excess storage. In just one weekend, we transform unused outdoor space into a lush, private garden where you can sip your morning coffee amidst birds and flowers.
            </p>

            {/* 4 Process Steps - Sharp Corners Container Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {steps.map((step) => (
                <div key={step.num} className="p-4 bg-sage/35 border border-forest/10 hover:border-forest/30 transition-colors space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-terracotta">{step.num}</span>
                    <h4 className="text-xs font-semibold text-forest">{step.title}</h4>
                  </div>
                  <p className="text-[11px] text-forest/70 leading-normal">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/services/balcony-setup"
                className="px-7 py-3.5 bg-forest hover:bg-forest-800 text-cream text-sm font-semibold shadow transition-all flex items-center justify-center gap-2"
              >
                <span>Plan My Balcony</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <WhatsAppButton
                variant="outline"
                size="md"
                options={{
                  type: 'balcony'
                }}
                className="py-3.5"
              >
                Chat on WhatsApp
              </WhatsAppButton>
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
};
