"use client";

import React from "react";
import { Target, Eye, Heart } from "lucide-react";
import { MissionItem } from "./Content";

interface MissionCardProps {
  item: MissionItem;
}

export const MissionCard: React.FC<MissionCardProps> = ({ item }) => {
  const renderIcon = () => {
    switch (item.iconType) {
      case "target":
        return <Target className="w-8 h-8 text-orange-500" />;
      case "eye":
        return <Eye className="w-8 h-8 text-blue-600" />;
      case "heart":
        return <Heart className="w-8 h-8 text-indigo-600" />;
    }
  };

  return (
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
      {/* Left Side Content */}
      <div className="space-y-4 max-w-2xl text-left">
        <div className="flex items-center gap-3">
          <span
            className={`text-xs font-mono font-extrabold tracking-widest px-3 py-1 rounded-full border ${item.badgeBg}`}
          >
            {item.tag}
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          {item.title}
        </h3>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
          {item.description}
        </p>
      </div>

      {/* Right Side Visual Emblem matching Screenshot 1 */}
      <div className="relative shrink-0 w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200/80 flex items-center justify-center p-4 shadow-inner group">
        {/* Brush Circle Accent Background */}
        <div
          className={`absolute inset-3 rounded-full border-4 border-dashed opacity-25 group-hover:rotate-45 transition-transform duration-700 ${
            item.iconType === "target"
              ? "border-orange-500"
              : item.iconType === "eye"
                ? "border-blue-600"
                : "border-indigo-600"
          }`}
        />

        {/* Inner Target Graphic Emblem */}
        <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white shadow-md border border-slate-100 flex flex-col items-center justify-center gap-1.5 p-2 text-center group-hover:scale-105 transition-transform duration-300">
          {renderIcon()}
          <span className="text-[11px] font-bold tracking-tight text-slate-800 font-sans">
            {item.title.replace("Our ", "")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MissionCard;
