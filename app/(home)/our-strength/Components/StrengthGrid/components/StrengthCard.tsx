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
        return <Building2 className="w-5 h-5 text-[var(--secondary)]" />;
      case "UserCheck":
        return <UserCheck className="w-5 h-5 text-[var(--secondary)]" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-5 h-5 text-[var(--secondary)]" />;
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5 text-[var(--secondary)]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-[var(--secondary)]" />;
      case "TrendingDown":
        return <TrendingDown className="w-5 h-5 text-[var(--secondary)]" />;
      case "FileCheck2":
        return <FileCheck2 className="w-5 h-5 text-[var(--secondary)]" />;
      case "Wrench":
        return <Wrench className="w-5 h-5 text-[var(--secondary)]" />;
      case "Landmark":
        return <Landmark className="w-5 h-5 text-[var(--secondary)]" />;
      case "ClipboardCheck":
        return <ClipboardCheck className="w-5 h-5 text-[var(--secondary)]" />;
      case "FileText":
        return <FileText className="w-5 h-5 text-[var(--secondary)]" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-5 h-5 text-[var(--secondary)]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[var(--secondary)]" />;
    }
  };

  return (
    <div className="strength-card group relative bg-[var(--white)] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[var(--primary)]/20  hover:border-[var(--secondary)] hover: transition-all duration-500 flex flex-col justify-between h-full overflow-hidden text-[var(--black)]">
      <div>
        {/* Card Header */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-300">
              {getIcon()}
            </div>
            <span className="text-[10px] font-mono font-bold text-[var(--primary)] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20">
              {item.category}
            </span>
          </div>

          <span className="text-xs font-mono font-bold text-[var(--black)]/50">
            {item.number}/12
          </span>
        </div>

        {/* Text Content */}
        <div className="flex items-start gap-3 pt-2">
          <CheckCircle2 className="w-4 h-4 text-[var(--secondary)] shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-[var(--black)]/85 font-medium leading-relaxed font-sans group-hover:text-[var(--primary)] transition-colors">
            {item.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StrengthCard;
