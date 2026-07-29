"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const WhyHeader: React.FC = () => {
  return (
    <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
      {/* Top Tagline Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold rounded-full shadow-xs">
        <Sparkles className="w-3.5 h-3.5 text-blue-600" />
        <span>OUR SERVICE BENEFITS & ADVANTAGES</span>
      </div>

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-[1.15]">
        Why Choose{" "}
        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
          Amaze PMS
        </span>
      </h2>

      {/* Subtitle */}
      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans max-w-2xl mx-auto">
        Empowering 500+ commercial towers and gated communities across PAN India with 100% in-house staff, military-grade compliance, and cost-saving audits.
      </p>
    </div>
  );
};

export default WhyHeader;
