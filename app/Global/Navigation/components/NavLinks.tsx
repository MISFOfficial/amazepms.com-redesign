"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nav, NavItem } from "../Nav";

export const NavLinks: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-1">
      {Nav.map((item: NavItem) => {
        const isActive =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(item.href));

        return (
          <Link
            key={item.title}
            href={item.href}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all primary-rounded  border ${
              isActive
                ? "bg-(--black) text-(--white) border-slate-900"
                : "text-slate-700 hover:text-slate-900 hover:bg-slate-100 border-transparent hover:border-slate-300"
            }`}
          >
            <span>{item.title}</span>

            {item.badge && (
              <span className="text-[9px] font-extrabold px-1 py-0.2 bg-amber-400 text-slate-950 uppercase primary-rounded border border-amber-500">
                {item.badge}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLinks;
