import React from "react";
import GalleryGrid from "./Components/GalleryGrid/GalleryGrid";
import CallBanner from "../Components/CallBanner/CallBanner";
import PropertyPattern from "@/app/Global/Patterns/PropertyPattern";

export const metadata = {
  title: "Gallery | Amaze PMS Workforce & Operations",
  description:
    "Explore operational photo gallery of Amaze PMS uniform security forces, technical teams, NSDC classroom training, and on-site deep cleaning.",
};

function page() {
  return (
    <div className="relative">
      <PropertyPattern />

      {/* 2. Interactive Media Photo Gallery Grid & Lightbox */}
      <GalleryGrid />

      {/* 3. Contact Banner CTA */}
      <CallBanner />
    </div>
  );
}

export default page;
