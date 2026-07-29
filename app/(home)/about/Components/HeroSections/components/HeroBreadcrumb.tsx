"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { aboutPageHeroData } from "./Content";

export const HeroBreadcrumb: React.FC = () => {
  return (
    <nav className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-blue-100 mb-4">
      <Link
        href="/"
        className="flex items-center gap-1.5 hover:text-white transition-colors"
      >
        <Home className="w-3.5 h-3.5 text-cyan-400" />
        <span>Home</span>
      </Link>
      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
      <span className="font-semibold text-cyan-400">About Us</span>
    </nav>
  );
};

export default HeroBreadcrumb;
