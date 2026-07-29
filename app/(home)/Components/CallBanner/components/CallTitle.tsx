"use client";

import React from "react";

export const CallTitle: React.FC = () => {
  return (
    <div className="flex items-center gap-6">
      {/* Vertical Divider Bar */}
      <div className="hidden md:block w-[2px] h-10 bg-white/20" />

      {/* Main Title Text */}
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
        Call Us For Our Services
      </h3>
    </div>
  );
};

export default CallTitle;
