"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { railwaySegmentsData } from "./Content";
import SegmentStationCard from "./SegmentStationCard";

export const RailwayTrack: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackLineRef = useRef<SVGPathElement>(null);
  const trainHeadRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Setup SVG Track Line Path Drawing
      if (trackLineRef.current) {
        const pathLength = trackLineRef.current.getTotalLength();
        gsap.set(trackLineRef.current, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });

        // Scrub track draw line as user scrolls down section
        gsap.to(trackLineRef.current, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: 0.5,
          },
        });
      }

      // 2. Animate Train Head Gliding Down Track Line
      if (trainHeadRef.current && trackLineRef.current) {
        gsap.to(trainHeadRef.current, {
          motionPath: {
            path: trackLineRef.current,
            align: trackLineRef.current,
            alignOrigin: [0.5, 0.5],
          },
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: 0.5,
          },
        });
      }

      // 3. Station Cards Scroll Trigger Reveal & Scale
      const cards = gsap.utils.toArray<HTMLElement>(".railway-station-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, scale: 0.88, y: 40 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 50%",
              scrub: 0.5,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-5xl mx-auto py-8">
      {/* Central Railway Track SVG Line (Desktop Center / Mobile Left) */}
      <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 -translate-x-1/2 w-16 pointer-events-none z-10 flex justify-center">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 40 1000"
          fill="none"
        >
          {/* Background Sleeper Ties / Tracks */}
          <line
            x1="8"
            y1="0"
            x2="8"
            y2="1000"
            stroke="var(--primary)"
            strokeOpacity="0.2"
            strokeWidth="3"
            strokeDasharray="4 4"
          />
          <line
            x1="32"
            y1="0"
            x2="32"
            y2="1000"
            stroke="var(--primary)"
            strokeOpacity="0.2"
            strokeWidth="3"
            strokeDasharray="4 4"
          />

          {/* Central Active Glowing Railway Track Line */}
          <path
            ref={trackLineRef}
            d="M 20 0 L 20 1000"
            stroke="var(--secondary)"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Train Node Indicator Circle */}
          <circle
            ref={trainHeadRef}
            cx="20"
            cy="0"
            r="8"
            fill="var(--secondary)"
            stroke="var(--white)"
            strokeWidth="2"
            className="shadow-lg"
          />
        </svg>
      </div>

      {/* Station Cards Timeline Container */}
      <div className="relative z-20 pl-14 lg:pl-0 space-y-6 sm:space-y-8">
        {railwaySegmentsData.map((station, idx) => (
          <SegmentStationCard key={station.id} station={station} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default RailwayTrack;

