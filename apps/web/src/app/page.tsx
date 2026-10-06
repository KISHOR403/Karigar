import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MOCK_PRODUCTS, MOCK_STORIES } from '@/data/mock-data';
import { ASSAMESE_BRAND_WORD, APP_CONFIG } from '@karigar/config';
import { AssamFeatureSection } from '@/components/home/AssamFeatureSection';
import { Button } from '@karigar/ui';
import { ArrowRight, Sparkles, Clock, MapPin } from 'lucide-react';

const EDITORIAL_CATEGORIES = [
  {
    title: 'Textiles & Handloom',
    slug: 'textiles-handloom',
    crafts: 'Ajrakh Blocks · Pashmina · Jamdani Muslin',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop',
    spanClass: 'lg:col-span-8 aspect-[16/10] sm:aspect-[16/9]',
    badge: 'Heritage Weaves',
  },
  {
    title: 'Pottery & Ceramics',
    slug: 'clay-ceramics',
    crafts: 'Jaipur Blue Quartz · Kutch Terracotta',
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800&auto=format&fit=crop',
    spanClass: 'lg:col-span-4 aspect-[4/5] sm:aspect-[16/12] lg:aspect-auto',
    badge: 'Mineral Earth',
  },
  {
    title: 'Bamboo & Cane',
    slug: 'bamboo-cane',
    crafts: 'Majuli Basketry · Riverine Fish Traps',
    image: '/images/intent-home.jpg',
    spanClass: 'lg:col-span-4 aspect-[4/5]',
    badge: 'Forest Cultivars',
  },
  {
    title: 'Woodcraft & Lacquer',
    slug: 'turned-wood-lacquer',
    crafts: 'Channapatna Lathe · Walnut Woodwork',
    image: '/images/maker-channapatna-lathe.jpg',
    spanClass: 'lg:col-span-4 aspect-[4/5]',
    badge: 'Turned Timber',
  },
  {
    title: 'Metals & Forge',
    slug: 'metals-forge',
    crafts: 'Bastar Lost-Wax Bronze · Sarthebari Kansa',
    image: '/images/maker-bastar-dhokra.jpg',
    spanClass: 'lg:col-span-4 aspect-[4/5]',
    badge: 'Tribal Metallurgy',
  },
  {
    title: 'Jewellery & Adornment',
    slug: 'jewellery-ornaments',
    crafts: 'Silver Filigree · Terracotta · Brass Amulets',
    image: '/images/intent-celebrations.jpg',
    spanClass: 'lg:col-span-4 aspect-[4/5] sm:aspect-[16/11]',
    badge: 'Sacred Ornament',
  },
  {
    title: 'Home Objects',
    slug: 'home-living',
    crafts: 'Hand-Hammered Urulis · Studio Ceramics',
    image: '/images/intent-gifting.jpg',
    spanClass: 'lg:col-span-4 aspect-[4/5] sm:aspect-[16/11]',
    badge: 'Sanctuary Living',
  },
  {
    title: 'Art & Folk Wall Decor',
    slug: 'folk-art',
    crafts: 'Madhubani Scrolls · Dhokra Relief Casts',
    image: '/images/maker-ismail-ajrakh.jpg',
    spanClass: 'lg:col-span-4 aspect-[4/5] sm:aspect-[16/11]',
    badge: 'Living Murals',
  },
];

