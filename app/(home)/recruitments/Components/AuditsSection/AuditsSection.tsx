"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ClipboardCheck, Sparkles } from "lucide-react";
import { auditsData } from "./components/Content";
import PropertyPattern from "@/app/Global/Patterns/PropertyPattern";

export function AuditsSection() {
  return (
    <section className="relative w-full bg-[var(--white)] py-16 sm:py-24 border-b border-[var(--primary)]/10 overflow-hidden text-[var(--black)]">
      <PropertyPattern />

      <div className="ratio relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--black)] tracking-tight leading-tight">
            {auditsData.title}
          </h2>

          <p className="text-xs sm:text-sm font-mono font-bold text-[var(--secondary)] uppercase tracking-widest">
            {auditsData.subtitle}
          </p>
        </div>

        {/* Content Container */}
        <div className="bg-[var(--white)] primary-rounded p-6 sm:p-10 border border-[var(--primary)]/20  grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Side: 13 Audit Items Grid */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <ClipboardCheck className="w-6 h-6 text-[var(--secondary)]" />
              <h3 className="text-xl font-bold text-[var(--primary)] tracking-tight">
                Comprehensive Audit Scope
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {auditsData.auditsList.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 primary-rounded bg-[var(--primary)]/5 border border-[var(--primary)]/15 hover:border-[var(--secondary)] transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-[var(--secondary)] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-[var(--black)]/80">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Audit Imagery */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative h-48 sm:h-56 primary-rounded overflow-hidden border border-[var(--primary)]/15  group">
              <Image
                src="/hero_interior.png"
                alt="Audit Review Team"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)]/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-mono font-bold text-[var(--secondary)] uppercase tracking-wider block">
                  ISO 9001 Audits
                </span>
                <span className="text-sm font-bold text-[var(--white)] block">
                  Semi-Annual Facility Performance Review
                </span>
              </div>
            </div>

            <div className="relative h-48 sm:h-56 primary-rounded overflow-hidden border border-[var(--primary)]/15  group">
              <Image
                src="/why_excellence.png"
                alt="Management Compliance Review"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)]/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-mono font-bold text-[var(--secondary)] uppercase tracking-wider block">
                  EHS & Risk Compliance
                </span>
                <span className="text-sm font-bold text-[var(--white)] block">
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
