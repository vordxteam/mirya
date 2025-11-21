import Image from "next/image";
import React from "react";
import BuildForYouSlider from "./BuildForYouSlider";
import GradientButton from "@/app/ui/GradientButton";

export default function BuildForYou() {
  return (
    <div className="  z-100 bg-[url('/images/build-bg.png')] bg-no-repeat bg-cover mt-10 p-3 sm:p-[84px]">
      <div className="flex flex-col lg:flex-row justify-between items-center max-w-[1440px] mx-auto">
        <div>
          <div className="pb-3 flex items-center gap-5">
            <Image
              src="/images/left-line.png"
              width={73}
              height={8}
              alt="line"
            />
            <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal text-center">
              Build for you
            </h1>
            <Image
              src="/images/right-line.png"
              width={73}
              height={8}
              alt="line"
            />
          </div>

          {/* Main Heading */}
          <h1 className="heading-1 font-medium  tracking-[-1.44px] max-w-[430px] text-start pb-3 sm:pb-6">
            What we have built for you
          </h1>

          {/* Subheading */}
          <p className="text-[#CAC9D1] heading-6 font-normal text-start max-w-[510px] pb-3 sm:pb-6">
            Harnessing the power of artificial intelligence to revolutionise
            industries and enhance human experiences.
          </p>
          <div className="w-[172px]">
            <GradientButton label="Contact Us Now" href="#" bgColor="#00031C" />
          </div>
        </div>
        <BuildForYouSlider />
      </div>
    </div>
  );
}
