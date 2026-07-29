"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { missionItemsData } from "./Content";
import MissionCard from "./MissionCard";

export const MissionScalingStack: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgGraphicRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Constellation background rotation & scale animation matching Screenshots 2 & 3
      if (bgGraphicRef.current) {
        gsap.fromTo(
          bgGraphicRef.current,
          { scale: 0.75, rotate: -15, opacity: 0.2 },
          {
            scale: 1.3,
            rotate: 30,
            opacity: 0.5,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      }

      // 2. Individual cards GSAP scaling interaction on scroll
      const cards = gsap.utils.toArray<HTMLElement>(".mission-scale-card");

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { scale: 0.88, opacity: 0.3, y: 60 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 45%",
              scrub: 1,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-4xl mx-auto space-y-8 sm:space-y-12"
    >
      {/* Background Geometric Node Constellation SVG matching Screenshots 2 & 3 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <svg
          ref={bgGraphicRef}
          viewBox="0 0 600 600"
          className="w-[650px] sm:w-[800px] h-[650px] sm:h-[800px] text-cyan-500/20 opacity-30 transition-transform"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          {/* Hexagonal Node Constellation Network */}
          <polygon points="300,100 450,186 450,360 300,450 150,360 150,186" />
          <polygon points="300,150 400,210 400,330 300,390 200,330 200,210" />
          <line x1="300" y1="100" x2="300" y2="450" />
          <line x1="150" y1="186" x2="450" y2="360" />
          <line x1="450" y1="186" x2="150" y2="360" />

          {/* Glowing Node Dots */}
          <circle cx="300" cy="100" r="5" className="fill-cyan-400" />
          <circle cx="450" cy="186" r="5" className="fill-cyan-400" />
          <circle cx="450" cy="360" r="5" className="fill-cyan-400" />
          <circle cx="300" cy="450" r="5" className="fill-cyan-400" />
          <circle cx="150" cy="360" r="5" className="fill-cyan-400" />
          <circle cx="150" cy="186" r="5" className="fill-cyan-400" />
          <circle cx="300" cy="275" r="7" className="fill-blue-500" />
        </svg>
      </div>

      {/* Cards List with GSAP Scaling Trigger */}
      <div className="relative z-10 space-y-6 sm:space-y-10">
        {missionItemsData.map((item) => (
          <div key={item.id} className="mission-scale-card w-full">
            <MissionCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionScalingStack;
