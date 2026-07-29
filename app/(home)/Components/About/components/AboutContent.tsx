"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const AboutContent: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-5 lg:pl-4"
    >
      {/* Top Tag Badge */}
      <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-md tracking-wide">
        About Amaze PMS
      </div>

      {/* Main Headline matching reference screenshot typography */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-medium text-slate-900 tracking-tight leading-[1.15]">
        Comfort Meets Elegance
      </h2>

      {/* Description Paragraph */}
      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
        Amaze PMS Pvt Ltd (AMAZE) is a Property Management division of ACTION GROUP of Companies founded in the year 2001 by Mr. Subhani Abdul, a veteran from the Indian Navy and Certified Security Practitioner. Headquartered in Cyberabad, Telangana, Amaze provides Property Management Solutions PAN INDIA with a 15,000+ strong workforce of professionals. We specialize in comprehensive in-house Housekeeping, MEP, Security, Pest Control, Gardening, STP & WTP, and Deep Cleaning services.
      </p>

      {/* Checkmarks List matching reference screenshot */}
      <div className="space-y-3 pt-2 text-xs sm:text-sm font-medium text-slate-700">
        <div className="flex items-center gap-3">
          <Check className="w-4 h-4 text-amber-700 stroke-[2.5] shrink-0" />
          <span>Strong 15000+ Work Force</span>
        </div>

        <div className="flex items-center gap-3">
          <Check className="w-4 h-4 text-amber-700 stroke-[2.5] shrink-0" />
          <span>200+ Corporate & Residential Clients</span>
        </div>

        <div className="flex items-center gap-3">
          <Check className="w-4 h-4 text-amber-700 stroke-[2.5] shrink-0" />
          <span>Fully integrated in-house service management</span>
        </div>

        <div className="flex items-center gap-3">
          <Check className="w-4 h-4 text-amber-700 stroke-[2.5] shrink-0" />
          <span>PAN India presence with ISO certification</span>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutContent;
