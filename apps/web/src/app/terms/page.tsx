import React from 'react';
import Link from 'next/link';
import { ChevronRight, FileText } from 'lucide-react';

export const metadata = {
  title: 'Terms of Patronage — Karigar',
  description: 'Terms and conditions governing orders, bespoke creations, and artisan patronage on Karigar.',
};

export default function TermsOfPatronagePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[#7A746B]">
        <Link href="/" className="hover:text-[#191817]">Home</Link>
        <ChevronRight className="w-3 h-3 text-[#A8A196]" />
        <span className="text-[#191817] font-medium">Terms of Patronage</span>
      </nav>

      <div className="border-b border-[#191817] pb-6 space-y-2">
        <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold flex items-center gap-1.5">
          <FileText className="w-4 h-4" />
          <span>Craft Agreement</span>
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#191817]">
          Terms of Patronage
        </h1>
        <p className="text-sm text-[#787268]">
          Last updated: October 2026 • Karigar Contemporary Indian Artisan Marketplace
        </p>
      </div>

      <div className="space-y-8 text-sm text-[#4A463F] leading-relaxed font-light">
        <section className="space-y-3">
          <h2 className="font-serif text-2xl text-[#191817] font-normal">1. Nature of Handmade Creations</h2>
          <p>
            Karigar connects patrons directly with independent Indian master artisans. Every object—including hand-crocheted bouquets, folded ribbon flora, hand-carved keepsakes, and traditional handlooms—is individually fashioned by human hands. Subtle nuances in petal geometry, organic botanical dye shades, and timber grain are genuine hallmarks of authentic handcraft, not defects.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl text-[#191817] font-normal">2. Ready-to-Ship vs. Made-to-Order Timelines</h2>
          <p>
            Creations marked as &ldquo;Ready to Ship&rdquo; dispatch within 24–48 business hours from the artisan&apos;s workshop. Creations designated as &ldquo;Made to Order&rdquo; undergo individualized handcrafting, with typical fabrication durations displayed on the product page (usually 3 to 14 business days) prior to insured dispatch.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl text-[#191817] font-normal">3. Fair Artisan Compensation Pledge</h2>
          <p>
            Karigar upholds a strict fair compensation charter. A minimum of 90% of order proceeds flows directly to the creating artisan atelier. Patrons agree that orders represent direct support for living cultural lineages.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl text-[#191817] font-normal">4. Cancellations & Modifications</h2>
          <p>
            Ready-to-ship orders may be cancelled prior to dispatch notification. Made-to-order and personalized commission pieces cannot be cancelled once raw material shaping or personalized engraving has commenced. Please review all custom text carefully prior to placing orders.
          </p>
        </section>
      </div>
    </div>
  );
}
