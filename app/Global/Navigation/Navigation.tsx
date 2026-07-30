"use client";

import React, { useState } from "react";
import TopInfoBar from "./components/TopInfoBar";
import Logo from "./components/Logo";
import NavLinks from "./components/NavLinks";
import SearchBar from "./components/SearchBar";
import HamburgerButton from "./components/HamburgerButton";
import SideDrawer from "./components/SideDrawer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Navigation() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full ">
      {/* Top Helpline Utility Bar */}
      <TopInfoBar />

      {/* Main Flat Light Navigation Bar */}
      <div className="bg-[var(--white)] border-b border-[var(--primary)]/10 py-3 ">
        <div className="ratio flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Logo />

          {/* Search, CTA & Hamburger Drawer Toggle */}
          <div className="flex items-center gap-2.5">
            {/* Search Bar */}
            <SearchBar onSearchSelect={() => setIsDrawerOpen(false)} />

            {/* Flat Action Pill/Box Button */}
            <Link
              href="/contact"
              className="hidden xl:flex items-center gap-1 text-[var(--secondary)] border border-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-[var(--white)] text-xs font-bold uppercase tracking-wider px-3.5 py-2 transition-colors primary-rounded"
            >
              <span>Get Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Square Hamburger Menu Button */}
            <HamburgerButton
              isOpen={isDrawerOpen}
              onToggle={() => setIsDrawerOpen((prev) => !prev)}
            />
          </div>
        </div>
      </div>

      {/* Side Drawer */}
      <SideDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </header>
  );
}

export default Navigation;
