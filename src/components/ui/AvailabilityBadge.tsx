import React from 'react';
import { AvailabilityStatus } from '@/lib/types';
import { cn } from '@/lib/utils';

interface AvailabilityBadgeProps {
  status: AvailabilityStatus;
  className?: string;
  size?: 'sm' | 'md';
}

export const AvailabilityBadge: React.FC<AvailabilityBadgeProps> = ({
  status,
  className,
  size = 'md'
}) => {
  const getStyles = () => {
    switch (status) {
      case 'Available':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200/60';
      case 'Low Stock':
        return 'bg-amber-50 text-amber-800 border-amber-200/60';
      case 'Out of Stock':
        return 'bg-stone-100 text-stone-600 border-stone-200';
      case 'Coming Soon':
        return 'bg-sage text-forest-800 border-forest-200/50';
      default:
        return 'bg-stone-50 text-stone-700 border-stone-200';
    }
  };

  const getDotStyles = () => {
    switch (status) {
      case 'Available':
        return 'bg-emerald-600';
      case 'Low Stock':
        return 'bg-amber-600';
      case 'Out of Stock':
        return 'bg-stone-400';
      case 'Coming Soon':
        return 'bg-forest-600';
      default:
        return 'bg-stone-400';
    }
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-medium border rounded-full',
        size === 'sm' ? 'text-[11px] px-2 py-0.5' : 'text-xs px-2.5 py-1',
        getStyles(),
        className
      )}
    >
      <span className={cn('w-1.5 h-1.5 rounded-full', getDotStyles())} />
      {status}
    </span>
  );
};
