'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, MessageCircle, Menu, X, Sprout } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { cn } from '@/lib/utils';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { itemCount, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Shop', href: '/shop' },
    { name: 'Services', href: '/services' },
    { name: 'Plant Doctor', href: '/plant-doctor' },
    { name: 'Gardening Guide', href: '/guides' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/shop' && pathname.startsWith('/shop')) return true;
    if (href === '/services' && pathname.startsWith('/services')) return true;
    if (href === '/guides' && pathname.startsWith('/guides')) return true;
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-nav border-b border-forest/10 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="w-10 h-10 rounded-full bg-forest text-cream flex items-center justify-center transition-transform group-hover:scale-105">
              <Sprout className="w-5 h-5 text-leaf-light" />
            </span>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-forest leading-none">
                Leaf Lover
              </span>
              <span className="text-[10px] tracking-widest uppercase font-sans text-leaf font-medium mt-0.5">
                Botanical Living
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'text-sm font-medium tracking-wide transition-colors py-1 relative',
                  isActive(link.href)
                    ? 'text-forest font-semibold'
                    : 'text-forest/75 hover:text-forest'
                )}
              >
                {link.name}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-forest rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Action Icons & CTAs */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* WhatsApp Quick CTA */}
            <div className="hidden sm:block">
              <WhatsAppButton
                variant="primary"
                size="sm"
                options={{ type: 'general' }}
              >
                WhatsApp Us
              </WhatsAppButton>
            </div>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full text-forest hover:bg-forest/5 transition-colors"
              aria-label={`Shopping Cart with ${itemCount} items`}
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute top-1 right-1 bg-terracotta text-white text-[11px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-forest hover:bg-forest/5"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Down Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-forest/10 bg-cream-light/95 backdrop-blur-md px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                'block py-2.5 px-3 rounded-md text-base font-medium transition-colors',
                isActive(link.href)
                  ? 'bg-forest/10 text-forest font-semibold'
                  : 'text-forest/80 hover:bg-forest/5'
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3 border-t border-forest/10 flex flex-col gap-2">
            <WhatsAppButton
              variant="primary"
              size="md"
              options={{ type: 'general' }}
              className="w-full justify-center"
            >
              WhatsApp Us
            </WhatsAppButton>
            <Link
              href="/shop"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 text-center text-sm font-medium text-forest border border-forest/20 rounded-md hover:bg-forest/5"
            >
              Shop All Plants
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
