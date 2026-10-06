'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MOCK_ARTISANS } from '@/data/mock-data';
import { Search, Filter, ArrowRight, MapPin, Award, CheckCircle2 } from 'lucide-react';

const CRAFT_OPTIONS = ['All', 'Textiles', 'Metalwork', 'Woodcraft', 'Clay & Ceramics', 'Bamboo & Cane'];
const REGION_OPTIONS = ['All', 'Gujarat', 'Kashmir', 'Chhattisgarh', 'Karnataka', 'Assam'];
const MATERIAL_OPTIONS = ['All', 'Silk & Cotton', 'Cashmere & Wool', 'Bronze & Bell Metal', 'Natural Lacquer Wood'];

export default function MakersIndexPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCraft, setSelectedCraft] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [sortBy, setSortBy] = useState<'featured' | 'newest' | 'followers'>('featured');

  const filteredMakers = useMemo(() => {
    return MOCK_ARTISANS.filter((maker) => {
      // Search
      const matchesSearch =
        searchQuery === '' ||
        maker.artisanName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        maker.craftName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        maker.location.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        maker.location.villageOrTown.toLowerCase().includes(searchQuery.toLowerCase()) ||
        maker.tagline.toLowerCase().includes(searchQuery.toLowerCase());

      // Craft
      const matchesCraft =
        selectedCraft === 'All' ||
        (selectedCraft === 'Textiles' && maker.craftName.toLowerCase().includes('textile') || maker.craftName.toLowerCase().includes('silk') || maker.craftName.toLowerCase().includes('pashmina') || maker.craftName.toLowerCase().includes('ajrakh')) ||
        (selectedCraft === 'Metalwork' && (maker.craftName.toLowerCase().includes('metal') || maker.craftName.toLowerCase().includes('dhokra') || maker.craftName.toLowerCase().includes('forge'))) ||
        (selectedCraft === 'Woodcraft' && maker.craftName.toLowerCase().includes('wood')) ||
        (selectedCraft === 'Clay & Ceramics' && maker.craftName.toLowerCase().includes('clay') || maker.craftName.toLowerCase().includes('pottery')) ||
        (selectedCraft === 'Bamboo & Cane' && maker.craftName.toLowerCase().includes('bamboo'));

      // Region
      const matchesRegion =
        selectedRegion === 'All' || maker.location.state.toLowerCase().includes(selectedRegion.toLowerCase());

      // Material
      const matchesMaterial =
        selectedMaterial === 'All' ||
        (selectedMaterial === 'Silk & Cotton' && (maker.craftName.toLowerCase().includes('silk') || maker.craftName.toLowerCase().includes('cotton') || maker.craftName.toLowerCase().includes('ajrakh'))) ||
        (selectedMaterial === 'Cashmere & Wool' && maker.craftName.toLowerCase().includes('pashmina')) ||
        (selectedMaterial === 'Bronze & Bell Metal' && (maker.craftName.toLowerCase().includes('bell metal') || maker.craftName.toLowerCase().includes('dhokra') || maker.craftName.toLowerCase().includes('bronze'))) ||
        (selectedMaterial === 'Natural Lacquer Wood' && maker.craftName.toLowerCase().includes('wood'));

      return matchesSearch && matchesCraft && matchesRegion && matchesMaterial;
    }).sort((a, b) => {
      if (sortBy === 'followers') return b.followerCount - a.followerCount;
      if (sortBy === 'newest') return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [searchQuery, selectedCraft, selectedRegion, selectedMaterial, sortBy]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCraft('All');
    setSelectedRegion('All');
    setSelectedMaterial('All');
    setSortBy('featured');
  };

  return (
    <div className="space-y-16 pb-28">
      {/* =========================================================
          HERO: MEET THE MAKERS
          ========================================================= */}
      <section className="border-b border-[#E5DFD4] pt-12 sm:pt-20 pb-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
            The Living Lineage
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[#191817] leading-[1.08] tracking-tight">
            Meet the Makers
          </h1>
          <p className="text-lg sm:text-xl text-[#5C574F] font-light max-w-2xl leading-relaxed">
            Discover the people, skills and stories behind the objects.
          </p>
        </div>
      </section>

      {/* =========================================================
          FILTER & SEARCH TOOLBAR
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 bg-white border border-[#E5DFD4] p-6 sm:p-8 rounded-sm shadow-xs">
          {/* Top Row: Search Input + Sort Selection */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-xl">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C8477]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search makers by name, craft, or regional village..."
                className="w-full bg-[#FAF8F5] border border-[#DDD6CB] pl-10 pr-4 py-2.5 text-sm text-[#191817] placeholder-[#8F887E] rounded-sm focus:outline-none focus:border-[#191817] focus:ring-1 focus:ring-[#191817]"
              />
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-wider text-[#7A746B] font-medium">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#FAF8F5] border border-[#DDD6CB] px-3 py-2 text-xs uppercase tracking-wider text-[#191817] rounded-sm focus:outline-none focus:border-[#191817]"
              >
                <option value="featured">Featured Masters</option>
                <option value="newest">Newly Discovered</option>
                <option value="followers">Most Followed</option>
              </select>
            </div>
          </div>

          {/* Filter Pills Row */}
          <div className="border-t border-[#F0EBE3] pt-4 space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#7A746B] font-medium">
              <Filter className="w-3.5 h-3.5 text-[#B8532F]" />
              <span>Filter Catalog:</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              {/* Craft Filter */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#8C8477] mb-1 font-medium">
                  Craft
                </label>
                <select
                  value={selectedCraft}
                  onChange={(e) => setSelectedCraft(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#DDD6CB] px-3 py-2 text-xs text-[#191817] rounded-sm focus:outline-none"
                >
                  {CRAFT_OPTIONS.map((craft) => (
                    <option key={craft} value={craft}>
                      {craft}
                    </option>
                  ))}
                </select>
              </div>

              {/* Region Filter */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#8C8477] mb-1 font-medium">
                  Region
                </label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#DDD6CB] px-3 py-2 text-xs text-[#191817] rounded-sm focus:outline-none"
                >
                  {REGION_OPTIONS.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>

              {/* Material Filter */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#8C8477] mb-1 font-medium">
                  Material
                </label>
                <select
                  value={selectedMaterial}
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#DDD6CB] px-3 py-2 text-xs text-[#191817] rounded-sm focus:outline-none"
                >
                  {MATERIAL_OPTIONS.map((mat) => (
                    <option key={mat} value={mat}>
                      {mat}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Active Filter Indicators */}
          {(searchQuery || selectedCraft !== 'All' || selectedRegion !== 'All' || selectedMaterial !== 'All') && (
            <div className="flex items-center justify-between pt-2 border-t border-[#F0EBE3] text-xs">
              <span className="text-[#6E6962]">
                Showing {filteredMakers.length} {filteredMakers.length === 1 ? 'master artisan' : 'master artisans'}
              </span>
              <button
                type="button"
                onClick={resetFilters}
                className="text-[#B8532F] hover:underline uppercase tracking-wider text-[11px] font-semibold"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          PREMIUM EDITORIAL MAKER GRID
          Large image · Maker name · Craft · Location · Short description · Meet the maker →
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredMakers.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-[#DDD6CB] bg-[#FAF8F5] rounded-sm space-y-4">
            <h3 className="font-serif text-2xl text-[#191817]">No artisans matched your criteria</h3>
            <p className="text-sm text-[#7A746B] max-w-md mx-auto">
              Try adjusting your search query, or clear filters to view all verified Indian master artisans.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-2 inline-block px-6 py-2.5 bg-[#191817] text-white text-xs uppercase tracking-wider font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            {filteredMakers.map((maker) => {
              const image =
                maker.coverImageUrl ||
                maker.avatarUrl ||
                (maker.media && maker.media[0]?.url) ||
                '/images/hero-craft-hands.jpg';

              return (
                <article
                  key={maker.id}
                  className="group border border-[#E5DFD4] bg-white rounded-sm overflow-hidden flex flex-col justify-between hover:border-[#191817] transition-all duration-300 shadow-2xs hover:shadow-sm"
                >
                  <div>
                    {/* Large Maker / Workshop Image */}
                    <Link
                      href={`/makers/${maker.slug}`}
                      className="relative aspect-[16/11] w-full block overflow-hidden bg-[#ECE5DC]"
                    >
                      <Image
                        src={image}
                        alt={`${maker.artisanName} in the workshop`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                      {/* Inset Badge */}
                      {maker.verification?.giCertified && (
                        <div className="absolute top-4 right-4 bg-[#191817]/90 text-white text-[10px] uppercase tracking-widest px-2.5 py-1 font-medium backdrop-blur-xs">
                          GI Certified
                        </div>
                      )}

                      {/* Inset Portrait & Name Chip */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 text-white">
                        <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-white/80 shrink-0">
                          <Image
                            src={maker.avatarUrl}
                            alt={maker.artisanName}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-serif text-xl sm:text-2xl text-white leading-tight">
                            {maker.artisanName}
                          </p>
                          <p className="text-[11px] text-[#DDD6CB] tracking-wide">
                            {maker.experienceYears} Years Lineage
                          </p>
                        </div>
                      </div>
                    </Link>

                    {/* Metadata & Narrative */}
                    <div className="p-6 sm:p-8 space-y-4">
                      <div className="flex items-center justify-between text-xs text-[#8C8477] border-b border-[#F0EBE3] pb-3">
                        <span className="uppercase tracking-widest font-semibold text-[#B8532F]">
                          {maker.craftName.split('&')[0].trim()}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#8C8477]" />
                          {maker.location.villageOrTown}, {maker.location.state}
                        </span>
                      </div>

                      {/* Short Description */}
                      <blockquote className="text-base sm:text-lg text-[#2E2C28] font-light leading-relaxed italic">
                        &ldquo;{maker.tagline}&rdquo;
                      </blockquote>

                      <p className="text-xs sm:text-sm text-[#6E6962] font-light leading-relaxed line-clamp-3">
                        {maker.bio}
                      </p>
                    </div>
                  </div>

                  {/* Action Link: Meet the maker → */}
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2 border-t border-[#F0EBE3] flex items-center justify-between">
                    <Link
                      href={`/makers/${maker.slug}`}
                      className="inline-flex items-center gap-2 font-serif text-lg text-[#191817] group-hover:text-[#B8532F] transition-colors"
                    >
                      <span>Meet the maker</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>

                    <span className="text-[11px] uppercase tracking-widest text-[#8C8477] font-medium">
                      {maker.productCount} Handcrafted Works
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
