import Image from "next/image";
import React from "react";
import TestimonialSlider from "./TestimonialSlider";
import { useTranslation } from "react-i18next";
export default function Testimonials() {
  const { t } = useTranslation("live-session");
  return (
    <>
      <div className="flex justify-center z-100">
        <div className="bg-linear-to-r from-[#00031C] via-[#8EA0E0] to-[#00031C] w-[50%] flex text-center h-px"></div>
      </div>

      <div className="flex justify-center relative">
        <div className="absolute top-0 z-[-10]">
          <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
        </div>
        <div className="flex flex-col items-center pt-[60px]">
          <div className="pb-3 flex items-center justify-center gap-5">
            <Image src="/images/label2.svg" width={78} height={16} alt="line" />
            <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal">
              {t("testimonialsSection.badge")}{" "}
            </h1>
            <Image src="/images/label.svg" width={78} height={16} alt="line" />
          </div>

          {/* Main Heading */}
          <h1 className="text-[26px] px-2.5 sm:px-0 text-center sm:text-[40px] md:text-[48px] font-medium leading-tight tracking-[-1.44px] max-w-[668px] pb-3 sm:pb-6">
            {t("testimonialsSection.mainTitle")}{" "}
          </h1>

          {/* Subtitle */}
          <p className="text-[#CAC9D1] text-center text-[14px] leading-6 max-w-[510px] pb-8 sm:pb-3">
            {t("testimonialsSection.description")}
          </p>

            <TestimonialSlider />
        </div>
      </div>
    </>
  );
}
