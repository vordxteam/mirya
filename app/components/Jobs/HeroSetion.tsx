"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
// import Cards from "./Cards";

const HeroSection = () => {
  return (
    <div className="space-y-12 px-3 sm:px-20 max-w-[1440px] mx-auto">
      <div className="flex z-100 bg-[#00031c] flex-col items-center justify-center sm:pb-[48px] pt-10 px-2 md:px-10 relative">
        <div className="absolute top-0">
          <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
        </div>
        <div className="pb-3 flex items-center gap-5">
          <Image src="/images/left-line.png" width={73} height={8} alt="line" />
          <Link href='/careers' className="flex gap-1 items-center z-10">
            <Image src='/images/left-blue.svg' alt="Go back" height={24} width={24} />
          <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal leading-5 text-center">
            Go Back
          </h1>
          </Link>
          <Image
            src="/images/right-line.png"
            width={73}
            height={8}
            alt="line"
          />
        </div>
        <h1 className="heading-1 font-medium  w-full text-center pb-3 sm:pb-6">
         Senior Software Engineer-Full Time
        </h1>
        <p className="text-[#CAC9D1] text-[14px] font-normal leading-5 pb-5 sm:pb-10 text-center max-w-[580px]">
Join MIRYA as a Senior Software Engineer and help build a scalable, intelligent automation platform.
        </p>

     
      </div>
      <div className="p-px  mx-auto rounded-[16px]" style={{
                     background:
                       "linear-gradient(90deg, #4542E0 0.33%, #14122C 53.7%, #4542E0 100%)",
                   }}>
           <div className="flex flex-col lg:flex-row items-center justify-between gap-4 px-8 py-6 overflow-hidden bg-[#00031C] rounded-[16px] relative">
             <div className="lg:space-y-12 w-full">
                <div>
             <p className="heading-3 font-medium text-[#F4F7FF]">Employment Details</p>
             </div>
             <div className="flex justify-center">
  <div className="pt-12 flex flex-col lg:flex-row gap-5 lg:gap-0  w-full justify-between">

    {/* Location */}
    <div className="space-y-3 pl-3 xl:pl-[97px] min-w-[100px]">
      <p className="heading-3 font-normal text-[#FFFFFF99]">Location:</p>
      <p className="heading-3 font-normal text-[#FFFFFF]">On-site</p>
    </div>

    {/* Divider */}
    <div className="h-[76px] w-px bg-linear-to-b hidden lg:block from-[#463BBF] via-[#9C96E3] to-[#463BBF]"></div>

    {/* Job Type */}
    <div className="space-y-3 px-3 min-w-[100px]">
      <p className="heading-3 font-normal text-[#FFFFFF99]">Job Type</p>
      <p className="heading-3 font-normal text-[#FFFFFF]">Full-Time</p>
    </div>

    {/* Divider */}
    <div className="h-[76px] w-px bg-linear-to-b hidden lg:block from-[#463BBF] via-[#9C96E3] to-[#463BBF]"></div>

    {/* Department */}
    <div className="space-y-3 px-3 min-w-[100px]">
      <p className="heading-3 font-normal text-[#FFFFFF99]">Department</p>
      <p className="heading-3 font-normal text-[#FFFFFF]">Engineering</p>
    </div>

    {/* Divider */}
    <div className="h-[76px] w-px bg-linear-to-b hidden lg:block from-[#463BBF] via-[#9C96E3] to-[#463BBF]"></div>

    {/* Deadline */}
    <div className="space-y-3 px-3 min-w-[100px]">
      <p className="heading-3 font-normal text-[#FFFFFF99]">Application Deadline</p>
      <p className="heading-3 font-normal text-[#FFFFFF]">N/A</p>
    </div>

  </div>
</div>

             </div>
              <div className="absolute top-0 left-0">
                 <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[71px]"></div>
               </div>
                <div className="absolute bottom-0 right-0">
                 <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[71px]"></div>
               </div>
           </div>
           </div>
    </div>
  );
};

export default HeroSection;
