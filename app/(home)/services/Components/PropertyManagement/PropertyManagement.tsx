"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { propertyServicesData, PropertyServiceItem } from "./components/Content";
import ServiceCard from "./components/ServiceCard";
import { Grid, Sparkles } from "lucide-react";

export function PropertyManagement() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = [
    "All",
    "Security & Safety",
    "Soft Services",
    "Technical & MEP",
    "Operations",
    "Lifestyle & Amenities",
    "Specialized",
  ];

  const filteredServices =
    activeFilter === "All"
      ? propertyServicesData
      : propertyServicesData.filter((item) => item.category === activeFilter);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".property-service-card");

      gsap.fromTo(
        cards,
        { opacity: 0, y: 35, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [activeFilter]);

  return (
    <section className="relative w-full bg-slate-950 py-16 sm:py-24 border-b border-blue-950/80 overflow-hidden text-white">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      <div className="ratio relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-950/90 border border-cyan-500/30 text-cyan-300 text-xs font-semibold rounded-full shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span className="font-mono uppercase text-[11px] sm:text-xs">
              COMPREHENSIVE PORTFOLIO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Property and Asset{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-300 bg-clip-text text-transparent">
              Management
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-xl mx-auto leading-relaxed">
            Delivering 19 specialized facility, security, technical, and operational services tailored for commercial towers and residential communities.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20 font-bold scale-105"
                  : "bg-white/5 text-slate-300 border border-white/10 hover:border-cyan-400/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 19 Services Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
        >
          {filteredServices.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PropertyManagement;
