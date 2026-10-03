import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function AssamFeatureSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative border-y border-[#E5DFD4] py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Editorial Text Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B8532F] font-semibold">
                <span>From Assam</span>
                <span className="text-[#C5BFB5]">•</span>
                <span lang="as" className="font-assamese text-sm text-[#8C8477]">
                  ব্ৰহ্মপুত্ৰৰ ঐতিহ্য
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#191817] leading-[1.12]">
                Craft traditions shaped by river, forest and generations of makers.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#5C574F] font-light leading-relaxed">
              In the golden loom villages of Sualkuchi and the river sandbars of Majuli, craft is not an industry—it is a continuous kinship with natural silk cocoons, river bamboo, and bell-metal metallurgy.
            </p>

            <div className="pt-1 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 bg-[#F4EFEA] text-[#191817] border border-[#E5DFD4]">
                Muga Golden Silk · Sualkuchi
              </span>
              <span className="px-3 py-1 bg-[#F4EFEA] text-[#191817] border border-[#E5DFD4]">
                Bell Metal Forge · Sarthebari
              </span>
              <span className="px-3 py-1 bg-[#F4EFEA] text-[#191817] border border-[#E5DFD4]">
                Bamboo Craft · Majuli
              </span>
            </div>

            <div className="pt-2">
              <Link
                href="/artisans?region=assam"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#191817] hover:text-[#B8532F] group transition-colors"
              >
                <span className="border-b border-[#191817] group-hover:border-[#B8532F] pb-0.5 transition-colors">
                  Discover Assamese Masters
                </span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Large Visual Column */}
          <div className="lg:col-span-7">
            <div className="group relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#ECE5DC] rounded-sm">
              <Image
                src="/images/assam-muga-weaving.jpg"
                alt="Master Assamese weaver at the wooden frame loom in Sualkuchi crafting golden Muga silk"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white text-xs font-light">
                <p className="font-serif text-lg text-white font-normal">
                  Sualkuchi, Kamrup • The Silk Village
                </p>
                <p className="text-[#DDD6CB] text-[11px] mt-0.5">
                  Natural wild Antheraea assamensis golden cocoon weaving
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
