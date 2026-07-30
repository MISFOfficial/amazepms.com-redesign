"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full bg-[#051336] py-16 sm:py-20 lg:py-24 border-b border-blue-900/40 overflow-hidden text-center text-white">
      {/* Background Skyscraper City Image with Dark Overlay matching Screenshot */}
      <div className="absolute inset-0 z-0 opacity-25">
        <Image
          src="/hero_building.png"
          alt="Amaze PMS Careers Skyscraper"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#051336]/80 mix-blend-multiply" />
      </div>

      <div className="ratio relative z-10 flex flex-col items-center justify-center space-y-3">
        {/* Title matching Screenshot */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          Careers
        </h1>

        {/* Breadcrumb matching Screenshot: Home > Careers */}
        <nav className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-cyan-400 font-semibold">Careers</span>
        </nav>
      </div>
    </section>
  );
}

export default HeroSection;
