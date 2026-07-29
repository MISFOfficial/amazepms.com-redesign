"use client";

import React from "react";
import { ClipboardCheck, CheckCircle2, UserCheck, Shield } from "lucide-react";

export const SegmentsVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[300px] rounded-2xl bg-gradient-to-br from-slate-100 via-blue-50/50 to-slate-50 border border-slate-200/90 p-6 flex flex-col items-center justify-center text-center shadow-inner overflow-hidden group">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none" />

      {/* Decorative Floating Circle */}
      <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-cyan-100/70 border border-cyan-200 flex items-center justify-center relative z-10 shadow-lg group-hover:scale-105 transition-transform duration-500">
        {/* Checklist Board Emblem matching screenshot */}
        <div className="w-24 h-28 bg-white rounded-xl shadow-md border border-slate-200 p-3 flex flex-col justify-between">
          <div className="flex items-center gap-1.5 border-b border-slate-100 pb-2">
            <ClipboardCheck className="w-4 h-4 text-cyan-600 shrink-0" />
            <div className="h-1.5 w-12 bg-slate-200 rounded-full" />
          </div>

          <div className="space-y-1.5 py-1">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
              <div className="h-1 w-10 bg-slate-200 rounded-full" />
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
              <div className="h-1 w-8 bg-slate-200 rounded-full" />
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
              <div className="h-1 w-11 bg-slate-200 rounded-full" />
            </div>
          </div>

          <div className="pt-1 border-t border-slate-100 flex items-center justify-between">
            <UserCheck className="w-3.5 h-3.5 text-blue-600" />
            <Shield className="w-3.5 h-3.5 text-indigo-600" />
          </div>
        </div>
      </div>

      {/* Text Label */}
      <div className="mt-4 relative z-10 space-y-0.5">
        <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider block">
          12+ Key Sectors
        </span>
        <span className="text-[11px] text-slate-500 font-sans block">
          Tailored SOPs for Every Industry
        </span>
      </div>
    </div>
  );
};

export default SegmentsVisual;
