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
      className="flex items-center gap-2 px-3 py-2 bg-(--primary) text-(--white) hover:bg-(--secondary)  transition-colors focus:outline-none cursor-pointer primary-rounded shadow-none"
    >
      <span className="text-xs font-mono uppercase tracking-wider hidden sm:inline-block">
        {isOpen ? "Close" : "Menu"}
      </span>
      {isOpen ? (
        <X className="w-4 h-4 text-(--white)" />
      ) : (
        <Menu className="w-4 h-4 text-(--white)" />
      )}
    </button>
  );
};

export default HamburgerButton;
