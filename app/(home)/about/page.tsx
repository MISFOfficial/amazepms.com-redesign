import React from "react";
import HeroSections from "./Components/HeroSections/HeroSections";
import About from "../Components/About/About";
import Mission from "./Components/Mission/Mission";
import Segments from "../Components/Segments/Segments";

function page() {
  return (
    <div>
      <HeroSections />
      <About />
      <Mission />
      <Segments />
    </div>
  );
}

export default page;
