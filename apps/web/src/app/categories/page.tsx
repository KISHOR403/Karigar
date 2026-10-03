import React from 'react';
import Link from 'next/link';

const CATEGORIES = [
  {
    name: 'Textiles & Handloom',
    slug: 'textiles-handloom',
    count: 24,
    description: 'Ajrakh resist blocks, Pashmina cashmeres, Jamdani muslins, and Chanderi weaves.',
  },
  {
    name: 'Metals & Forge',
    slug: 'metals-forge',
    count: 18,
    description: 'Lost-wax Bastar Dhokra, hand-beaten bell metal urulis, and Bidri silver inlay.',
  },
  {
    name: 'Clay & Ceramics',
    slug: 'clay-ceramics',
    count: 14,
    description: 'Jaipur blue pottery, Kutch terracotta, and Manipur black pottery.',
  },
  {
    name: 'Turned Wood & Lacquer',
    slug: 'turned-wood-lacquer',
    count: 16,
    description: 'Vegetable-dyed Channapatna woodcraft, Saharanpur carving, and Kashmir walnut.',
  },
];

export default function CategoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="border-b border-[#191817] pb-6 space-y-2">
        <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
          Taxonomy of Materials
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#191817]">
          Craft Categories
        </h1>
        <p className="text-sm sm:text-base text-[#6E6962] font-light max-w-2xl">
          Classified by indigenous material science, ancestral tools, and regional guild traditions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.slug}
            href={`/categories/${cat.slug}`}
            className="group block p-8 border border-[#E5DFD4] bg-[#FAF8F5] hover:border-[#191817] transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-[#B8532F] font-semibold">
                {cat.count} Master Creations
              </span>
              <span className="text-xs uppercase tracking-wider font-semibold group-hover:translate-x-1 transition-transform">
                Explore →
              </span>
            </div>
            <h2 className="font-serif text-3xl text-[#191817] group-hover:text-[#B8532F] transition-colors mt-3">
              {cat.name}
            </h2>
            <p className="text-sm text-[#5B564E] leading-relaxed mt-2 font-light">
              {cat.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
