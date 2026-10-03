'use client';

import React from 'react';
import Link from 'next/link';
import { Button, Input } from '@karigar/ui';

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-[#FAF8F5]">
      <div className="max-w-md w-full border border-[#E5DFD4] p-8 sm:p-12 bg-white shadow-xs space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
            Security & Recovery
          </span>
          <h1 className="font-serif text-3xl text-[#191817]">Reset Password</h1>
          <p className="text-xs text-[#7A746B]">
            Enter your email to receive recovery instructions.
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <Input label="Email Address" type="email" placeholder="you@domain.com" required />
          <Button type="submit" size="lg" className="w-full rounded-none uppercase text-xs tracking-wider">
            Send Recovery Link
          </Button>
        </form>

        <div className="text-center pt-4 border-t border-[#E5DFD4] text-xs text-[#7A746B]">
          Remember your details?{' '}
          <Link href="/login" className="text-[#191817] font-semibold hover:underline">
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
