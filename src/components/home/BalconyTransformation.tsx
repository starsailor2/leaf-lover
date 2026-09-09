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
          
          {/* Left Column: Visual Before/After Showcase */}
          <FadeIn direction="right" className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between pb-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-terracotta" />
                <span className="text-xs font-semibold text-forest uppercase tracking-wider">
                  Transformation Showcase
                </span>
              </div>

              {/* View Switcher Toggle */}
              <div className="inline-flex bg-forest/5 p-1 rounded-full border border-forest/10 text-xs">
                <button
                  onClick={() => setActiveTab('before')}
                  className={`px-3.5 py-1 rounded-full font-medium transition-all ${
                    activeTab === 'before'
                      ? 'bg-forest text-cream shadow-sm'
                      : 'text-forest/70 hover:text-forest'
                  }`}
                >
                  Empty Balcony
                </button>
                <button
                  onClick={() => setActiveTab('after')}
                  className={`px-3.5 py-1 rounded-full font-medium transition-all ${
                    activeTab === 'after'
                      ? 'bg-forest text-cream shadow-sm'
                      : 'text-forest/70 hover:text-forest'
                  }`}
                >
                  Leaf Lover Oasis
                </button>
              </div>
            </div>

            {/* Showcase Image with Badge */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card border border-forest/10 bg-cream-dark">
              {activeTab === 'after' ? (
                <Image
                  src="https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=1000&q=80"
                  alt="Lush green balcony sanctuary"
                  fill
                  className="object-cover transition-opacity duration-300"
                />
              ) : (
                <Image
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80"
                  alt="Bare concrete balcony before transformation"
                  fill
                  className="object-cover grayscale contrast-75 transition-opacity duration-300"
                />
              )}

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-cream/90 text-forest text-xs font-semibold backdrop-blur-sm border border-forest/10 shadow-sm">
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

            {/* 4 Process Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {steps.map((step) => (
                <div key={step.num} className="p-3.5 rounded-lg bg-sage/40 border border-forest/5 space-y-1">
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
                className="px-6 py-3 bg-forest hover:bg-forest-800 text-cream text-sm font-semibold rounded-md shadow transition-all flex items-center justify-center gap-2"
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
