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
        <div className="bg-white/80 rounded-2xl border border-forest/10 shadow-soft p-8 lg:p-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <FadeIn direction="right" className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest/5 text-forest text-xs font-semibold">
                <Stethoscope className="w-4 h-4 text-leaf" />
                <span>Leaf Lover Botanical Health Clinic</span>
              </div>

              <h2 className="editorial-heading text-3xl sm:text-4xl font-bold text-forest leading-tight">
                Something wrong with your plant?
              </h2>

              <p className="text-forest/75 text-sm sm:text-base leading-relaxed">
                Plants cannot speak, but their leaves tell a clear story. Tell us what is happening or send a close-up photo. Our horticulturists diagnose the root cause and guide you through recovery.
              </p>

              {/* Symptoms Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {commonIssues.map((issue) => (
                  <div key={issue} className="flex items-center gap-2 text-xs text-forest/80">
                    <AlertCircle className="w-3.5 h-3.5 text-terracotta flex-shrink-0" />
                    <span>{issue}</span>
                  </div>
                ))}
              </div>

              {/* Dual Action CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/plant-doctor"
                  className="px-6 py-3 bg-forest hover:bg-forest-800 text-cream text-sm font-semibold rounded-md shadow flex items-center justify-center gap-2 transition-colors"
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
                >
                  <Camera className="w-4 h-4 mr-1 inline" />
                  WhatsApp a Photo
                </WhatsAppButton>
              </div>
            </FadeIn>

            {/* Right Diagnostic Visual Graphic */}
            <FadeIn direction="left" className="lg:col-span-5 relative">
              <div className="relative aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden shadow-card border border-forest/10 bg-cream-dark group">
                <Image
                  src="https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=800&q=80"
                  alt="Horticulturist inspecting plant leaves"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Recovery Guarantee Card */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-forest/90 backdrop-blur-md text-cream shadow-md border border-forest-700/50 animate-float-slow">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-leaf-light flex-shrink-0" />
                    <p className="text-xs font-medium">
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
