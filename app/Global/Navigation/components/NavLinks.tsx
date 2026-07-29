"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { Nav, NavItem } from "../Nav";

export const NavLinks: React.FC = () => {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="hidden lg:flex items-center gap-1.5">
      {Nav.map((item: NavItem) => {
        const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
        const hasSubItems = item.subItems && item.subItems.length > 0;

        return (
          <div
            key={item.title}
            className="relative group"
            onMouseEnter={() => hasSubItems && setActiveDropdown(item.title)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href={item.href}
              className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-xl transition-all ${
                isActive
                  ? "text-blue-600 font-semibold bg-blue-50/80"
                  : "text-slate-700 hover:text-blue-600 hover:bg-slate-100/70"
              }`}
            >
              <span>{item.title}</span>

              {item.badge && (
                <span className="ml-1 text-[10px] font-bold px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded-full border border-amber-200">
                  {item.badge}
                </span>
              )}

              {hasSubItems && (
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:rotate-180" />
              )}
            </Link>

            {/* Dropdown Menu */}
            {hasSubItems && activeDropdown === item.title && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-xl border border-slate-200/90 p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="px-3 py-1.5 mb-1 border-b border-slate-100">
                  <span className="text-[11px] font-semibold uppercase text-slate-400 tracking-wider">
                    {item.description || "Services"}
                  </span>
                </div>
                {item.subItems?.map((sub, idx) => (
                  <Link
                    key={idx}
                    href={sub.href}
                    className="flex flex-col px-3 py-2 rounded-xl hover:bg-blue-50/80 transition-colors group/sub"
                  >
                    <span className="text-xs font-semibold text-slate-800 group-hover/sub:text-blue-600">
                      {sub.title}
                    </span>
                    {sub.description && (
                      <span className="text-[11px] text-slate-500 line-clamp-1">{sub.description}</span>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default NavLinks;
