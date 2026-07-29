"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Handshake } from "lucide-react";

export function Partners() {
  const partnerLogos = [
    { id: 1, src: "/Partners/client1.jpg", alt: "Client Partner 1" },
    { id: 2, src: "/Partners/client2.png", alt: "Client Partner 2" },
    { id: 3, src: "/Partners/client5.png", alt: "Client Partner 5" },
    { id: 4, src: "/Partners/client6.png", alt: "Client Partner 6" },
    { id: 5, src: "/Partners/client7.jpg", alt: "Client Partner 7" },
    { id: 6, src: "/Partners/client8.png", alt: "Client Partner 8" },
    { id: 7, src: "/Partners/client9.png", alt: "Client Partner 9" },
    { id: 8, src: "/Partners/client10.png", alt: "Client Partner 10" },
    { id: 9, src: "/Partners/client11.png", alt: "Client Partner 11" },
    { id: 10, src: "/Partners/client12.png", alt: "Client Partner 12" },
    { id: 11, src: "/Partners/client13.png", alt: "Client Partner 13" },
    { id: 12, src: "/Partners/client14.png", alt: "Client Partner 14" },
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="ratio text-center space-y-3 mb-8">
        {/* Badge */}

        <h2 className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
          Trusted by 200+ valued partners around the India
        </h2>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative py-2 bg-slate-50/50 border-y border-slate-100">
        {/* Left & Right Subtle Fade Overlays */}
        <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <Marquee
          speed={45}
          pauseOnHover={true}
          gradient={false}
          className="py-3"
        >
          {partnerLogos.map((logo) => (
            <div
              key={logo.id}
              className="mx-4 sm:mx-6 px-6 py-3 bg-white border border-slate-200/80 rounded-lg flex items-center justify-center h-20 w-44 sm:w-52 shadow-xs hover:shadow-md hover:border-blue-400 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative w-full h-12 flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default Partners;
