"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";

export const WhyVisuals: React.FC = () => {
  const floatCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (floatCardRef.current) {
      gsap.to(floatCardRef.current, {
        y: -14,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none py-4">
      {/* Background Graphic Accent Frame */}
      <div className="relative w-full h-[360px] sm:h-[440px] rounded-2xl overflow-hidden  border border-slate-200 bg-slate-900 group">
        <Image
          src="/why_workforce.png"
          alt="Amaze PMS Management Team"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />

        {/* Overlay Banner */}
        <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/80 ">
          <span className="text-xs font-bold text-blue-600 block uppercase tracking-wider font-mono">
            20+ MILLION SQ.FT MANAGED
          </span>
          <span className="text-xs text-slate-700 font-semibold block mt-0.5">
            100% In-House Military-Grade Operational Supervision
          </span>
        </div>
      </div>

      {/* Floating 3D "WHY US" Trophy Card (GSAP Animated) */}
      <div
        ref={floatCardRef}
        className="absolute top-10 -right-2 sm:-right-6 w-[52%] sm:w-[48%] h-[200px] sm:h-[240px] rounded-2xl overflow-hidden  border-4 border-white bg-slate-900 z-20 group"
      >
        <Image
          src="/why_excellence.png"
          alt="Why Choose Us Trophy"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Diagonal "WHY US" Label Badge */}
        <div className="absolute top-3 right-3 bg-blue-600 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded  tracking-widest font-mono">
          WHY US ↗
        </div>
      </div>
    </div>
  );
};

export default WhyVisuals;
