"use client";

import React from "react";
import { MapPin, Navigation } from "lucide-react";

export function GoogleMapSection() {
  return (
    <section className="relative w-full bg-[var(--white)] border-b border-[var(--primary)]/10">
      {/* Location Badge Bar */}
      <div className="bg-[var(--primary)] py-4 px-6 border-b border-[var(--primary)]/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-[var(--white)]">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold">
          <MapPin className="w-4 h-4 text-[var(--secondary)] shrink-0" />
          <span>
            AMAZE Property Management Solutions Pvt. Ltd — High Mark Chambers,
            Khajaguda X road, Cyberabad, Hyderabad
          </span>
        </div>

        <a
          href="https://maps.app.goo.gl/qi4uNcUrMo5bRhGC6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--secondary)] text-[var(--white)] text-xs font-bold hover:bg-[var(--white)] hover:text-[var(--primary)] transition-colors "
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>Get Directions</span>
        </a>
      </div>

      {/* Embedded Google Map iframe matching User's exact embed link */}
      <div className="relative w-full h-[400px] sm:h-[480px]">
        <iframe
          title="AMAZE Property Management Solutions Pvt. Ltd Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4292375993423!2d78.3751566!3d17.439157899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e7400a98af%3A0xb86a441596737d73!2sAMAZE%20Property%20Management%20Solutions%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1785444728467!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </section>
  );
}

export default GoogleMapSection;
