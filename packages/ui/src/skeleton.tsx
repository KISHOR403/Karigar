import * as React from 'react';
import { cn } from './utils';

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-sm bg-[#EAE5DC]/80', className)}
      {...props}
    />
  );
}
