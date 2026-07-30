import React from "react";
import HeroSection from "./Components/HeroSection/HeroSection";
import GalleryGrid from "./Components/GalleryGrid/GalleryGrid";
import CallBanner from "../Components/CallBanner/CallBanner";

export const metadata = {
  title: "Gallery | Amaze PMS Workforce & Operations",
  description:
    "Explore operational photo gallery of Amaze PMS uniform security forces, technical teams, NSDC classroom training, and on-site deep cleaning.",
};

function page() {
  return (
    <div>
      {/* 1. Page Banner Hero */}
      <HeroSection />

      {/* 2. Interactive Media Photo Gallery Grid & Lightbox */}
      <GalleryGrid />

      {/* 3. Contact Banner CTA */}
      <CallBanner />
    </div>
  );
}

export default page;
