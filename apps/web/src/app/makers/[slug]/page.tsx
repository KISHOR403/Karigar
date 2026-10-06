'use client';

import React, { useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MOCK_ARTISANS, MOCK_PRODUCTS, MOCK_STORIES } from '@/data/mock-data';
import { Button, Badge, Input } from '@karigar/ui';
import { APP_CONFIG } from '@karigar/config';
import {
  MapPin,
  Award,
  CheckCircle2,
  Heart,
  Share2,
  Sparkles,
  Send,
  ArrowRight,
  Clock,
  ChevronRight,
} from 'lucide-react';

export default function MakerProfilePage() {
  const params = useParams();
  const slug = params?.slug as string;

  const artisan = MOCK_ARTISANS.find((a) => a.slug === slug);
  const currentArtisan = artisan || MOCK_ARTISANS[0];

  if (!artisan && !slug) {
    return notFound();
  }

  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(currentArtisan.followerCount);
  const [customModalOpen, setCustomModalOpen] = useState(false);
  const [customSubmitted, setCustomSubmitted] = useState(false);

  // Products by this artisan
  const artisanProducts = MOCK_PRODUCTS.filter(
    (p) => p.artisanId === currentArtisan.id || p.artisan?.slug === currentArtisan.slug,
  );

  // Stories connected to this artisan
  const relatedStories = MOCK_STORIES.filter(
    (s) => s.artisanSlug === currentArtisan.slug || s.region.includes(currentArtisan.location.state),
  );

  // Related makers (excluding current)
  const relatedMakers = MOCK_ARTISANS.filter((a) => a.id !== currentArtisan.id).slice(0, 3);

  const handleFollowToggle = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowerCount((prev) => prev - 1);
    } else {
      setIsFollowing(true);
      setFollowerCount((prev) => prev + 1);
    }
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-28">
      {/* Breadcrumb Navigation */}
      <nav className="border-b border-[#E5DFD4] py-3.5 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-[#7A746B]">
          <Link href="/" className="hover:text-[#191817]">Home</Link>
          <ChevronRight className="w-3 h-3 text-[#A8A196]" />
          <Link href="/makers" className="hover:text-[#191817]">Makers</Link>
          <ChevronRight className="w-3 h-3 text-[#A8A196]" />
          <span className="text-[#191817] font-medium">{currentArtisan.artisanName}</span>
        </div>
      </nav>

      {/* =========================================================
          SECTION 1 — HERO
          Large artisan image · Maker name · Craft · Location · Short statement
          Actions: Follow · Shop their work · Request Custom Work
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Large Artisan Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] sm:aspect-[4/4.8] rounded-sm overflow-hidden bg-[#ECE5DC] shadow-sm">
              <Image
                src={currentArtisan.coverImageUrl || currentArtisan.avatarUrl}
                alt={currentArtisan.artisanName}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-top"
              />
              {currentArtisan.verification?.giCertified && (
                <div className="absolute top-4 left-4">
                  <Badge variant="charcoal">GI Certified Master</Badge>
                </div>
              )}
            </div>
          </div>

          {/* Maker Identity & Manifesto */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
                  {currentArtisan.craftName}
                </span>
                <span className="text-[#C5BEB0]">•</span>
                <span className="flex items-center gap-1 text-xs text-[#6E6962]">
                  <MapPin className="w-3.5 h-3.5" />
                  {currentArtisan.location.villageOrTown}, {currentArtisan.location.state}
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl text-[#191817] leading-tight">
                {currentArtisan.artisanName}
              </h1>

              {currentArtisan.heritageLineage && (
                <p className="text-xs uppercase tracking-wider text-[#7E776E] font-medium flex items-center gap-1.5 pt-1">
                  <Award className="w-4 h-4 text-[#B8532F]" />
                  <span>{currentArtisan.heritageLineage}</span>
                </p>
              )}
            </div>

            {/* Short Statement */}
            <blockquote className="text-xl sm:text-2xl text-[#2F2C28] leading-relaxed border-l-2 border-[#B8532F] pl-5 py-1 font-light italic">
              &ldquo;{currentArtisan.tagline}&rdquo;
            </blockquote>

            <p className="text-base text-[#59544D] leading-relaxed max-w-2xl font-light">
              {currentArtisan.bio}
            </p>

            {/* Actions: Follow · Shop their work · Request Custom Work */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                onClick={handleFollowToggle}
                variant={isFollowing ? 'secondary' : 'primary'}
                size="md"
                className="rounded-none tracking-wider text-xs uppercase px-6"
              >
                <Heart className={`w-3.5 h-3.5 mr-2 ${isFollowing ? 'fill-[#B8532F] text-[#B8532F]' : ''}`} />
                <span>{isFollowing ? 'Following Atelier' : `Follow (${followerCount})`}</span>
              </Button>

              <a href="#shop-their-work">
                <Button
                  variant="outline"
                  size="md"
                  className="rounded-none tracking-wider text-xs uppercase px-6 border-[#191817]"
                >
                  Shop Their Work
                </Button>
              </a>

              <Button
                onClick={() => setCustomModalOpen(true)}
                variant="outline"
                size="md"
                className="rounded-none tracking-wider text-xs uppercase px-6 border-[#B8532F] text-[#B8532F] hover:bg-[#B8532F] hover:text-white"
              >
                <Sparkles className="w-3.5 h-3.5 mr-2" />
                <span>Request Custom Work</span>
              </Button>

              <button
                type="button"
                className="p-2.5 border border-[#E5DFD4] hover:border-[#191817] text-[#59544D] hover:text-[#191817] transition-colors"
                aria-label="Share artisan story"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>

            {/* Credentials Bar */}
            <div className="pt-6 border-t border-[#E5DFD4] grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs text-[#59544D]">
              <div>
                <span className="block text-[#8F887E] uppercase tracking-wider text-[10px]">Experience</span>
                <span className="font-serif text-lg text-[#191817]">{currentArtisan.experienceYears} Years</span>
              </div>
              <div>
                <span className="block text-[#8F887E] uppercase tracking-wider text-[10px]">Active Creations</span>
                <span className="font-serif text-lg text-[#191817]">{artisanProducts.length} Objects</span>
              </div>
              <div>
                <span className="block text-[#8F887E] uppercase tracking-wider text-[10px]">Verification</span>
                <span className="flex items-center gap-1 font-medium text-[#2E4A28] mt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Shilp Master Verified
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2 — THE MAKER (THEIR STORY)
          How they learned the craft · Family tradition · Philosophy
          Text + workshop photography
          ========================================================= */}
      <section className="bg-[#FAF8F5] py-20 border-y border-[#E5DFD4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Text Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="border-b border-[#191817] pb-3">
                <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
                  Generational Heritage
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl text-[#191817] mt-1">
                  The Maker
                </h2>
              </div>

              <div className="text-[#3A3732] leading-relaxed text-base sm:text-lg font-light space-y-4 whitespace-pre-line">
                {currentArtisan.story}
              </div>

              <div className="p-5 border-l-2 border-[#B8532F] bg-white text-xs sm:text-sm text-[#5C574F] italic leading-relaxed">
                &ldquo;When a piece leaves our hands, it carries a piece of our family memory. We ask only that it is loved and lived with.&rdquo;
              </div>
            </div>

            {/* Inset Workshop Photo */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-[#ECE5DC] shadow-sm">
                <Image
                  src={currentArtisan.avatarUrl}
                  alt={`${currentArtisan.artisanName} portrait in atelier`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-[#7A746B] italic text-center">
                {currentArtisan.artisanName} in the workshop, {currentArtisan.location.villageOrTown}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3 — THE CRAFT
          Process: Preparing materials, handworking, dyeing, carving, finishing
          "This is genuinely made by a person."
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[#191817] pb-4 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
              Unhurried Execution
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#191817] mt-1">
              The Craft
            </h2>
          </div>
          <p className="text-xs text-[#6F6A62] max-w-md">
            Every creation is born from ancestral toolcraft, raw natural earth pigments, and human discipline.
          </p>
        </div>

        {currentArtisan.media && currentArtisan.media.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentArtisan.media.map((med, idx) => (
              <div key={med.id || idx} className="space-y-3 group">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-[#ECE5DC]">
                  <Image
                    src={med.url}
                    alt={med.caption || currentArtisan.craftName}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 text-white text-[10px] uppercase tracking-wider px-2 py-0.5 backdrop-blur-xs font-mono">
                    Step 0{idx + 1}
                  </div>
                </div>
                {med.caption && (
                  <p className="text-xs text-[#5C574F] italic leading-snug">
                    {med.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 bg-[#FAF8F5] border border-[#E5DFD4] text-center text-sm text-[#7A746B]">
            Process photography currently being documented in the field.
          </div>
        )}
      </section>

      {/* =========================================================
          SECTION 4 — SHOP THEIR WORK
          Products created by this artisan
          Image · Name · Price · Availability · CTA: View all →
          ========================================================= */}
      <section id="shop-their-work" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="border-b border-[#191817] pb-4 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
              Available Creations
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#191817] mt-1">
              Shop Their Work
            </h2>
          </div>
          <Link
            href="/objects"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#191817] hover:text-[#B8532F] transition-colors"
          >
            <span>View All Objects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {artisanProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {artisanProducts.map((product) => {
              const image = product.media.find((m) => m.isPrimary) || product.media[0];
              return (
                <article
                  key={product.id}
                  className="group border border-[#E5DFD4] bg-white p-5 rounded-sm hover:border-[#191817] transition-all flex flex-col justify-between"
                >
                  <div>
                    <Link
                      href={`/objects/${product.slug}`}
                      className="relative aspect-[4/4.5] w-full block overflow-hidden bg-[#ECE5DC] rounded-sm"
                    >
                      {image && (
                        <Image
                          src={image.url}
                          alt={product.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      )}
                      {product.specifications?.giTagCertified && (
                        <div className="absolute top-3 left-3 bg-[#FAF8F5]/90 px-2 py-0.5 text-[9px] uppercase tracking-widest text-[#B8532F] font-semibold border border-[#E5DFD4]">
                          GI Certified
                        </div>
                      )}
                    </Link>

                    <div className="mt-4 space-y-1.5">
                      <div className="flex items-center justify-between text-xs text-[#8C8477]">
                        <span className="uppercase tracking-widest">
                          {product.specifications.regionOfOrigin}
                        </span>
                        <span className="font-serif text-lg text-[#191817]">
                          {APP_CONFIG.currencySymbol}
                          {product.basePrice.toLocaleString('en-IN')}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl text-[#191817] group-hover:text-[#B8532F] transition-colors leading-snug">
                        <Link href={`/objects/${product.slug}`}>{product.title}</Link>
                      </h3>

                      <p className="text-xs text-[#6E6962] font-light line-clamp-2 pt-1 leading-relaxed">
                        {product.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#F0EBE3] flex items-center justify-between">
                    <span className="text-[11px] text-[#3D5B3A] font-medium">In Studio Stock</span>
                    <Link
                      href={`/objects/${product.slug}`}
                      className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-[#191817] hover:text-[#B8532F]"
                    >
                      <span>Acquire Piece</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 border border-dashed border-[#DDD6CB] rounded-sm bg-[#FAF8F5] space-y-3">
            <p className="font-serif text-2xl text-[#191817]">Current edition is fully acquired</p>
            <p className="text-sm text-[#787268] max-w-md mx-auto">
              {currentArtisan.artisanName}&apos;s atelier is presently crafting the upcoming collection.
              You may commission custom work below.
            </p>
          </div>
        )}
      </section>

      {/* =========================================================
          SECTION 5 — CUSTOM WORK
          "Looking for something made specifically for you?"
          CTA: Request Custom Work →
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#242220] text-[#FAF8F5] p-8 sm:p-14 rounded-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#E8A588] font-semibold">
              Bespoke Atelier Commission
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white">
              Looking for something made specifically for you?
            </h2>
            <p className="text-sm text-[#C5BEB0] leading-relaxed max-w-xl font-light">
              Collaborate directly with {currentArtisan.artisanName} on customized dimensions, personalized natural pigment palettes, or heirloom family commissions.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <Button
              onClick={() => setCustomModalOpen(true)}
              variant="secondary"
              size="lg"
              className="rounded-none tracking-wider text-xs uppercase px-8"
            >
              Request Custom Work →
            </Button>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6 — RELATED STORIES
          Stories connected to this maker
          Read story →
          ========================================================= */}
      {relatedStories.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-[#191817] pb-4 mb-10 flex items-end justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
                Chronicles of Making
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#191817] mt-1">
                Related Craft Stories
              </h2>
            </div>
            <Link
              href="/stories"
              className="text-xs uppercase tracking-wider font-semibold text-[#191817] hover:text-[#B8532F]"
            >
              All Stories →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedStories.map((story) => (
              <article
                key={story.id}
                className="group border border-[#E5DFD4] bg-white rounded-sm overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <Link
                    href={`/stories/${story.slug}`}
                    className="relative aspect-[16/10] w-full block overflow-hidden bg-[#ECE5DC]"
                  >
                    <Image
                      src={story.heroImageUrl}
                      alt={story.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </Link>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
                      <span>{story.region}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-[#7A746B]">
                        <Clock className="w-3.5 h-3.5" />
                        {story.readTimeMinutes} min read
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl text-[#191817] group-hover:text-[#B8532F] transition-colors leading-snug">
                      <Link href={`/stories/${story.slug}`}>{story.title}</Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-[#6E6962] font-light leading-relaxed line-clamp-2">
                      {story.subtitle}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/stories/${story.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#191817] hover:text-[#B8532F] transition-colors"
                  >
                    <span>Read story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* =========================================================
          SECTION 7 — RELATED MAKERS
          Show 3–4 related artisans, kept visually light
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#E5DFD4] pt-16">
        <div className="border-b border-[#191817] pb-4 mb-10 flex items-end justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
              Kinship of Guilds
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#191817] mt-1">
              Related Master Artisans
            </h2>
          </div>
          <Link
            href="/makers"
            className="text-xs uppercase tracking-wider font-semibold text-[#191817] hover:text-[#B8532F]"
          >
            All Makers →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedMakers.map((rel) => (
            <Link
              key={rel.id}
              href={`/makers/${rel.slug}`}
              className="group block p-6 border border-[#E5DFD4] bg-[#FAF8F5] hover:border-[#191817] hover:bg-white transition-all rounded-sm space-y-4"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 bg-[#ECE5DC] border border-[#DDD6CB]">
                  <Image src={rel.avatarUrl} alt={rel.artisanName} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#191817] group-hover:text-[#B8532F] transition-colors">
                    {rel.artisanName}
                  </h3>
                  <p className="text-xs text-[#7A746B]">
                    {rel.location.villageOrTown}, {rel.location.state}
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#5C574F] font-light italic line-clamp-2">
                &ldquo;{rel.tagline}&rdquo;
              </p>

              <div className="pt-2 flex items-center text-xs uppercase tracking-wider font-semibold text-[#191817] group-hover:text-[#B8532F] transition-colors">
                <span>Meet the maker</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CUSTOM ORDER MODAL / DIALOG */}
      {customModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-[#FAF8F5] border border-[#E5DFD4] max-w-lg w-full p-8 rounded-sm shadow-2xl relative space-y-5">
            <button
              type="button"
              onClick={() => setCustomModalOpen(false)}
              className="absolute top-4 right-4 text-[#787268] hover:text-[#191817] text-sm uppercase tracking-wider"
            >
              Close
            </button>

            {customSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#3D5B3A] mx-auto" />
                <h3 className="font-serif text-2xl text-[#191817]">Commission Request Dispatched</h3>
                <p className="text-sm text-[#5B564E] leading-relaxed">
                  Your inquiry has been relayed directly to {currentArtisan.artisanName}&apos;s atelier team.
                  You will receive an initial estimate and timing breakdown within 48 hours.
                </p>
                <Button
                  onClick={() => {
                    setCustomSubmitted(false);
                    setCustomModalOpen(false);
                  }}
                  variant="primary"
                  className="rounded-none text-xs uppercase"
                >
                  Return to Profile
                </Button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setCustomSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#B8532F] font-semibold">
                    Direct Atelier Inquiry
                  </span>
                  <h3 className="font-serif text-2xl text-[#191817]">
                    Commission {currentArtisan.artisanName}
                  </h3>
                  <p className="text-xs text-[#6F6A62] mt-1">
                    Describe your intended piece, preferred dimensions, and target date.
                  </p>
                </div>

                <Input label="Your Name" placeholder="e.g. Ananya Sen" required />
                <Input label="Email Address" type="email" placeholder="you@domain.com" required />
                <Input label="Project Title / Craft Concept" placeholder="e.g. Custom Indigo & Madder Tapestry" required />

                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#4A4742]">
                    Bespoke Requirements & Dimensions
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details about desired dimensions, motif references, or intended room placement..."
                    className="w-full bg-[#FAF8F5] border border-[#DDD6CB] px-3.5 py-2.5 text-sm text-[#191817] placeholder-[#9E988F] rounded-sm focus:outline-none focus:border-[#191817]"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setCustomModalOpen(false)}
                    className="rounded-none uppercase tracking-wider text-xs"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="rounded-none uppercase tracking-wider text-xs px-6"
                  >
                    <Send className="w-3.5 h-3.5 mr-2" />
                    Submit to Atelier
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
