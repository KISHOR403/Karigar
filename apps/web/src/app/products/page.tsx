import React from 'react';
import { MOCK_PRODUCTS } from '@/data/mock-data';
import { ProductGrid } from '@/components/products/ProductGrid';

export const metadata = {
  title: 'Handcrafted Objects & Heirloom Creations — Karigar',
  description: 'Explore authentic objects crafted with natural dyes, handlooms, and indigenous metallurgy.',
};

export default function ProductsIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="border-b border-[#191817] pb-6 space-y-2">
        <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
          Authentic Objects
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#191817]">
          Handcrafted Creations
        </h1>
        <p className="text-sm sm:text-base text-[#6E6962] font-light max-w-2xl">
          Each piece is shaped slowly by hand, carrying regional geological markers and living heritage.
        </p>
      </div>

      <ProductGrid products={MOCK_PRODUCTS} />
    </div>
  );
}
