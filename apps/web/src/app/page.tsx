import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MOCK_ARTISANS, MOCK_PRODUCTS, MOCK_STORIES } from '@/data/mock-data';
import { ASSAMESE_BRAND_WORD } from '@karigar/config';
import { MakerPreview } from '@/components/makers/MakerPreview';
import { EditorialProductShowcase } from '@/components/products/EditorialProductShowcase';
import { AssamFeatureSection } from '@/components/home/AssamFeatureSection';
import { HandcraftedHeroArtwork } from '@/components/layout/HandcraftedHeroArtwork';
import { Button } from '@karigar/ui';
import { ArrowRight, Sparkles, Clock } from 'lucide-react';

const INTENT_CATEGORIES = [
  {
    id: 'gifting',
    title: 'For Gifting',
    subtitle: 'Heirloom gifts with genuine maker lineage',
    href: '/collections/curated-gifting',
    badge: 'Curated Heritage',
    image: '/images/intent-gifting.jpg',
    spanClass: 'lg:col-span-7 aspect-[16/11] sm:aspect-[16/10]',
  },
  {
    id: 'home',
    title: 'For Your Home',
    subtitle: 'Tactile brassware, hand-knotted weaves, and studio ceramics',
    href: '/collections/living-spaces',
    badge: 'Living & Interior',
    image: '/images/intent-home.jpg',
    spanClass: 'lg:col-span-5 aspect-[4/5] sm:aspect-[4/4.5]',
  },
  {
    id: 'celebrations',
    title: 'For Celebrations',
    subtitle: 'Festive silks, ceremonial brass lamps, and artisanal keepsakes',
    href: '/collections/celebration-crafts',
    badge: 'Festive Rituals',
    image: '/images/intent-celebrations.jpg',
    spanClass: 'lg:col-span-5 aspect-[4/5] sm:aspect-[4/4.5]',
  },
  {
    id: 'everyday',
    title: 'Everyday Objects',
    subtitle: 'Terracotta dinnerware, wooden spoons, and organic cotton stoles',
    href: '/collections/daily-ritual',
    badge: 'Daily Craft',
    image: '/images/intent-everyday.jpg',
    spanClass: 'lg:col-span-7 aspect-[16/11] sm:aspect-[16/10]',
  },
];

const REGIONAL_DISCOVERY = [
  {
    region: 'Assam',
    crafts: 'Muga · Bamboo · Bell Metal',
    slug: 'assam',
    tagline: 'River Silk & Forest Basketry',
  },
  {
    region: 'Kutch',
    crafts: 'Ajrakh · Embroidery · Weaving',
    slug: 'kutch',
    tagline: 'Desert Indigo & Mineral Resist',
  },
  {
    region: 'Kashmir',
    crafts: 'Papier-mâché · Carpet · Woodcraft',
    slug: 'kashmir',
    tagline: 'Himalayan Cashmere & Sozni',
  },
  {
    region: 'Rajasthan',
    crafts: 'Block Print · Blue Pottery · Leather',
    slug: 'rajasthan',
    tagline: 'Quartz Clays & Natural Pigments',
  },
];

