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
        return <ShieldCheck className="w-6 h-6 text-cyan-400" />;
      case "housekeeping":
        return <Home className="w-6 h-6 text-cyan-400" />;
      case "technical":
        return <Wrench className="w-6 h-6 text-cyan-400" />;
      case "pest":
        return <Bug className="w-6 h-6 text-cyan-400" />;
      case "helpdesk":
        return <Headphones className="w-6 h-6 text-cyan-400" />;
      case "gardening":
        return <Sprout className="w-6 h-6 text-cyan-400" />;
      case "pool":
        return <Waves className="w-6 h-6 text-cyan-400" />;
      case "clubhouse":
        return <Building className="w-6 h-6 text-cyan-400" />;
      case "facade":
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
      case "tenant":
        return <Users className="w-6 h-6 text-cyan-400" />;
      case "homerepairs":
        return <Search className="w-6 h-6 text-cyan-400" />;
      case "events":
        return <PartyPopper className="w-6 h-6 text-cyan-400" />;
      case "officestaff":
        return <UserCheck className="w-6 h-6 text-cyan-400" />;
      case "payroll":
        return <CreditCard className="w-6 h-6 text-cyan-400" />;
      case "repairmaint":
        return <Cog className="w-6 h-6 text-cyan-400" />;
      case "homecleaning":
        return <Paintbrush className="w-6 h-6 text-cyan-400" />;
      case "maid":
        return <Sparkle className="w-6 h-6 text-cyan-400" />;
      case "parking":
        return <Car className="w-6 h-6 text-cyan-400" />;
      case "revenue":
        return <TrendingUp className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <div className="property-service-card group relative bg-[#071330] rounded-2xl p-5 sm:p-6 border border-blue-900/40 shadow-xl hover:border-cyan-500/50 hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between h-full">
      {/* Background Radial Glow */}
      <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-blue-600/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500 pointer-events-none" />

      <div>
        {/* Top Header: Badge + Number */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-blue-950/90 border border-cyan-500/30">
            {item.category}
          </span>
          <span className="text-xs font-mono font-bold text-slate-500">
            {item.number}/19
          </span>
        </div>

        {/* Icon & Title */}
        <div className="flex items-center gap-3.5 mb-2">
          <div className="w-11 h-11 rounded-xl bg-blue-950/80 border border-cyan-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300 shadow-inner">
            {renderIcon()}
          </div>

          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors leading-snug">
            {item.title}
          </h3>
        </div>
      </div>

      {/* Footer Arrow & Accent Line */}
      <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between">
        <span className="text-[11px] font-mono text-slate-400 group-hover:text-slate-200 transition-colors">
          Full Operational Support
        </span>
        <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
      </div>
    </div>
  );
};

export default ServiceCard;
