'use client';

import React, { useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MOCK_ARTISANS, MOCK_PRODUCTS } from '@/data/mock-data';
import { ProductGrid } from '@/components/products/ProductGrid';
import { Button, Badge, Input } from '@karigar/ui';
import { MapPin, Award, CheckCircle2, Heart, Share2, Sparkles, Send } from 'lucide-react';

export default function ArtisanProfilePage() {
  const params = useParams();
  const slug = params?.slug as string;

  const artisan = MOCK_ARTISANS.find((a) => a.slug === slug);
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(artisan?.followerCount || 0);
  const [customModalOpen, setCustomModalOpen] = useState(false);
  const [customSubmitted, setCustomSubmitted] = useState(false);

  if (!artisan) {
    // If not found in mock, check if slug is default sample or trigger notFound
    const fallback = MOCK_ARTISANS[0];
    if (!slug) return notFound();
  }

  const currentArtisan = artisan || MOCK_ARTISANS[0];
  const artisanProducts = MOCK_PRODUCTS.filter(
    (p) => p.artisanId === currentArtisan.id || p.artisan?.slug === currentArtisan.slug,
  );

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
    <div className="space-y-20 pb-28">
      {/* 1. HERO / ATELIER HEADER */}
      <section className="border-b border-[#E5DFD4] pt-8 sm:pt-14 pb-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Master Artisan Portrait */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-[#ECE5DC] shadow-sm">
                <Image
                  src={currentArtisan.avatarUrl}
                  alt={currentArtisan.artisanName}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
                {currentArtisan.verification.giCertified && (
                  <div className="absolute top-4 left-4">
                    <Badge variant="charcoal">GI Certified Master</Badge>
                  </div>
                )}
              </div>
            </div>

            {/* Atelier Identity & Manifesto */}
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
              <blockquote className="editorial-lead text-xl sm:text-2xl text-[#2F2C28] leading-relaxed border-l-2 border-[#B8532F] pl-5 py-1">
                &ldquo;{currentArtisan.tagline}&rdquo;
              </blockquote>

              <p className="text-base text-[#59544D] leading-relaxed max-w-2xl font-light">
                {currentArtisan.bio}
              </p>

              {/* Action Toolbar */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button
                  onClick={handleFollowToggle}
                  variant={isFollowing ? 'secondary' : 'primary'}
                  size="md"
                  className="rounded-none tracking-wider text-xs uppercase px-6"
                >
                  <Heart className={`w-3.5 h-3.5 mr-2 ${isFollowing ? 'fill-[#B8532F] text-[#B8532F]' : ''}`} />
                  <span>{isFollowing ? 'Patron Following' : `Follow Artisan (${followerCount})`}</span>
                </Button>

                <Button
                  onClick={() => setCustomModalOpen(true)}
                  variant="outline"
                  size="md"
                  className="rounded-none tracking-wider text-xs uppercase px-6 border-[#191817]"
                >
                  <Sparkles className="w-3.5 h-3.5 mr-2 text-[#B8532F]" />
                  <span>Request Custom Commission</span>
                </Button>

                <button
                  type="button"
                  className="p-2.5 border border-[#E5DFD4] hover:border-[#191817] text-[#59544D] hover:text-[#191817] transition-colors"
                  aria-label="Share artisan story"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              {/* Atelier Credentials */}
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
        </div>
      </section>

      {/* 2. "MY STORY" — LONG-FORM STORY */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="border-b border-[#191817] pb-3">
            <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
              Heritage Narrative
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#191817] mt-1">
              My Story & Ancestral Philosophy
            </h2>
          </div>

          <div className="prose prose-stone max-w-none text-[#3A3732] leading-relaxed text-base sm:text-lg whitespace-pre-line font-light space-y-4">
            {currentArtisan.story}
          </div>
        </div>
      </section>

      {/* 3. "MADE BY HAND" — PROCESS & WORKSHOP MEDIA */}
      {currentArtisan.media && currentArtisan.media.length > 0 && (
        <section className="bg-[#F4EFEA] py-16 border-y border-[#E5DFD4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
                In The Atelier
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#191817]">
                Made by Hand: Tools & Process
              </h2>
              <p className="text-sm text-[#6E6962]">
                Visual records of raw materials, natural dye vats, hand tools, and workshop life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentArtisan.media.map((med) => (
                <div key={med.id} className="space-y-3">
                  <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-[#ECE5DC]">
                    <Image
                      src={med.url}
                      alt={med.caption || currentArtisan.craftName}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {med.caption && (
                    <p className="text-xs text-[#5C574F] italic leading-snug">
                      {med.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. "SHOP THEIR WORK" — PRODUCT GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[#191817] pb-4 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
              Available Creations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#191817] mt-1">
              Shop Their Work
            </h2>
          </div>
          <p className="text-xs text-[#6F6A62]">
            Shipped directly from {currentArtisan.artisanName}&apos;s studio with Certificate of Authenticity.
          </p>
        </div>

        {artisanProducts.length > 0 ? (
          <ProductGrid products={artisanProducts} />
        ) : (
          <div className="text-center py-16 border border-dashed border-[#DDD6CB] rounded-sm bg-[#FAF8F5]">
            <p className="font-serif text-xl text-[#191817]">Current atelier edition is fully committed.</p>
            <p className="text-sm text-[#787268] mt-2">
              Contact {currentArtisan.artisanName} below to commission a custom creation.
            </p>
          </div>
        )}
      </section>

      {/* 5. "FROM THE MAKER" — ADDITIONAL PERSONAL COMMITMENT */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] border border-[#E5DFD4] p-8 sm:p-12 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
            From The Maker
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#191817]">
            Care & Continuity of Handcrafted Objects
          </h3>
          <p className="text-sm text-[#544F47] leading-relaxed font-light">
            &ldquo;When a patron brings an object into their home, the life of the piece is only beginning.
            Natural dyes breathe and respond to sunlight; bell metal develops a deeper amber patina over years of human touch.
            We ask you to cherish these subtle variations as signs of living handcraft rather than industrial flaws.&rdquo;
          </p>
          <p className="text-xs font-serif text-[#191817] pt-2">— {currentArtisan.artisanName}</p>
        </div>
      </section>

      {/* 6. "REQUEST SOMETHING CUSTOM" — COMMISSIONING CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#242220] text-[#FAF8F5] p-10 sm:p-16 rounded-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#E8A588] font-semibold">
              Bespoke Atelier Commission
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white">
              Request Something Custom from {currentArtisan.artisanName}
            </h2>
            <p className="text-sm text-[#C5BEB0] leading-relaxed max-w-xl font-light">
              Collaborate directly on personalized dimensions, specific natural dye palettes, bespoke wedding heirlooms, or architectural metal castings.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <Button
              onClick={() => setCustomModalOpen(true)}
              variant="secondary"
              size="lg"
              className="rounded-none tracking-wider text-xs uppercase px-8"
            >
              Start Commission Dialogue
            </Button>
          </div>
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
                <Input label="Project Title / Craft Concept" placeholder="e.g. Custom Indigo & Madder Wall Tapestry" required />

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
