"use client";
import React from "react";
import GradientButton from "@/app/ui/GradientButton";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function SessionsSection() {
  const { t } = useTranslation("live-session");

  const SessionsSection = [
    {
      id: 1,
      session: "Session 1",
      title: "Introductory Session",
      description:
        "A live walkthrough of core capabilities and automation examples — perfect for first-time attendees.",
      requirements: [
        "Overview of MIRYA’s no-code automation",
        "Live demo of workflow automation",
        "Q&A with experts",
      ],
      footerDescription: "Choose your preferred date and join us.",
    },
    {
      id: 2,
      session: "Session 2",
      title: "Deep Dive — Advanced Topics",
      description:
        "For technical audiences or power users. Topics include integrations, strategic design, and optimization workflows.",
      requirements: [
        "System architecture insights",
        "Advanced workflow strategies",
        "Live Q&A with product specialists",
      ],
      footerDescription: "Choose your preferred date and join us.",
      featured: true,
    },
    {
      id: 3,
      session: "Session 3",
      title: "Industry Focus Session",
      description:
        "Focused on Intelligent Document Processing and compliance-driven automation for regulated industries.",
      requirements: [
        "Invoice & tax automation",
        "IDP live demo",
        "Compliance architecture",
      ],
      footerDescription: "Choose your preferred date and join us.",
      additionalBenefitsTitle: "Additional Benefits",
    },
  ];

  return (
    <>
      <div className="flex justify-center relative -z-10 pointer-events-none">
        <div className="bg-linear-to-r from-[#00031C] via-[#8EA0E0] to-[#00031C] w-[50%] flex text-center h-[0.8px]"></div>
      </div>

      <div className=" py-3 sm:py-15 relative h-full">
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
              <h1 className="text-[#959EFE] heading-5 font-normal  text-center">
                Sessions
              </h1>
              <Image
                src="/images/label.svg"
                width={78}
                height={16}
                alt="line"
              />
            </div>
            <h1 className="heading-1 font-medium text-white text-center pb-3 sm:pb-6 max-w-[884px]">
              Choose The Right MIRYA Session
            </h1>
            <p className="text-[#CAC9D1] heading-6 font-normal leading-5 text-center max-w-[624px]">
              Select the format that matches your goals—from quick introduction
              to advanced automation and industry-focused use cases.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            <svg width="0" height="0" className="absolute">
              <defs>
                <clipPath
                  id="responsiveCardPath"
                  clipPathUnits="objectBoundingBox"
                >
                  <path d="M 0.48,0 L 0.95,0 C 0.98,0,1,0.015,1,0.035 L 1,0.96 C 1,0.98,0.98,1,0.95,1 L 0.05,1 C 0.02,1,0,0.98,0,0.96 L 0,0.18 C 0,0.14,0.03,0.12,0.08,0.12 L 0.34,0.12 C 0.37,0.12,0.4,0.1,0.4,0.07 L 0.4,0.06 C 0.4,0.03,0.43,0,0.48,0 Z" />
                </clipPath>
              </defs>
            </svg>

            {SessionsSection.map((session) => (
              <div key={session.id} className="relative flex flex-col h-full">
                {/* Level Badge */}
                <div className="absolute top-3 -left-1 z-20">
                  <div className="inline-block px-4 py-2">
                    <span className="text-[#FFFFFF] heading-3 font-medium">
                      {session.session}
                    </span>
                  </div>
                </div>

                {/* Main Border Container */}
                <div
                  className="relative p-[1.5px] flex-1 flex flex-col"
                  style={{
                    background:
                      "linear-gradient(200deg, #000000 0%, #686DDD 70%, #050A29 100%)",
                    clipPath: "url(#responsiveCardPath)", // Uses the dynamic SVG defined above
                  }}
                >
                  {/* Inner Content Container */}
                  <div
                    className="bg-[#050A29] pl-[18px] pr-[17.8px] pb-[41px] pt-[103px] flex-1 flex flex-col"
                    style={{
                      clipPath: "url(#responsiveCardPath)", // Matches the outer clip
                    }}
                  >
                    <div className="flex-1 flex flex-col">
                      <h3 className="heading-3 font-semibold text-[#F4F7FF] mb-3">
                        {session.title}
                      </h3>
                      <p className="text-[#CAC9D1] font-normal heading-6 mb-3">
                        {session.description}
                      </p>

                      <div className="h-[1px] w-full bg-gradient-to-r from-[#1A1A3B] via-[#A68BEE] to-[#1A1A3B] mb-8"></div>

                      {/* Highlights Section */}
                      <div className="flex-1">
                        <h4 className="font-normal text-[#FFFFFFB8] heading-6 mb-4">
                          Key Highlights:
                        </h4>
                        <ul className="list-disc list-inside space-y-3">
                          {session.requirements.map((req, index) => (
                            <li
                              key={index}
                              className="text-[#F4F7FFCC] heading-6 font-medium"
                            >
                              {req}
                            </li>
                          ))}
                        </ul>
                        {session.footerDescription && (
                          <p className="mt-8 text-white heading-6 font-normal max-w-[238px]">
                            {session.footerDescription}
                          </p>
                        )}
                      </div>

                      {/* Button - Pushed to bottom by flex-1 */}
                      <div className="mt-auto pt-6">
                        <GradientButton
                          label="Register Now"
                          bgColor="#0274FE"
                          href="/register"
                          textColor="#FFFFFF"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
        </div>
      </div>
    </>
  );
}
