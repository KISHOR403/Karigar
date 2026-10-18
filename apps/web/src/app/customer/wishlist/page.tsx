'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MOCK_PRODUCTS } from '@/data/mock-data';
import { ProductGrid } from '@/components/products/ProductGrid';
import { Button } from '@karigar/ui';
import { Heart, ChevronRight, Trash2 } from 'lucide-react';

export default function WishlistPage() {
  const [wishlistSlugs, setWishlistSlugs] = useState<string[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('karigar_wishlist');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setWishlistSlugs(parsed);
        }
      } else {
        // Default curated selection for preview
        setWishlistSlugs([MOCK_PRODUCTS[0].slug, MOCK_PRODUCTS[1].slug]);
      }
    } catch {
      setWishlistSlugs([MOCK_PRODUCTS[0].slug, MOCK_PRODUCTS[1].slug]);
    }
    setIsHydrated(true);
  }, []);

  const savedProducts = isHydrated
    ? MOCK_PRODUCTS.filter((p) => wishlistSlugs.includes(p.slug))
    : MOCK_PRODUCTS.slice(0, 2);

  const handleClearWishlist = () => {
    setWishlistSlugs([]);
    try {
      localStorage.setItem('karigar_wishlist', JSON.stringify([]));
    } catch {
      // ignore
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[#7A746B]">
        <Link href="/" className="hover:text-[#191817]">Home</Link>
        <ChevronRight className="w-3 h-3 text-[#A8A196]" />
        <Link href="/customer" className="hover:text-[#191817]">Patron</Link>
        <ChevronRight className="w-3 h-3 text-[#A8A196]" />
        <span className="text-[#191817] font-medium">Wishlist</span>
      </nav>

      <div className="border-b border-[#191817] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1">
          <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold flex items-center gap-1.5">
            <Heart className="w-4 h-4 fill-[#B8532F] text-[#B8532F]" />
            <span>Curated Keepsakes</span>
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#191817]">
            My Saved Creations ({savedProducts.length})
          </h1>
          <p className="text-sm text-[#6E6962] font-light">
            Pieces you cherish, preserved for personal celebrations, gifting, or seasonal spaces.
          </p>
        </div>

        {savedProducts.length > 0 && (
          <button
            type="button"
            onClick={handleClearWishlist}
            className="text-xs uppercase tracking-wider text-[#7A746B] hover:text-[#B8532F] transition-colors flex items-center gap-1 self-start sm:self-auto"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear Wishlist</span>
          </button>
        )}
      </div>

      {savedProducts.length > 0 ? (
        <ProductGrid products={savedProducts} />
      ) : (
        <div className="text-center py-20 bg-white border border-[#E5DFD4] rounded-sm space-y-4 p-8">
          <div className="w-16 h-16 rounded-full bg-[#FAF8F5] mx-auto flex items-center justify-center border border-[#E5DFD4]">
            <Heart className="w-8 h-8 text-[#A8A196]" />
          </div>
          <div className="space-y-1 max-w-sm mx-auto">
            <h2 className="font-serif text-2xl text-[#191817]">Your wishlist is currently empty</h2>
            <p className="text-xs text-[#6E6962] leading-relaxed">
              Explore handmade flowers, personalized gifts, and living crafts to curate your personal collection.
            </p>
          </div>
          <div className="pt-2">
            <Link href="/categories/flowers-bouquets">
              <Button size="md" className="rounded-none uppercase tracking-wider text-xs px-6 bg-[#191817] text-white hover:bg-[#33302D]">
                Explore Creations
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
