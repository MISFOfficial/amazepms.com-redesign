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
        return <Building2 className="w-5 h-5 text-[var(--secondary)]" />;
      case "Home":
        return <Home className="w-5 h-5 text-[var(--secondary)]" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-5 h-5 text-[var(--secondary)]" />;
      case "Hospital":
        return <Hospital className="w-5 h-5 text-[var(--secondary)]" />;
      case "Warehouse":
        return <Warehouse className="w-5 h-5 text-[var(--secondary)]" />;
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5 text-[var(--secondary)]" />;
      case "Factory":
        return <Factory className="w-5 h-5 text-[var(--secondary)]" />;
      default:
        return <Building2 className="w-5 h-5 text-[var(--secondary)]" />;
    }
  };

  return (
    <div className="client-category-card bg-[var(--white)] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[var(--primary)]/20 shadow-xl hover:border-[var(--secondary)] hover:shadow-2xl transition-all duration-500 flex flex-col justify-between h-full group text-[var(--black)]">
      <div>
        {/* Header: Icon + Title + Count Badge */}
        <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-[var(--primary)]/15">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-300">
              {getIcon()}
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[var(--primary)] tracking-tight group-hover:text-[var(--secondary)] transition-colors">
              {group.categoryTitle}
            </h3>
          </div>

          <span className="text-[10px] font-mono font-bold text-[var(--primary)] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 shrink-0">
            {group.countBadge}
          </span>
        </div>

        {/* Numbered Client List */}
        <div className="space-y-2">
          {group.clients.map((client, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 p-2 rounded-lg bg-[var(--primary)]/5 border border-[var(--primary)]/15 hover:border-[var(--secondary)] transition-colors"
            >
              <span className="text-xs font-mono font-bold text-[var(--secondary)] shrink-0 mt-0.5">
                {idx + 1}.
              </span>
              <span className="text-xs sm:text-sm text-[var(--black)]/85 font-medium leading-tight">
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

