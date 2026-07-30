import React from "react";
import HeroSection from "./Components/HeroSection/HeroSection";
import StrengthGrid from "./Components/StrengthGrid/StrengthGrid";
import CallBanner from "../Components/CallBanner/CallBanner";

export const metadata = {
  title: "Our Strength | Amaze PMS",
  description:
    "Explore Amaze PMS core strengths: 20M+ Sq.Ft area managed, 100% in-house workforce, EHS compliance audits, and comprehensive staff welfare.",
};

function page() {
  return (
    <div>
      {/* 1. Page Banner Hero */}
      <HeroSection />

      {/* 2. 12 Core Strengths Grid */}
      <StrengthGrid />

      {/* 3. Contact Banner CTA */}
      <CallBanner />
    </div>
  );
}

export default page;
