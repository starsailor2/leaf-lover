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
    <section className="py-16 lg:py-20 bg-cream-light/60 border-y border-forest/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <FadeIn direction="up" className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-widest text-leaf font-semibold">Find Your Fit</span>
            <h2 className="editorial-heading text-3xl sm:text-4xl font-bold text-forest mt-1">
              Shop by what your space needs.
            </h2>
            <p className="text-forest/70 text-sm mt-2">
              Discover plants matched to your lighting, lifestyle, and room purpose.
            </p>
          </div>
          <Link
            href="/shop"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-forest hover:text-leaf transition-colors"
          >
            <span>View All Categories</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </FadeIn>

      </div>

      {/* Horizontal drag-scroll filmstrip with mobile snap scrolling */}
      <div className="overflow-x-auto no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing touch-pan-x">
        <div className="flex gap-3.5 sm:gap-4 px-4 sm:px-8 lg:px-12 pb-3" style={{ width: 'max-content' }}>
          {needsData.map((item, idx) => (
            <FadeIn key={item.id} direction="scale" delay={idx * 90} className="snap-start">
              <Link
                href={item.href}
                className="group relative flex-shrink-0 block overflow-hidden shadow-md hover:shadow-xl transition-shadow w-[230px] sm:w-[260px] h-[320px] sm:h-[360px]"
                draggable={false}
              >
                {/* Full-bleed image — no border, no background box */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 230px, 260px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent" />

                {/* Text in lower portion */}
                <div className="absolute bottom-0 inset-x-0 p-5 z-10">
                  <h3 className="font-serif text-xl font-bold text-cream leading-tight group-hover:text-sage transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-cream/65 text-xs mt-1.5 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1 text-[11px] text-sage font-semibold uppercase tracking-wide">
                    <span>Browse</span>
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
