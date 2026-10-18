import React from 'react';
import Link from 'next/link';
import { ChevronRight, Truck, PackageCheck, RotateCcw, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Shipping, Delivery & Returns — Karigar',
  description: 'Learn about insured courier delivery, protective packaging, and returns on Karigar.',
};

export default function ShippingReturnsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[#7A746B]">
        <Link href="/" className="hover:text-[#191817]">Home</Link>
        <ChevronRight className="w-3 h-3 text-[#A8A196]" />
        <span className="text-[#191817] font-medium">Shipping & Delivery</span>
      </nav>

      <div className="border-b border-[#191817] pb-6 space-y-2">
        <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold flex items-center gap-1.5">
          <Truck className="w-4 h-4" />
          <span>Atelier Fulfillment</span>
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#191817]">
          Shipping, Delivery & Returns
        </h1>
        <p className="text-sm text-[#787268]">
          Insured transit directly from master artisan workshops across India.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        <div className="p-6 bg-[#FAF8F5] border border-[#E5DFD4] space-y-2">
          <PackageCheck className="w-5 h-5 text-[#B8532F]" />
          <h3 className="font-serif text-lg text-[#191817]">Reinforced Packaging</h3>
          <p className="text-xs text-[#6E6962] leading-relaxed">
            Delicate crochet blooms, ribbon flora, and ceramics are packed in protective rigid cartons with moisture barriers.
          </p>
        </div>
        <div className="p-6 bg-[#FAF8F5] border border-[#E5DFD4] space-y-2">
          <ShieldCheck className="w-5 h-5 text-[#295424]" />
          <h3 className="font-serif text-lg text-[#191817]">100% Transit Insurance</h3>
          <p className="text-xs text-[#6E6962] leading-relaxed">
            Every shipment is covered against transit damage or loss, ensuring peace of mind for both patron and maker.
          </p>
        </div>
        <div className="p-6 bg-[#FAF8F5] border border-[#E5DFD4] space-y-2">
          <RotateCcw className="w-5 h-5 text-[#8C531B]" />
          <h3 className="font-serif text-lg text-[#191817]">Damage Guarantee</h3>
          <p className="text-xs text-[#6E6962] leading-relaxed">
            If an object arrives damaged in transit, report it within 48 hours for immediate artisan replacement or full refund.
          </p>
        </div>
      </div>

      <div className="space-y-8 text-sm text-[#4A463F] leading-relaxed font-light">
        <section className="space-y-3">
          <h2 className="font-serif text-2xl text-[#191817] font-normal">Domestic Delivery Across India</h2>
          <p>
            We provide delivery across all serviceable Indian pincodes via reputed air and surface couriers.
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Standard Insured Delivery:</strong> Complimentary (Free) across all domestic orders.</li>
            <li><strong>Ready-to-Ship Products:</strong> Dispatched within 24–48 hours; delivery typically takes 3–5 business days depending on destination pincode.</li>
            <li><strong>Made-to-Order Products:</strong> The artisan crafts your piece over the duration stated on the product page, followed by trackable express dispatch.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl text-[#191817] font-normal">Tracking Your Dispatch</h2>
          <p>
            Upon dispatch, a direct courier tracking identifier is sent via email and SMS. You can monitor your shipment&apos;s journey from the artisan&apos;s district workshop directly to your doorstep.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl text-[#191817] font-normal">Returns & Damage Protection</h2>
          <p>
            Because our items are handmade and often personalized, standard change-of-mind returns are not supported to protect artisan livelihood. However, any item damaged or defective upon arrival is fully guaranteed. Simply share photographs within 48 hours at{' '}
            <Link href="/contact" className="text-[#B8532F] font-medium hover:underline">
              support@karigar.craft
            </Link>{' '}
            and our curatorial desk will facilitate an immediate replacement or full refund.
          </p>
        </section>
      </div>
    </div>
  );
}
