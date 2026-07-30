import React from "react";
import HeroSection from "./Components/HeroSection/HeroSection";
import PropertyManagement from "./Components/PropertyManagement/PropertyManagement";
import ServicePartners from "./Components/ServicePartners/ServicePartners";
import CallBanner from "../Components/CallBanner/CallBanner";

export const metadata = {
  title: "Our Services | Amaze PMS - Property and Asset Management",
  description:
    "Explore 19 core Property and Asset Management services by Amaze PMS and our official service partners.",
};

function page() {
  return (
    <div>
      {/* 1. Hero Section matching Banner Screenshot */}
      <HeroSection />

      {/* 2. Property and Asset Management (19 Services Grid) */}
      <PropertyManagement />

      {/* 3. Our Service Partners (3 Partners Cards) */}
      <ServicePartners />

      {/* 4. Contact CTA Banner */}
      <CallBanner />
    </div>
  );
}

export default page;