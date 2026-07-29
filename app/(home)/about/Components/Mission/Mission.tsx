"use client";

import React from "react";
import MissionHeader from "./components/MissionHeader";
import MissionScalingStack from "./components/MissionScalingStack";

export function Mission() {
  return (
    <section className="relative w-full bg-slate-50 py-16 sm:py-24 border-b border-slate-200 overflow-hidden">
      <div className="ratio">
        {/* Section Header */}
        <MissionHeader />

        {/* GSAP Scaling Cards & Constellation Container */}
        <MissionScalingStack />
      </div>
    </section>
  );
}

export default Mission;
