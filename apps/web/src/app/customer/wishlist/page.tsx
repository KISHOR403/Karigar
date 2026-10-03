import React from 'react';
import Link from 'next/link';
import { MOCK_PRODUCTS } from '@/data/mock-data';
import { ProductGrid } from '@/components/products/ProductGrid';
import { Button } from '@karigar/ui';

export default function WishlistPage() {
  const savedProducts = MOCK_PRODUCTS.slice(0, 2);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="border-b border-[#191817] pb-6 space-y-2">
        <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
          Saved Keepsakes
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#191817]">
          My Curated Wishlist
        </h1>
        <p className="text-sm text-[#6E6962] font-light">
          Pieces you cherish, preserved for your personal moments or upcoming celebrations.
        </p>
      </div>

      {savedProducts.length > 0 ? (
        <ProductGrid products={savedProducts} />
      ) : (
        <div className="text-center py-20 bg-[#FAF8F5] border border-dashed border-[#DDD6CB] rounded-sm space-y-4">
          <p className="font-serif text-xl text-[#191817]">Your wishlist is currently peaceful and empty.</p>
          <p className="text-xs text-[#6E6962]">Explore handcrafted objects and mark favorites to curate your collection.</p>
          <Link href="/products">
            <Button size="md" className="rounded-none uppercase text-xs">
              Explore Creations
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
