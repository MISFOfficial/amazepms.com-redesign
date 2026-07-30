"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { partnerLogos } from "./Content";

export function Partners() {
  return (
    <section className="py-12 bg-[var(--white)] border-b border-[var(--primary)]/10 relative overflow-hidden">
      <div className="ratio text-center space-y-3 mb-8">
        <h2 className="text-xs sm:text-sm text-[var(--black)]/70 max-w-xl mx-auto font-medium">
          Trusted by 200+ valued partners around India
        </h2>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative py-2 bg-[var(--white)] border-y border-[var(--primary)]/10">
        <Marquee
          speed={45}
          pauseOnHover={true}
          gradient={false}
          className="py-3"
        >
          {partnerLogos.map((logo) => (
            <div
              key={logo.id}
              className="mx-4 sm:mx-6 px-6 py-3 bg-[var(--white)] border border-[var(--primary)]/15 primary-rounded flex items-center justify-center h-20 w-44 sm:w-52  hover: hover:border-[var(--secondary)] transition-all duration-300 group cursor-pointer"
            >
              <div className="relative w-full h-12 flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default Partners;
