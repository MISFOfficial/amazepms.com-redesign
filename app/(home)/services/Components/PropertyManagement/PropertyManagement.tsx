"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { propertyServicesData, PropertyServiceItem } from "./components/Content";
import ServiceCard from "./components/ServiceCard";
import { Sparkles } from "lucide-react";

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
    <section className="relative w-full bg-[var(--white)] py-16 sm:py-24 border-b border-[var(--primary)]/10 overflow-hidden text-[var(--black)]">
      <div className="ratio relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-semibold rounded-full shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[var(--secondary)]" />
            <span className="font-mono uppercase text-[11px] sm:text-xs">
              COMPREHENSIVE PORTFOLIO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--black)] tracking-tight leading-tight">
            Property and Asset{" "}
            <span className="text-[var(--secondary)]">
              Management
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-[var(--black)]/80 font-sans max-w-xl mx-auto leading-relaxed font-normal">
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
                  ? "bg-[var(--primary)] text-[var(--white)] shadow-md font-bold scale-105"
                  : "bg-[var(--white)] text-[var(--black)]/80 border border-[var(--primary)]/20 hover:border-[var(--secondary)] hover:text-[var(--secondary)]"
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

