'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { guidesData } from '@/lib/data/guides';
import { FadeIn } from '@/components/ui/FadeIn';

export default function GuidesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    'all',
    'Indoor Plants',
    'Watering',
    'Sunlight',
    'Balcony Gardening',
  ];

  const filteredGuides = guidesData.filter((g) => {
    if (selectedCategory !== 'all' && g.category !== selectedCategory) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-cream py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <FadeIn direction="up" className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest text-leaf font-semibold">
            Leaf Lover Botanical Library
          </span>
          <h1 className="editorial-heading text-4xl sm:text-5xl font-bold text-forest mt-1 leading-tight">
            Gardening Guides & Plant Care Wisdom
          </h1>
          <p className="text-forest/75 text-base sm:text-lg mt-3 leading-relaxed">
            Science-backed, approachable care instructions designed to demystify plant parenting and turn your thumb green.
          </p>
        </FadeIn>

        {/* Category Filter Pills */}
        <FadeIn direction="up" delay={80} className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-forest/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-forest text-cream shadow-sm'
                  : 'bg-white/60 text-forest/70 hover:bg-white hover:text-forest'
              }`}
            >
              {cat === 'all' ? 'All Guides' : cat}
            </button>
          ))}
        </FadeIn>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGuides.map((guide, idx) => (
            <FadeIn
              key={guide.id}
              direction="up"
              delay={idx * 100}
              className="group flex flex-col bg-white/75 rounded-2xl overflow-hidden border border-forest/10 hover:border-forest/25 shadow-soft hover:shadow-card hover:-translate-y-1.5 transition-all duration-300"
            >
              <Link href={`/guides/${guide.slug}`} className="relative aspect-[16/10] w-full overflow-hidden bg-forest/5">
                <Image
                  src={guide.coverImage}
                  alt={guide.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-cream/90 text-forest text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm border border-forest/10">
                  {guide.category}
                </div>
              </Link>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-3 text-xs text-forest/50 font-medium mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {guide.readTime}
                    </span>
                    <span>•</span>
                    <span>{guide.publishedAt}</span>
                  </div>

                  <Link href={`/guides/${guide.slug}`}>
                    <h2 className="font-serif text-xl font-bold text-forest group-hover:text-leaf transition-colors leading-snug">
                      {guide.title}
                    </h2>
                  </Link>

                  <p className="text-xs sm:text-sm text-forest/70 mt-2 line-clamp-3 leading-relaxed">
                    {guide.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-forest/5 flex items-center justify-between text-xs font-semibold text-leaf">
                  <span className="group-hover:underline">Read Full Article</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </div>
  );
}
