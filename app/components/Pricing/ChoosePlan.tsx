"use client";
import GradientButton from "@/app/ui/GradientButton";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const ChoosePlan = () => {
  const { t } = useTranslation("pricing");

  return (
    <div className="max-w-[1440px] m-auto px-2 md:px-20">
      {/* SECTION 1 */}
      <div
       style={{
    /* First background: Your solid inner card color (adjust #00031c if needed) */
    /* Second background: Your specific border gradient */
    backgroundImage: `
      linear-gradient(#00031c, #00031c), 
      linear-gradient(180deg, #343754 0.33%, #AAB1EC 53.7%, #343754 100%)
    `,
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
    /* 1.5px ensures the border stays visible on high-DPI XL screens */
    border: "1.5px solid transparent", 
  }}
        className="p-px rounded-2xl relative overflow-hidden"
      >
        <div className="relative bg-[#00031C] px-8 py-6 flex flex-col lg:flex-row gap-5 lg:items-center justify-between rounded-2xl overflow-hidden">
          <div className="absolute top-7 left-40 pointer-events-none z-0">
            <div className="rounded-[68.75px] bg-[#5935E9] blur-[50px] w-[181px] h-[71px]"></div>
          </div>
          <div className="absolute bottom-0 right-10 pointer-events-none z-0">
            <div className="rounded-[68.75px] bg-[#5935E9] blur-[50px] w-[181px] h-[71px]"></div>
          </div>

          {/* Text Content - Added 'relative z-10' to stay ABOVE the lights */}
          <div className="relative z-10 space-y-3">
            <h1 className="text-[#F4F7FF] text-[24px] font-semibold leading-7">
              {t("choosePlan.banner.title")}
            </h1>
            <p className="max-w-[709px] text-[#CAC9D1] text-[14px] font-normal leading-5">
              {t("choosePlan.banner.description")}
            </p>
          </div>

          {/* Button - Added 'relative z-10' to stay ABOVE the lights */}
          <div className="relative z-10 w-fit flex items-end justify-end">
            <GradientButton
              label={t("choosePlan.banner.button")}
              href="#"
              bgColor="#0274FE"
              textColor="#fff"
            />
          </div>
        </div>
      </div>

      {/* SECTION 2 (Existing Layout preserved) */}
      <div className="mt-12 pb-[60px] overflow-hidden bg-[#00031c] relative z-10 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="text-[#F4F7FF] text-[40px] font-medium leading-12 max-w-[506px] w-full capitalize">
            {t("choosePlan.cta.title")}
          </h1>
        </div>

        <div></div>

        <div>
          <div
            className="max-w-[493px] w-full h-[235px] rounded-xl overflow-hidden"
            style={{
              border: "1px solid #00031C",
              borderRadius: "12px",
              background:
                "linear-gradient(52deg, rgba(17, 35, 143, 0.60) 58.88%, rgba(89, 53, 233, 0.60) 96.79%)",

              borderLeft: "none",
              borderRight: "none",
              borderTop: "1px solid",
              borderBottom: "1px solid",
              borderImageSource:
                "linear-gradient(270deg, #00031C 16.47%, #8EA0E0 48.87%, #00031C 78.17%)",
              borderImageSlice: 1,
            }}
          >
            <div className="px-8 py-6 flex flex-col justify-between h-full">
              <div>
                <h1 className="text-[#F4F7FF] text-[28px] font-medium leading-8">
                  {t("choosePlan.cta.startup.title")}
                </h1>
                <p className="text-[#CAC9D1] text-[14px] font-normal leading-5">
                  {t("choosePlan.cta.startup.description")}
                </p>
              </div>

              <div
                className="rounded-full p-px w-full"
               style={{
    /* First gradient: The button's inner background color */
    /* Second gradient: Your specific border gradient */
    backgroundImage: `
      linear-gradient(#00031C, #00031C), 
      linear-gradient(180deg, #4D4D4D 0%, #FFF 49.5%, rgba(255, 255, 255, 0) 100%)
    `,
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
    /* 1.5px is the secret for XL screens; it stays sharp but never disappears */
    border: "1.5px solid transparent",
  }}
              >
                <Link
                  href="/start-up"
                  className="font-normal py-3 px-6 rounded-full w-full flex items-center justify-center"
                  style={{
                    background: "#00031C",
                    color: "white",
                  }}
                >
                  {t("choosePlan.cta.startup.button")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosePlan;
