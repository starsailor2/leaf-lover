import React from 'react';
import Link from 'next/link';
import { Sprout, ArrowRight } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center p-6 text-center bg-cream">
      <div className="w-16 h-16 rounded-full bg-forest/5 text-leaf flex items-center justify-center mb-5">
        <Sprout className="w-8 h-8" />
      </div>

      <span className="text-xs uppercase tracking-widest text-leaf font-semibold">
        404 — Page Not Found
      </span>

      <h1 className="editorial-heading text-3xl sm:text-4xl font-bold text-forest mt-2 mb-3">
        This path hasn&apos;t taken root yet.
      </h1>

      <p className="text-forest/70 text-sm max-w-md mx-auto mb-8 leading-relaxed">
        The page or plant specimen you are looking for might have moved, or is currently taking a rest. Let&apos;s guide you back to green ground.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3">
        <Link
          href="/shop"
          className="px-6 py-3 bg-forest hover:bg-forest-800 text-cream text-xs font-semibold rounded-md shadow flex items-center gap-2"
        >
          <span>Explore Plants</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        <WhatsAppButton variant="outline" size="md">
          Talk to Us on WhatsApp
        </WhatsAppButton>
      </div>
    </div>
  );
}
