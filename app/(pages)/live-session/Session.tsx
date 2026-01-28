"use client"
import HeroSection from "@/app/components/LiveSession/HeroSection";
import React from "react";
import CTA from "@/app/Layout/CTA";
import AboutSession from "@/app/components/LiveSession/AboutSession";
import SessionsSection from "@/app/components/LiveSession/SessionsSection";
import Testimonials from "@/app/components/LiveSession/Testimonials";
export default function Features() {
  return (
    <div>
      <HeroSection />
      <AboutSession />
      <SessionsSection />
      <Testimonials />
      <div className="pt-[72px]">
      </div>
    </div>
  );
}
