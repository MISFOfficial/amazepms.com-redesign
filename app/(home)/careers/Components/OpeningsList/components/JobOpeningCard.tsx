"use client";

import React from "react";
import { ArrowRight, Briefcase, MapPin } from "lucide-react";
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
    <div className="job-opening-card group bg-[#071330] rounded-2xl p-5 sm:p-6 border border-blue-900/40 shadow-xl hover:border-cyan-500/50 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between h-full">
      <div>
        {/* Header: Category Badge + Job Type */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-blue-950 border border-cyan-500/30">
            {job.category}
          </span>
          <span className="text-xs font-mono font-semibold text-slate-400 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-cyan-400" />
            {job.location}
          </span>
        </div>

        {/* Job Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors leading-snug mb-2">
          {job.title}
        </h3>
      </div>

      {/* Footer: Apply Button matching Screenshot verbatim */}
      <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
        <a
          href={`mailto:careers@amazepms.com?subject=Application for ${job.title}`}
          className="text-xs font-mono font-semibold text-slate-400 hover:text-cyan-300 transition-colors"
        >
          careers@amazepms.com
        </a>

        <button
          onClick={onApply}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-cyan-500 hover:text-slate-950 text-white text-xs font-bold transition-all duration-300 shadow-md group-hover:scale-105"
        >
          <span>Apply</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default JobOpeningCard;
