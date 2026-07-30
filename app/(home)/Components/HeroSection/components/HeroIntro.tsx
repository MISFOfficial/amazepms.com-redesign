"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, CheckCircle2, ArrowRight, Phone } from "lucide-react";

export const HeroIntro: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Headline */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--black)] leading-[1.15]">
        Elevating Property <br />
        Standards Across <br />
        <span className="text-[var(--secondary)]">South India.</span>
      </h1>

      {/* Description */}
      <p className="text-sm text-[var(--black)]/80 leading-relaxed max-w-lg font-normal">
        Amaze PMS delivers 360° facility maintenance, security, engineering, and
        staffing solutions for luxury residential complexes & corporate hubs.
      </p>

      {/* Bullet Points */}
      <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-[var(--black)] pt-1">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[var(--secondary)] shrink-0" />
          <span>24/7 Rapid Emergency Response</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[var(--secondary)] shrink-0" />
          <span>ISO Certified Operations</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[var(--secondary)] shrink-0" />
          <span>Verified Technical Staff</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[var(--secondary)] shrink-0" />
          <span>Transparent Asset Audits</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 pt-4">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--secondary)] text-[var(--white)] text-xs font-bold uppercase tracking-wider px-6 py-3.5 transition-all duration-300  rounded-md"
        >
          <span>Get Free Consultation</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        <a
          href="tel:9100694137"
          className="inline-flex items-center gap-2 bg-[var(--white)] hover:bg-[var(--primary)]/10 text-[var(--black)] text-xs font-bold uppercase tracking-wider px-5 py-3.5 transition-colors border border-[var(--primary)]/30  rounded-md"
        >
          <Phone className="w-3.5 h-3.5 text-[var(--secondary)]" />
          <span>Call Helpline</span>
        </a>
      </div>
    </div>
  );
};

export default HeroIntro;
