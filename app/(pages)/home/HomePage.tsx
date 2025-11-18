"use client";
import Demo from "@/app/components/Home/Demo";
import HeroSection from "@/app/components/Home/HeroSection";
import Features from "@/app/components/Home/Features";
import React from "react";
import HowToUse from "@/app/components/Home/HowToUse";
import Benefits from "@/app/components/Home/Benefits";

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <Demo/>
      <HowToUse/>
      <Features/>
      <Benefits/>
    </div>
  );
};

export default HomePage;
