"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function TrialPlan() {
  const { t } = useTranslation("pricing");

  const features = [
    t("trialPlan.features.0"),
    t("trialPlan.features.1"),
    t("trialPlan.features.2"),
    t("trialPlan.features.3"),
    t("trialPlan.features.4"),
  ];

  const usageLimits = [
    t("trialPlan.usageLimits.0"),
    t("trialPlan.usageLimits.1"),
    t("trialPlan.usageLimits.2"),
  ];

  const steps = [
    {
      number: 1,
      title: t("trialPlan.steps.0.title"),
      description: t("trialPlan.steps.0.description"),
    },
    {
      number: 2,
      title: t("trialPlan.steps.1.title"),
      description: t("trialPlan.steps.1.description"),
    },
    {
      number: 3,
      title: t("trialPlan.steps.2.title"),
      description: t("trialPlan.steps.2.description"),
    },
  ];

  return (
    <section className="pb-15 px-5 sm:px-20 max-w-[1400px]  mx-auto">
      <div
        className="  grid lg:grid-cols-2 gap-[42px] items-start px-5 sm:px-10 py-7 sm:py-15"
        style={{
          borderRadius: "32px",
          border: "1px solid #00031C",
          background:
            "linear-gradient(249deg, #0C1239 59.81%, rgba(89, 53, 233, 0.60) 141.59%)",
        }}
      >
        <div className="space-y-10">
          <h1 className="text-white text-[30px] sm:text-[40px] font-medium leading-12 stretch">
            {t("trialPlan.mainTitle")}
          </h1>

          <div className="space-y-6">
            <h2 className="text-[#FFFFFF] text-[20px] leading-6 font-normal">
              {t("trialPlan.howItWorks")}
            </h2>

            {steps.map((step) => (
              <div key={step.number}>
                <h3 className="text-white font-normal text-[16px] leading-5">
                  {step.number}. {step.title}
                </h3>
                <p className="text-[#FFFFFF99] text-[12px] pl-5 mt-1 leading-4 font-normal max-w-[349px] pb-5 border-b border-[#FFFFFF33]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* RIGHT CARD AREA */}
        <div className="relative flex justify-center">
          <Image
            src="/images/boxbg.png"
            alt="background-box"
            width={604}
            height={324}
            className="
      hidden lg:block
      absolute
      -bottom-32
      left-[75%]
      -translate-x-1/2
      z-0
      w-[604px]
      h-auto
    "
          />
          <div
            className="relative p-[1.5px] max-w-[850px] w-full"
            style={{
              borderRadius: "36px",
              background:
                "linear-gradient(270deg, #00031C 16.47%, #8EA0E0 48.87%, #00031C 78.17%)",
            }}
          >
            <div
              className="relative z-10 flex flex-col md:flex-row p-8 backdrop-blur-xl"
              style={{
                borderRadius: "34px",
                border: "1px solid #00031C",
                background:
                  "linear-gradient(52deg, rgba(17, 35, 143, 0.60) 58.88%, rgba(89, 53, 233, 0.60) 96.79%), #00031C",
              }}
            >
              <div className="flex-1 flex flex-col justify-between pr-0 md:pr-2">
                <div>
                  <div className="flex items-start justify-between">
                    <h3 className="text-[#F4F7FF] leading-7 text-[24px] font-semibold">
                      {t("trialPlan.card.title")}
                    </h3>
                  </div>

                  <p className="text-[#CAC9D1] text-[14px] my-3 leading-5">
                    {t("trialPlan.card.description")}
                  </p>
                </div>
                <div
                  className="w-full"
                  style={{
                    background:
                      "linear-gradient(270deg, #1A1A3B 3.71%, #A68BEE 50.53%, #1A1A3B 99.96%)",
                    height: "1px",
                    alignSelf: "stretch",
                  }}
                />

                <div className="mt-8">
                  {/* PRICE */}
                  <div className="flex items-end gap-2 mb-10 whitespace-nowrap">
                    <span className="flex items-end leading-none text-[48px] font-medium text-transparent bg-gradient-to-r from-[#789EFF] via-[#3A38AA] to-[#3A38AA] bg-clip-text">
                      <span className="mr-1">€</span>
                      <span>{t("trialPlan.card.price")}</span>
                    </span>

                    <span className="text-[#73799B] text-[16px] font-normal leading-5 mb-[2px]">
                      {t("trialPlan.card.priceUnit")}
                    </span>
                  </div>

                  <div
                    className="w-full transition-all" 
                    style={{
                      borderRadius: "40px",
                      backgroundImage: `linear-gradient(#00031C, #00031C), 
                      linear-gradient(180deg, #4D4D4D 0%, #FFFFFF 50%, #4D4D4D 100%)`,
                      backgroundOrigin: "border-box",
                      backgroundClip: "padding-box, border-box",
                      border: "1.5px solid transparent",
                      display: "inline-block",
                      width: "fit-content",
                    }}
                  >
                    <Link
                      href="/live-session"
                      className="block w-full text-center py-3 px-6  text-white font-medium bg-[#0274FE] rounded-[40px] w-fit"
                    >
                      {t("trialPlan.card.cta")}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="hidden md:block w-px bg-[#FFFFFF1F]" />

              <div className="flex-1 space-y-6 pl-0 md:pl-6 mt-8 md:mt-0">
                {/* FEATURES */}
                <div className="space-y-4">
                  <h4 className="text-[#FFFFFFB8] leading-5 text-[14px] font-normal   opacity-70">
                    {t("trialPlan.card.featuresTitle")}
                  </h4>
                  <div className="space-y-3">
                    {features.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Image
                          src="/images/tick.svg"
                          width={20}
                          height={20}
                          alt="check"
                        />
                        <span className="text-[#F4F7FF] text-sm leading-tight">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[#FFFFFFB8] leading-5 text-[14px] font-normal   opacity-70">
                    {t("trialPlan.card.limitsTitle")}
                  </h4>
                  <div className="space-y-3">
                    {usageLimits.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Image
                          src="/images/tick.svg"
                          width={20}
                          height={20}
                          alt="check"
                        />
                        <span className="text-[#F4F7FF] text-sm leading-tight">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}