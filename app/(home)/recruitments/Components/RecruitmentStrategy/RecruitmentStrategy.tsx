"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, MapPin, Sparkles } from "lucide-react";
import { recruitmentStrategyData } from "./components/Content";

export function RecruitmentStrategy() {
  return (
    <section className="relative w-full bg-[var(--white)] py-16 sm:py-24 border-b border-[var(--primary)]/10 overflow-hidden text-[var(--black)]">
      <div className="ratio relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-semibold rounded-full shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[var(--secondary)]" />
            <span className="font-mono uppercase text-[11px] sm:text-xs">RECRUITMENT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--black)] tracking-tight leading-tight">
            {recruitmentStrategyData.title}
          </h2>
        </div>

        {/* Card Body Container */}
        <div className="max-w-4xl mx-auto bg-[var(--white)] rounded-3xl p-6 sm:p-10 border border-[var(--primary)]/20 shadow-xl space-y-8">
          {/* Man Power Sourcing Subhead */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--primary)] tracking-tight text-center sm:text-left flex items-center gap-2 justify-center sm:justify-start">
              <MapPin className="w-5 h-5 text-[var(--secondary)]" />
              <span>{recruitmentStrategyData.subhead1}</span>
            </h3>

            {/* 2 Column Sourcing List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Column 1 */}
              <div className="space-y-3">
                {recruitmentStrategyData.column1.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[var(--primary)]/5 border border-[var(--primary)]/15"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[var(--secondary)] shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-[var(--black)]/80">
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
                    className="flex items-center gap-3 p-3 rounded-xl bg-[var(--primary)]/5 border border-[var(--primary)]/15"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[var(--secondary)] shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-[var(--black)]/80">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Background Verification Box */}
          <div className="pt-6 border-t border-[var(--primary)]/15 space-y-3 text-center sm:text-left">
            <h4 className="text-lg font-bold text-[var(--primary)] flex items-center justify-center sm:justify-start gap-2">
              <ShieldCheck className="w-5 h-5 text-[var(--secondary)]" />
              <span>{recruitmentStrategyData.subhead2}</span>
            </h4>

            <div className="p-4 sm:p-5 rounded-2xl bg-[var(--primary)]/5 border border-[var(--primary)]/20 text-xs sm:text-sm text-[var(--black)]/80 leading-relaxed font-sans font-normal">
              {recruitmentStrategyData.backgroundVerificationText}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecruitmentStrategy;

