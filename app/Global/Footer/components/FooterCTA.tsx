"use client";

import React from "react";
import Link from "next/link";
import { Building2, ArrowUpRight, Phone } from "lucide-react";

export const FooterCTA: React.FC = () => {
  return (
    <div className="border-b border-[var(--white)]/10 py-10 bg-[var(--primary)]/90 text-[var(--white)]">
      <div className="ratio flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 primary-rounded bg-[var(--white)]/10 border border-[var(--white)]/20 flex items-center justify-center text-[var(--secondary)] shrink-0">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[var(--white)] tracking-tight">
              Need Professional Facility & Property Services?
            </h3>
            <p className="text-xs text-[var(--white)]/80 mt-0.5">
              We deliver 24/7 verified facility management across South India.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full lg:w-auto">
          <Link
            href="/contact"
            className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 bg-[var(--secondary)] hover:bg-[var(--white)] text-[var(--white)] hover:text-[var(--primary)] text-xs font-bold uppercase tracking-wider px-5 py-3 primary-rounded transition-colors border border-[var(--secondary)]"
          >
            <span>Get Free Quote</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <a
            href="tel:9100694137"
            className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 bg-[var(--white)]/10 hover:bg-[var(--white)]/20 text-[var(--white)] text-xs font-bold uppercase tracking-wider px-5 py-3 primary-rounded transition-colors border border-[var(--white)]/20"
          >
            <Phone className="w-3.5 h-3.5 text-[var(--secondary)]" />
            <span>Call Helpline</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterCTA;

