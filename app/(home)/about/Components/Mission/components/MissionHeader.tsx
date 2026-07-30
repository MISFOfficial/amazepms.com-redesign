"use client";

import React from "react";
import { Compass } from "lucide-react";

export const MissionHeader: React.FC = () => {
  return (
    <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-semibold rounded-full shadow-xs">
        <Compass className="w-3.5 h-3.5 text-[var(--secondary)]" />
        <span>CORE FOUNDATION</span>
      </div>

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--black)] tracking-tight">
        Mission <span className="text-[var(--secondary)] font-light">|</span> Vision{" "}
        <span className="text-[var(--secondary)] font-light">|</span> Values
      </h2>
    </div>
  );
};

export default MissionHeader;

