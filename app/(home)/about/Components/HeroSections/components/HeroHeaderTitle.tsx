"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export const HeroHeaderTitle: React.FC = () => {
  return (
    <div className="space-y-3 max-w-3xl mx-auto text-center">
      {/* Top Tagline Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-[11px] font-mono font-semibold uppercase tracking-widest rounded-full">
        <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
        <span>WHO WE ARE</span>
      </div>

      {/* Main Page Title */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
        About{" "}
        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-300 bg-clip-text text-transparent">
          Amaze PMS
        </span>
      </h1>

      {/* Short Clean Subtitle */}
      <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
        Empowering 500+ commercial towers and gated communities across PAN India with 100% in-house workforce, military-grade compliance, and cost-saving audits.
      </p>
    </div>
  );
};

export default HeroHeaderTitle;
