"use client";

import React from "react";
import CallTitle from "./components/CallTitle";
import CallInfo from "./components/CallInfo";
import CallButton from "./components/CallButton";

export function CallBanner() {
  return (
    <section className="py-12 sm:py-16 bg-[var(--primary)] border-t border-b border-[var(--primary)]/10">
      <div className="ratio">
        {/* Modern Split 2-Column Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[var(--white)] p-6 sm:p-10 primary-rounded border border-[var(--primary)]/15">
          {/* Left Column: Headline, Badge & Features */}
          <div className="lg:col-span-7">
            <CallTitle />
          </div>

          {/* Right Column: Direct Contact & Action Box */}
          <div className="lg:col-span-5 bg-[var(--black)] p-6 sm:p-8 primary-rounded text-[var(--white)] shadow-xl space-y-6 relative overflow-hidden">
            {/* Background Glow Overlay */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-[var(--secondary)]/20 blur-xl pointer-events-none" />

            <div className="relative z-10">
              <CallInfo />
              <CallButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallBanner;
