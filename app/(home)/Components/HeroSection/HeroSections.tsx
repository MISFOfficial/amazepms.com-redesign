"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ShieldCheck,
  Building,
  Sparkles,
  PhoneCall,
} from "lucide-react";

export function HeroSections() {
  const [activeCard, setActiveCard] = useState<number | null>(0);

  const cards = [
    {
      id: 0,
      title: "Luxury Residential Complexes",
      tag: "Apartments & Gated Communities",
      image: "/hero_building.png",
      href: "/services#residential",
    },
    {
      id: 1,
      title: "Penthouse & Interior Care",
      tag: "Deep Cleaning & Asset Management",
      image: "/hero_interior.png",
      href: "/services#interior",
    },
    {
      id: 2,
      title: "Resort Facilities & Amenities",
      tag: "Pool, HVAC & Environmental Care",
      image: "/hero_pool.png",
      href: "/services#facilities",
    },
    {
      id: 3,
      title: "Commercial Skyscraper Towers",
      tag: "Corporate Hubs & Office Parks",
      image: "/hero_tower.png",
      href: "/services#commercial",
    },
  ];

  return (
    <section className="relative w-full bg-[#0a0808] text-white overflow-hidden py-6 lg:py-10 border-b border-slate-800/80">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="ratio relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch min-h-[580px] lg:min-h-[640px] gap-4 lg:gap-0">
          {/* Left Dark Text Card (Skewed Edge matching reference screenshot) */}
          <div className="w-full lg:w-[38%]  flex flex-col justify-between relative z-20 shadow-2xl lg:-mr-8 clip-path-hero-left">
            {/* Top Badge */}
            <div className="space-y-4">
              {/* Bold Title matching reference typography */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15]">
                PREMIUM <br />
                PROPERTY & <br />
                APARTMENT <br />
                MANAGEMENT
              </h1>

              <p className="text-xs sm:text-sm text-amber-200/70 font-sans leading-relaxed pt-2 max-w-md">
                Transforming residential and commercial properties into
                high-performance, ultra-smooth facility ecosystems across South
                India.
              </p>
            </div>

            {/* Bottom Actions & Trust Indicator */}
            <div className="space-y-6 pt-8">
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider px-6 py-3.5 transition-all duration-200 border border-amber-500"
                >
                  <span>Explore Services</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider px-5 py-3.5 transition-colors border border-slate-700"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                  <span>24/7 Helpline</span>
                </Link>
              </div>

              {/* Verification Stat */}
              <div className="flex items-center gap-6 pt-4 border-t border-amber-900/30 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>ISO Certified Care</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-amber-400" />
                  <span>500+ Properties Managed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Skewed Accordion Diagonal Expandable Image Cards */}
          <div className="w-full lg:w-[62%] flex flex-col sm:flex-row items-stretch gap-2 lg:gap-1.5 pl-0 lg:pl-4 min-h-[400px] lg:min-h-full">
            {cards.map((card, idx) => {
              const isSelected = activeCard === idx;

              return (
                <motion.div
                  key={card.id}
                  onMouseEnter={() => setActiveCard(idx)}
                  className={`relative overflow-hidden cursor-pointer transition-all duration-500 border border-slate-800/80 group ${
                    isSelected
                      ? "flex-[3.5] lg:flex-[3.8]"
                      : "flex-1 opacity-80 hover:opacity-100"
                  } -skew-x-0 sm:-skew-x-6 sm:first:ml-4`}
                >
                  {/* Image Container with Hover Scale */}
                  <div className="absolute inset-0 w-full h-full skew-x-0 sm:skew-x-6 scale-110">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className={`object-cover transition-transform duration-700 ease-out ${
                        isSelected
                          ? "scale-110 brightness-105"
                          : "scale-100 brightness-90 group-hover:scale-105"
                      }`}
                      priority={idx === 0}
                    />
                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-300 ${
                        isSelected
                          ? "bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90"
                          : "bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent opacity-80"
                      }`}
                    />
                  </div>

                  {/* Card Content Label */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 skew-x-0 sm:skew-x-6 z-10 flex flex-col justify-end">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 mb-1">
                      {card.tag}
                    </span>

                    <div className="flex items-center justify-between gap-2">
                      <h3
                        className={`font-serif font-bold text-white transition-all duration-300 ${
                          isSelected
                            ? "text-lg sm:text-xl leading-tight"
                            : "text-sm truncate opacity-90"
                        }`}
                      >
                        {card.title}
                      </h3>

                      {isSelected && (
                        <Link
                          href={card.href}
                          className="w-8 h-8 bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 transition-transform hover:scale-110"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSections;
