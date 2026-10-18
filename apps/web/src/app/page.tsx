import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MOCK_PRODUCTS, MOCK_STORIES, MOCK_CATEGORIES } from '@/data/mock-data';
import { ASSAMESE_BRAND_WORD, APP_CONFIG } from '@karigar/config';
import { Button, Badge } from '@karigar/ui';
import { ArrowRight, Sparkles, Clock, MapPin } from 'lucide-react';

// Quick Discovery Navigation Chips reflecting new priorities
const QUICK_DISCOVERY_CHIPS = [
  { label: 'Flowers & Bouquets', href: '/categories/flowers-bouquets' },
  { label: 'Personalized Gifts', href: '/categories/personalized-gifts' },
  { label: 'Home Decor', href: '/categories/home-decor' },
  { label: 'Jewellery & Accessories', href: '/categories/jewellery-accessories' },
  { label: 'Crochet & Fabric', href: '/categories/crochet-fabric' },
  { label: 'Traditional Crafts', href: '/categories/traditional-crafts' },
  { label: 'All Objects', href: '/objects' },
];

// Regional Discovery Hub
const REGIONS_DATA = [
  {
    name: 'Assam',
    slug: 'assam',
    crafts: 'Muga Silk · Bamboo · Bell Metal',
    image: '/images/assam-muga-weaving.jpg',
    highlight: 'From Assam — Muga silk, bamboo craft and generations of makers.',
  },
  {
    name: 'Kolkata & Bengal',
    slug: 'bengal',
    crafts: 'Botanical Crochet · Linen Embroidery · Kantha',
    image: '/images/cat-crochet-fabric.jpg',
  },
  {
    name: 'Kutch',
    slug: 'kutch',
    crafts: 'Ajrakh · Bandhani · Terracotta',
    image: '/images/maker-ismail-ajrakh.jpg',
  },
  {
    name: 'Himalayan Foothills',
    slug: 'kashmir',
    crafts: 'Pressed Florals · Pashmina · Walnut Wood',
    image: '/images/cat-personalized-gifts.jpg',
  },
  {
    name: 'Rajasthan',
    slug: 'kutch',
    crafts: 'Handmade Crepe Florals · Miniature · Blue Pottery',
    image: '/images/prod-paper-flowers.jpg',
  },
];

