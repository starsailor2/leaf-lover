'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, Sun, Droplets, ArrowUpRight } from 'lucide-react';
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
    <div className="group relative flex flex-col bg-white/70 hover:bg-white rounded-xl border border-forest/10 hover:border-forest/20 shadow-soft hover:shadow-card hover:-translate-y-1.5 transition-all duration-300 overflow-hidden">
      
      {/* Product Image & Badges */}
      <Link href={`/shop/${product.slug}`} className="relative aspect-square w-full bg-cream-dark overflow-hidden block">
        <Image
          src={product.images[0] || 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=600&q=80'}
          alt={product.name}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          <AvailabilityBadge status={product.availability} size="sm" />
          {product.bestSeller && (
            <span className="bg-forest text-cream text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full w-fit">
              Bestseller
            </span>
          )}
        </div>

        {/* Quick View Corner Icon */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-cream/90 text-forest opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center shadow-sm">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </Link>

      {/* Product Content */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Category & Care Tags */}
          <div className="flex items-center gap-2 text-[11px] text-forest/60 font-medium mb-1">
            <span>{product.category}</span>
            <span>•</span>
            <span className="flex items-center gap-0.5">
              <Sun className="w-3 h-3 text-leaf" />
              {product.lightRequirement}
            </span>
          </div>

          {/* Plant Name */}
          <Link href={`/shop/${product.slug}`} className="block">
            <h3 className="font-serif text-lg font-bold text-forest group-hover:text-leaf transition-colors leading-snug">
              {product.name}
            </h3>
          </Link>

          {product.botanicalName && (
            <p className="text-xs italic text-forest/50 font-serif mb-1">
              {product.botanicalName}
            </p>
          )}

          {/* Short Description */}
          <p className="text-xs text-forest/70 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Price & Actions */}
        <div className="pt-2 border-t border-forest/5 space-y-3">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-forest">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-xs text-forest/40 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => addItem(product, 1)}
              disabled={isOutOfStock}
              className="w-full py-2 px-3 bg-forest hover:bg-forest-800 disabled:bg-stone-200 disabled:text-stone-400 text-cream text-xs font-medium rounded flex items-center justify-center gap-1.5 transition-colors"
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>{isOutOfStock ? 'Sold Out' : 'Add to Cart'}</span>
            </button>

            <WhatsAppButton
              variant="outline"
              size="sm"
              options={{
                type: 'product',
                productName: product.name,
                productPrice: product.price,
              }}
              className="w-full text-xs"
            >
              Ask
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </div>
  );
};
