import Image from "next/image";
import React from "react";

const Benefits = () => {
  return (
    <div>
      <div className="max-w-[1440px] m-auto">
        <div className="px-5 sm:px-10 md:px-20 py-[60px] relative">
          <div className="flex items-center justify-center flex-col">
            <div className="absolute -top-20">
              <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
            </div>
            {/* Top Title Row */}
            <div className="pb-3 flex items-center justify-center gap-5">
              <Image
                src="/images/left-line.png"
                width={73}
                height={8}
                alt="line"
              />
              <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal text-center">
                FAQs
              </h1>
              <Image
                src="/images/right-line.png"
                width={73}
                height={8}
                alt="line"
              />
            </div>

            {/* Main Heading */}
            <h1 className="text-[30px] sm:text-[48px] font-medium leading-[38px] sm:leading-14 tracking-[-1.44px] max-w-[548px] text-center pb-3 sm:pb-6">
              Get answers to your questions in our FAQ's
            </h1>

            {/* Subheading */}
            <p className="text-[#CAC9D1] text-[14px] sm:text-[16px] font-normal leading-5 pb-5 sm:pb-10 text-center max-w-[510px]">
              Find quick answers to your questions below, or reach out to our
              support team for more help!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
