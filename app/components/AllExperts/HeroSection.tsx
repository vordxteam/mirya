"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
// import Cards from "./Cards";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation("job");

  return (
    <div className="space-y-12 px-3 sm:px-20 max-w-[1440px] mx-auto">
      <div className="flex z-100 bg-[#00031c] flex-col items-center justify-center sm:pb-15 pt-10 px-2 md:px-10 relative">
        <div className="absolute top-0 pointer-events-none z-0">
          <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
        </div>
        <div className="pb-3 flex items-center gap-5">
          <Image src="/images/blur5.png" width={16} height={16} alt="line" />
          <Link href="/hire-expert" className="flex gap-1 items-center z-10">
            <Image
              src="/images/left-blue.svg"
              alt="Go back"
              height={24}
              width={24}
            />
            <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal leading-5 text-center">
              Go Back
            </h1>
          </Link>
          <Image src="/images/blur5.png" width={16} height={16} alt="line" />
        </div>
        <h1 className="heading-1 font-medium  w-full text-center pb-3 sm:pb-6">
        Hire an MIRYA Expert
        </h1>
        <p className="text-[#CAC9D1] text-[14px] font-normal leading-5 pb-5 sm:pb-10 text-center max-w-[515px]">
          Connect with MIRYA-certified experts who design, implement, and scale intelligent automation tailored to your workflows.
        </p>
      <div className="mt-6 sm:w-[371px] rounded-full p-[1px] bg-gradient-to-r from-[#38385D] via-[#686DDD] to-[#38385D] relative">
  <input
    type="text"
    placeholder="Search by Name or Service"
    className="
      w-full
      rounded-full
      bg-[#020817]
      py-3
      pr-3
      pl-12
      text-white
      heading-7
      placeholder:text-[#FFFFFF]
      outline-none
    "
  />
  <Image src="/images/search.svg" alt="Search" width={20} height={20} className="absolute left-4 top-1/2 transform -translate-y-1/2" />
</div>

      </div>
     
    </div>
  );
};

export default HeroSection;
