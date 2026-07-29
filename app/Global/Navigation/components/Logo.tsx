"use client";

import React from "react";
import Link from "next/link";
import { Building2, ShieldCheck } from "lucide-react";

export const Logo: React.FC = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 group focus:outline-none p-1 transition-all shrink-0 rounded-none shadow-none"
    >
      {/* Sharp Brand Icon Emblem */}
      <div className="relative flex items-center justify-center w-10 h-10 bg-slate-900 text-white rounded-none shadow-none border border-slate-800">
        <Building2 className="w-5 h-5 text-blue-400" />
        <div className="absolute -top-1 -right-1 bg-amber-500 p-0.5 border border-white rounded-none">
          <ShieldCheck className="w-2.5 h-2.5 text-slate-950" />
        </div>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="font-black text-xl tracking-tight text-slate-900 font-sans group-hover:text-blue-600 transition-colors">
            AMAZE
          </span>
          <span className="bg-blue-600 text-white text-[10px] font-extrabold px-1.5 py-0.5 tracking-wider uppercase rounded-none">
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
