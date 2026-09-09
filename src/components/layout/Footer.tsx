'use client';

import React from 'react';
import Link from 'next/link';
import { Sprout, Phone, Mail, Instagram, MessageCircle, Heart } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import { generateWhatsAppLink } from '@/lib/whatsapp';

export const Footer: React.FC = () => {
  const whatsappUrl = generateWhatsAppLink({ type: 'general' });

  return (
    <footer className="bg-forest text-cream-light border-t border-forest-800 pt-16 pb-24 lg:pb-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-forest-800">
          
          {/* Brand Vision Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-cream text-forest flex items-center justify-center">
                <Sprout className="w-4 h-4 text-leaf" />
              </span>
              <span className="font-serif text-2xl font-bold tracking-tight text-cream">
                Leaf Lover
              </span>
            </div>
            <p className="text-cream/70 text-sm max-w-sm leading-relaxed">
              We believe a greener future begins with everyday spaces — one home, one balcony, one office, and one plant at a time.
            </p>
            <div className="inline-block px-3 py-1 bg-forest-800/80 rounded-full border border-forest-700">
              <p className="text-xs font-serif italic text-sage">
                &ldquo;Our vision: to build a giant company for nature.&rdquo;
              </p>
            </div>
          </div>

          {/* Explore Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-sage">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-cream/75">
              <li>
                <Link href="/shop" className="hover:text-cream transition-colors">
                  Shop Plants & Vessels
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cream transition-colors">
                  Gardening & Services
                </Link>
              </li>
              <li>
                <Link href="/services/balcony-setup" className="hover:text-cream transition-colors">
                  Balcony Transformations
                </Link>
              </li>
              <li>
                <Link href="/plant-doctor" className="hover:text-cream transition-colors">
                  Plant Doctor Consultation
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-cream transition-colors">
                  Gardening Guides
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cream transition-colors">
                  Our Story & Vision
                </Link>
              </li>
            </ul>
          </div>

          {/* Help & Support */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-sage">
              Help & Care
            </h3>
            <ul className="space-y-2 text-sm text-cream/75">
              <li>
                <Link href="/contact" className="hover:text-cream transition-colors">
                  Contact Studio
                </Link>
              </li>
              <li>
                <Link href="/contact#faq" className="hover:text-cream transition-colors">
                  Shipping & Safe Delivery
                </Link>
              </li>
              <li>
                <Link href="/contact#faq" className="hover:text-cream transition-colors">
                  Healthy Plant Guarantee
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-cream/50 text-cream/40 transition-colors">
                  Admin Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-sage">
              Connect
            </h3>
            <div className="space-y-2 text-sm text-cream/75">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#25D366] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Plant Support</span>
              </a>
              <a
                href={`tel:${siteConfig.whatsappNumber}`}
                className="flex items-center gap-2 hover:text-cream transition-colors"
              >
                <Phone className="w-4 h-4 text-leaf-light" />
                <span>{siteConfig.phone}</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 hover:text-cream transition-colors"
              >
                <Mail className="w-4 h-4 text-leaf-light" />
                <span>{siteConfig.email}</span>
              </a>
            </div>

            <div className="pt-2">
              <p className="text-xs text-cream/60 mb-2">
                Join our botanical letter for seasonal plant care guidance.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="flex gap-1.5">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-forest-950/60 border border-forest-700/80 rounded px-3 py-1.5 text-xs text-cream placeholder-cream/40 focus:outline-none focus:border-leaf-light flex-1"
                />
                <button
                  type="submit"
                  className="bg-leaf hover:bg-leaf-light text-white text-xs px-3 py-1.5 rounded font-medium transition-colors"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-cream/50 gap-4">
          <p>© {new Date().getFullYear()} Leaf Lover. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Grown with <Heart className="w-3 h-3 text-terracotta fill-terracotta" /> for homes, balconies & workspaces.
          </p>
        </div>
      </div>
    </footer>
  );
};
