"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Search,
  Wrench,
  ShieldCheck,
  Building2,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Nav, NavItem, EmergencyContact, ServiceCategories } from "../Nav";

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SideDrawer: React.FC<SideDrawerProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const [drawerSearch, setDrawerSearch] = useState("");
  const [expandedNav, setExpandedNav] = useState<string | null>("Services");

  const filteredNav = Nav.filter((item) =>
    item.title.toLowerCase().includes(drawerSearch.toLowerCase()) ||
    (item.description && item.description.toLowerCase().includes(drawerSearch.toLowerCase()))
  );

  const toggleExpand = (title: string) => {
    setExpandedNav((prev) => (prev === title ? null : title));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs z-50 cursor-pointer"
          />

          {/* Right Side Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col justify-between overflow-hidden border-l border-slate-200"
          >
            {/* Header */}
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base leading-tight">AMAZE PMSPL</h3>
                  <p className="text-[11px] text-slate-500 font-medium">Property Management Service Center</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-5 space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={drawerSearch}
                  onChange={(e) => setDrawerSearch(e.target.value)}
                  placeholder="Search pages & services..."
                  className="w-full bg-slate-100 focus:bg-white text-sm text-slate-800 placeholder-slate-400 border border-slate-200 focus:border-blue-500 rounded-xl pl-10 pr-4 py-2.5 outline-none transition-all"
                />
              </div>

              {/* Navigation Items from Nav.ts */}
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Navigation Menu
                  </span>
                  <span className="text-[10px] text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded-full">
                    {Nav.length} Pages
                  </span>
                </div>

                <div className="space-y-1">
                  {filteredNav.map((item: NavItem) => {
                    const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                    const hasSubItems = item.subItems && item.subItems.length > 0;
                    const isExpanded = expandedNav === item.title;

                    return (
                      <div key={item.title} className="rounded-xl overflow-hidden">
                        <div
                          className={`flex items-center justify-between px-3.5 py-3 rounded-xl transition-all ${
                            isActive
                              ? "bg-blue-600 text-white font-semibold shadow-sm"
                              : "text-slate-800 hover:bg-slate-100/90"
                          }`}
                        >
                          <Link
                            href={item.href}
                            onClick={onClose}
                            className="flex-1 flex items-center justify-between mr-2"
                          >
                            <span className="text-sm font-medium">{item.title}</span>

                            {item.badge && (
                              <span
                                className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                  isActive ? "bg-white/20 text-white" : "bg-amber-100 text-amber-800 border border-amber-200"
                                }`}
                              >
                                {item.badge}
                              </span>
                            )}
                          </Link>

                          {hasSubItems && (
                            <button
                              onClick={() => toggleExpand(item.title)}
                              className={`p-1 rounded-md transition-all ${
                                isActive ? "text-white/80 hover:bg-white/20" : "text-slate-400 hover:bg-slate-200"
                              }`}
                            >
                              <ChevronDown
                                className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                              />
                            </button>
                          )}
                        </div>

                        {/* Accordion Sub-items */}
                        {hasSubItems && isExpanded && (
                          <div className="ml-4 pl-3 my-1 border-l-2 border-blue-200 space-y-1">
                            {item.subItems?.map((sub, sIdx) => (
                              <Link
                                key={sIdx}
                                href={sub.href}
                                onClick={onClose}
                                className="block p-2 rounded-lg text-xs font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                              >
                                <div className="flex items-center justify-between">
                                  <span>{sub.title}</span>
                                  <ArrowRight className="w-3 h-3 text-slate-300" />
                                </div>
                                {sub.description && (
                                  <p className="text-[10px] text-slate-400 font-normal mt-0.5">
                                    {sub.description}
                                  </p>
                                )}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Property Services Hub */}
              <div className="pt-2 border-t border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                  Property Services Quick Hub
                </span>

                <div className="grid grid-cols-2 gap-2">
                  {ServiceCategories.slice(0, 4).map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/services#${cat.id}`}
                      onClick={onClose}
                      className="p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200/70 transition-all text-left group"
                    >
                      <span className="text-xs font-semibold text-slate-800 group-hover:text-blue-600 block truncate">
                        {cat.name}
                      </span>
                      <span className="text-[10px] text-slate-500 block mt-0.5">{cat.count}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Support Card */}
              <div className="p-4 rounded-2xl bg-slate-900 text-white shadow-lg space-y-2.5">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>24/7 Verified Support Center</span>
                </div>

                <div className="space-y-1.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-blue-400" />
                    <span>{EmergencyContact.displayPhone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-blue-400" />
                    <span>{EmergencyContact.email}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer CTAs */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 flex flex-col gap-2">
              <Link
                href="/contact"
                onClick={onClose}
                className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold text-center shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get Service Consultation</span>
              </Link>
              
              <a
                href={`tel:${EmergencyContact.phone}`}
                className="w-full py-2 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-xl text-xs font-semibold text-center transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Hotline Immediately</span>
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default SideDrawer;
