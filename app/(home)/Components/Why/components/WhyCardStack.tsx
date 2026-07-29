"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import {
  Building2,
  ShieldCheck,
  TrendingUp,
  Award,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Layers,
} from "lucide-react";
import { whyPillarsData } from "./Content";

export const WhyCardStack: React.FC = () => {
  // Styles & Themes per Playing Card in the Deck
  const cardThemes = [
    {
      bg: "bg-[#0a1532] text-white border-blue-900/50 shadow-2xl",
      accent: "text-cyan-400",
      badgeBg: "bg-blue-950/80 text-cyan-300 border-blue-700/50",
      statColor: "text-cyan-400",
      checkColor: "text-cyan-400 fill-cyan-400/20",
      cardLabel: "DECK CARD 01",
    },
    {
      bg: "bg-white text-slate-900 border-slate-200 shadow-2xl",
      accent: "text-blue-600",
      badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
      statColor: "text-blue-600",
      checkColor: "text-blue-600 fill-blue-600/20",
      cardLabel: "DECK CARD 02",
    },
    {
      bg: "bg-[#111827] text-white border-slate-800 shadow-2xl",
      accent: "text-indigo-400",
      badgeBg: "bg-indigo-950/80 text-indigo-300 border-indigo-700/50",
      statColor: "text-indigo-400",
      checkColor: "text-indigo-400 fill-indigo-400/20",
      cardLabel: "DECK CARD 03",
    },
    {
      bg: "bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 text-white border-blue-800/40 shadow-2xl",
      accent: "text-blue-400",
      badgeBg: "bg-blue-950/90 text-blue-300 border-blue-600/50",
      statColor: "text-blue-400",
      checkColor: "text-blue-400 fill-blue-400/20",
      cardLabel: "DECK CARD 04",
    },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Building2":
        return <Building2 className="w-7 h-7" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-7 h-7" />;
      case "TrendingUp":
        return <TrendingUp className="w-7 h-7" />;
      case "Award":
        return <Award className="w-7 h-7" />;
      default:
        return <Building2 className="w-7 h-7" />;
    }
  };

  // GSAP 3D Hover Tilt Effect
  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    element: HTMLDivElement | null
  ) => {
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(element, {
      rotationY: x / 35,
      rotationX: -y / 35,
      transformPerspective: 1000,
      ease: "power1.out",
      duration: 0.3,
    });
  };

  const handleMouseLeave = (element: HTMLDivElement | null) => {
    if (!element) return;
    gsap.to(element, {
      rotationY: 0,
      rotationX: 0,
      ease: "power2.out",
      duration: 0.5,
    });
  };

  return (
    <div className="relative max-w-5xl mx-auto space-y-16 pb-24">
      {whyPillarsData.map((pillar, idx) => {
        const theme = cardThemes[idx % cardThemes.length];
        const stickyTop = 90 + idx * 36; // Playing Card Deck Stacking Header Offset

        return (
          <div
            key={pillar.id}
            style={{
              position: "sticky",
              top: `${stickyTop}px`,
              zIndex: idx + 10,
            }}
            className="w-full transition-transform duration-300"
          >
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
              className={`w-full min-h-[460px] sm:min-h-[500px] rounded-[32px] p-6 sm:p-12 border ${theme.bg} transition-all duration-300 relative overflow-hidden group flex flex-col justify-between`}
            >
              {/* Playing Card Header Bar */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  {/* Badge & Icon */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border ${theme.badgeBg}`}
                    >
                      {getIcon(pillar.iconName)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-mono font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${theme.badgeBg}`}
                        >
                          {theme.cardLabel}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          • {pillar.number}/04
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mt-1">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  {/* Big Stat Pill */}
                  <div className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-black/20 backdrop-blur-md border border-white/10">
                    <Layers className={`w-5 h-5 ${theme.accent}`} />
                    <div className="text-right">
                      <span
                        className={`text-2xl sm:text-3xl font-mono font-extrabold block leading-none ${theme.statColor}`}
                      >
                        {pillar.stat}
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-wider block mt-1 opacity-80">
                        {pillar.statLabel}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Subtitle / Tagline */}
                <p className="text-sm sm:text-base opacity-80 font-medium leading-relaxed max-w-3xl mb-8">
                  {pillar.tagline}
                </p>
              </div>

              {/* 2-Column Grid of 4 Benefit Checkmarks */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-white/10">
                {pillar.points.map((pt, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-xs border border-white/5 hover:bg-white/10 transition-colors"
                  >
                    <CheckCircle2
                      className={`w-5 h-5 shrink-0 mt-0.5 ${theme.accent}`}
                    />
                    <span className="text-xs sm:text-sm font-medium leading-relaxed">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default WhyCardStack;
