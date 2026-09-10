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
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile drawer on route change
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === '/';
  const isTransparent = isHome && !isScrolled && !mobileMenuOpen;

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
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-40 w-full transition-all duration-300',
          isTransparent
            ? 'bg-transparent border-b border-transparent'
            : 'glass-nav-scrolled border-b border-forest/10 shadow-sm'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group">
              <span
                className={cn(
                  'w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all group-hover:scale-105 shadow-sm',
                  isTransparent
                    ? 'bg-white/15 text-cream border border-white/20 backdrop-blur-sm'
                    : 'bg-forest text-cream'
                )}
              >
                <Sprout className="w-4 h-4 sm:w-5 sm:h-5 text-leaf-light" />
              </span>
              <div className="flex flex-col">
                <span
                  className={cn(
                    'font-serif text-xl sm:text-2xl font-bold tracking-tight leading-none transition-colors',
                    isTransparent
                      ? 'text-cream drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]'
                      : 'text-forest'
                  )}
                >
                  Leaf Lover
                </span>
                <span
                  className={cn(
                    'text-[9px] sm:text-[10px] tracking-widest uppercase font-sans font-medium mt-0.5 transition-colors',
                    isTransparent ? 'text-sage-light' : 'text-leaf'
                  )}
                >
                  Botanical Living
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium tracking-wide transition-colors py-1 relative',
                    isTransparent
                      ? isActive(link.href)
                        ? 'text-cream font-semibold'
                        : 'text-cream/90 hover:text-white drop-shadow-sm'
                      : isActive(link.href)
                        ? 'text-forest font-semibold'
                        : 'text-forest/75 hover:text-forest'
                  )}
                >
                  {link.name}
                  {isActive(link.href) && (
                    <span
                      className={cn(
                        'absolute bottom-0 left-0 w-full h-[2px] rounded-full transition-colors',
                        isTransparent ? 'bg-cream' : 'bg-forest'
                      )}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right Action Icons & CTAs */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* WhatsApp Quick CTA */}
              <div className="hidden sm:block">
                <WhatsAppButton
                  variant={isTransparent ? 'outline' : 'primary'}
                  size="sm"
                  options={{ type: 'general' }}
                  className={cn(
                    'text-xs font-semibold',
                    isTransparent && 'border-white/40 text-cream hover:bg-white/15'
                  )}
                >
                  WhatsApp Us
                </WhatsAppButton>
              </div>

              {/* Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className={cn(
                  'relative p-2 sm:p-2.5 transition-colors',
                  isTransparent
                    ? 'text-cream hover:bg-white/15'
                    : 'text-forest hover:bg-forest/5'
                )}
                aria-label={`Shopping Cart with ${itemCount} items`}
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 bg-terracotta text-white text-[10px] sm:text-[11px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                    {itemCount}
                  </span>
                )}
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={cn(
                  'lg:hidden p-2 transition-colors',
                  isTransparent
                    ? 'text-cream hover:bg-white/15'
                    : 'text-forest hover:bg-forest/5'
                )}
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-Down Drawer - Translucent Frosted Glass */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-forest/10 bg-cream/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in fade-in slide-in-from-top-2 text-forest">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'block py-2.5 px-3.5 text-sm font-medium transition-colors',
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
                className="w-full justify-center py-3"
              >
                WhatsApp Us
              </WhatsAppButton>
              <Link
                href="/shop"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-center text-sm font-medium text-forest border border-forest/20 hover:bg-forest/5 transition-colors"
              >
                Shop All Plants
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Spacer for non-home pages so their content is not hidden beneath fixed navbar */}
      {!isHome && <div className="h-16 sm:h-20" aria-hidden="true" />}
    </>
  );
};
