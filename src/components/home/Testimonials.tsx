'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

const testimonials = [
  {
    id: 1,
    quote: "The Snake Plant and ceramic planter arrived in immaculate condition — not a grain of soil out of place. It's now the standout piece in my living room.",
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
  {
    id: 4,
    quote: "Transformed our entire office reception area with stunning tropical plants. Every visitor comments on how alive the space feels. Professional, reliable, and beautiful.",
    author: "Rajan P.",
    role: "Office Manager, MG Road",
    rating: 5,
  },
  {
    id: 5,
    quote: "As a complete beginner, I was nervous about killing everything. The guidance I received was patient, thorough, and my Pothos is thriving six months later!",
    author: "Nisha T.",
    role: "New Plant Parent, HSR Layout",
    rating: 5,
  },
];

// Duplicate array for seamless infinite loop
const doubled = [...testimonials, ...testimonials];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-cream border-t border-forest/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" className="text-center max-w-xl mx-auto mb-14 space-y-2">
          <span className="text-xs uppercase tracking-widest text-leaf font-semibold">Real Stories</span>
          <h2 className="editorial-heading text-3xl sm:text-4xl font-bold text-forest">
            Growing across homes &amp; spaces.
          </h2>
          <p className="text-forest/70 text-xs sm:text-sm">
            What our community has to say about our plants and botanical transformations.
          </p>
        </FadeIn>
      </div>

      {/* Infinite auto-scrolling marquee ribbon */}
      <div
        className="relative"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}
      >
        <div
          className="flex gap-5 animate-marquee hover:[animation-play-state:paused]"
          style={{ width: 'max-content' }}
        >
          {doubled.map((t, idx) => (
            <div
              key={`${t.id}-${idx}`}
              className="flex-shrink-0 w-[320px] sm:w-[360px] p-6 sm:p-7 bg-white/80 border border-forest/10 shadow-soft flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-3 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                  ))}
                </div>
                <Quote className="w-7 h-7 text-forest/10 mb-2" />
                <p className="font-serif text-forest text-base italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-forest/5">
                <p className="font-semibold text-sm text-forest">{t.author}</p>
                <p className="text-xs text-forest/60">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
