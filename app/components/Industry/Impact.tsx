import GradientButton from "@/app/ui/GradientButton";
import Image from "next/image";
import React from "react";

const Impact = () => {
  return (
    <div className="max-w-[1440px] m-auto px-5 md:px-20 py-[60px]">
      <div className="flex flex-col md:flex-row gap-10 items-start md:items-center justify-between">
        <div className="max-w-[670px] w-full">
          <div className="flex flex-col">
            <div className="flex items-center gap-5 pb-3">
              <Image
                src="/images/left-line.png"
                width={73}
                height={8}
                alt="line"
              />
              <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal leading-5 text-center">
                Impact
              </h1>
              <Image
                src="/images/right-line.png"
                width={73}
                height={8}
                alt="line"
              />
            </div>
            <h1 className="text-[30px] sm:text-[40px] md:text-[48px] pb-3 sm:pb-6 font-medium leading-10 sm:leading-14 tracking-[-1.44px] max-w-[500px] w-full text-start">
              Where MIRYA creates real impact
            </h1>
            <p className="text-[#CAC9D1] pb-3 sm:pb-6 text-[14px] font-normal leading-5 text-start max-w-[510px]">
              MIRYA brings intelligent, no-code automation to organizations that
              want to eliminate manual work, accelerate operations, and scale
              without increasing headcount. From data-heavy departments to
              service-driven industries MIRYA works everywhere.
            </p>
            <div className="w-fit">
              <GradientButton
                label="Get A Demo"
                href="/user-testing"
                bgColor="#00031C"
                textColor="#fff"
              />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="hidden sm:block absolute -z-10 -top-4 md:-right-[30px]">
            <div className="rounded-[68.75px] opacity-[0.5] bg-[#1D2759] blur-[43px] w-[538px] h-[653px]"></div>
          </div>
          <Image
            src="/images/impactcard.png"
            width={464}
            height={524}
            alt="impactcard"
          />
        </div>
      </div>
    </div>
  );
};

export default Impact;
