"use client";

import React from "react";
import Image from "next/image";
import { Maximize2, Sparkles } from "lucide-react";
import { GalleryImageItem } from "./Content";

interface GalleryItemCardProps {
  item: GalleryImageItem;
  onClick: () => void;
}

export const GalleryItemCard: React.FC<GalleryItemCardProps> = ({
  item,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="gallery-item-card group cursor-pointer relative bg-[#071330] rounded-2xl border border-red-500/40 shadow-xl hover:border-cyan-400/60 hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full"
    >
      {/* Image Container matching Screenshot aspect ratio */}
      <div className="relative w-full h-72 sm:h-80 overflow-hidden bg-slate-900">
        <Image
          src={item.src}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#051336] via-[#051336]/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
            <Maximize2 className="w-5 h-5" />
          </div>
        </div>

        {/* Category Tag on Top Left */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-blue-950/90 text-cyan-300 border border-cyan-500/30 text-[10px] font-mono font-bold tracking-wide shadow-xs">
          {item.category}
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-4 bg-[#071330] border-t border-white/10 flex items-center justify-between">
        <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors line-clamp-1">
          {item.title}
        </h3>
        <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>
  );
};

export default GalleryItemCard;
