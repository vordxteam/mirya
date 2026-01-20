import AddOnServices from "@/app/components/HireExpert/AddOnServices";
import BecomeExpert from "@/app/components/HireExpert/BecomeExpert";
import HeroSection from "@/app/components/HireExpert/HeroSection";
import HowToUse from "@/app/components/HireExpert/HowToUse";
import MiryaExperts from "@/app/components/HireExpert/MiryaExperts";
import Services from "@/app/components/HireExpert/Services";
import WhenToHire from "@/app/components/HireExpert/WhenToHire";
import React from "react";

export default function HireExpertPage() {
  return (
    <div>
      <HeroSection />
      <MiryaExperts />
      <BecomeExpert />
      <WhenToHire />
      <HowToUse />
      <Services />
      <AddOnServices />
    </div>
  );
}
