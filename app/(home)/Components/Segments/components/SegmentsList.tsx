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
} from "lucide-react";
import { segmentsData, SegmentItem } from "./Content";

export const SegmentsList: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Building2":
        return <Building2 className="w-4 h-4 text-blue-600" />;
      case "Briefcase":
        return <Briefcase className="w-4 h-4 text-blue-600" />;
      case "GraduationCap":
        return <GraduationCap className="w-4 h-4 text-blue-600" />;
      case "Home":
        return <Home className="w-4 h-4 text-blue-600" />;
      case "Hospital":
        return <Hospital className="w-4 h-4 text-blue-600" />;
      case "Factory":
        return <Factory className="w-4 h-4 text-blue-600" />;
      case "HardHat":
        return <HardHat className="w-4 h-4 text-blue-600" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-4 h-4 text-blue-600" />;
      case "Cpu":
        return <Cpu className="w-4 h-4 text-blue-600" />;
      case "Calendar":
        return <Calendar className="w-4 h-4 text-blue-600" />;
      case "Warehouse":
        return <Warehouse className="w-4 h-4 text-blue-600" />;
      case "Pill":
        return <Pill className="w-4 h-4 text-blue-600" />;
      default:
        return <Sparkles className="w-4 h-4 text-blue-600" />;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
      {segmentsData.map((item: SegmentItem) => (
        <div
          key={item.id}
          className="segment-item-card flex items-center gap-3 p-3 sm:p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300 group"
        >
          {/* Diamond Decorative Emblem */}
          <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200/60 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
            {getIcon(item.iconName)}
          </div>

          {/* Segment Title matching screenshot verbatim */}
          <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SegmentsList;
