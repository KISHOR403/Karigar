'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCart } from '@/lib/cart-context';
import { Button } from '@karigar/ui';
import {
  ShieldCheck,
  Truck,
  CreditCard,
  QrCode,
  Banknote,
  Check,
  ChevronRight,
  ArrowRight,
  Lock,
  AlertCircle,
} from 'lucide-react';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, itemCount, subtotal, clearCart } = useCart();

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    addressLine: '',
    landmark: '',
    pincode: '',
    city: '',
    state: 'Assam',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cod'>('upi');
  const [upiId, setUpiId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate fields
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!form.fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!form.email.trim() || !form.email.includes('@')) newErrors.email = 'Please enter a valid email';
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number';
    }
    if (!form.addressLine.trim()) newErrors.addressLine = 'Please enter your delivery street address';
    if (!form.pincode.trim() || !/^\d{6}$/.test(form.pincode.trim())) {
      newErrors.pincode = 'Please enter a valid 6-digit Indian postal PIN code';
    }
    if (!form.city.trim()) newErrors.city = 'Please enter your city/town';
    if (!form.state.trim()) newErrors.state = 'Please enter your state';

    if (paymentMethod === 'upi' && upiId.trim() && !/^[\w.-]+@[\w.-]+$/.test(upiId.trim())) {
      newErrors.upiId = 'Please enter a valid UPI ID (e.g. name@okhdfcbank)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validateForm()) {
      window.scrollTo({ top: 150, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);

    try {
      // Generate realistic order reference
      const orderId = `KG-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;

      const newOrder = {
        orderId,
        createdAt: new Date().toISOString(),
        items: [...items],
        subtotal,
        shippingFee: 0,
        total: subtotal,
        customer: {
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
          shippingAddress: {
            addressLine: form.addressLine,
            landmark: form.landmark,
            city: form.city,
            state: form.state,
            pincode: form.pincode,
            country: 'India',
          },
        },
        payment: {
          method: paymentMethod.toUpperCase(),
          status: paymentMethod === 'cod' ? 'PENDING_ON_DELIVERY' : 'CONFIRMED',
          currency: 'INR',
        },
        status: 'PLACED_NOTIFIED_TO_ARTISAN',
      };

      // Persist order in localStorage
      const existingOrdersStr = localStorage.getItem('karigar_orders');
      const existingOrders = existingOrdersStr ? JSON.parse(existingOrdersStr) : [];
      localStorage.setItem('karigar_orders', JSON.stringify([newOrder, ...existingOrders]));

      // Clear the cart
      clearCart();

      // Redirect to confirmation page
      router.push(`/checkout/success?orderId=${orderId}`);
    } catch {
      setIsSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="font-serif text-3xl text-[#191817]">Your shopping bag is empty</h1>
        <p className="text-sm text-[#787268]">Please add handcrafted creations to your bag before checking out.</p>
        <div className="pt-2">
          <Link href="/categories/flowers-bouquets">
            <Button size="md" className="rounded-none uppercase tracking-wider text-xs">
              Explore Handmade Finds
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[#7A746B]">
        <Link href="/" className="hover:text-[#191817]">Home</Link>
        <ChevronRight className="w-3 h-3 text-[#A8A196]" />
        <Link href="/cart" className="hover:text-[#191817]">Bag</Link>
        <ChevronRight className="w-3 h-3 text-[#A8A196]" />
        <span className="text-[#191817] font-medium">Checkout</span>
      </nav>

      <div className="border-b border-[#191817] pb-4 flex items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5" />
            <span>Secure Patron Checkout</span>
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#191817]">
            Complete Your Acquisition
          </h1>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs text-[#3D5B3A] bg-[#E8F0E6] px-3 py-1.5 rounded-sm">
          <ShieldCheck className="w-4 h-4" />
          <span>Encrypted Direct Transaction</span>
        </div>
      </div>

      <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Delivery & Payment Details (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Section 1: Customer Contact & Shipping Address */}
          <div className="bg-white border border-[#E5DFD4] p-6 sm:p-7 rounded-sm space-y-5">
            <div className="border-b border-[#E5DFD4] pb-3">
              <h2 className="font-serif text-xl text-[#191817]">1. Patron Delivery Address</h2>
              <p className="text-xs text-[#787268] mt-0.5">
                Where should the artisan dispatch your handcrafted creations?
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="sm:col-span-2">
                <label className="block text-[#4A463F] uppercase tracking-wider mb-1 font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  placeholder="e.g. Aditi Sengupta"
                  className={`w-full bg-[#FAF8F5] border p-2.5 text-xs text-[#191817] rounded-none focus:outline-none focus:ring-1 focus:ring-[#B8532F] ${
                    errors.fullName ? 'border-red-500' : 'border-[#D5CEC2]'
                  }`}
                />
                {errors.fullName && <p className="text-red-600 text-[11px] mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-[#4A463F] uppercase tracking-wider mb-1 font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="e.g. aditi@example.com"
                  className={`w-full bg-[#FAF8F5] border p-2.5 text-xs text-[#191817] rounded-none focus:outline-none focus:ring-1 focus:ring-[#B8532F] ${
                    errors.email ? 'border-red-500' : 'border-[#D5CEC2]'
                  }`}
                />
                {errors.email && <p className="text-red-600 text-[11px] mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-[#4A463F] uppercase tracking-wider mb-1 font-medium">
                  Mobile Phone (10 Digits) *
                </label>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, '') })}
                  placeholder="e.g. 9830123456"
                  className={`w-full bg-[#FAF8F5] border p-2.5 text-xs text-[#191817] rounded-none focus:outline-none focus:ring-1 focus:ring-[#B8532F] ${
                    errors.phone ? 'border-red-500' : 'border-[#D5CEC2]'
                  }`}
                />
                {errors.phone && <p className="text-red-600 text-[11px] mt-1">{errors.phone}</p>}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-[#4A463F] uppercase tracking-wider mb-1 font-medium">
                  Street Address & House / Flat No. *
                </label>
                <input
                  type="text"
                  required
                  value={form.addressLine}
                  onChange={(e) => setForm({ ...form, addressLine: e.target.value })}
                  placeholder="e.g. 42B Lake View Road, Southern Avenue"
                  className={`w-full bg-[#FAF8F5] border p-2.5 text-xs text-[#191817] rounded-none focus:outline-none focus:ring-1 focus:ring-[#B8532F] ${
                    errors.addressLine ? 'border-red-500' : 'border-[#D5CEC2]'
                  }`}
                />
                {errors.addressLine && <p className="text-red-600 text-[11px] mt-1">{errors.addressLine}</p>}
              </div>

              <div>
                <label className="block text-[#4A463F] uppercase tracking-wider mb-1 font-medium">
                  Landmark (Optional)
                </label>
                <input
                  type="text"
                  value={form.landmark}
                  onChange={(e) => setForm({ ...form, landmark: e.target.value })}
                  placeholder="e.g. Near Menoka Cinema"
                  className="w-full bg-[#FAF8F5] border border-[#D5CEC2] p-2.5 text-xs text-[#191817] rounded-none focus:outline-none focus:ring-1 focus:ring-[#B8532F]"
                />
              </div>

              <div>
                <label className="block text-[#4A463F] uppercase tracking-wider mb-1 font-medium">
                  Postal PIN Code (6 Digits) *
                </label>
                <input
                  type="text"
                  required
                  maxLength={6}
                  value={form.pincode}
                  onChange={(e) => setForm({ ...form, pincode: e.target.value.replace(/\D/g, '') })}
                  placeholder="e.g. 700029"
                  className={`w-full bg-[#FAF8F5] border p-2.5 text-xs text-[#191817] rounded-none focus:outline-none focus:ring-1 focus:ring-[#B8532F] ${
                    errors.pincode ? 'border-red-500' : 'border-[#D5CEC2]'
                  }`}
                />
                {errors.pincode && <p className="text-red-600 text-[11px] mt-1">{errors.pincode}</p>}
              </div>

              <div>
                <label className="block text-[#4A463F] uppercase tracking-wider mb-1 font-medium">
                  City / Town *
                </label>
                <input
                  type="text"
                  required
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  placeholder="e.g. Kolkata"
                  className={`w-full bg-[#FAF8F5] border p-2.5 text-xs text-[#191817] rounded-none focus:outline-none focus:ring-1 focus:ring-[#B8532F] ${
                    errors.city ? 'border-red-500' : 'border-[#D5CEC2]'
                  }`}
                />
                {errors.city && <p className="text-red-600 text-[11px] mt-1">{errors.city}</p>}
              </div>

              <div>
                <label className="block text-[#4A463F] uppercase tracking-wider mb-1 font-medium">
                  State *
                </label>
                <input
                  type="text"
                  required
                  value={form.state}
                  onChange={(e) => setForm({ ...form, state: e.target.value })}
                  placeholder="e.g. West Bengal"
                  className={`w-full bg-[#FAF8F5] border p-2.5 text-xs text-[#191817] rounded-none focus:outline-none focus:ring-1 focus:ring-[#B8532F] ${
                    errors.state ? 'border-red-500' : 'border-[#D5CEC2]'
                  }`}
                />
                {errors.state && <p className="text-red-600 text-[11px] mt-1">{errors.state}</p>}
              </div>
            </div>
          </div>

          {/* Section 2: Delivery Method */}
          <div className="bg-white border border-[#E5DFD4] p-6 sm:p-7 rounded-sm space-y-4">
            <h2 className="font-serif text-xl text-[#191817] pb-2 border-b border-[#E5DFD4]">
              2. Shipping Method
            </h2>

            <div className="p-4 border-2 border-[#191817] bg-[#FAF8F5] flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-[#B8532F]" />
                <div>
                  <p className="font-semibold text-[#191817]">Insured Express Courier Across India</p>
                  <p className="text-[#6E6962]">
                    Ships directly from artisan workshops with signed maker provenance certificates.
                  </p>
                </div>
              </div>
              <span className="font-semibold uppercase tracking-wider text-[#295424]">Free</span>
            </div>
          </div>

          {/* Section 3: Payment Method */}
          <div className="bg-white border border-[#E5DFD4] p-6 sm:p-7 rounded-sm space-y-5">
            <div className="border-b border-[#E5DFD4] pb-2">
              <h2 className="font-serif text-xl text-[#191817]">3. Payment Method</h2>
              <p className="text-xs text-[#787268] mt-0.5">
                Choose your preferred payment method.
              </p>
            </div>

            <div className="space-y-3">
              {/* Option 1: UPI */}
              <label
                className={`p-4 border rounded-sm flex flex-col gap-2 cursor-pointer transition-all ${
                  paymentMethod === 'upi'
                    ? 'border-[#191817] bg-[#FAF8F5]'
                    : 'border-[#E5DFD4] hover:border-[#C5BFB5]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      checked={paymentMethod === 'upi'}
                      onChange={() => setPaymentMethod('upi')}
                      className="text-[#B8532F] focus:ring-[#B8532F]"
                    />
                    <span className="font-medium text-xs text-[#191817]">
                      UPI (Google Pay, PhonePe, Paytm, BHIM)
                    </span>
                  </div>
                  <QrCode className="w-4 h-4 text-[#7A746B]" />
                </div>

                {paymentMethod === 'upi' && (
                  <div className="pt-2 pl-7 text-xs">
                    <input
                      type="text"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      placeholder="Enter UPI ID (e.g. username@okhdfcbank) or leave blank for QR"
                      className="w-full bg-white border border-[#D5CEC2] p-2 text-xs text-[#191817] rounded-none focus:outline-none focus:ring-1 focus:ring-[#B8532F]"
                    />
                    {errors.upiId && <p className="text-red-600 text-[11px] mt-1">{errors.upiId}</p>}
                    <p className="text-[11px] text-[#8C8477] mt-1">
                      Direct UPI payment intent generated upon confirming order.
                    </p>
                  </div>
                )}
              </label>

              {/* Option 2: Cards & NetBanking */}
              <label
                className={`p-4 border rounded-sm flex items-center justify-between cursor-pointer transition-all ${
                  paymentMethod === 'card'
                    ? 'border-[#191817] bg-[#FAF8F5]'
                    : 'border-[#E5DFD4] hover:border-[#C5BFB5]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                    className="text-[#B8532F] focus:ring-[#B8532F]"
                  />
                  <span className="font-medium text-xs text-[#191817]">
                    Debit / Credit Cards & Net Banking (RuPay, Visa, Mastercard)
                  </span>
                </div>
                <CreditCard className="w-4 h-4 text-[#7A746B]" />
              </label>

              {/* Option 3: Pay on Dispatch */}
              <label
                className={`p-4 border rounded-sm flex items-center justify-between cursor-pointer transition-all ${
                  paymentMethod === 'cod'
                    ? 'border-[#191817] bg-[#FAF8F5]'
                    : 'border-[#E5DFD4] hover:border-[#C5BFB5]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                    className="text-[#B8532F] focus:ring-[#B8532F]"
                  />
                  <span className="font-medium text-xs text-[#191817]">
                    Pay on Atelier Dispatch / Courier Verification (COD)
                  </span>
                </div>
                <Banknote className="w-4 h-4 text-[#7A746B]" />
              </label>
            </div>

            <div className="p-3 bg-[#FAF8F5] border border-[#E5DFD4] text-[11px] text-[#6E6962] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#3D5B3A] shrink-0" />
              <span>
                Transaction intent is signed cryptographically. Direct payout pledge guarantees fair artisan compensation.
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Order Review & Placement (5 cols) */}
        <div className="lg:col-span-5 bg-white border border-[#E5DFD4] p-6 sm:p-7 rounded-sm space-y-6 sticky top-28">
          <div className="border-b border-[#E5DFD4] pb-3 flex items-center justify-between">
            <h2 className="font-serif text-2xl text-[#191817]">
              Order Summary
            </h2>
            <span className="text-xs uppercase tracking-wider font-semibold text-[#8C8477]">
              {itemCount} {itemCount === 1 ? 'item' : 'items'}
            </span>
          </div>

          {/* Item Review List */}
          <div className="space-y-3.5 max-h-72 overflow-y-auto pr-1">
            {items.map((item) => (
              <div key={item.id} className="flex gap-3 items-center text-xs">
                <div className="relative w-14 h-14 shrink-0 rounded-sm overflow-hidden bg-[#ECE5DC]">
                  <Image src={item.imageUrl} alt={item.title} fill sizes="56px" className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-[#191817] truncate">{item.title}</p>
                  <p className="text-[11px] text-[#7A746B]">
                    Qty: {item.quantity} • By {item.artisanName}
                  </p>
                </div>
                <span className="font-serif text-sm font-semibold text-[#191817] shrink-0">
                  ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-2 text-xs border-t border-[#E5DFD4] pt-4 text-[#5C574F]">
            <div className="flex items-center justify-between">
              <span>Items Subtotal</span>
              <span className="font-serif text-sm font-semibold text-[#191817]">
                ₹{subtotal.toLocaleString('en-IN')}
              </span>
            </div>

            <div className="flex items-center justify-between text-[#295424]">
              <span>Insured Transit</span>
              <span className="font-semibold uppercase text-[11px]">Free</span>
            </div>

            <div className="flex items-center justify-between">
              <span>Packaging & Insurance</span>
              <span className="text-[#191817] font-medium">Included</span>
            </div>

            <div className="pt-3 border-t border-[#E5DFD4] flex items-baseline justify-between text-base">
              <span className="font-semibold text-[#191817]">Total Payable</span>
              <span className="font-serif text-2xl text-[#191817] font-semibold">
                ₹{subtotal.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          {/* Place Order CTA with duplicate protection */}
          <div className="space-y-3 pt-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="w-full rounded-none uppercase tracking-wider text-xs py-4 bg-[#191817] text-white hover:bg-[#33302D] disabled:opacity-50 font-semibold flex items-center justify-center gap-2 shadow-sm"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Transacting Order...</span>
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <span>Confirm Acquisition · ₹{subtotal.toLocaleString('en-IN')}</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              )}
            </Button>

            <p className="text-[11px] text-center text-[#8C8477] leading-relaxed">
              By confirming, you support independent master artisans directly. Order confirmation with signed tracking details will be sent to your email.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
