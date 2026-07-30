"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const AboutContent: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6 lg:pl-2"
    >
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--primary)] tracking-tight">
        About Us
      </h2>

      {/* Description Paragraph */}
      <p className="text-xs sm:text-sm text-[var(--black)]/80 leading-relaxed font-normal">
        Amaze PMS Pvt Ltd (AMAZE) is a Property Management division of ACTION GROUP of Companies founded in the year 2001 by Mr. Subhani Abdul a veteran from the Indian Navy, a Certified Security Practitioner, and a renowned name in the Service Industry. Amaze has its Head Quarters in Cyberabad, Telangana - INDIA, providing Property Management Solutions PAN INDIA, partnering with leading clientele with 15000 + strong strength of professionals. We specialize in offering comprehensive integrated Property Management Services such as Housekeeping, MEP (Mechanical, Electrical, Plumbing), Security, Pest Control, Gardening, STP & WTP, Parking, Swimming Pool Maintenance, office support services, deep cleaning services etc all these services are inhouse.
      </p>

      {/* Checkmarks List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
        <div className="flex items-center gap-2.5">
          <CheckCircle2 className="w-5 h-5 text-[var(--secondary)] fill-[var(--secondary)] stroke-[var(--white)] shrink-0" />
          <span className="text-xs sm:text-sm font-semibold text-[var(--black)]">
            Strong 15000+ Work Force
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <CheckCircle2 className="w-5 h-5 text-[var(--secondary)] fill-[var(--secondary)] stroke-[var(--white)] shrink-0" />
          <span className="text-xs sm:text-sm font-semibold text-[var(--black)]">
            200+ Clients
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <CheckCircle2 className="w-5 h-5 text-[var(--secondary)] fill-[var(--secondary)] stroke-[var(--white)] shrink-0" />
          <span className="text-xs sm:text-sm font-semibold text-[var(--black)]">
            Presence PAN INDIA
          </span>
        </div>
      </div>

      {/* Pill Button: GET STARTED WITH US */}
      <div className="pt-2">
        <Link
          href="/contact"
          className="inline-flex items-center justify-between gap-4 bg-[var(--white)] hover:bg-[var(--primary)] text-[var(--primary)] hover:text-[var(--white)] border-2 border-[var(--primary)] px-6 py-2.5 rounded-full transition-all duration-300 shadow-xs group font-semibold text-xs tracking-wider"
        >
          <span>GET STARTED WITH US</span>
          <div className="w-8 h-8 rounded-full bg-[var(--primary)] text-[var(--white)] group-hover:bg-[var(--secondary)] flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
            <ArrowRight className="w-4 h-4" />
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default AboutContent;

