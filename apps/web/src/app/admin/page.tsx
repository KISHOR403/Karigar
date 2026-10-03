import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Users, PackageCheck, AlertCircle } from 'lucide-react';

export default function AdminDashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="border-b border-[#191817] pb-6 space-y-2">
        <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
          Platform Governance
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#191817]">
          Karigar Curatorial & Verification Console
        </h1>
        <p className="text-sm text-[#6E6962] font-light">
          Verify master artisan credentials, inspect GI provenance certificates, and oversee platform security.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border border-[#E5DFD4] bg-[#FAF8F5] space-y-3">
          <ShieldCheck className="w-5 h-5 text-[#B8532F]" />
          <h3 className="font-serif text-xl text-[#191817]">Artisan Verifications</h3>
          <p className="text-xs text-[#6E6962]">
            4 artisan applications awaiting GI certificate and lineage review.
          </p>
          <span className="text-xs uppercase tracking-wider font-semibold text-[#191817] block pt-2">
            Review Queue →
          </span>
        </div>

        <div className="p-6 border border-[#E5DFD4] bg-[#FAF8F5] space-y-3">
          <PackageCheck className="w-5 h-5 text-[#B8532F]" />
          <h3 className="font-serif text-xl text-[#191817]">Editorial Curations</h3>
          <p className="text-xs text-[#6E6962]">
            Manage featured master rankings, seasonal stories, and regional highlights.
          </p>
          <span className="text-xs uppercase tracking-wider font-semibold text-[#191817] block pt-2">
            Curate Homepage →
          </span>
        </div>

        <div className="p-6 border border-[#E5DFD4] bg-[#FAF8F5] space-y-3">
          <Users className="w-5 h-5 text-[#B8532F]" />
          <h3 className="font-serif text-xl text-[#191817]">Platform Telemetry</h3>
          <p className="text-xs text-[#6E6962]">
            Auditing 100% direct artisan payments and anti-counterfeiting compliance.
          </p>
          <span className="text-xs uppercase tracking-wider font-semibold text-[#191817] block pt-2">
            View Audits →
          </span>
        </div>
      </div>
    </div>
  );
}
