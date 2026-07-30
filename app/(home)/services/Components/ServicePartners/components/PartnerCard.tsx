"use client";

import React from "react";
import Image from "next/image";
import { Shield, Building2, Sparkles } from "lucide-react";
import { ServicePartnerItem } from "./Content";

interface PartnerCardProps {
  partner: ServicePartnerItem;
}

export const PartnerCard: React.FC<PartnerCardProps> = ({ partner }) => {
  const renderLogo = () => {
    switch (partner.logoType) {
      case "amaze":
        return (
          <div className="flex flex-col items-center justify-center text-center space-y-1">
            <div className="relative w-36 h-14">
              <Image
                src="/logo.png"
                alt="Amaze Property Management Solutions"
                fill
                className="object-contain"
              />
            </div>
          </div>
        );
      case "action_force":
        return (
          <div className="w-24 h-24 rounded-full bg-red-600 border-4 border-red-700 shadow-lg flex flex-col items-center justify-center text-white text-center p-2">
            <Shield className="w-8 h-8 text-amber-300 mb-0.5" />
            <span className="text-[9px] font-extrabold tracking-widest uppercase font-mono">
              ACTION FORCE
            </span>
          </div>
        );
      case "afs":
        return (
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 shadow-lg flex flex-col items-center justify-center text-white text-center p-2 border-2 border-white">
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
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      {/* Top Graphic Area matching Screenshot */}
      <div className="relative p-8 bg-slate-100/80 flex items-center justify-center min-h-[180px] border-b border-slate-200/80">
        {/* Top-Left Category Badge matching Screenshot */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-mono font-bold tracking-wide shadow-xs">
          {partner.badge}
        </div>

        {/* Center Logo Artwork */}
        <div className="group-hover:scale-105 transition-transform duration-300">
          {renderLogo()}
        </div>
      </div>

      {/* Card Content Footer matching Screenshot */}
      <div className="p-6 space-y-3 bg-white">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
          {partner.title}
        </h3>

        <p className="text-xs text-slate-500 leading-relaxed font-sans">
          {partner.subtitleServices}
        </p>
      </div>
    </div>
  );
};

export default PartnerCard;
