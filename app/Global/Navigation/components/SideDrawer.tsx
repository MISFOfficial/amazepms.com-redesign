"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, Phone, Mail, ArrowUpRight } from "lucide-react";
import { Nav, NavItem, EmergencyContact } from "../Nav";

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SideDrawer: React.FC<SideDrawerProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const [drawerSearch, setDrawerSearch] = useState("");

  const filteredNav = Nav.filter(
    (item) =>
      item.title.toLowerCase().includes(drawerSearch.toLowerCase()) ||
      (item.description &&
        item.description.toLowerCase().includes(drawerSearch.toLowerCase())),
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Flat Dark Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/40 z-50 cursor-pointer primary-rounded shadow-none"
          />

          {/* Flat Side Drawer - NO ROUNDED, NO SHADOW */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-(--white) border-l border-slate-300 z-50 flex flex-col justify-between overflow-hidden primary-rounded shadow-none"
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50 primary-rounded shadow-none">
              <div className="flex flex-col">
                <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
                  MENU NAVIGATION
                </span>
                <span className="text-[10px] font-semibold text-slate-400">
                  AMAZE PROPERTY MANAGEMENT
                </span>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 bg-(--black) text-(--white) hover:bg-slate-800 flex items-center justify-center transition-colors cursor-pointer primary-rounded shadow-none border border-slate-900"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Main Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
              {/* In-drawer Search input */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={drawerSearch}
                  onChange={(e) => setDrawerSearch(e.target.value)}
                  placeholder="Search menu..."
                  className="w-full bg-(--white) text-sm text-(--black) placeholder-slate-400 border border-slate-300 focus:border-slate-900 primary-rounded pl-9 pr-4 py-2 outline-none font-medium transition-all shadow-none"
                />
              </div>

              {/* Nav.ts items list */}
              <nav className="space-y-1">
                {filteredNav.map((item: NavItem) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(item.href));

                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center justify-between p-3 transition-colors primary-rounded shadow-none ${
                        isActive
                          ? "bg-(--primary) text-(--white)  font-bold"
                          : "bg-(--white) text-(--black)   font-semibold"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm uppercase tracking-wide">
                          {item.title}
                        </span>
                        {item.badge && (
                          <span
                            className={`text-[9px] font-extrabold px-1.5 py-0.2 uppercase primary-rounded border ${
                              isActive
                                ? "bg-amber-400 text-slate-950 border-amber-500"
                                : "bg-blue-100 text-blue-800 border-blue-200"
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <ArrowUpRight
                        className={`w-4 h-4 ${
                          isActive ? "text-(--white)" : "text-slate-400"
                        }`}
                      />
                    </Link>
                  );
                })}
              </nav>

              {/* Flat Contact Card */}
              <div className="p-4 bg-(--black) text-(--white) border border-slate-800 primary-rounded shadow-none space-y-2">
                <span className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-wider block">
                  24/7 Service Support
                </span>
                <div className="space-y-1 text-xs text-slate-300 font-medium">
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

            {/* Drawer Footer CTA */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 flex flex-col gap-2 primary-rounded shadow-none">
              <Link
                href="/contact"
                onClick={onClose}
                className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-(--white) text-xs font-bold uppercase tracking-wider text-center transition-colors primary-rounded shadow-none border border-blue-600"
              >
                Request Service Quote
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default SideDrawer;
