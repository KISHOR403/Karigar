import * as React from 'react';
import { cn } from './utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'editorial';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading = false, children, disabled, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer';

    const variants = {
      primary:
        'bg-[#1A1918] text-[#FBF9F5] hover:bg-[#2F2C28] active:bg-[#11100F] shadow-sm',
      secondary:
        'bg-[#EFECE6] text-[#1A1918] hover:bg-[#E5E0D6] active:bg-[#DCD6C9]',
      outline:
        'border border-[#DCD6CB] text-[#1A1918] bg-transparent hover:border-[#1A1918] hover:bg-[#F5F2EB]',
      ghost:
        'text-[#4A4742] hover:text-[#1A1918] hover:bg-[#EFECE6]/50',
      editorial:
        'border-b-2 border-[#1A1918] text-[#1A1918] hover:text-[#B85D3B] hover:border-[#B85D3B] pb-1 rounded-none px-0 tracking-wide',
    };

    const sizes = {
      sm: variant === 'editorial' ? 'text-xs' : 'text-xs px-3.5 py-1.5 rounded-sm',
      md: variant === 'editorial' ? 'text-sm' : 'text-sm px-5 py-2.5 rounded-sm',
      lg: variant === 'editorial' ? 'text-base' : 'text-base px-7 py-3.5 rounded-sm',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
