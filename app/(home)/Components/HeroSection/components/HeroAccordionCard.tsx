"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  href: string;
  features: string[];
}

interface HeroAccordionCardProps {
  slide: HeroSlide;
  index: number;
  isExpanded: boolean;
  onHover: () => void;
}

export const HeroAccordionCard: React.FC<HeroAccordionCardProps> = ({
  slide,
  index,
  isExpanded,
  onHover,
}) => {
  return (
    <motion.div
      onMouseEnter={onHover}
      className={`relative overflow-hidden cursor-pointer transition-all duration-500 border border-slate-200 bg-slate-900 group ${
        isExpanded
          ? "flex-[3.5] sm:flex-[4] shadow-xl"
          : "flex-1 opacity-90 hover:opacity-100"
      }`}
    >
      {/* Background Image with Zoom */}
      <Image
        src={slide.image}
        alt={slide.title}
        fill
        className={`object-cover transition-transform duration-700 ease-out ${
          isExpanded
            ? "scale-105 brightness-95"
            : "scale-100 brightness-75 group-hover:scale-105"
        }`}
        priority={index === 0}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

      {/* Expanded Content Overlay */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
        {/* Top Tag Badge */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 bg-white/90 text-slate-900 backdrop-blur-xs">
            0{index + 1}
          </span>
          {isExpanded && (
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400 bg-slate-950/80 px-2.5 py-1 border border-blue-500/40">
              Active Showcase
            </span>
          )}
        </div>

        {/* Bottom Details */}
        <div className="space-y-2">
          <span className="text-xs font-medium text-blue-400 block">
            {slide.subtitle}
          </span>

          <h3
            className={`font-bold text-white transition-all ${
              isExpanded ? "text-xl sm:text-2xl" : "text-sm truncate"
            }`}
          >
            {slide.title}
          </h3>

          {/* Feature Chips on Expanded State */}
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="pt-2 space-y-3"
            >
              <div className="flex flex-wrap gap-1.5">
                {slide.features.map((feat) => (
                  <span
                    key={feat}
                    className="text-[10px] font-medium bg-slate-800/90 text-slate-200 px-2 py-0.5 border border-slate-700"
                  >
                    {feat}
                  </span>
                ))}
              </div>

              <Link
                href={slide.href}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-blue-400 transition-colors group/link"
              >
                <span>Explore Category</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default HeroAccordionCard;
