"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Building2,
  ShieldCheck,
  TrendingUp,
  Award,
  CheckCircle2,
  Layers,
} from "lucide-react";
import { whyPillarsData } from "./Content";
import WhyHeader from "./WhyHeader";

export const WhyCardStack: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Card themes & styling strictly using CSS variables from globals.css
  const cardThemes = [
    {
      bg: "bg-[var(--primary)] text-[var(--white)] border-[var(--primary)] ",
      accent: "text-[var(--secondary)]",
      badgeBg:
        "bg-[var(--white)]/15 text-[var(--white)] border-[var(--white)]/20",
      statColor: "text-[var(--secondary)]",
      cardLabel: "PILLAR 01",
    },
    {
      bg: "bg-[var(--white)] text-[var(--black)] border border-[var(--primary)]/20 ",
      accent: "text-[var(--primary)]",
      badgeBg:
        "bg-[var(--primary)]/10 text-[var(--primary)] border-[var(--primary)]/20",
      statColor: "text-[var(--primary)]",
      cardLabel: "PILLAR 02",
    },
    {
      bg: "bg-[var(--black)] text-[var(--white)] border border-[var(--primary)]/40 ",
      accent: "text-[var(--secondary)]",
      badgeBg:
        "bg-[var(--white)]/15 text-[var(--white)] border-[var(--white)]/20",
      statColor: "text-[var(--secondary)]",
      cardLabel: "PILLAR 03",
    },
    {
      bg: "bg-gradient-to-br from-[var(--primary)] to-[var(--black)] text-[var(--white)] border border-[var(--primary)]/40 ",
      accent: "text-[var(--secondary)]",
      badgeBg:
        "bg-[var(--white)]/15 text-[var(--white)] border-[var(--white)]/20",
      statColor: "text-[var(--secondary)]",
      cardLabel: "PILLAR 04",
    },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Building2":
        return <Building2 className="w-5 h-5 sm:w-7 sm:h-7" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 sm:w-7 sm:h-7" />;
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5 sm:w-7 sm:h-7" />;
      case "Award":
        return <Award className="w-5 h-5 sm:w-7 sm:h-7" />;
      default:
        return <Building2 className="w-5 h-5 sm:w-7 sm:h-7" />;
    }
  };

  useEffect(() => {
    if (!whyPillarsData || whyPillarsData.length === 0) return;

    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // GSAP ScrollTrigger timeline ONLY active on Large Desktop Devices (>= 1024px)
    mm.add("(min-width: 1024px)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(".why-card-wrapper");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center center", // Pin centered in viewport on desktop
          end: `+=${(cards.length - 1) * 100}%`,
          pin: true,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      // Card 0 remains active. Cards 1, 2... slide up sequentially on scroll.
      cards.forEach((card: HTMLElement, index: number) => {
        if (index === 0) return;
        tl.fromTo(card, { yPercent: 100 }, { yPercent: 0, ease: "none" });
      });
    });

    // Refresh layout measurements after painting
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    return () => {
      mm.revert();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="why-section-wrapper w-full bg-[var(--white)] min-h-screen flex flex-col justify-center py-8 lg:py-10"
    >
      {/* Header Section */}
      <div className="pb-4 sm:pb-6 px-4">
        <WhyHeader />
      </div>

      {/* GSAP Cards Container */}
      <div className="why-cards-container flex flex-col gap-6 lg:gap-0 lg:relative lg:w-full lg:h-[480px] lg:overflow-hidden lg:bg-[var(--white)] lg:items-center lg:justify-center px-4 max-w-4xl mx-auto lg:max-w-none">
        {whyPillarsData.map((pillar, idx) => {
          const theme = cardThemes[idx % cardThemes.length];

          return (
            <div
              key={pillar.id}
              className="why-card-wrapper w-full lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-center lg:px-4"
              style={{ zIndex: idx + 1 }}
            >
              <div
                className={`w-full max-w-4xl primary-rounded  p-5 sm:p-8 lg:p-10 ${theme.bg}  lg: transition-all duration-300 relative overflow-hidden flex flex-col justify-between my-auto`}
              >
                {/* Card Top Header */}
                <div>
                  <div className="flex flex-row items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
                    {/* Badge & Icon */}
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div
                        className={`w-11 h-11 sm:w-14 sm:h-14 primary-rounded sm:primary-rounded flex items-center justify-center shrink-0 border ${theme.badgeBg}`}
                      >
                        {getIcon(pillar.iconName)}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <span
                            className={`text-[10px] sm:text-xs font-mono font-extrabold uppercase tracking-wider sm:tracking-widest px-2.5 py-0.5 rounded-full border ${theme.badgeBg}`}
                          >
                            {theme.cardLabel}
                          </span>
                          <span className="text-xs opacity-70 font-medium">
                            • {pillar.number}/04
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold tracking-tight mt-1 leading-snug">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>

                    {/* Stat Badge */}
                    <div className="flex items-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-4 sm:py-2 primary-rounded sm:primary-rounded bg-black/20 backdrop-blur-md border border-white/10 shrink-0">
                      <Layers
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${theme.accent}`}
                      />
                      <div className="text-right">
                        <span
                          className={`text-lg sm:text-2xl font-mono font-extrabold block leading-none ${theme.statColor}`}
                        >
                          {pillar.stat}
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider block mt-0.5 opacity-80">
                          {pillar.statLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 100% Verbatim Screenshot Bullet Points */}
                <div className="grid grid-cols-1 gap-2.5 sm:gap-3 pt-3.5 sm:pt-4 border-t border-white/10">
                  {pillar.points.map((pt, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-3.5 primary-rounded sm:primary-rounded bg-white/5 backdrop-blur-xs border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      <CheckCircle2
                        className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5 ${theme.accent}`}
                      />
                      <span className="text-xs sm:text-sm font-medium leading-relaxed">
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyCardStack;
