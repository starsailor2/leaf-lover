'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, Sun, ArrowUpRight } from 'lucide-react';
import { Product } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import { AvailabilityBadge } from '../ui/AvailabilityBadge';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, priority = false }) => {
  const { addItem } = useCart();
  const isOutOfStock = product.availability === 'Out of Stock';

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl shadow-soft hover:shadow-card hover:-translate-y-1.5 transition-all duration-300 cursor-pointer bg-forest">

      {/* Full-bleed image — no border, no padding, fills card face */}
      <Link href={`/shop/${product.slug}`} className="relative aspect-[3/4] w-full block overflow-hidden">
        <Image
          src={product.images[0] || 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=600&q=80'}
          alt={product.name}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-107"
        />

        {/* Cinematic gradient overlay — always present, darkens from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/20 to-transparent" />

        {/* Top badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          <AvailabilityBadge status={product.availability} size="sm" />
          {product.bestSeller && (
            <span className="bg-terracotta text-cream text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full w-fit shadow-sm">
              Bestseller
            </span>
          )}
        </div>

        {/* Quick view icon top-right */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm text-cream opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <ArrowUpRight className="w-4 h-4" />
        </div>

        {/* ── Frosted glass info strip — always visible at bottom ── */}
        <div className="absolute bottom-0 inset-x-0 p-4 z-10">
          {/* Category + light */}
          <div className="flex items-center gap-2 text-[10px] text-cream/60 font-medium mb-1">
            <span>{product.category}</span>
            <span>•</span>
            <span className="flex items-center gap-0.5">
              <Sun className="w-2.5 h-2.5 text-sage" />
              {product.lightRequirement}
            </span>
          </div>

          {/* Name */}
          <h3 className="font-serif text-lg font-bold text-cream leading-snug group-hover:text-sage transition-colors">
            {product.name}
          </h3>
          {product.botanicalName && (
            <p className="text-[11px] italic text-cream/50 font-serif mt-0.5">{product.botanicalName}</p>
          )}

          {/* Price */}
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-base font-bold text-cream">{formatPrice(product.price)}</span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-xs text-cream/40 line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
        </div>
      </Link>

      {/* ── Action bar — slides up from below on hover ── */}
      <div className="card-action-reveal absolute bottom-0 inset-x-0 z-20">
        <div className="bg-forest/95 backdrop-blur-sm px-4 py-3 grid grid-cols-2 gap-2 border-t border-white/10">
          <button
            onClick={(e) => { e.preventDefault(); addItem(product, 1); }}
            disabled={isOutOfStock}
            className="w-full py-2 px-3 bg-leaf hover:bg-leaf/80 disabled:bg-stone-600 disabled:text-stone-400 text-cream text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>{isOutOfStock ? 'Sold Out' : 'Add to Cart'}</span>
          </button>
          <WhatsAppButton
            variant="outline"
            size="sm"
            options={{ type: 'product', productName: product.name, productPrice: product.price }}
            className="w-full text-xs border-white/20 text-cream hover:bg-white/10"
          >
            Ask Us
          </WhatsAppButton>
        </div>
      </div>

    </div>
  );
};
