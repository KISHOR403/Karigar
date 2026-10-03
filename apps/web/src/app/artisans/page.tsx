import React from 'react';
import { MOCK_ARTISANS } from '@/data/mock-data';
import { MakerPreview } from '@/components/makers/MakerPreview';

export const metadata = {
  title: 'Master Artisans & Keepers of Craft — Karigar',
  description: 'Explore verified Indian master artisans, national awardees, and living craft lineages.',
};

export default function ArtisansIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="border-b border-[#191817] pb-6 space-y-2">
        <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
          Living Lineage
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#191817]">
          Master Artisans of India
        </h1>
        <p className="text-sm sm:text-base text-[#6E6962] font-light max-w-2xl">
          Connect directly with certified generational craftspeople, Shilp Guru awardees, and independent ateliers across the subcontinent.
        </p>
      </div>

      <div className="divide-y divide-[#E5DFD4]">
        {MOCK_ARTISANS.map((artisan, index) => (
          <MakerPreview key={artisan.id} artisan={artisan} index={index} priority={index < 2} />
        ))}
      </div>
    </div>
  );
}
