'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Heart, User, Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Discover', href: '/' },
  { label: 'Makers', href: '/makers' },
  { label: 'Craft Stories', href: '/stories' },
  { label: 'Objects', href: '/objects' },
  { label: 'Categories', href: '/categories' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E5DFD4] transition-all">
      {/* Top Bar */}
      <div className="bg-[#242220] text-[#EFEBE4] text-[11px] font-medium tracking-widest uppercase py-2 px-4 text-center">
        <div className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
          <span>Directly from artisans</span>
          <span className="text-[#6E6962] font-normal">|</span>
          <span>Authentic craft</span>
          <span className="text-[#6E6962] font-normal">|</span>
          <span>Custom commissions</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile menu trigger */}
          <button
            type="button"
            className="md:hidden p-2 text-[#191817] hover:text-[#B8532F] focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Editorial Brand / Logo */}
          <div className="flex items-center gap-8">
            <Link href="/" className="group flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl tracking-tight text-[#191817] group-hover:text-[#B8532F] transition-colors">
                KARIGAR
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#787268] font-sans -mt-1">
                Atelier & Craft Lineage
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-7">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-xs uppercase tracking-wider font-medium transition-colors duration-150 ${
                      isActive
                        ? 'text-[#B8532F] border-b border-[#B8532F] pb-0.5'
                        : 'text-[#4F4B45] hover:text-[#191817]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right Action Icons: Search | Wishlist | Account */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="flex items-center gap-1.5 p-2 text-[#4F4B45] hover:text-[#191817] transition-colors"
              aria-label="Search artisans and crafts"
            >
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline text-xs uppercase tracking-wider font-medium">Search</span>
            </button>

            <Link
              href="/customer/wishlist"
              className="flex items-center gap-1.5 p-2 text-[#4F4B45] hover:text-[#191817] transition-colors relative"
              aria-label="View curated wishlist"
            >
              <Heart className="w-4 h-4" />
              <span className="hidden sm:inline text-xs uppercase tracking-wider font-medium">Wishlist</span>
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#B8532F] rounded-full" />
            </Link>

            <Link
              href="/login"
              className="flex items-center gap-1.5 p-2 text-[#4F4B45] hover:text-[#191817] transition-colors"
              aria-label="Account sign in"
            >
              <User className="w-4 h-4" />
              <span className="hidden sm:inline text-xs uppercase tracking-wider font-medium">Account</span>
            </Link>
          </div>
        </div>

        {/* Search inline reveal */}
        {searchOpen && (
          <div className="py-4 border-t border-[#E5DFD4] transition-all">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by craft tradition (e.g. Ajrakh, Pashmina, Dhokra), maker, or region..."
                className="w-full bg-[#F4EFEA] border-none px-4 py-3 text-sm text-[#191817] placeholder-[#8F887E] focus:outline-none focus:ring-1 focus:ring-[#B8532F] rounded-sm"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs uppercase tracking-wider text-[#6E6962] hover:text-[#191817]"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E5DFD4] bg-[#FAF8F5] px-6 py-8 space-y-6">
          <nav className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-serif text-[#191817] hover:text-[#B8532F] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-6 border-t border-[#E5DFD4] flex flex-col space-y-3">
            <Link
              href="/makers"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs uppercase tracking-wider font-medium text-[#B8532F]"
            >
              Discover Verified Makers
            </Link>
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs uppercase tracking-wider font-medium text-[#4F4B45]"
            >
              Patron & Artisan Sign In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
