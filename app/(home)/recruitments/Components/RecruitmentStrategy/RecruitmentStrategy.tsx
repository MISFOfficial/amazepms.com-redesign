"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, MapPin, Sparkles } from "lucide-react";
import { recruitmentStrategyData } from "./components/Content";

export function RecruitmentStrategy() {
  return (
    <section className="relative w-full bg-slate-950 py-16 sm:py-24 border-b border-blue-950/80 overflow-hidden text-white">
      {/* Background Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      <div className="ratio relative z-10">
        {/* Section Header matching Screenshot */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-950/90 border border-cyan-500/30 text-cyan-300 text-xs font-semibold rounded-full shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span className="font-mono uppercase text-[11px] sm:text-xs">RECRUITMENT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            {recruitmentStrategyData.title}
          </h2>
        </div>

        {/* Card Body Container */}
        <div className="max-w-4xl mx-auto bg-[#071330] rounded-3xl p-6 sm:p-10 border border-blue-900/40 shadow-2xl space-y-8">
          {/* Man Power Sourcing Subhead */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight text-center sm:text-left flex items-center gap-2 justify-center sm:justify-start">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span>{recruitmentStrategyData.subhead1}</span>
            </h3>

            {/* 2 Column Sourcing List matching Screenshot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Column 1 */}
              <div className="space-y-3">
                {recruitmentStrategyData.column1.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-slate-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="space-y-3">
                {recruitmentStrategyData.column2.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-slate-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Background Verification Box matching Screenshot */}
          <div className="pt-6 border-t border-white/10 space-y-3 text-center sm:text-left">
            <h4 className="text-lg font-bold text-cyan-300 flex items-center justify-center sm:justify-start gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <span>{recruitmentStrategyData.subhead2}</span>
            </h4>

            <div className="p-4 sm:p-5 rounded-2xl bg-blue-950/80 border border-cyan-500/30 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              {recruitmentStrategyData.backgroundVerificationText}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecruitmentStrategy;
