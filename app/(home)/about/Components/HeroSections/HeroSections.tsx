"use client";

import React from "react";
import HeroBreadcrumb from "./components/HeroBreadcrumb";
import HeroHeaderTitle from "./components/HeroHeaderTitle";

export function HeroSections() {
  return (
    <section className="relative w-full bg-[#030e28] py-16 sm:py-20 lg:py-24 border-b border-blue-900/40 overflow-hidden">
      {/* Ambient Radial Blue Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

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