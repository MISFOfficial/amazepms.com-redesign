"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export const WhyHeader: React.FC = () => {
  return (
    <div className="text-center max-w-3xl mx-auto space-y-1.5 sm:space-y-2 mb-0 px-2">
      {/* Top Tagline Badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-200/80 text-blue-700 text-[10px] sm:text-xs font-semibold rounded-full shadow-xs">
        <Sparkles className="w-3 h-3 text-blue-600 shrink-0" />
        <span>OUR SERVICE BENEFITS & ADVANTAGES</span>
      </div>

      {/* Main Title */}
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-tight">
        Why Choose{" "}
        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
          Amaze PMS
        </span>
      </h2>

      {/* Subtitle */}
      <p className="text-[11px] sm:text-xs md:text-sm text-slate-600 leading-normal sm:leading-relaxed font-sans max-w-xl mx-auto">
        Empowering 500+ commercial towers and gated communities across PAN India
        with 100% in-house staff, military-grade compliance, and cost-saving
        audits.
      </p>
    </div>
  );
};

export default WhyHeader;
