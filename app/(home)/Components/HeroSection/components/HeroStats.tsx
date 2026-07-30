"use client";

import React from "react";

export const HeroStats: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[var(--primary)]/15">
      <div>
        <span className="text-xl lg:text-2xl font-bold text-[var(--black)] block font-mono">
          500+
        </span>
        <span className="text-[11px] text-[var(--black)]/70 font-medium">
          Properties Managed
        </span>
      </div>
      <div>
        <span className="text-xl lg:text-2xl font-bold text-[var(--secondary)] block font-mono">
          99.8%
        </span>
        <span className="text-[11px] text-[var(--black)]/70 font-medium">
          Client Satisfaction
        </span>
      </div>
      <div>
        <span className="text-xl lg:text-2xl font-bold text-[var(--primary)] block font-mono">
          5 States
        </span>
        <span className="text-[11px] text-[var(--black)]/70 font-medium">
          Active Presence
        </span>
      </div>
    </div>
  );
};

export default HeroStats;

