"use client";

import React from "react";
import { Menu, X } from "lucide-react";

interface HamburgerButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isOpen,
  onToggle,
}) => {
  return (
    <button
      onClick={onToggle}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className="flex items-center gap-2 px-3 py-2 bg-slate-900 text-white hover:bg-slate-800 border border-slate-900 transition-colors focus:outline-none cursor-pointer rounded-none shadow-none"
    >
      <span className="text-xs font-mono uppercase tracking-wider hidden sm:inline-block">
        {isOpen ? "Close" : "Menu"}
      </span>
      {isOpen ? (
        <X className="w-4 h-4 text-white" />
      ) : (
        <Menu className="w-4 h-4 text-white" />
      )}
    </button>
  );
};

export default HamburgerButton;
