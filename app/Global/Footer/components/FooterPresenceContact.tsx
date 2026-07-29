"use client";

import React from "react";
import { Globe2, MapPin, Phone, Mail } from "lucide-react";

export const FooterPresenceContact: React.FC = () => {
  return (
    <div className="lg:col-span-4 space-y-4">
      <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-200 pb-1 border-b border-slate-800">
        Presence & Contact
      </h4>

      {/* States Grid */}
      <div>
        <span className="text-[11px] text-slate-400 font-mono block mb-1.5">
          OUR PRESENCE:
        </span>
        <div className="flex flex-wrap gap-1.5">
          {[
            "Telangana",
            "Andhra Pradesh",
            "Karnataka",
            "Tamilnadu",
            "Odisha",
          ].map((st) => (
            <span
              key={st}
              className="px-2 py-1 bg-slate-900 border border-slate-800 text-slate-300 text-[11px] font-medium flex items-center gap-1"
            >
              <Globe2 className="w-3 h-3 text-blue-400" />
              {st}
            </span>
          ))}
        </div>
      </div>

      {/* Address & Phone Card */}
      <div className="space-y-2 pt-1 text-xs text-slate-400">
        <div className="flex items-start gap-2.5">
          <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
          <span className="leading-relaxed">
            4th floor, High Mark Chambers, Khajaguda X road, Cyberabad,
            Hyderabad-500008
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
          <a
            href="tel:9100694137"
            className="hover:text-white font-mono transition-colors"
          >
            9100694137
          </a>
        </div>

        <div className="flex items-center gap-2.5">
          <Mail className="w-4 h-4 text-blue-400 shrink-0" />
          <a
            href="mailto:info@amazepms.com"
            className="hover:text-white transition-colors"
          >
            info@amazepms.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterPresenceContact;
