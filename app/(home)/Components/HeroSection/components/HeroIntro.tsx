"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, CheckCircle2, ArrowRight, Phone } from "lucide-react";

export const HeroIntro: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Top Tagline Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold rounded-full shadow-xs">
        <Sparkles className="w-3.5 h-3.5 text-blue-600" />
        <span>Integrated Property & Facility Management</span>
      </div>

      {/* Headline */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 leading-[1.15]">
        Elevating Property <br />
        Standards Across <br />
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          South India.
        </span>
      </h1>

      {/* Description */}
      <p className="text-sm text-slate-600 leading-relaxed max-w-lg">
        Amaze PMS delivers 360° facility maintenance, security, engineering, and
        staffing solutions for luxury residential complexes & corporate hubs.
      </p>

      {/* Bullet Points */}
      <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-slate-700 pt-1">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>24/7 Rapid Emergency Response</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>ISO Certified Operations</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Verified Technical Staff</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Transparent Asset Audits</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 pt-4">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 transition-all shadow-md shadow-blue-600/20"
        >
          <span>Get Free Consultation</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        <a
          href="tel:9100694137"
          className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider px-5 py-3.5 transition-colors border border-slate-300 shadow-xs"
        >
          <Phone className="w-3.5 h-3.5 text-blue-600" />
          <span>Call Helpline</span>
        </a>
      </div>
    </div>
  );
};

export default HeroIntro;