export default function HomePage() {
  // Primary Featured Handmade Finds: 6 balanced products as specified:
  // 1. Crochet flower bouquet
  // 2. Handmade ribbon rose bouquet
  // 3. Fabric flower arrangement
  // 4. Personalized handmade gift
  // 5. Decorative floral wall art
  // 6. Traditional handmade textile accessory
  const featuredFinds = [
    MOCK_PRODUCTS[0], // Crochet bouquet
    MOCK_PRODUCTS[1], // Ribbon rose bouquet
    MOCK_PRODUCTS[2], // Fabric flower arrangement
    MOCK_PRODUCTS[3], // Personalized keepsake box
    MOCK_PRODUCTS[4], // Embroidered botanical wall hoop
    MOCK_PRODUCTS[5], // Traditional Ajrakh Chanderi stole
  ].filter(Boolean);

  const heroSpotlightProduct = featuredFinds[0];
  const supportingFinds = featuredFinds.slice(1);

  // Story highlighting the forever blooms movement alongside master craft
  const primaryStory = MOCK_STORIES[0];

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* =========================================================
          1. HERO — EXPANDED TO HANDMADE FLOWERS, BOUQUETS & GIFTS
          Headline: Small creations. Stories that stay.
          Supporting text: Discover handmade flowers, thoughtful gifts and unique creations made by independent artisans across India.
          Primary CTA: EXPLORE HANDMADE FINDS -> /categories/flowers-bouquets
          Secondary CTA: MEET THE MAKERS -> /makers
          Hero Image: High quality photograph of an artisan crafting a handmade flower bouquet in a warm workshop.
          ========================================================= */}
      <section className="relative pt-8 sm:pt-14 pb-8 overflow-hidden">
        {/* Subtle Faded Assamese Watermark Typography */}
        <div
          aria-hidden="true"
          lang="as"
          className="absolute -left-4 sm:-left-8 lg:-left-12 -top-6 sm:-top-10 lg:-top-14 font-assamese text-7xl sm:text-[10rem] md:text-[13rem] lg:text-[16rem] xl:text-[19rem] text-[#191817] opacity-[0.018] sm:opacity-[0.022] lg:opacity-[0.028] pointer-events-none select-none z-0 tracking-tight leading-none animate-assamese-watermark whitespace-nowrap"
        >
          {ASSAMESE_BRAND_WORD}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Editorial Lead Copy */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-7">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8532F]" />
                <span>Handmade Flora · Creative Gifts · Living Craft</span>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <span
                  lang="as"
                  className="font-assamese italic text-xl sm:text-2xl text-[#8C8477] tracking-[0.14em] block select-none animate-assamese-signature"
                >
                  {ASSAMESE_BRAND_WORD}
                </span>
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[#191817] leading-[1.08] tracking-tight">
                  Small creations.<br />Stories that stay.
                </h1>
              </div>

              <p className="text-base sm:text-lg text-[#5C574F] font-light leading-relaxed max-w-xl">
                Discover handmade flowers, thoughtful gifts and unique creations made by independent artisans across India.
              </p>

              {/* Requirement CTAs: Primary = EXPLORE HANDMADE FINDS, Secondary = MEET THE MAKERS */}
              <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
                <Link href="/categories/flowers-bouquets">
                  <Button size="lg" className="rounded-none tracking-wider text-xs uppercase px-9 bg-[#191817] text-white hover:bg-[#33302D] shadow-sm">
                    Explore Handmade Finds
                  </Button>
                </Link>
                <Link href="/makers">
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-none tracking-wider text-xs uppercase px-8 border-[#191817] text-[#191817] hover:bg-[#FAF8F5]"
                  >
                    Meet the Makers
                  </Button>
                </Link>
              </div>

              {/* Atelier Integrity Signifiers */}
              <div className="pt-6 border-t border-[#E5DFD4] grid grid-cols-3 gap-6 text-xs">
                <div>
                  <p className="font-serif text-xl sm:text-2xl text-[#191817]">100%</p>
                  <p className="text-[#787268] mt-0.5">Handmade by Artisans</p>
                </div>
                <div>
                  <p className="font-serif text-xl sm:text-2xl text-[#191817]">Forever</p>
                  <p className="text-[#787268] mt-0.5">Everlasting Blooms</p>
                </div>
                <div>
                  <p className="font-serif text-xl sm:text-2xl text-[#191817]">Bespoke</p>
                  <p className="text-[#787268] mt-0.5">Personalized Commissions</p>
                </div>
              </div>
            </div>

            {/* Asymmetric Studio Working Visual - Artisan crafting floral bouquet */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] sm:aspect-[3/3.3] w-full rounded-sm overflow-hidden bg-[#ECE5DC] shadow-sm">
                <Image
                  src="/images/hero-flower-artisan.jpg"
                  alt="Independent Indian artisan in studio crafting a handmade colorful crochet flower bouquet"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <p className="text-[11px] uppercase tracking-widest text-[#E8A588]">
                    In The Studio
                  </p>
                  <p className="font-serif text-xl sm:text-2xl text-white">
                    Ananya Roy arranging botanical crochet wildflowers
                  </p>
                  <p className="text-xs text-[#DDD6CB] font-light">
                    Kolkata, West Bengal • Combed Organic Cotton & Botanical Dye
                  </p>
                </div>
              </div>

              {/* Overlapping Tactile Detail Note */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 bg-[#FAF8F5] p-5 border border-[#E5DFD4] shadow-md max-w-xs space-y-1.5">
                <p className="text-[10px] uppercase tracking-wider text-[#B8532F] font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Forever Blooms</span>
                </p>
                <p className="text-xs text-[#4F4B45] leading-relaxed">
                  Every petal, leaf, and stem is hand-worked with patience — creations that preserve memories without wilting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. QUICK DISCOVERY — CHIPS NAVIGATION
          Title: EXPLORE
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 sm:-mt-6">
        <div className="border-y border-[#E5DFD4] py-4 sm:py-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[11px] uppercase tracking-widest font-semibold text-[#B8532F]">
              Explore
            </span>
            <span className="text-[#C5BFB5] hidden md:inline">|</span>
          </div>

          <nav className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none text-xs">
            {QUICK_DISCOVERY_CHIPS.map((chip, idx) => (
              <Link
                key={chip.label}
                href={chip.href}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-full transition-colors ${
                  idx === 0
                    ? 'bg-[#191817] text-white font-medium'
                    : 'bg-[#F2EDE4] text-[#4F4B45] hover:bg-[#E5DFD4] hover:text-[#191817]'
                }`}
              >
                {chip.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/categories"
            className="hidden lg:inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-[#191817] hover:text-[#B8532F] shrink-0 transition-colors"
          >
            <span>View all categories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* =========================================================
          3. FEATURED PRODUCTS: "HANDMADE FINDS"
          Section Title: HANDMADE FINDS
          Supporting text: One-of-a-kind creations, made with patience and imagination.
          Displays:
          - Product image
          - Product name
          - Artisan or maker name
          - Price in INR
          - Availability or made-to-order status
          - Product details link
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[#191817] pb-5 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
              Curated Selection
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#191817] mt-1">
              HANDMADE FINDS
            </h2>
            <p className="text-sm text-[#787268] mt-1.5 font-light">
              One-of-a-kind creations, made with patience and imagination.
            </p>
          </div>
          <Link
            href="/categories/flowers-bouquets"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#191817] hover:text-[#B8532F] transition-colors"
          >
            <span>Explore Flowers & Gifts ({MOCK_PRODUCTS.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Editorial Product Grid: 1 Large Spotlight (7 cols) + 5 Supporting Items */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Large Spotlight Product */}
          {heroSpotlightProduct && (
            <article className="lg:col-span-7 group border border-[#E5DFD4] bg-[#FAF8F5] p-6 sm:p-8 rounded-sm hover:border-[#191817] transition-all">
              <Link
                href={`/objects/${heroSpotlightProduct.slug}`}
                className="relative aspect-[16/11] sm:aspect-[16/10] w-full block overflow-hidden bg-[#ECE5DC] rounded-sm"
              >
                <Image
                  src={heroSpotlightProduct.media[0]?.url || ''}
                  alt={heroSpotlightProduct.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-[#FAF8F5]/95 px-3 py-1 text-[10px] uppercase tracking-widest text-[#B8532F] font-semibold border border-[#E5DFD4]">
                    Featured Find
                  </span>
                  <span className="bg-[#191817]/90 text-white px-3 py-1 text-[10px] uppercase tracking-widest font-medium">
                    {heroSpotlightProduct.specifications.productionType || 'Ready to Ship'}
                  </span>
                </div>
              </Link>

              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between text-xs text-[#8C8477]">
                  <span className="uppercase tracking-widest font-semibold text-[#B8532F]">
                    {heroSpotlightProduct.category.name} • {heroSpotlightProduct.specifications?.regionOfOrigin}
                  </span>
                  <span className="font-serif text-2xl text-[#191817]">
                    {APP_CONFIG.currencySymbol}
                    {heroSpotlightProduct.basePrice.toLocaleString('en-IN')}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#191817] group-hover:text-[#B8532F] transition-colors leading-snug">
                  <Link href={`/objects/${heroSpotlightProduct.slug}`}>{heroSpotlightProduct.title}</Link>
                </h3>

                {heroSpotlightProduct.artisan && (
                  <p className="text-sm text-[#5C574F]">
                    Made by{' '}
                    <Link
                      href={`/makers/${heroSpotlightProduct.artisan.slug}`}
                      className="text-[#191817] font-semibold hover:underline"
                    >
                      {heroSpotlightProduct.artisan.artisanName}
                    </Link>
                    <span className="text-[#8C8477] ml-1.5">• {heroSpotlightProduct.artisan.location?.district || heroSpotlightProduct.artisan.location?.state}</span>
                  </p>
                )}

                <p className="text-sm text-[#6E6962] font-light leading-relaxed line-clamp-2">
                  {heroSpotlightProduct.shortDescription}
                </p>

                <div className="pt-2 flex items-center justify-between">
                  <Link
                    href={`/objects/${heroSpotlightProduct.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#191817] hover:text-[#B8532F] transition-colors"
                  >
                    <span className="border-b border-[#191817] pb-0.5">Product Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[11px] font-medium text-[#2E4A28] bg-[#E8F0E6] px-2.5 py-0.5 rounded-full">
                    {heroSpotlightProduct.specifications.productionType || 'Ready to Ship'}
                  </span>
                </div>
              </div>
            </article>
          )}

          {/* Supporting Featured Products (5 items in clean 2-column or list view) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {supportingFinds.map((product) => {
              const image = product.media[0];
              const isMadeToOrder = product.specifications?.productionType === 'Made to Order';
              return (
                <article
                  key={product.id}
                  className="group border border-[#E5DFD4] bg-white p-4 rounded-sm hover:border-[#191817] transition-all"
                >
                  <div className="flex gap-4 items-start">
                    <Link
                      href={`/objects/${product.slug}`}
                      className="relative w-24 sm:w-28 aspect-square shrink-0 overflow-hidden bg-[#ECE5DC] rounded-sm"
                    >
                      {image && (
                        <Image
                          src={image.url}
                          alt={product.title}
                          fill
                          sizes="112px"
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                      )}
                    </Link>

                    <div className="space-y-1 flex-1 min-w-0">
                      <div className="flex items-center justify-between text-xs text-[#8C8477]">
                        <span className="uppercase tracking-widest text-[10px] text-[#B8532F] truncate max-w-[140px]">
                          {product.category.name}
                        </span>
                        <span className="font-serif text-base text-[#191817] shrink-0 font-medium">
                          {APP_CONFIG.currencySymbol}
                          {product.basePrice.toLocaleString('en-IN')}
                        </span>
                      </div>

                      <h4 className="font-serif text-base text-[#191817] group-hover:text-[#B8532F] transition-colors leading-snug line-clamp-1">
                        <Link href={`/objects/${product.slug}`}>{product.title}</Link>
                      </h4>

                      {product.artisan && (
                        <p className="text-xs text-[#5C574F] truncate">
                          Made by{' '}
                          <Link
                            href={`/makers/${product.artisan.slug}`}
                            className="text-[#191817] font-medium hover:underline"
                          >
                            {product.artisan.artisanName}
                          </Link>
                        </p>
                      )}

                      <div className="pt-2 flex items-center justify-between">
                        <span className={`text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 rounded-full ${
                          isMadeToOrder ? 'bg-[#FDF3E7] text-[#9A5B18]' : 'bg-[#EBF3E8] text-[#2D5A27]'
                        }`}>
                          {product.specifications?.productionType || 'Ready to Ship'}
                        </span>

                        <Link
                          href={`/objects/${product.slug}`}
                          className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider font-semibold text-[#191817] hover:text-[#B8532F]"
                        >
                          <span>Details</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* View all button */}
        <div className="text-center pt-8">
          <Link
            href="/objects"
            className="inline-flex items-center gap-2 font-serif text-base sm:text-lg text-[#191817] hover:text-[#B8532F] border-b border-[#191817] hover:border-[#B8532F] pb-0.5 transition-all"
          >
            <span>Explore all handmade creations ({MOCK_PRODUCTS.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* =========================================================
          4. HOMEPAGE CATEGORIES — NEW 6 PRIORITY TAXONOMY
          1. Flowers & Bouquets
          2. Personalized Gifts
          3. Home Decor
          4. Jewellery & Accessories
          5. Crochet & Fabric Crafts
          6. Traditional Indian Crafts
          Using beautiful, authentic, relevant product photography.
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[#191817] pb-5 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
              Category Directory
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#191817] mt-1">
              Explore by Category
            </h2>
            <p className="text-sm text-[#787268] mt-1 font-light">
              From everlasting bouquets and personalized keepsakes to living artisan traditions.
            </p>
          </div>
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#191817] hover:text-[#B8532F] transition-colors"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Editorial Asymmetric Grid of 6 Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
          {MOCK_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className={`group relative overflow-hidden rounded-sm bg-[#EFEBE4] block ${cat.spanClass}`}
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

              <div className="absolute inset-0 p-6 sm:p-7 flex flex-col justify-end text-white space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#E8A588] font-semibold">
                  {cat.count} Handcrafted Finds
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white group-hover:text-[#FBECE6] transition-colors leading-tight">
                  {cat.name}
                </h3>
                <p className="text-xs text-[#DDD6CB] font-light max-w-md line-clamp-1">
                  {cat.descriptor}
                </p>
                <div className="pt-2 flex items-center text-xs uppercase tracking-wider font-semibold text-white group-hover:text-[#E8A588] transition-colors">
                  <span>Explore category</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* =========================================================
          5. EDITORIAL CRAFT STORY — THE FOREVER BLOOM
          Narrative connecting handmade flowers with Indian artisan spirit
          ========================================================= */}
      {primaryStory && (
        <section className="bg-[#171E1A] text-[#FAF8F5] py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Large Story Visual (7 cols) */}
              <div className="lg:col-span-7">
                <div className="group relative aspect-[16/10] sm:aspect-[16/10] w-full overflow-hidden rounded-sm bg-[#222B25]">
                  <Image
                    src={primaryStory.heroImageUrl}
                    alt={primaryStory.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
                    <p className="text-[11px] uppercase tracking-widest text-[#E8A588] font-semibold">
                      Artisan Spotlight
                    </p>
                    <p className="font-serif text-lg text-white font-normal mt-0.5">
                      Hand-sculpted everlasting petals created with zero waste
                    </p>
                  </div>
                </div>
              </div>

              {/* Story Narrative & Actions (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#E8A588] font-semibold">
                    <span>Makers Chronicle</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-normal text-[#C5BFB5]">
                      <Clock className="w-3.5 h-3.5" />
                      {primaryStory.readTimeMinutes} min read
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-white leading-tight">
                    {primaryStory.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#C5BFB5] font-light leading-relaxed">
                    {primaryStory.subtitle}
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link href={`/stories/${primaryStory.slug}`}>
                    <Button
                      variant="secondary"
                      size="md"
                      className="rounded-none tracking-wider text-xs uppercase px-7 bg-[#FAF8F5] text-[#191817] hover:bg-white"
                    >
                      Read the story →
                    </Button>
                  </Link>
                  <Link
                    href="/categories/flowers-bouquets"
                    className="text-xs uppercase tracking-widest font-semibold text-[#E8A588] hover:text-white transition-colors"
                  >
                    Shop handmade flowers →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          6. REGIONAL DISCOVERY — CELEBRATING CRAFT GEOGRAPHY
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[#191817] pb-5 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
              Regional Provenance
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#191817] mt-1">
              Explore by Region
            </h2>
            <p className="text-sm text-[#787268] mt-1 font-light">
              Craft geography shaped by rivers, regional botany, and generations of localized knowledge.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Spotlight on Assam */}
          <div className="lg:col-span-5 bg-[#FAF8F5] border border-[#E5DFD4] p-6 sm:p-7 rounded-sm space-y-5">
            <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden bg-[#ECE5DC]">
              <Image
                src="/images/assam-muga-weaving.jpg"
                alt="Assam craft heritage"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#191817] text-white px-2.5 py-0.5 text-[10px] uppercase tracking-widest font-semibold">
                Heritage Region
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl text-[#191817]">Assam</span>
                <span className="text-xs uppercase tracking-wider text-[#B8532F] font-semibold">
                  • Muga Silk · Bamboo · Bell Metal
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#5C574F] font-light leading-relaxed">
                From Assam — Muga silk, bamboo craft and generations of makers shaped by the Brahmaputra valley.
              </p>
            </div>

            <Link
              href="/regions/assam"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#B8532F] hover:text-[#191817] transition-colors"
            >
              <span>Explore Assamese craft</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 4 Supporting Regional Links */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {REGIONS_DATA.slice(1).map((reg) => (
              <div
                key={reg.name}
                className="border border-[#E5DFD4] bg-white p-4 rounded-sm hover:border-[#191817] transition-all flex flex-col justify-between group"
              >
                <div className="flex gap-4 items-center">
                  <div className="relative w-16 h-16 shrink-0 rounded-sm overflow-hidden bg-[#ECE5DC]">
                    <Image
                      src={reg.image}
                      alt={reg.name}
                      fill
                      sizes="64px"
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-serif text-lg text-[#191817] group-hover:text-[#B8532F] transition-colors">
                      {reg.name}
                    </h4>
                    <p className="text-xs text-[#7A746B] line-clamp-1 mt-0.5">
                      {reg.crafts}
                    </p>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-[#F0EBE3] flex justify-end">
                  <Link
                    href={`/regions/${reg.slug}`}
                    className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider font-semibold text-[#191817] group-hover:text-[#B8532F]"
                  >
                    <span>Discover</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
