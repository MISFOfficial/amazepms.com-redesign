"use client";

import React from "react";
import SegmentsHeader from "./components/SegmentsHeader";
import RailwayTrack from "./components/RailwayTrack";

export function Segments() {
  return (
    <section className="relative w-full bg-slate-950 py-16 sm:py-24 border-b border-blue-950/80 overflow-hidden text-white">
      {/* Background Decorative Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Grid Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      <div className="ratio relative z-10">
        {/* Section Header */}
        <div className="text-white">
          <SegmentsHeader />
        </div>

        {/* Railway Track Connected Property Management Animation */}
        <RailwayTrack />
      </div>
    </section>
  );
}

export default Segments;
