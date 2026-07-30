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
        className="inline-block bg-[var(--white)] p-2.5 primary-rounded border border-[var(--white)]/20 "
      >
        <Image
          src="/logo.png"
          alt="Amaze PMS Logo"
          width={170}
          height={45}
          className="h-9 w-auto object-contain"
        />
      </Link>

      <p className="text-xs text-[var(--white)]/80 leading-relaxed pr-4">
        Amaze Property Management Solutions Pvt Ltd is a premier provider of
        facility maintenance, staffing, security, and infrastructure management
        across South India.
      </p>

      {/* Verification Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--secondary)]/15 border border-[var(--secondary)]/30 text-[var(--secondary)] text-[11px] font-semibold primary-rounded">
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
            className="w-8 h-8 bg-[var(--white)]/10 border border-[var(--white)]/20 hover:border-[var(--secondary)] text-[var(--white)]/80 hover:text-[var(--white)] flex items-center justify-center text-xs font-mono font-bold transition-all primary-rounded"
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
