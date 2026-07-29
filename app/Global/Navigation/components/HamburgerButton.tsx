"use client";

import React from "react";
import { Menu, X } from "lucide-react";

interface HamburgerButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({ isOpen, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className="relative flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-800 hover:text-blue-600 border border-slate-200/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer shrink-0"
    >
      <span className="text-xs font-semibold uppercase tracking-wider hidden sm:inline-block">
        {isOpen ? "Close" : "Menu"}
      </span>
      {isOpen ? (
        <X className="w-5 h-5 text-blue-600 transition-transform" />
      ) : (
        <Menu className="w-5 h-5 text-slate-800 transition-transform" />
      )}
    </button>
  );
};

export default HamburgerButton;
