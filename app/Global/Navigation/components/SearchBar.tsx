"use client";

import React, { useState, useRef, useEffect } from "react";
import { Search, X, Sparkles, ArrowRight, Wrench } from "lucide-react";
import { ServiceCategories, Nav } from "../Nav";
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
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCategories = ServiceCategories.filter(
    (cat) =>
      cat.name.toLowerCase().includes(query.toLowerCase()) ||
      cat.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredNav = Nav.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div ref={containerRef} className="relative hidden md:block w-48 xl:w-64 transition-all duration-300">
      <div
        className={`flex items-center gap-2 bg-slate-100/90 border ${
          isFocused
            ? "border-blue-500 bg-white ring-4 ring-blue-500/10 shadow-sm w-72 -ml-8"
            : "border-slate-200/90 hover:border-slate-300"
        } rounded-xl px-3.5 py-2 transition-all duration-200`}
      >
        <Search className={`w-4 h-4 shrink-0 ${isFocused ? "text-blue-600" : "text-slate-400"}`} />

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

      {/* Autocomplete Dropdown Overlay */}
      {isFocused && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150 min-w-[280px]">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              {query ? `Matching Results` : "Property Services"}
            </span>
          </div>

          <div className="space-y-1 max-h-60 overflow-y-auto custom-scrollbar">
            {filteredCategories.map((cat) => (
              <Link
                key={cat.id}
                href={`/services#${cat.id}`}
                onClick={() => {
                  setIsFocused(false);
                  onSearchSelect?.();
                }}
                className="flex items-center justify-between p-2 rounded-xl hover:bg-blue-50/80 transition-colors text-xs font-medium text-slate-800 group"
              >
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-blue-100 text-blue-600 rounded-lg">
                    <Wrench className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 group-hover:text-blue-600">{cat.name}</p>
                    <p className="text-[10px] text-slate-400">{cat.count}</p>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
              </Link>
            ))}

            {filteredNav.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => {
                  setIsFocused(false);
                  onSearchSelect?.();
                }}
                className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-100 transition-colors text-xs font-medium text-slate-700"
              >
                <span>{item.title}</span>
                <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
