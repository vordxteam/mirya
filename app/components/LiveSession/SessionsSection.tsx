"use client";
import React from "react";
import GradientButton from "@/app/ui/GradientButton";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function SessionsSection() {
  const { t } = useTranslation("expert");

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

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {SessionsSection.map((session) => (
              <div key={session.id} className="relative max-h-[605px]">
                {/* Level Badge - Positioned absolutely outside clipped area */}
                <div className="absolute top-3 left-6 z-20">
                  <div className="inline-block px-4 py-2 rounded-full ">
                    <span className="text-[#FFFFFF] heading-3 font-medium ">
                      {session.session}
                    </span>
                  </div>
                </div>

                <div
                  className="relative rounded-[24px] p-0.6 z-0 pb-1 h-full"
                  style={{
                    background:
                      "linear-gradient(200deg, #000000 0%, #686DDD 70%, #050A29 100%)",
                    clipPath:
                      'path("M 195.928 0 L 392 0 C 402.493 0 411 8.50659 411 19 L 411 526 C 411 536.493 402.493 545 392 545 L 19 545 C 8.50659 545 0 536.493 0 526 L 0 97 C 0 79.3269 14.3269 65 32 65 L 137.928 65 C 152.287 65 163.928 53.3594 163.928 39 L 163.928 32 C 163.928 14.3269 178.255 0 195.928 0 Z")',
                  }}
                >
                  <div
                    className="bg-[#050A29] rounded-[24px] pl-[18px] pr-[17.8px] pb-[41px] h-full pt-[103px] flex flex-col"
                    style={{
                      clipPath:
                        'path("M 193.928 2 L 390 2 C 399.941 2 408 10.0589 408 20 L 408 524 C 408 533.941 399.941 542 390 542 L 20 542 C 10.0589 542 2 533.941 2 524 L 2 97 C 2 80.4315 15.4315 67 32 67 L 136.928 67 C 150.188 67 160.928 55.2594 160.928 40.5 L 160.928 33 C 160.928 16.4315 174.36 3 190.928 3 L 193.928 2 Z")',
                    }}
                  >
                    {/* Title and Description */}
                    <h3 className="heading-3 font-semibold text-[#F4F7FF] mb-3">
                      {session.title}
                    </h3>
                    <p className="text-[#CAC9D1] font-normal  heading-6 mb-3">
                      {session.description}
                    </p>

                    <div className="h-[1px] w-full bg-gradient-to-r from-[#1A1A3B] via-[#A68BEE] to-[#1A1A3B] "></div>

                    {/* Requirements Section */}
                    <div className="mb-8 mt-8 flex-1">
                      <div className="flex items-center gap-2 mb-4">
                        <h4 className="font-normal text-[#FFFFFFB8] heading-6">
                          Key Highlights:
                        </h4>
                      </div>
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
                        <p className="mt-8 text-white heading-6 font-normal max-w-[238px] w-full">
                          {session.footerDescription}
                        </p>
                      )}
                    </div>
                    <GradientButton
                      label="Register Now"
                      bgColor="#0274FE"
                      href="/register"
                      textColor="#FFFFFF"
                    />
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
