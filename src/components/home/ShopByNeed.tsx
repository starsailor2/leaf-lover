'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

const needsData = [
  {
    id: 'home',
    title: 'For Your Home',
    description: 'Plants that purify the air and make living spaces feel genuinely alive.',
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=700&q=80',
    href: '/shop?need=home',
  },
  {
    id: 'office',
    title: 'For Your Office',
    description: 'Low-maintenance greenery that thrives in AC and enhances daily focus.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=80',
    href: '/shop?need=office',
  },
  {
    id: 'beginner',
    title: 'For Beginners',
    description: 'Forgiving, resilient varieties for anyone just beginning their plant journey.',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80',
    href: '/shop?need=beginner',
  },
  {
    id: 'gifting',
    title: 'For Gifting',
    description: 'Thoughtfully paired living plants in artisanal pots that grow for years.',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80',
    href: '/shop?need=gifting',
  },
  {
    id: 'outdoor',
    title: 'For Outdoor Spaces',
    description: 'Sun-tolerant plants, climbers, and flowering gems for balconies and terraces.',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=700&q=80',
    href: '/shop?need=outdoor',
  },
];

export const ShopByNeed: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-cream-light/60 border-y border-forest/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-widest text-leaf font-semibold">
              Find Your Fit
            </span>
            <h2 className="editorial-heading text-3xl sm:text-4xl font-bold text-forest mt-1">
              Shop by what your space needs.
            </h2>
            <p className="text-forest/70 text-sm mt-2">
              Instead of guessing among hundreds of varieties, discover plants matched to your lighting, lifestyle, and room purpose.
            </p>
          </div>
          <Link
            href="/shop"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-forest hover:text-leaf transition-colors"
          >
            <span>View All Categories</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {needsData.map((item, idx) => (
            <FadeIn key={item.id} delay={idx * 80} className="h-full">
              <Link
                href={item.href}
                className="group relative flex flex-col h-full rounded-xl overflow-hidden bg-cream border border-forest/10 hover:border-forest/30 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-forest/5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/30 to-transparent" />
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-forest group-hover:text-leaf transition-colors flex items-center justify-between">
                      <span>{item.title}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-leaf" />
                    </h3>
                    <p className="text-xs text-forest/70 mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-forest/5 flex items-center text-[11px] font-semibold text-leaf">
                    <span>Browse Selection →</span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
