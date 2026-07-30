import React from "react";
import HeroSection from "./Components/HeroSection/HeroSection";
import ContactDetails from "./Components/ContactDetails/ContactDetails";
import GoogleMapSection from "./Components/GoogleMapSection/GoogleMapSection";
import CallBanner from "../Components/CallBanner/CallBanner";

export const metadata = {
  title: "Contact Us | Amaze PMS - Property Management Solutions",
  description:
    "Get in touch with Amaze PMS. Office Address: 4th floor, High Mark Chambers, Khajaguda X road, Cyberabad, Hyderabad-500008. Phone: 9100694137, Email: info@amazepms.com.",
};

function page() {
  return (
    <div>
      {/* 1. Page Banner Hero */}
      <HeroSection />

      {/* 2. Services List, Corporate Address & Contact Form */}
      <ContactDetails />

      {/* 3. Interactive Google Map Location */}
      <GoogleMapSection />

      {/* 4. Contact Banner CTA */}
      <CallBanner />
    </div>
  );
}

export default page;
