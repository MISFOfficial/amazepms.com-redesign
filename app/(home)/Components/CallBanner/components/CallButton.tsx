"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

export const CallButton: React.FC = () => {
  return (
    <div className="space-y-3 pt-2">
      <Link
        href="/contact"
        className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 primary-rounded bg-[var(--secondary)] text-xs sm:text-sm font-bold tracking-wider text-[var(--white)] uppercase hover:bg-[var(--white)] hover:text-[var(--primary)] transition-all duration-300 group shadow-md"
      >
        <span>Request Free Consultation</span>
        <ArrowRight className="w-4 h-4 text-[var(--white)] group-hover:text-[var(--primary)] group-hover:translate-x-1 transition-all duration-300" />
      </Link>

      <div className="flex items-center justify-center gap-1.5 text-[11px] text-[var(--white)]/70 font-mono">
        <Clock className="w-3.5 h-3.5 text-[var(--secondary)]" />
        <span>Average response time: &lt; 15 mins</span>
      </div>
    </div>
  );
};

export default CallButton;


