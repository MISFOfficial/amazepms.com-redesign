"use client";

import React from "react";
import WhyHeader from "./components/WhyHeader";
import WhyCardStack from "./components/WhyCardStack";

export function Why() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 overflow-hidden relative">
      {/* Background Decorative Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="ratio relative z-10">
        {/* Section Header */}
        <WhyHeader />

        {/* Stacked Overlapping GSAP Cards Container */}
        <WhyCardStack />
      </div>
    </section>
  );
}

export default Why;