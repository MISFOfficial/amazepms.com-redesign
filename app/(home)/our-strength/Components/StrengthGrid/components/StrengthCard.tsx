"use client";

import React from "react";
import {
  Building2,
  UserCheck,
  ShieldAlert,
  GraduationCap,
  ShieldCheck,
  TrendingDown,
  FileCheck2,
  Wrench,
  Landmark,
  ClipboardCheck,
  FileText,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";
import { StrengthItem } from "./Content";

interface StrengthCardProps {
  item: StrengthItem;
}

export const StrengthCard: React.FC<StrengthCardProps> = ({ item }) => {
  const getIcon = () => {
    switch (item.iconName) {
      case "Building2":
        return <Building2 className="w-5 h-5 text-cyan-400" />;
      case "UserCheck":
        return <UserCheck className="w-5 h-5 text-cyan-400" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-5 h-5 text-cyan-400" />;
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5 text-cyan-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      case "TrendingDown":
        return <TrendingDown className="w-5 h-5 text-cyan-400" />;
      case "FileCheck2":
        return <FileCheck2 className="w-5 h-5 text-cyan-400" />;
      case "Wrench":
        return <Wrench className="w-5 h-5 text-cyan-400" />;
      case "Landmark":
        return <Landmark className="w-5 h-5 text-cyan-400" />;
      case "ClipboardCheck":
        return <ClipboardCheck className="w-5 h-5 text-cyan-400" />;
      case "FileText":
        return <FileText className="w-5 h-5 text-cyan-400" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-5 h-5 text-cyan-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div className="strength-card group relative bg-[#071330] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-blue-900/40 shadow-2xl hover:border-cyan-500/50 transition-all duration-500 flex flex-col justify-between h-full overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-blue-600/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500 pointer-events-none" />

      <div>
        {/* Card Header */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-cyan-500/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-300">
              {getIcon()}
            </div>
            <span className="text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-blue-950 border border-cyan-500/30">
              {item.category}
            </span>
          </div>

          <span className="text-xs font-mono font-bold text-slate-500">
            {item.number}/12
          </span>
        </div>

        {/* Text Content */}
        <div className="flex items-start gap-3 pt-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed font-sans group-hover:text-white transition-colors">
            {item.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StrengthCard;
