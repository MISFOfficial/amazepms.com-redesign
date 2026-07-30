"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  careersHeaderData,
  jobOpeningsData,
  JobOpeningItem,
} from "./components/Content";
import JobOpeningCard from "./components/JobOpeningCard";
import ApplicationModal from "./components/ApplicationModal";
import { Mail, Sparkles, Briefcase } from "lucide-react";

export function OpeningsList() {
  const [selectedJob, setSelectedJob] = useState<JobOpeningItem | null>(null);
  const [activeTab, setActiveTab] = useState<string>("All");
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = [
    "All",
    "Management",
    "Operations",
    "Security",
    "Technical",
    "Soft Services",
  ];

  const filteredJobs =
    activeTab === "All"
      ? jobOpeningsData
      : jobOpeningsData.filter((j) => j.category === activeTab);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".job-opening-card");

      gsap.fromTo(
        cards,
        { opacity: 0, y: 35, scale: 0.95 },
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
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, [activeTab]);

  return (
    <section className="relative w-full bg-[var(--white)] py-16 sm:py-24 border-b border-[var(--primary)]/10 overflow-hidden text-[var(--black)]">
      <div className="ratio relative z-10 space-y-12">
        {/* Top Header Card Container */}
        <div className="bg-[var(--white)] primary-rounded p-6 sm:p-10 border border-[var(--primary)]/20  grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-4 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-semibold rounded-full ">
              <Sparkles className="w-3.5 h-3.5 text-[var(--secondary)]" />
              <span className="font-mono uppercase text-[11px]">
                {careersHeaderData.badge}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--black)] tracking-tight leading-tight">
              {careersHeaderData.heading}
            </h2>

            <p className="text-sm sm:text-base font-semibold text-[var(--secondary)] font-sans">
              {careersHeaderData.subheading}
            </p>

            <div className="p-4 sm:p-5 primary-rounded bg-[var(--primary)]/5 border border-[var(--primary)]/15 text-xs sm:text-sm text-[var(--black)]/80 leading-relaxed font-sans font-normal">
              {careersHeaderData.introText}{" "}
              <a
                href={`mailto:${careersHeaderData.email}`}
                className="text-[var(--secondary)] font-bold underline hover:text-[var(--primary)] transition-colors inline-flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4 text-[var(--secondary)]" />
                <span>{careersHeaderData.email}</span>
              </a>
            </div>
          </div>

          {/* Right Now Hiring Visual Graphic */}
          <div className="lg:col-span-5 relative h-56 sm:h-64 primary-rounded overflow-hidden border border-[var(--primary)]/20  group">
            <Image
              src="/hero_interior.png"
              alt="Amaze PMS Now Hiring Corporate Recruitment"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/90 via-[var(--primary)]/40 to-transparent" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
              <div className="w-16 h-16 primary-rounded bg-[var(--secondary)] text-[var(--white)] flex items-center justify-center font-extrabold  mb-2">
                <Briefcase className="w-8 h-8" />
              </div>
              <span className="text-lg font-black tracking-widest uppercase text-[var(--white)] font-mono">
                NOW HIRING
              </span>
              <span className="text-xs font-medium text-[var(--white)]/90">
                Join PAN India's Premier Property Management Team
              </span>
            </div>
          </div>
        </div>

        {/* Section Heading: Current Openings */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[var(--primary)]/15 pb-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--primary)] tracking-tight">
                Current Openings
              </h3>
              <p className="text-xs text-[var(--black)]/60 font-mono">
                {filteredJobs.length} active positions available
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeTab === cat
                      ? "bg-[var(--primary)] text-[var(--white)] font-bold scale-105"
                      : "bg-[var(--primary)]/5 text-[var(--black)]/80 border border-[var(--primary)]/15 hover:text-[var(--primary)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 14 Current Openings Cards Grid */}
          <div
            ref={containerRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          >
            {filteredJobs.map((job) => (
              <JobOpeningCard
                key={job.id}
                job={job}
                onApply={() => setSelectedJob(job)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Application Form Modal */}
      <ApplicationModal
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
      />
    </section>
  );
}

export default OpeningsList;
