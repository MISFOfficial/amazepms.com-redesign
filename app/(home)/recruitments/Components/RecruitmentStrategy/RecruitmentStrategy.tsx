"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, MapPin, Users, Award } from "lucide-react";
import { recruitmentStrategyData } from "./components/Content";

export function RecruitmentStrategy() {
  const allSourcingItems = [
    ...recruitmentStrategyData.column1,
    ...recruitmentStrategyData.column2,
  ];

  return (
    <section className="relative w-full bg-[var(--white)] py-16 sm:py-24 border-b border-[var(--primary)]/10 overflow-hidden text-[var(--black)]">
      <div className="ratio relative z-10 space-y-12">
        {/* 2-Column Split Structure (Zero Shadows) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 max-w-6xl mx-auto items-stretch">
          {/* Left Column: Manpower Sourcing Networks (7 cols) */}
          <div className="lg:col-span-7 bg-[var(--white)] primary-rounded p-6 sm:p-8 border border-[var(--primary)]/20 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-[var(--primary)]/15">
                <div className="w-10 h-10 primary-rounded bg-[var(--primary)]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[var(--secondary)]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--primary)] tracking-tight">
                    {recruitmentStrategyData.subhead1}
                  </h3>
                  <span className="text-[11px] text-[var(--black)]/60 font-mono uppercase tracking-wider">
                    PAN India Talent Reach
                  </span>
                </div>
              </div>

              {/* Sourcing Hubs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {allSourcingItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3.5 primary-rounded bg-[var(--primary)]/5 border border-[var(--primary)]/15 hover:border-[var(--secondary)] transition-all duration-300 group"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[var(--secondary)] shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-xs sm:text-sm font-semibold text-[var(--black)]/90">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Background Verification (5 cols) */}
          <div className="lg:col-span-5 bg-[var(--primary)]/5 primary-rounded p-6 sm:p-8 border border-[var(--primary)]/20 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-[var(--primary)]/15">
                <div className="w-10 h-10 primary-rounded bg-[var(--primary)] text-[var(--white)] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[var(--secondary)]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--primary)] tracking-tight">
                    {recruitmentStrategyData.subhead2}
                  </h3>
                  <span className="text-[11px] text-[var(--black)]/60 font-mono uppercase tracking-wider">
                    Military-Grade Compliance
                  </span>
                </div>
              </div>

              <div className="bg-[var(--white)] primary-rounded p-5 border border-[var(--primary)]/15 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--secondary)]">
                  <Award className="w-4 h-4" />
                  <span>Police Supervision</span>
                </div>
                <p className="text-xs sm:text-sm text-[var(--black)]/80 leading-relaxed font-sans font-normal">
                  {recruitmentStrategyData.backgroundVerificationText}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 primary-rounded bg-[var(--primary)]/10 border border-[var(--primary)]/20">
              <Users className="w-4 h-4 text-[var(--primary)] shrink-0" />
              <span className="text-xs font-semibold text-[var(--primary)]">
                100% On-Roll In-House Verified Workforce
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecruitmentStrategy;
