'use client'
import GradientButton from "@/app/ui/GradientButton";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";


export default function WhenToHire() {
    const { t } = useTranslation("hire");
  
  const hiringPoints =  t("whenHire.points", { returnObjects: true }) as string[]

  return (
    <div className="pt-15 px-3 sm:px-20 max-w-[1440px] mx-auto relative z-10 bg-[#00031C] overflow-hidden pb-15">
     <div 
  className="rounded-[20px] transition-all"
  style={{
    /* First gradient: Card background color */
    /* Second gradient: Your border color shades */
    backgroundImage: `linear-gradient(#00031c, #00031c), linear-gradient(90deg, #463BBF 0%, #7169D1 50%, #9C96E3 100%)`,
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
    border: "1px solid transparent",
  }}
>
  {/* We removed the p-[1px] and the inner bg color to prevent edge-clipping */}
  <div className="flex flex-col py-8 pl-8 lg:pr-[96px] lg:flex-row justify-between items-center">
    <div className="space-y-16 gap-16 md:gap-0 justify-between">
      <div className="space-y-3">
        <h1 className="heading-1 text-[#FFFFFF] font-medium">
          {t("whenHire.title")}
        </h1>
        <p className="heading-6 font-normal leading-5">
           {t("whenHire.disc")} : 
        </p>
      </div>
      <div>
        {hiringPoints.map((point, index) => (
          <div key={index} className="flex items-center gap-3 mb-3 py-3">
            <Image
              src="/images/check-circle.png"
              width={24}
              height={24}
              alt="check"
            />
            <p className="heading-6 font-normal leading-5">{point}</p>
          </div>
        ))}
      </div>
    </div>
    <Image
      src="/images/hireExp1.png"
      alt="When to hire?"
      height={300}
      width={300}
      className="rounded-1"
    />
  </div>
</div>
      <div
        style={{
          borderRadius: "12px",
          background: `
                linear-gradient(#050925, #050925) padding-box,
                linear-gradient(to bottom, #4D4D4D, #FFFFFF, #4D4D4D) border-box
              `,
          border: "1px solid transparent",
        }}
        className="w-full py-6 b container mx-auto px-3 sm:px-8 flex gap-3 sm:gap-0 flex-col lg:flex-row overflow-hidden items-center justify-between relative mt-6 "
      >
        <div className="absolute top-6 left-45 z-0">
          <div className="rounded-[68.75px] bg-[#5935E999] blur-[50px] w-[181px] h-[71px]"></div>
        </div>

        <div className="hidden sm:block absolute right-16 bottom-0">
          <div className="absolute -bottom-11 z-0 -right-4">
            <div className="rounded-[68.75px] bg-[#5935E9] blur-[50px] w-[181px] h-[71px] "></div>
          </div>
        </div>

        <div className="heading-5 font-regular text-[#F4F7FF] relative z-10 max-w-[653px] text-left space-y-3">
          <p className="heading-3 font-semibold text-[#F4F7FF]">
             {t("miniCard.title")}
          </p>
          <p className="heading-6 font-normal text-[#CAC9D1]">
           {t("miniCard.disc")}
          </p>
        </div>

        <div
          className="relative z-20 self-start sm:self-center"
          style={{ pointerEvents: "auto" }}
        >
          <GradientButton
            label={t("miniCard.btnTxt")}
            href="/all-experts"
            bgColor="#0274FE"
            textColor="#fff"
          />
        </div>
      </div>
    </div>
  );
}
