"use client";

import React from "react";
import Link from "next/link";
import { Building2, ArrowUpRight, Phone } from "lucide-react";

export const FooterCTA: React.FC = () => {
  return (
    <div className="border-b border-slate-800/90 py-10 bg-slate-900/60">
      <div className="ratio flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 primary-rounded bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight">
              Need Professional Facility & Property Services?
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              We deliver 24/7 verified facility management across South India.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full lg:w-auto">
          <Link
            href="/contact"
            className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-none transition-colors border border-blue-600"
          >
            <span>Get Free Quote</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <a
            href="tel:9100694137"
            className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-none transition-colors border border-slate-700"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>Call Helpline</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterCTA;
