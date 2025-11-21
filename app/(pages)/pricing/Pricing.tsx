import ChoosePlan from "@/app/components/Pricing/ChoosePlan";
import Comparison from "@/app/components/Pricing/Comparison";
import HeroSection from "@/app/components/Pricing/HeroSection";
import React from "react";

export default function Pricing() {
  return (
    <>
      <HeroSection />
      <ChoosePlan />
      <Comparison />
    </>
  );
}
