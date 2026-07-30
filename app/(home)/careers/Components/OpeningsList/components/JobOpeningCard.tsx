"use client";

import React from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { JobOpeningItem } from "./Content";

interface JobOpeningCardProps {
  job: JobOpeningItem;
  onApply: () => void;
}

export const JobOpeningCard: React.FC<JobOpeningCardProps> = ({
  job,
  onApply,
}) => {
  return (
    <div className="job-opening-card group bg-[var(--white)] rounded-2xl p-5 sm:p-6 border border-[var(--primary)]/20  hover:border-[var(--secondary)] hover: transition-all duration-500 flex flex-col justify-between h-full text-[var(--black)]">
      <div>
        {/* Header: Category Badge + Job Type */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[10px] font-mono font-bold text-[var(--primary)] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20">
            {job.category}
          </span>
          <span className="text-xs font-mono font-semibold text-[var(--black)]/60 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[var(--secondary)]" />
            {job.location}
          </span>
        </div>

        {/* Job Title */}
        <h3 className="text-lg sm:text-xl font-bold text-[var(--primary)] tracking-tight group-hover:text-[var(--secondary)] transition-colors leading-snug mb-2">
          {job.title}
        </h3>
      </div>

      {/* Footer: Apply Button */}
      <div className="pt-4 mt-4 border-t border-[var(--primary)]/15 flex items-center justify-between">
        <a
          href={`mailto:careers@amazepms.com?subject=Application for ${job.title}`}
          className="text-xs font-mono font-semibold text-[var(--black)]/60 hover:text-[var(--secondary)] transition-colors"
        >
          careers@amazepms.com
        </a>

        <button
          onClick={onApply}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[var(--primary)] hover:bg-[var(--secondary)] text-[var(--white)] text-xs font-bold transition-all duration-300  group-hover:scale-105"
        >
          <span>Apply</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default JobOpeningCard;
