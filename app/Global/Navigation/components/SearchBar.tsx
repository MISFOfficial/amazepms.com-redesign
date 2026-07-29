"use client";

import React, { useState, useRef, useEffect } from "react";
import { Search, X, Sparkles, ArrowRight, Wrench } from "lucide-react";
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
      className="relative hidden md:block w-48 xl:w-64 transition-all duration-300"
    >
      <div
        className={`flex items-center gap-2 bg-slate-100/90 border ${
          isFocused
            ? "border-blue-500 bg-white ring-4 ring-blue-500/10 shadow-sm w-72 -ml-8"
            : "border-slate-200/90 hover:border-slate-300"
        } rounded-xl px-3.5 py-2 transition-all duration-200`}
      >
        <Search
          className={`w-4 h-4 shrink-0 ${isFocused ? "text-blue-600" : "text-slate-400"}`}
        />

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder="Search services..."
          className="w-full bg-transparent text-xs text-slate-800 placeholder-slate-400 focus:outline-none font-medium"
        />

        {query ? (
          <button
            onClick={() => setQuery("")}
            className="text-slate-400 hover:text-slate-600 p-0.5 rounded-full hover:bg-slate-200 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        ) : (
          <span className="text-[10px] font-semibold text-slate-400 bg-slate-200/70 border border-slate-300/60 px-1.5 py-0.5 rounded">
            ⌘K
          </span>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
