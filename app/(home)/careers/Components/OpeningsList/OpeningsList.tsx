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
import { Mail, Sparkles, Briefcase, Search } from "lucide-react";

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
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [activeTab]);

  return (
    <section className="relative w-full bg-slate-950 py-16 sm:py-24 border-b border-blue-950/80 overflow-hidden text-white">
      {/* Background Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      <div className="ratio relative z-10 space-y-12">
        {/* Top Header Card Container matching Screenshot */}
        <div className="bg-[#071330] rounded-3xl p-6 sm:p-10 border border-blue-900/40 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-4 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-950/90 border border-cyan-500/30 text-cyan-300 text-xs font-semibold rounded-full shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span className="font-mono uppercase text-[11px]">
                {careersHeaderData.badge}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              {careersHeaderData.heading}
            </h2>

            <p className="text-sm sm:text-base font-semibold text-cyan-400 font-sans">
              {careersHeaderData.subheading}
            </p>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              {careersHeaderData.introText}{" "}
              <a
                href={`mailto:${careersHeaderData.email}`}
                className="text-cyan-300 font-bold underline hover:text-white transition-colors inline-flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{careersHeaderData.email}</span>
              </a>
            </div>
          </div>

          {/* Right Now Hiring Visual Graphic matching Screenshot */}
          <div className="lg:col-span-5 relative h-56 sm:h-64 rounded-2xl overflow-hidden border border-white/15 shadow-xl group">
            <Image
              src="/hero_interior.png"
              alt="Amaze PMS Now Hiring Corporate Recruitment"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#051336] via-[#051336]/60 to-transparent" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500 text-slate-950 flex items-center justify-center font-extrabold shadow-2xl mb-2 animate-bounce">
                <Briefcase className="w-8 h-8" />
              </div>
              <span className="text-lg font-black tracking-widest uppercase text-white font-mono">
                NOW HIRING
              </span>
              <span className="text-xs font-medium text-cyan-300">
                Join PAN India's Premier Property Management Team
              </span>
            </div>
          </div>
        </div>

        {/* Section Heading: Current Openings */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Current Openings
              </h3>
              <p className="text-xs text-slate-400 font-mono">
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
                      ? "bg-cyan-500 text-slate-950 font-bold scale-105"
                      : "bg-white/5 text-slate-300 border border-white/10 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 14 Current Openings Cards Grid matching Screenshot */}
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
