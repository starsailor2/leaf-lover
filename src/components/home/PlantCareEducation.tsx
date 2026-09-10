'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { guidesData } from '@/lib/data/guides';
import { FadeIn } from '../ui/FadeIn';

export const PlantCareEducation: React.FC = () => {
  const featuredGuides = guidesData.slice(0, 3);

  return (
    <section className="py-20 lg:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn direction="up" className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-leaf font-semibold">
              Botanical Knowledge
            </span>
            <h2 className="editorial-heading text-3xl sm:text-4xl font-bold text-forest mt-1">
              Plant Care & Gardening Guides
            </h2>
            <p className="text-forest/70 text-sm mt-2 max-w-md">
              Honest, science-backed guidance to build confidence and help your green companions thrive.
            </p>
          </div>

          <Link
            href="/guides"
            className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-forest hover:text-leaf transition-colors"
          >
            <span>Browse All Guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredGuides.map((guide, idx) => (
            <FadeIn
              key={guide.id}
              direction="scale"
              staggerIndex={idx}
              className="group flex flex-col bg-white border border-forest/10 hover:border-forest/25 shadow-soft hover:shadow-card hover:-translate-y-1.5 transition-all duration-300"
            >
              <Link href={`/guides/${guide.slug}`} className="relative aspect-[16/10] w-full overflow-hidden bg-forest/5">
                <Image
                  src={guide.coverImage}
                  alt={guide.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-cream/95 text-forest text-[11px] font-semibold px-2.5 py-1 backdrop-blur-sm border border-forest/10">
                  {guide.category}
                </div>
              </Link>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center gap-3 text-[11px] text-forest/50 font-medium mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {guide.readTime}
                    </span>
                    <span>•</span>
                    <span>{guide.publishedAt}</span>
                  </div>

                  <Link href={`/guides/${guide.slug}`}>
                    <h3 className="font-serif text-lg font-bold text-forest group-hover:text-leaf transition-colors leading-snug">
                      {guide.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-forest/70 mt-2 line-clamp-2 leading-relaxed">
                    {guide.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-forest/5 flex items-center justify-between text-xs font-semibold text-leaf">
                  <span className="group-hover:underline">Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
