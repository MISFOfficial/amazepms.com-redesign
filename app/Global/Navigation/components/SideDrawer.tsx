"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail, ArrowUpRight } from "lucide-react";
import { Nav, NavItem, EmergencyContact } from "../Nav";

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SideDrawer: React.FC<SideDrawerProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const [drawerSearch] = useState("");

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
            className="fixed inset-0 bg-[var(--black)]/40 z-50 cursor-pointer "
          />

          {/* Flat Side Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[var(--white)] border-l border-[var(--primary)]/20 z-50 flex flex-col justify-between overflow-hidden "
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-[var(--primary)]/15 flex items-center justify-between bg-[var(--primary)]/5 primary-rounded">
              <div className="flex flex-col">
                <span className="text-xs font-mono font-bold tracking-widest text-[var(--primary)] uppercase">
                  MENU NAVIGATION
                </span>
                <span className="text-[10px] font-semibold text-[var(--secondary)]">
                  AMAZE PROPERTY MANAGEMENT
                </span>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 bg-[var(--primary)] text-[var(--white)] hover:bg-[var(--secondary)] flex items-center justify-center transition-colors cursor-pointer primary-rounded border border-[var(--primary)]/20"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Main Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
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
                      className={`flex items-center justify-between p-3 transition-colors primary-rounded ${
                        isActive
                          ? "bg-[var(--primary)] text-[var(--white)] font-bold"
                          : "bg-[var(--white)] text-[var(--black)]/85 hover:bg-[var(--primary)]/5 font-semibold"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm uppercase tracking-wide">
                          {item.title}
                        </span>
                        {item.badge && (
                          <span
                            className={`text-[9px] font-extrabold px-1.5 py-0.5 uppercase primary-rounded border ${
                              isActive
                                ? "bg-[var(--secondary)] text-[var(--white)] border-[var(--secondary)]"
                                : "bg-[var(--primary)]/10 text-[var(--primary)] border-[var(--primary)]/20"
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <ArrowUpRight
                        className={`w-4 h-4 ${
                          isActive
                            ? "text-[var(--white)]"
                            : "text-[var(--black)]/40"
                        }`}
                      />
                    </Link>
                  );
                })}
              </nav>

              {/* Flat Contact Card */}
              <div className="p-4 bg-[var(--primary)] text-[var(--white)] border border-[var(--primary)]/20 primary-rounded space-y-2">
                <span className="text-[11px] font-mono font-bold text-[var(--secondary)] uppercase tracking-wider block">
                  24/7 Service Support
                </span>
                <div className="space-y-1 text-xs text-[var(--white)]/90 font-medium">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[var(--secondary)]" />
                    <span>{EmergencyContact.displayPhone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[var(--secondary)]" />
                    <span>{EmergencyContact.email}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Drawer Footer CTA */}
            <div className="p-4 border-t border-[var(--primary)]/15 bg-[var(--primary)]/5 flex flex-col gap-2 primary-rounded">
              <Link
                href="/contact"
                onClick={onClose}
                className="w-full py-2.5 px-4 bg-[var(--primary)] hover:bg-[var(--secondary)] text-[var(--white)] text-xs font-bold uppercase tracking-wider text-center transition-colors primary-rounded border border-[var(--primary)]/20"
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
