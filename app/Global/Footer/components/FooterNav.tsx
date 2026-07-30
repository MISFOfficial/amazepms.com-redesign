"use client";

import React from "react";
import Link from "next/link";

interface NavColumnProps {
  title: string;
  items: { name: string; href: string }[];
}

export const FooterNavColumn: React.FC<NavColumnProps> = ({ title, items }) => {
  return (
    <div className="lg:col-span-2 space-y-3">
      <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--white)] pb-1 border-b border-[var(--white)]/15">
        {title}
      </h4>
      <ul className="space-y-2 text-xs">
        {items.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="text-[var(--white)]/70 hover:text-[var(--secondary)] transition-colors block py-0.5 font-medium"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNavColumn;

