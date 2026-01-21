"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import GradientButton from "@/app/ui/GradientButton";
import { useTranslation } from "react-i18next";

// Define an interface for better type safety (Optional but recommended)
interface Reason {
  id: string;
  title: string;
  description: string;
}

export default function WhyMirya() {
  const { t } = useTranslation("careers");

  // FIX: Cast the return value to the expected array type
  const reasons = (t("whyMirya.reasons", { returnObjects: true }) ||
    []) as Reason[];

  return (
    <div className=" px-3 sm:px-20 max-w-[1440px] mx-auto relative z-10 bg-[#00031C]">
      <div className="flex justify-center relative">
        <div className="bg-linear-to-r from-[#00031C] via-[#8EA0E0] to-[#00031C] w-[50%] flex text-center h-[0.8px]"></div>
      </div>
      <div className="flex z-100 bg-[#00031C] flex-col items-center justify-center pt-15 px-2 md:px-10 relative">
        <div className="absolute top-0 pointer-events-none z-0">
          <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
        </div>
        <div className="pb-3 flex items-center gap-5">
          <Image src="/images/label2.svg" width={78} height={16} alt="line" />
          <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal leading-5 text-center">
            {t("whyMirya.badge")}
          </h1>
          <Image src="/images/label.svg" width={78} height={16} alt="line" />
        </div>
        <h1 className="heading-1 font-medium w-full text-center pb-3 sm:pb-6">
          {t("whyMirya.title")}
        </h1>
        <p className="text-[#CAC9D1] text-[14px] font-normal leading-5 pb-5 sm:pb-10 text-center max-w-[547px]">
          {t("whyMirya.description")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <GradientButton
            label={t("whyMirya.cta")}
            href="#"
            bgColor="#0274FE"
            textColor="#fff"
          />
        </div>
      </div>

      <div className="pt-5 sm:pt-16 pb-10 sm:pb-15 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* reasons is now guaranteed to be an array */}
        {Array.isArray(reasons) &&
          reasons.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundImage: `
      linear-gradient(#00031C, #00031C), 
      linear-gradient(280deg, #00031C 16.47%, #686DDD 48.87%, #00031C 78.17%)
    `,
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                border: "1.5px solid transparent",
              }}
              className="p-px"
            >
              <div className="p-6 space-y-3 bg-[#050A29] h-full relative rounded-xl">
                <p className="heading-4 font-medium text-[#F4F7FF99]">
                  {item.id}
                </p>
                <div className="space-y-2">
                  <h3 className="heading-3 font-medium text-[#F4F7FF]">
                    {item.title}
                  </h3>
                  <p className="heading-6 font-normal text-[#F4F7FF99]">
                    {item.description}
                  </p>
                </div>
                <Image
                  src="/images/card-gradient.png"
                  alt="gradient"
                  width={181}
                  height={94}
                  className="absolute right-0 bottom-0"
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
