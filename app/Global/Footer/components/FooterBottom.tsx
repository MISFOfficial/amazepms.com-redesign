"use client";

import React from "react";
import { ChevronUp } from "lucide-react";

export const FooterBottom: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="border-t border-[var(--white)]/10 bg-[var(--primary)] py-4 text-[var(--white)]">
      <div className="ratio flex items-center justify-between">
        <p className="text-xs text-[var(--white)]/70 font-mono tracking-wide">
          Copyright © {new Date().getFullYear()} Amaze Property Management
          Solutions Pvt Ltd. All Rights Reserved.
        </p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 px-3 py-1.5 bg-[var(--white)]/10 hover:bg-[var(--white)]/20 text-[var(--white)] border border-[var(--white)]/20 text-xs font-mono transition-colors cursor-pointer primary-rounded"
          aria-label="Back to top"
        >
          <span>TOP</span>
          <ChevronUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default FooterBottom;

