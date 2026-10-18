'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/lib/cart-context';
import { Button } from '@karigar/ui';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export function CartDrawer() {
  const { items, itemCount, subtotal, isCartOpen, setIsCartOpen, updateQuantity, removeItem } = useCart();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsCartOpen(false);
      }
    };
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCartOpen, setIsCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-label="Shopping Bag">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] border-l border-[#E5DFD4] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-[#E5DFD4] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#B8532F]" />
              <h2 className="font-serif text-2xl text-[#191817]">Your Bag</h2>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#8C8477]">
                ({itemCount} {itemCount === 1 ? 'creation' : 'creations'})
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-[#6E6962] hover:text-[#191817] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8532F]"
              aria-label="Close shopping bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#F2EDE4] mx-auto flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 text-[#A8A196]" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-xl text-[#191817]">Your bag is empty</h3>
                  <p className="text-xs text-[#7A746B] max-w-xs mx-auto leading-relaxed">
                    Discover everlasting flowers, personalized gifts and authentic artisan creations shaped by human hands.
                  </p>
                </div>
                <div className="pt-2">
                  <Link href="/categories/flowers-bouquets" onClick={() => setIsCartOpen(false)}>
                    <Button size="md" className="rounded-none uppercase tracking-wider text-xs px-6 bg-[#191817] text-white hover:bg-[#33302D]">
                      Shop Handmade Finds
                    </Button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 bg-white border border-[#E5DFD4] rounded-sm flex gap-4 items-start relative group"
                  >
                    {/* Thumbnail */}
                    <Link
                      href={`/products/${item.productSlug}`}
                      onClick={() => setIsCartOpen(false)}
                      className="relative w-20 aspect-square shrink-0 overflow-hidden bg-[#ECE5DC] rounded-sm"
                    >
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </Link>

                    {/* Details */}
                    <div className="flex-1 min-w-0 space-y-1 text-xs">
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          href={`/products/${item.productSlug}`}
                          onClick={() => setIsCartOpen(false)}
                          className="font-serif text-sm text-[#191817] hover:text-[#B8532F] transition-colors leading-snug font-medium line-clamp-1"
                        >
                          {item.title}
                        </Link>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="text-[#9C9488] hover:text-[#B8532F] transition-colors p-1"
                          aria-label={`Remove ${item.title} from bag`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {item.variantTitle && (
                        <p className="text-[11px] text-[#787268] font-medium">
                          Variant: {item.variantTitle}
                        </p>
                      )}

                      <p className="text-[11px] text-[#5C574F]">
                        By{' '}
                        <Link
                          href={`/makers/${item.artisanSlug}`}
                          onClick={() => setIsCartOpen(false)}
                          className="font-semibold text-[#191817] hover:underline"
                        >
                          {item.artisanName}
                        </Link>
                      </p>

                      {item.customNote && (
                        <p className="text-[10px] text-[#8C531B] bg-[#FAF8F5] p-1.5 rounded-xs border border-[#F2DFC6] line-clamp-2">
                          <span className="font-semibold">Note:</span> &ldquo;{item.customNote}&rdquo;
                        </p>
                      )}

                      {/* Quantity & Price */}
                      <div className="pt-2 flex items-center justify-between">
                        <div className="flex items-center border border-[#D5CEC2] rounded-none bg-[#FAF8F5]">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 px-2 text-[#4A463F] hover:bg-[#EAE4DC] transition-colors disabled:opacity-30"
                            disabled={item.quantity <= 1}
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2.5 text-xs font-semibold text-[#191817]">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 px-2 text-[#4A463F] hover:bg-[#EAE4DC] transition-colors disabled:opacity-30"
                            disabled={item.quantity >= item.stockQuantity}
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="font-serif text-sm font-semibold text-[#191817]">
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer / Actions */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#E5DFD4] bg-white space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between text-[#6E6962]">
                  <span>Subtotal</span>
                  <span className="font-serif text-lg font-semibold text-[#191817]">
                    ₹{subtotal.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[#295424]">
                  <span>Insured Express Courier</span>
                  <span className="font-medium">Complimentary (Free)</span>
                </div>
              </div>

              <div className="p-2.5 bg-[#FAF8F5] border border-[#E5DFD4] flex items-center gap-2 text-[11px] text-[#5C574F]">
                <ShieldCheck className="w-4 h-4 text-[#3D5B3A] shrink-0" />
                <span>90%+ proceeds flow directly to independent artisan ateliers.</span>
              </div>

              <div className="space-y-2 pt-1">
                <Link href="/checkout" onClick={() => setIsCartOpen(false)} className="block">
                  <Button
                    size="lg"
                    className="w-full rounded-none uppercase tracking-wider text-xs py-4 bg-[#191817] text-white hover:bg-[#33302D] flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>

                <Link href="/cart" onClick={() => setIsCartOpen(false)} className="block">
                  <Button
                    variant="outline"
                    size="md"
                    className="w-full rounded-none uppercase tracking-wider text-xs border-[#191817] text-[#191817] hover:bg-[#FAF8F5]"
                  >
                    View Bag Details
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
