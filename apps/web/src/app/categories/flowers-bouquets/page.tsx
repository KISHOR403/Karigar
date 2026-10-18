'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MOCK_PRODUCTS } from '@/data/mock-data';
import { APP_CONFIG } from '@karigar/config';
import { Button, Badge } from '@karigar/ui';
import {
  Sparkles,
  Filter,
  ArrowRight,
  RotateCcw,
  Check,
  ChevronDown,
  Heart,
  SlidersHorizontal,
} from 'lucide-react';

const OCCASIONS = [
  'All',
  'Birthday',
  'Anniversary',
  'Wedding',
  'Graduation',
  "Valentine's Day",
  'Just Because',
] as const;

const CRAFT_TYPES = [
  'All Crafts',
  'Crochet Bouquets',
  'Ribbon Bouquets',
  'Paper Flowers',
  'Fabric Flowers',
  'Floral Adornments',
] as const;

export default function FlowersBouquetsPage() {
  const [selectedOccasion, setSelectedOccasion] = useState<string>('All');
  const [selectedCraftType, setSelectedCraftType] = useState<string>('All Crafts');
  const [selectedProduction, setSelectedProduction] = useState<string>('All');
  const [selectedColor, setSelectedColor] = useState<string>('All');
  const [priceRange, setPriceRange] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filter pool: all products in flowers-bouquets category or with floral/crochet tags
  const baseFloralProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(
      (p) =>
        p.category.slug === 'flowers-bouquets' ||
        p.tags.some((t) =>
          ['crochet-bouquet', 'handmade-flowers', 'ribbon-roses', 'felt-flowers', 'paper-flowers', 'floral-jewellery', 'crochet-flowers'].includes(t),
        ),
    );
  }, []);

  // Supported Colors based on actual product data
  const availableColors = useMemo(() => {
    const colors = new Set<string>();
    baseFloralProducts.forEach((p) => {
      if (p.specifications.colorFamily) {
        colors.add(p.specifications.colorFamily);
      }
    });
    return Array.from(colors);
  }, [baseFloralProducts]);

  // Apply filters
  const filteredProducts = useMemo(() => {
    let result = [...baseFloralProducts];

    // Filter by Occasion
    if (selectedOccasion !== 'All') {
      result = result.filter(
        (p) =>
          p.specifications.occasion &&
          p.specifications.occasion.some(
            (occ) => occ.toLowerCase() === selectedOccasion.toLowerCase(),
          ),
      );
    }

    // Filter by Craft Type
    if (selectedCraftType !== 'All Crafts') {
      if (selectedCraftType === 'Crochet Bouquets') {
        result = result.filter((p) => p.tags.includes('crochet-bouquet') || p.tags.includes('crochet-flowers'));
      } else if (selectedCraftType === 'Ribbon Bouquets') {
        result = result.filter((p) => p.tags.includes('ribbon-roses'));
      } else if (selectedCraftType === 'Paper Flowers') {
        result = result.filter((p) => p.tags.includes('paper-flowers'));
      } else if (selectedCraftType === 'Fabric Flowers') {
        result = result.filter((p) => p.tags.includes('felt-flowers') || p.tags.includes('fabric-arrangement'));
      } else if (selectedCraftType === 'Floral Adornments') {
        result = result.filter((p) => p.tags.includes('floral-jewellery'));
      }
    }

    // Filter by Production Status
    if (selectedProduction !== 'All') {
      result = result.filter((p) => p.specifications.productionType === selectedProduction);
    }

    // Filter by Color Family
    if (selectedColor !== 'All') {
      result = result.filter((p) => p.specifications.colorFamily === selectedColor);
    }

    // Filter by Price Range
    if (priceRange === 'under-2500') {
      result = result.filter((p) => p.basePrice < 2500);
    } else if (priceRange === '2500-3500') {
      result = result.filter((p) => p.basePrice >= 2500 && p.basePrice <= 3500);
    } else if (priceRange === 'above-3500') {
      result = result.filter((p) => p.basePrice > 3500);
    }

    // Sort
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.basePrice - b.basePrice);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.basePrice - a.basePrice);
    } else if (sortBy === 'duration') {
      result.sort((a, b) => a.specifications.makingDurationDays - b.specifications.makingDurationDays);
    }

    return result;
  }, [baseFloralProducts, selectedOccasion, selectedCraftType, selectedProduction, selectedColor, priceRange, sortBy]);

  const activeFilterCount =
    (selectedOccasion !== 'All' ? 1 : 0) +
    (selectedCraftType !== 'All Crafts' ? 1 : 0) +
    (selectedProduction !== 'All' ? 1 : 0) +
    (selectedColor !== 'All' ? 1 : 0) +
    (priceRange !== 'All' ? 1 : 0);

  const resetFilters = () => {
    setSelectedOccasion('All');
    setSelectedCraftType('All Crafts');
    setSelectedProduction('All');
    setSelectedColor('All');
    setPriceRange('All');
    setSortBy('featured');
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-28">
      {/* Category Editorial Hero Banner */}
      <section className="bg-[#FAF8F5] border-b border-[#E5DFD4] pt-12 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
                <span>Handmade Flora · Never Wilting</span>
                <span>•</span>
                <span>Independent Makers</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl text-[#191817] tracking-tight leading-[1.1]">
                Flowers & Bouquets
              </h1>

              <p className="text-base sm:text-lg text-[#5C574F] font-light leading-relaxed max-w-xl">
                Everlasting crochet blooms, hand-folded French satin ribbon roses, pressed botanicals, and sculptural crepe petals — crafted to preserve cherished moments forever.
              </p>

              {/* Craft Integrity Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#7A746B]">
                <span className="flex items-center gap-1.5 font-medium text-[#191817]">
                  <Sparkles className="w-3.5 h-3.5 text-[#B8532F]" />
                  Zero Waste & Forever Fresh
                </span>
                <span>•</span>
                <span>100% Artisan Handmade</span>
                <span>•</span>
                <span>Bespoke Palette Inquiries</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-sm overflow-hidden bg-[#ECE5DC] border border-[#E5DFD4] shadow-sm">
                <Image
                  src="/images/cat-flowers-bouquets.jpg"
                  alt="Curated handmade flowers and artisan bouquets"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-[10px] uppercase tracking-widest text-[#E8A588] font-semibold">
                    Studio Spotlight
                  </p>
                  <p className="font-serif text-lg text-white">
                    Petal & Purl Studio, Kolkata
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* =========================================================
            BROWSE BY OCCASION (PROMPT REQUIREMENT #5)
            Birthday, Anniversary, Wedding, Graduation, Valentine's Day and Just Because
            ========================================================= */}
        <div className="space-y-3 pb-6 border-b border-[#E5DFD4]">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold flex items-center gap-1.5">
              <span>Browse by Occasion</span>
            </span>
            {selectedOccasion !== 'All' && (
              <button
                type="button"
                onClick={() => setSelectedOccasion('All')}
                className="text-xs text-[#B8532F] hover:underline"
              >
                Clear occasion
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {OCCASIONS.map((occ) => {
              const isSelected = selectedOccasion === occ;
              return (
                <button
                  key={occ}
                  type="button"
                  onClick={() => setSelectedOccasion(occ)}
                  className={`whitespace-nowrap px-4 py-2 text-xs uppercase tracking-wider rounded-full transition-all ${
                    isSelected
                      ? 'bg-[#191817] text-white font-semibold shadow-sm'
                      : 'bg-[#FAF8F5] text-[#554F47] hover:bg-[#EAE4D9] hover:text-[#191817] border border-[#E5DFD4]'
                  }`}
                >
                  {occ}
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter Controls Bar (Sort, Ready vs Made to order, Craft Type, Mobile Toggle) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-3 bg-[#FAF8F5] px-4 border border-[#E5DFD4] rounded-sm text-xs">
          <div className="flex items-center gap-3 flex-wrap">
            {/* Craft Type Selector */}
            <div className="flex items-center gap-1.5">
              <span className="text-[#8C8477] uppercase tracking-wider text-[10px]">Craft:</span>
              <select
                value={selectedCraftType}
                onChange={(e) => setSelectedCraftType(e.target.value)}
                className="bg-white border border-[#D5CEC2] rounded-none px-2.5 py-1.5 text-xs text-[#191817] focus:outline-none focus:ring-1 focus:ring-[#B8532F]"
              >
                {CRAFT_TYPES.map((ct) => (
                  <option key={ct} value={ct}>{ct}</option>
                ))}
              </select>
            </div>

            {/* Production Status Filter */}
            <div className="flex items-center gap-1.5">
              <span className="text-[#8C8477] uppercase tracking-wider text-[10px]">Production:</span>
              <select
                value={selectedProduction}
                onChange={(e) => setSelectedProduction(e.target.value)}
                className="bg-white border border-[#D5CEC2] rounded-none px-2.5 py-1.5 text-xs text-[#191817] focus:outline-none focus:ring-1 focus:ring-[#B8532F]"
              >
                <option value="All">All Production</option>
                <option value="Ready to Ship">Ready to Ship</option>
                <option value="Made to Order">Made to Order</option>
              </select>
            </div>

            {/* Price Filter */}
            <div className="flex items-center gap-1.5">
              <span className="text-[#8C8477] uppercase tracking-wider text-[10px]">Price:</span>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="bg-white border border-[#D5CEC2] rounded-none px-2.5 py-1.5 text-xs text-[#191817] focus:outline-none focus:ring-1 focus:ring-[#B8532F]"
              >
                <option value="All">All Prices</option>
                <option value="under-2500">Under ₹2,500</option>
                <option value="2500-3500">₹2,500 - ₹3,500</option>
                <option value="above-3500">Above ₹3,500</option>
              </select>
            </div>

            {/* Color Filter if available */}
            {availableColors.length > 0 && (
              <div className="hidden lg:flex items-center gap-1.5">
                <span className="text-[#8C8477] uppercase tracking-wider text-[10px]">Palette:</span>
                <select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="bg-white border border-[#D5CEC2] rounded-none px-2.5 py-1.5 text-xs text-[#191817] focus:outline-none focus:ring-1 focus:ring-[#B8532F]"
                >
                  <option value="All">All Palettes</option>
                  {availableColors.map((col) => (
                    <option key={col} value={col}>{col.split('(')[0].trim()}</option>
                  ))}
                </select>
              </div>
            )}

            {activeFilterCount > 0 && (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1 text-xs text-[#B8532F] font-medium hover:underline ml-2"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset ({activeFilterCount})</span>
              </button>
            )}
          </div>

          {/* Right side: Sort & Results Count */}
          <div className="flex items-center justify-between md:justify-end gap-4 shrink-0">
            <span className="text-xs text-[#7A746B]">
              Showing <strong className="text-[#191817]">{filteredProducts.length}</strong> creations
            </span>

            <div className="flex items-center gap-1.5">
              <span className="text-[#8C8477] uppercase tracking-wider text-[10px]">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-[#D5CEC2] rounded-none px-2.5 py-1.5 text-xs text-[#191817] focus:outline-none focus:ring-1 focus:ring-[#B8532F]"
              >
                <option value="featured">Featured First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="duration">Crafting Duration</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const primaryImage = product.media.find((m) => m.isPrimary) || product.media[0];
              const isMadeToOrder = product.specifications?.productionType === 'Made to Order';

              return (
                <article
                  key={product.id}
                  className="group border border-[#E5DFD4] bg-[#FAF8F5] p-5 rounded-sm hover:border-[#191817] transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Image Container with Badges */}
                    <Link
                      href={`/objects/${product.slug}`}
                      className="relative aspect-[4/4.5] w-full block overflow-hidden bg-[#ECE5DC] rounded-sm"
                    >
                      {primaryImage && (
                        <Image
                          src={primaryImage.url}
                          alt={product.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      )}
                      <div className="absolute top-3 left-3 flex flex-col gap-1">
                        <span
                          className={`text-[9px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded-sm border ${
                            isMadeToOrder
                              ? 'bg-[#FFF9F2] text-[#8C531B] border-[#F2DFC6]'
                              : 'bg-[#F2F8F0] text-[#295424] border-[#D4E8CE]'
                          }`}
                        >
                          {product.specifications.productionType || 'Ready to Ship'}
                        </span>
                      </div>
                    </Link>

                    {/* Metadata */}
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between text-xs text-[#8C8477]">
                        <span className="uppercase tracking-widest text-[10px] text-[#B8532F] font-semibold">
                          {product.specifications.regionOfOrigin}
                        </span>
                        <span className="font-serif text-xl text-[#191817] font-medium">
                          {APP_CONFIG.currencySymbol}
                          {product.basePrice.toLocaleString('en-IN')}
                        </span>
                      </div>

                      <h2 className="font-serif text-xl text-[#191817] group-hover:text-[#B8532F] transition-colors leading-snug">
                        <Link href={`/objects/${product.slug}`}>{product.title}</Link>
                      </h2>

                      {product.artisan && (
                        <p className="text-xs text-[#5C574F]">
                          Made by{' '}
                          <Link
                            href={`/makers/${product.artisan.slug}`}
                            className="text-[#191817] font-medium hover:underline"
                          >
                            {product.artisan.artisanName}
                          </Link>
                        </p>
                      )}

                      <p className="text-xs text-[#6E6962] font-light line-clamp-2 leading-relaxed">
                        {product.shortDescription}
                      </p>

                      {/* Material Spec */}
                      <div className="pt-1 text-[11px] text-[#7A746B]">
                        <span className="text-[#999285]">Material: </span>
                        <span>{product.specifications.materials[0]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 mt-4 border-t border-[#F0EBE3] flex items-center justify-between">
                    <span className="text-[11px] text-[#7E786F]">
                      {product.specifications.makingDurationDays} days craft
                    </span>

                    <Link
                      href={`/objects/${product.slug}`}
                      className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-[#191817] hover:text-[#B8532F] transition-colors"
                    >
                      <span>View piece</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-[#DDD6CB] rounded-sm bg-[#FAF8F5] space-y-4">
            <h3 className="font-serif text-2xl text-[#191817]">No creations match this criteria</h3>
            <p className="text-sm text-[#787268] max-w-md mx-auto">
              Try adjusting your occasion or craft type filters to view other available handmade botanical pieces.
            </p>
            <Button onClick={resetFilters} variant="outline" size="sm" className="rounded-none uppercase text-xs">
              Reset All Filters
            </Button>
          </div>
        )}

        {/* Custom Floral Commission Inquiries */}
        <section className="bg-[#FAF8F5] border border-[#E5DFD4] p-8 sm:p-12 rounded-sm mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
                Custom Commissions & Bridal Floral Sets
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#191817]">
                Looking for a custom bouquet palette or wedding party set?
              </h3>
              <p className="text-sm text-[#5C574F] font-light leading-relaxed max-w-2xl">
                Collaborate directly with our master crochet artists and ribbon crafters to create custom color combinations, personalized embroidered stem tags, or complete bridal party arrangements.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link href="/makers/ananya-roy-botanical-crochet">
                <Button size="lg" className="rounded-none text-xs uppercase tracking-wider px-8">
                  Contact Floral Makers →
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
