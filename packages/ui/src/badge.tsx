import * as React from 'react';
import { cn } from './utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'terracotta' | 'sage' | 'charcoal' | 'sand' | 'outline';
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'sand', children, ...props }, ref) => {
    const variants = {
      sand: 'bg-[#F2EFE8] text-[#5A554E] border border-[#E5E0D5]',
      terracotta: 'bg-[#FBECE6] text-[#A64A29] border border-[#F3D3C6]',
      sage: 'bg-[#EDF2EC] text-[#3D5B3A] border border-[#D5E2D3]',
      charcoal: 'bg-[#1A1918] text-[#FBF9F5]',
      outline: 'bg-transparent text-[#5A554E] border border-[#DDD6CB]',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center text-[11px] font-medium tracking-wider uppercase px-2.5 py-0.5 rounded-sm',
          variants[variant],
          className,
        )}
        {...props}
      >
        {children}
      </span>
    );
  },
);

Badge.displayName = 'Badge';
