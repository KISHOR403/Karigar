import React from 'react';
import Link from 'next/link';
import { ASSAMESE_BRAND_WORD } from '@karigar/config';

export function Footer() {
  return (
    <footer className="bg-[#191817] text-[#FAF8F5] pt-16 sm:pt-20 pb-12 border-t border-[#2D2A26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Header */}
        <div className="pb-12 border-b border-[#2E2C29] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-3">
              <span className="font-serif text-3xl sm:text-4xl tracking-tight text-[#FAF8F5]">
                KARIGAR
              </span>
              <span
                lang="as"
                className="font-assamese text-xl sm:text-2xl text-[#8C8477] tracking-widest select-none"
              >
                {ASSAMESE_BRAND_WORD}
              </span>
            </div>
            <p className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
              Contemporary Indian Artisan Marketplace & Creator Sanctuary
            </p>
            <p className="text-sm text-[#A8A29A] leading-relaxed font-light">
              Connecting independent Indian master artisans with people who cherish handcrafted flowers, thoughtful bespoke gifts, and living regional craft lineages.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs text-[#C5BEB3] bg-[#22201D] px-4 py-3 border border-[#33302C] rounded-none shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#3D5B3A] shrink-0" />
            <span>Minimum 90% Direct Artisan Proceeds Guarantee</span>
          </div>
        </div>

        {/* 5 Distinct Navigation Groups: Shop, Discover, Customer Support, For Artisans, Legal */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-10 py-12 border-b border-[#2E2C29]">
          {/* 1. Shop */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#8B8479]">
              Shop
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#D5CEC4]">
              <li>
                <Link href="/categories/flowers-bouquets" className="hover:text-white transition-colors">
                  Flowers & Bouquets
                </Link>
              </li>
              <li>
                <Link href="/categories/personalized-gifts" className="hover:text-white transition-colors">
                  Personalized Gifts
                </Link>
              </li>
              <li>
                <Link href="/categories/home-decor" className="hover:text-white transition-colors">
                  Home Decor
                </Link>
              </li>
              <li>
                <Link href="/categories/crochet-fabric" className="hover:text-white transition-colors">
                  Crochet & Fabric Crafts
                </Link>
              </li>
              <li>
                <Link href="/categories/jewellery-accessories" className="hover:text-white transition-colors">
                  Jewellery & Accessories
                </Link>
              </li>
              <li>
                <Link href="/categories/traditional-crafts" className="hover:text-white transition-colors">
                  Traditional Crafts
                </Link>
              </li>
              <li>
                <Link href="/objects" className="hover:text-white transition-colors font-medium text-[#E8A588]">
                  All Creations →
                </Link>
              </li>
            </ul>
          </div>

          {/* 2. Discover */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#8B8479]">
              Discover
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#D5CEC4]">
              <li>
                <Link href="/makers" className="hover:text-white transition-colors">
                  Master Artisans
                </Link>
              </li>
              <li>
                <Link href="/stories" className="hover:text-white transition-colors">
                  Craft Chronicles
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-white transition-colors">
                  All Categories
                </Link>
              </li>
              <li>
                <Link href="/regions/assam" className="hover:text-white transition-colors">
                  Assam Heritage
                </Link>
              </li>
              <li>
                <Link href="/regions/bengal" className="hover:text-white transition-colors">
                  Kolkata & Bengal
                </Link>
              </li>
              <li>
                <Link href="/regions/kutch" className="hover:text-white transition-colors">
                  Kutch Block Prints
                </Link>
              </li>
              <li>
                <Link href="/regions/rajasthan" className="hover:text-white transition-colors">
                  Rajasthan Botanicals
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Customer Support */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#8B8479]">
              Customer Support
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#D5CEC4]">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Curatorial Desk
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-white transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-white transition-colors">
                  Returns & Replacements
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-white transition-colors">
                  Packaging & Insurance
                </Link>
              </li>
              <li>
                <Link href="/customer/wishlist" className="hover:text-white transition-colors">
                  Saved Wishlist
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. For Artisans */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#8B8479]">
              For Artisans
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#D5CEC4]">
              <li>
                <Link href="/artisan" className="hover:text-white transition-colors">
                  Apply for Guild Verification
                </Link>
              </li>
              <li>
                <Link href="/artisan" className="hover:text-white transition-colors">
                  Atelier Dashboard
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-white transition-colors">
                  Curatorial Verification
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Artisan Charter & Rights
                </Link>
              </li>
            </ul>
          </div>

          {/* 5. Legal */}
          <div className="space-y-3 col-span-2 md:col-span-1">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#8B8479]">
              Legal
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#D5CEC4]">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Patronage
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-white transition-colors">
                  Transit Guarantees
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-white transition-colors">
                  GI Authenticity Standards
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7B756C] gap-4">
          <p>© {new Date().getFullYear()} Karigar Artisan Marketplace. Crafted with care in India.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#FAF8F5] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[#FAF8F5] transition-colors">
              Terms of Patronage
            </Link>
            <Link href="/shipping" className="hover:text-[#FAF8F5] transition-colors">
              Shipping & Returns
            </Link>
            <Link href="/contact" className="hover:text-[#FAF8F5] transition-colors">
              Contact Desk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
