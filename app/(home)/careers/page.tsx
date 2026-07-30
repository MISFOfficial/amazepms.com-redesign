import React from "react";
import HeroSection from "./Components/HeroSection/HeroSection";
import OpeningsList from "./Components/OpeningsList/OpeningsList";
import CallBanner from "../Components/CallBanner/CallBanner";

export const metadata = {
  title: "Careers | Work With Us - Amaze PMS",
  description:
    "Explore 14 active job openings at Amaze PMS. Apply for Facility Manager, Operations Manager, Technical Officers, Security Officers, and Skilled Technicians.",
};

function page() {
  return (
    <div>
      {/* 1. Page Banner Hero */}
      <HeroSection />

      {/* 2. Work With Us Header & 14 Current Openings */}
      <OpeningsList />

      {/* 3. Contact Banner CTA */}
      <CallBanner />
    </div>
  );
}

export default page;
