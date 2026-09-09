'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ShieldCheck, Truck, ArrowLeft, CreditCard, Lock, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { paymentConfig } from '@/lib/config';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, deliveryFee, total, clearCart } = useCart();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    email: '',
    address: '',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '',
    orderNotes: '',
  });

  const [paymentMethod, setPaymentMethod] = useState<'online' | 'cod'>('online');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic Validation
    if (!formData.name || !formData.phone || !formData.address || !formData.pincode) {
      setErrorMessage('Please fill in all mandatory contact and shipping fields.');
      return;
    }

    if (items.length === 0) {
      setErrorMessage('Your cart is empty. Please add plants before checking out.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer: {
            ...formData,
            whatsapp: formData.whatsapp || formData.phone,
          },
          items,
          subtotal,
          deliveryFee,
          total,
          paymentMethod,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to process order. Please try again.');
      }

      // Order was created successfully and inventory decremented
      clearCart();
      router.push(`/order-success/${data.order.id}`);
    } catch (err: any) {
      setErrorMessage(err.message || 'Something went wrong. Please check your details or contact us on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center bg-cream">
        <div className="w-16 h-16 rounded-full bg-forest/5 flex items-center justify-center mb-4 text-forest/40">
          <Truck className="w-8 h-8" />
        </div>
        <h1 className="font-serif text-2xl font-bold text-forest mb-2">
          Your cart is looking a little empty.
        </h1>
        <p className="text-xs sm:text-sm text-forest/60 max-w-sm mb-6">
          Add some lush botanical specimens before proceeding to checkout.
        </p>
        <Link
          href="/shop"
          className="px-6 py-3 bg-forest hover:bg-forest-800 text-cream text-sm font-semibold rounded-md shadow"
        >
          Explore Plants & Vessels
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest/70 hover:text-forest transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Continue Shopping</span>
          </Link>
        </div>

        <h1 className="editorial-heading text-3xl sm:text-4xl font-bold text-forest mb-8">
          Complete Your Order
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Form Column */}
          <div className="lg:col-span-7">
            <form onSubmit={handlePlaceOrder} className="space-y-8">
              
              {/* Error Alert */}
              {errorMessage && (
                <div className="p-4 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* 1. Contact Info */}
              <div className="bg-white/80 rounded-2xl p-6 border border-forest/10 shadow-soft space-y-4">
                <h2 className="font-serif text-xl font-bold text-forest flex items-center justify-between">
                  <span>1. Contact Details</span>
                  <span className="text-xs text-forest/40 font-sans font-normal">* Mandatory</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-forest/80 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Priyanshu Sharma"
                      className="w-full px-3.5 py-2 text-sm bg-cream/40 border border-forest/20 rounded-md focus:outline-none focus:border-forest"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-forest/80 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      className="w-full px-3.5 py-2 text-sm bg-cream/40 border border-forest/20 rounded-md focus:outline-none focus:border-forest"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-forest/80 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="10-digit mobile number"
                      className="w-full px-3.5 py-2 text-sm bg-cream/40 border border-forest/20 rounded-md focus:outline-none focus:border-forest"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-forest/80 mb-1">
                      WhatsApp Number (for delivery updates)
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      placeholder="Same as phone or enter separate"
                      className="w-full px-3.5 py-2 text-sm bg-cream/40 border border-forest/20 rounded-md focus:outline-none focus:border-forest"
                    />
                  </div>
                </div>
              </div>

              {/* 2. Delivery Address */}
              <div className="bg-white/80 rounded-2xl p-6 border border-forest/10 shadow-soft space-y-4">
                <h2 className="font-serif text-xl font-bold text-forest">
                  2. Botanical Delivery Address
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-forest/80 mb-1">
                      Street Address & Apartment / House No. *
                    </label>
                    <textarea
                      name="address"
                      required
                      rows={2}
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Flat 402, Oakwood Greens, 12th Main Road..."
                      className="w-full px-3.5 py-2 text-sm bg-cream/40 border border-forest/20 rounded-md focus:outline-none focus:border-forest"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-forest/80 mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2 text-sm bg-cream/40 border border-forest/20 rounded-md focus:outline-none focus:border-forest"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-forest/80 mb-1">
                        State *
                      </label>
                      <input
                        type="text"
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2 text-sm bg-cream/40 border border-forest/20 rounded-md focus:outline-none focus:border-forest"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-forest/80 mb-1">
                        Pincode *
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        required
                        value={formData.pincode}
                        onChange={handleInputChange}
                        placeholder="560038"
                        className="w-full px-3.5 py-2 text-sm bg-cream/40 border border-forest/20 rounded-md focus:outline-none focus:border-forest"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-forest/80 mb-1">
                      Special Delivery Instructions / Gate Code
                    </label>
                    <input
                      type="text"
                      name="orderNotes"
                      value={formData.orderNotes}
                      onChange={handleInputChange}
                      placeholder="e.g. Leave with security if not home, handle upright"
                      className="w-full px-3.5 py-2 text-sm bg-cream/40 border border-forest/20 rounded-md focus:outline-none focus:border-forest"
                    />
                  </div>
                </div>
              </div>

              {/* 3. Payment Method */}
              <div className="bg-white/80 rounded-2xl p-6 border border-forest/10 shadow-soft space-y-4">
                <h2 className="font-serif text-xl font-bold text-forest flex items-center gap-2">
                  <span>3. Payment Selection</span>
                  <Lock className="w-4 h-4 text-emerald-600" />
                </h2>

                <div className="space-y-3">
                  <label
                    className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                      paymentMethod === 'online'
                        ? 'bg-emerald-50/60 border-emerald-600/50 ring-1 ring-emerald-600/30'
                        : 'bg-cream/40 border-forest/15'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="online"
                      checked={paymentMethod === 'online'}
                      onChange={() => setPaymentMethod('online')}
                      className="mt-1 accent-forest"
                    />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-forest">
                          Online Payment (UPI, Credit/Debit Cards, NetBanking)
                        </span>
                        <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                          Fast & Contactless
                        </span>
                      </div>
                      <p className="text-xs text-forest/70">
                        Secure instant payment. Fully integrated with zero-risk botanical arrival guarantee.
                      </p>
                    </div>
                  </label>

                  <label
                    className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                      paymentMethod === 'cod'
                        ? 'bg-emerald-50/60 border-emerald-600/50 ring-1 ring-emerald-600/30'
                        : 'bg-cream/40 border-forest/15'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="mt-1 accent-forest"
                    />
                    <div className="space-y-1">
                      <span className="font-semibold text-sm text-forest">
                        Cash on Handled Delivery
                      </span>
                      <p className="text-xs text-forest/70">
                        Inspect your plants on delivery and pay cash or UPI to our delivery specialist.
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-forest hover:bg-forest-800 disabled:opacity-50 text-cream font-semibold text-base rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Securing Order & Reserving Plants...</span>
                ) : (
                  <>
                    <Lock className="w-4 h-4 text-leaf-light" />
                    <span>Confirm Order • {formatPrice(total)}</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-forest/60">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>256-bit encrypted checkout with 30-day healthy plant guarantee</span>
              </div>

            </form>
          </div>

          {/* Right Summary Column */}
          <div className="lg:col-span-5">
            <div className="bg-white/90 rounded-2xl p-6 border border-forest/10 shadow-soft space-y-6 sticky top-28">
              <h3 className="font-serif text-xl font-bold text-forest pb-3 border-b border-forest/10">
                Order Summary ({items.length})
              </h3>

              {/* Items List */}
              <div className="space-y-4 max-h-80 overflow-y-auto pr-1">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-3">
                    <div className="relative w-16 h-16 rounded-md overflow-hidden bg-cream-dark flex-shrink-0 border border-forest/10">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm font-semibold text-forest truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-xs text-forest/60">Qty: {item.quantity}</p>
                      <p className="text-xs font-semibold text-forest mt-1">
                        {formatPrice(item.product.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Calculation */}
              <div className="pt-4 border-t border-forest/10 space-y-2 text-xs text-forest/80">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-forest">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Botanical Safe Delivery</span>
                  <span>
                    {deliveryFee === 0 ? (
                      <span className="text-emerald-700 font-semibold">FREE</span>
                    ) : (
                      formatPrice(deliveryFee)
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-forest pt-3 border-t border-forest/10">
                  <span>Total Amount</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              {/* Value Banner */}
              <div className="p-3.5 rounded-lg bg-sage/40 border border-forest/5 space-y-1.5 text-xs text-forest/80">
                <p className="font-semibold text-forest flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-leaf" />
                  What is included with your plants:
                </p>
                <ul className="list-disc list-inside space-y-0.5 text-[11px] text-forest/70 pl-1">
                  <li>Nursery-hydrated specimen in protective travel packaging</li>
                  <li>Custom printed botanical care instructions card</li>
                  <li>Direct WhatsApp line to the Leaf Lover Plant Doctor</li>
                </ul>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
