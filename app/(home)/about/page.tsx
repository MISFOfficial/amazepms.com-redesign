import React from "react";
import HeroSections from "./Components/HeroSections/HeroSections";
import About from "../Components/About/About";
import Mission from "./Components/Mission/Mission";

function page() {
  return (
    <div>
      <HeroSections />
      <About />
      <Mission />
    </div>
  );
}

export default page;
