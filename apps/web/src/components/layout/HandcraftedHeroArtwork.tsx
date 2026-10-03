'use client';

import React from 'react';
import Image from 'next/image';

interface HandcraftedHeroArtworkProps {
  /** Override or extend the container className */
  className?: string;
  /** Base opacity of the artwork (0–1). Default: 0.78 */
  opacity?: number;
  /** Scale factor. Default: 1 */
  scale?: number;
  /** Whether the artwork is visible. Default: true */
  visible?: boolean;
  /** Position adjustment from top, as CSS value. Default: '4%' */
  topOffset?: string;
}

/**
 * HandcraftedHeroArtwork
 *
 * A decorative left-edge textile artwork element for the KARIGAR hero section.
 * Renders a partially cropped handwoven textile with botanical line motifs,
 * positioned absolutely on the left side of the hero.
 *
 * The artwork image can be swapped out by replacing `/images/hero-textile-artwork.jpg`
 * in the public directory. The component architecture remains unchanged.
 *
 * Hidden on mobile (<768px) to prevent content overlap.
 */
export function HandcraftedHeroArtwork({
  className = '',
  opacity = 0.78,
  scale = 1,
  visible = true,
  topOffset = '4%',
}: HandcraftedHeroArtworkProps) {
  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={`hero-textile-artwork ${className}`}
      style={{
        position: 'absolute',
        left: 0,
        top: topOffset,
        bottom: '8%',
        width: 'clamp(160px, 18vw, 300px)',
        zIndex: 1,
        pointerEvents: 'none',
        userSelect: 'none',
        overflow: 'visible',
        transform: `scale(${scale})`,
        transformOrigin: 'left center',
      }}
    >
      {/* Primary textile image — cropped by the left viewport edge */}
      <div
        className="hero-textile-artwork__image"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          opacity,
          WebkitMaskImage:
            'linear-gradient(to right, black 50%, rgba(0,0,0,0.4) 78%, transparent 100%)',
          maskImage:
            'linear-gradient(to right, black 50%, rgba(0,0,0,0.4) 78%, transparent 100%)',
        }}
      >
        <Image
          src="/images/hero-textile-artwork.jpg"
          alt=""
          fill
          sizes="(max-width: 1024px) 160px, 300px"
          className="object-cover object-left-top"
          quality={85}
          priority={false}
          loading="lazy"
        />
      </div>

      {/* Subtle SVG botanical line-art overlay — extends upward from the textile */}
      <svg
        className="hero-textile-artwork__botanicals"
        viewBox="0 0 200 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          top: '-12%',
          left: '15%',
          width: '75%',
          height: '40%',
          opacity: 0.35,
          pointerEvents: 'none',
        }}
      >
        {/* Stem 1 — tall graceful curve */}
        <path
          d="M80 580 Q78 440 72 340 Q65 260 58 200 Q52 150 60 90 Q65 50 70 20"
          stroke="#A39585"
          strokeWidth="1.1"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
        {/* Leaf cluster on stem 1 */}
        <path
          d="M60 200 Q48 185 40 170 Q45 180 60 190"
          stroke="#A39585"
          strokeWidth="0.8"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M60 180 Q72 168 78 152 Q70 165 60 175"
          stroke="#A39585"
          strokeWidth="0.8"
          fill="none"
          opacity="0.5"
        />

        {/* Stem 2 — shorter, slightly right */}
        <path
          d="M120 580 Q118 480 115 400 Q112 340 108 290 Q105 240 110 180"
          stroke="#B5A898"
          strokeWidth="0.9"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
        {/* Small leaves on stem 2 */}
        <path
          d="M108 310 Q95 298 88 285"
          stroke="#B5A898"
          strokeWidth="0.7"
          fill="none"
          opacity="0.4"
        />
        <path
          d="M110 280 Q120 265 126 250"
          stroke="#B5A898"
          strokeWidth="0.7"
          fill="none"
          opacity="0.4"
        />

        {/* Stem 3 — delicate grass-like */}
        <path
          d="M150 580 Q148 500 145 430 Q142 370 140 310 Q138 260 142 200 Q144 160 148 120"
          stroke="#C4B8A8"
          strokeWidth="0.7"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
        />

        {/* Stem 4 — leftmost, very subtle */}
        <path
          d="M40 580 Q38 510 36 440 Q34 380 38 310 Q42 260 40 210"
          stroke="#A39585"
          strokeWidth="0.6"
          strokeLinecap="round"
          fill="none"
          opacity="0.3"
        />
        {/* Tiny seed head */}
        <ellipse cx="40" cy="210" rx="3" ry="5" fill="#A39585" opacity="0.2" />

        {/* Small terracotta accent dots (woven-detail feel) */}
        <circle cx="95" cy="420" r="1.5" fill="#B8532F" opacity="0.15" />
        <circle cx="70" cy="380" r="1" fill="#B8532F" opacity="0.12" />
        <circle cx="130" cy="460" r="1.2" fill="#B8532F" opacity="0.1" />
      </svg>
    </div>
  );
}
