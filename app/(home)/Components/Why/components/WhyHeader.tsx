"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export const WhyHeader: React.FC = () => {
  return (
    <div className="text-center max-w-3xl mx-auto space-y-1.5 sm:space-y-2 mb-0 px-2">
      {/* Main Title */}
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[var(--black)] tracking-tight leading-tight">
        Why Choose <span className="text-[var(--secondary)]">Amaze PMS</span>
      </h2>

      {/* Subtitle */}
      <p className="text-[11px] sm:text-xs md:text-sm text-[var(--black)]/70 leading-normal sm:leading-relaxed font-sans max-w-xl mx-auto">
        Empowering 500+ commercial towers and gated communities across PAN India
        with 100% in-house staff, military-grade compliance, and cost-saving
        audits.
      </p>
    </div>
  );
};

export default WhyHeader;
