'use client';

import React, { useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MOCK_PRODUCTS, MOCK_ARTISANS } from '@/data/mock-data';
import { Button, Badge } from '@karigar/ui';
import { APP_CONFIG } from '@karigar/config';
import { ProductGrid } from '@/components/products/ProductGrid';
import {
  Heart,
  Sparkles,
  Clock,
  ShieldCheck,
  MapPin,
  Check,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const product = MOCK_PRODUCTS.find((p) => p.slug === slug);
  const currentProduct = product || MOCK_PRODUCTS[0];

  if (!product && !slug) {
    return notFound();
  }

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(currentProduct.variants[0]);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const artisan =
    MOCK_ARTISANS.find((a) => a.id === currentProduct.artisanId) ||
    currentProduct.artisan ||
    MOCK_ARTISANS[0];

  const relatedProducts = MOCK_PRODUCTS.filter((p) => p.id !== currentProduct.id).slice(0, 3);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  return (
    <div className="space-y-24 pb-28">
      {/* Breadcrumb path */}
      <nav className="border-b border-[#E5DFD4] py-3.5 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-[#7A746B]">
          <Link href="/" className="hover:text-[#191817]">Home</Link>
          <ChevronRight className="w-3 h-3 text-[#A8A196]" />
          <Link href="/products" className="hover:text-[#191817]">Objects</Link>
          <ChevronRight className="w-3 h-3 text-[#A8A196]" />
          <Link href={`/categories/${currentProduct.category.slug}`} className="hover:text-[#191817]">
            {currentProduct.category.name}
          </Link>
          <ChevronRight className="w-3 h-3 text-[#A8A196]" />
          <span className="text-[#191817] font-medium truncate max-w-xs">{currentProduct.title}</span>
        </div>
      </nav>

      {/* Main Product Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* 1. Large Media Gallery */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[3/4] sm:aspect-[4/4.5] w-full rounded-sm overflow-hidden bg-[#ECE5DC] shadow-sm">
              <Image
                src={currentProduct.media[activeImageIndex]?.url || currentProduct.media[0]?.url}
                alt={currentProduct.media[activeImageIndex]?.altText || currentProduct.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-all duration-500"
              />
              {currentProduct.specifications.giTagCertified && (
                <div className="absolute top-4 left-4">
                  <Badge variant="charcoal">GI Appellation Certified</Badge>
                </div>
              )}
            </div>

            {/* Thumbnail selector */}
            {currentProduct.media.length > 1 && (
              <div className="flex items-center gap-3">
                {currentProduct.media.map((med, idx) => (
                  <button
                    key={med.id}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 aspect-square rounded-sm overflow-hidden border transition-all ${
                      activeImageIndex === idx ? 'border-[#191817] ring-1 ring-[#191817]' : 'border-[#E5DFD4] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image src={med.url} alt={med.altText || ''} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 2. Product Narrative & Acquisition Panel */}
          <div className="lg:col-span-5 space-y-8">
            {/* Maker Connection Banner */}
            <div className="flex items-center gap-3 pb-6 border-b border-[#E5DFD4]">
              {artisan.avatarUrl && (
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#ECE5DC] shrink-0 border border-[#D5CEC2]">
                  <Image src={artisan.avatarUrl} alt={artisan.artisanName || ''} fill className="object-cover" />
                </div>
              )}
              <div className="space-y-0.5">
                <p className="text-[11px] uppercase tracking-widest text-[#B8532F] font-semibold">
                  Handcrafted by Master
                </p>
                <Link
                  href={`/artisans/${artisan.slug}`}
                  className="font-serif text-lg text-[#191817] hover:text-[#B8532F] transition-colors font-medium block"
                >
                  {artisan.artisanName}
                </Link>
                <div className="flex items-center gap-1 text-xs text-[#7A746B]">
                  <MapPin className="w-3 h-3" />
                  <span>{currentProduct.specifications.regionOfOrigin}</span>
                </div>
              </div>
            </div>

            {/* Product Title & Pricing */}
            <div className="space-y-3">
              <h1 className="font-serif text-3xl sm:text-4xl text-[#191817] leading-tight">
                {currentProduct.title}
              </h1>

              <div className="flex items-baseline gap-4">
                <span className="font-serif text-3xl text-[#191817]">
                  {APP_CONFIG.currencySymbol}
                  {Number(currentProduct.basePrice).toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-[#787268]">Includes taxes & insured museum-grade courier</span>
              </div>
            </div>

            {/* Short Product Story */}
            <div className="space-y-2 text-sm text-[#4A463F] leading-relaxed font-light">
              <p>{currentProduct.shortDescription}</p>
            </div>

            {/* Craft Specs Grid */}
            <div className="bg-[#F4EFEA] p-5 rounded-sm space-y-3 text-xs border border-[#E5DFD4]">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[#847D73] uppercase tracking-wider text-[10px] block">Technique</span>
                  <span className="text-[#191817] font-medium">{currentProduct.specifications.craftTechnique}</span>
                </div>
                <div>
                  <span className="text-[#847D73] uppercase tracking-wider text-[10px] block">Creation Time</span>
                  <span className="text-[#191817] font-medium flex items-center gap-1 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-[#B8532F]" />
                    {currentProduct.specifications.makingDurationDays} Days of Hand Labor
                  </span>
                </div>
              </div>

              {currentProduct.specifications.dimensions && (
                <div className="pt-2 border-t border-[#E5DFD4]">
                  <span className="text-[#847D73] uppercase tracking-wider text-[10px] block">Dimensions</span>
                  <span className="text-[#191817] font-medium">{currentProduct.specifications.dimensions}</span>
                </div>
              )}

              <div className="pt-2 border-t border-[#E5DFD4]">
                <span className="text-[#847D73] uppercase tracking-wider text-[10px] block mb-1">Authentic Materials</span>
                <div className="flex flex-wrap gap-1.5">
                  {currentProduct.specifications.materials.map((mat) => (
                    <Badge key={mat} variant="sand" className="text-[10px]">
                      {mat}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3">
                <Button
                  onClick={handleAddToCart}
                  size="lg"
                  className="flex-1 rounded-none text-xs uppercase tracking-wider py-4"
                >
                  {addedToCart ? (
                    <span className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400" />
                      Acquisition Confirmed
                    </span>
                  ) : (
                    <span>Acquire Handcrafted Piece</span>
                  )}
                </Button>

                <button
                  type="button"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="p-4 border border-[#E5DFD4] hover:border-[#191817] rounded-sm transition-colors"
                  aria-label="Save to private wishlist"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isWishlisted ? 'fill-[#B8532F] text-[#B8532F]' : 'text-[#4A463F]'
                    }`}
                  />
                </button>
              </div>

              {currentProduct.isCustomizable && (
                <div className="p-4 bg-[#FAF8F5] border border-[#E5DFD4] flex items-center justify-between text-xs">
                  <div className="space-y-0.5">
                    <p className="font-medium text-[#191817] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#B8532F]" />
                      <span>Custom Dimensions & Colors Available</span>
                    </p>
                    <p className="text-[#787268]">Request modifications directly from {artisan.artisanName}</p>
                  </div>
                  <Link href={`/artisans/${artisan.slug}`}>
                    <Button variant="outline" size="sm" className="rounded-none text-[10px] uppercase">
                      Inquire
                    </Button>
                  </Link>
                </div>
              )}
            </div>

            {/* Direct Fair Guarantee */}
            <div className="pt-4 border-t border-[#E5DFD4] flex items-start gap-3 text-xs text-[#6F6A62]">
              <ShieldCheck className="w-4 h-4 text-[#3D5B3A] shrink-0 mt-0.5" />
              <span>
                Ships directly from the master&apos;s personal atelier with a signed Certificate of Provenance and natural care guide.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FULL PRODUCT STORY & MATERIAL DETAIL */}
      <section className="bg-[#F4EFEA] py-20 border-y border-[#E5DFD4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="border-b border-[#191817] pb-3">
            <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
              The Living Artifact
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#191817] mt-1">
              Full Making Story & Material Lineage
            </h2>
          </div>

          <div className="prose prose-stone text-[#3A3732] text-base sm:text-lg leading-relaxed font-light space-y-4 whitespace-pre-line">
            {currentProduct.fullStory}
          </div>

          {currentProduct.specifications.careInstructions && (
            <div className="bg-[#FAF8F5] p-6 border border-[#E5DFD4] space-y-2 mt-8">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#191817]">
                Master&apos;s Preservative Care Instructions
              </h4>
              <p className="text-xs text-[#5C574F] leading-relaxed">
                {currentProduct.specifications.careInstructions}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 4. DEEP ARTISAN ATELIER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center p-8 sm:p-12 bg-[#FAF8F5] border border-[#E5DFD4]">
          <div className="md:col-span-4 relative aspect-[4/5] rounded-sm overflow-hidden bg-[#ECE5DC]">
            <Image
              src={artisan.avatarUrl || ''}
              alt={artisan.artisanName || ''}
              fill
              className="object-cover"
            />
          </div>
          <div className="md:col-span-8 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
              Meet The Creator
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#191817]">
              {artisan.artisanName}
            </h3>
            <p className="text-xs uppercase tracking-wider text-[#7E776E]">
              {artisan.craftName} • {artisan.location?.villageOrTown}, {artisan.location?.state}
            </p>
            <p className="text-sm text-[#59544D] leading-relaxed line-clamp-3 font-light">
              {artisan.bio}
            </p>
            <div className="pt-2">
              <Link
                href={`/artisans/${artisan.slug}`}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#191817] hover:text-[#B8532F] border-b border-[#191817] hover:border-[#B8532F] pb-1 transition-all"
              >
                <span>Explore Full Atelier & Process Chronicles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. RELATED CRAFT OBJECTS */}
      {relatedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-[#191817] pb-4 mb-10 flex items-end justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
                Harmonious Objects
              </span>
              <h3 className="font-serif text-3xl text-[#191817] mt-1">
                You May Also Appreciate
              </h3>
            </div>
            <Link
              href="/products"
              className="text-xs uppercase tracking-wider font-semibold text-[#191817] hover:text-[#B8532F]"
            >
              All Objects →
            </Link>
          </div>

          <ProductGrid products={relatedProducts} />
        </section>
      )}
    </div>
  );
}
