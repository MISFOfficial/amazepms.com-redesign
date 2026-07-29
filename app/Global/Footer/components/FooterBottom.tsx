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
    <div className="border-t border-slate-800/90 bg-slate-950 py-4">
      <div className="ratio flex items-center justify-between">
        <p className="text-xs text-slate-400 font-mono tracking-wide">
          Copyright © {new Date().getFullYear()} Amaze Property Management
          Solutions Pvt Ltd. All Rights Reserved.
        </p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 text-xs font-mono transition-colors cursor-pointer"
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
