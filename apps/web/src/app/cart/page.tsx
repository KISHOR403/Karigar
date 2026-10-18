'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/lib/cart-context';
import { Button } from '@karigar/ui';
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Truck,
  Sparkles,
} from 'lucide-react';

export default function CartPage() {
  const { items, itemCount, subtotal, updateQuantity, removeItem, clearCart } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[#7A746B]">
        <Link href="/" className="hover:text-[#191817]">Home</Link>
        <ChevronRight className="w-3 h-3 text-[#A8A196]" />
        <span className="text-[#191817] font-medium">Shopping Bag</span>
      </nav>

      <div className="border-b border-[#191817] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1">
          <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold flex items-center gap-1.5">
            <ShoppingBag className="w-4 h-4" />
            <span>Patron Order Bag</span>
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#191817]">
            Your Bag ({itemCount} {itemCount === 1 ? 'Creation' : 'Creations'})
          </h1>
        </div>

        {items.length > 0 && (
          <button
            type="button"
            onClick={clearCart}
            className="text-xs uppercase tracking-wider text-[#7A746B] hover:text-[#B8532F] transition-colors flex items-center gap-1 self-start sm:self-auto"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear Bag</span>
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="text-center py-20 bg-white border border-[#E5DFD4] p-8 space-y-5 rounded-sm">
          <div className="w-20 h-20 rounded-full bg-[#FAF8F5] mx-auto flex items-center justify-center border border-[#E5DFD4]">
            <ShoppingBag className="w-10 h-10 text-[#A8A196]" />
          </div>
          <div className="space-y-2 max-w-md mx-auto">
            <h2 className="font-serif text-2xl text-[#191817]">Your bag is currently empty</h2>
            <p className="text-sm text-[#6E6962] font-light leading-relaxed">
              Explore everlasting botanical bouquets, personalized heirloom gifts, and distinctive creations made by independent artisans across India.
            </p>
          </div>
          <div className="pt-2">
            <Link href="/categories/flowers-bouquets">
              <Button size="lg" className="rounded-none uppercase tracking-wider text-xs px-8 bg-[#191817] text-white hover:bg-[#33302D]">
                Shop Handmade Finds
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Cart Items List (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#E5DFD4] p-5 sm:p-6 rounded-sm flex flex-col sm:flex-row gap-5 items-start justify-between group hover:border-[#C5BFB5] transition-all"
              >
                <div className="flex gap-4 sm:gap-5 items-start w-full sm:w-auto">
                  <Link
                    href={`/products/${item.productSlug}`}
                    className="relative w-24 sm:w-28 aspect-square shrink-0 overflow-hidden bg-[#ECE5DC] rounded-sm"
                  >
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </Link>

                  <div className="space-y-1.5 flex-1 min-w-0">
                    <span className="text-[10px] uppercase tracking-widest text-[#B8532F] font-semibold block">
                      {item.productionType}
                    </span>

                    <h3 className="font-serif text-lg sm:text-xl text-[#191817] leading-snug">
                      <Link href={`/products/${item.productSlug}`} className="hover:text-[#B8532F] transition-colors">
                        {item.title}
                      </Link>
                    </h3>

                    {item.variantTitle && (
                      <p className="text-xs text-[#6E6962]">
                        <span className="text-[#9C9488]">Option:</span> {item.variantTitle}
                      </p>
                    )}

                    <p className="text-xs text-[#5C574F]">
                      Made by{' '}
                      <Link
                        href={`/makers/${item.artisanSlug}`}
                        className="font-semibold text-[#191817] hover:underline"
                      >
                        {item.artisanName}
                      </Link>
                    </p>

                    {item.customNote && (
                      <div className="p-2 bg-[#FAF8F5] border border-[#F2DFC6] text-xs text-[#8C531B] rounded-xs mt-2">
                        <span className="font-semibold">Personalization Note:</span> &ldquo;{item.customNote}&rdquo;
                      </div>
                    )}
                  </div>
                </div>

                {/* Pricing & Controls */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-[#F0EBE3] gap-4">
                  <div className="text-right">
                    <p className="font-serif text-xl sm:text-2xl text-[#191817]">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </p>
                    {item.quantity > 1 && (
                      <p className="text-[11px] text-[#787268]">
                        ₹{item.price.toLocaleString('en-IN')} each
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-[#D5CEC2] bg-[#FAF8F5]">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 px-2.5 text-[#4A463F] hover:bg-[#EAE4DC] transition-colors disabled:opacity-30"
                        disabled={item.quantity <= 1}
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 text-xs font-semibold text-[#191817]">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 px-2.5 text-[#4A463F] hover:bg-[#EAE4DC] transition-colors disabled:opacity-30"
                        disabled={item.quantity >= item.stockQuantity}
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="p-1.5 text-[#9C9488] hover:text-[#B8532F] transition-colors"
                      aria-label={`Remove ${item.title}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-2">
              <Link
                href="/objects"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#191817] hover:text-[#B8532F] transition-colors"
              >
                <span>← Continue Discovering Handcrafted Finds</span>
              </Link>
            </div>
          </div>

          {/* Order Summary (4 cols) */}
          <div className="lg:col-span-4 bg-white border border-[#E5DFD4] p-6 sm:p-7 rounded-sm space-y-6 sticky top-28">
            <h2 className="font-serif text-2xl text-[#191817] pb-3 border-b border-[#E5DFD4]">
              Order Summary
            </h2>

            <div className="space-y-3 text-xs text-[#5C574F]">
              <div className="flex items-center justify-between">
                <span>Items Subtotal ({itemCount})</span>
                <span className="font-serif text-base text-[#191817] font-semibold">
                  ₹{subtotal.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="flex items-center justify-between text-[#295424]">
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5" />
                  <span>Insured Express Courier</span>
                </span>
                <span className="font-semibold uppercase text-[11px]">Free</span>
              </div>

              <div className="flex items-center justify-between">
                <span>Estimated Taxes & Packaging</span>
                <span className="font-medium text-[#191817]">Included</span>
              </div>

              <div className="pt-3 border-t border-[#E5DFD4] flex items-baseline justify-between text-base">
                <span className="font-semibold text-[#191817]">Total</span>
                <span className="font-serif text-2xl text-[#191817] font-semibold">
                  ₹{subtotal.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <div className="p-3 bg-[#FAF8F5] border border-[#E5DFD4] space-y-1.5 text-[11px] text-[#5C574F]">
              <div className="flex items-center gap-1.5 text-[#3D5B3A] font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Direct Artisan Pledge</span>
              </div>
              <p className="leading-relaxed">
                Over 90% of order value goes directly to the crafting artisan ateliers with no predatory middleman cuts.
              </p>
            </div>

            <Link href="/checkout" className="block">
              <Button
                size="lg"
                className="w-full rounded-none uppercase tracking-wider text-xs py-4 bg-[#191817] text-white hover:bg-[#33302D] flex items-center justify-center gap-2 shadow-sm font-semibold"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>

            <div className="text-center">
              <p className="text-[11px] text-[#8C8477]">
                Insured delivery across India • Secure checkout
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
