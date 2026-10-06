import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MOCK_ARTISANS, MOCK_PRODUCTS, MOCK_STORIES } from '@/data/mock-data';
import { ASSAMESE_BRAND_WORD } from '@karigar/config';
import { MakerPreview } from '@/components/makers/MakerPreview';
import { EditorialProductShowcase } from '@/components/products/EditorialProductShowcase';
import { AssamFeatureSection } from '@/components/home/AssamFeatureSection';
import { Button } from '@karigar/ui';
import { ArrowRight, Sparkles, Clock } from 'lucide-react';

const SHOP_BY_INTENT = [
  {
    id: 'home',
    title: 'For Home',
    tagline: 'Sanctuary & Living',
    description: 'Tactile brassware, studio ceramics, and handwoven textiles that infuse spaces with enduring warmth.',
    image: '/images/intent-home.jpg',
    href: '/products?category=home',
  },
  {
    id: 'gifting',
    title: 'For Gifting',
    tagline: 'Heirloom & Ceremonial',
    description: 'Timeless creations certified with master provenance and generational craft lineage.',
    image: '/images/intent-gifting.jpg',
    href: '/collections',
  },
  {
    id: 'personal',
    title: 'For You',
    tagline: 'Adornment & Textiles',
    description: 'Pure Pashmina stoles, botanical Ajrakh modal silks, and intimate objects to live with daily.',
    image: '/images/intent-everyday.jpg',
    href: '/products?category=textiles',
  },
  {
    id: 'custom',
    title: 'Custom',
    tagline: 'Atelier Commissions',
    description: 'Direct collaboration with national award-winning artisans for bespoke sizes and family heirlooms.',
    image: '/images/intent-celebrations.jpg',
    href: '/artisans',
  },
];

const CRAFT_DISCIPLINES = [
  {
    name: 'Textiles',
    summary: 'Ajrakh resist blocks, Pashmina cashmeres, Jamdani muslins & Chanderi weaves',
    href: '/products?category=textiles',
    count: '24 Objects',
    origin: 'Gujarat · Kashmir · Bengal',
  },
  {
    name: 'Pottery',
    summary: 'Jaipur quartz blue pottery, Kutch terracotta & Longpi black serpentine clay',
    href: '/products?category=pottery',
    count: '14 Objects',
    origin: 'Rajasthan · Gujarat · Manipur',
  },
  {
    name: 'Bamboo',
    summary: 'Majuli river cane basketry, riverine fish traps & sacred ceremonial masks',
    href: '/products?category=bamboo',
    count: '12 Objects',
    origin: 'Assam · Tripura · Meghalaya',
  },
  {
    name: 'Wood',
    summary: 'Turned vegetable lacquerware, walnut woodcarving & teak architectural relief',
    href: '/products?category=wood',
    count: '16 Objects',
    origin: 'Karnataka · Kashmir · Saharanpur',
  },
  {
    name: 'Metal',
    summary: 'Lost-wax Bastar bronze, hand-beaten bell metal urulis & Bidri silver inlay',
    href: '/products?category=metal',
    count: '18 Objects',
    origin: 'Chhattisgarh · Assam · Karnataka',
  },
  {
    name: 'Stone & Inlay',
    summary: 'Agra Pietra Dura marble inlay, soapstone filigree & soft stone carving',
    href: '/products?category=stone',
    count: '10 Objects',
    origin: 'Uttar Pradesh · Odisha',
  },
];

