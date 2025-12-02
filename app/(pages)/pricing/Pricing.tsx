import ChoosePlan from "@/app/components/Pricing/ChoosePlan";
import Comparison from "@/app/components/Pricing/Comparison";
import HeroSection from "@/app/components/Pricing/HeroSection";
import Recommended from "@/app/components/Pricing/RecommendedServices";
import Services from "@/app/components/Pricing/Services";
import React from "react";

export default function Pricing() {
  return (
    <>
      <HeroSection />
      <ChoosePlan />
      <Services/>
      <Recommended/>
      <Comparison />
    </>
  );
}
