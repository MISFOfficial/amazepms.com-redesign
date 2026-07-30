"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { servicesHeroData } from "./Content";

export const HeroTitle: React.FC = () => {
  return (
    <div className="space-y-3 max-w-3xl mx-auto text-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-[11px] font-mono font-semibold uppercase tracking-widest rounded-full">
        <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
        <span>{servicesHeroData.badge}</span>
      </div>

      {/* Main Title */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
        {servicesHeroData.title}{" "}
        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-300 bg-clip-text text-transparent">
          {servicesHeroData.titleHighlight}
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
        {servicesHeroData.subtitle}
      </p>
    </div>
  );
};

export default HeroTitle;
