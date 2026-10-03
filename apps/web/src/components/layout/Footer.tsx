import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#191817] text-[#FAF8F5] pt-20 pb-12 border-t border-[#2D2A26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#2E2C29]">
          {/* Brand Manifesto */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif text-3xl tracking-tight text-[#FAF8F5]">KARIGAR</span>
            <p className="text-xs uppercase tracking-widest text-[#B8532F] font-medium">
              Lineage & Living Craft
            </p>
            <p className="text-sm text-[#A8A29A] leading-relaxed max-w-md pt-2">
              We exist to build direct, dignifying relationships between independent Indian master
              artisans and discerning patrons worldwide. Every piece carries the unhurried patience
              of hands, regional mineral pigments, and centuries of collective cultural memory.
            </p>
            <div className="pt-4 flex items-center gap-4 text-xs text-[#C5BEB3]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#3D5B3A]" />
              <span>Direct Fair Compensation — Zero Middlemen Markups</span>
            </div>
          </div>

          {/* Regional Ateliers */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#8B8479]">
              Regional Ateliers
            </h4>
            <ul className="space-y-2 text-sm text-[#D5CEC4]">
              <li><Link href="/artisans?region=kashmir" className="hover:text-white transition-colors">Kashmir Weaves</Link></li>
              <li><Link href="/artisans?region=kutch" className="hover:text-white transition-colors">Kutch Block Prints</Link></li>
              <li><Link href="/artisans?region=bastar" className="hover:text-white transition-colors">Bastar Dhokra</Link></li>
              <li><Link href="/artisans?region=rajasthan" className="hover:text-white transition-colors">Jaipur Blue Pottery</Link></li>
              <li><Link href="/artisans?region=karnataka" className="hover:text-white transition-colors">Channapatna Lathe</Link></li>
              <li><Link href="/artisans?region=kerala" className="hover:text-white transition-colors">Kerala Bell Metal</Link></li>
            </ul>
          </div>

          {/* Platform Exploration */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#8B8479]">
              Discovery
            </h4>
            <ul className="space-y-2 text-sm text-[#D5CEC4]">
              <li><Link href="/artisans" className="hover:text-white transition-colors">Master Artisans</Link></li>
              <li><Link href="/stories" className="hover:text-white transition-colors">Craft Chronicles</Link></li>
              <li><Link href="/collections" className="hover:text-white transition-colors">Curated Collections</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">All Objects</Link></li>
              <li><Link href="/categories" className="hover:text-white transition-colors">Material Taxonomies</Link></li>
            </ul>
          </div>

          {/* Artisan & Patron Services */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#8B8479]">
              Artisan Guild
            </h4>
            <p className="text-xs text-[#A8A29A] leading-relaxed">
              Are you an authentic master artisan, Shilp Guru, or generational craft guild leader in India?
            </p>
            <div className="pt-2">
              <Link
                href="/artisan"
                className="inline-block text-xs uppercase tracking-wider font-semibold px-4 py-2 border border-[#8B8479] text-[#FAF8F5] hover:border-white transition-colors"
              >
                Apply for Atelier Verification
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7B756C] gap-4">
          <p>© {new Date().getFullYear()} Karigar Heritage Platform. Handcrafted in India.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Patronage</Link>
            <Link href="/ethics" className="hover:text-white transition-colors">Artisan Charter</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
