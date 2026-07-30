"use client";

import React from "react";
import { PhoneCall } from "lucide-react";

export const CallInfo: React.FC = () => {
  return (
    <a
      href="tel:9908538137"
      className="flex items-center gap-3.5 group cursor-pointer shrink-0"
    >
      {/* Phone Icon Circle */}
      <div className="w-12 h-12 rounded-full bg-[var(--secondary)] text-[var(--white)] flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-md">
        <PhoneCall className="w-5 h-5 text-[var(--white)]" />
      </div>

      {/* Phone Details */}
      <div>
        <span className="text-[11px] font-sans font-medium text-[var(--white)]/80 uppercase tracking-wider block">
          Call For More Info
        </span>
        <span className="text-xl sm:text-2xl font-mono font-extrabold text-[var(--white)] group-hover:text-[var(--secondary)] transition-colors">
          9908538137
        </span>
      </div>
    </a>
  );
};

export default CallInfo;

