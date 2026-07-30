"use client";

import React from "react";
import { PhoneCall, Shield } from "lucide-react";

export const CallInfo: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--secondary)] uppercase tracking-wider">
        <Shield className="w-4 h-4 text-[var(--secondary)]" />
        <span>Direct Helpline & Quote</span>
      </div>

      <a
        href="tel:9100694137"
        className="flex items-center gap-4 p-4 primary-rounded bg-[var(--white)]/10 border border-[var(--white)]/20 hover:bg-[var(--white)]/20 transition-all duration-300 group"
      >
        <div className="w-12 h-12 primary-rounded bg-[var(--secondary)] text-[var(--white)] flex items-center justify-center group-hover:scale-110 transition-transform shrink-0 ">
          <PhoneCall className="w-6 h-6 text-[var(--white)]" />
        </div>

        <div className="text-left">
          <span className="text-[10px] font-mono text-[var(--white)]/80 uppercase block">
            Call Direct
          </span>
          <span className="text-xl sm:text-2xl font-mono font-extrabold text-[var(--white)] group-hover:text-[var(--secondary)] transition-colors">
            +91 9100694137
          </span>
        </div>
      </a>
    </div>
  );
};

export default CallInfo;
