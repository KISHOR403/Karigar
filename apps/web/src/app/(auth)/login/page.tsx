'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button, Input } from '@karigar/ui';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-16 bg-[#FAF8F5]">
      <div className="max-w-md w-full border border-[#E5DFD4] p-8 sm:p-12 bg-white shadow-xs space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
            Patron & Artisan Portal
          </span>
          <h1 className="font-serif text-3xl text-[#191817]">Enter the Atelier</h1>
          <p className="text-xs text-[#7A746B]">
            Sign in to track custom commissions, following rosters, and orders.
          </p>
        </div>

        {submitted ? (
          <div className="p-4 bg-[#EDF2EC] border border-[#D5E2D3] text-[#3D5B3A] text-xs leading-relaxed text-center">
            Demo mode: Authentication endpoint ready at <code>/api/v1/auth/login</code>.
          </div>
        ) : null}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email Address"
            type="email"
            placeholder="patron@karigar.craft"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="flex items-center justify-between text-xs">
            <Link
              href="/forgot-password"
              className="text-[#7A746B] hover:text-[#191817] hover:underline"
            >
              Forgot secret key?
            </Link>
          </div>

          <Button type="submit" size="lg" className="w-full rounded-none uppercase text-xs tracking-wider">
            Sign In
          </Button>
        </form>

        <div className="text-center pt-4 border-t border-[#E5DFD4] text-xs text-[#7A746B]">
          New patron or artisan?{' '}
          <Link href="/register" className="text-[#191817] font-semibold hover:underline">
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
}
