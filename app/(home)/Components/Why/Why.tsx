"use client";

import React from "react";
import WhyCardStack from "./components/WhyCardStack";

export function Why() {
  return (
    <section className="bg-[var(--white)] border-b border-[var(--primary)]/10 overflow-hidden relative">
      {/* GSAP ScrollTrigger Pinned Cards Section */}
      <WhyCardStack />
    </section>
  );
}

export default Why;

