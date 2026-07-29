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
      <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-200 pb-1 border-b border-slate-800">
        {title}
      </h4>
      <ul className="space-y-2 text-xs">
        {items.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="text-slate-400 hover:text-white transition-colors block py-0.5 font-medium"
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
