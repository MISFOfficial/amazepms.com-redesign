"use client";

import React from "react";
import { servicePartnersData } from "./components/Content";
import PartnerCard from "./components/PartnerCard";
import { Sparkles } from "lucide-react";

export function ServicePartners() {
  return (
    <section className="relative w-full bg-slate-950 py-16 sm:py-24 border-b border-blue-950/80 overflow-hidden text-white">
      {/* Background Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      <div className="ratio relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-950/90 border border-cyan-500/30 text-cyan-300 text-xs font-semibold rounded-full shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span className="font-mono uppercase text-[11px] sm:text-xs">
              STRATEGIC ALLIANCES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Our Service{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-300 bg-clip-text text-transparent">
              Partners
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-xl mx-auto leading-relaxed">
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
