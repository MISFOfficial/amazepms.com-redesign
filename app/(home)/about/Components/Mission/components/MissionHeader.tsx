"use client";

import React from "react";
import { Compass } from "lucide-react";

export const MissionHeader: React.FC = () => {
  return (
    <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold rounded-full shadow-xs">
        <Compass className="w-3.5 h-3.5 text-blue-600" />
        <span>CORE FOUNDATION</span>
      </div>

      {/* Main Title matching Screenshot 1 verbatim */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
        Mission <span className="text-blue-600 font-light">|</span> Vision{" "}
        <span className="text-blue-600 font-light">|</span> Values
      </h2>
    </div>
  );
};

export default MissionHeader;
