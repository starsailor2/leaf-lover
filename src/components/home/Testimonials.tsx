'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

const testimonials = [
  {
    id: 1,
    quote: "The Snake Plant and ceramic planter arrived in immaculate condition — not a grain of soil out of place. It’s now the standout piece in my living room.",
    author: "Ananya S.",
    role: "Flat Owner, Indiranagar",
    rating: 5,
  },
  {
    id: 2,
    quote: "Our balcony went from a forgotten dust corner to the place our family has morning breakfast. The Leaf Lover team selected plants that easily survive the afternoon sun.",
    author: "Vikram R.",
    role: "Apartment Resident, Whitefield",
    rating: 5,
  },
  {
    id: 3,
    quote: "Their Plant Doctor saved my 3-year-old Fiddle Leaf Fig via WhatsApp! Identified root boundness and guided me through repotting. Truly honest plant lovers.",
    author: "Meera K.",
    role: "Plant Enthusiast, Koramangala",
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-cream border-t border-forest/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn direction="up" className="text-center max-w-xl mx-auto mb-16 space-y-2">
          <span className="text-xs uppercase tracking-widest text-leaf font-semibold">
            Real Stories
          </span>
          <h2 className="editorial-heading text-3xl sm:text-4xl font-bold text-forest">
            Growing across homes & spaces.
          </h2>
          <p className="text-forest/70 text-xs sm:text-sm">
            What our community has to say about our plants and botanical transformations.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <FadeIn
              key={t.id}
              direction="up"
              delay={idx * 120}
              className="p-6 sm:p-8 rounded-2xl bg-white/60 border border-forest/10 hover:border-forest/20 shadow-soft hover:shadow-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-forest/10 mb-2" />

                <p className="font-serif text-forest text-base sm:text-lg italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-forest/5">
                <p className="font-semibold text-sm text-forest">{t.author}</p>
                <p className="text-xs text-forest/60">{t.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
