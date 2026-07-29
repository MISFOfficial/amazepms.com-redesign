import React from "react";
import HeroSections from "./Components/HeroSection/HeroSections";
import Partners from "./Components/Partners/Partners";
import About from "./Components/About/About";
import Why from "./Components/Why/Why";
import CallBanner from "./Components/CallBanner/CallBanner";

function page() {
  return (
    <div>
      <HeroSections />
      <Partners />
      <About />
      <Why />
      <CallBanner />
    </div>
  );
}

export default page;
