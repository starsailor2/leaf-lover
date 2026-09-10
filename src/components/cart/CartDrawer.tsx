'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { siteConfig } from '@/lib/config';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeItem,
    subtotal,
    deliveryFee,
    total,
    freeDeliveryThresholdRemaining
  } = useCart();

  // Handle Escape key to close cart
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCartOpen) {
        setIsCartOpen(false);
      }
    };
    if (isCartOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCartOpen, setIsCartOpen]);

  // Lock background body scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isCartOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden drawer-container-transition ${
        isCartOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
      }`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isCartOpen}
      aria-label="Your Plant Basket"
    >
      {/* Backdrop with smooth cubic-bezier fade */}
      <div
        className={`fixed inset-0 bg-forest-950/60 backdrop-blur-sm drawer-backdrop-transition ${
          isCartOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-in Drawer Container (Mobile: full width without left gap; PC: max-w-md) */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10 pointer-events-none">
        <div
          className={`w-screen max-w-full sm:max-w-md bg-cream-light shadow-2xl flex flex-col border-l border-forest/10 pointer-events-auto transform-gpu drawer-panel-transition ${
            isCartOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          
          {/* Header */}
          <div className="p-5 border-b border-forest/10 flex items-center justify-between bg-cream">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-forest" />
              <h2 className="font-serif text-xl font-bold text-forest">Your Plant Basket</h2>
              <span className="text-xs bg-forest/10 text-forest px-2 py-0.5 rounded-full font-medium">
                {items.length} {items.length === 1 ? 'item' : 'items'}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-9 h-9 rounded-full text-forest/70 hover:text-forest hover:bg-forest/10 flex items-center justify-center transition-colors active:scale-95"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-sage/50 px-5 py-3 border-b border-forest/5">
            {freeDeliveryThresholdRemaining > 0 ? (
              <div>
                <p className="text-xs text-forest/80 mb-1.5">
                  Add <span className="font-semibold text-forest">{formatPrice(freeDeliveryThresholdRemaining)}</span> more for <strong>Free Botanical Delivery</strong>
                </p>
                <div className="w-full bg-forest/15 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-leaf h-full transition-all duration-300"
                    style={{
                      width: `${Math.min(100, (subtotal / siteConfig.freeDeliveryThreshold) * 100)}%`
                    }}
                  />
                </div>
              </div>
            ) : (
              <p className="text-xs text-emerald-800 font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                You have unlocked Free Handled Botanical Delivery!
              </p>
            )}
          </div>

          {/* Cart Item List / Empty State */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-forest/5 flex items-center justify-center text-forest/40">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <p className="font-serif text-lg text-forest font-semibold">Your cart is looking a little empty.</p>
                  <p className="text-xs text-forest/60 max-w-xs">
                    Bring a little more nature into your space with hand-selected foliage.
                  </p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 text-sm font-medium text-cream bg-forest hover:bg-forest-800 px-5 py-2.5 rounded-md transition-colors inline-block"
                >
                  <Link href="/shop">Explore Plants</Link>
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3 bg-white/70 rounded-lg border border-forest/10 hover:border-forest/20 transition-all"
                >
                  <div className="relative w-20 h-20 rounded-md overflow-hidden bg-cream-dark flex-shrink-0">
                    <Image
                      src={item.product.images[0] || 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=400&q=80'}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <Link
                          href={`/shop/${item.product.slug}`}
                          onClick={() => setIsCartOpen(false)}
                          className="font-serif text-sm font-semibold text-forest hover:text-leaf transition-colors truncate"
                        >
                          {item.product.name}
                        </Link>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="text-stone-400 hover:text-rose-600 p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-xs text-forest/60 truncate">{item.product.category}</p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-forest/15 rounded bg-cream/50">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 text-forest/70 hover:text-forest"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-medium text-forest">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          disabled={item.quantity >= item.product.stockQuantity}
                          className="p-1 text-forest/70 hover:text-forest disabled:opacity-30"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-semibold text-forest">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Action */}
          {items.length > 0 && (
            <div className="p-5 border-t border-forest/10 bg-cream space-y-3">
              <div className="space-y-1.5 text-xs text-forest/80">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-forest">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Standard Delivery</span>
                  <span>{deliveryFee === 0 ? <span className="text-emerald-700 font-semibold">FREE</span> : formatPrice(deliveryFee)}</span>
                </div>
                <div className="flex justify-between text-sm font-semibold text-forest pt-2 border-t border-forest/10">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full py-3 px-4 bg-forest hover:bg-forest-800 text-cream font-medium rounded-md flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg active:scale-[0.99]"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full text-center text-xs text-forest/60 hover:text-forest pt-2"
                >
                  Continue Browsing
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
