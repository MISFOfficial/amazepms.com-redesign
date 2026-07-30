"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { galleryItemsData } from "./components/Content";
import GalleryItemCard from "./components/GalleryItemCard";
import ImageLightboxModal from "./components/ImageLightboxModal";
import { Sparkles } from "lucide-react";

export function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null,
  );
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = [
    "All",
    "Staff Lineup",
    "On-Site Operations",
    "Training & SOPs",
  ];

  const filteredItems =
    activeFilter === "All"
      ? galleryItemsData
      : galleryItemsData.filter((item) => item.category === activeFilter);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".gallery-item-card");

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
  }, [activeFilter]);

  const handlePrev = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex(
        (selectedItemIndex - 1 + filteredItems.length) % filteredItems.length,
      );
    }
  };

  const handleNext = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % filteredItems.length);
    }
  };

  return (
    <section className="relative w-full bg-[var(--white)] py-16 sm:py-24 border-b border-[var(--primary)]/10 overflow-hidden text-[var(--black)]">
      <div className="ratio relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-semibold rounded-full ">
            <Sparkles className="w-3.5 h-3.5 text-[var(--secondary)]" />
            <span className="font-mono uppercase text-[11px] sm:text-xs">
              VISUAL PORTFOLIO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--black)] tracking-tight leading-tight">
            Workforce & Operations{" "}
            <span className="text-[var(--secondary)]">Gallery</span>
          </h2>

          <p className="text-xs sm:text-sm text-[var(--black)]/80 font-sans max-w-xl mx-auto leading-relaxed font-normal">
            Real operational moments showcasing our uniformed security force,
            technical teams, classroom training sessions, and deep cleaning
            operations.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-[var(--primary)] text-[var(--white)]  font-bold scale-105"
                  : "bg-[var(--primary)]/5 text-[var(--black)]/80 border border-[var(--primary)]/15 hover:border-[var(--secondary)] hover:text-[var(--primary)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredItems.map((item, idx) => (
            <GalleryItemCard
              key={item.id}
              item={item}
              onClick={() => setSelectedItemIndex(idx)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageLightboxModal
        item={
          selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null
        }
        onClose={() => setSelectedItemIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}

export default GalleryGrid;
