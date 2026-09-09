'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Calendar, Sprout, Share2, Sparkles } from 'lucide-react';
import { guidesData } from '@/lib/data/guides';
import { initialProducts } from '@/lib/data/products';
import { ProductCard } from '@/components/product/ProductCard';

interface GuidePageProps {
  params: {
    slug: string;
  };
}

export default function GuideDetailPage({ params }: GuidePageProps) {
  const { slug } = params;
  const guide = guidesData.find((g) => g.slug === slug);

  if (!guide) {
    notFound();
  }

  const relatedPlants = initialProducts.filter((p) =>
    guide.relatedPlantSlugs?.includes(p.slug)
  );

  return (
    <article className="min-h-screen bg-cream py-8 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-xs font-semibold text-forest/70 hover:text-forest transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Guides</span>
          </Link>
        </div>

        {/* Category & Meta */}
        <div className="space-y-4 mb-8">
          <span className="bg-sage text-forest text-xs font-semibold px-3 py-1 rounded-full border border-forest/10">
            {guide.category}
          </span>

          <h1 className="editorial-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-forest leading-tight">
            {guide.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-forest/60 pt-1 pb-4 border-b border-forest/10">
            <span className="flex items-center gap-1 font-medium text-forest/80">
              <Sprout className="w-3.5 h-3.5 text-leaf" />
              {guide.author}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {guide.publishedAt}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {guide.readTime}
            </span>
          </div>
        </div>

        {/* Hero Cover Image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-card border border-forest/10 bg-cream-dark mb-12">
          <Image
            src={guide.coverImage}
            alt={guide.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Article Body Content */}
        <div className="prose prose-forest max-w-none space-y-10 text-forest/85 text-sm sm:text-base leading-relaxed">
          {guide.content.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="editorial-heading text-2xl sm:text-3xl font-bold text-forest">
                {section.heading}
              </h2>

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {p}
                </p>
              ))}

              {section.tips && section.tips.length > 0 && (
                <div className="p-5 my-4 rounded-xl bg-sage/50 border-l-4 border-leaf space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-forest uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-leaf" />
                    <span>Leaf Lover Botanical Tip</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-forest/80">
                    {section.tips.map((tip, tIdx) => (
                      <li key={tIdx}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Related Plants Featured In This Guide */}
        {relatedPlants.length > 0 && (
          <div className="mt-16 pt-12 border-t border-forest/10 space-y-6">
            <h3 className="editorial-heading text-2xl font-bold text-forest">
              Featured Plants Mentioned in this Guide
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedPlants.map((plant) => (
                <ProductCard key={plant.id} product={plant} />
              ))}
            </div>
          </div>
        )}

      </div>
    </article>
  );
}
