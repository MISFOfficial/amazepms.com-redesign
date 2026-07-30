"use client";

import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { StageData } from "./Content";

interface StageStepCardProps {
  stage: StageData;
  index: number;
}

export const StageStepCard: React.FC<StageStepCardProps> = ({ stage, index }) => {
  return (
    <div className="stage-step-card relative bg-[#071330] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-blue-900/40 shadow-2xl hover:border-cyan-500/50 transition-all duration-500 overflow-hidden group">
      {/* Background Radial Glow */}
      <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-blue-600/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500 pointer-events-none" />

      {/* Stage Badge & Number */}
      <div className="flex items-center justify-between mb-4">
        <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-mono font-bold uppercase tracking-wider shadow-md">
          {stage.stageBadge}
        </span>
        <span className="text-xs font-mono font-extrabold text-cyan-400">
          STEP 0{stage.stageNumber}/04
        </span>
      </div>

      {/* Stage Title */}
      <h3 className="text-xl font-bold text-white tracking-tight mb-4 group-hover:text-cyan-300 transition-colors">
        {stage.title}
      </h3>

      {/* Stage Steps List matching Screenshot */}
      <div className="space-y-2.5 pt-4 border-t border-white/10">
        {stage.steps.map((step, idx) => (
          <div key={idx} className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span className="text-xs sm:text-sm text-slate-300 font-medium leading-tight">
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StageStepCard;
