'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Badge } from '@karigar/ui';
import { MOCK_ARTISANS, MOCK_PRODUCTS } from '@/data/mock-data';
import {
  ShieldCheck,
  Package,
  Plus,
  CheckCircle2,
  Clock,
  Award,
  Upload,
  ChevronRight,
  Sparkles,
  FileText,
  AlertCircle,
  Eye,
  Lock,
} from 'lucide-react';

export default function ArtisanPortalPage() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'apply' | 'new-creation'>('dashboard');

  // Artisan Application form state
  const [appSubmitted, setAppSubmitted] = useState(false);
  const [appForm, setAppForm] = useState({
    artisanName: '',
    craftName: '',
    heritageLineage: '',
    experienceYears: '',
    state: 'Assam',
    district: '',
    villageOrTown: '',
    giNumber: '',
    materialsDescription: '',
    nationalAwardee: false,
  });

  // New Creation submission state
  const [creationSubmitted, setCreationSubmitted] = useState(false);
  const [myCreations, setMyCreations] = useState([
    {
      id: 'cr-001',
      title: 'Handcrafted Wildflower Bouquet with Botanical Combed Cotton',
      category: 'Flowers & Bouquets',
      price: 2850,
      status: 'PUBLISHED',
      productionType: 'Ready to Ship',
      submittedAt: '12 Oct 2026',
    },
    {
      id: 'cr-002',
      title: 'Monsoon Lotus Stem Arrangement with Natural Indigo Dye',
      category: 'Flowers & Bouquets',
      price: 3200,
      status: 'IN_CURATION_REVIEW',
      productionType: 'Made to Order (4 days)',
      submittedAt: 'Yesterday',
    },
    {
      id: 'cr-003',
      title: 'Embroidered Wild Rose Keepsake Linen Hoop',
      category: 'Home Decor',
      price: 1950,
      status: 'PUBLISHED',
      productionType: 'Ready to Ship',
      submittedAt: '04 Oct 2026',
    },
  ]);

  const [newCreationForm, setNewCreationForm] = useState({
    title: '',
    category: 'Flowers & Bouquets',
    price: '',
    materials: '',
    productionType: 'Ready to Ship',
    makingDays: '3',
    story: '',
  });

  const handleAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAppSubmitted(true);
  };

  const handleCreationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry = {
      id: `cr-${Date.now()}`,
      title: newCreationForm.title || 'Untitled Creation',
      category: newCreationForm.category,
      price: Number(newCreationForm.price) || 2500,
      status: 'IN_CURATION_REVIEW',
      productionType: `${newCreationForm.productionType} (${newCreationForm.makingDays} days)`,
      submittedAt: 'Just now',
    };
    setMyCreations([newEntry, ...myCreations]);
    setCreationSubmitted(true);
    setTimeout(() => {
      setCreationSubmitted(false);
      setActiveTab('dashboard');
      setNewCreationForm({
        title: '',
        category: 'Flowers & Bouquets',
        price: '',
        materials: '',
        productionType: 'Ready to Ship',
        makingDays: '3',
        story: '',
      });
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[#7A746B]">
        <Link href="/" className="hover:text-[#191817]">Home</Link>
        <ChevronRight className="w-3 h-3 text-[#A8A196]" />
        <span className="text-[#191817] font-medium">Artisan Atelier Guild</span>
      </nav>

      {/* Header */}
      <div className="border-b border-[#191817] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Master Artisan Accreditation & Studio Portal</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#191817]">
            Artisan Atelier Sanctuary
          </h1>
          <p className="text-sm text-[#6E6962] font-light leading-relaxed">
            A verified platform built to dignify authentic master craftspeople. Maintain full ownership of your creations, submit new pieces for curatorial review, and access fair direct compensation.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <button
            type="button"
            onClick={() => setActiveTab('dashboard')}
            className={`px-4 py-2 font-medium transition-all ${
              activeTab === 'dashboard'
                ? 'bg-[#191817] text-white'
                : 'bg-[#FAF8F5] text-[#4A463F] border border-[#E5DFD4] hover:bg-[#F0EBE3]'
            }`}
          >
            Studio Dashboard
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('new-creation')}
            className={`px-4 py-2 font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'new-creation'
                ? 'bg-[#191817] text-white'
                : 'bg-[#FAF8F5] text-[#4A463F] border border-[#E5DFD4] hover:bg-[#F0EBE3]'
            }`}
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Submit New Creation</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('apply')}
            className={`px-4 py-2 font-medium transition-all ${
              activeTab === 'apply'
                ? 'bg-[#B8532F] text-white'
                : 'bg-[#FAF8F5] text-[#B8532F] border border-[#B8532F] hover:bg-[#B8532F] hover:text-white'
            }`}
          >
            Apply for Verification
          </button>
        </div>
      </div>

      {/* Demo / Integrity Notice */}
      <div className="p-4 bg-[#FAF8F5] border border-[#E5DFD4] flex items-start gap-3 text-xs text-[#5C574F] rounded-sm">
        <ShieldCheck className="w-4 h-4 text-[#3D5B3A] shrink-0 mt-0.5" />
        <div className="space-y-0.5 leading-relaxed">
          <p className="font-semibold text-[#191817]">Artisan Marketplace Integrity Standards</p>
          <p>
            All published creations undergo rigorous human provenance inspection prior to listing. Unverified claims, synthetic machine-made items, and non-certified origins are strictly excluded from the Karigar Guild.
          </p>
        </div>
      </div>

      {/* Tab 1: Studio Dashboard */}
      {activeTab === 'dashboard' && (
        <div className="space-y-10">
          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-xs">
            <div className="p-5 bg-white border border-[#E5DFD4] space-y-1">
              <span className="text-[#8C8477] uppercase tracking-wider text-[10px]">Active Listed Creations</span>
              <p className="font-serif text-3xl text-[#191817]">
                {myCreations.filter((c) => c.status === 'PUBLISHED').length}
              </p>
              <span className="text-[#295424] font-medium text-[11px]">Live in Catalog</span>
            </div>

            <div className="p-5 bg-white border border-[#E5DFD4] space-y-1">
              <span className="text-[#8C8477] uppercase tracking-wider text-[10px]">Curatorial Review Queue</span>
              <p className="font-serif text-3xl text-[#B8532F]">
                {myCreations.filter((c) => c.status === 'IN_CURATION_REVIEW').length}
              </p>
              <span className="text-[#8C8477] text-[11px]">Under Guild Inspection</span>
            </div>

            <div className="p-5 bg-white border border-[#E5DFD4] space-y-1">
              <span className="text-[#8C8477] uppercase tracking-wider text-[10px]">Direct Patron Inquiries</span>
              <p className="font-serif text-3xl text-[#191817]">4</p>
              <span className="text-[#295424] text-[11px]">Average response: 16 hrs</span>
            </div>

            <div className="p-5 bg-white border border-[#E5DFD4] space-y-1">
              <span className="text-[#8C8477] uppercase tracking-wider text-[10px]">Direct Payout Share</span>
              <p className="font-serif text-3xl text-[#191817]">92%</p>
              <span className="text-[#3D5B3A] font-medium text-[11px]">Zero Middleman Markups</span>
            </div>
          </div>

          {/* Creations Table with Curation Status */}
          <div className="bg-white border border-[#E5DFD4] p-6 sm:p-8 rounded-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E5DFD4] gap-2">
              <div>
                <h2 className="font-serif text-2xl text-[#191817]">Workshop Creations & Review Pipeline</h2>
                <p className="text-xs text-[#787268] mt-0.5">
                  Every submitted creation must be approved by curatorial inspection before publication.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveTab('new-creation')}
                className="text-xs uppercase tracking-wider font-semibold text-[#B8532F] hover:underline flex items-center gap-1 self-start sm:self-auto"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Submit New Creation</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#E5DFD4] text-[#8C8477] uppercase tracking-wider text-[10px]">
                    <th className="pb-3 font-semibold">Creation Title</th>
                    <th className="pb-3 font-semibold">Category</th>
                    <th className="pb-3 font-semibold">Base Price</th>
                    <th className="pb-3 font-semibold">Production Status</th>
                    <th className="pb-3 font-semibold">Curation Status</th>
                    <th className="pb-3 font-semibold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0EBE3]">
                  {myCreations.map((creation) => (
                    <tr key={creation.id} className="hover:bg-[#FAF8F5] transition-colors">
                      <td className="py-4 pr-4 font-serif text-sm text-[#191817] font-medium max-w-xs">
                        {creation.title}
                      </td>
                      <td className="py-4 pr-4 text-[#5C574F]">{creation.category}</td>
                      <td className="py-4 pr-4 font-serif text-sm text-[#191817] font-medium">
                        ₹{creation.price.toLocaleString('en-IN')}
                      </td>
                      <td className="py-4 pr-4 text-[#7A746B]">{creation.productionType}</td>
                      <td className="py-4 pr-4">
                        {creation.status === 'PUBLISHED' ? (
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#295424] bg-[#E8F0E6] px-2.5 py-0.5 rounded-full">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Published (Live)</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#8C531B] bg-[#FDF3E7] px-2.5 py-0.5 rounded-full">
                            <Clock className="w-3 h-3" />
                            <span>Curatorial Review</span>
                          </span>
                        )}
                      </td>
                      <td className="py-4 text-right">
                        <span className="text-[11px] text-[#8C8477] hover:text-[#191817] cursor-pointer">
                          Inspect Specs →
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Submit New Creation */}
      {activeTab === 'new-creation' && (
        <div className="bg-white border border-[#E5DFD4] p-6 sm:p-10 rounded-sm space-y-8 max-w-3xl mx-auto">
          <div className="border-b border-[#191817] pb-4 space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
              Curatorial Submission Workflow
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#191817]">
              Submit Handcrafted Creation for Review
            </h2>
            <p className="text-xs text-[#787268] leading-relaxed">
              New submissions are evaluated against Karigar&apos;s authenticity charter: handmade process, non-toxic natural materials, and fair artisan pricing.
            </p>
          </div>

          {creationSubmitted ? (
            <div className="p-8 bg-[#E8F0E6] border border-[#C5D8C1] text-center space-y-3">
              <CheckCircle2 className="w-8 h-8 text-[#295424] mx-auto" />
              <h3 className="font-serif text-2xl text-[#191817]">Creation Submitted to Curatorial Desk</h3>
              <p className="text-xs text-[#4A5D46] max-w-sm mx-auto leading-relaxed">
                Your creation has entered the guild inspection queue. A curator will review material provenance and photography within 48 hours before publishing.
              </p>
            </div>
          ) : (
            <form onSubmit={handleCreationSubmit} className="space-y-5 text-xs">
              <div>
                <label className="block text-[#4A463F] uppercase tracking-wider mb-1 font-medium">
                  Creation Title *
                </label>
                <input
                  type="text"
                  required
                  value={newCreationForm.title}
                  onChange={(e) => setNewCreationForm({ ...newCreationForm, title: e.target.value })}
                  placeholder="e.g. Botanical Peony Bouquet in Hand-Spun Organic Cotton"
                  className="w-full bg-[#FAF8F5] border border-[#D5CEC2] p-2.5 text-xs text-[#191817] rounded-none focus:outline-none focus:ring-1 focus:ring-[#B8532F]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#4A463F] uppercase tracking-wider mb-1 font-medium">
                    Category *
                  </label>
                  <select
                    value={newCreationForm.category}
                    onChange={(e) => setNewCreationForm({ ...newCreationForm, category: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#D5CEC2] p-2.5 text-xs text-[#191817] rounded-none focus:outline-none focus:ring-1 focus:ring-[#B8532F]"
                  >
                    <option value="Flowers & Bouquets">Flowers & Bouquets</option>
                    <option value="Personalized Gifts">Personalized Gifts</option>
                    <option value="Home Decor">Home Decor</option>
                    <option value="Crochet & Fabric Crafts">Crochet & Fabric Crafts</option>
                    <option value="Jewellery & Accessories">Jewellery & Accessories</option>
                    <option value="Traditional Indian Crafts">Traditional Indian Crafts</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#4A463F] uppercase tracking-wider mb-1 font-medium">
                    Price in INR (₹) *
                  </label>
                  <input
                    type="number"
                    required
                    min={100}
                    value={newCreationForm.price}
                    onChange={(e) => setNewCreationForm({ ...newCreationForm, price: e.target.value })}
                    placeholder="e.g. 2950"
                    className="w-full bg-[#FAF8F5] border border-[#D5CEC2] p-2.5 text-xs text-[#191817] rounded-none focus:outline-none focus:ring-1 focus:ring-[#B8532F]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#4A463F] uppercase tracking-wider mb-1 font-medium">
                    Production Fulfillment *
                  </label>
                  <select
                    value={newCreationForm.productionType}
                    onChange={(e) => setNewCreationForm({ ...newCreationForm, productionType: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#D5CEC2] p-2.5 text-xs text-[#191817] rounded-none focus:outline-none focus:ring-1 focus:ring-[#B8532F]"
                  >
                    <option value="Ready to Ship">Ready to Ship (In Stock)</option>
                    <option value="Made to Order">Made to Order (Handcrafted on Demand)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#4A463F] uppercase tracking-wider mb-1 font-medium">
                    Crafting Lead Time (Days) *
                  </label>
                  <input
                    type="number"
                    required
                    min={1}
                    max={60}
                    value={newCreationForm.makingDays}
                    onChange={(e) => setNewCreationForm({ ...newCreationForm, makingDays: e.target.value })}
                    placeholder="e.g. 4"
                    className="w-full bg-[#FAF8F5] border border-[#D5CEC2] p-2.5 text-xs text-[#191817] rounded-none focus:outline-none focus:ring-1 focus:ring-[#B8532F]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#4A463F] uppercase tracking-wider mb-1 font-medium">
                  Raw Materials & Natural Pigments *
                </label>
                <input
                  type="text"
                  required
                  value={newCreationForm.materials}
                  onChange={(e) => setNewCreationForm({ ...newCreationForm, materials: e.target.value })}
                  placeholder="e.g. 100% Combed Cotton, Madder Root Dye, Florist Copper Wire Core"
                  className="w-full bg-[#FAF8F5] border border-[#D5CEC2] p-2.5 text-xs text-[#191817] rounded-none focus:outline-none focus:ring-1 focus:ring-[#B8532F]"
                />
              </div>

              <div>
                <label className="block text-[#4A463F] uppercase tracking-wider mb-1 font-medium">
                  Craft Story & Technique Description
                </label>
                <textarea
                  rows={4}
                  value={newCreationForm.story}
                  onChange={(e) => setNewCreationForm({ ...newCreationForm, story: e.target.value })}
                  placeholder="Explain how each flower or object is individually hand-sculpted in your studio..."
                  className="w-full bg-[#FAF8F5] border border-[#D5CEC2] p-2.5 text-xs text-[#191817] rounded-none focus:outline-none focus:ring-1 focus:ring-[#B8532F]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <Button
                  type="button"
                  onClick={() => setActiveTab('dashboard')}
                  variant="outline"
                  size="sm"
                  className="rounded-none uppercase text-xs"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  size="sm"
                  className="rounded-none uppercase text-xs bg-[#191817] text-white hover:bg-[#33302D] px-6"
                >
                  Submit for Curatorial Inspection
                </Button>
              </div>
            </form>
          )}
        </div>
      )}

      {/* Tab 3: Guild Application */}
      {activeTab === 'apply' && (
        <div className="bg-white border border-[#E5DFD4] p-6 sm:p-10 rounded-sm space-y-8 max-w-3xl mx-auto">
          <div className="border-b border-[#191817] pb-4 space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
              Artisan Guild Verification
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#191817]">
              Apply for Atelier Verification
            </h2>
            <p className="text-xs text-[#787268] leading-relaxed">
              Are you an independent craftsperson, botanical floral artist, or generational guild leader? Apply to join our curated roster of verified makers.
            </p>
          </div>

          {appSubmitted ? (
            <div className="p-8 bg-[#E8F0E6] border border-[#C5D8C1] text-center space-y-3">
              <CheckCircle2 className="w-8 h-8 text-[#295424] mx-auto" />
              <h3 className="font-serif text-2xl text-[#191817]">Application Received</h3>
              <p className="text-xs text-[#4A5D46] max-w-sm mx-auto leading-relaxed">
                Thank you for applying. A member of our regional guild curatorial board will reach out to schedule an in-studio verification interview.
              </p>
            </div>
          ) : (
            <form onSubmit={handleAppSubmit} className="space-y-5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#4A463F] uppercase tracking-wider mb-1 font-medium">
                    Artisan or Atelier Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={appForm.artisanName}
                    onChange={(e) => setAppForm({ ...appForm, artisanName: e.target.value })}
                    placeholder="e.g. Swapna Karmakar"
                    className="w-full bg-[#FAF8F5] border border-[#D5CEC2] p-2.5 text-xs text-[#191817] rounded-none focus:outline-none focus:ring-1 focus:ring-[#B8532F]"
                  />
                </div>

                <div>
                  <label className="block text-[#4A463F] uppercase tracking-wider mb-1 font-medium">
                    Craft Tradition / Medium *
                  </label>
                  <input
                    type="text"
                    required
                    value={appForm.craftName}
                    onChange={(e) => setAppForm({ ...appForm, craftName: e.target.value })}
                    placeholder="e.g. Botanical Thread Sculpture & Ribbon Art"
                    className="w-full bg-[#FAF8F5] border border-[#D5CEC2] p-2.5 text-xs text-[#191817] rounded-none focus:outline-none focus:ring-1 focus:ring-[#B8532F]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[#4A463F] uppercase tracking-wider mb-1 font-medium">
                    State *
                  </label>
                  <input
                    type="text"
                    required
                    value={appForm.state}
                    onChange={(e) => setAppForm({ ...appForm, state: e.target.value })}
                    placeholder="e.g. Assam"
                    className="w-full bg-[#FAF8F5] border border-[#D5CEC2] p-2.5 text-xs text-[#191817] rounded-none focus:outline-none focus:ring-1 focus:ring-[#B8532F]"
                  />
                </div>

                <div>
                  <label className="block text-[#4A463F] uppercase tracking-wider mb-1 font-medium">
                    District / Region *
                  </label>
                  <input
                    type="text"
                    required
                    value={appForm.district}
                    onChange={(e) => setAppForm({ ...appForm, district: e.target.value })}
                    placeholder="e.g. Kamrup"
                    className="w-full bg-[#FAF8F5] border border-[#D5CEC2] p-2.5 text-xs text-[#191817] rounded-none focus:outline-none focus:ring-1 focus:ring-[#B8532F]"
                  />
                </div>

                <div>
                  <label className="block text-[#4A463F] uppercase tracking-wider mb-1 font-medium">
                    Years of Active Practice *
                  </label>
                  <input
                    type="number"
                    required
                    min={1}
                    value={appForm.experienceYears}
                    onChange={(e) => setAppForm({ ...appForm, experienceYears: e.target.value })}
                    placeholder="e.g. 14"
                    className="w-full bg-[#FAF8F5] border border-[#D5CEC2] p-2.5 text-xs text-[#191817] rounded-none focus:outline-none focus:ring-1 focus:ring-[#B8532F]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#4A463F] uppercase tracking-wider mb-1 font-medium">
                  GI Certificate Registration or Guild Affiliation (If applicable)
                </label>
                <input
                  type="text"
                  value={appForm.giNumber}
                  onChange={(e) => setAppForm({ ...appForm, giNumber: e.target.value })}
                  placeholder="e.g. GI Registration #371 or Sualkuchi Silk Weavers Guild"
                  className="w-full bg-[#FAF8F5] border border-[#D5CEC2] p-2.5 text-xs text-[#191817] rounded-none focus:outline-none focus:ring-1 focus:ring-[#B8532F]"
                />
              </div>

              <div>
                <label className="block text-[#4A463F] uppercase tracking-wider mb-1 font-medium">
                  Studio Philosophy & Materials Used *
                </label>
                <textarea
                  rows={4}
                  required
                  value={appForm.materialsDescription}
                  onChange={(e) => setAppForm({ ...appForm, materialsDescription: e.target.value })}
                  placeholder="Describe your hand process, natural materials, and toolcraft..."
                  className="w-full bg-[#FAF8F5] border border-[#D5CEC2] p-2.5 text-xs text-[#191817] rounded-none focus:outline-none focus:ring-1 focus:ring-[#B8532F]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <Button
                  type="button"
                  onClick={() => setActiveTab('dashboard')}
                  variant="outline"
                  size="sm"
                  className="rounded-none uppercase text-xs"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  size="sm"
                  className="rounded-none uppercase text-xs bg-[#191817] text-white hover:bg-[#33302D] px-6"
                >
                  Submit Application for Guild Verification
                </Button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
