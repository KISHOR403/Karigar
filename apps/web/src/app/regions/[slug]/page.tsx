'use client';

import React from 'react';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MOCK_ARTISANS, MOCK_PRODUCTS } from '@/data/mock-data';
import { ProductGrid } from '@/components/products/ProductGrid';
import { ArrowRight, MapPin, ChevronRight } from 'lucide-react';

const REGION_DATA: Record<
  string,
  {
    name: string;
    indigenousWord?: string;
    tagline: string;
    description: string;
    heroImage: string;
    crafts: string[];
  }
> = {
  assam: {
    name: 'Assam',
    indigenousWord: 'ব্ৰহ্মপুত্ৰৰ ঐতিহ্য',
    tagline: 'Craft traditions shaped by river, forest and generations of makers.',
    description:
      'In the golden loom villages of Sualkuchi, the river sandbars of Majuli, and the bell-metal forges of Sarthebari, craft is a continuous kinship with wild Muga silk cocoons, river cane, and copper-tin metallurgy.',
    heroImage: '/images/assam-muga-weaving.jpg',
    crafts: ['Wild Muga Golden Silk', 'Hand-Beaten Bell Metal (Kansa)', 'Majuli Bamboo Masks & Cane', 'Eri Peace Silk'],
  },
  kutch: {
    name: 'Kutch',
    tagline: 'Desert indigo, iron mordants and mineral resist geometry.',
    description:
      'From the subterranean microbial vats of Ajrakhpur to the intricate mirror-work of Hodka, Kutchi craft represents centuries of nomadic alchemy, celestial navigation, and botanical chemistry.',
    heroImage: '/images/story-kutch-indigo.jpg',
    crafts: ['16-Stage Natural Dye Ajrakh', 'Roha Terracotta', 'Rabari & Rogan Painting', 'Kutch Copper Bells'],
  },
  kashmir: {
    name: 'Kashmir',
    tagline: 'Himalayan wild cashmere and micro-needle sozni poetry.',
    description:
      'Woven across wooden floor looms in Srinagar courtyards near the Jhelum, Kashmiri craftsmanship transforms 12-micron Changthangi fleece and seasoned walnut timber into timeless heirlooms.',
    heroImage: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1600&auto=format&fit=crop',
    crafts: ['Handspun Changthangi Pashmina', 'Silk Sozni Needlework', 'Carved Walnut Woodwork', 'Papier-mâché'],
  },
};

export default function RegionPage() {
  const params = useParams();
  const slug = (params?.slug as string)?.toLowerCase();

  const region = REGION_DATA[slug] || REGION_DATA['assam'];

  if (!region && !slug) {
    return notFound();
  }

  const regionMakers = MOCK_ARTISANS.filter(
    (m) =>
      m.location.state.toLowerCase().includes(slug) ||
      m.location.district.toLowerCase().includes(slug) ||
      (slug === 'assam' && m.location.state === 'Assam'),
  );

  const regionProducts = MOCK_PRODUCTS.filter(
    (p) =>
      p.specifications.regionOfOrigin.toLowerCase().includes(slug) ||
      (slug === 'assam' && p.specifications.regionOfOrigin.includes('Assam')),
  );

  return (
    <div className="space-y-20 pb-28">
      {/* Breadcrumb */}
      <nav className="border-b border-[#E5DFD4] py-3.5 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-[#7A746B]">
          <Link href="/" className="hover:text-[#191817]">Home</Link>
          <ChevronRight className="w-3 h-3 text-[#A8A196]" />
          <span className="text-[#7A746B]">Regions</span>
          <ChevronRight className="w-3 h-3 text-[#A8A196]" />
          <span className="text-[#191817] font-medium">{region.name}</span>
        </div>
      </nav>

      {/* Region Editorial Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              <span>Regional Appellation</span>
              {region.indigenousWord && (
                <>
                  <span className="text-[#C5BFB5]">•</span>
                  <span className="font-assamese text-sm text-[#8C8477]">{region.indigenousWord}</span>
                </>
              )}
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl text-[#191817] leading-tight">
              Craft Traditions of {region.name}
            </h1>

            <p className="text-xl sm:text-2xl text-[#2E2C28] font-light leading-relaxed italic border-l-2 border-[#B8532F] pl-4">
              &ldquo;{region.tagline}&rdquo;
            </p>

            <p className="text-base text-[#5C574F] font-light leading-relaxed">
              {region.description}
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              {region.crafts.map((craft) => (
                <span
                  key={craft}
                  className="px-3 py-1.5 bg-[#F4EFEA] border border-[#E5DFD4] text-[#191817] font-medium"
                >
                  {craft}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[16/11] rounded-sm overflow-hidden bg-[#ECE5DC] shadow-sm">
              <Image
                src={region.heroImage}
                alt={region.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Verified Masters in this Region */}
      {regionMakers.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#E5DFD4] pt-16">
          <div className="border-b border-[#191817] pb-4 mb-10 flex items-end justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
                Living Keepers
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#191817] mt-1">
                Master Artisans of {region.name}
              </h2>
            </div>
            <Link
              href="/makers"
              className="text-xs uppercase tracking-wider font-semibold text-[#191817] hover:text-[#B8532F]"
            >
              All Makers →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regionMakers.map((maker) => (
              <div
                key={maker.id}
                className="border border-[#E5DFD4] bg-[#FAF8F5] p-6 rounded-sm flex items-center gap-6"
              >
                <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0 bg-[#ECE5DC] border border-[#DDD6CB]">
                  <Image src={maker.avatarUrl} alt={maker.artisanName} fill className="object-cover" />
                </div>
                <div className="space-y-1 flex-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#B8532F] font-semibold">
                    {maker.craftName.split('&')[0]}
                  </span>
                  <h3 className="font-serif text-2xl text-[#191817]">{maker.artisanName}</h3>
                  <p className="text-xs text-[#6F6A62]">
                    {maker.location.villageOrTown}, {maker.location.district}
                  </p>
                  <div className="pt-2">
                    <Link
                      href={`/makers/${maker.slug}`}
                      className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-[#191817] hover:text-[#B8532F]"
                    >
                      <span>Meet the maker</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Handcrafted Objects from this Region */}
      {regionProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#E5DFD4] pt-16">
          <div className="border-b border-[#191817] pb-4 mb-10 flex items-end justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
                Available Creations
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#191817] mt-1">
                Handcrafted in {region.name}
              </h2>
            </div>
            <Link
              href="/objects"
              className="text-xs uppercase tracking-wider font-semibold text-[#191817] hover:text-[#B8532F]"
            >
              All Objects →
            </Link>
          </div>

          <ProductGrid products={regionProducts} />
        </section>
      )}
    </div>
  );
}
