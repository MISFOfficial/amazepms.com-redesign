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
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all primary-rounded border ${
              isActive
                ? "bg-[var(--primary)] text-[var(--white)] border-[var(--primary)]"
                : "text-[var(--black)]/80 hover:text-[var(--primary)] hover:bg-[var(--primary)]/10 border-transparent hover:border-[var(--primary)]/20"
            }`}
          >
            <span>{item.title}</span>

            {item.badge && (
              <span className="text-[9px] font-extrabold px-1.5 py-0.5 bg-[var(--secondary)] text-[var(--white)] uppercase primary-rounded">
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
