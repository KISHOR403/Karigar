import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MOCK_ARTISANS, MOCK_PRODUCTS, MOCK_STORIES } from '@/data/mock-data';
import { CRAFT_INTENTS, REGIONS_OF_CRAFT } from '@karigar/config';
import { MakerPreview } from '@/components/makers/MakerPreview';
import { ProductGrid } from '@/components/products/ProductGrid';
import { Button, Badge } from '@karigar/ui';
import { ArrowRight, Sparkles, Compass, Clock, MapPin } from 'lucide-react';

export default function HomePage() {
  const featuredMakers = MOCK_ARTISANS.slice(0, 4);
  const featuredProducts = MOCK_PRODUCTS.slice(0, 4);
  const primaryStory = MOCK_STORIES[0];

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* =========================================================
          1. HERO SECTION
          Large editorial composition with genuine tactile photography
          ========================================================= */}
      <section className="relative pt-8 sm:pt-16 pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Editorial Lead Copy */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8532F]" />
                <span>The Living Lineage of Indian Craft</span>
              </div>

              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[#191817] leading-[1.08] tracking-tight">
                Discover things made by hand.
              </h1>

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

            {/* Asymmetric Visual Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] sm:aspect-[3/3.5] w-full rounded-sm overflow-hidden bg-[#ECE5DC] shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=1600&auto=format&fit=crop"
                  alt="Master artisan hand-printing organic cotton with carved teakwood blocks"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <p className="text-[11px] uppercase tracking-widest text-[#E8A588]">
                    In The Studio
                  </p>
                  <p className="font-serif text-xl sm:text-2xl text-white">
                    Dr. Ismail Khatri at the Ajrakhpur fermentation troughs
                  </p>
                  <p className="text-xs text-[#DDD6CB] font-light">
                    Kutch, Gujarat • 16-Stage Mineral Dyeing
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
          2. FEATURED MAKERS (Editorial Layouts)
          Not generic cards — large portraits, location, craft, & story
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#191817] pb-6 mb-8 gap-4">
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
            <MakerPreview key={artisan.id} artisan={artisan} priority={index === 0} />
          ))}
        </div>
      </section>

      {/* =========================================================
          3. EXPLORE BY INTENT
          Thoughtful ritual categories, not sterile dropdowns
          ========================================================= */}
      <section className="bg-[#F4EFEA] py-20 border-y border-[#E5DFD4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
              Purpose & Occasion
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#191817]">
              Explore by Intent
            </h2>
            <p className="text-sm text-[#6E6962] leading-relaxed">
              Find objects created for contemplative living, celebrations, and enduring daily connection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CRAFT_INTENTS.map((intent) => (
              <Link
                key={intent.id}
                href={intent.href}
                className="group block bg-[#FAF8F5] p-8 border border-[#E5DFD4] hover:border-[#191817] transition-all duration-300 relative"
              >
                <Badge variant="sand" className="mb-4 text-[10px]">
                  {intent.badge}
                </Badge>
                <h3 className="font-serif text-2xl text-[#191817] group-hover:text-[#B8532F] transition-colors">
                  {intent.title}
                </h3>
                <p className="text-xs text-[#6E6962] leading-relaxed mt-2">
                  {intent.subtitle}
                </p>
                <div className="mt-6 flex items-center text-xs uppercase tracking-wider font-semibold text-[#191817] group-hover:translate-x-1 transition-transform">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3 ml-1.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          4. CRAFT STORIES (Large Visual Storytelling)
          ========================================================= */}
      {primaryStory && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-[#1E2D4A] text-[#FAF8F5] rounded-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
              {/* Story Narrative */}
              <div className="lg:col-span-7 p-8 sm:p-14 lg:p-16 flex flex-col justify-between space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#E8A588]">
                    <span>Craft Chronicle</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {primaryStory.readTimeMinutes} min read
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-5xl text-white leading-tight">
                    {primaryStory.title}
                  </h3>

                  <p className="text-base text-[#DDD6CB] leading-relaxed font-light">
                    {primaryStory.subtitle}
                  </p>

                  <div className="editorial-lead text-lg text-[#F4EFEA] pt-4 border-t border-white/20 italic">
                    &ldquo;Machine prints apply color to the surface of dead cloth. Ajrakh penetrates the heart of the yarn.&rdquo;
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-6">
                  <Link href={`/stories/${primaryStory.slug}`}>
                    <Button
                      variant="secondary"
                      size="md"
                      className="rounded-none tracking-wider text-xs uppercase px-6"
                    >
                      Read Full Story
                    </Button>
                  </Link>
                  <Link
                    href={`/artisans/${primaryStory.artisanSlug}`}
                    className="text-xs uppercase tracking-wider text-[#E8A588] hover:text-white transition-colors"
                  >
                    Explore Ismail Khatri&apos;s Atelier →
                  </Link>
                </div>
              </div>

              {/* Story Visual Imagery */}
              <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
                <Image
                  src={primaryStory.heroImageUrl}
                  alt={primaryStory.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          5. FEATURED OBJECTS / PRODUCTS
          Clean, non-boxed, large visuals and material honesty
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#191817] pb-6 mb-10 gap-4">
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

        <ProductGrid products={featuredProducts} />
      </section>

      {/* =========================================================
          6. REGIONAL DISCOVERY
          Geographic craft origins with cultural resonance
          ========================================================= */}
      <section className="bg-[#FAF8F5] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-[#E5DFD4] pt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                <span>Geographies of Making</span>
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#191817] mt-1">
                Regional Craft Traditions
              </h2>
            </div>
            <p className="text-xs text-[#787268] max-w-md">
              Each geography holds indigenous soil chemistry, fiber cultivars, and generational techniques passed quietly in courtyard ateliers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REGIONS_OF_CRAFT.map((reg) => (
              <div
                key={reg.slug}
                className="group border-b border-[#E5DFD4] pb-6 hover:border-[#191817] transition-colors"
              >
                <div className="flex items-center gap-2 text-xs text-[#7A746B] mb-1">
                  <MapPin className="w-3 h-3 text-[#B8532F]" />
                  <span>{reg.state}</span>
                </div>
                <h4 className="font-serif text-2xl text-[#191817] group-hover:text-[#B8532F] transition-colors">
                  <Link href={`/artisans?region=${reg.slug}`}>{reg.region}</Link>
                </h4>
                <p className="text-xs uppercase tracking-wider text-[#989184] font-medium mt-1">
                  {reg.craftFocus}
                </p>
                <p className="text-sm text-[#5B564E] leading-relaxed mt-3">
                  {reg.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          7. FINAL EDITORIAL CTA
          "Meet the people behind the things you love."
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F4EFEA] border border-[#E5DFD4] p-10 sm:p-20 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
            Direct Atelier Patronage
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-[#191817] max-w-3xl mx-auto leading-tight">
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
        </div>
      </section>
    </div>
  );
}
