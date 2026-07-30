"use client";

import React from "react";
import { servicePartnersData } from "./components/Content";
import PartnerCard from "./components/PartnerCard";
import { Sparkles } from "lucide-react";

export function ServicePartners() {
  return (
    <section className="relative w-full bg-[var(--white)] py-16 sm:py-24 border-b border-[var(--primary)]/10 overflow-hidden text-[var(--black)]">
      <div className="ratio relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-semibold rounded-full shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[var(--secondary)]" />
            <span className="font-mono uppercase text-[11px] sm:text-xs">
              STRATEGIC ALLIANCES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--black)] tracking-tight leading-tight">
            Our Service{" "}
            <span className="text-[var(--secondary)]">
              Partners
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-[var(--black)]/80 font-sans max-w-xl mx-auto leading-relaxed font-normal">
            Collaborating with specialized statutory security and facility entities to deliver end-to-end operational excellence.
          </p>
        </div>

        {/* 3 Partner Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {servicePartnersData.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicePartners;

