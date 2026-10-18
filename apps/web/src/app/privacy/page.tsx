import React from 'react';
import Link from 'next/link';
import { ChevronRight, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy — Karigar',
  description: 'How Karigar safeguards patron data and artisan confidentiality.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[#7A746B]">
        <Link href="/" className="hover:text-[#191817]">Home</Link>
        <ChevronRight className="w-3 h-3 text-[#A8A196]" />
        <span className="text-[#191817] font-medium">Privacy Policy</span>
      </nav>

      <div className="border-b border-[#191817] pb-6 space-y-2">
        <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4" />
          <span>Trust & Confidentiality</span>
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#191817]">
          Privacy Policy
        </h1>
        <p className="text-sm text-[#787268]">
          Last revised: October 2026 • Karigar Artisan Marketplace
        </p>
      </div>

      <div className="space-y-8 text-sm text-[#4A463F] leading-relaxed font-light">
        <section className="space-y-3">
          <h2 className="font-serif text-2xl text-[#191817] font-normal">1. Patron Data Protection</h2>
          <p>
            At Karigar, we respect your privacy as a discerning patron of Indian craft. We collect only the essential personal details required to fulfill your orders, ship creations directly from regional artisan ateliers, and communicate regarding custom commissions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl text-[#191817] font-normal">2. Information We Collect</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Contact Information:</strong> Your name, email address, telephone number, and physical shipping address for delivery coordination.</li>
            <li><strong>Custom Commission Details:</strong> Gift messages, personalized inscriptions, and design notes shared for bespoke creations.</li>
            <li><strong>Transactional Records:</strong> Order identifiers, purchased products, payment transaction references, and dispatch tracking numbers. Payment instrument details are processed through encrypted, compliant gateways and are never stored on our servers.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl text-[#191817] font-normal">3. Artisan Workshop Confidentiality</h2>
          <p>
            We share patron shipping addresses with dispatching artisans solely to enable direct delivery with signed maker provenance certificates. Artisans agree under our Artisan Guild Charter never to sell, distribute, or misuse patron contact information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl text-[#191817] font-normal">4. Data Rights & Inquiries</h2>
          <p>
            Patrons may request a summary of their account data, ask for correction of inaccurate details, or request account erasure by contacting our support desk at{' '}
            <Link href="/contact" className="text-[#B8532F] font-medium hover:underline">
              support@karigar.craft
            </Link>.
          </p>
        </section>
      </div>
    </div>
  );
}
