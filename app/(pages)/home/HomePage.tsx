import About from "@/app/components/Home/About";
import HeroSection from "@/app/components/Home/HeroSection";
import HowToUse from "@/app/components/Home/HowToUse";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <HowToUse />
    </div>
  );
};

export default HomePage;
