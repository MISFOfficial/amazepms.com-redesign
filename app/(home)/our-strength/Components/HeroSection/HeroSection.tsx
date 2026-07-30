"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full bg-[var(--white)] py-16 sm:py-20 lg:py-24 border-b border-[var(--primary)]/10 overflow-hidden text-center text-[var(--black)]">
      {/* Background Skyscraper City Image with Light Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="/hero_tower.png"
          alt="Amaze PMS Our Strength Skyscraper"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--white)]/70" />
      </div>

      <div className="ratio relative z-10 flex flex-col items-center justify-center space-y-3">
        {/* Page Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--primary)]">
          Our Strength
        </h1>

        {/* Breadcrumb Navigation: Home > Our Strength */}
        <nav className="inline-flex items-center gap-2 text-xs sm:text-sm text-[var(--black)]/70 font-medium">
          <Link href="/" className="hover:text-[var(--secondary)] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          <span className="text-[var(--secondary)] font-semibold">Our Strength</span>
        </nav>
      </div>
    </section>
  );
}

export default HeroSection;

