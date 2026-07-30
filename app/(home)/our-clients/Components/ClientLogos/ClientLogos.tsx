"use client";

import React from "react";
import { Building2 } from "lucide-react";

export function ClientLogos() {
  return (
    <section className="relative w-full bg-[var(--white)] py-16 sm:py-20 border-b border-[var(--primary)]/10 text-[var(--black)] text-center">
      <div className="ratio relative z-10 space-y-8">
        <h3 className="text-xs sm:text-sm font-mono font-bold text-[var(--secondary)] uppercase tracking-widest">
          Trusted by 100+ valued partners around India
        </h3>

        {/* 5 Key Logos Showcase Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 items-center justify-center max-w-5xl mx-auto">
          {/* Logo 1: L&T Technology Services */}
          <div className="p-4 primary-rounded bg-[var(--primary)]/5 border border-[var(--primary)]/15 flex flex-col items-center justify-center h-24 hover:border-[var(--secondary)] transition-colors">
            <span className="text-xs font-black tracking-widest text-[var(--primary)] font-mono">
              L&T
            </span>
            <span className="text-[9px] font-semibold text-[var(--black)]/70">
              Technology Services
            </span>
          </div>

          {/* Logo 2: Hill Country */}
          <div className="p-4 primary-rounded bg-[var(--primary)]/5 border border-[var(--primary)]/15 flex flex-col items-center justify-center h-24 hover:border-[var(--secondary)] transition-colors">
            <span className="text-sm font-serif font-bold text-[var(--primary)] tracking-wider">
              Hill Country
            </span>
            <span className="text-[9px] text-[var(--black)]/60">
              Residences
            </span>
          </div>

          {/* Logo 3: Sri Sai Ram Towers */}
          <div className="p-4 primary-rounded bg-[var(--primary)]/5 border border-[var(--primary)]/15 flex flex-col items-center justify-center h-24 hover:border-[var(--secondary)] transition-colors">
            <Building2 className="w-5 h-5 text-[var(--secondary)] mb-1" />
            <span className="text-xs font-bold text-[var(--primary)] tracking-tight">
              Sri Sai Ram Towers
            </span>
          </div>

          {/* Logo 4: Lodha */}
          <div className="p-4 primary-rounded bg-[var(--primary)]/5 border border-[var(--primary)]/15 flex flex-col items-center justify-center h-24 hover:border-[var(--secondary)] transition-colors">
            <span className="text-sm font-extrabold text-[var(--primary)] font-sans uppercase tracking-widest">
              LODHA
            </span>
            <span className="text-[8px] text-[var(--black)]/60">
              Building a Better Life
            </span>
          </div>

          {/* Logo 5: Oliva Clinics */}
          <div className="p-4 primary-rounded bg-[var(--primary)]/5 border border-[var(--primary)]/15 flex flex-col items-center justify-center h-24 hover:border-[var(--secondary)] transition-colors">
            <span className="text-sm font-bold text-[var(--primary)] tracking-wide">
              OLIVA
            </span>
            <span className="text-[8px] text-[var(--black)]/60">
              Skin & Hair Clinic
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientLogos;
