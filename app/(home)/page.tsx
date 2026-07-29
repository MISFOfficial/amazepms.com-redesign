import React from "react";
import HeroSections from "./Components/HeroSection/HeroSections";
import Partners from "./Components/Partners/Partners";
import About from "./Components/About/About";

function page() {
  return (
    <div>
      <HeroSections />
      <Partners />
      <About />
    </div>
  );
}

export default page;
