import React from "react";

import ContactDetails from "./Components/ContactDetails/ContactDetails";
import CallBanner from "../Components/CallBanner/CallBanner";
import PropertyPattern from "@/app/Global/Patterns/PropertyPattern";

export const metadata = {
  title: "Contact Us | Amaze PMS - Property Management Solutions",
  description:
    "Get in touch with Amaze PMS. Office Address: 4th floor, High Mark Chambers, Khajaguda X road, Cyberabad, Hyderabad-500008. Phone: 9100694137, Email: info@amazepms.com.",
};

function page() {
  return (
    <div className="relative">
      <PropertyPattern />
      {/* 2. Services List, Corporate Address, Contact Form & Google Map */}
      <ContactDetails />

      {/* 3. Contact Banner CTA */}
      <CallBanner />
    </div>
  );
}

export default page;
