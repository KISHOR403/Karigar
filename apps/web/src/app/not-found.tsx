import React from 'react';
import Link from 'next/link';
import { Button } from '@karigar/ui';
import { Compass, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[65vh] flex items-center justify-center px-4 py-20 bg-[#FAF8F5]">
      <div className="max-w-lg w-full text-center space-y-6">
        <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold flex items-center justify-center gap-1.5">
          <Compass className="w-3.5 h-3.5" />
          <span>404 — Craft Uncharted</span>
        </span>

        <h1 className="font-serif text-5xl sm:text-6xl text-[#191817]">
          This Pathway Leads to Untrodden Ground
        </h1>

        <p className="text-base text-[#6E6962] leading-relaxed font-light">
          The craft object, master atelier profile, or chronicle you are seeking may have been
          archived or relocated to another regional guild.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link href="/">
            <Button size="lg" className="rounded-none text-xs uppercase tracking-wider px-8">
              <span>Return to Sanctuary</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </Button>
          </Link>
          <Link href="/artisans">
            <Button
              variant="outline"
              size="lg"
              className="rounded-none text-xs uppercase tracking-wider px-8 border-[#191817]"
            >
              Explore Artisans
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
