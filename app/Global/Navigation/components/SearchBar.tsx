"use client";

import React, { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Nav } from "../Nav";
import Link from "next/link";

interface SearchBarProps {
  onSearchSelect?: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearchSelect }) => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredNav = Nav.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div
      ref={containerRef}
      className="relative hidden md:block w-48 xl:w-56 primary-rounded shadow-none"
    >
      <div
        className={`flex items-center gap-2 bg-(--white) border ${
          isFocused
            ? "border-slate-900 ring-1 ring-slate-900"
            : "border-slate-300 hover:border-slate-400"
        } primary-rounded px-3 py-1.5 transition-all shadow-none`}
      >
        <Search className="w-3.5 h-3.5 text-slate-500 shrink-0" />

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder="Search..."
          className="w-full bg-transparent text-xs text-(--black) placeholder-slate-400 focus:outline-none font-medium primary-rounded"
        />

        {query ? (
          <button
            onClick={() => setQuery("")}
            className="text-slate-400 hover:text-slate-600 p-0.5 primary-rounded"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        ) : (
          <span className="text-[10px] font-mono text-slate-400 bg-slate-100 border border-slate-200 px-1 py-0.5 primary-rounded">
            /
          </span>
        )}
      </div>

      {/* Autocomplete Dropdown */}
      {isFocused && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-(--white) border border-slate-300 p-2 z-50 primary-rounded shadow-none">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 px-2 font-mono">
            Navigation Matches
          </div>
          <div className="space-y-0.5 max-h-48 overflow-y-auto custom-scrollbar">
            {filteredNav.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => {
                  setIsFocused(false);
                  onSearchSelect?.();
                }}
                className="block px-2 py-1.5 text-xs font-semibold text-(--black) hover:bg-(--black) hover:text-(--white) primary-rounded transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
