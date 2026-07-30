"use client";

import React from "react";
import { CheckCircle2, GraduationCap, ShieldCheck, Wrench, Sparkles } from "lucide-react";
import { SkillCardData } from "./Content";

interface SkillCardProps {
  card: SkillCardData;
}

export const SkillCard: React.FC<SkillCardProps> = ({ card }) => {
  const getIcon = () => {
    switch (card.id) {
      case "training":
        return <GraduationCap className="w-6 h-6 text-cyan-400" />;
      case "security":
        return <ShieldCheck className="w-6 h-6 text-cyan-400" />;
      case "mep":
        return <Wrench className="w-6 h-6 text-cyan-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <div className="skill-dev-card bg-[#071330] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-blue-900/40 shadow-2xl hover:border-cyan-500/50 transition-all duration-500 flex flex-col justify-between h-full group">
      <div>
        {/* Card Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-950/80 border border-cyan-500/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-300">
            {getIcon()}
          </div>
          <span className="text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-blue-950 border border-cyan-500/30">
            {card.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4 group-hover:text-cyan-300 transition-colors">
          {card.title}
        </h3>

        {/* Items Checklist matching Screenshot */}
        <div className="space-y-2.5 pt-4 border-t border-white/10">
          {card.items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-300 font-medium leading-tight">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
