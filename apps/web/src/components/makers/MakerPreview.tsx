import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArtisanProfile } from '@karigar/types';
import { Badge } from '@karigar/ui';
import { MapPin, Award, ArrowRight } from 'lucide-react';

interface MakerPreviewProps {
  artisan: ArtisanProfile;
  priority?: boolean;
}

export function MakerPreview({ artisan }: MakerPreviewProps) {
  return (
    <article className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-10 border-b border-[#E5DFD4] last:border-b-0">
      {/* Maker Portrait & Workshop Visual */}
      <div className="md:col-span-5 relative aspect-[4/5] overflow-hidden bg-[#ECE5DC] rounded-sm">
        <Image
          src={artisan.avatarUrl}
          alt={artisan.artisanName}
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {artisan.verification?.giCertified && (
          <div className="absolute top-4 left-4">
            <Badge variant="charcoal" className="shadow-sm">
              GI Certified
            </Badge>
          </div>
        )}
      </div>

      {/* Editorial Content & Story Snippet */}
      <div className="md:col-span-7 space-y-4 md:pl-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
            {artisan.craftName}
          </span>
          <span className="text-stone-300">•</span>
          <div className="flex items-center gap-1 text-xs text-[#6F6A62]">
            <MapPin className="w-3.5 h-3.5" />
            <span>
              {artisan.location.villageOrTown}, {artisan.location.state}
            </span>
          </div>
        </div>

        <h3 className="font-serif text-3xl sm:text-4xl text-[#191817] group-hover:text-[#B8532F] transition-colors leading-tight">
          <Link href={`/artisans/${artisan.slug}`}>{artisan.artisanName}</Link>
        </h3>

        {artisan.heritageLineage && (
          <p className="text-xs uppercase tracking-wider text-[#8F887E] font-medium flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-[#B8532F]" />
            <span>{artisan.heritageLineage}</span>
          </p>
        )}

        <blockquote className="editorial-lead text-lg text-[#3C3935] leading-relaxed border-l-2 border-[#B8532F] pl-4 my-2">
          &ldquo;{artisan.tagline}&rdquo;
        </blockquote>

        <p className="text-sm text-[#5B564E] leading-relaxed line-clamp-3">
          {artisan.bio}
        </p>

        <div className="pt-4 flex items-center gap-6">
          <Link
            href={`/artisans/${artisan.slug}`}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#191817] hover:text-[#B8532F] border-b border-[#191817] hover:border-[#B8532F] pb-1 transition-all"
          >
            <span>Read their story & shop creations</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
