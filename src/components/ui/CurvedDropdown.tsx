'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface DropdownOption {
  value: string;
  label: string;
}

interface CurvedDropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: DropdownOption[];
  placeholder?: string;
  className?: string;
  pill?: boolean; // rounded-full if true, rounded-xl if false
  size?: 'sm' | 'md';
  prefix?: string;
}

export const CurvedDropdown: React.FC<CurvedDropdownProps> = ({
  value,
  onChange,
  options,
  placeholder = 'Select option',
  className,
  pill = true,
  size = 'md',
  prefix,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div ref={dropdownRef} className={cn('relative inline-block text-left', className)}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={cn(
          'w-full flex items-center justify-between gap-2.5 bg-white/95 hover:bg-white text-forest border border-forest/20 hover:border-forest/40 shadow-soft transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-forest/20 cursor-pointer select-none',
          pill ? 'rounded-full' : 'rounded-xl',
          size === 'sm' ? 'px-3.5 py-1.5 text-xs' : 'px-4 py-2.5 text-xs sm:text-sm font-medium'
        )}
      >
        <div className="flex items-center gap-1.5 truncate">
          {prefix && <span className="text-forest/50 font-normal">{prefix}</span>}
          <span className="truncate font-medium text-forest">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-forest/50 flex-shrink-0 transition-transform duration-200',
            isOpen && 'rotate-180 text-forest'
          )}
        />
      </button>

      {/* Curved Menu Popup */}
      {isOpen && (
        <div
          className={cn(
            'absolute right-0 mt-2 z-50 min-w-[200px] w-full max-w-xs p-1.5 bg-white/98 backdrop-blur-md rounded-2xl border border-forest/15 shadow-card animate-in fade-in zoom-in-95 duration-150',
            'max-h-64 overflow-y-auto'
          )}
          role="listbox"
        >
          <div className="space-y-0.5">
            {options.map((option) => {
              const isSelected = option.value === value;
              return (
                <button
                  type="button"
                  key={option.value}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  role="option"
                  aria-selected={isSelected}
                  className={cn(
                    'w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-xs sm:text-sm transition-colors cursor-pointer',
                    isSelected
                      ? 'bg-forest/10 text-forest font-semibold'
                      : 'text-forest/80 hover:bg-forest/5 hover:text-forest'
                  )}
                >
                  <span className="truncate">{option.label}</span>
                  {isSelected && <Check className="w-4 h-4 text-leaf flex-shrink-0 ml-2" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
