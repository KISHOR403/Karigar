import React from 'react';
import Link from 'next/link';
import { Button } from '@karigar/ui';
import { Sparkles, Package, TrendingUp, Settings, Plus } from 'lucide-react';

export default function ArtisanDashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#191817] pb-6 gap-4">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
            Master Artisan Atelier
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#191817]">
            Workshop Studio Management
          </h1>
          <p className="text-sm text-[#6E6962] font-light">
            Manage your craft catalog, respond to bespoke inquiries, and monitor direct earnings.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/products">
            <Button size="md" className="rounded-none uppercase tracking-wider text-xs px-6">
              <Plus className="w-3.5 h-3.5 mr-2" />
              <span>List New Creation</span>
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 bg-[#FAF8F5] border border-[#E5DFD4] space-y-1">
          <span className="text-[10px] uppercase tracking-widest text-[#7A746B]">Active Creations</span>
          <p className="font-serif text-3xl text-[#191817]">12</p>
          <span className="text-[11px] text-[#3D5B3A]">All GI Verified</span>
        </div>
        <div className="p-6 bg-[#FAF8F5] border border-[#E5DFD4] space-y-1">
          <span className="text-[10px] uppercase tracking-widest text-[#7A746B]">Bespoke Requests</span>
          <p className="font-serif text-3xl text-[#B8532F]">3 Pending</p>
          <span className="text-[11px] text-[#7A746B]">Average response: 18h</span>
        </div>
        <div className="p-6 bg-[#FAF8F5] border border-[#E5DFD4] space-y-1">
          <span className="text-[10px] uppercase tracking-widest text-[#7A746B]">Patron Followers</span>
          <p className="font-serif text-3xl text-[#191817]">2,420</p>
          <span className="text-[11px] text-[#3D5B3A]">+140 this moon cycle</span>
        </div>
        <div className="p-6 bg-[#FAF8F5] border border-[#E5DFD4] space-y-1">
          <span className="text-[10px] uppercase tracking-widest text-[#7A746B]">Atelier Payouts</span>
          <p className="font-serif text-3xl text-[#191817]">₹1,84,500</p>
          <span className="text-[11px] text-[#7A746B]">Next cycle: Friday</span>
        </div>
      </div>
    </div>
  );
}
