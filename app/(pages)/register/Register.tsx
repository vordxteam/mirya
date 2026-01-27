"use client"
import HeroSection from "@/app/components/Register/HeroSection";
import React from "react";
import CTA from "@/app/Layout/CTA";

export default function Features() {
  return (
    <div>
      <HeroSection />
    
      <div className="pt-[72px]">
        <CTA />
      </div>
    </div>
  );
}
