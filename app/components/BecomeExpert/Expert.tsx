"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function MiryaExpertLevels() {
  const { t } = useTranslation("expert");

  const expertLevels = [
    {
      id: 1,
      level: t("levels.card1.level"),
      title: t("levels.card1.title"),
      description: t("levels.card1.description"),
      requirements: Array.isArray(
        t("levels.card1.requirements", { returnObjects: true }),
      )
        ? (t("levels.card1.requirements", { returnObjects: true }) as string[])
        : [],
      benefits: Array.isArray(
        t("levels.card1.benefits", { returnObjects: true }),
      )
        ? (t("levels.card1.benefits", { returnObjects: true }) as string[])
        : [],
    },
    {
      id: 2,
      level: t("levels.card2.level"),
      title: t("levels.card2.title"),
      description: t("levels.card2.description"),
      requirements: Array.isArray(
        t("levels.card2.requirements", { returnObjects: true }),
      )
        ? (t("levels.card2.requirements", { returnObjects: true }) as string[])
        : [],
      benefits: Array.isArray(
        t("levels.card2.benefits", { returnObjects: true }),
      )
        ? (t("levels.card2.benefits", { returnObjects: true }) as string[])
        : [],
      featured: true,
    },
    {
      id: 3,
      level: t("levels.card3.level"),
      title: t("levels.card3.title"),
      description: t("levels.card3.description"),
      requirements: Array.isArray(
        t("levels.card3.requirements", { returnObjects: true }),
      )
        ? (t("levels.card3.requirements", { returnObjects: true }) as string[])
        : [],
      benefits: Array.isArray(
        t("levels.card3.benefits", { returnObjects: true }),
      )
        ? (t("levels.card3.benefits", { returnObjects: true }) as string[])
        : [],
    },
  ];

  return (
    <>
      {/* 1. SVG Definitions for Responsive ClipPath (Keeps exact design) */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="outerCardPath" clipPathUnits="objectBoundingBox">
            <path d="M 0.477,0 L 0.954,0 C 0.979,0 1,0.016,1,0.035 L 1,0.965 C 1,0.984,0.979,1,0.954,1 L 0.046,1 C 0.021,1 0,0.984,0,0.965 L 0,0.178 C 0,0.146,0.035,0.119,0.078,0.119 L 0.336,0.119 C 0.371,0.119,0.399,0.098,0.399,0.072 L 0.399,0.059 C 0.399,0.026,0.434,0,0.477,0 Z" />
          </clipPath>
          <clipPath id="innerCardPath" clipPathUnits="objectBoundingBox">
            <path d="M 0.475,0.004 L 0.956,0.004 C 0.98,0.004,1,0.019,1,0.037 L 1,0.967 C 1,0.985,0.98,1,0.956,1 L 0.049,1 C 0.025,1 0.005,0.985,0.005,0.967 L 0.005,0.179 C 0.005,0.148,0.038,0.124,0.078,0.124 L 0.336,0.124 C 0.368,0.124,0.394,0.102,0.394,0.075 L 0.394,0.061 C 0.394,0.03,0.427,0.006,0.468,0.006 L 0.475,0.004 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="flex justify-center relative -z-10 pointer-events-none">
        <div className="bg-linear-to-r from-[#00031C] via-[#8EA0E0] to-[#00031C] mx-auto w-[50%] md:w-[60%] xl:w-[50%] 2xl:w-[45%] h-[1px] 2xl:h-[2px] flex text-center"></div>
      </div>

      <div className="py-3 sm:py-15 relative min-h-screen">
        <div className="absolute -top-2 sm:left-[45%] -z-10 pointer-events-none">
          <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20">
          {/* Header Section */}
          <div className="flex flex-col items-center justify-center mb-16">
            <div className="pb-3 flex items-center gap-5">
              <Image
                src="/images/label2.svg"
                width={78}
                height={16}
                alt="line"
              />
              <h1 className="text-[#959EFE] heading-5 font-normal text-center">
                {t("levels.badge")}
              </h1>
              <Image
                src="/images/label.svg"
                width={78}
                height={16}
                alt="line"
              />
            </div>
            <h1 className="heading-1 font-medium text-white text-center pb-3 sm:pb-6 max-w-[777px]">
              {t("levels.title")}
            </h1>
            <p className="text-[#CAC9D1] heading-6 font-normal leading-5 text-center max-w-[506px]">
              {t("levels.desc")}
            </p>
            <div className="flex justify-center mt-6">
              <Link
                href="/onboarding"
                className="rounded-full p-[1.5px] cursor-pointer z-10"
                style={{
                  background:
                    "linear-gradient(180deg, #4D4D4D 0%, #FFF 49.5%, rgba(255, 255, 255, 0) 100%)",
                }}
              >
                <button className="bg-[#00031C] text-white px-8 py-3 rounded-full text-base font-normal hover:bg-[#00031C] transition-colors cursor-pointer">
                  {t("levels.btnText")}
                </button>
              </Link>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {expertLevels.map((level) => (
              <div key={level.id} className="relative flex flex-col group">
                {/* Level Badge - External to the clipped area */}
                <div className="absolute top-3 left-6 z-20">
                  <div className="inline-block px-4 py-2 rounded-full">
                    <span className="text-[#FFFFFF] heading-3 font-medium">
                      {level.level}
                    </span>
                  </div>
                </div>

                <div
                  className="relative flex-1 flex flex-col"
                  style={{
                    background:
                      "linear-gradient(200deg, #000000 0%, #686DDD 70%, #050A29 100%)",
                    clipPath: "url(#outerCardPath)",
                    paddingBottom: "2px",
                  }}
                >
                  <div
                    className="bg-[#050A29] pl-[30px] pr-[41px] pb-[40px] pt-[103px] h-full flex flex-col"
                    style={{
                      clipPath: "url(#innerCardPath)",
                    }}
                  >
                    <h3 className="heading-3 font-semibold text-[#F4F7FF] mb-3">
                      {level.title}
                    </h3>
                    <p className="text-[#CAC9D1] font-normal heading-6 mb-6">
                      {level.description}
                    </p>

                    <div className="h-[1px] w-full bg-gradient-to-r from-[#1A1A3B] via-[#A68BEE] to-[#1A1A3B]"></div>

                    {/* Requirements Section */}
                    <div className="mb-6 mt-6 flex-1">
                      <h4 className="font-normal text-[#FFFFFFB8] heading-6 mb-4">
                        {/* Global translation for the word "Requirements" */}
                        {t("levels.requirements-title")}
                      </h4>
                      <div className="space-y-3">
                        {level.requirements.map((req, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <Image
                              src="/images/tick.svg"
                              alt="tick"
                              width={20}
                              height={20}
                            />
                            <span className="text-[#F4F7FF] heading-6 font-normal">
                              {/* This renders the specific list items for this card */}
                              {req}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits Section */}
                    <div className="space-y-4">
                      <h4 className="font-normal text-[#FFFFFFB8] heading-6 mb-4">
                        {/* Global translation for the word "Benefits" */}
                        {t("levels.benefit-title")}
                      </h4>
                      <div className="space-y-3">
                        {level.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <Image
                              src="/images/tick.svg"
                              alt="tick"
                              width={20}
                              height={20}
                            />
                            <span className="text-[#F4F7FF] heading-6 font-normal">
                              {/* This renders the specific list items for this card */}
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
