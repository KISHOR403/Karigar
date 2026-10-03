import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArtisanProfile } from '@karigar/types';
import { Badge } from '@karigar/ui';
import { ArrowRight } from 'lucide-react';

interface MakerPreviewProps {
  artisan: ArtisanProfile;
  index?: number;
  priority?: boolean;
}

const WORKING_IMAGES_MAP: Record<string, string> = {
  'art-001': '/images/maker-ismail-ajrakh.jpg',
  'art-002': '/images/maker-kashmir-sozni.jpg',
  'art-003': '/images/maker-bastar-dhokra.jpg',
  'art-004': '/images/maker-channapatna-lathe.jpg',
};

export function MakerPreview({ artisan, index = 0, priority = false }: MakerPreviewProps) {
  const isEven = index % 2 === 0;
  const displayNumber = String(index + 1).padStart(2, '0');
  const workingImage =
    WORKING_IMAGES_MAP[artisan.id] ||
    artisan.coverImageUrl ||
    artisan.avatarUrl;

  return (
    <article className="group py-12 sm:py-20 border-b border-[#E5DFD4] last:border-b-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Maker Working Visual + Inset Portrait */}
        <div
          className={`relative aspect-[4/5] sm:aspect-[4/4.2] overflow-hidden bg-[#ECE5DC] rounded-sm lg:col-span-6 ${
            isEven ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <Image
            src={workingImage}
            alt={`${artisan.artisanName} in the workshop`}
            fill
            priority={priority}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />

          {/* Maker Inset Portrait Card */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-3 bg-[#FAF8F5]/95 backdrop-blur-sm px-3.5 py-2.5 rounded-sm border border-[#E5DFD4] shadow-sm">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-[#E5DFD4] shrink-0">
              <Image
                src={artisan.avatarUrl}
                alt={artisan.artisanName}
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
            <div className="leading-tight">
              <p className="text-xs font-semibold text-[#191817]">{artisan.artisanName}</p>
              <p className="text-[10px] text-[#7A746B]">
                {artisan.location.villageOrTown}, {artisan.location.state}
              </p>
            </div>
          </div>

          {artisan.verification?.giCertified && (
            <div className="absolute top-4 right-4">
              <Badge variant="charcoal" className="shadow-sm text-[10px]">
                GI Certified
              </Badge>
            </div>
          )}
        </div>

        {/* Editorial Storytelling */}
        <div
          className={`space-y-5 lg:col-span-6 ${
            isEven ? 'lg:order-2 lg:pl-4' : 'lg:order-1 lg:pr-4'
          }`}
        >
          <div className="flex items-baseline justify-between border-b border-[#E5DFD4] pb-3">
            <span className="font-serif text-3xl sm:text-4xl text-[#B8532F] font-light">
              {displayNumber}
            </span>
            <span className="text-[11px] uppercase tracking-widest text-[#8C8477] font-semibold">
              {artisan.craftName.split('&')[0].trim()}
            </span>
          </div>

          <div className="space-y-1.5">
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#191817] group-hover:text-[#B8532F] transition-colors leading-[1.12]">
              <Link href={`/artisans/${artisan.slug}`}>{artisan.artisanName}</Link>
            </h3>
            <p className="text-xs uppercase tracking-wider text-[#8F887E] font-medium flex items-center gap-2">
              <span>
                {artisan.location.villageOrTown}, {artisan.location.state}
              </span>
              {artisan.heritageLineage && (
                <>
                  <span className="text-[#C5BFB5]">•</span>
                  <span>{artisan.heritageLineage}</span>
                </>
              )}
            </p>
          </div>

          <p className="text-base sm:text-lg text-[#4F4B45] font-light leading-relaxed">
            {artisan.bio}
          </p>

          <div className="pt-2">
            <Link
              href={`/artisans/${artisan.slug}`}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#191817] hover:text-[#B8532F] group/link transition-colors"
            >
              <span className="border-b border-[#191817] group-hover/link:border-[#B8532F] pb-0.5 transition-colors">
                Meet the maker
              </span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
