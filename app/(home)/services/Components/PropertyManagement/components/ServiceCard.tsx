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
} from "lucide-react";
import { PropertyServiceItem } from "./Content";

interface ServiceCardProps {
  item: PropertyServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ item }) => {
  const renderIcon = () => {
    switch (item.iconType) {
      case "security":
        return <ShieldCheck className="w-8 h-8 text-red-600" />;
      case "housekeeping":
        return <Home className="w-8 h-8 text-emerald-600" />;
      case "technical":
        return <Wrench className="w-8 h-8 text-blue-600" />;
      case "pest":
        return <Bug className="w-8 h-8 text-red-500" />;
      case "helpdesk":
        return <Headphones className="w-8 h-8 text-amber-600" />;
      case "gardening":
        return <Sprout className="w-8 h-8 text-emerald-500" />;
      case "pool":
        return <Waves className="w-8 h-8 text-cyan-600" />;
      case "clubhouse":
        return <Building className="w-8 h-8 text-indigo-600" />;
      case "facade":
        return <Sparkles className="w-8 h-8 text-blue-500" />;
      case "tenant":
        return <Users className="w-8 h-8 text-sky-600" />;
      case "homerepairs":
        return <Search className="w-8 h-8 text-red-500" />;
      case "events":
        return <PartyPopper className="w-8 h-8 text-amber-500" />;
      case "officestaff":
        return <UserCheck className="w-8 h-8 text-indigo-500" />;
      case "payroll":
        return <CreditCard className="w-8 h-8 text-teal-600" />;
      case "repairmaint":
        return <Cog className="w-8 h-8 text-blue-600" />;
      case "homecleaning":
        return <Paintbrush className="w-8 h-8 text-emerald-600" />;
      case "maid":
        return <Sparkle className="w-8 h-8 text-cyan-500" />;
      case "parking":
        return <Car className="w-8 h-8 text-blue-600" />;
      case "revenue":
        return <TrendingUp className="w-8 h-8 text-cyan-500" />;
    }
  };

  return (
    <div className="group relative bg-white rounded-xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full text-center">
      {/* Top Icon Area matching Screenshot */}
      <div className="p-6 bg-gradient-to-b from-white to-slate-50 flex items-center justify-center flex-1 min-h-[110px]">
        <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {renderIcon()}
        </div>
      </div>

      {/* Bottom Dark Navy Bar matching Screenshot */}
      <div className="bg-[#051336] p-3 border-t border-blue-900/40">
        <h4 className="text-xs sm:text-sm font-semibold text-white tracking-tight group-hover:text-cyan-300 transition-colors line-clamp-2">
          {item.title}
        </h4>
      </div>
    </div>
  );
};

export default ServiceCard;
