import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MOCK_CATEGORIES } from '@/data/mock-data';
import { ArrowRight } from 'lucide-react';

export default function CategoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="border-b border-[#191817] pb-6 space-y-2">
        <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
          Artisanal Categories & Craft Taxonomy
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#191817]">
          Handmade Categories
        </h1>
        <p className="text-sm sm:text-base text-[#6E6962] font-light max-w-2xl">
          Discover handmade flowers, bespoke creative gifts, contemporary fiber crafts, and ancient living traditions from independent Indian makers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_CATEGORIES.map((cat) => (
          <Link
            key={cat.slug}
            href={`/categories/${cat.slug}`}
            className="group block border border-[#E5DFD4] bg-[#FAF8F5] overflow-hidden hover:border-[#191817] transition-all"
          >
            <div className="relative aspect-[16/10] w-full bg-[#ECE5DC] overflow-hidden">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-[#191817]/90 text-white px-2.5 py-0.5 text-[10px] uppercase tracking-widest font-medium">
                {cat.count} Creations
              </div>
            </div>

            <div className="p-6 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-[#B8532F] font-semibold">
                  {cat.descriptor.split('·')[0].trim()}
                </span>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#191817] group-hover:text-[#B8532F] group-hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
              <h2 className="font-serif text-2xl text-[#191817] group-hover:text-[#B8532F] transition-colors">
                {cat.name}
              </h2>
              <p className="text-xs text-[#5B564E] leading-relaxed font-light line-clamp-2">
                {cat.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
