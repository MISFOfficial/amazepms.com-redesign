"use client";

import React from "react";
import SegmentsHeader from "./components/SegmentsHeader";
import RailwayTrack from "./components/RailwayTrack";

export function Segments() {
  return (
    <section className="relative w-full bg-[var(--white)] py-16 sm:py-24 border-b border-[var(--primary)]/10 overflow-hidden text-[var(--black)]">
      <div className="ratio relative z-10">
        {/* Section Header */}
        <div>
          <SegmentsHeader />
        </div>

        {/* Railway Track Connected Property Management Animation */}
        <RailwayTrack />
      </div>
    </section>
  );
}

export default Segments;

