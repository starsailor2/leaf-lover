'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle2, MessageCircle, Truck, Package, ArrowRight, Home } from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/whatsapp';

interface OrderSuccessPageProps {
  params: {
    orderId: string;
  };
}

export default function OrderSuccessPage({ params }: OrderSuccessPageProps) {
  const { orderId } = params;
  const whatsappUrl = generateWhatsAppLink({
    type: 'order',
    orderId,
  });

  return (
    <div className="min-h-screen bg-cream py-12 sm:py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center space-y-8">
        
        {/* Success Icon */}
        <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-md">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        {/* Title */}
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-leaf font-semibold">
            Order Received & Confirmed
          </span>
          <h1 className="editorial-heading text-3xl sm:text-4xl font-bold text-forest">
            Thank you for welcoming nature home!
          </h1>
          <p className="text-forest/70 text-sm max-w-md mx-auto leading-relaxed">
            Your plants are currently being hand-selected and carefully prepared in our nursery for safe delivery.
          </p>
        </div>

        {/* Order Reference Card */}
        <div className="bg-white/80 rounded-2xl p-6 border border-forest/10 shadow-soft text-left space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-forest/10">
            <div>
              <p className="text-xs text-forest/60">Order Reference</p>
              <p className="font-serif text-lg font-bold text-forest">{orderId}</p>
            </div>
            <span className="bg-emerald-50 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200">
              Processing
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-forest/80">
            <div className="space-y-1">
              <p className="font-semibold text-forest flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-leaf" />
                Delivery Timeline
              </p>
              <p className="text-forest/70">Estimated 24 – 48 Hours within city limits</p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-forest flex items-center gap-1.5">
                <Package className="w-3.5 h-3.5 text-leaf" />
                Special Packaging
              </p>
              <p className="text-forest/70">Breathable root protection & spill-proof transit box</p>
            </div>
          </div>
        </div>

        {/* WhatsApp Delivery Confirmation Action */}
        <div className="p-6 rounded-2xl bg-sage/50 border border-forest/10 space-y-4">
          <div className="space-y-1">
            <h3 className="font-serif text-lg font-bold text-forest">
              Want instant dispatch updates on WhatsApp?
            </h3>
            <p className="text-xs text-forest/70">
              Tap below to connect directly with our dispatch manager and track your botanical delivery.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm rounded-xl shadow transition-all active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Confirm Order on WhatsApp</span>
          </a>
        </div>

        {/* Return Links */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs">
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 font-semibold text-forest hover:text-leaf transition-colors"
          >
            <span>Explore More Plants</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <span className="text-forest/30 hidden sm:inline">•</span>
          <Link
            href="/guides"
            className="inline-flex items-center gap-1.5 font-semibold text-forest hover:text-leaf transition-colors"
          >
            <span>Read Plant Care Guides</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
