"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ClipboardCheck, Sparkles } from "lucide-react";
import { auditsData } from "./components/Content";

export function AuditsSection() {
  return (
    <section className="relative w-full bg-slate-950 py-16 sm:py-24 border-b border-blue-950/80 overflow-hidden text-white">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="ratio relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-950/90 border border-cyan-500/30 text-cyan-300 text-xs font-semibold rounded-full shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span className="font-mono uppercase text-[11px] sm:text-xs">
              QUALITY CONTROL
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            {auditsData.title}
          </h2>

          <p className="text-xs sm:text-sm font-mono font-semibold text-cyan-400 uppercase tracking-widest">
            {auditsData.subtitle}
          </p>
        </div>

        {/* Content Container */}
        <div className="bg-[#071330] rounded-3xl p-6 sm:p-10 border border-blue-900/40 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Side: 13 Audit Items Grid */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <ClipboardCheck className="w-6 h-6 text-cyan-400" />
              <h3 className="text-xl font-bold text-white tracking-tight">
                Comprehensive Audit Scope
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {auditsData.auditsList.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Audit Imagery */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-white/15 shadow-lg group">
              <Image
                src="/hero_interior.png"
                alt="Audit Review Team"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071330] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider block">
                  ISO 9001 Audits
                </span>
                <span className="text-sm font-bold text-white block">
                  Semi-Annual Facility Performance Review
                </span>
              </div>
            </div>

            <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-white/15 shadow-lg group">
              <Image
                src="/why_excellence.png"
                alt="Management Compliance Review"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071330] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider block">
                  EHS & Risk Compliance
                </span>
                <span className="text-sm font-bold text-white block">
                  On-Site Safety & Process Inspection
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuditsSection;
