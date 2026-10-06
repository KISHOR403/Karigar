import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MOCK_PRODUCTS, MOCK_STORIES } from '@/data/mock-data';
import { ASSAMESE_BRAND_WORD, APP_CONFIG } from '@karigar/config';
import { Button } from '@karigar/ui';
import { ArrowRight, Sparkles, Clock, MapPin } from 'lucide-react';

// Quick Discovery Navigation Chips
const QUICK_DISCOVERY_CHIPS = [
  { label: 'All Objects', href: '/objects' },
  { label: 'Textiles', href: '/categories/textiles-handloom' },
  { label: 'Home', href: '/categories/home-living' },
  { label: 'Jewellery', href: '/categories/jewellery-ornaments' },
  { label: 'Pottery', href: '/categories/clay-ceramics' },
  { label: 'Bamboo & Cane', href: '/categories/bamboo-cane' },
  { label: 'Wood', href: '/categories/turned-wood-lacquer' },
  { label: 'Metal', href: '/categories/metals-forge' },
  { label: 'Art & Decor', href: '/categories/folk-art' },
];

// 6 Curated Craft Disciplines for Editorial Discovery
const CRAFT_DISCIPLINES = [
  {
    title: 'Textiles',
    slug: 'textiles-handloom',
    descriptor: 'Ajrakh Blocks · Pashmina · Jamdani Muslin',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop',
    spanClass: 'lg:col-span-7 aspect-[16/10] sm:aspect-[16/9]',
  },
  {
    title: 'Pottery',
    slug: 'clay-ceramics',
    descriptor: 'Jaipur Blue Quartz · Kutch Terracotta',
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800&auto=format&fit=crop',
    spanClass: 'lg:col-span-5 aspect-[4/5] sm:aspect-[16/11] lg:aspect-auto',
  },
  {
    title: 'Bamboo & Cane',
    slug: 'bamboo-cane',
    descriptor: 'Majuli Basketry · Riverine Fish Traps',
    image: '/images/intent-home.jpg',
    spanClass: 'lg:col-span-4 aspect-[4/5]',
  },
  {
    title: 'Woodcraft',
    slug: 'turned-wood-lacquer',
    descriptor: 'Channapatna Lathe · Walnut Woodwork',
    image: '/images/maker-channapatna-lathe.jpg',
    spanClass: 'lg:col-span-4 aspect-[4/5]',
  },
  {
    title: 'Metalwork',
    slug: 'metals-forge',
    descriptor: 'Bastar Lost-Wax Bronze · Sarthebari Kansa',
    image: '/images/maker-bastar-dhokra.jpg',
    spanClass: 'lg:col-span-4 aspect-[4/5]',
  },
  {
    title: 'Jewellery',
    slug: 'jewellery-ornaments',
    descriptor: 'Silver Filigree · Terracotta · Brass Amulets',
    image: '/images/intent-celebrations.jpg',
    spanClass: 'lg:col-span-12 aspect-[16/7] sm:aspect-[21/8]',
  },
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
    name: 'Kutch',
    slug: 'kutch',
    crafts: 'Ajrakh · Bandhani · Terracotta',
    image: '/images/maker-ismail-ajrakh.jpg',
  },
  {
    name: 'Kashmir',
    slug: 'kashmir',
    crafts: 'Pashmina · Sozni · Walnut Wood',
    image: '/images/maker-kashmir-sozni.jpg',
  },
  {
    name: 'Rajasthan',
    slug: 'kutch',
    crafts: 'Blue Pottery · Miniature · Block Print',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'West Bengal',
    slug: 'assam',
    crafts: 'Jamdani · Kantha · Terracotta',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop',
  },
];

