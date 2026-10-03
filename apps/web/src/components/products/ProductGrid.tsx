import React from 'react';
import { Product } from '@karigar/types';
import { ProductPreview } from './ProductPreview';

interface ProductGridProps {
  products: Product[];
  className?: string;
}

export function ProductGrid({ products, className = '' }: ProductGridProps) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 ${className}`}
    >
      {products.map((product) => (
        <ProductPreview key={product.id} product={product} />
      ))}
    </div>
  );
}
