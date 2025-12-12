"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GradientButton from "@/app/ui/GradientButton";

const Decisions = () => {

    const cards = [
        {
            id : 1,
            title : "Visual Workflow Builder",
            disc : "Design automations with an intuitive drag-and-drop interface—no coding needed.",
        },
        {
            id : 2,
            title : "Multi-Platform Automation",
            disc : "Automate desktop, web, and cloud apps seamlessly in one unified tool.",
        },
        {
            id : 3,
            title : "Smart Recording",
            disc : "Create workflows automatically by simply recording your actions.",
        },
        {
            id : 4,
            title : "Autonomous Bots",
            disc : "Schedule and run bots independently to keep your processes moving 24/7.",
        },
        {
            id : 5,
            title : "Built-In AI Assistance",
            disc : "Let Mirya analyze data, read documents, detect patterns, and make decisions.",
        },
        {
            id : 6,
            title : "Secure Local Execution",
            disc : "Your data stays protected with local encryption and on-device processing.",
        },
        {
            id : 7,
            title : "Sub-Processes & Dynamic Variables",
            disc : "Build flexible, modular workflows that adapt to changing process data.",
        },
        {
            id : 8,
            title : "Analytics Dashboard",
            disc : "Monitor performance and identify automation opportunities in real time.",
        },
    ]

  return (
    <div className="overflow-hidden px-3 md:px-20 sm:pb-15">
      <div className="flex flex-col items-center justify-center  pt-15 relative">
        <div className="absolute top-0">
          <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
        </div>
        <div className="pb-3 flex items-center gap-5">
          <Image src="/images/label2.svg" width={78} height={16} alt="line" />
          <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal leading-5 text-center">
            AI-Powered Decisions
          </h1>
          <Image
            src="/images/label.svg"
            width={78}
            height={16}
            alt="line"
          />
        </div>
        <h1 className="heading-1 font-medium max-w-[972px] w-full text-center pb-3 sm:pb-6">
          What is included
        </h1>
        <p className="text-[#CAC9D1] text-[14px] font-normal leading-5  text-center max-w-[606px]">
          MIRYA’s automation intelligence works across your existing tools and
          systems, powering end-to-end flows.
        </p>
      </div>
        <div className="mt-[64px] px-0 sm:px-[47px]">
          
<div className="flex justify-center relative z-[-10]">
   <div className="absolute top-0">
          <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
        </div>
    <div className="flex flex-wrap justify-center gap-6 max-w-[1280px]">
        {
            cards.map((item) => (
                <div key={item.id} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-lg p-px bg-[linear-gradient(180deg,#3F49D8_14.82%,#22223C_49.99%,#22223C_84.47%)]">
                    <div className="bg-[#050A29] z-10 relative rounded-lg p-4 flex gap-5 items-center">
                        <Image src='/images/tick-bg.png' alt="Tick" height={56} width={56} />
                        <div className="space-y-1">
                            <p className="heading-5 font-medium text-[#FFFFFF]">{item.title}</p>
                            <p className="heading-7 font-light text-[#FFFFFFCC]">{item.disc}</p>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
</div>
        </div>
    </div>
  );
};

export default Decisions;
