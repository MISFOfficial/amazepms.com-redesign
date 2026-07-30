"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export const HeroHeaderTitle: React.FC = () => {
  return (
    <div className="space-y-3 max-w-3xl mx-auto text-center">
      {/* Main Page Title */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--black)] tracking-tight leading-tight">
        About <span className="text-[var(--secondary)]">Amaze PMS</span>
      </h1>

      {/* Short Clean Subtitle */}
      <p className="text-sm sm:text-base text-[var(--black)]/80 leading-relaxed font-sans max-w-2xl mx-auto font-normal">
        Empowering 500+ commercial towers and gated communities across PAN India
        with 100% in-house workforce, military-grade compliance, and cost-saving
        audits.
      </p>
    </div>
  );
};

export default HeroHeaderTitle;
