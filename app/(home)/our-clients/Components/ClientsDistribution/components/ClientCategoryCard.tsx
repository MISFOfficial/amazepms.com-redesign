"use client";

import React from "react";
import {
  Building2,
  Home,
  ShoppingBag,
  Hospital,
  Warehouse,
  GraduationCap,
  Factory,
  CheckCircle2,
} from "lucide-react";
import { ClientCategoryGroup } from "./Content";

interface ClientCategoryCardProps {
  group: ClientCategoryGroup;
}

export const ClientCategoryCard: React.FC<ClientCategoryCardProps> = ({
  group,
}) => {
  const getIcon = () => {
    switch (group.iconName) {
      case "Building2":
        return <Building2 className="w-5 h-5 text-cyan-400" />;
      case "Home":
        return <Home className="w-5 h-5 text-cyan-400" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-5 h-5 text-cyan-400" />;
      case "Hospital":
        return <Hospital className="w-5 h-5 text-cyan-400" />;
      case "Warehouse":
        return <Warehouse className="w-5 h-5 text-cyan-400" />;
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5 text-cyan-400" />;
      case "Factory":
        return <Factory className="w-5 h-5 text-cyan-400" />;
      default:
        return <Building2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div className="client-category-card bg-[#071330] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-blue-900/40 shadow-2xl hover:border-cyan-500/50 transition-all duration-500 flex flex-col justify-between h-full group">
      <div>
        {/* Header: Icon + Title + Count Badge */}
        <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-cyan-500/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-300">
              {getIcon()}
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
              {group.categoryTitle}
            </h3>
          </div>

          <span className="text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-blue-950 border border-cyan-500/30 shrink-0">
            {group.countBadge}
          </span>
        </div>

        {/* Numbered Client List matching Screenshot verbatim */}
        <div className="space-y-2">
          {group.clients.map((client, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 p-2 rounded-lg bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-colors"
            >
              <span className="text-xs font-mono font-bold text-cyan-400 shrink-0 mt-0.5">
                {idx + 1}.
              </span>
              <span className="text-xs sm:text-sm text-slate-200 font-medium leading-tight">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientCategoryCard;
