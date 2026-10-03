'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button, Input } from '@karigar/ui';

export default function RegisterPage() {
  const [role, setRole] = useState<'CUSTOMER' | 'ARTISAN'>('CUSTOMER');

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-16 bg-[#FAF8F5]">
      <div className="max-w-md w-full border border-[#E5DFD4] p-8 sm:p-12 bg-white shadow-xs space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
            Registration
          </span>
          <h1 className="font-serif text-3xl text-[#191817]">Join Karigar</h1>
          <p className="text-xs text-[#7A746B]">
            Become a recognized patron or list your generational craft workshop.
          </p>
        </div>

        {/* Role toggle */}
        <div className="grid grid-cols-2 gap-2 p-1 bg-[#F4EFEA] rounded-sm text-xs">
          <button
            type="button"
            onClick={() => setRole('CUSTOMER')}
            className={`py-2 text-center uppercase tracking-wider font-semibold transition-all ${
              role === 'CUSTOMER' ? 'bg-[#FAF8F5] text-[#191817] shadow-xs' : 'text-[#7A746B]'
            }`}
          >
            I am a Patron
          </button>
          <button
            type="button"
            onClick={() => setRole('ARTISAN')}
            className={`py-2 text-center uppercase tracking-wider font-semibold transition-all ${
              role === 'ARTISAN' ? 'bg-[#FAF8F5] text-[#191817] shadow-xs' : 'text-[#7A746B]'
            }`}
          >
            I am a Master Maker
          </button>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Input label="First Name" placeholder="Aarav" required />
            <Input label="Last Name" placeholder="Verma" required />
          </div>
          <Input label="Email Address" type="email" placeholder="you@domain.com" required />
          <Input label="Password" type="password" placeholder="••••••••" required />

          {role === 'ARTISAN' && (
            <Input label="Primary Craft Tradition" placeholder="e.g. Ajrakh Block Printing, Pashmina" required />
          )}

          <Button type="submit" size="lg" className="w-full rounded-none uppercase text-xs tracking-wider">
            Create {role === 'ARTISAN' ? 'Artisan Studio' : 'Patron Account'}
          </Button>
        </form>

        <div className="text-center pt-4 border-t border-[#E5DFD4] text-xs text-[#7A746B]">
          Already have an account?{' '}
          <Link href="/login" className="text-[#191817] font-semibold hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
