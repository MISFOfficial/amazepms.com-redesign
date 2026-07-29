"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export const SegmentsHeader: React.FC = () => {
  return (
    <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
      {/* Railway Track Concept Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-950/90 border border-cyan-500/30 text-cyan-300 text-xs font-semibold rounded-full shadow-xs">
        <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
        <span className="font-mono uppercase text-[11px] sm:text-xs">
          CONNECTING INDIA'S PROPERTY ECOSYSTEM
        </span>
      </div>

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
        Segments We{" "}
        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-300 bg-clip-text text-transparent">
          Cater To
        </span>
      </h2>

      {/* Narrative Subtitle */}
      <p className="text-xs sm:text-sm md:text-base text-slate-300 font-sans max-w-xl mx-auto leading-relaxed">
        An interconnected operational network providing tailored facility
        management and compliance across 12 strategic sectors.
      </p>
    </div>
  );
};

export default SegmentsHeader;
