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
  MessageCircle,
  PackageCheck,
  Sparkle,
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
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [buyNowConfirmed, setBuyNowConfirmed] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactSent, setContactSent] = useState(false);
  const [contactMessage, setContactMessage] = useState('');

  const artisan =
    MOCK_ARTISANS.find((a) => a.id === currentProduct.artisanId) ||
    currentProduct.artisan ||
    MOCK_ARTISANS[0];

  // Other creations made by the same artisan
  const artisanOtherProducts = MOCK_PRODUCTS.filter(
    (p) =>
      p.id !== currentProduct.id &&
      (p.artisanId === artisan.id || p.artisan?.slug === artisan.slug),
  );

  // Fallback related products if this artisan only has one product in dataset
  const relatedProducts =
    artisanOtherProducts.length > 0
      ? artisanOtherProducts
      : MOCK_PRODUCTS.filter((p) => p.id !== currentProduct.id).slice(0, 3);

  const handleBuyNow = () => {
    setBuyNowConfirmed(true);
    setTimeout(() => setBuyNowConfirmed(false), 3500);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSent(true);
    setTimeout(() => {
      setContactSent(false);
      setContactModalOpen(false);
      setContactMessage('');
    }, 2500);
  };

  const isMadeToOrder = currentProduct.specifications.productionType === 'Made to Order';

  return (
    <div className="space-y-20 sm:space-y-24 pb-28">
      {/* Breadcrumb path */}
      <nav className="border-b border-[#E5DFD4] py-3.5 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-[#7A746B]">
          <Link href="/" className="hover:text-[#191817]">Home</Link>
          <ChevronRight className="w-3 h-3 text-[#A8A196]" />
          <Link href="/categories" className="hover:text-[#191817]">Categories</Link>
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
              <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                <span
                  className={`text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-sm border ${
                    isMadeToOrder
                      ? 'bg-[#FAF8F5]/95 text-[#8C531B] border-[#F2DFC6]'
                      : 'bg-[#FAF8F5]/95 text-[#295424] border-[#D4E8CE]'
                  }`}
                >
                  {currentProduct.specifications.productionType || 'Ready to Ship'}
                </span>
                {currentProduct.specifications.giTagCertified && (
                  <Badge variant="charcoal" className="text-[10px]">GI Certified</Badge>
                )}
              </div>
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
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            {/* Maker Connection Banner: Product -> Maker Connection */}
            <div className="flex items-center justify-between pb-6 border-b border-[#E5DFD4]">
              <div className="flex items-center gap-3">
                {artisan.avatarUrl && (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#ECE5DC] shrink-0 border border-[#D5CEC2]">
                    <Image src={artisan.avatarUrl} alt={artisan.artisanName || ''} fill className="object-cover" />
                  </div>
                )}
                <div className="space-y-0.5">
                  <p className="text-[11px] uppercase tracking-widest text-[#B8532F] font-semibold">
                    Made by
                  </p>
                  <Link
                    href={`/makers/${artisan.slug}`}
                    className="font-serif text-lg text-[#191817] hover:text-[#B8532F] transition-colors font-medium block"
                  >
                    {artisan.artisanName}
                  </Link>
                  <div className="flex items-center gap-1.5 text-xs text-[#7A746B]">
                    <span>{artisan.craftName ? artisan.craftName.split('&')[0].trim() : 'Artisan Craft'}</span>
                    <span>•</span>
                    <MapPin className="w-3 h-3 text-[#8C8477]" />
                    <span>{currentProduct.specifications.regionOfOrigin}</span>
                  </div>
                </div>
              </div>

              <Link
                href={`/makers/${artisan.slug}`}
                className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-[#B8532F] hover:underline shrink-0"
              >
                <span>Meet the Maker</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Product Title & Pricing */}
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#8C8477]">
                {currentProduct.category.name}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl text-[#191817] leading-tight">
                {currentProduct.title}
              </h1>

              <div className="flex items-baseline gap-4 pt-1">
                <span className="font-serif text-3xl text-[#191817]">
                  {APP_CONFIG.currencySymbol}
                  {Number(currentProduct.basePrice).toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-[#787268]">Includes secure insured packaging</span>
              </div>
            </div>

            {/* Short Product Story */}
            <div className="text-sm text-[#4A463F] leading-relaxed font-light">
              <p>{currentProduct.shortDescription}</p>
            </div>

            {/* =========================================================
                EXPLICIT SPECIFICATION MATRIX (PROMPT REQUIREMENT #6)
                - Made by: [Artisan name]
                - Material: [Actual material]
                - Production: [Ready to ship / Made to order]
                - Price: ₹[Actual price]
                ========================================================= */}
            <div className="bg-[#FAF8F5] p-5 rounded-sm space-y-3.5 text-xs border border-[#E5DFD4]">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[#847D73] uppercase tracking-wider text-[10px] block">Made By</span>
                  <Link
                    href={`/makers/${artisan.slug}`}
                    className="text-[#191817] font-semibold hover:text-[#B8532F] hover:underline"
                  >
                    {artisan.artisanName}
                  </Link>
                </div>

                <div>
                  <span className="text-[#847D73] uppercase tracking-wider text-[10px] block">Production</span>
                  <span className={`inline-flex items-center gap-1 font-medium mt-0.5 ${
                    isMadeToOrder ? 'text-[#8C531B]' : 'text-[#295424]'
                  }`}>
                    <PackageCheck className="w-3.5 h-3.5" />
                    {currentProduct.specifications.productionType || 'Ready to Ship'}
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-[#E5DFD4]">
                <span className="text-[#847D73] uppercase tracking-wider text-[10px] block mb-1">Material</span>
                <div className="flex flex-wrap gap-1.5">
                  {currentProduct.specifications.materials.map((mat) => (
                    <Badge key={mat} variant="sand" className="text-[10px]">
                      {mat}
                    </Badge>
                  ))}
                </div>
              </div>

              {currentProduct.specifications.dimensions && (
                <div className="pt-2 border-t border-[#E5DFD4]">
                  <span className="text-[#847D73] uppercase tracking-wider text-[10px] block">Dimensions</span>
                  <span className="text-[#191817] font-medium">{currentProduct.specifications.dimensions}</span>
                </div>
              )}

              <div className="pt-2 border-t border-[#E5DFD4] flex items-center justify-between">
                <div>
                  <span className="text-[#847D73] uppercase tracking-wider text-[10px] block">Handcraft Duration</span>
                  <span className="text-[#191817] font-medium flex items-center gap-1 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-[#B8532F]" />
                    {currentProduct.specifications.makingDurationDays} Days Handcrafted
                  </span>
                </div>
                {currentProduct.specifications.occasion && currentProduct.specifications.occasion.length > 0 && (
                  <div className="text-right">
                    <span className="text-[#847D73] uppercase tracking-wider text-[10px] block">Occasion</span>
                    <span className="text-[#191817] font-medium">
                      {currentProduct.specifications.occasion.slice(0, 2).join(', ')}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* =========================================================
                REQUIRED ACTION BUTTONS (PROMPT REQUIREMENT #6)
                - Add to Wishlist
                - Contact Maker or Buy Now
                - Meet the Maker
                ========================================================= */}
            <div className="space-y-3 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Buy Now Button */}
                <Button
                  onClick={handleBuyNow}
                  size="lg"
                  className="w-full rounded-none text-xs uppercase tracking-wider py-4 bg-[#191817] text-white hover:bg-[#33302D]"
                >
                  {buyNowConfirmed ? (
                    <span className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400" />
                      Acquisition Confirmed
                    </span>
                  ) : (
                    <span>Buy Now · ₹{Number(currentProduct.basePrice).toLocaleString('en-IN')}</span>
                  )}
                </Button>

                {/* Contact Maker Button */}
                <Button
                  onClick={() => setContactModalOpen(true)}
                  variant="outline"
                  size="lg"
                  className="w-full rounded-none text-xs uppercase tracking-wider py-4 border-[#191817] text-[#191817] hover:bg-[#FAF8F5]"
                >
                  <MessageCircle className="w-3.5 h-3.5 mr-2" />
                  <span>Contact Maker</span>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Add to Wishlist Button */}
                <Button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  variant="secondary"
                  size="md"
                  className="w-full rounded-none text-xs uppercase tracking-wider bg-[#F4EFEA] hover:bg-[#EAE4DC] text-[#191817]"
                >
                  <Heart
                    className={`w-4 h-4 mr-2 transition-colors ${
                      isWishlisted ? 'fill-[#B8532F] text-[#B8532F]' : 'text-[#4A463F]'
                    }`}
                  />
                  <span>{isWishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}</span>
                </Button>

                {/* Meet the Maker Button */}
                <Link href={`/makers/${artisan.slug}`} className="w-full">
                  <Button
                    variant="outline"
                    size="md"
                    className="w-full rounded-none text-xs uppercase tracking-wider border-[#B8532F] text-[#B8532F] hover:bg-[#B8532F] hover:text-white"
                  >
                    <span>Meet the Maker →</span>
                  </Button>
                </Link>
              </div>

              {currentProduct.isCustomizable && (
                <div className="p-4 bg-[#FAF8F5] border border-[#E5DFD4] flex items-center justify-between text-xs">
                  <div className="space-y-0.5">
                    <p className="font-medium text-[#191817] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#B8532F]" />
                      <span>Custom Colorway or Occasion Note Available</span>
                    </p>
                    <p className="text-[#787268]">Request modifications or personalization from {artisan.artisanName}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setContactModalOpen(true)}
                    className="text-xs uppercase font-semibold text-[#B8532F] hover:underline"
                  >
                    Inquire
                  </button>
                </div>
              )}
            </div>

            {/* Direct Fair Guarantee */}
            <div className="pt-4 border-t border-[#E5DFD4] flex items-start gap-3 text-xs text-[#6F6A62]">
              <ShieldCheck className="w-4 h-4 text-[#3D5B3A] shrink-0 mt-0.5" />
              <span>
                Ships directly from {artisan.artisanName}&apos;s atelier in {currentProduct.specifications.regionOfOrigin} with signed maker provenance notes.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FULL PRODUCT STORY & MATERIAL LINEAGE */}
      <section className="bg-[#FAF8F5] py-20 border-y border-[#E5DFD4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="border-b border-[#191817] pb-3">
            <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
              The Living Creation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#191817] mt-1">
              Making Story & Craft Technique
            </h2>
          </div>

          <div className="prose prose-stone text-[#3A3732] text-base sm:text-lg leading-relaxed font-light space-y-4 whitespace-pre-line">
            {currentProduct.fullStory}
          </div>

          {currentProduct.specifications.careInstructions && (
            <div className="bg-white p-6 border border-[#E5DFD4] space-y-2 mt-8">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#191817]">
                Care & Preservation Instructions
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
              Meet The Maker
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#191817]">
              {artisan.artisanName}
            </h3>
            <p className="text-xs uppercase tracking-wider text-[#7E776E]">
              {artisan.craftName} • {artisan.location?.villageOrTown}, {artisan.location?.state}
            </p>
            <p className="text-sm text-[#59544D] leading-relaxed font-light line-clamp-3">
              {artisan.bio}
            </p>
            <div className="pt-2 flex items-center gap-4">
              <Link
                href={`/makers/${artisan.slug}`}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#191817] hover:text-[#B8532F] border-b border-[#191817] hover:border-[#B8532F] pb-1 transition-all"
              >
                <span>Visit Maker Profile & Full Atelier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. OTHER PRODUCTS MADE BY THE SAME ARTISAN (REQUIREMENT #6)
          "The maker profile should display other products made by the same artisan."
          And on the product page, we feature other creations by the same maker!
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[#191817] pb-4 mb-10 flex items-end justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
              {artisanOtherProducts.length > 0 ? 'From The Same Atelier' : 'Harmonious Handmade Finds'}
            </span>
            <h3 className="font-serif text-3xl text-[#191817] mt-1">
              {artisanOtherProducts.length > 0
                ? `More Creations by ${artisan.artisanName}`
                : 'You May Also Appreciate'}
            </h3>
          </div>
          <Link
            href={`/makers/${artisan.slug}`}
            className="text-xs uppercase tracking-wider font-semibold text-[#191817] hover:text-[#B8532F]"
          >
            All by {artisan.artisanName} →
          </Link>
        </div>

        <ProductGrid products={relatedProducts} />
      </section>

      {/* Contact Maker Modal */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF8F5] border border-[#191817] max-w-lg w-full p-6 sm:p-8 space-y-5 rounded-sm">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
                Direct Atelier Inquiry
              </span>
              <h3 className="font-serif text-2xl text-[#191817]">
                Message {artisan.artisanName}
              </h3>
              <p className="text-xs text-[#6E6962]">
                Inquire about custom colorways, wedding bouquets, or personalized dates for &ldquo;{currentProduct.title}&rdquo;.
              </p>
            </div>

            {contactSent ? (
              <div className="p-6 bg-[#E8F0E6] border border-[#C5D8C1] text-center space-y-2">
                <Check className="w-6 h-6 text-[#295424] mx-auto" />
                <p className="font-serif text-lg text-[#191817]">Inquiry Dispatched</p>
                <p className="text-xs text-[#5C6E59]">
                  {artisan.artisanName}&apos;s studio will receive your inquiry and reply directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-[#4A463F] uppercase tracking-wider mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aditi Sharma"
                    className="w-full bg-white border border-[#D5CEC2] p-2.5 text-xs text-[#191817] rounded-none focus:outline-none focus:ring-1 focus:ring-[#B8532F]"
                  />
                </div>
                <div>
                  <label className="block text-[#4A463F] uppercase tracking-wider mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. aditi@example.com"
                    className="w-full bg-white border border-[#D5CEC2] p-2.5 text-xs text-[#191817] rounded-none focus:outline-none focus:ring-1 focus:ring-[#B8532F]"
                  />
                </div>
                <div>
                  <label className="block text-[#4A463F] uppercase tracking-wider mb-1">Message or Custom Requirements</label>
                  <textarea
                    rows={4}
                    required
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Describe your desired palette, recipient name, or special occasion date..."
                    className="w-full bg-white border border-[#D5CEC2] p-2.5 text-xs text-[#191817] rounded-none focus:outline-none focus:ring-1 focus:ring-[#B8532F]"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <Button
                    type="button"
                    onClick={() => setContactModalOpen(false)}
                    variant="outline"
                    size="sm"
                    className="rounded-none uppercase text-xs"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    size="sm"
                    className="rounded-none uppercase text-xs bg-[#191817] text-white hover:bg-[#33302D]"
                  >
                    Send Message to Maker
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
