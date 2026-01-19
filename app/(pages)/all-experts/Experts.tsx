import Experts from "@/app/components/AllExperts/Experts";
import HeroSection from "@/app/components/AllExperts/HeroSection";
import React, { Suspense } from "react";

interface AllExpertsProps {
  searchParams?: {
    search?: string;
  };
}

export default function AllExperts({ searchParams }: AllExpertsProps) {
  const searchQuery = searchParams?.search || '';
  
  return(
    <div>
      <HeroSection initialSearch={searchQuery} />
      <Suspense fallback={<div>Loading experts...</div>}>
        <Experts searchQuery={searchQuery} />
      </Suspense>
    </div>
  )
}