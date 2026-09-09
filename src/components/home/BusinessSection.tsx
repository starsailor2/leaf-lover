'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Building2, Check, ArrowRight } from 'lucide-react';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { FadeIn } from '../ui/FadeIn';

export const BusinessSection: React.FC = () => {
  const corporatePerks = [
    'Complete turnkey installation & custom architectural planters',
    'Plants selected specifically to endure continuous AC & low lux levels',
    'Uniformed weekly maintenance: zero employee burden',
    'Free replacement guarantee for any declining specimens',
    'Centralized corporate billing, GST invoicing & flexible contracts',
  ];

  return (
    <section className="py-20 lg:py-24 bg-forest-950 text-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <FadeIn direction="right" className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-800 text-leaf-light text-xs font-semibold">
              <Building2 className="w-3.5 h-3.5" />
              <span>For Offices, Cafés, Hotels & Clinics</span>
            </div>

            <h2 className="editorial-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-cream leading-tight">
              Make your workplace greener.
            </h2>

            <p className="text-cream/75 text-sm sm:text-base leading-relaxed">
              Biophilic spaces enhance employee productivity, reduce stress, and leave a lasting impression on visiting clients. We provide end-to-end commercial greenery and hassle-free ongoing maintenance.
            </p>

            <ul className="space-y-3 pt-2">
              {corporatePerks.map((perk) => (
                <li key={perk} className="flex items-start gap-3 text-xs sm:text-sm text-cream/80">
                  <span className="w-5 h-5 rounded-full bg-leaf/20 text-leaf-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>{perk}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/services/gardening"
                className="px-6 py-3 bg-leaf hover:bg-leaf-light text-white text-sm font-semibold rounded-md shadow transition-colors flex items-center justify-center gap-2"
              >
                <span>Explore B2B Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <WhatsAppButton
                variant="outline"
                size="md"
                options={{
                  type: 'business',
                  customMessage: 'Hi Leaf Lover, I am reaching out regarding plant styling and maintenance for our office/commercial space.'
                }}
              >
                Talk to Leaf Lover B2B
              </WhatsAppButton>
            </div>
          </FadeIn>

          {/* Right Image */}
          <FadeIn direction="left" className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-forest-800 group">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
                alt="Modern corporate office with lush green plants"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-forest-900/90 backdrop-blur-md border border-forest-700/50">
                <p className="text-xs font-serif italic text-cream">
                  &ldquo;Leaf Lover transformed our executive boardroom and lounge with resilient, magnificent foliage. Zero maintenance headache.&rdquo;
                </p>
                <p className="text-[10px] text-sage uppercase tracking-wider font-semibold mt-1">
                  Design Studio & Co-working Client
                </p>
              </div>
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
};
