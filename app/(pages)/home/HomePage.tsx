"use client";
import Demo from "@/app/components/Home/Demo";
import HeroSection from "@/app/components/Home/HeroSection";
import Features from "@/app/components/Home/Features";
import React from "react";
import HowToUse from "@/app/components/Home/HowToUse";
import Faq from "@/app/components/Home/Faq";
import Benefits from "@/app/components/Home/Benefits";
import Indicator from "@/app/components/Home/Indicator";
import Plans from "@/app/components/Home/Plans";
import BuildForYou from "@/app/components/Home/BuildForYou";
import Testimonials from "@/app/components/Home/Testimonials";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Demo />
      <HowToUse />
      <Features />
      <BuildForYou/>
      <Benefits />
      <Testimonials/>
      {/* <Indicator/> */}
      {/* <Plans/> */}
      {/* <Faq /> */}
    </div>
  );
};

export default HomePage;
