import GradientButton from "@/app/ui/GradientButton";
import Image from "next/image";
import React from "react";

const industriesData = [
  {
    id: 1,
    title: "Retail & E-Commerce",
    description:
      "Optimize order processing, update stock in real time, simplify returns, and automate customer communication to keep every channel aligned.",
    image: "/images/industry1.svg",
  },
  {
    id: 2,
    title: "Finance & Accounting",
    description:
      "Automate invoice handling, perform reconciliations, run credit checks, and generate financial reports with consistent rule-based precision.",
    image: "/images/industry2.svg",
  },
  {
    id: 3,
    title: "Public Sector",
    description:
      "Accelerate case management, automate document workflows, and streamline citizen services with complete compliance.",
    image: "/images/industry3.svg",
  },
  {
    id: 4,
    title: "Logistics & Mobility",
    description:
      "Process booking emails, issue shipment updates, and manage operational workflows to increase speed and reduce coordination effort.",
    image: "/images/industry4.svg",
  },
  {
    id: 5,
    title: "Customer Service",
    description:
      "Classify and route inquiries, pre-draft responses, and eliminate manual triage — enabling agents to focus on high-value interactions.",
    image: "/images/industry5.svg",
  },
  {
    id: 6,
    title: "Healthcare",
    description:
      "MIRYA empowers healthcare departments by automating patient intake, documentation, insurance workflows, and clinical coordination.",
    image: "/images/industry6.svg",
  },
];

const IndustriesSection = () => {
  return (
    <div>
      <div className="px-2 lg:px-20 py-[60px] space-y-16 max-w-[1440px] m-auto relative">
        {/* Header */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-5 pb-3">
            <Image
              src="/images/left-line.png"
              width={73}
              height={8}
              alt="line"
            />
            <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal leading-5 text-center">
              Industries
            </h1>
            <Image
              src="/images/right-line.png"
              width={73}
              height={8}
              alt="line"
            />
          </div>

          <h1 className="text-[30px] sm:text-[40px] md:text-[48px] font-medium leading-10 sm:leading-14 tracking-[-1.44px] max-w-[716px] w-full text-center pb-3 md:pb-6">
            Industries we empower
          </h1>

          <p className="text-[#CAC9D1] text-[14px] font-normal pb-3 md:pb-6 leading-5 text-center max-w-[606px]">
            From high-volume back office operations to customer facing workflows
            MIRYA adapts to every environment and every industry with ease.
          </p>

          <GradientButton
            label="Automate With MIRYA"
            href="#"
            bgColor="#00031C"
            textColor="#fff"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {industriesData.map((item) => (
            <div
              key={item.id}
              style={{
                background:
                  "linear-gradient(180deg, #463BBF 0.29%, #9C96E3 68.1%, #463BBF 100%)",
              }}
              className="rounded-3xl p-px relative overflow-hidden"
            >
              <div
                className="p-6 rounded-3xl flex items-center justify-center text-center flex-col relative h-full"
                style={{
                  background:
                    "linear-gradient(176deg, #05061D 4.66%, #0B0D2B 77.35%, #0D0C2E 93.85%)",
                }}
              >
                {/* Blur Glow */}
                <div className="absolute bottom-[120px] right-[-113px]">
                  <div className="rounded-[68.75px] bg-[#211F9C] blur-[100px] w-[181px] h-[94px]"></div>
                </div>

                {/* Icon */}
                <Image
                  src={item.image}
                  width={222}
                  height={200}
                  alt={item.title}
                />

                {/* Text */}
                <div className="space-y-3">
                  <h1 className="text-[#F4F7FF] heading-3">{item.title}</h1>
                  <p className="text-[#F4F7FF99] body-4">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesSection;
