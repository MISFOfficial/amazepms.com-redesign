"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SegmentsHeader from "./components/SegmentsHeader";
import SegmentsList from "./components/SegmentsList";
import SegmentsVisual from "./components/SegmentsVisual";

export function Segments() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // GSAP Stagger Reveal animation for segment list items
      const items = gsap.utils.toArray<HTMLElement>(".segment-item-card");

      gsap.fromTo(
        items,
        { opacity: 0, y: 25, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.07,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-slate-50 py-12 sm:py-16 border-b border-slate-200 overflow-hidden"
    >
      <div className="ratio">
        {/* Card Container matching Screenshot */}
        <div className="w-full bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left & Center: Header + 2-Column List */}
            <div className="lg:col-span-8 space-y-6">
              <SegmentsHeader />
              <SegmentsList />
            </div>

            {/* Right: Graphic Illustration */}
            <div className="lg:col-span-4 h-full">
              <SegmentsVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Segments;
