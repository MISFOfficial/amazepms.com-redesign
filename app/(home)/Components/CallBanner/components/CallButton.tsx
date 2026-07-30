"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export const CallButton: React.FC = () => {
  return (
    <a
      href="/contact"
      className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 rounded-full bg-[var(--secondary)] text-xs sm:text-sm font-semibold tracking-wider text-[var(--white)] uppercase hover:bg-[var(--white)] hover:text-[var(--primary)] transition-all duration-300 group shrink-0 "
    >
      <span>CONTACT US</span>
      <ArrowRight className="w-4 h-4 text-[var(--white)] group-hover:text-[var(--primary)] group-hover:translate-x-1 transition-all duration-300" />
    </a>
  );
};

export default CallButton;
