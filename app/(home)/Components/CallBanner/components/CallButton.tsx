"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export const CallButton: React.FC = () => {
  return (
    <a
      href="#contact"
      className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 rounded-full border border-white/40 text-xs sm:text-sm font-semibold tracking-wider text-white uppercase hover:bg-white hover:text-[#030e28] transition-all duration-300 group shrink-0"
    >
      <span>CONTACT US</span>
      <ArrowRight className="w-4 h-4 text-white group-hover:text-[#030e28] group-hover:translate-x-1 transition-all duration-300" />
    </a>
  );
};

export default CallButton;
