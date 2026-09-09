'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound, useRouter } from 'next/navigation';
import {
  Sun,
  Droplets,
  Wind,
  Layers,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Truck,
  Heart,
  ChevronRight,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  Share2
} from 'lucide-react';
import { initialProducts } from '@/lib/data/products';
import { AvailabilityBadge } from '@/components/ui/AvailabilityBadge';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { ProductCard } from '@/components/product/ProductCard';

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const router = useRouter();
  const { slug } = params;
  const product = initialProducts.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState<string>(product.images[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const [copied, setCopied] = useState<boolean>(false);

  const isOutOfStock = product.availability === 'Out of Stock';

  // Related products
  const relatedProducts = initialProducts.filter(
    (p) => product.relatedProductSlugs?.includes(p.slug) || (p.categorySlug === product.categorySlug && p.id !== product.id)
  ).slice(0, 3);

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  const handleBuyNow = () => {
    addItem(product, quantity);
    router.push('/checkout');
  };

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-cream py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-forest/60 mb-8 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-forest">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/shop" className="hover:text-forest">Shop</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href={`/shop?category=${product.categorySlug}`} className="hover:text-forest">
            {product.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-forest font-semibold truncate">{product.name}</span>
        </nav>

        {/* Product Details Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left: Image Gallery */}
          <div className="lg:col-span-6 space-y-4">
            {/* Primary Main Image */}
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-cream-dark border border-forest/10 shadow-soft">
              <Image
                src={selectedImage || product.images[0]}
                alt={product.name}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <AvailabilityBadge status={product.availability} />
                {product.bestSeller && (
                  <span className="bg-forest text-cream text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    Bestseller
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnails Row */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-1">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all ${
                      selectedImage === img ? 'border-forest ring-2 ring-forest/20' : 'border-forest/10 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt={`${product.name} view ${idx + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Info, Price, Ordering, Care */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-leaf font-semibold">
                  {product.category}
                </span>
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 text-xs text-forest/60 hover:text-forest transition-colors p-1"
                  aria-label="Share product"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copied ? 'Link Copied!' : 'Share'}</span>
                </button>
              </div>

              <h1 className="editorial-heading text-3xl sm:text-4xl font-bold text-forest mt-1">
                {product.name}
              </h1>

              {product.botanicalName && (
                <p className="text-sm font-serif italic text-forest/60 mt-0.5">
                  {product.botanicalName}
                </p>
              )}
            </div>

            {/* Price Row */}
            <div className="flex items-baseline gap-3 pb-4 border-b border-forest/10">
              <span className="text-3xl font-bold text-forest">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-base text-forest/40 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              <span className="text-xs text-forest/60">
                (Inclusive of all taxes & safe packaging)
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-forest/80 leading-relaxed">
              {product.description}
            </p>

            {/* Purchase & Ordering Box */}
            <div className="p-5 rounded-xl bg-white/70 border border-forest/10 space-y-4 shadow-soft">
              
              {/* Quantity Stepper */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-forest/80">
                  Quantity
                </span>
                <div className="flex items-center border border-forest/20 rounded-md bg-cream/40">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1 || isOutOfStock}
                    className="p-2 text-forest/70 hover:text-forest disabled:opacity-30"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-10 text-center text-sm font-semibold text-forest">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stockQuantity, quantity + 1))}
                    disabled={quantity >= product.stockQuantity || isOutOfStock}
                    className="p-2 text-forest/70 hover:text-forest disabled:opacity-30"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  onClick={handleAddToCart}
                  disabled={isOutOfStock}
                  className="py-3 px-4 bg-forest hover:bg-forest-800 disabled:bg-stone-200 disabled:text-stone-400 text-cream font-semibold text-sm rounded-md shadow flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{isOutOfStock ? 'Currently Out of Stock' : 'Add to Cart'}</span>
                </button>

                <button
                  onClick={handleBuyNow}
                  disabled={isOutOfStock}
                  className="py-3 px-4 bg-leaf hover:bg-leaf-dark disabled:opacity-40 text-white font-semibold text-sm rounded-md shadow flex items-center justify-center gap-2 transition-all"
                >
                  <span>Buy Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* WhatsApp Enquiry Button */}
              <WhatsAppButton
                variant="outline"
                size="md"
                options={{
                  type: 'product',
                  productName: product.name,
                  productPrice: product.price,
                }}
                className="w-full justify-center"
              >
                Ask on WhatsApp about this plant
              </WhatsAppButton>

              {/* Stock note */}
              {product.stockQuantity <= 5 && product.stockQuantity > 0 && (
                <p className="text-xs text-amber-700 font-medium text-center">
                  ⚡ Only {product.stockQuantity} plants left in this nursery batch
                </p>
              )}
            </div>

            {/* Botanical Care Specifications */}
            <div className="space-y-4 pt-4 border-t border-forest/10">
              <h3 className="font-serif text-lg font-bold text-forest">
                Botanical Care Guide
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="flex gap-3 p-3 rounded-lg bg-sage/30 border border-forest/5">
                  <Sun className="w-5 h-5 text-leaf flex-shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-semibold text-forest">Light Requirement</h4>
                    <p className="text-xs text-forest/70">{product.lightRequirement}</p>
                  </div>
                </div>

                <div className="flex gap-3 p-3 rounded-lg bg-sage/30 border border-forest/5">
                  <Droplets className="w-5 h-5 text-leaf flex-shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-semibold text-forest">Watering Routine</h4>
                    <p className="text-xs text-forest/70">{product.watering}</p>
                  </div>
                </div>

                {product.humidity && (
                  <div className="flex gap-3 p-3 rounded-lg bg-sage/30 border border-forest/5">
                    <Wind className="w-5 h-5 text-leaf flex-shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-semibold text-forest">Humidity</h4>
                      <p className="text-xs text-forest/70">{product.humidity}</p>
                    </div>
                  </div>
                )}

                <div className="flex gap-3 p-3 rounded-lg bg-sage/30 border border-forest/5">
                  <Layers className="w-5 h-5 text-leaf flex-shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-semibold text-forest">Soil & Substrate</h4>
                    <p className="text-xs text-forest/70">{product.soil}</p>
                  </div>
                </div>

                {product.difficulty && (
                  <div className="flex gap-3 p-3 rounded-lg bg-sage/30 border border-forest/5">
                    <Sparkles className="w-5 h-5 text-leaf flex-shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-semibold text-forest">Difficulty</h4>
                      <p className="text-xs text-forest/70">{product.difficulty}</p>
                    </div>
                  </div>
                )}

                {product.size && (
                  <div className="flex gap-3 p-3 rounded-lg bg-sage/30 border border-forest/5">
                    <TrendingUp className="w-5 h-5 text-leaf flex-shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-semibold text-forest">Approximate Size</h4>
                      <p className="text-xs text-forest/70">{product.size}</p>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Promises */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-forest/70">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-leaf" />
                <span>Zero-Spill Plant Packaging</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-leaf" />
                <span>30-Day Plant Guarantee</span>
              </div>
            </div>

          </div>

        </div>

        {/* Complete the Look / Related Cross Sells (Plant -> Pot -> Soil -> Fertilizer) */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-forest/10 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-leaf font-semibold">
                Complete the Botanical Pairing
              </span>
              <h2 className="editorial-heading text-2xl sm:text-3xl font-bold text-forest mt-1">
                Frequently Paired With This Specimen
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
