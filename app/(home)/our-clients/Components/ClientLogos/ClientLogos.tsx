"use client";

import React from "react";
import Image from "next/image";
import { Shield, Building2 } from "lucide-react";

export function ClientLogos() {
  return (
    <section className="relative w-full bg-slate-900 py-16 sm:py-20 border-b border-blue-950/80 text-white text-center">
      <div className="ratio relative z-10 space-y-8">
        <h3 className="text-xs sm:text-sm font-mono font-bold text-cyan-400 uppercase tracking-widest">
          Trusted by 100+ valued partners around India
        </h3>

        {/* 5 Key Logos Showcase Grid matching Screenshot */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 items-center justify-center max-w-5xl mx-auto">
          {/* Logo 1: L&T Technology Services */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center h-24 hover:border-cyan-500/40 transition-colors">
            <span className="text-xs font-black tracking-widest text-cyan-300 font-mono">
              L&T
            </span>
            <span className="text-[9px] font-semibold text-slate-300">
              Technology Services
            </span>
          </div>

          {/* Logo 2: Hill Country */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center h-24 hover:border-cyan-500/40 transition-colors">
            <span className="text-sm font-serif font-bold text-emerald-400 tracking-wider">
              Hill Country
            </span>
            <span className="text-[9px] text-slate-400">Residences</span>
          </div>

          {/* Logo 3: Sri Sai Ram Towers */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center h-24 hover:border-cyan-500/40 transition-colors">
            <Building2 className="w-5 h-5 text-amber-400 mb-1" />
            <span className="text-xs font-bold text-amber-300 tracking-tight">
              Sri Sai Ram Towers
            </span>
          </div>

          {/* Logo 4: Lodha */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center h-24 hover:border-cyan-500/40 transition-colors">
            <span className="text-sm font-extrabold text-blue-400 font-sans uppercase tracking-widest">
              LODHA
            </span>
            <span className="text-[8px] text-slate-400">
              Building a Better Life
            </span>
          </div>

          {/* Logo 5: Oliva Clinics */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center h-24 hover:border-cyan-500/40 transition-colors">
            <span className="text-sm font-bold text-teal-300 tracking-wide">
              OLIVA
            </span>
            <span className="text-[8px] text-slate-400">Skin & Hair Clinic</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientLogos;
