"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const AboutImages: React.FC = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none py-4">
      {/* Large Main Background Image (Modern Luxury Architecture / Action Group Shield) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-[280px] sm:h-[360px] lg:h-[400px] primary-rounded overflow-hidden  border border-slate-100 bg-slate-900 group"
      >
        <Image
          src="/About/about1.png"
          alt="Amaze Property Complex"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
      </motion.div>

      {/* Overlapping Bottom-Right Foreground Image (Interior Living / Team Photo) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute -bottom-6 sm:-bottom-8 right-2 sm:right-6 w-[55%] sm:w-[50%] h-[200px] sm:h-[260px] primary-rounded overflow-hidden  border-4 border-white bg-slate-800 z-10 group"
      >
        <Image
          src="/About/aboutimgmobile.png"
          alt="Amaze PMS Interior Suite"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </motion.div>
    </div>
  );
};

export default AboutImages;
