import React from 'react';
import { generateWhatsAppLink, WhatsAppMessageOptions } from '@/lib/whatsapp';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WhatsAppButtonProps {
  options?: WhatsAppMessageOptions;
  children?: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'pill';
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  options = {},
  children,
  className,
  variant = 'primary',
  size = 'md',
  showIcon = true,
}) => {
  const link = generateWhatsAppLink(options);

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-sm hover:shadow-md';
      case 'secondary':
        return 'bg-forest hover:bg-forest-800 text-cream-light border border-forest-700';
      case 'outline':
        return 'bg-transparent border border-[#25D366] text-[#128C7E] hover:bg-[#25D366]/10';
      case 'pill':
        return 'bg-forest/5 hover:bg-forest/10 text-forest border border-forest/15 rounded-full';
      default:
        return 'bg-[#25D366] text-white';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'text-xs px-3 py-1.5 gap-1.5';
      case 'lg':
        return 'text-base px-6 py-3.5 gap-2.5';
      case 'md':
      default:
        return 'text-sm px-4 py-2.5 gap-2';
    }
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 cursor-pointer select-none active:scale-[0.98]',
        getVariantStyles(),
        getSizeStyles(),
        className
      )}
      aria-label={typeof children === 'string' ? children : 'Contact on WhatsApp'}
    >
      {showIcon && <MessageCircle className={cn(size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4', 'flex-shrink-0')} />}
      <span>{children || 'WhatsApp Us'}</span>
    </a>
  );
};
