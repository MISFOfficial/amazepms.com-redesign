"use client";

import React from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";

export const CallTitle: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* Top Tagline Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-semibold rounded-full">
        <Sparkles className="w-3.5 h-3.5 text-[var(--secondary)]" />
        <span>24/7 CONSULTATION & EMERGENCY SUPPORT</span>
      </div>

      {/* Main Headline */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--black)] tracking-tight leading-tight">
        Ready to Elevate Your <br className="hidden sm:inline" />
        <span className="text-[var(--secondary)]">Property Management</span> Operations?
      </h2>

      <p className="text-xs sm:text-sm text-[var(--black)]/70 font-sans max-w-xl leading-relaxed">
        Partner with PAN India's premier property management team. Get instant site audits, custom SOPs, and dedicated facility experts today.
      </p>

      {/* Quick Feature Badges */}
      <div className="flex flex-wrap items-center gap-3 pt-1">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--black)]/80">
          <CheckCircle2 className="w-4 h-4 text-[var(--secondary)]" />
          <span>PAN India Presence</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--black)]/80">
          <CheckCircle2 className="w-4 h-4 text-[var(--secondary)]" />
          <span>100% In-House Staff</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--black)]/80">
          <CheckCircle2 className="w-4 h-4 text-[var(--secondary)]" />
          <span>Instant Quote</span>
        </div>
      </div>
    </div>
  );
};

export default CallTitle;



