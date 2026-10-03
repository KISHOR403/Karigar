'use client';

import React from 'react';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MOCK_STORIES, MOCK_ARTISANS } from '@/data/mock-data';
import { Button } from '@karigar/ui';
import { Clock, ArrowRight } from 'lucide-react';

export default function StoryDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const story = MOCK_STORIES.find((s) => s.slug === slug);
  const currentStory = story || MOCK_STORIES[0];

  if (!story && !slug) {
    return notFound();
  }

  const artisan = MOCK_ARTISANS.find((a) => a.slug === currentStory.artisanSlug);

  return (
    <article className="pb-28">
      {/* Header section */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 space-y-6">
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
          <span>{currentStory.region}</span>
          <span>•</span>
          <span>{currentStory.craftName}</span>
          <span>•</span>
          <span className="flex items-center gap-1 text-[#787268]">
            <Clock className="w-3.5 h-3.5" />
            {currentStory.readTimeMinutes} min read
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl text-[#191817] leading-[1.12]">
          {currentStory.title}
        </h1>

        <p className="text-lg sm:text-xl text-[#5C574F] font-light leading-relaxed">
          {currentStory.subtitle}
        </p>
      </header>

      {/* Hero Visual */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative aspect-[16/9] rounded-sm overflow-hidden bg-[#ECE5DC] shadow-sm">
          <Image
            src={currentStory.heroImageUrl}
            alt={currentStory.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Body Narrative */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="prose prose-stone max-w-none text-[#2F2C28] text-lg sm:text-xl leading-relaxed font-light whitespace-pre-line space-y-6">
          {currentStory.body}
        </div>

        {/* Featured Artisan Callout */}
        {artisan && (
          <div className="mt-16 p-8 bg-[#FAF8F5] border border-[#E5DFD4] rounded-sm flex flex-col sm:flex-row items-center gap-6">
            <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0 bg-[#ECE5DC]">
              <Image src={artisan.avatarUrl} alt={artisan.artisanName} fill className="object-cover" />
            </div>
            <div className="space-y-1 text-center sm:text-left flex-1">
              <span className="text-[10px] uppercase tracking-widest text-[#B8532F] font-semibold">
                Featured Artisan
              </span>
              <h3 className="font-serif text-xl text-[#191817]">{artisan.artisanName}</h3>
              <p className="text-xs text-[#6F6A62]">{artisan.craftName} • {artisan.location.villageOrTown}, {artisan.location.state}</p>
            </div>
            <Link href={`/artisans/${artisan.slug}`}>
              <Button size="sm" variant="outline" className="rounded-none uppercase text-xs">
                Visit Atelier
              </Button>
            </Link>
          </div>
        )}

        <div className="pt-8 border-t border-[#E5DFD4] flex items-center justify-between">
          <Link href="/stories" className="text-xs uppercase tracking-wider font-semibold text-[#191817] hover:text-[#B8532F]">
            ← All Chronicles
          </Link>
          <Link href="/artisans" className="text-xs uppercase tracking-wider font-semibold text-[#B8532F] hover:underline flex items-center gap-1">
            <span>Explore Master Artisans</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
