'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, Sparkles, Stethoscope, BookOpen, ArrowRight } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

const servicesList = [
  {
    icon: Compass,
    title: 'Balcony Setup',
    description: 'Bespoke design, plant selection, porous planters, and micro-drip irrigation tailored to your space.',
    href: '/services/balcony-setup',
    ctaText: 'Transform Balcony',
  },
  {
    icon: Sparkles,
    title: 'Gardening Services',
    description: 'Scheduled horticultural care, organic soil nourishment, and pruning for homes and workplaces.',
    href: '/services/gardening',
    ctaText: 'Explore Maintenance',
  },
  {
    icon: Stethoscope,
    title: 'Plant Doctor',
    description: 'Expert diagnostic support for yellowing leaves, pest infestations, and drooping stems.',
    href: '/plant-doctor',
    ctaText: 'Diagnose Plant',
  },
  {
    icon: BookOpen,
    title: 'Plant Care Guidance',
    description: 'Comprehensive botanical tutorials on light measurement, watering rituals, and repotting.',
    href: '/guides',
    ctaText: 'Read Guides',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-forest text-cream relative overflow-hidden">
      {/* Subtle organic background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-leaf/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-leaf-dark/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <FadeIn direction="up" className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-widest text-leaf-light font-semibold">
            Beyond Selling Plants
          </span>
          <h2 className="editorial-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mt-2 leading-tight">
            We don’t just sell plants. We help you grow with them.
          </h2>
          <p className="text-cream/70 text-base sm:text-lg mt-4 font-normal max-w-2xl">
            Whether transforming an empty balcony into an urban jungle or nursing a struggling houseplant back to vibrant life, our team of horticulturists is with you every step of the journey.
          </p>
        </FadeIn>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, idx) => {
            const Icon = service.icon;
            return (
              <FadeIn
                key={service.title}
                direction="up"
                delay={idx * 100}
                className="group flex flex-col justify-between p-6 bg-forest-900/80 border border-forest-700/60 hover:border-leaf-light/50 transition-all duration-300 hover:-translate-y-1.5 shadow-lg hover:shadow-2xl"
              >
                <div>
                  <div className="w-12 h-12 bg-forest-800 text-leaf-light flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-forest-700">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-cream mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-cream/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-forest-800">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-leaf-light hover:text-cream transition-colors"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Bottom Hub CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-leaf hover:bg-leaf-light text-white text-sm font-semibold transition-all shadow-md"
          >
            <span>Explore All Services & Consultations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
