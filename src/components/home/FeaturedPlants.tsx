'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Product } from '@/lib/types';
import { ProductCard } from '../product/ProductCard';
import { FadeIn } from '../ui/FadeIn';

interface FeaturedPlantsProps {
  products: Product[];
}

export const FeaturedPlants: React.FC<FeaturedPlantsProps> = ({ products }) => {
  const featuredList = products.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <FadeIn direction="up" className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-leaf font-semibold">
              Curated Nursery Selection
            </span>
            <h2 className="editorial-heading text-3xl sm:text-4xl font-bold text-forest mt-1">
              Featured Plants & Planters
            </h2>
            <p className="text-forest/70 text-sm mt-2 max-w-md">
              Hand-tended specimens grown for resilience, structural grace, and natural living.
            </p>
          </div>

          <Link
            href="/shop"
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-leaf transition-colors group"
          >
            <span>Explore Full Catalogue</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeIn>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredList.map((product, idx) => (
            <FadeIn key={product.id} direction="up" delay={idx * 100}>
              <ProductCard product={product} priority={idx === 0} />
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
