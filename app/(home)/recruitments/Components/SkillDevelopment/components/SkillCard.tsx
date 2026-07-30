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
        return <GraduationCap className="w-6 h-6 text-[var(--secondary)]" />;
      case "security":
        return <ShieldCheck className="w-6 h-6 text-[var(--secondary)]" />;
      case "mep":
        return <Wrench className="w-6 h-6 text-[var(--secondary)]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[var(--secondary)]" />;
    }
  };

  return (
    <div className="skill-dev-card bg-[var(--white)] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[var(--primary)]/20 shadow-xl hover:border-[var(--secondary)] hover:shadow-2xl transition-all duration-500 flex flex-col justify-between h-full group text-[var(--black)]">
      <div>
        {/* Card Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-2xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-300">
            {getIcon()}
          </div>
          <span className="text-[10px] font-mono font-bold text-[var(--primary)] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20">
            {card.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-[var(--primary)] tracking-tight mb-4 group-hover:text-[var(--secondary)] transition-colors">
          {card.title}
        </h3>

        {/* Items Checklist */}
        <div className="space-y-2.5 pt-4 border-t border-[var(--primary)]/15">
          {card.items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[var(--secondary)] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-[var(--black)]/80 font-medium leading-tight">
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

