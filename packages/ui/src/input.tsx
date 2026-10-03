import * as React from 'react';
import { cn } from './utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', label, error, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs uppercase tracking-wider font-medium text-[#4A4742]"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          type={type}
          ref={ref}
          className={cn(
            'w-full bg-[#FAF8F5] border border-[#DDD6CB] px-3.5 py-2.5 text-sm text-[#1A1918] placeholder-[#9E988F] rounded-sm transition-colors duration-150',
            'focus:outline-none focus:border-[#1A1918] focus:bg-white',
            error && 'border-[#C84B31] focus:border-[#C84B31]',
            className,
          )}
          {...props}
        />
        {error && <p className="text-xs text-[#C84B31] tracking-tight">{error}</p>}
      </div>
    );
  },
);

Input.displayName = 'Input';
