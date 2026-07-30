"use client";

import React from "react";
import HeroBreadcrumb from "./components/HeroBreadcrumb";
import HeroHeaderTitle from "./components/HeroHeaderTitle";

export function HeroSections() {
  return (
    <section className="relative w-full bg-[var(--white)] text-[var(--black)] py-16 sm:py-20 lg:py-24 border-b border-[var(--primary)]/10 overflow-hidden">
      <div className="ratio relative z-10 text-center flex flex-col items-center justify-center">
        {/* Breadcrumb Navigation */}
        <HeroBreadcrumb />

        {/* Clean Page Title & Short Subtitle */}
        <HeroHeaderTitle />
      </div>
    </section>
  );
}

export default HeroSections;