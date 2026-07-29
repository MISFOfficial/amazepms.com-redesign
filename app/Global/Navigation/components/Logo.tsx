"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Logo: React.FC = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 focus:outline-none transition-opacity hover:opacity-90 shrink-0"
    >
      <Image
        src="/logo.png"
        alt="Amaze PMS Logo"
        width={180}
        height={50}
        className="h-10 sm:h-15 w-auto object-contain"
        priority
      />
    </Link>
  );
};

export default Logo;
