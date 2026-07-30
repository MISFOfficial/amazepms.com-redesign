"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import PropertyPattern from "@/app/Global/Patterns/PropertyPattern";

export function HeroSection() {
  return (
    <section className="relative w-full bg-[var(--white)] py-16 sm:py-20 lg:py-24 border-b border-[var(--primary)]/10 overflow-hidden text-center text-[var(--black)]">
      <PropertyPattern />

      <div className="ratio relative z-10 flex flex-col items-center justify-center space-y-3">
        {/* Page Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--primary)]">
          Careers
        </h1>
      </div>
    </section>
  );
}

export default HeroSection;
