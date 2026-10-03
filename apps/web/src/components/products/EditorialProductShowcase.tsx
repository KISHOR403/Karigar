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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
      {/* 1. Large Hero Featured Object (7 cols) */}
      <div className="lg:col-span-7 group">
        <Link
          href={`/products/${heroProduct.slug}`}
          className="relative aspect-[4/5] sm:aspect-[16/13] w-full block overflow-hidden bg-[#ECE5DC] rounded-sm"
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
          <div className="absolute top-4 left-4 bg-[#FAF8F5]/90 backdrop-blur-xs px-3 py-1 text-[10px] uppercase tracking-widest text-[#B8532F] font-semibold">
            Heirloom Spotlight
          </div>
        </Link>

        <div className="mt-5 space-y-2">
          <div className="flex items-center justify-between text-xs text-[#8C8477]">
            <span className="uppercase tracking-widest font-medium">
              {heroProduct.specifications.regionOfOrigin}
            </span>
            <span className="font-serif text-lg text-[#191817]">
              {APP_CONFIG.currencySymbol}
              {heroProduct.basePrice.toLocaleString('en-IN')}
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-[#191817] group-hover:text-[#B8532F] transition-colors leading-snug">
            <Link href={`/products/${heroProduct.slug}`}>{heroProduct.title}</Link>
          </h3>

          {heroProduct.artisan && (
            <p className="text-sm text-[#5C574F]">
              Handcrafted by{' '}
              <Link
                href={`/artisans/${heroProduct.artisan.slug}`}
                className="text-[#191817] font-medium hover:underline"
              >
                {heroProduct.artisan.artisanName}
              </Link>
            </p>
          )}

          <p className="text-sm text-[#6E6962] font-light leading-relaxed pt-1 line-clamp-2">
            {heroProduct.shortDescription}
          </p>

          <div className="pt-2">
            <Link
              href={`/products/${heroProduct.slug}`}
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#191817] hover:text-[#B8532F] transition-colors"
            >
              <span>View creation & provenance</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Two Smaller Supporting Objects (5 cols) */}
      <div className="lg:col-span-5 space-y-12 lg:space-y-14">
        {supportingProducts.map((product) => {
          const image = product.media.find((m) => m.isPrimary) || product.media[0];
          return (
            <div key={product.id} className="group">
              <Link
                href={`/products/${product.slug}`}
                className="relative aspect-[16/10] sm:aspect-[16/11] w-full block overflow-hidden bg-[#ECE5DC] rounded-sm"
              >
                {image && (
                  <Image
                    src={image.url}
                    alt={image.altText || product.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                )}
              </Link>

              <div className="mt-4 space-y-1.5">
                <div className="flex items-center justify-between text-xs text-[#8C8477]">
                  <span className="uppercase tracking-widest font-medium">
                    {product.specifications.regionOfOrigin}
                  </span>
                  <span className="font-serif text-base text-[#191817]">
                    {APP_CONFIG.currencySymbol}
                    {product.basePrice.toLocaleString('en-IN')}
                  </span>
                </div>

                <h4 className="font-serif text-xl text-[#191817] group-hover:text-[#B8532F] transition-colors leading-snug">
                  <Link href={`/products/${product.slug}`}>{product.title}</Link>
                </h4>

                {product.artisan && (
                  <p className="text-xs text-[#5C574F]">
                    by{' '}
                    <Link
                      href={`/artisans/${product.artisan.slug}`}
                      className="text-[#191817] font-medium hover:underline"
                    >
                      {product.artisan.artisanName}
                    </Link>
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