export default function HomePage() {
  const featuredMakers = MOCK_ARTISANS.slice(0, 4);
  const featuredProducts = MOCK_PRODUCTS.slice(0, 3);
  const primaryStory = MOCK_STORIES[0];

  return (
    <div className="space-y-24 sm:space-y-36 pb-24">
      {/* =========================================================
          1. HERO SECTION
          Editorial composition with authentic hands-at-work photography
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

        {/* Left-side Handcrafted Textile Artwork — decorative layer */}
        <HandcraftedHeroArtwork opacity={0.7} topOffset="4%" />

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

              <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
                <Link href="/artisans">
                  <Button size="lg" className="rounded-none tracking-wider text-xs uppercase px-8">
                    Explore Makers
                  </Button>
                </Link>
                <Link href="/products">
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-none tracking-wider text-xs uppercase px-8 border-[#191817]"
                  >
                    Explore Objects
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

            {/* Asymmetric Visual Composition — Authentic Craft Working Visual */}
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

              {/* Overlapping tactile snippet */}
              <div className="hidden sm:block absolute -bottom-8 -left-8 bg-[#FAF8F5] p-5 border border-[#E5DFD4] shadow-md max-w-xs space-y-1.5">
                <p className="text-[10px] uppercase tracking-wider text-[#B8532F] font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Unhurried Making</span>
                </p>
                <p className="text-xs text-[#4F4B45] leading-relaxed">
                  Every textile and metalwork represents between 14 to 120 days of focused hand execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. ASSAM FEATURE SECTION
          Contemporary editorial tribute to Assamese craft identity
          ========================================================= */}
      <AssamFeatureSection />

      {/* =========================================================
          3. FEATURED MASTER ARTISANS (Alternating Editorial Chapters)
          People First: 01, 02, 03, 04 alternating layouts, zero boxed cards
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#191817] pb-6 mb-4 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
              The Keepers of Craft
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#191817] mt-1">
              Featured Master Artisans
            </h2>
          </div>
          <Link
            href="/artisans"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#191817] hover:text-[#B8532F] transition-colors"
          >
            <span>View All Verified Masters</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="divide-y divide-[#E5DFD4]">
          {featuredMakers.map((artisan, index) => (
            <MakerPreview
              key={artisan.id}
              artisan={artisan}
              index={index}
              priority={index === 0}
            />
          ))}
        </div>
      </section>

      {/* =========================================================
          4. EXPLORE BY INTENT
          Editorial visual discovery: image-led, varied sizes, no card boxes
          ========================================================= */}
      <section className="bg-[#FAF8F5] py-16 sm:py-24 border-y border-[#E5DFD4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
              Purpose & Occasion
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#191817]">
              Explore by Intent
            </h2>
            <p className="text-base text-[#6E6962] font-light leading-relaxed">
              Find objects created for contemplative living, celebrations, and enduring daily connection.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {INTENT_CATEGORIES.map((intent) => (
              <Link
                key={intent.id}
                href={intent.href}
                className={`group relative overflow-hidden rounded-sm bg-[#EFEBE4] block ${intent.spanClass}`}
              >
                <Image
                  src={intent.image}
                  alt={intent.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-95" />
                <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end text-white space-y-2">
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#E8A588] font-semibold">
                    {intent.badge}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-4xl text-white group-hover:text-[#FBECE6] transition-colors leading-tight">
                    {intent.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#DDD6CB] font-light max-w-md line-clamp-2">
                    {intent.subtitle}
                  </p>
                  <div className="pt-2 flex items-center text-xs uppercase tracking-wider font-semibold text-white group-hover:text-[#E8A588] transition-colors">
                    <span>Explore collection</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          5. CRAFT STORIES (Immersive Editorial Break)
          Magazine feature with dominant imagery & deep dark indigo canvas
          ========================================================= */}
      {primaryStory && (
        <section className="bg-[#0B1323] text-[#FAF8F5] py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Dominant Story Imagery (7 cols) */}
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

              {/* Story Narrative (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#E8A588]">
                    <span>Craft Chronicle</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {primaryStory.readTimeMinutes} min read
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                    {primaryStory.title}
                  </h2>

                  <p className="text-base text-[#C5BFB5] font-light leading-relaxed">
                    {primaryStory.subtitle}
                  </p>
                </div>

                <blockquote className="border-l-2 border-[#E8A588] pl-4 italic text-base sm:text-lg text-[#F4EFEA] font-light leading-relaxed">
                  &ldquo;Machine prints apply color to the surface of dead cloth. Ajrakh penetrates the heart of the yarn.&rdquo;
                </blockquote>

                <div className="pt-2 flex flex-wrap items-center gap-5">
                  <Link href={`/stories/${primaryStory.slug}`}>
                    <Button
                      variant="secondary"
                      size="md"
                      className="rounded-none tracking-wider text-xs uppercase px-7 bg-[#FAF8F5] text-[#191817] hover:bg-white"
                    >
                      Read Chronicle
                    </Button>
                  </Link>
                  <Link
                    href={`/artisans/${primaryStory.artisanSlug}`}
                    className="text-xs uppercase tracking-widest font-semibold text-[#E8A588] hover:text-white transition-colors"
                  >
                    Meet Dr. Ismail Khatri →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          6. FEATURED OBJECTS / PRODUCTS (Asymmetric Layout)
          1 dominant featured piece + 2 supporting pieces, clean whitespace
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#191817] pb-6 mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
              Heirloom Craft
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#191817] mt-1">
              Featured Objects
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#191817] hover:text-[#B8532F] transition-colors"
          >
            <span>Browse All Creations</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <EditorialProductShowcase products={featuredProducts} />
      </section>

      {/* =========================================================
          7. REGIONAL CRAFT TRADITIONS (Visual Discovery)
          Crisp, non-encyclopedic exploration of regional craft cultures
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-[#E5DFD4] pt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
                Geographies of Making
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#191817] mt-1">
                Regional Craft Traditions
              </h2>
            </div>
            <p className="text-xs text-[#787268] max-w-sm">
              Distinct soil chemistries, indigenous fiber cultivars, and living techniques passed quietly in courtyard ateliers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {REGIONAL_DISCOVERY.map((item) => (
              <Link
                key={item.slug}
                href={`/artisans?region=${item.slug}`}
                className="group block border-t border-[#191817] pt-5 hover:border-[#B8532F] transition-colors"
              >
                <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-[#8C8477] mb-2">
                  <span>{item.tagline}</span>
                  <ArrowRight className="w-3 h-3 text-[#191817] group-hover:text-[#B8532F] group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#191817] group-hover:text-[#B8532F] transition-colors">
                  {item.region}
                </h3>
                <p className="text-xs text-[#5C574F] tracking-wide mt-2 font-light">
                  {item.crafts}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          8. FINAL EDITORIAL CTA / PATRONAGE
          Quiet, dignified dialogue with living heritage
          ========================================================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 text-center space-y-6">
        <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
          Direct Atelier Patronage
        </span>
        <h2 className="font-serif text-4xl sm:text-6xl text-[#191817] leading-tight">
          Meet the people behind the things you love.
        </h2>
        <p className="text-base sm:text-lg text-[#6E6962] font-light max-w-xl mx-auto leading-relaxed">
          Begin a dialogue with generational craft masters. Commission custom family heirlooms,
          inquire into archival techniques, or support living Indian heritage directly.
        </p>
        <div className="pt-4 flex flex-wrap justify-center items-center gap-5">
          <Link href="/artisans">
            <Button size="lg" className="rounded-none tracking-wider text-xs uppercase px-8">
              Explore All Artisans
            </Button>
          </Link>
          <Link href="/artisans">
            <Button
              variant="outline"
              size="lg"
              className="rounded-none tracking-wider text-xs uppercase px-8 border-[#191817]"
            >
              Request Custom Work
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
