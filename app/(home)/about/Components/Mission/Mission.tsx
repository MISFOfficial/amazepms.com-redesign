"use client";

import React from "react";
import MissionHeader from "./components/MissionHeader";
import MissionScalingStack from "./components/MissionScalingStack";

export function Mission() {
  return (
    <section className="relative w-full bg-[var(--white)] py-16 sm:py-24 border-b border-[var(--primary)]/10 overflow-hidden">
      <div className="ratio">
        {/* Section Header */}
        <MissionHeader />

        {/* GSAP Scaling Cards Container */}
        <MissionScalingStack />
      </div>
    </section>
  );
}

export default Mission;

