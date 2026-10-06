import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@karigar/types';
import { Badge } from '@karigar/ui';
import { APP_CONFIG } from '@karigar/config';

interface ProductPreviewProps {
  product: Product;
}

export function ProductPreview({ product }: ProductPreviewProps) {
  const primaryImage = product.media.find((m) => m.isPrimary) || product.media[0];

  return (
    <div className="group flex flex-col space-y-3">
      {/* Product Image Frame */}
      <Link
        href={`/objects/${product.slug}`}
        className="relative aspect-[3/4] overflow-hidden bg-[#EFEBE4] rounded-sm block"
      >
        {primaryImage && (
          <Image
            src={primaryImage.url}
            alt={primaryImage.altText || product.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        )}
        {product.specifications.giTagCertified && (
          <div className="absolute top-3 left-3">
            <Badge variant="sand" className="text-[10px] bg-[#FAF8F5]/90 backdrop-blur-xs">
              GI Certified
            </Badge>
          </div>
        )}
        {product.isCustomizable && (
          <div className="absolute top-3 right-3">
            <Badge variant="terracotta" className="text-[10px] bg-[#FBECE6]/90 backdrop-blur-xs">
              Customizable
            </Badge>
          </div>
        )}
      </Link>

      {/* Product Meta */}
      <div className="space-y-1">
        <div className="flex items-center justify-between text-xs text-[#7A746B]">
          <span>{product.specifications.regionOfOrigin}</span>
          <span>{product.specifications.makingDurationDays} days handcraft</span>
        </div>

        <h4 className="font-serif text-lg text-[#191817] group-hover:text-[#B8532F] transition-colors leading-snug">
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

        <div className="pt-1 flex items-baseline justify-between">
          <p className="text-sm font-medium text-[#191817]">
            {APP_CONFIG.currencySymbol}
            {product.basePrice.toLocaleString('en-IN')}
          </p>
          <span className="text-[11px] text-[#8C857B]">
            {product.specifications.craftTechnique.split(' ')[0]}
          </span>
        </div>
      </div>
    </div>
  );
}
