"use client";

import React from "react";
import CallInfo from "./components/CallInfo";
import CallTitle from "./components/CallTitle";
import CallButton from "./components/CallButton";

export function CallBanner() {
  return (
    <section className="py-8 sm:py-12 bg-[var(--white)] border-b border-[var(--primary)]/10">
      <div className="ratio">
        {/* Main Navy Banner Box */}
        <div className="relative w-full primary-rounded sm:primary-rounded bg-[var(--primary)] p-6 sm:p-8 lg:px-12 lg:py-8 overflow-hidden  flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-[var(--white)]">
          {/* Background Left Accent Overlay */}
          <div className="absolute -left-10 -top-10 w-48 h-48 rounded-full bg-[var(--secondary)]/20 blur-xl pointer-events-none" />

          {/* Background Right Geometric Lattice Overlay */}
          <div className="absolute -right-6 -bottom-6 w-56 h-56 opacity-15 pointer-events-none">
            <svg
              viewBox="0 0 200 200"
              fill="none"
              stroke="currentColor"
              className="w-full h-full text-[var(--white)]"
              strokeWidth="1.5"
            >
              <pattern
                id="lattice"
                x="0"
                y="0"
                width="24"
                height="24"
                patternUnits="userSpaceOnUse"
              >
                <path d="M 24 0 L 0 24 M 0 0 L 24 24" />
              </pattern>
              <rect width="200" height="200" fill="url(#lattice)" />
            </svg>
          </div>

          {/* Left & Center Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full md:w-auto text-center md:text-left">
            <CallInfo />
            <CallTitle />
          </div>

          {/* Right Action Button */}
          <div className="relative z-10">
            <CallButton />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallBanner;