export default function HomePage() {
  const featuredMakers = MOCK_ARTISANS.slice(0, 3);
  const featuredProducts = MOCK_PRODUCTS.slice(0, 3);
  const primaryStory = MOCK_STORIES[0];

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* =========================================================
          1. HERO
          Discover things made by hand.
          [ Explore Objects ]   [ Meet Makers ]
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

              {/* Blueprint CTA Buttons: [ Explore Objects ]   [ Meet Makers ] */}
              <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
                <Link href="/products">
                  <Button size="lg" className="rounded-none tracking-wider text-xs uppercase px-8">
                    Explore Objects
                  </Button>
                </Link>
                <Link href="/artisans">
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-none tracking-wider text-xs uppercase px-8 border-[#191817]"
                  >
                    Meet Makers
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
          2. SHOP BY WHAT YOU'RE LOOKING FOR
          For Home       For Gifting       For You       Custom
          ========================================================= */}
      <section className="bg-[#FAF8F5] py-16 sm:py-24 border-y border-[#E5DFD4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
              Curated Intent
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#191817]">
              Shop by What You&apos;re Looking For
            </h2>
            <div className="flex items-center justify-center gap-4 text-xs uppercase tracking-widest text-[#787268] font-medium pt-1">
              <span>For Home</span>
              <span>•</span>
              <span>For Gifting</span>
              <span>•</span>
              <span>For You</span>
              <span>•</span>
              <span>Custom</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {SHOP_BY_INTENT.map((intent) => (
              <Link
                key={intent.id}
                href={intent.href}
                className="group relative overflow-hidden rounded-sm bg-[#EFEBE4] block aspect-[4/5] sm:aspect-[3/4.2]"
              >
                <Image
                  src={intent.image}
                  alt={intent.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent transition-opacity duration-300 group-hover:opacity-95" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-[#E8A588] font-semibold">
                    {intent.tagline}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white group-hover:text-[#FBECE6] transition-colors leading-tight">
                    {intent.title}
                  </h3>
                  <p className="text-xs text-[#DDD6CB] font-light line-clamp-2 leading-relaxed">
                    {intent.description}
                  </p>
                  <div className="pt-2 flex items-center text-xs uppercase tracking-wider font-semibold text-white group-hover:text-[#E8A588] transition-colors">
                    <span>Explore Collection</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          3. FEATURED OBJECTS
          [ Large product ]
          [ product ] [ product ]
          Explore all objects →
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
          4. MEET THE MAKERS
          [ artisan ]
          Their story...
          Meet the maker →
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#191817] pb-6 mb-4 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
              The Keepers of Craft
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#191817] mt-1">
              Meet the Makers
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
          5. CRAFT STORIES
          Large visual story
          Read the story →
          ========================================================= */}
      {primaryStory && (
        <section className="bg-[#0B1323] text-[#FAF8F5] py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between border-b border-[#22314D] pb-6 mb-12">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#E8A588] font-semibold">
                  Editorial Chronicle
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl text-white mt-1">
                  Craft Stories
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

                <div className="pt-2 flex flex-wrap items-center gap-5">
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
                    href={`/artisans/${primaryStory.artisanSlug}`}
                    className="text-xs uppercase tracking-widest font-semibold text-[#E8A588] hover:text-white transition-colors"
                  >
                    Meet the Maker →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          6. EXPLORE BY CRAFT
          Textiles | Pottery | Bamboo | Wood | Metal | etc.
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[#191817] pb-6 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
              Taxonomy of Materials
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#191817] mt-1">
              Explore by Craft
            </h2>
          </div>
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#191817] hover:text-[#B8532F] transition-colors"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Blueprint Craft Navigation Bar: Textiles | Pottery | Bamboo | Wood | Metal | etc. */}
        <div className="bg-[#FAF8F5] border border-[#E5DFD4] p-4 sm:p-5 rounded-sm mb-10 overflow-x-auto">
          <div className="flex items-center justify-between min-w-max gap-4 sm:gap-6 text-xs uppercase tracking-widest font-medium text-[#4F4B45]">
            <Link href="/products?category=textiles" className="hover:text-[#B8532F] transition-colors font-semibold">
              Textiles
            </Link>
            <span className="text-[#C5BFB5]">|</span>
            <Link href="/products?category=pottery" className="hover:text-[#B8532F] transition-colors font-semibold">
              Pottery
            </Link>
            <span className="text-[#C5BFB5]">|</span>
            <Link href="/products?category=bamboo" className="hover:text-[#B8532F] transition-colors font-semibold">
              Bamboo
            </Link>
            <span className="text-[#C5BFB5]">|</span>
            <Link href="/products?category=wood" className="hover:text-[#B8532F] transition-colors font-semibold">
              Wood
            </Link>
            <span className="text-[#C5BFB5]">|</span>
            <Link href="/products?category=metal" className="hover:text-[#B8532F] transition-colors font-semibold">
              Metal
            </Link>
            <span className="text-[#C5BFB5]">|</span>
            <Link href="/products?category=stone" className="hover:text-[#B8532F] transition-colors font-semibold">
              Stone &amp; Inlay
            </Link>
            <span className="text-[#C5BFB5]">|</span>
            <Link href="/categories" className="text-[#B8532F] hover:underline font-semibold">
              Explore All →
            </Link>
          </div>
        </div>

        {/* Detailed Craft Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CRAFT_DISCIPLINES.map((discipline) => (
            <Link
              key={discipline.name}
              href={discipline.href}
              className="group block p-6 sm:p-8 border border-[#E5DFD4] bg-[#FAF8F5] hover:border-[#191817] hover:bg-white transition-all rounded-sm space-y-4"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="uppercase tracking-widest font-semibold text-[#B8532F]">
                  {discipline.count}
                </span>
                <span className="text-[#8C8477] font-mono text-[11px]">
                  {discipline.origin}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#191817] group-hover:text-[#B8532F] transition-colors">
                  {discipline.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#5C574F] font-light leading-relaxed mt-2">
                  {discipline.summary}
                </p>
              </div>

              <div className="pt-2 flex items-center text-xs uppercase tracking-wider font-semibold text-[#191817] group-hover:text-[#B8532F] transition-colors">
                <span>Explore {discipline.name}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* =========================================================
          7. FROM ASSAM
          Beautiful Assamese craft feature
          ========================================================= */}
      <AssamFeatureSection />

      {/* =========================================================
          8. FINAL CTA
          Discover something made by hand.
          [ Explore Objects ]
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
          <Link href="/products">
            <Button size="lg" className="rounded-none tracking-wider text-xs uppercase px-10">
              Explore Objects
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
