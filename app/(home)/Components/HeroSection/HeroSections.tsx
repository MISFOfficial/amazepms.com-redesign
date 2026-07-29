"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Building2,
  Users,
  Sparkles,
  Phone,
  CheckCircle2,
} from "lucide-react";

export function HeroSections() {
  const [activeCard, setActiveCard] = useState<number>(0);

  const heroSlides = [
    {
      id: 0,
      title: "Residential Communities",
      subtitle: "Gated Societies & High-Rise Care",
      image: "/hero_building.png",
      href: "/services#residential",
      features: ["24/7 Security", "Housekeeping", "Garden Care"],
    },
    {
      id: 1,
      title: "Luxury Interior Care",
      subtitle: "Penthouses & Modern Living",
      image: "/hero_interior.png",
      href: "/services#interior",
      features: ["Deep Cleaning", "HVAC Repair", "Asset Audits"],
    },
    {
      id: 2,
      title: "Resort Facilities & Pool",
      subtitle: "Water Treatment & Amenities",
      image: "/hero_pool.png",
      href: "/services#facilities",
      features: ["Pool Maintenance", "Clubhouse", "Eco-Care"],
    },
    {
      id: 3,
      title: "Commercial Skyscraper Towers",
      tag: "Corporate Hubs & IT Parks",
      subtitle: "Corporate Hubs & IT Parks",
      image: "/hero_tower.png",
      href: "/services#commercial",
      features: ["M&E Engineering", "Access Control", "Facade Wash"],
    },
  ];

  return (
    <section className="relative w-full bg-slate-50 text-slate-900 overflow-hidden py-12 lg:py-16 border-b border-slate-200">
      <div className="ratio relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Text Section (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Top Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold rounded-full shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Integrated Property & Facility Management</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 leading-[1.15]">
              Elevating Property <br />
              Standards Across <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                South India.
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm text-slate-600 leading-relaxed max-w-lg">
              Amaze PMS delivers 360° facility maintenance, security, engineering, and staffing solutions for luxury residential complexes & corporate hubs.
            </p>

            {/* Bullet Points */}
            <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-slate-700 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>24/7 Rapid Emergency Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>ISO Certified Operations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Verified Technical Staff</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Transparent Asset Audits</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 transition-all shadow-md shadow-blue-600/20"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="tel:9100694137"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider px-5 py-3.5 transition-colors border border-slate-300 shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>Call Helpline</span>
              </a>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
              <div>
                <span className="text-xl lg:text-2xl font-bold text-slate-900 block font-mono">500+</span>
                <span className="text-[11px] text-slate-500 font-medium">Properties Managed</span>
              </div>
              <div>
                <span className="text-xl lg:text-2xl font-bold text-blue-600 block font-mono">99.8%</span>
                <span className="text-[11px] text-slate-500 font-medium">Client Satisfaction</span>
              </div>
              <div>
                <span className="text-xl lg:text-2xl font-bold text-slate-900 block font-mono">5 States</span>
                <span className="text-[11px] text-slate-500 font-medium">Active Presence</span>
              </div>
            </div>

          </div>

          {/* Right Interactive Gallery Accordion (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row gap-3 h-[450px] sm:h-[520px]">
            {heroSlides.map((slide, idx) => {
              const isExpanded = activeCard === idx;

              return (
                <motion.div
                  key={slide.id}
                  onMouseEnter={() => setActiveCard(idx)}
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
                    priority={idx === 0}
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                  {/* Expanded Content Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                    
                    {/* Top Tag Badge */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 bg-white/90 text-slate-900 backdrop-blur-xs">
                        0{idx + 1}
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
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSections;
