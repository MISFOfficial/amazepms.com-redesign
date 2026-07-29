"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export const FooterBrand: React.FC = () => {
  return (
    <div className="lg:col-span-4 space-y-4">
      <Link
        href="/"
        className="inline-block bg-white p-2.5 rounded-none border border-slate-300"
      >
        <Image
          src="/logo.png"
          alt="Amaze PMS Logo"
          width={170}
          height={45}
          className="h-9 w-auto object-contain"
        />
      </Link>

      <p className="text-xs text-slate-400 leading-relaxed pr-4">
        Amaze Property Management Solutions Pvt Ltd is a premier provider of
        facility maintenance, staffing, security, and infrastructure management
        across South India.
      </p>

      {/* Verification Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 text-[11px] font-semibold">
        <ShieldCheck className="w-4 h-4" />
        <span>ISO Certified Facility Management</span>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-2 pt-1">
        {[
          { name: "Facebook", href: "https://facebook.com", icon: "FB" },
          { name: "Instagram", href: "https://instagram.com", icon: "IG" },
          { name: "LinkedIn", href: "https://linkedin.com", icon: "IN" },
        ].map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 bg-slate-900 border border-slate-800 hover:border-blue-500 text-slate-400 hover:text-white flex items-center justify-center text-xs font-mono font-bold transition-all"
            aria-label={s.name}
          >
            {s.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterBrand;
