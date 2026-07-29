"use client";

import React, { useState, useEffect } from "react";
import TopInfoBar from "./components/TopInfoBar";
import Logo from "./components/Logo";
import NavLinks from "./components/NavLinks";
import SearchBar from "./components/SearchBar";
import HamburgerButton from "./components/HamburgerButton";
import SideDrawer from "./components/SideDrawer";
import { Sparkles, PhoneCall } from "lucide-react";
import Link from "next/link";
import { EmergencyContact } from "./Nav";

export function Navigation() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Utility Helpline Strip */}
      <TopInfoBar onOpenQuote={() => setIsDrawerOpen(true)} />

      {/* Main Glassmorphic Header */}
      <div
        className={`bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300 ${
          isScrolled ? "shadow-md shadow-slate-900/5 py-3" : "py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Logo />

          {/* Center Navigation Links (Desktop) */}

          {/* Right Side: Search, CTA and Drawer Toggle */}
          <div className="flex items-center gap-3">
            {/* Search Bar */}
            <SearchBar onSearchSelect={() => setIsDrawerOpen(false)} />

            {/* Quick Consultation CTA */}
            <Link
              href="/contact"
              className="hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-blue-500/20"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get Service Quote</span>
            </Link>

            {/* Emergency Call Icon (Mobile) */}
            <a
              href={`tel:${EmergencyContact.phone}`}
              className="sm:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200"
              aria-label="Call Emergency Helpline"
            >
              <PhoneCall className="w-4 h-4" />
            </a>

            {/* Hamburger Button */}
            <HamburgerButton
              isOpen={isDrawerOpen}
              onToggle={() => setIsDrawerOpen((prev) => !prev)}
            />
          </div>
        </div>
      </div>

      {/* Smooth Side Drawer */}
      <SideDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </header>
  );
}

export default Navigation;
