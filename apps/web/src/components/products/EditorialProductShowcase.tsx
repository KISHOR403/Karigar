import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@karigar/types';
import { APP_CONFIG } from '@karigar/config';
import { ArrowRight } from 'lucide-react';

interface EditorialProductShowcaseProps {
  products: Product[];
}

export function EditorialProductShowcase({ products }: EditorialProductShowcaseProps) {
  const heroProduct = products[0];
  const supportingProducts = products.slice(1, 3);

  if (!heroProduct) return null;

  const heroImage = heroProduct.media.find((m) => m.isPrimary) || heroProduct.media[0];

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* =========================================================
          1. LARGE HERO PRODUCT CARD [ Large product ]
          ========================================================= */}
      <div className="group border border-[#E5DFD4] bg-[#FAF8F5] p-6 sm:p-8 rounded-sm hover:border-[#191817] transition-all">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Large Image Column (7 cols) */}
          <div className="lg:col-span-7">
            <Link
              href={`/objects/${heroProduct.slug}`}
              className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full block overflow-hidden bg-[#ECE5DC] rounded-sm"
            >
              {heroImage && (
                <Image
                  src={heroImage.url}
                  alt={heroImage.altText || heroProduct.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              )}
              <div className="absolute top-4 left-4 bg-[#FAF8F5]/95 backdrop-blur-xs px-3 py-1 text-[10px] uppercase tracking-widest text-[#B8532F] font-semibold border border-[#E5DFD4]">
                Masterpiece Spotlight
              </div>
            </Link>
          </div>

          {/* Editorial Details Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between text-xs text-[#8C8477] border-b border-[#E5DFD4] pb-3">
              <span className="uppercase tracking-widest font-semibold text-[#B8532F]">
                {heroProduct.specifications.regionOfOrigin}
              </span>
              <span className="font-serif text-2xl text-[#191817]">
                {APP_CONFIG.currencySymbol}
                {heroProduct.basePrice.toLocaleString('en-IN')}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#191817] group-hover:text-[#B8532F] transition-colors leading-snug">
                <Link href={`/objects/${heroProduct.slug}`}>{heroProduct.title}</Link>
              </h3>

              {heroProduct.artisan && (
                <p className="text-xs sm:text-sm text-[#5C574F]">
                  Handcrafted by{' '}
                  <Link
                    href={`/makers/${heroProduct.artisan.slug}`}
                    className="text-[#191817] font-semibold hover:underline"
                  >
                    {heroProduct.artisan.artisanName}
                  </Link>
                  {heroProduct.artisan.location?.state && (
                    <span className="text-[#8C8477] ml-1.5">• {heroProduct.artisan.location.state}</span>
                  )}
                </p>
              )}
            </div>

            <p className="text-sm text-[#6E6962] font-light leading-relaxed pt-1 line-clamp-3">
              {heroProduct.shortDescription}
            </p>

            <div className="pt-2">
              <Link
                href={`/objects/${heroProduct.slug}`}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#191817] hover:text-[#B8532F] transition-colors"
              >
                <span className="border-b border-[#191817] pb-0.5">View creation & provenance</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          2. TWO SUPPORTING PRODUCTS [ product ] [ product ]
          ========================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
        {supportingProducts.map((product) => {
          const image = product.media.find((m) => m.isPrimary) || product.media[0];
          return (
            <article
              key={product.id}
              className="group border border-[#E5DFD4] bg-white p-5 sm:p-6 rounded-sm hover:border-[#191817] transition-all flex flex-col justify-between"
            >
              <div>
                <Link
                  href={`/objects/${product.slug}`}
                  className="relative aspect-[16/11] w-full block overflow-hidden bg-[#ECE5DC] rounded-sm"
                >
                  {image && (
                    <Image
                      src={image.url}
                      alt={image.altText || product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  )}
                </Link>

                <div className="mt-5 space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#8C8477]">
                    <span className="uppercase tracking-widest font-medium">
                      {product.specifications.regionOfOrigin}
                    </span>
                    <span className="font-serif text-xl text-[#191817]">
                      {APP_CONFIG.currencySymbol}
                      {product.basePrice.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <h4 className="font-serif text-xl sm:text-2xl text-[#191817] group-hover:text-[#B8532F] transition-colors leading-snug">
                    <Link href={`/objects/${product.slug}`}>{product.title}</Link>
                  </h4>

                  {product.artisan && (
                    <p className="text-xs text-[#5C574F]">
                      by{' '}
                      <Link
                        href={`/makers/${product.artisan.slug}`}
                        className="text-[#191817] font-semibold hover:underline"
                      >
                        {product.artisan.artisanName}
                      </Link>
                    </p>
                  )}

                  <p className="text-xs text-[#6E6962] font-light leading-relaxed line-clamp-2 pt-1">
                    {product.shortDescription}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#F0EBE3]">
                <Link
                  href={`/objects/${product.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#191817] hover:text-[#B8532F] transition-colors"
                >
                  <span>Explore piece</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {/* =========================================================
          3. EXPLORE ALL OBJECTS LINK
          ========================================================= */}
      <div className="text-center pt-2">
        <Link
          href="/objects"
          className="inline-flex items-center gap-2 font-serif text-lg sm:text-xl text-[#191817] hover:text-[#B8532F] border-b border-[#191817] hover:border-[#B8532F] pb-1 transition-all"
        >
          <span>Explore all objects</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
