"use client";

import React from "react";
import HeroHeaderTitle from "./components/HeroHeaderTitle";
import PropertyPattern from "@/app/Global/Patterns/PropertyPattern";

export function HeroSections() {
  return (
    <section className="relative w-full bg-[var(--white)] text-[var(--black)] py-16 sm:py-20 lg:py-24 border-b border-[var(--primary)]/10 overflow-hidden">
      {/* Bright Construction & Architectural Blueprint Background Overlay */}
      <PropertyPattern variant="construction" opacity={0.18} />

      <div className="ratio relative z-10 text-center flex flex-col items-center justify-center">
        {/* Clean Page Title & Short Subtitle */}
        <HeroHeaderTitle />
      </div>
    </section>
  );
}

export default HeroSections;


