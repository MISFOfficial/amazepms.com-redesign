"use client";

import React from "react";
import Link from "next/link";
import { Building2, ShieldCheck } from "lucide-react";

export const Logo: React.FC = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 group focus:outline-none rounded-xl p-1 transition-all shrink-0"
    >
      {/* Brand Icon Emblem */}
      <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-blue-700 via-blue-900 to-slate-900 text-white shadow-md shadow-blue-900/15 group-hover:scale-105 transition-transform duration-300">
        <Building2 className="w-6 h-6 text-blue-300" />
        <div className="absolute -top-1 -right-1 bg-amber-500 rounded-full p-0.5 border border-white">
          <ShieldCheck className="w-2.5 h-2.5 text-slate-950" />
        </div>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="font-black text-2xl tracking-tight text-slate-900 font-sans group-hover:text-blue-600 transition-colors">
            AMAZE
          </span>
          <span className="bg-blue-600 text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded tracking-wider uppercase">
            PMSPL
          </span>
        </div>
        <span className="text-[10px] font-semibold text-slate-500 tracking-wider uppercase -mt-0.5 group-hover:text-slate-700 transition-colors">
          Property Management Services
        </span>
      </div>
    </Link>
  );
};

export default Logo;
