"use client";

import React from "react";
import { propertyServicesData } from "./components/Content";
import ServiceCard from "./components/ServiceCard";

export function PropertyManagement() {
  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="ratio">
        {/* Section Header matching Screenshot verbatim */}
        <div className="mb-8 sm:mb-10 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#051336] tracking-tight">
            Property and Asset Management
          </h2>
        </div>

        {/* 19 Services Grid matching Screenshot 6x3+1 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {propertyServicesData.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PropertyManagement;
