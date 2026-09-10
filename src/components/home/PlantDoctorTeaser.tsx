'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Stethoscope, AlertCircle, Camera, CheckCircle2, ArrowRight } from 'lucide-react';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { FadeIn } from '../ui/FadeIn';

export const PlantDoctorTeaser: React.FC = () => {
  const commonIssues = [
    'Yellowing or dropping leaves',
    'Brown crispy leaf tips',
    'Unexplained wilting while wet',
    'Tiny webs, white fluff, or pests',
  ];

  return (
    <section className="py-16 lg:py-24 bg-sage/30 border-b border-forest/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container with sharp corners */}
        <div className="bg-white border border-forest/15 shadow-soft p-8 lg:p-14">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <FadeIn direction="right" className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-forest/5 text-forest text-xs font-semibold border border-forest/10">
                <Stethoscope className="w-4 h-4 text-leaf" />
                <span>Leaf Lover Botanical Health Clinic</span>
              </div>

              <h2 className="editorial-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-forest leading-tight">
                Something wrong with your plant?
              </h2>

              <p className="text-forest/75 text-sm sm:text-base leading-relaxed">
                Plants cannot speak, but their leaves tell a clear story. Tell us what is happening or send a close-up photo. Our horticulturists diagnose the root cause and guide you through recovery.
              </p>

              {/* Symptoms Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {commonIssues.map((issue) => (
                  <div key={issue} className="flex items-center gap-2.5 text-xs sm:text-sm text-forest/80">
                    <AlertCircle className="w-4 h-4 text-terracotta flex-shrink-0" />
                    <span>{issue}</span>
                  </div>
                ))}
              </div>

              {/* Dual Action CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  href="/plant-doctor"
                  className="px-7 py-3.5 bg-forest hover:bg-forest-800 text-cream text-sm font-semibold shadow flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Interactive Symptom Checker</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <WhatsAppButton
                  variant="primary"
                  size="md"
                  options={{
                    type: 'plant-doctor',
                    customMessage: 'Hi Leaf Lover Plant Doctor, I have a photo of my sick plant. Could you help diagnose what is wrong with it?'
                  }}
                  className="py-3.5"
                >
                  <Camera className="w-4 h-4 mr-1 inline" />
                  WhatsApp a Photo
                </WhatsAppButton>
              </div>
            </FadeIn>

            {/* Right Diagnostic Visual - Direct, borderless picture with sharp presentation */}
            <FadeIn direction="left" className="lg:col-span-5 relative">
              <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden border border-forest/15 shadow-xl bg-forest-950 group">
                <Image
                  src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=1000&q=85"
                  alt="Close-up inspection of healthy tropical foliage"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Soft bottom vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/50 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Recovery Guarantee Card with sharp corners */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-forest/95 backdrop-blur-md text-cream border-l-2 border-leaf-light shadow-lg">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-leaf-light flex-shrink-0" />
                    <p className="text-xs font-medium leading-snug">
                      Over 85% of ailing houseplants recover with early targeted care.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>

        </div>
      </div>
    </section>
  );
};
