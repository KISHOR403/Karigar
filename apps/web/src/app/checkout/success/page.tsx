'use client';

import React, { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@karigar/ui';
import {
  CheckCircle2,
  Package,
  Truck,
  ShieldCheck,
  ArrowRight,
  Clock,
  Sparkles,
  MapPin,
  FileCheck,
} from 'lucide-react';

interface StoredOrder {
  orderId: string;
  createdAt: string;
  items: Array<{
    id: string;
    title: string;
    price: number;
    quantity: number;
    imageUrl: string;
    artisanName: string;
    variantTitle?: string;
  }>;
  total: number;
  customer: {
    fullName: string;
    email: string;
    shippingAddress: {
      addressLine: string;
      city: string;
      state: string;
      pincode: string;
    };
  };
  payment: {
    method: string;
    status: string;
  };
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId') || 'KG-2026-CONFIRMED';
  const [order, setOrder] = useState<StoredOrder | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('karigar_orders');
      if (stored) {
        const orders: StoredOrder[] = JSON.parse(stored);
        const match = orders.find((o) => o.orderId === orderId);
        if (match) {
          setOrder(match);
        } else if (orders.length > 0) {
          setOrder(orders[0]);
        }
      }
    } catch {
      // ignore JSON parse error
    }
  }, [orderId]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-12">
      {/* Banner */}
      <div className="text-center space-y-4 bg-white border border-[#E5DFD4] p-8 sm:p-12 rounded-sm shadow-xs">
        <div className="w-16 h-16 rounded-full bg-[#E8F0E6] mx-auto flex items-center justify-center border border-[#C5D8C1]">
          <CheckCircle2 className="w-9 h-9 text-[#295424]" />
        </div>

        <div className="space-y-1.5">
          <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
            Acquisition Confirmed & Notified to Atelier
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#191817]">
            Thank You for Supporting Living Craft
          </h1>
          <p className="text-sm text-[#6E6962] font-light max-w-lg mx-auto leading-relaxed pt-1">
            Your order has been recorded and the creating artisan workshops have been dispatched order specifications with signed maker certificates.
          </p>
        </div>

        <div className="pt-2 inline-flex items-center gap-2 bg-[#FAF8F5] px-4 py-2 border border-[#E5DFD4] text-xs text-[#191817] font-mono">
          <span className="text-[#8C8477]">Order Reference:</span>
          <strong className="text-[#191817]">{order?.orderId || orderId}</strong>
        </div>
      </div>

      {/* Fulfillment Journey Timeline */}
      <div className="bg-[#FAF8F5] border border-[#E5DFD4] p-6 sm:p-8 rounded-sm space-y-6">
        <h2 className="font-serif text-2xl text-[#191817]">
          Craft & Fulfillment Timeline
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
          <div className="p-4 bg-white border-l-2 border-[#295424] space-y-1">
            <span className="text-[10px] uppercase font-bold text-[#295424]">Step 1 • Completed</span>
            <p className="font-serif text-base text-[#191817]">Order Placed</p>
            <p className="text-[#7A746B]">Payment intent validated and logged.</p>
          </div>

          <div className="p-4 bg-white border-l-2 border-[#B8532F] space-y-1">
            <span className="text-[10px] uppercase font-bold text-[#B8532F]">Step 2 • In Progress</span>
            <p className="font-serif text-base text-[#191817]">Atelier Preparation</p>
            <p className="text-[#7A746B]">Artisan carefully inspects and packages your creation.</p>
          </div>

          <div className="p-4 bg-white border-l-2 border-[#D5CEC2] space-y-1">
            <span className="text-[10px] uppercase font-semibold text-[#8C8477]">Step 3 • Upcoming</span>
            <p className="font-serif text-base text-[#191817]">Insured Transit</p>
            <p className="text-[#7A746B]">Dispatched via tracked air/surface courier.</p>
          </div>

          <div className="p-4 bg-white border-l-2 border-[#D5CEC2] space-y-1">
            <span className="text-[10px] uppercase font-semibold text-[#8C8477]">Step 4 • Upcoming</span>
            <p className="font-serif text-base text-[#191817]">Delivery</p>
            <p className="text-[#7A746B]">Arrives in protective reinforced box with certificate.</p>
          </div>
        </div>
      </div>

      {/* Order Details Breakdown */}
      {order && (
        <div className="bg-white border border-[#E5DFD4] p-6 sm:p-8 rounded-sm space-y-6">
          <h2 className="font-serif text-2xl text-[#191817] pb-3 border-b border-[#E5DFD4]">
            Order Particulars
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-[#5C574F]">
            <div>
              <span className="text-[#8C8477] uppercase tracking-wider text-[10px] block font-semibold mb-1">
                Recipient & Shipping Address
              </span>
              <p className="font-medium text-[#191817]">{order.customer.fullName}</p>
              <p>{order.customer.shippingAddress.addressLine}</p>
              <p>
                {order.customer.shippingAddress.city}, {order.customer.shippingAddress.state} — {order.customer.shippingAddress.pincode}
              </p>
              <p className="text-[#8C8477] mt-1">Contact: {order.customer.email}</p>
            </div>

            <div>
              <span className="text-[#8C8477] uppercase tracking-wider text-[10px] block font-semibold mb-1">
                Payment & Shipping
              </span>
              <p>
                <span className="font-medium text-[#191817]">Method:</span> {order.payment.method}
              </p>
              <p>
                <span className="font-medium text-[#191817]">Status:</span>{' '}
                <span className="text-[#295424] font-semibold">{order.payment.status}</span>
              </p>
              <p>
                <span className="font-medium text-[#191817]">Courier:</span> Insured Express (Complimentary)
              </p>
            </div>
          </div>

          {/* Items */}
          <div className="border-t border-[#E5DFD4] pt-5 space-y-3">
            <span className="text-[#8C8477] uppercase tracking-wider text-[10px] block font-semibold">
              Acquired Creations ({order.items.length})
            </span>
            <div className="space-y-3">
              {order.items.map((item, idx) => (
                <div key={`${item.id}-${idx}`} className="flex items-center justify-between text-xs py-2 border-b border-[#F5EFE8] last:border-b-0">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-sm overflow-hidden bg-[#ECE5DC] shrink-0">
                      <Image src={item.imageUrl} alt={item.title} fill sizes="48px" className="object-cover" />
                    </div>
                    <div>
                      <p className="font-medium text-[#191817]">{item.title}</p>
                      <p className="text-[11px] text-[#787268]">
                        Qty: {item.quantity} • By {item.artisanName} {item.variantTitle ? `(${item.variantTitle})` : ''}
                      </p>
                    </div>
                  </div>
                  <span className="font-serif text-sm font-semibold text-[#191817]">
                    ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-[#E5DFD4] flex items-center justify-between text-sm">
              <span className="font-semibold text-[#191817]">Total Amount Paid</span>
              <span className="font-serif text-2xl font-semibold text-[#191817]">
                ₹{order.total.toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Atelier Guarantee Footer */}
      <div className="p-6 bg-[#FAF8F5] border border-[#E5DFD4] flex items-start gap-4 rounded-sm">
        <ShieldCheck className="w-5 h-5 text-[#3D5B3A] shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs text-[#5C574F]">
          <h3 className="font-serif text-base text-[#191817]">The Karigar Direct Patron Pledge</h3>
          <p className="leading-relaxed font-light">
            Your purchase directly funds independent artisan livelihood and helps keep centuries of regional botanical sculpture and handloom heritage alive. Thank you for placing your trust in patient craftsmanship.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <Link href="/objects">
          <Button size="lg" className="rounded-none uppercase tracking-wider text-xs px-8 bg-[#191817] text-white hover:bg-[#33302D]">
            Explore More Handcrafted Finds
          </Button>
        </Link>
        <Link href="/stories">
          <Button variant="outline" size="lg" className="rounded-none uppercase tracking-wider text-xs px-8 border-[#191817] text-[#191817] hover:bg-[#FAF8F5]">
            Read Master Stories
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={<div className="p-20 text-center text-sm">Loading order details...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