export default function HomePage() {
  // Editorial featured products: 1 primary centerpiece + 3 supporting items
  const heroProduct = MOCK_PRODUCTS[0];
  const supportingProducts = [MOCK_PRODUCTS[1], MOCK_PRODUCTS[5], MOCK_PRODUCTS[3]].filter(Boolean);

  // Fresh finds for "Just Discovered"
  const justDiscoveredProducts = [MOCK_PRODUCTS[4], MOCK_PRODUCTS[2], MOCK_PRODUCTS[0]].filter(Boolean);

  const primaryStory = MOCK_STORIES[0];

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* =========================================================
          1. HERO — IMMEDIATE PURPOSE & IDENTITY
          Eyebrow: THE LIVING LINEAGE OF INDIAN CRAFT
          Main Title: Discover objects made by hand.
          Primary CTA: EXPLORE OBJECTS -> /objects
          Secondary CTA: MEET THE MAKERS -> /makers
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
                <span>The Living Lineage of Indian Craft</span>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <span
                  lang="as"
                  className="font-assamese italic text-xl sm:text-2xl text-[#8C8477] tracking-[0.14em] block select-none animate-assamese-signature"
                >
                  {ASSAMESE_BRAND_WORD}
                </span>
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[#191817] leading-[1.08] tracking-tight">
                  Discover objects<br />made by hand.
                </h1>
              </div>

              <p className="text-base sm:text-lg text-[#5C574F] font-light leading-relaxed max-w-xl">
                Shop authentic handmade objects from independent Indian artisans — each with a story, a place, and a maker behind it.
              </p>

              {/* Requirement CTAs: Primary = EXPLORE OBJECTS, Secondary = MEET THE MAKERS */}
              <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
                <Link href="/objects">
                  <Button size="lg" className="rounded-none tracking-wider text-xs uppercase px-9 bg-[#191817] text-white hover:bg-[#33302D] shadow-sm">
                    Explore Objects
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
                  <p className="text-[#787268] mt-0.5">Handmade Lineage</p>
                </div>
                <div>
                  <p className="font-serif text-xl sm:text-2xl text-[#191817]">GI Tagged</p>
                  <p className="text-[#787268] mt-0.5">Origin Certified</p>
                </div>
                <div>
                  <p className="font-serif text-xl sm:text-2xl text-[#191817]">Direct</p>
                  <p className="text-[#787268] mt-0.5">Artisan Patronage</p>
                </div>
              </div>
            </div>

            {/* Asymmetric Studio Working Visual */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] sm:aspect-[3/3.3] w-full rounded-sm overflow-hidden bg-[#ECE5DC] shadow-sm">
                <Image
                  src="/images/hero-craft-hands.jpg"
                  alt="Master artisan hand-printing organic cotton with carved teakwood blocks in workshop"
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
                    Master block printer at the mineral dye table
                  </p>
                  <p className="text-xs text-[#DDD6CB] font-light">
                    Kutch, Gujarat • Carved Teakwood & Natural Pigments
                  </p>
                </div>
              </div>

              {/* Overlapping Tactile Detail Note */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 bg-[#FAF8F5] p-5 border border-[#E5DFD4] shadow-md max-w-xs space-y-1.5">
                <p className="text-[10px] uppercase tracking-wider text-[#B8532F] font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Unhurried Making</span>
                </p>
                <p className="text-xs text-[#4F4B45] leading-relaxed">
                  Every textile and metalwork represents between 14 to 120 days of focused hand labor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. QUICK DISCOVERY — COMPACT FAST LANE TO PRODUCTS
          Title: EXPLORE
          Clean horizontal links/chips navigation giving customers
          an immediate 1-click route to products.
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
            <span>View all</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* =========================================================
          3. FEATURED OBJECTS — COMMERCIALLY PRIMARY
          Moved higher! Makes customer think: "I can actually shop here."
          Title: FEATURED OBJECTS
          Supporting text: Objects worth knowing.
          Composition: 1 large featured product + 3 smaller supporting products.
          Bottom CTA: EXPLORE ALL OBJECTS -> /objects
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[#191817] pb-5 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#191817]">
              Featured Objects
            </h2>
            <p className="text-sm text-[#787268] mt-1 font-light">
              Objects worth knowing.
            </p>
          </div>
          <Link
            href="/objects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#191817] hover:text-[#B8532F] transition-colors"
          >
            <span>Explore All Objects ({MOCK_PRODUCTS.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Editorial Product Grid: 1 Large Spotlight (7 cols) + 3 Supporting Items (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Large Featured Product */}
          {heroProduct && (
            <article className="lg:col-span-7 group border border-[#E5DFD4] bg-[#FAF8F5] p-6 sm:p-8 rounded-sm hover:border-[#191817] transition-all">
              <Link
                href={`/objects/${heroProduct.slug}`}
                className="relative aspect-[16/11] sm:aspect-[16/10] w-full block overflow-hidden bg-[#ECE5DC] rounded-sm"
              >
                <Image
                  src={heroProduct.media[0]?.url || ''}
                  alt={heroProduct.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute top-4 left-4 bg-[#FAF8F5]/95 px-3 py-1 text-[10px] uppercase tracking-widest text-[#B8532F] font-semibold border border-[#E5DFD4]">
                  Featured Spotlight
                </div>
              </Link>

              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between text-xs text-[#8C8477]">
                  <span className="uppercase tracking-widest font-semibold text-[#B8532F]">
                    {heroProduct.specifications?.regionOfOrigin}
                  </span>
                  <span className="font-serif text-2xl text-[#191817]">
                    {APP_CONFIG.currencySymbol}
                    {heroProduct.basePrice.toLocaleString('en-IN')}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#191817] group-hover:text-[#B8532F] transition-colors leading-snug">
                  <Link href={`/objects/${heroProduct.slug}`}>{heroProduct.title}</Link>
                </h3>

                {heroProduct.artisan && (
                  <p className="text-sm text-[#5C574F]">
                    by{' '}
                    <Link
                      href={`/makers/${heroProduct.artisan.slug}`}
                      className="text-[#191817] font-semibold hover:underline"
                    >
                      {heroProduct.artisan.artisanName}
                    </Link>
                    <span className="text-[#8C8477] ml-1.5">• {heroProduct.artisan.location?.district || heroProduct.artisan.location?.state}</span>
                  </p>
                )}

                <p className="text-sm text-[#6E6962] font-light leading-relaxed line-clamp-2">
                  {heroProduct.shortDescription}
                </p>

                <div className="pt-2">
                  <Link
                    href={`/objects/${heroProduct.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#191817] hover:text-[#B8532F] transition-colors"
                  >
                    <span className="border-b border-[#191817] pb-0.5">View object</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          )}

          {/* 3 Supporting Products */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {supportingProducts.map((product) => {
              const image = product.media[0];
              return (
                <article
                  key={product.id}
                  className="group border border-[#E5DFD4] bg-white p-4 sm:p-5 rounded-sm hover:border-[#191817] transition-all"
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

                    <div className="space-y-1.5 flex-1 min-w-0">
                      <div className="flex items-center justify-between text-xs text-[#8C8477]">
                        <span className="uppercase tracking-widest text-[10px] text-[#B8532F]">
                          {product.specifications?.regionOfOrigin}
                        </span>
                        <span className="font-serif text-base text-[#191817]">
                          {APP_CONFIG.currencySymbol}
                          {product.basePrice.toLocaleString('en-IN')}
                        </span>
                      </div>

                      <h4 className="font-serif text-base sm:text-lg text-[#191817] group-hover:text-[#B8532F] transition-colors leading-snug line-clamp-1">
                        <Link href={`/objects/${product.slug}`}>{product.title}</Link>
                      </h4>

                      {product.artisan && (
                        <p className="text-xs text-[#5C574F] truncate">
                          by{' '}
                          <Link
                            href={`/makers/${product.artisan.slug}`}
                            className="text-[#191817] font-medium hover:underline"
                          >
                            {product.artisan.artisanName}
                          </Link>
                        </p>
                      )}

                      <div className="pt-1">
                        <Link
                          href={`/objects/${product.slug}`}
                          className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider font-semibold text-[#191817] hover:text-[#B8532F]"
                        >
                          <span>View object</span>
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

        {/* Explore all objects CTA banner */}
        <div className="text-center pt-8">
          <Link
            href="/objects"
            className="inline-flex items-center gap-2 font-serif text-base sm:text-lg text-[#191817] hover:text-[#B8532F] border-b border-[#191817] hover:border-[#B8532F] pb-0.5 transition-all"
          >
            <span>Explore all objects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* =========================================================
          4. CRAFT DISCOVERY (EXPLORE CRAFTS)
          Editorial craft category discovery.
          Show only 6 important craft categories with varying visual
          weights and whitespace (NOT 8 identical cards!).
          Each links to /categories/[slug]
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[#191817] pb-5 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#191817]">
              Explore Crafts
            </h2>
            <p className="text-sm text-[#787268] mt-1 font-light">
              Centuries of living technique across primary disciplines.
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

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
          {CRAFT_DISCIPLINES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className={`group relative overflow-hidden rounded-sm bg-[#EFEBE4] block ${cat.spanClass}`}
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

              <div className="absolute inset-0 p-6 sm:p-7 flex flex-col justify-end text-white space-y-1">
                <h3 className="font-serif text-2xl sm:text-3xl text-white group-hover:text-[#FBECE6] transition-colors leading-tight">
                  {cat.title}
                </h3>
                <p className="text-xs text-[#DDD6CB] font-light max-w-md line-clamp-1">
                  {cat.descriptor}
                </p>
                <div className="pt-2 flex items-center text-xs uppercase tracking-wider font-semibold text-white group-hover:text-[#E8A588] transition-colors">
                  <span>Explore craft</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* =========================================================
          5. EDITORIAL CRAFT STORY
          Clearly a STORY section that supports the commerce journey.
          Headline: The Deep Indigo Vats of Kutch
          Short 2-3 line description.
          CTAs: READ THE STORY -> /stories/[slug], SHOP THIS CRAFT -> /objects
          ========================================================= */}
      {primaryStory && (
        <section className="bg-[#0B1323] text-[#FAF8F5] py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Large Story Visual (7 cols) */}
              <div className="lg:col-span-7">
                <div className="group relative aspect-[16/10] sm:aspect-[16/10] w-full overflow-hidden rounded-sm bg-[#162238]">
                  <Image
                    src="/images/story-kutch-indigo.jpg"
                    alt={primaryStory.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
                    <p className="text-[11px] uppercase tracking-widest text-[#E8A588] font-semibold">
                      Living Archive
                    </p>
                    <p className="font-serif text-lg text-white font-normal mt-0.5">
                      Subterranean vats fed with camel milk & jaggery
                    </p>
                  </div>
                </div>
              </div>

              {/* Story Narrative & Marketplace Actions (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#E8A588] font-semibold">
                    <span>Craft Story</span>
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
                    In Ajrakhpur, master dyers feed subterranean microbial fermentation vats with camel milk, jaggery, and crushed Indigofera tinctoria to achieve the legendary celestial midnight blue.
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
                    href="/objects"
                    className="text-xs uppercase tracking-widest font-semibold text-[#E8A588] hover:text-white transition-colors"
                  >
                    Shop this craft →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          6. JUST DISCOVERED — FRESH FINDS
          Title: JUST DISCOVERED
          Supporting text: Fresh finds from makers across India.
          Show 3 products. Every product communicates:
          What it is, Who made it, Price.
          CTA: VIEW ALL OBJECTS -> /objects
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[#191817] pb-5 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#191817]">
              Just Discovered
            </h2>
            <p className="text-sm text-[#787268] mt-1 font-light">
              Fresh finds from makers across India.
            </p>
          </div>
          <Link
            href="/objects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#191817] hover:text-[#B8532F] transition-colors"
          >
            <span>View All Objects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {justDiscoveredProducts.map((item) => {
            const image = item.media[0];
            return (
              <article
                key={item.id}
                className="group border border-[#E5DFD4] bg-white p-5 rounded-sm hover:border-[#191817] transition-all flex flex-col justify-between"
              >
                <div>
                  <Link
                    href={`/objects/${item.slug}`}
                    className="relative aspect-[4/4.5] w-full block overflow-hidden bg-[#ECE5DC] rounded-sm"
                  >
                    {image && (
                      <Image
                        src={image.url}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    )}
                    {item.specifications?.giTagCertified && (
                      <div className="absolute top-3 left-3 bg-[#FAF8F5]/90 px-2 py-0.5 text-[9px] uppercase tracking-widest text-[#B8532F] font-semibold border border-[#E5DFD4]">
                        GI Certified
                      </div>
                    )}
                  </Link>

                  <div className="mt-4 space-y-1.5">
                    <div className="flex items-center justify-between text-xs text-[#8C8477]">
                      <span className="uppercase tracking-widest text-[10px] text-[#B8532F]">
                        {item.specifications?.regionOfOrigin}
                      </span>
                      <span className="font-serif text-lg text-[#191817]">
                        {APP_CONFIG.currencySymbol}
                        {item.basePrice.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <h4 className="font-serif text-xl text-[#191817] group-hover:text-[#B8532F] transition-colors leading-snug">
                      <Link href={`/objects/${item.slug}`}>{item.title}</Link>
                    </h4>

                    {item.artisan && (
                      <p className="text-xs text-[#5C574F]">
                        by{' '}
                        <Link
                          href={`/makers/${item.artisan.slug}`}
                          className="text-[#191817] font-semibold hover:underline"
                        >
                          {item.artisan.artisanName}
                        </Link>
                      </p>
                    )}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F0EBE3] flex items-center justify-between">
                  <span className="text-[11px] text-[#8C8477]">Handmade Edition</span>
                  <Link
                    href={`/objects/${item.slug}`}
                    className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-[#191817] hover:text-[#B8532F]"
                  >
                    <span>View object</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          7. REGIONAL DISCOVERY — COMBINED REGIONS & ASSAM FEATURE
          Title: EXPLORE BY REGION
          Shows 4–5 regions (Assam, Kutch, Kashmir, Rajasthan, West Bengal).
          Assam is featured as an authentic discovery without duplicate
          huge sections.
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[#191817] pb-5 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#191817]">
              Explore by Region
            </h2>
            <p className="text-sm text-[#787268] mt-1 font-light">
              Craft geography shaped by rivers, mineral soils, and localized knowledge.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Spotlight on Assam (5 cols) */}
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
                Featured Region
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

          {/* 4 Supporting Regional Links (7 cols) */}
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
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="min-w-0 space-y-0.5">
                    <h3 className="font-serif text-xl text-[#191817] group-hover:text-[#B8532F] transition-colors">
                      {reg.name}
                    </h3>
                    <p className="text-xs text-[#787268] truncate">
                      {reg.crafts}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F2EDE4] flex justify-end">
                  <Link
                    href={`/regions/${reg.slug}`}
                    className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider font-semibold text-[#191817] hover:text-[#B8532F]"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          8. FINAL CTA — ACTION ORIENTED & VISUALLY QUIET
          Title: FIND SOMETHING WITH A STORY.
          Supporting text: Explore handmade objects and meet the people who make them.
          CTA: EXPLORE OBJECTS -> /objects
          ========================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-center space-y-5 border-t border-[#E5DFD4]">
        <h2 className="font-serif text-3xl sm:text-5xl text-[#191817] leading-tight">
          Find something with a story.
        </h2>
        <p className="text-sm sm:text-base text-[#6E6962] font-light max-w-lg mx-auto leading-relaxed">
          Explore handmade objects and meet the people who make them.
        </p>
        <div className="pt-3 flex justify-center items-center">
          <Link href="/objects">
            <Button size="lg" className="rounded-none tracking-wider text-xs uppercase px-9 bg-[#191817] text-white hover:bg-[#33302D]">
              Explore Objects
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
