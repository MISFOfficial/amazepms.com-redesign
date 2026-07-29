"use client";

import React from "react";
import { Grid } from "lucide-react";

export const SegmentsHeader: React.FC = () => {
  return (
    <div className="space-y-3 mb-8 sm:mb-10 text-left">
      {/* Tagline Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold rounded-full shadow-xs">
        <Grid className="w-3.5 h-3.5 text-blue-600" />
        <span>INDUSTRIES & PORTFOLIOS</span>
      </div>

      {/* Main Title matching Screenshot */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
        Segments We{" "}
        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
          Cater To
        </span>
      </h2>
    </div>
  );
};

export default SegmentsHeader;
