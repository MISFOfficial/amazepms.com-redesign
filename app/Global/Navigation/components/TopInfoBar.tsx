"use client";

import React from "react";
import { Phone, Clock, Mail } from "lucide-react";
import { EmergencyContact } from "../Nav";

export const TopInfoBar: React.FC = () => {
  return (
    <div className="bg-(--black) text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden lg:block primary-rounded shadow-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-emerald-500 primary-rounded"></span>
            <span className="text-emerald-400 font-semibold tracking-wide">
              24/7 Emergency Service Center
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-blue-400" />
            <span>Mon - Sat: 8:00 AM - 8:00 PM</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          <a
            href={`tel:${EmergencyContact.phone}`}
            className="flex items-center gap-1.5 hover:text-blue-400 transition-colors font-medium text-slate-200"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>Hotline: {EmergencyContact.displayPhone}</span>
          </a>

          <a
            href={`mailto:${EmergencyContact.email}`}
            className="flex items-center gap-1.5 hover:text-blue-400 transition-colors text-slate-400"
          >
            <Mail className="w-3.5 h-3.5 text-blue-400" />
            <span>{EmergencyContact.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopInfoBar;
