"use client";

import React from "react";
import WhyCardStack from "./components/WhyCardStack";

export function Why() {
  return (
    <section className="bg-slate-50 border-b border-slate-200 overflow-hidden relative">
      {/* GSAP ScrollTrigger Pinned Cards Section */}
      <WhyCardStack />
    </section>
  );
}

export default Why;
