import Benefits from "@/app/components/About/Benefits";
import Chooseus from "@/app/components/About/Chooseus";
import Demo from "@/app/components/About/Demo";
import Faq from "@/app/components/About/Faq";
import HeroSection from "@/app/components/About/HeroSection";
import MiryaDifferent from "@/app/components/About/MiryaDifferent";
import Stats from "@/app/components/About/Stats";
import Team from "@/app/components/About/Team";
import React from "react";

const About = () => {
  return (
    <div>
      <HeroSection />
      <Demo />
      <Benefits />
      <MiryaDifferent />
      {/* <Team /> */}
      <Chooseus />
      {/* <Stats />
      <Faq /> */}
    </div>
  );
};

export default About;
  