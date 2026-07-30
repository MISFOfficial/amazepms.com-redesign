"use client";

import React from "react";
import { servicePartnersData } from "./components/Content";
import PartnerCard from "./components/PartnerCard";

export function ServicePartners() {
  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="ratio">
        {/* Section Header matching Screenshot */}
        <div className="mb-8 sm:mb-10 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#051336] tracking-tight">
            Our Service Partners
          </h2>
        </div>

        {/* 3 Partner Cards Grid matching Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {servicePartnersData.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicePartners;
