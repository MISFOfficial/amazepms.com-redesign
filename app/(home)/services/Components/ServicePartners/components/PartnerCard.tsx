"use client";

import React from "react";
import Image from "next/image";
import { Shield, Building2, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { ServicePartnerItem } from "./Content";

interface PartnerCardProps {
  partner: ServicePartnerItem;
}

export const PartnerCard: React.FC<PartnerCardProps> = ({ partner }) => {
  const servicesList = partner.subtitleServices.split(",").map((s) => s.trim());

  const renderLogo = () => {
    switch (partner.logoType) {
      case "amaze":
        return (
          <div className="flex flex-col items-center justify-center text-center space-y-1">
            <div className="relative w-40 h-16">
              <Image
                src="/logo.png"
                alt="Amaze Property Management Solutions"
                fill
                className="object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
              />
            </div>
          </div>
        );
      case "action_force":
        return (
          <div className="w-24 h-24 rounded-full bg-red-600 border-4 border-red-700 shadow-xl flex flex-col items-center justify-center text-white text-center p-2">
            <Shield className="w-8 h-8 text-amber-300 mb-0.5" />
            <span className="text-[9px] font-extrabold tracking-widest uppercase font-mono">
              ACTION FORCE
            </span>
          </div>
        );
      case "afs":
        return (
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 shadow-xl flex flex-col items-center justify-center text-white text-center p-2 border-2 border-white">
            <span className="text-xl font-black tracking-tighter font-sans">
              AFS
            </span>
            <span className="text-[8px] font-bold tracking-widest uppercase">
              FACILITY
            </span>
          </div>
        );
    }
  };

  return (
    <div className="bg-[#071330] rounded-2xl sm:rounded-3xl border border-blue-900/40 shadow-2xl hover:border-cyan-500/50 transition-all duration-500 overflow-hidden flex flex-col justify-between group">
      {/* Top Logo Container */}
      <div className="relative p-8 bg-slate-900/80 flex items-center justify-center min-h-[200px] border-b border-white/10">
        {/* Top-Left Category Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-blue-950/90 text-cyan-300 border border-cyan-500/30 text-[11px] font-mono font-bold tracking-wide shadow-xs">
          {partner.badge}
        </div>

        {/* Center Logo Showcase */}
        <div className="group-hover:scale-105 transition-transform duration-500">
          {renderLogo()}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-8 space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors">
          {partner.title}
        </h3>

        {/* Service Badges */}
        <div className="flex flex-wrap gap-2 pt-2">
          {servicesList.map((service, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-slate-300"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>{service}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="px-6 pb-6 pt-2">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 group-hover:text-white transition-colors">
          <span>LEARN MORE ABOUT PARTNER</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;
