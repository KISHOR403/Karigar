'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@karigar/ui';
import { Package, ChevronRight, Truck, CheckCircle2, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

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
  payment: {
    method: string;
    status: string;
  };
  status: string;
}

export default function CustomerOrdersPage() {
  const [orders, setOrders] = useState<StoredOrder[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('karigar_orders');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setOrders(parsed);
        }
      }
    } catch {
      // ignore JSON parse error
    }
    setIsHydrated(true);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[#7A746B]">
        <Link href="/" className="hover:text-[#191817]">Home</Link>
        <ChevronRight className="w-3 h-3 text-[#A8A196]" />
        <Link href="/customer" className="hover:text-[#191817]">Patron</Link>
        <ChevronRight className="w-3 h-3 text-[#A8A196]" />
        <span className="text-[#191817] font-medium">Acquisitions</span>
      </nav>

      <div className="border-b border-[#191817] pb-6 space-y-2">
        <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold flex items-center gap-1.5">
          <Package className="w-4 h-4" />
          <span>Fulfillment & Provenance</span>
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#191817]">
          My Craft Acquisitions ({orders.length})
        </h1>
        <p className="text-sm text-[#6E6962] font-light">
          Track handcrafted objects dispatched from artisan workshops with signed maker certificates.
        </p>
      </div>

      {orders.length === 0 ? (
        <div className="text-center py-20 bg-white border border-[#E5DFD4] rounded-sm space-y-4 p-8">
          <div className="w-16 h-16 rounded-full bg-[#FAF8F5] mx-auto flex items-center justify-center border border-[#E5DFD4]">
            <Package className="w-8 h-8 text-[#A8A196]" />
          </div>
          <div className="space-y-1 max-w-sm mx-auto">
            <h2 className="font-serif text-2xl text-[#191817]">No acquisitions yet</h2>
            <p className="text-xs text-[#6E6962] leading-relaxed">
              When you acquire creations on Karigar, your orders, courier tracking, and authenticity certificates appear here.
            </p>
          </div>
          <div className="pt-2">
            <Link href="/categories/flowers-bouquets">
              <Button size="md" className="rounded-none uppercase tracking-wider text-xs px-6 bg-[#191817] text-white hover:bg-[#33302D]">
                Explore Creations
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.orderId}
              className="bg-white border border-[#E5DFD4] p-6 sm:p-7 rounded-sm space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E5DFD4] gap-2 text-xs">
                <div className="space-y-0.5">
                  <p className="font-mono text-sm font-semibold text-[#191817]">
                    Order #{order.orderId}
                  </p>
                  <p className="text-[11px] text-[#7A746B]">
                    Placed on {new Date(order.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </p>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#295424] bg-[#E8F0E6] px-2.5 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Atelier Preparing Shipment</span>
                  </span>
                  <span className="font-serif text-lg font-semibold text-[#191817] ml-2">
                    ₹{order.total.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Items */}
              <div className="space-y-3">
                {order.items.map((item, idx) => (
                  <div key={`${item.id}-${idx}`} className="flex items-center justify-between text-xs py-1">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-sm overflow-hidden bg-[#ECE5DC] shrink-0">
                        <Image src={item.imageUrl} alt={item.title} fill sizes="48px" className="object-cover" />
                      </div>
                      <div>
                        <p className="font-medium text-[#191817]">{item.title}</p>
                        <p className="text-[11px] text-[#7A746B]">
                          Qty: {item.quantity} • By {item.artisanName} {item.variantTitle ? `(${item.variantTitle})` : ''}
                        </p>
                      </div>
                    </div>
                    <span className="font-serif text-sm font-medium text-[#191817]">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-[#F0EBE3] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#6E6962]">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#B8532F]" />
                  <span>Insured Express Courier • Free Doorstep Delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    href={`/checkout/success?orderId=${order.orderId}`}
                    className="text-[#191817] font-semibold hover:text-[#B8532F] hover:underline"
                  >
                    View Order Details & Certificate →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
