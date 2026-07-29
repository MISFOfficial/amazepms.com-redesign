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
      <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
        <PhoneCall className="w-5 h-5 text-cyan-400" />
      </div>

      {/* Phone Details */}
      <div>
        <span className="text-[11px] font-sans font-medium text-blue-200/80 uppercase tracking-wider block">
          Call For More Info
        </span>
        <span className="text-xl sm:text-2xl font-mono font-extrabold text-white group-hover:text-cyan-400 transition-colors">
          9908538137
        </span>
      </div>
    </a>
  );
};

export default CallInfo;
