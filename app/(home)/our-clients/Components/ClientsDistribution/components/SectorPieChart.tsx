"use client";

import React from "react";
import { PieChart as PieIcon } from "lucide-react";

export const SectorPieChart: React.FC = () => {
  const sectors = [
    {
      label: "Residential Communities",
      percentage: 50,
      color: "bg-blue-600",
      hex: "#2563eb",
    },
    {
      label: "Commercial & IT Parks",
      percentage: 20,
      color: "bg-red-500",
      hex: "#ef4444",
    },
    {
      label: "Corporate Offices",
      percentage: 10,
      color: "bg-amber-500",
      hex: "#f59e0b",
    },
    {
      label: "Educational Institutions",
      percentage: 8,
      color: "bg-emerald-500",
      hex: "#10b981",
    },
    {
      label: "Malls, Multiplex & Retail",
      percentage: 5,
      color: "bg-indigo-500",
      hex: "#6366f1",
    },
    {
      label: "Hospitals & Clinics",
      percentage: 4,
      color: "bg-purple-500",
      hex: "#a855f7",
    },
    {
      label: "Warehouses & Pharma",
      percentage: 3,
      color: "bg-teal-500",
      hex: "#14b8a6",
    },
  ];

  return (
    <div className="bg-[var(--white)] primary-rounded p-6 sm:p-8 border border-[var(--primary)]/20 space-y-6 text-[var(--black)]">
      {/* Header */}
      <div className="flex items-center gap-3 pb-4 border-b border-[var(--primary)]/15">
        <PieIcon className="w-6 h-6 text-[var(--secondary)]" />
        <div>
          <h3 className="text-xl font-bold text-[var(--primary)] tracking-tight">
            Client Sector Distribution
          </h3>
          <span className="text-xs font-mono text-[var(--secondary)]">
            Portfolio Breakdown Across PAN India
          </span>
        </div>
      </div>

      {/* SVG Donut Chart */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 py-4">
        {/* SVG Graphic */}
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 shrink-0">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full transform -rotate-90"
          >
            {/* 50% Segment: Residential */}
            <circle
              cx="50"
              cy="50"
              r="38"
              fill="transparent"
              stroke="#2563eb"
              strokeWidth="20"
              strokeDasharray="119.38 119.38"
              strokeDashoffset="0"
            />
            {/* 20% Segment: Commercial */}
            <circle
              cx="50"
              cy="50"
              r="38"
              fill="transparent"
              stroke="#ef4444"
              strokeWidth="20"
              strokeDasharray="47.75 191.01"
              strokeDashoffset="-119.38"
            />
            {/* 10% Segment: Corporate */}
            <circle
              cx="50"
              cy="50"
              r="38"
              fill="transparent"
              stroke="#f59e0b"
              strokeWidth="20"
              strokeDasharray="23.87 214.89"
              strokeDashoffset="-167.13"
            />
            {/* 8% Segment: Education */}
            <circle
              cx="50"
              cy="50"
              r="38"
              fill="transparent"
              stroke="#10b981"
              strokeWidth="20"
              strokeDasharray="19.10 219.66"
              strokeDashoffset="-191.00"
            />
            {/* 5% Segment: Retail */}
            <circle
              cx="50"
              cy="50"
              r="38"
              fill="transparent"
              stroke="#6366f1"
              strokeWidth="20"
              strokeDasharray="11.93 226.83"
              strokeDashoffset="-210.10"
            />
            {/* 4% Segment: Healthcare */}
            <circle
              cx="50"
              cy="50"
              r="38"
              fill="transparent"
              stroke="#a855f7"
              strokeWidth="20"
              strokeDasharray="9.55 229.21"
              strokeDashoffset="-222.03"
            />
            {/* 3% Segment: Warehouses */}
            <circle
              cx="50"
              cy="50"
              r="38"
              fill="transparent"
              stroke="#14b8a6"
              strokeWidth="20"
              strokeDasharray="7.16 231.60"
              strokeDashoffset="-231.58"
            />
          </svg>

          {/* Inner Center Stat */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-2xl font-extrabold text-[var(--primary)] font-mono">
              100+
            </span>
            <span className="text-[10px] font-mono font-semibold text-[var(--secondary)] uppercase">
              PORTFOLIOS
            </span>
          </div>
        </div>

        {/* Legend Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
          {sectors.map((sec, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between p-2.5 primary-rounded bg-[var(--primary)]/5 border border-[var(--primary)]/15 ${
                idx === sectors.length - 1 ? "sm:col-span-2" : ""
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className={`w-3 h-3 rounded-full shrink-0 ${sec.color}`}
                />
                <span className="text-xs sm:text-sm font-medium text-[var(--black)]/85">
                  {sec.label}
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-[var(--secondary)]">
                {sec.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectorPieChart;
