import React from "react";
import HeroSection from "./Components/HeroSection/HeroSection";
import ClientsDistribution from "./Components/ClientsDistribution/ClientsDistribution";
import ClientLogos from "./Components/ClientLogos/ClientLogos";
import CallBanner from "../Components/CallBanner/CallBanner";

export const metadata = {
  title: "Our Clients | Amaze PMS",
  description:
    "Explore 100+ prestigious clients of Amaze PMS across Commercial IT Parks, Residential Communities, Retail Malls, Healthcare, and Logistics.",
};

function page() {
  return (
    <div>
      {/* 1. Page Banner Hero */}
      <HeroSection />

      {/* 2. Category-wise Client Directory & Sector Pie Chart */}
      <ClientsDistribution />

      {/* 3. Trusted Client Logos Showcase */}
      <ClientLogos />

      {/* 4. Contact Banner CTA */}
      <CallBanner />
    </div>
  );
}

export default page;