"use client";

import React from "react";
import { Phone, Clock, Mail } from "lucide-react";
import { EmergencyContact } from "../Nav";

export const TopInfoBar: React.FC = () => {
  return (
    <div className="bg-(--primary) text-slate-300 text-xs py-2  hidden lg:block ">
      <div className="ratio flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-(--white) font-semibold tracking-wide">
              24/7 Emergency Service Center
            </span>
          </div>

          <div className="flex items-center gap-1.5 ">
            <Clock className="w-3.5 h-3.5 text-(--secondary)" />
            <span className="text-(--white)">Mon - Sat: 8:00 AM - 8:00 PM</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          <a
            href={`tel:${EmergencyContact.phone}`}
            className="flex items-center gap-1.5 hover:text-(--white) transition-colors font-medium text-(--white)"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-(--white)">
              Hotline: {EmergencyContact.displayPhone}
            </span>
          </a>

          <a
            href={`mailto:${EmergencyContact.email}`}
            className="flex items-center gap-1.5 hover:text-(--white) transition-colors "
          >
            <Mail className="w-3.5 h-3.5 text-(--white)" />
            <span className="text-(--white)">{EmergencyContact.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopInfoBar;
