"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { StageData } from "./Content";

interface StageStepCardProps {
  stage: StageData;
  index: number;
}

export const StageStepCard: React.FC<StageStepCardProps> = ({ stage }) => {
  return (
    <div className="stage-step-card relative bg-[var(--white)] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[var(--primary)]/20 shadow-xl hover:border-[var(--secondary)] hover:shadow-2xl transition-all duration-500 overflow-hidden group text-[var(--black)]">
      {/* Stage Badge & Number */}
      <div className="flex items-center justify-between mb-4">
        <span className="px-3 py-1 rounded-full bg-[var(--primary)] text-[var(--white)] text-xs font-mono font-bold uppercase tracking-wider shadow-md">
          {stage.stageBadge}
        </span>
        <span className="text-xs font-mono font-extrabold text-[var(--secondary)]">
          STEP 0{stage.stageNumber}/04
        </span>
      </div>

      {/* Stage Title */}
      <h3 className="text-xl font-bold text-[var(--primary)] tracking-tight mb-4 group-hover:text-[var(--secondary)] transition-colors">
        {stage.title}
      </h3>

      {/* Stage Steps List */}
      <div className="space-y-2.5 pt-4 border-t border-[var(--primary)]/15">
        {stage.steps.map((step, idx) => (
          <div key={idx} className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[var(--secondary)] shrink-0 mt-0.5" />
            <span className="text-xs sm:text-sm text-[var(--black)]/80 font-medium leading-tight">
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StageStepCard;

