import React from "react";
import HeroSection from "./Components/HeroSection/HeroSection";
import RecruitmentStrategy from "./Components/RecruitmentStrategy/RecruitmentStrategy";
import SkillDevelopment from "./Components/SkillDevelopment/SkillDevelopment";
import AuditsSection from "./Components/AuditsSection/AuditsSection";
import FunctionalApproach from "./Components/FunctionalApproach/FunctionalApproach";
import CallBanner from "../Components/CallBanner/CallBanner";

export const metadata = {
  title: "Recruitments & Training | Amaze PMS",
  description:
    "Explore Amaze PMS Recruitment Strategy, NSDC Affiliated Skill Development, Audits Framework, and 4-Stage Functional Approach.",
};

function page() {
  return (
    <div>
      {/* 1. Page Banner Hero */}
      <HeroSection />

      {/* 2. Recruitment Strategy */}
      <RecruitmentStrategy />

      {/* 3. Skill Development */}
      <SkillDevelopment />

      {/* 4. Audits Section */}
      <AuditsSection />

      {/* 5. Functional Approach 4-Stage Timeline */}
      <FunctionalApproach />

      {/* 6. Contact Banner CTA */}
      <CallBanner />
    </div>
  );
}

export default page;
