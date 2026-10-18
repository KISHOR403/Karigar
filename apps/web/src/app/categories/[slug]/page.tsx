'use client';

import React, { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { MOCK_PRODUCTS, MOCK_CATEGORIES } from '@/data/mock-data';
import { ProductGrid } from '@/components/products/ProductGrid';
import { Button } from '@karigar/ui';
import { ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

export default function CategoryDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const currentCategory = MOCK_CATEGORIES.find((c) => c.slug === slug);

  const [selectedProduction, setSelectedProduction] = useState<string>('All');
  const [priceSort, setPriceSort] = useState<string>('default');

  const baseProducts = useMemo(() => {
    const matched = MOCK_PRODUCTS.filter(
      (p) =>
        p.category.slug === slug ||
        p.category.id === slug ||
        slug === 'all' ||
        (slug === 'traditional-crafts' && ['textiles-handloom', 'metals-forge', 'clay-ceramics', 'turned-wood-lacquer', 'traditional-crafts'].includes(p.category.slug)),
    );
    return matched.length > 0 ? matched : MOCK_PRODUCTS;
  }, [slug]);

  const displayProducts = useMemo(() => {
    let result = [...baseProducts];
    if (selectedProduction !== 'All') {
      result = result.filter((p) => p.specifications?.productionType === selectedProduction);
    }
    if (priceSort === 'low-to-high') {
      result.sort((a, b) => a.basePrice - b.basePrice);
    } else if (priceSort === 'high-to-low') {
      result.sort((a, b) => b.basePrice - a.basePrice);
    }
    return result;
  }, [baseProducts, selectedProduction, priceSort]);

  const title = currentCategory ? currentCategory.name : slug ? slug.replace(/-/g, ' ') : 'Handmade Objects';
  const description = currentCategory
    ? currentCategory.description
    : 'Artisan creations meticulously fashioned by certified craftspeople in this material and stylistic tradition.';

  return (
    <div className="space-y-12 pb-24">
      {/* Breadcrumb Path */}
      <nav className="border-b border-[#E5DFD4] py-3.5 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-[#7A746B]">
          <Link href="/" className="hover:text-[#191817]">Home</Link>
          <ChevronRight className="w-3 h-3 text-[#A8A196]" />
          <Link href="/categories" className="hover:text-[#191817]">Categories</Link>
          <ChevronRight className="w-3 h-3 text-[#A8A196]" />
          <span className="text-[#191817] font-medium capitalize">{title}</span>
        </div>
      </nav>

      {/* Category Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[#191817] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
              Curated Craft Category
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#191817] capitalize">
              {title}
            </h1>
            <p className="text-sm sm:text-base text-[#6E6962] font-light leading-relaxed">
              {description}
            </p>
          </div>

          {currentCategory?.image && (
            <div className="relative w-36 sm:w-44 aspect-[4/3] rounded-sm overflow-hidden bg-[#ECE5DC] border border-[#E5DFD4] shrink-0">
              <Image
                src={currentCategory.image}
                alt={title}
                fill
                sizes="176px"
                className="object-cover"
              />
            </div>
          )}
        </div>

        {/* Filter bar */}
        <div className="pt-6 pb-2 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <span className="text-[#8C8477] uppercase tracking-wider text-[10px]">Filter:</span>
            <select
              value={selectedProduction}
              onChange={(e) => setSelectedProduction(e.target.value)}
              className="bg-[#FAF8F5] border border-[#D5CEC2] px-3 py-1.5 text-xs text-[#191817] rounded-none focus:outline-none focus:ring-1 focus:ring-[#B8532F]"
            >
              <option value="All">All Production Status</option>
              <option value="Ready to Ship">Ready to Ship</option>
              <option value="Made to Order">Made to Order</option>
            </select>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[#7A746B]">
              Showing <strong className="text-[#191817]">{displayProducts.length}</strong> creations
            </span>
            <select
              value={priceSort}
              onChange={(e) => setPriceSort(e.target.value)}
              className="bg-[#FAF8F5] border border-[#D5CEC2] px-3 py-1.5 text-xs text-[#191817] rounded-none focus:outline-none focus:ring-1 focus:ring-[#B8532F]"
            >
              <option value="default">Sort by Default</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="pt-8">
          <ProductGrid products={displayProducts} />
        </div>
      </div>
    </div>
  );
}
