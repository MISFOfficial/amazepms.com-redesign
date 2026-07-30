"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export const HeroBreadcrumb: React.FC = () => {
  return (
    <nav className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--primary)]/10 backdrop-blur-md border border-[var(--primary)]/20 text-xs text-[var(--primary)] mb-4">
      <Link
        href="/"
        className="flex items-center gap-1.5 hover:text-[var(--secondary)] transition-colors"
      >
        <Home className="w-3.5 h-3.5 text-[var(--secondary)]" />
        <span>Home</span>
      </Link>
      <ChevronRight className="w-3.5 h-3.5 opacity-50" />
      <span className="font-semibold text-[var(--secondary)]">About Us</span>
    </nav>
  );
};

export default HeroBreadcrumb;

