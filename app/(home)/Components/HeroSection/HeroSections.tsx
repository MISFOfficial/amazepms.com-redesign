"use client";

import React, { useState } from "react";
import HeroIntro from "./components/HeroIntro";
import HeroStats from "./components/HeroStats";
import HeroAccordionCard, { HeroSlide } from "./components/HeroAccordionCard";
import { heroSlides } from "./components/Content";

export function HeroSections() {
  const [activeCard, setActiveCard] = useState<number>(0);

  return (
    <section className="relative w-full bg-slate-50 text-slate-900 overflow-hidden py-12 lg:py-16 border-b border-slate-200">
      <div className="ratio relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Hero Text Section & Stats */}
          <div className="lg:col-span-5 space-y-6">
            <HeroIntro />
            <HeroStats />
          </div>

          {/* Right Interactive Gallery Accordion */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row gap-3 h-[450px] sm:h-[520px]">
            {heroSlides.map((slide, idx) => (
              <HeroAccordionCard
                key={slide.id}
                slide={slide}
                index={idx}
                isExpanded={activeCard === idx}
                onHover={() => setActiveCard(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSections;
