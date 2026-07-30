"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { clientCategoriesData } from "./components/Content";
import ClientCategoryCard from "./components/ClientCategoryCard";
import SectorPieChart from "./components/SectorPieChart";
import { Search, Sparkles } from "lucide-react";

export function ClientsDistribution() {
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".client-category-card");

      gsap.fromTo(
        cards,
        { opacity: 0, y: 40, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, [searchQuery]);

  const filteredCategories = clientCategoriesData
    .map((cat) => ({
      ...cat,
      clients: cat.clients.filter((c) =>
        c.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((cat) => cat.clients.length > 0);

  return (
    <section className="relative w-full bg-[var(--white)] py-16 sm:py-24 border-b border-[var(--primary)]/10 overflow-hidden text-[var(--black)]">
      <div className="ratio relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-semibold rounded-full ">
            <Sparkles className="w-3.5 h-3.5 text-[var(--secondary)]" />
            <span className="font-mono uppercase text-[11px] sm:text-xs">
              ESTEEMED CLIENTELE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--black)] tracking-tight leading-tight">
            Client{" "}
            <span className="text-[var(--secondary)]">Directory & Sectors</span>
          </h2>

          <p className="text-xs sm:text-sm text-[var(--black)]/80 font-sans max-w-xl mx-auto leading-relaxed font-normal">
            Trusted by over 100+ prestigious commercial parks, residential
            communities, healthcare networks, and industrial complexes.
          </p>
        </div>

        {/* Client Search Bar */}
        <div className="max-w-md mx-auto relative">
          <Search className="w-4 h-4 text-[var(--black)]/40 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search client name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-full bg-[var(--white)] border border-[var(--primary)]/20 text-[var(--black)] placeholder-[var(--black)]/40 text-xs sm:text-sm focus:outline-none focus:border-[var(--secondary)] "
          />
        </div>

        {/* 7 Client Category Cards Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredCategories.map((group) => (
            <ClientCategoryCard key={group.id} group={group} />
          ))}
        </div>

        {/* Sector Share Pie Chart Visual */}
        <div className="max-w-4xl mx-auto pt-8">
          <SectorPieChart />
        </div>
      </div>
    </section>
  );
}

export default ClientsDistribution;