export default function HomePage() {
  const featuredProducts = MOCK_PRODUCTS.slice(0, 5);
  const newlyDiscovered = MOCK_PRODUCTS.slice(3, 6);
  const primaryStory = MOCK_STORIES[0];

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* =========================================================
          1. HERO
          Headline: Discover things made by hand.
          Primary CTA: Explore Objects -> /objects
          Secondary CTA: Explore Categories -> /categories
          Assamese watermark, studio craft photography, editorial typography
          ========================================================= */}
      <section className="relative pt-8 sm:pt-16 pb-12 overflow-hidden">
        {/* Subtle Assamese Watermark Typography */}
        <div
          aria-hidden="true"
          lang="as"
          className="absolute -left-4 sm:-left-8 lg:-left-12 -top-6 sm:-top-10 lg:-top-14 font-assamese text-7xl sm:text-[10rem] md:text-[13rem] lg:text-[16rem] xl:text-[19rem] text-[#191817] opacity-[0.018] sm:opacity-[0.022] lg:opacity-[0.028] pointer-events-none select-none z-0 tracking-tight leading-none animate-assamese-watermark whitespace-nowrap"
        >
          {ASSAMESE_BRAND_WORD}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Editorial Lead Copy */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8532F]" />
                <span>The Living Lineage of Indian Craft</span>
              </div>

              <div className="space-y-2.5 sm:space-y-3">
                <span
                  lang="as"
                  className="font-assamese italic text-xl sm:text-2xl text-[#8C8477] tracking-[0.14em] block select-none animate-assamese-signature"
                >
                  {ASSAMESE_BRAND_WORD}
                </span>
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[#191817] leading-[1.08] tracking-tight">
                  Discover things made by hand.
                </h1>
              </div>

              <p className="text-lg sm:text-xl text-[#5C574F] font-light leading-relaxed max-w-xl">
                Meet independent master artisans and discover objects shaped by natural pigments,
                hand-carved teakwood, and centuries of collective cultural memory.
              </p>

              {/* Requirement CTAs: Primary = Explore Objects, Secondary = Explore Categories */}
              <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
                <Link href="/objects">
                  <Button size="lg" className="rounded-none tracking-wider text-xs uppercase px-8">
                    Explore Objects
                  </Button>
                </Link>
                <Link href="/categories">
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-none tracking-wider text-xs uppercase px-8 border-[#191817]"
                  >
                    Explore Categories
                  </Button>
                </Link>
              </div>

              {/* Atelier Pledge stats */}
              <div className="pt-8 border-t border-[#E5DFD4] grid grid-cols-3 gap-6 text-xs">
                <div>
                  <p className="font-serif text-2xl text-[#191817]">100%</p>
                  <p className="text-[#787268] mt-0.5">Handcrafted Lineage</p>
                </div>
                <div>
                  <p className="font-serif text-2xl text-[#191817]">GI Tagged</p>
                  <p className="text-[#787268] mt-0.5">Appellation Certified</p>
                </div>
                <div>
                  <p className="font-serif text-2xl text-[#191817]">Zero</p>
                  <p className="text-[#787268] mt-0.5">Industrial Mass Production</p>
                </div>
              </div>
            </div>

            {/* Asymmetric Studio Working Visual */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] sm:aspect-[3/3.5] w-full rounded-sm overflow-hidden bg-[#ECE5DC] shadow-sm">
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

              {/* Overlapping tactile badge */}
              <div className="hidden sm:block absolute -bottom-8 -left-8 bg-[#FAF8F5] p-5 border border-[#E5DFD4] shadow-md max-w-xs space-y-1.5">
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
          2. SHOP BY CATEGORY
          Editorial category discovery with varying visual sizes,
          whitespace, rich imagery & subtle hover effects.
          Links to /categories/[slug]
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[#191817] pb-6 mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
              Taxonomy of Craft
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#191817] mt-1">
              Shop by Category
            </h2>
          </div>
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#191817] hover:text-[#B8532F] transition-colors"
          >
            <span>Explore All 8 Disciplines</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
          {EDITORIAL_CATEGORIES.map((cat) => (
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-white space-y-1.5">
                <span className="text-[10px] uppercase tracking-widest text-[#E8A588] font-semibold">
                  {cat.badge}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white group-hover:text-[#FBECE6] transition-colors leading-tight">
                  {cat.title}
                </h3>
                <p className="text-xs text-[#DDD6CB] font-light max-w-md line-clamp-1">
                  {cat.crafts}
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
          3. FEATURED OBJECTS
          Product discovery moved much earlier!
          Shows 4–6 products in an editorial grid.
          Shows: Product image, Product name, Maker, Location, Price.
          Links to /objects/[slug] & View all objects -> /objects
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[#191817] pb-6 mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
              Heirloom Craft
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#191817] mt-1">
              Featured Objects
            </h2>
          </div>
          <Link
            href="/objects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#191817] hover:text-[#B8532F] transition-colors"
          >
            <span>View All Objects ({MOCK_PRODUCTS.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Editorial Product Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Main Dominant Featured Object (7 cols) */}
          {featuredProducts[0] && (
            <div className="lg:col-span-7 group border border-[#E5DFD4] bg-[#FAF8F5] p-6 sm:p-8 rounded-sm hover:border-[#191817] transition-all">
              <Link
                href={`/objects/${featuredProducts[0].slug}`}
                className="relative aspect-[16/11] sm:aspect-[16/10] w-full block overflow-hidden bg-[#ECE5DC] rounded-sm"
              >
                <Image
                  src={featuredProducts[0].media[0]?.url || ''}
                  alt={featuredProducts[0].title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute top-4 left-4 bg-[#FAF8F5]/95 px-3 py-1 text-[10px] uppercase tracking-widest text-[#B8532F] font-semibold border border-[#E5DFD4]">
                  Masterpiece Spotlight
                </div>
              </Link>

              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between text-xs text-[#8C8477]">
                  <span className="uppercase tracking-widest font-semibold text-[#B8532F]">
                    {featuredProducts[0].specifications.regionOfOrigin}
                  </span>
                  <span className="font-serif text-2xl text-[#191817]">
                    {APP_CONFIG.currencySymbol}
                    {featuredProducts[0].basePrice.toLocaleString('en-IN')}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#191817] group-hover:text-[#B8532F] transition-colors leading-snug">
                  <Link href={`/objects/${featuredProducts[0].slug}`}>{featuredProducts[0].title}</Link>
                </h3>

                {featuredProducts[0].artisan && (
                  <p className="text-sm text-[#5C574F]">
                    Handcrafted by{' '}
                    <Link
                      href={`/makers/${featuredProducts[0].artisan.slug}`}
                      className="text-[#191817] font-semibold hover:underline"
                    >
                      {featuredProducts[0].artisan.artisanName}
                    </Link>
                    <span className="text-[#8C8477] ml-1.5">• {featuredProducts[0].artisan.location?.state}</span>
                  </p>
                )}

                <p className="text-sm text-[#6E6962] font-light leading-relaxed line-clamp-2">
                  {featuredProducts[0].shortDescription}
                </p>

                <div className="pt-2">
                  <Link
                    href={`/objects/${featuredProducts[0].slug}`}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#191817] hover:text-[#B8532F] transition-colors"
                  >
                    <span className="border-b border-[#191817] pb-0.5">View Creation & Provenance</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* 4 Supporting Products Grid (5 cols: 2x2 grid) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 sm:gap-8">
            {featuredProducts.slice(1, 5).map((product) => {
              const image = product.media[0];
              return (
                <article
                  key={product.id}
                  className="group border border-[#E5DFD4] bg-white p-4 sm:p-5 rounded-sm hover:border-[#191817] transition-all flex flex-col justify-between"
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

                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between text-xs text-[#8C8477]">
                        <span className="uppercase tracking-widest text-[10px]">
                          {product.specifications.regionOfOrigin}
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
                        <p className="text-xs text-[#5C574F]">
                          by{' '}
                          <Link
                            href={`/makers/${product.artisan.slug}`}
                            className="text-[#191817] font-medium hover:underline"
                          >
                            {product.artisan.artisanName}
                          </Link>
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* View all objects CTA link */}
        <div className="text-center pt-10">
          <Link
            href="/objects"
            className="inline-flex items-center gap-2 font-serif text-lg sm:text-xl text-[#191817] hover:text-[#B8532F] border-b border-[#191817] hover:border-[#B8532F] pb-1 transition-all"
          >
            <span>View all objects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* =========================================================
          4. CRAFT STORY
          THE DEEP INDIGO VATS OF KUTCH
          Large visual, short description, pull quote
          CTAs: Read the story -> /stories/[slug], Meet the Maker ->, Shop This Craft ->
          ========================================================= */}
      {primaryStory && (
        <section className="bg-[#0B1323] text-[#FAF8F5] py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between border-b border-[#22314D] pb-6 mb-12">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#E8A588] font-semibold">
                  Craft Chronicle
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl text-white mt-1">
                  The Deep Indigo Vats of Kutch
                </h2>
              </div>
              <Link
                href="/stories"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#E8A588] hover:text-white transition-colors"
              >
                <span>All Chronicles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Large Story Visual (7 cols) */}
              <div className="lg:col-span-7">
                <div className="group relative aspect-[16/10] sm:aspect-[16/10.5] w-full overflow-hidden rounded-sm bg-[#162238]">
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
                      Fermentation Archive
                    </p>
                    <p className="font-serif text-lg text-white font-normal mt-0.5">
                      Subterranean vats fed with camel milk & jaggery
                    </p>
                  </div>
                </div>
              </div>

              {/* Story Narrative & Market Paths (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#E8A588]">
                    <span>Living Technique</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {primaryStory.readTimeMinutes} min read
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-white leading-tight">
                    {primaryStory.title}
                  </h3>

                  <p className="text-base text-[#C5BFB5] font-light leading-relaxed">
                    {primaryStory.subtitle}
                  </p>
                </div>

                <blockquote className="border-l-2 border-[#E8A588] pl-4 italic text-base sm:text-lg text-[#F4EFEA] font-light leading-relaxed">
                  &ldquo;Machine prints apply color to the surface of dead cloth. Ajrakh penetrates the heart of the yarn.&rdquo;
                </blockquote>

                {/* Explicit connected paths leading back into the marketplace */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
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
                    href={`/makers/${primaryStory.artisanSlug}`}
                    className="text-xs uppercase tracking-widest font-semibold text-[#E8A588] hover:text-white transition-colors"
                  >
                    Meet the Maker →
                  </Link>
                  <Link
                    href="/objects"
                    className="text-xs uppercase tracking-widest font-semibold text-[#FAF8F5] hover:text-[#E8A588] transition-colors ml-2"
                  >
                    Shop This Craft →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          5. NEW / TRENDING OBJECTS (NEWLY DISCOVERED)
          Horizontal curated product rail / asymmetric cards.
          Curated selection directly from artisan ateliers.
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[#191817] pb-6 mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
              Recent Studio Editions
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#191817] mt-1">
              Newly Discovered
            </h2>
          </div>
          <p className="text-xs text-[#787268] max-w-sm">
            Unique single-edition and limited batch creations just arrived from certified master courtyards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newlyDiscovered.map((item) => {
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
                      <span className="uppercase tracking-widest text-[10px]">
                        {item.specifications.regionOfOrigin}
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
                        Handcrafted by{' '}
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
                  <span className="text-[11px] text-[#8C8477]">1 of 1 Edition</span>
                  <Link
                    href={`/objects/${item.slug}`}
                    className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-[#191817] hover:text-[#B8532F]"
                  >
                    <span>Acquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          6. FROM ASSAM
          Premium editorial feature highlighting Assamese craftsmanship
          Strong single visual, Sualkuchi Muga, Sarthebari Bell Metal, Majuli
          CTA: Explore Assam -> /regions/assam
          ========================================================= */}
      <AssamFeatureSection />

      {/* =========================================================
          7. FINAL CTA
          Discover something made by hand.
          [ Explore Objects ] -> /objects
          ========================================================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center space-y-6">
        <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
          Direct Atelier Patronage
        </span>
        <h2 className="font-serif text-4xl sm:text-6xl text-[#191817] leading-tight">
          Discover something made by hand.
        </h2>
        <p className="text-base sm:text-lg text-[#6E6962] font-light max-w-xl mx-auto leading-relaxed">
          Begin a dialogue with generational craft masters. Collect heirloom objects shaped
          by patience, living culture, and human hands.
        </p>
        <div className="pt-4 flex justify-center items-center">
          <Link href="/objects">
            <Button size="lg" className="rounded-none tracking-wider text-xs uppercase px-10">
              Explore Objects
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
