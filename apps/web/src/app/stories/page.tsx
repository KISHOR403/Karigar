import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MOCK_STORIES } from '@/data/mock-data';
import { Clock } from 'lucide-react';

export default function StoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="border-b border-[#191817] pb-6 space-y-2">
        <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
          Artisan Chronicles
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#191817]">
          Craft Stories & Chronicles
        </h1>
        <p className="text-sm sm:text-base text-[#6E6962] font-light max-w-2xl">
          Long-form photo essays and deep dialogues on material lineage, living folklore, and the master hands keeping heritage alive.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {MOCK_STORIES.map((story) => (
          <article key={story.id} className="group space-y-4">
            <Link
              href={`/stories/${story.slug}`}
              className="relative aspect-[16/10] block rounded-sm overflow-hidden bg-[#ECE5DC]"
            >
              <Image
                src={story.heroImageUrl}
                alt={story.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </Link>

            <div className="space-y-2">
              <div className="flex items-center gap-3 text-xs text-[#7A746B]">
                <span className="text-[#B8532F] uppercase tracking-wider font-semibold">
                  {story.region}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {story.readTimeMinutes} min read
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-[#191817] group-hover:text-[#B8532F] transition-colors leading-tight">
                <Link href={`/stories/${story.slug}`}>{story.title}</Link>
              </h2>

              <p className="text-sm text-[#5B564E] leading-relaxed font-light line-clamp-3">
                {story.subtitle}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
