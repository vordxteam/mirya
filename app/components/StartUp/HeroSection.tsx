"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GradientButton from "@/app/ui/GradientButton";

const HeroSection = () => {

  const cardData = {
    title: "Start-Up Plan",
    description:
      "Built for early-stage teams that want to automate smarter, and scale faster.",
    price: "€399",
    period: " /per month",
    btnColor: "#00031C",
    btnText: "Get Started",
    msgTitle : "All the essentials to automate",
    msgDiscription : "The Startup Plan includes everything you need to eliminate manual work, unlock productivity, and automate your first end-to-end processes with MIRYA.",
    img: "/images/plan1.png",
  };


  const dashVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
  };    

  const pointerVariants: Variants = {
    hidden: { opacity: 0, x: 100, y: 100 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <div className=" px-3 max-w-[1440px] mx-auto sm:px-10 md:px-20 lg:px-[150px] pb-[21px] flex flex-col lg:flex-row justify-between pt-[57px]">
      <div className="flex flex-col i pb-[75px] pt-10  px-2 md:px-10 bg-[url('/images/main-gradient.png')] bg-no-repeat bg-bottom bg-contain relative">
        <div className="absolute left-[40%] top-0">
          <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
        </div>
        <div className="pb-3 flex items-center gap-5">
          <Link href='/pricing' className="flex gap-3">
            <Image src='/images/left-blue.svg' alt='Back' height={24} width={24} />
          <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal leading-5 text-center">
            Back to Pricing
          </h1>
          </Link>
         
        </div>
        <h1 className="text-[30px] sm:text-[40px] md:text-[64px] font-medium leading-10 sm:leading-[50px] md:leading-[72px] tracking-[-1.44px] max-w-[972px] w-full  pb-3 sm:pb-6">
          Start-Up Plan
        </h1>
        <p className="text-[#CAC9D1] text-[14px] font-normal leading-5 pb-5 sm:pb-10 text-start max-w-[580px]">
          Fast-track your business with automated workflows that eliminate repetitive manual steps.Streamline processes, boost productivity, and unlock efficiency across departments.Grow sustainably without adding extra headcount or stretching your team.
        </p>
        <div className="flex items-center justify-center gap-3">
          <div
            className="rounded-full p-[0.8]"
            style={{
              background:
                "linear-gradient(180deg, #463BBF 0.29%, #9C96E3 68.1%, #463BBF 100%)",
            }}
          >
        
          </div>
        </div>

        <div className="relative flex items-center justify-end xl:w-[143%]">
          <motion.div
            variants={dashVariants}
            initial="hidden"
            animate="visible"
            className=" bottom-0"
          >
            <Image src="/images/dash.png" alt="dash" width={530} height={121} />
          </motion.div>

          <motion.div
            variants={pointerVariants}
            initial="hidden"
            animate="visible"
            className="bottom-0 left-[50%] xl:left-[70%] absolute"
          >
            <Image
              src="/images/gradient-pointer.png"
              alt="gradient pointer"
              width={40}
              height={42}
            />
          </motion.div>
        </div>
      </div>
      <div className="flex">
     <div className=" rounded-3xl p-px bg-[linear-gradient(180deg,#3F49D8_14.82%,#22223C_49.99%,#22223C_84.47%)]">

      <div className="max-w-sm bg-gradient-to-b from-[#05061D] via-[#0B0D2B] to-[#0D0C2E]  rounded-3xl px-8 pt-12 pb-11 relative">
      <Image
        src={cardData.img}
        alt={cardData.title}
        height={76}
        width={76}
        className="absolute -top-12 left-40"
      />

      <h3 className="text-2xl font-semibold text-white mb-3">
        {cardData.title}
      </h3>
      <p className="text-gray-300 mb-6">{cardData.description}</p>

      <div className="h-px bg-gradient-to-r from-[#1A1A3B] via-[#A68BEE] to-[#1A1A3B] mb-8"></div>

     

      <div className="flex items-end mb-8">
        <span className="text-4xl font-medium bg-gradient-to-r from-[#789EFF] via-[#3A38AA] to-[#3A38AA] text-transparent bg-clip-text">
          {cardData.price}
        </span>
        <span className="text-gray-500 ml-2">{cardData.period}</span>
      </div>
      <div className="mt-10 space-y-1 py-3 px-[17px] bg-[#FFFFFF1F] mb-10 rounded-xl">
        <p className="heading-5 font-normal text-white">All the essentials to automate</p>
        <p className="heading-7 font-normal text-[#FFFFFF99]">The Startup Plan includes everything you need to eliminate manual work, unlock productivity, and automate your first end-to-end processes with MIRYA.</p>
      </div>
        <div className="flex">
      <GradientButton
        bgColor={cardData.btnColor}
        label={cardData.btnText}
        textColor="white"
        href="#"
      />
      </div>
    </div>
    </div>
</div>
    </div>
  );
};

export default HeroSection;
