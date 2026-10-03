'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { MOCK_PRODUCTS } from '@/data/mock-data';
import { ProductGrid } from '@/components/products/ProductGrid';

export default function CategoryDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const categoryProducts = MOCK_PRODUCTS.filter(
    (p) => p.category.slug === slug || slug === 'all',
  );
  const displayProducts = categoryProducts.length > 0 ? categoryProducts : MOCK_PRODUCTS;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="border-b border-[#191817] pb-6 space-y-2">
        <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
          Category Collection
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#191817] capitalize">
          {slug ? slug.replace(/-/g, ' ') : 'Objects'}
        </h1>
        <p className="text-sm text-[#6E6962] font-light max-w-xl">
          Objects meticulously fashioned by certified master craftspeople in this material tradition.
        </p>
      </div>

      <ProductGrid products={displayProducts} />
    </div>
  );
}
