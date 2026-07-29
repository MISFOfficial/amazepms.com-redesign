import React from "react";
import HeroSections from "./Components/HeroSection/HeroSections";
import Partners from "./Components/Partners/Partners";
import About from "./Components/About/About";
import Why from "./Components/Why/Why";

function page() {
  return (
    <div>
      <HeroSections />
      <Partners />
      <About />
      <Why />
    </div>
  );
}

export default page;
