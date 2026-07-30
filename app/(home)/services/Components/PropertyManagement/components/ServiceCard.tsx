"use client";

import React from "react";
import {
  ShieldCheck,
  Home,
  Wrench,
  Bug,
  Headphones,
  Sprout,
  Waves,
  Building,
  Sparkles,
  Users,
  Search,
  PartyPopper,
  UserCheck,
  CreditCard,
  Cog,
  Sparkle,
  Car,
  TrendingUp,
  Paintbrush,
  ArrowUpRight,
} from "lucide-react";
import { PropertyServiceItem } from "./Content";

interface ServiceCardProps {
  item: PropertyServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ item }) => {
  const renderIcon = () => {
    switch (item.iconType) {
      case "security":
        return <ShieldCheck className="w-6 h-6 text-[var(--secondary)]" />;
      case "housekeeping":
        return <Home className="w-6 h-6 text-[var(--secondary)]" />;
      case "technical":
        return <Wrench className="w-6 h-6 text-[var(--secondary)]" />;
      case "pest":
        return <Bug className="w-6 h-6 text-[var(--secondary)]" />;
      case "helpdesk":
        return <Headphones className="w-6 h-6 text-[var(--secondary)]" />;
      case "gardening":
        return <Sprout className="w-6 h-6 text-[var(--secondary)]" />;
      case "pool":
        return <Waves className="w-6 h-6 text-[var(--secondary)]" />;
      case "clubhouse":
        return <Building className="w-6 h-6 text-[var(--secondary)]" />;
      case "facade":
        return <Sparkles className="w-6 h-6 text-[var(--secondary)]" />;
      case "tenant":
        return <Users className="w-6 h-6 text-[var(--secondary)]" />;
      case "homerepairs":
        return <Search className="w-6 h-6 text-[var(--secondary)]" />;
      case "events":
        return <PartyPopper className="w-6 h-6 text-[var(--secondary)]" />;
      case "officestaff":
        return <UserCheck className="w-6 h-6 text-[var(--secondary)]" />;
      case "payroll":
        return <CreditCard className="w-6 h-6 text-[var(--secondary)]" />;
      case "repairmaint":
        return <Cog className="w-6 h-6 text-[var(--secondary)]" />;
      case "homecleaning":
        return <Paintbrush className="w-6 h-6 text-[var(--secondary)]" />;
      case "maid":
        return <Sparkle className="w-6 h-6 text-[var(--secondary)]" />;
      case "parking":
        return <Car className="w-6 h-6 text-[var(--secondary)]" />;
      case "revenue":
        return <TrendingUp className="w-6 h-6 text-[var(--secondary)]" />;
    }
  };

  return (
    <div className="property-service-card group relative bg-[var(--white)] rounded-2xl p-5 sm:p-6 border border-[var(--primary)]/20 shadow-xl hover:border-[var(--secondary)] hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between h-full text-[var(--black)]">
      <div>
        {/* Top Header: Badge + Number */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[10px] font-mono font-bold text-[var(--primary)] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20">
            {item.category}
          </span>
          <span className="text-xs font-mono font-bold text-[var(--black)]/50">
            {item.number}/19
          </span>
        </div>

        {/* Icon & Title */}
        <div className="flex items-center gap-3.5 mb-2">
          <div className="w-11 h-11 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-300 shadow-inner">
            {renderIcon()}
          </div>

          <h3 className="text-base sm:text-lg font-bold text-[var(--primary)] tracking-tight group-hover:text-[var(--secondary)] transition-colors leading-snug">
            {item.title}
          </h3>
        </div>
      </div>

      {/* Footer Arrow & Accent Line */}
      <div className="pt-3 mt-3 border-t border-[var(--primary)]/15 flex items-center justify-between">
        <span className="text-[11px] font-mono text-[var(--black)]/70 transition-colors font-medium">
          Full Operational Support
        </span>
        <ArrowUpRight className="w-4 h-4 text-[var(--primary)] group-hover:text-[var(--secondary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
      </div>
    </div>
  );
};

export default ServiceCard;

