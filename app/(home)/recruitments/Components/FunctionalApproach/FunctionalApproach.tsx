"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { functionalApproachData } from "./components/Content";
import StageStepCard from "./components/StageStepCard";
import { Sparkles } from "lucide-react";

export function FunctionalApproach() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".stage-step-card");

      gsap.fromTo(
        cards,
        { opacity: 0, x: -40, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full bg-[var(--white)] py-16 sm:py-24 border-b border-[var(--primary)]/10 overflow-hidden text-[var(--black)]">
      <div className="ratio relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-semibold rounded-full ">
            <Sparkles className="w-3.5 h-3.5 text-[var(--secondary)]" />
            <span className="font-mono uppercase text-[11px] sm:text-xs">
              EXECUTION FRAMEWORK
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--black)] tracking-tight leading-tight">
            Functional <span className="text-[var(--secondary)]">Approach</span>
          </h2>
        </div>

        {/* Grid Container: Left 4 Stages Timeline, Right Skyscraper Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: 4 Stepped Stages Grid */}
          <div
            ref={containerRef}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {functionalApproachData.map((stage, idx) => (
              <StageStepCard key={stage.stageBadge} stage={stage} index={idx} />
            ))}
          </div>

          {/* Right: Skyscraper Graphic Image */}
          <div className="lg:col-span-4 relative h-[450px] sm:h-[550px] primary-rounded overflow-hidden border border-[var(--primary)]/20  group">
            <Image
              src="/hero_building.png"
              alt="High-Rise Skyscraper Architecture"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)]/80 via-transparent to-transparent opacity-90" />

            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              <span className="text-xs font-mono font-bold text-[var(--secondary)] uppercase tracking-widest block">
                4-STAGE ONBOARDING
              </span>
              <h4 className="text-xl font-bold text-[var(--white)] leading-tight">
                Seamless Transition & Operational Continuity
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FunctionalApproach;
