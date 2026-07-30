"use client";

import React from "react";
import { Globe2, MapPin, Phone, Mail } from "lucide-react";

export const FooterPresenceContact: React.FC = () => {
  return (
    <div className="lg:col-span-4 space-y-4">
      <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--white)] pb-1 border-b border-[var(--white)]/15">
        Presence & Contact
      </h4>

      {/* States Grid */}
      <div>
        <span className="text-[11px] text-[var(--white)]/70 font-mono block mb-1.5 font-bold">
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
              className="px-2 py-1 bg-[var(--white)]/10 border border-[var(--white)]/20 text-[var(--white)] text-[11px] font-medium flex items-center gap-1 primary-rounded"
            >
              <Globe2 className="w-3 h-3 text-[var(--secondary)]" />
              {st}
            </span>
          ))}
        </div>
      </div>

      {/* Address & Phone Card */}
      <div className="space-y-2 pt-1 text-xs text-[var(--white)]/80">
        <div className="flex items-start gap-2.5">
          <MapPin className="w-4 h-4 text-[var(--secondary)] shrink-0 mt-0.5" />
          <span className="leading-relaxed">
            4th floor, High Mark Chambers, Khajaguda X road, Cyberabad,
            Hyderabad-500008
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <Phone className="w-4 h-4 text-[var(--secondary)] shrink-0" />
          <a
            href="tel:9100694137"
            className="hover:text-[var(--secondary)] font-mono transition-colors"
          >
            9100694137
          </a>
        </div>

        <div className="flex items-center gap-2.5">
          <Mail className="w-4 h-4 text-[var(--secondary)] shrink-0" />
          <a
            href="mailto:info@amazepms.com"
            className="hover:text-[var(--secondary)] transition-colors"
          >
            info@amazepms.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterPresenceContact;

