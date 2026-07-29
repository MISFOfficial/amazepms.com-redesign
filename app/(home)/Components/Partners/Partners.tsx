"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Handshake } from "lucide-react";
import { partnerLogos } from "./Content";

export function Partners() {
  return (
    <section className="py-12 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="ratio text-center space-y-3 mb-8">
        <h2 className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
          Trusted by 200+ valued partners around the India
        </h2>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative py-2 bg-slate-50/50 border-y border-slate-100">
        {/* Left & Right Subtle Fade Overlays */}
        <div className="absolute top-0 left-0 bottom-0 w-24 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-24 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

        <Marquee
          speed={45}
          pauseOnHover={true}
          gradient={false}
          className="py-3"
        >
          {partnerLogos.map((logo) => (
            <div
              key={logo.id}
              className="mx-4 sm:mx-6 px-6 py-3 bg-white border border-slate-200/80 rounded-lg flex items-center justify-center h-20 w-44 sm:w-52 shadow-xs hover:shadow-md hover:border-blue-400 transition-all duration-300 group cursor-pointer"
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
