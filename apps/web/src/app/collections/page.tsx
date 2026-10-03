import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const COLLECTIONS = [
  {
    title: 'The Living Loom: Indigo & Cashmere',
    slug: 'the-living-loom',
    curatorNote: 'Selected by Karigar curatorial council in collaboration with Shilp Guru awardees.',
    image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=1200&auto=format&fit=crop',
    itemCount: 16,
  },
  {
    title: 'The Forest Hearth: Bastar Metallurgy',
    slug: 'forest-hearth-bastar',
    curatorNote: 'Lost-wax bronze and bell metal casting from the tribal forest guilds of Chhattisgarh.',
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1200&auto=format&fit=crop',
    itemCount: 12,
  },
];

export default function CollectionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="border-b border-[#191817] pb-6 space-y-2">
        <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
          Curated Portfolios
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#191817]">
          Editorial Collections
        </h1>
        <p className="text-sm sm:text-base text-[#6E6962] font-light max-w-2xl">
          Thematic curations celebrating material purity, generational mastery, and timeless aesthetic synergy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {COLLECTIONS.map((col) => (
          <Link
            key={col.slug}
            href={`/products`}
            className="group block space-y-4"
          >
            <div className="relative aspect-[16/10] rounded-sm overflow-hidden bg-[#ECE5DC]">
              <Image
                src={col.image}
                alt={col.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-[#B8532F] font-semibold">
                {col.itemCount} Curated Pieces
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#191817] group-hover:text-[#B8532F] transition-colors">
                {col.title}
              </h2>
              <p className="text-xs text-[#6E6962] leading-relaxed font-light">
                {col.curatorNote}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
