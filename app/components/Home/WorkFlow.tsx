import GradientButton from "@/app/ui/GradientButton";
import Image from "next/image";
import React from "react";
import WorkFlowAnimation from "./HowtouseAnimations/WorkFlowAnimation";

const WorkFlow = () => {
  return (
    <div className="bg-[#00031C] relative z-10">
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-5 lg:items-center max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-10 sm:py-[60px] relative overflow-hidden">
        {/* Background blur */}
        <div className="absolute top-24 left-1/2 lg:left-[422px] -translate-x-1/2 lg:translate-x-0 -z-10">
          <div className="rounded-full opacity-[0.5] bg-[#1D2759] blur-[43px] w-[280px] sm:w-[445px] h-[340px] sm:h-[540px]"></div>
        </div>

        {/* Text content */}
        <div className="max-w-[490px] mx-auto lg:mx-0 text-center lg:text-left">
          <div className="pb-3 flex items-center justify-center lg:justify-start gap-3 sm:gap-5">
            <Image
              src="/images/left-line.png"
              width={73}
              height={8}
              alt="line"
              className="w-[50px] sm:w-[73px]"
            />
            <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal">
              MIRYA Workflow
            </h1>
            <Image
              src="/images/right-line.png"
              width={73}
              height={8}
              alt="line"
              className="w-[50px] sm:w-[73px]"
            />
          </div>

          {/* Main Heading */}
          <h1 className="heading-1 font-medium tracking-[-1.44px] pb-3 sm:pb-6">
            Build flows visually. No learning curve. No complexity
          </h1>

          {/* Subheading */}
          <p className="text-[#CAC9D1] heading-6 font-normal max-w-[510px] pb-3 sm:pb-6 mx-auto lg:mx-0">
            Drag, drop, and connect steps like messages, conditions, actions,
            and checks — all powered by an AI assistant that helps you build
            faster.
          </p>

          <div className="w-fit mx-auto lg:mx-0">
            <GradientButton label="Get A Demo" href="#" bgColor="#00031C" />
          </div>
        </div>

        {/* Animation */}
        <div className="w-full lg:w-auto hidden md:flex justify-center">
          <WorkFlowAnimation />
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;