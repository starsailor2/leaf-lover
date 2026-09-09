'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Store, Compass, MessageCircle, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { generateWhatsAppLink } from '@/lib/whatsapp';
import { cn } from '@/lib/utils';

export const MobileNav: React.FC = () => {
  const pathname = usePathname();
  const { itemCount, setIsCartOpen } = useCart();
  const whatsappUrl = generateWhatsAppLink({ type: 'general' });

  const navItems = [
    { label: 'Home', href: '/', icon: Home, isActive: pathname === '/' },
    { label: 'Shop', href: '/shop', icon: Store, isActive: pathname.startsWith('/shop') },
    { label: 'Services', href: '/services', icon: Compass, isActive: pathname.startsWith('/services') },
  ];

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-cream/95 backdrop-blur-md border-t border-forest/10 px-4 py-2"
      aria-label="Mobile Bottom Navigation"
    >
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                'flex flex-col items-center gap-1 py-1 px-3 text-xs font-medium transition-colors',
                item.isActive ? 'text-forest font-semibold' : 'text-forest/60 hover:text-forest'
              )}
            >
              <Icon className={cn('w-5 h-5', item.isActive && 'stroke-[2.5]')} />
              <span>{item.label}</span>
            </Link>
          );
        })}

        {/* WhatsApp direct trigger */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-1 px-3 text-xs font-medium text-[#128C7E] hover:text-[#075E54] transition-colors"
          aria-label="Open WhatsApp Chat"
        >
          <MessageCircle className="w-5 h-5 text-[#25D366]" />
          <span>WhatsApp</span>
        </a>

        {/* Cart Drawer Trigger */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="flex flex-col items-center gap-1 py-1 px-3 text-xs font-medium text-forest/70 hover:text-forest relative transition-colors"
          aria-label="Open Cart"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-terracotta text-white text-[10px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </div>
          <span>Cart</span>
        </button>
      </div>
    </nav>
  );
};
