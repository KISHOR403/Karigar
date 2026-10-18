'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@karigar/ui';
import { ChevronRight, Mail, MapPin, Clock, Check, MessageSquare } from 'lucide-react';

export default function ContactSupportPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'order-inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: 'order-inquiry', message: '' });
    }, 4000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[#7A746B]">
        <Link href="/" className="hover:text-[#191817]">Home</Link>
        <ChevronRight className="w-3 h-3 text-[#A8A196]" />
        <span className="text-[#191817] font-medium">Customer Support</span>
      </nav>

      <div className="border-b border-[#191817] pb-6 space-y-2">
        <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold flex items-center gap-1.5">
          <MessageSquare className="w-4 h-4" />
          <span>Curatorial Desk</span>
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#191817]">
          Customer Support & Inquiries
        </h1>
        <p className="text-sm text-[#787268] max-w-xl">
          Questions about artisanal commissions, order delivery, or maker provenance? Our concierge team is here to assist.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Contact Info */}
        <div className="md:col-span-5 space-y-6 text-xs text-[#5C574F]">
          <div className="p-6 bg-[#FAF8F5] border border-[#E5DFD4] space-y-4">
            <h3 className="font-serif text-lg text-[#191817]">Direct Concierge</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#B8532F] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#191817]">Email Support</p>
                  <p className="text-[#7A746B]">support@karigar.craft</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#B8532F] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#191817]">Response Time</p>
                  <p className="text-[#7A746B]">Monday – Saturday, 10:00 – 18:00 IST (Within 24 hours)</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B8532F] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#191817]">Curatorial Office</p>
                  <p className="text-[#7A746B]">Guwahati, Assam & Bengaluru, Karnataka, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 border border-[#E5DFD4] space-y-2 bg-white">
            <h4 className="font-serif text-base text-[#191817]">Are you an artisan?</h4>
            <p className="text-[#787268] leading-relaxed">
              If you are a generational artisan guild member seeking atelier verification, apply through our artisan onboarding portal.
            </p>
            <Link
              href="/artisan"
              className="inline-block text-xs uppercase tracking-wider font-semibold text-[#B8532F] hover:underline pt-1"
            >
              Artisan Guild Verification →
            </Link>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-7 bg-[#FAF8F5] p-6 sm:p-8 border border-[#E5DFD4] rounded-sm">
          {submitted ? (
            <div className="p-8 text-center space-y-3 bg-[#E8F0E6] border border-[#C5D8C1]">
              <Check className="w-8 h-8 text-[#295424] mx-auto" />
              <h3 className="font-serif text-2xl text-[#191817]">Message Received</h3>
              <p className="text-xs text-[#4A5D46] max-w-sm mx-auto leading-relaxed">
                Thank you. A member of our craft curatorial team will review your inquiry and reply to {formData.email || 'your email'} shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label htmlFor="contact-name" className="block text-[#4A463F] uppercase tracking-wider mb-1 font-medium">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Radhika Menon"
                  className="w-full bg-white border border-[#D5CEC2] p-2.5 text-xs text-[#191817] rounded-none focus:outline-none focus:ring-1 focus:ring-[#B8532F]"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-[#4A463F] uppercase tracking-wider mb-1 font-medium">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. radhika@example.com"
                  className="w-full bg-white border border-[#D5CEC2] p-2.5 text-xs text-[#191817] rounded-none focus:outline-none focus:ring-1 focus:ring-[#B8532F]"
                />
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-[#4A463F] uppercase tracking-wider mb-1 font-medium">Subject / Inquiry Type</label>
                <select
                  id="contact-subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-white border border-[#D5CEC2] p-2.5 text-xs text-[#191817] rounded-none focus:outline-none focus:ring-1 focus:ring-[#B8532F]"
                >
                  <option value="order-inquiry">Order Status & Delivery Tracking</option>
                  <option value="custom-commission">Custom Commission / Wedding Bouquet Inquiry</option>
                  <option value="product-details">Material, Dimensions or Care Inquiry</option>
                  <option value="artisan-partnership">Artisan Partnership & Guild Accreditation</option>
                  <option value="other">General Platform Feedback</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-[#4A463F] uppercase tracking-wider mb-1 font-medium">Message</label>
                <textarea
                  id="contact-message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please describe how we can assist you..."
                  className="w-full bg-white border border-[#D5CEC2] p-2.5 text-xs text-[#191817] rounded-none focus:outline-none focus:ring-1 focus:ring-[#B8532F]"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  size="md"
                  className="w-full sm:w-auto rounded-none uppercase text-xs px-8 bg-[#191817] text-white hover:bg-[#33302D]"
                >
                  Submit Inquiry
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
