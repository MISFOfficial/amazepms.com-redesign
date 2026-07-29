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
        return <Building2 className="w-5 h-5 text-cyan-400" />;
      case "Briefcase":
        return <Briefcase className="w-5 h-5 text-cyan-400" />;
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5 text-cyan-400" />;
      case "Home":
        return <Home className="w-5 h-5 text-cyan-400" />;
      case "Hospital":
        return <Hospital className="w-5 h-5 text-cyan-400" />;
      case "Factory":
        return <Factory className="w-5 h-5 text-cyan-400" />;
      case "HardHat":
        return <HardHat className="w-5 h-5 text-cyan-400" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-5 h-5 text-cyan-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case "Calendar":
        return <Calendar className="w-5 h-5 text-cyan-400" />;
      case "Warehouse":
        return <Warehouse className="w-5 h-5 text-cyan-400" />;
      case "Pill":
        return <Pill className="w-5 h-5 text-cyan-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
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
      <div className="relative bg-[#071330] rounded-2xl p-5 sm:p-6 border border-blue-900/40 shadow-xl hover:border-cyan-500/50 hover:shadow-2xl transition-all duration-500 overflow-hidden group">
        {/* Ambient Glow Pill */}
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-600/10 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-500" />

        {/* Card Header & Station Badge */}
        <div
          className={`flex items-center gap-3 mb-3 ${
            isEven ? "lg:justify-end" : "lg:justify-start"
          }`}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-950/90 text-cyan-300 border border-cyan-500/30 text-[10px] font-mono font-bold uppercase tracking-wider">
            <MapPin className="w-3 h-3 text-cyan-400" />
            <span>STATION {station.stationNumber}</span>
          </div>

          <span className="text-[10px] font-mono font-semibold text-slate-400 uppercase tracking-widest">
            {station.category}
          </span>
        </div>

        {/* Station Title */}
        <div
          className={`flex items-center gap-3 mb-2.5 ${
            isEven ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-cyan-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
            {getIcon(station.iconName)}
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
            {station.title}
          </h3>
        </div>

        {/* Station Description */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          {station.description}
        </p>
      </div>
    </div>
  );
};

export default SegmentStationCard;
