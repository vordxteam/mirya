"use client";
import Image from "next/image";
import React from "react";
import GradientButton from "@/app/ui/GradientButton";
import { useTranslation } from "react-i18next";

const AboutSession = () => {
  // Use the live-session namespace registered in your i18n.ts
  const { t } = useTranslation("live-session");

  // Get the features array from JSON
  const features = t("aboutFeatures", { returnObjects: true }) as string[];

  return (
    <section className="relative overflow-hidden bg-[#00031C]">
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-20 py-15">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="w-full">
            <div className="pb-3 flex items-center justify-center lg:justify-start gap-3 sm:gap-5">
              <Image
                src="/images/label2.svg"
                width={73}
                height={16}
                alt="line"
                className="w-[50px] sm:w-[73px]"
              />
              <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal relative z-10 lg:whitespace-nowrap">
                {t("aboutLabel")}
              </h1>
              <Image
                src="/images/label.svg"
                width={78}
                height={16}
                alt="line"
                className="w-[50px] sm:w-[73px]"
              />
            </div>

            <h1 className="text-[#F4F7FF] text-[36px] md:text-[48px] font-medium leading-tight pb-6 max-w-[722px]">
              {t("aboutTitle")}
            </h1>

            <p className="text-[#CAC9D1] text-[16px] leading-5 font-normal max-w-[520px] pb-6">
              {t("aboutLead")}
            </p>

            <ul className="space-y-4 text-[#CAC9D1] text-[14px] leading-5 font-normal">
              {Array.isArray(features) && features.map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <Image
                    src="/images/check-mark.svg"
                    width={24}
                    height={24}
                    alt="check"
                    className="shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT CARD */}
          <div className="flex justify-center lg:justify-end w-full">
            <div
              style={{
                backgroundImage: `
                  linear-gradient(#00031C, #00031C),
                  linear-gradient(270deg, #00031C 16.47%, #8EA0E0 48.87%, #00031C 78.17%)
                `,
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                border: "1.5px solid transparent",
              }}
              className="rounded-2xl p-px max-w-[437px] min-h-[342px] w-full mx-auto relative my-[40px] lg:my-[80px]"
            >
              {/* Glow Effect */}
              <div className="absolute -left-16 -top-20 h-[503px] w-[414px] rounded-[297.75px] bg-[#1D2759]/30 blur-[43px] pointer-events-none" />
              
              <div className="relative rounded-2xl p-8 h-full bg-[#050925] bg-[url('/images/session-bg.svg')] bg-cover bg-center bg-no-repeat overflow-hidden">
                {/* Grid Overlay */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]" />

                <div className="relative z-10 space-y-5">
                  <h3 className="text-[#F4F7FF] text-[24px] font-semibold leading-7">
                    {t("cardTitle")}
                  </h3>

                  <p className="text-[#CAC9D1] text-[14px] leading-5 font-normal">
                    {t("cardDescription")}
                  </p>

                  <div
                    className="opacity-40 w-full max-w-[374px] h-[2px]"
                    style={{
                      background: "linear-gradient(270deg, #1A1A3B 3.71%, #A68BEE 50.53%, #1A1A3B 99.96%)",
                    }}
                  />

                  <p className="text-white text-[14px] font-normal leading-5 max-w-[238px]">
                    {t("cardFooter")}
                  </p>

                  <div className="pt-2">
                    <GradientButton
                      label={t("registerBtn")}
                      bgColor="#0274FE"
                      href="/register"
                      textColor="#FFFFFF"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSession;