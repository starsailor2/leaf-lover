'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Compass, Sparkles, Building2, Stethoscope, ArrowRight, CheckCircle2 } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { servicesData } from '@/lib/data/services';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-cream py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-widest text-leaf font-semibold">
            Leaf Lover Botanical Services
          </span>
          <h1 className="editorial-heading text-4xl sm:text-5xl font-bold text-forest mt-1 leading-tight">
            We help you build, nourish & sustain your green spaces.
          </h1>
          <p className="text-forest/75 text-base sm:text-lg mt-4 leading-relaxed">
            From creating private balcony sanctuaries to maintaining expansive corporate green corridors and diagnosing ailing houseplants, our certified horticulturists bring botanical expertise to your doorstep.
          </p>
        </div>

        {/* Services List Grid */}
        <div className="space-y-16">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 rounded-3xl bg-white/70 border border-forest/10 shadow-soft`}
              >
                {/* Visual Image */}
                <div className={`lg:col-span-6 relative ${isEven ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card border border-forest/10 bg-cream-dark">
                    <Image
                      src={service.heroImage}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content & Steps */}
                <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-1' : ''}`}>
                  <span className="text-xs font-semibold text-leaf uppercase tracking-wider">
                    Service 0{index + 1}
                  </span>

                  <h2 className="editorial-heading text-3xl font-bold text-forest">
                    {service.title}
                  </h2>

                  <p className="text-sm sm:text-base text-forest/80 leading-relaxed">
                    {service.longDescription}
                  </p>

                  {/* Features / Highlights */}
                  <div className="space-y-2 pt-2">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-forest/80">
                        <CheckCircle2 className="w-4 h-4 text-leaf flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs font-serif italic text-forest/70 pt-1">
                    {service.pricingNote}
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <Link
                      href={`/services/${service.slug}`}
                      className="px-6 py-3 bg-forest hover:bg-forest-800 text-cream text-sm font-semibold rounded-md shadow flex items-center justify-center gap-2 transition-colors"
                    >
                      <span>Learn More & Consult</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <WhatsAppButton
                      variant="outline"
                      size="md"
                      options={{
                        type: 'gardening',
                        customMessage: `Hi Leaf Lover, I would like to consult with your team regarding ${service.title}.`
                      }}
                    >
                      Ask on WhatsApp
                    </WhatsAppButton>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Plant Doctor Clinic Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-forest text-cream flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-leaf-light text-xs font-semibold">
              <Stethoscope className="w-4 h-4" />
              <span>Plant Doctor Emergency Desk</span>
            </div>
            <h2 className="editorial-heading text-3xl font-bold text-cream">
              Have a sick or struggling plant right now?
            </h2>
            <p className="text-cream/70 text-sm leading-relaxed">
              Don’t wait until roots rot. Use our interactive diagnostic tool or message a leaf photo to our Plant Doctor on WhatsApp.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              href="/plant-doctor"
              className="px-6 py-3.5 bg-cream hover:bg-white text-forest text-sm font-semibold rounded-md shadow text-center"
            >
              Plant Doctor Tool
            </Link>
            <WhatsAppButton
              variant="primary"
              size="lg"
              options={{
                type: 'plant-doctor',
                customMessage: 'Hi Leaf Lover Plant Doctor, I need urgent advice for my plant.'
              }}
            >
              WhatsApp Doctor
            </WhatsAppButton>
          </div>
        </div>

      </div>
    </div>
  );
}
