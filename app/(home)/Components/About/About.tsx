"use client";

import React from "react";
import AboutImages from "./components/AboutImages";
import AboutContent from "./components/AboutContent";

export function About() {
  return (
    <section className="py-16 sm:py-24 bg-[var(--white)] border-b border-[var(--primary)]/10 overflow-hidden">
      <div className="ratio">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Side: Overlapping Images (6 columns) */}
          <div className="lg:col-span-6">
            <AboutImages />
          </div>

          {/* Right Side: Text, Title & Checkmarks (6 columns) */}
          <div className="lg:col-span-6">
            <AboutContent />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

