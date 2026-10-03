'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@karigar/ui';
import { RefreshCcw, Home } from 'lucide-react';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to monitoring if configured
    console.error('App Runtime Error:', error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-20 bg-[#FAF8F5]">
      <div className="max-w-md w-full text-center space-y-6">
        <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
          Unhurried Recovery
        </span>
        <h1 className="font-serif text-4xl text-[#191817]">
          An Unexpected Distortion Occurred
        </h1>
        <p className="text-sm text-[#6E6962] leading-relaxed font-light">
          We encountered a transient interruption while retrieving craft chronicles.
          Our atelier engineering team has been notified.
        </p>

        <div className="pt-4 flex items-center justify-center gap-4">
          <Button
            onClick={() => reset()}
            size="md"
            className="rounded-none text-xs uppercase tracking-wider px-6"
          >
            <RefreshCcw className="w-3.5 h-3.5 mr-2" />
            <span>Try Again</span>
          </Button>

          <Link href="/">
            <Button
              variant="outline"
              size="md"
              className="rounded-none text-xs uppercase tracking-wider px-6 border-[#191817]"
            >
              <Home className="w-3.5 h-3.5 mr-2" />
              <span>Return Home</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
