"use client";

import React from "react";
import {
  Building2,
  Briefcase,
  GraduationCap,
  Home,
  Hospital,
  Factory,
  HardHat,
  ShoppingBag,
  Cpu,
  Calendar,
  Warehouse,
  Pill,
  Sparkles,
  MapPin,
} from "lucide-react";
import { SegmentStation } from "./Content";

interface SegmentStationCardProps {
  station: SegmentStation;
  index: number;
}

export const SegmentStationCard: React.FC<SegmentStationCardProps> = ({
  station,
  index,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Building2":
        return <Building2 className="w-5 h-5 text-[var(--secondary)]" />;
      case "Briefcase":
        return <Briefcase className="w-5 h-5 text-[var(--secondary)]" />;
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5 text-[var(--secondary)]" />;
      case "Home":
        return <Home className="w-5 h-5 text-[var(--secondary)]" />;
      case "Hospital":
        return <Hospital className="w-5 h-5 text-[var(--secondary)]" />;
      case "Factory":
        return <Factory className="w-5 h-5 text-[var(--secondary)]" />;
      case "HardHat":
        return <HardHat className="w-5 h-5 text-[var(--secondary)]" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-5 h-5 text-[var(--secondary)]" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-[var(--secondary)]" />;
      case "Calendar":
        return <Calendar className="w-5 h-5 text-[var(--secondary)]" />;
      case "Warehouse":
        return <Warehouse className="w-5 h-5 text-[var(--secondary)]" />;
      case "Pill":
        return <Pill className="w-5 h-5 text-[var(--secondary)]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[var(--secondary)]" />;
    }
  };

  const isEven = index % 2 === 0;

  return (
    <div
      className={`railway-station-card relative w-full lg:w-[46%] my-4 sm:my-6 ${
        isEven ? "lg:mr-auto lg:text-right" : "lg:ml-auto lg:text-left"
      }`}
    >
      {/* Card Body Container */}
      <div className="relative bg-[var(--white)] rounded-2xl p-5 sm:p-6 border border-[var(--primary)]/20  hover:border-[var(--secondary)] hover: transition-all duration-500 overflow-hidden group text-[var(--black)]">
        {/* Card Header & Station Badge */}
        <div
          className={`flex items-center gap-3 mb-3 ${
            isEven ? "lg:justify-end" : "lg:justify-start"
          }`}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20 text-[10px] font-mono font-bold uppercase tracking-wider">
            <MapPin className="w-3 h-3 text-[var(--secondary)]" />
            <span>STATION {station.stationNumber}</span>
          </div>

          <span className="text-[10px] font-mono font-semibold text-[var(--black)]/60 uppercase tracking-widest">
            {station.category}
          </span>
        </div>

        {/* Station Title */}
        <div
          className={`flex items-center gap-3 mb-2.5 ${
            isEven ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-300">
            {getIcon(station.iconName)}
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-[var(--primary)] tracking-tight group-hover:text-[var(--secondary)] transition-colors">
            {station.title}
          </h3>
        </div>

        {/* Station Description */}
        <p className="text-xs sm:text-sm text-[var(--black)]/80 leading-relaxed font-sans font-normal">
          {station.description}
        </p>
      </div>
    </div>
  );
};

export default SegmentStationCard;
