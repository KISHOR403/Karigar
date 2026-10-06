'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { MOCK_PRODUCTS } from '@/data/mock-data';
import { ProductGrid } from '@/components/products/ProductGrid';
import { Filter } from 'lucide-react';

const CATEGORY_TABS = [
  { label: 'All Objects', value: 'all' },
  { label: 'Textiles & Handloom', value: 'textiles-handloom' },
  { label: 'Metals & Forge', value: 'metals-forge' },
  { label: 'Turned Wood & Lacquer', value: 'turned-wood-lacquer' },
];

export default function ObjectsIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return MOCK_PRODUCTS;
    return MOCK_PRODUCTS.filter((p) => p.category.slug === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="border-b border-[#191817] pb-6 space-y-2">
        <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
          Authentic Objects
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-[#191817]">
          Handcrafted Creations
        </h1>
        <p className="text-base sm:text-lg text-[#6E6962] font-light max-w-2xl leading-relaxed">
          Each piece is shaped slowly by hand, carrying regional geological markers, natural pigments, and generational heritage.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#E5DFD4]">
        <Filter className="w-3.5 h-3.5 text-[#B8532F] mr-2 shrink-0" />
        {CATEGORY_TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setSelectedCategory(tab.value)}
            className={`px-4 py-2 text-xs uppercase tracking-wider font-medium rounded-none transition-colors whitespace-nowrap ${
              selectedCategory === tab.value
                ? 'bg-[#191817] text-white'
                : 'bg-[#FAF8F5] text-[#59544D] hover:text-[#191817] border border-[#E5DFD4]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="pt-2">
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}
