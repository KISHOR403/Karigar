import React from 'react';
import Link from 'next/link';
import { Button } from '@karigar/ui';
import { Package, Heart, User, Sparkles } from 'lucide-react';

export default function CustomerDashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="border-b border-[#191817] pb-6 space-y-2">
        <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
          Patron Sanctuary
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#191817]">
          My Craft Patronage
        </h1>
        <p className="text-sm text-[#6E6962] font-light">
          Manage your bespoke commissions, following rosters, acquisitions, and certificates of authenticity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border border-[#E5DFD4] bg-[#FAF8F5] space-y-3">
          <Package className="w-5 h-5 text-[#B8532F]" />
          <h3 className="font-serif text-xl text-[#191817]">Acquisitions & Orders</h3>
          <p className="text-xs text-[#6E6962] leading-relaxed">
            Track current shipments and access insured courier tracking.
          </p>
          <Link href="/customer/orders" className="text-xs uppercase tracking-wider font-semibold text-[#191817] hover:text-[#B8532F] block pt-2">
            View Acquisitions →
          </Link>
        </div>

        <div className="p-6 border border-[#E5DFD4] bg-[#FAF8F5] space-y-3">
          <Sparkles className="w-5 h-5 text-[#B8532F]" />
          <h3 className="font-serif text-xl text-[#191817]">Custom Commissions</h3>
          <p className="text-xs text-[#6E6962] leading-relaxed">
            Active dialogues and quotes with master artisans across India.
          </p>
          <Link href="/customer/custom-orders" className="text-xs uppercase tracking-wider font-semibold text-[#191817] hover:text-[#B8532F] block pt-2">
            View Inquiries →
          </Link>
        </div>

        <div className="p-6 border border-[#E5DFD4] bg-[#FAF8F5] space-y-3">
          <Heart className="w-5 h-5 text-[#B8532F]" />
          <h3 className="font-serif text-xl text-[#191817]">Curated Wishlist</h3>
          <p className="text-xs text-[#6E6962] leading-relaxed">
            Saved heirloom pieces for future celebrations or home spaces.
          </p>
          <Link href="/customer/wishlist" className="text-xs uppercase tracking-wider font-semibold text-[#191817] hover:text-[#B8532F] block pt-2">
            View Wishlist →
          </Link>
        </div>
      </div>
    </div>
  );
}
