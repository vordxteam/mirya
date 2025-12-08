import Image from "next/image";
import React from "react";

export default function Comparison() {
  const columns = [
    { key: "mirya", label: "Mirya" },
    { key: "n8n", label: "n8n" },
    { key: "powerAutomate", label: "Power Automate" },
    { key: "aiAgent", label: "Agentic Kit" },
  ];

  const comparisonData = [
    {
      name: "True No-Code (usually without IT skills",
      mirya: "Yes",
      n8n: "Low Code",
      powerAutomate: "Low Code",
      aiAgent: "No",
    },
    {
      name: "On Premise Execution on any Workstation",
      mirya: "Yes",
      n8n: "Self Host",
      powerAutomate: "Mostly Cloud",
      aiAgent: "No",
    },
    {
      name: "Human Like Desktop + Web Automation (No API Needed)",
      mirya: "Yes",
      n8n: "No",
      powerAutomate: "Limited UI",
      aiAgent: "No",
    },
    {
      name: "Fully Automation Process Recording (Desktop + Web)",
      mirya: "Yes",
      n8n: "No",
      powerAutomate: "No",
      aiAgent: "No",
    },
    {
      name: "API Dependent",
      n8n: "Yes-Works Fully without API",
      powerAutomate: "No-API/Webhook Dependent",
      aiAgent: "No-API Connector Required",
      mirya: "No-LLM &API Based",
    },
    {
      name: "API Support",
      mirya: "Yes",
      n8n: "Yes",
      powerAutomate: "Yes",
      aiAgent: "Yes",
    },
    {
      name: "Autonomous Bots (Schedule + independent)",
      mirya: "Yes",
      n8n: "No",
      powerAutomate: "Partial",
      aiAgent: "No",
    },
    {
      name: "Integrated AI Decision Engine",
      mirya: "Yes",
      n8n: "Plugin-based",
      powerAutomate: "Add-ons",
      aiAgent: "Yes",
    },
    {
      name: "Local Encryption of Credentials, Files & Variables",
      mirya: "Yes",
      n8n: "Depends on Hosting",
      powerAutomate: "Depends on Tenent",
      aiAgent: "No",
    },
    {
      name: "Learnable in 2 Days without any Technical Background",
      mirya: "Yes",
      n8n: "No",
      powerAutomate: "No",
      aiAgent: "No",
    },
  ];

  const renderFeatureValue = (value: string) => {
    return (
      <span
        className={`text-[16px] md:text-[20px] font-medium leading-7 text-center`}
      >
        {value}
      </span>
    );
  };

  return (
    <div className="pt-[60px] max-w-[1440px] mx-auto flex flex-col items-center relative">
      {/* Background Blur */}
      <div className="absolute top-0">
        <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] z-[-1000] blur-[50px] w-[307px] h-[94px]"></div>
      </div>

      {/* Header Section */}
      <div className="pb-3 flex items-center gap-5">
        <Image src="/images/left-line.png" width={73} height={8} alt="line" />
        <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal leading-5 text-center">
          Feature Comparison
        </h1>
        <Image src="/images/right-line.png" width={73} height={8} alt="line" />
      </div>

      {/* Main Heading */}
      <h1 className="heading-1 font-medium leading-10 sm:leading-[50px] md:leading-[72px] tracking-[-1.44px] max-w-[686px] w-full text-center pb-3 sm:pb-6">
        Why Teams Choose Mirya Over Other Platforms
      </h1>

      {/* Subheading */}
      <p className="text-[#CAC9D1] text-[14px] font-normal leading-5 pb-5 sm:pb-10 text-center max-w-[606px]">
        Mirya delivers AI-powered research, automation, and decision-making
        features you won't find in traditional workflow tools.
      </p>

      {/* Comparison Table */}
      <div className="pt-10 flex flex-col gap-2 px-3 xl:px-20 w-full pb-[60px]">
        {/* Header Row */}
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(7, 7, 38, 0.50) 0%, rgba(18, 24, 102, 0.80) 65.87%)",
          }}
          className="p-6 rounded-[14.4px] hidden md:grid grid-cols-12 gap-2"
        >
          {/* Feature Title — 4 Columns */}
          <div className="text-[#F4F7FF] text-[20px] font-medium leading-5 col-span-4">
            Features
          </div>

          {/* Columns — 8 Columns */}
          <div className="col-span-8 grid grid-cols-4 gap-2">
            {columns.map((col) => (
              <div
                key={col.key}
                className="text-[#F4F7FF] text-[20px] leading-5 font-medium text-center"
              >
                {col.label}
              </div>
            ))}
          </div>
        </div>

        {/* Feature Rows */}
        {comparisonData.map((feature, index) => (
          <div
            key={index}
            className="grid grid-cols-12 gap-4 bg-[#FFFFFF14] rounded-lg p-5 items-center"
          >
            {/* Feature Name → 4 columns */}
            <p className="text-[#F4F7FF] text-[20px] font-medium col-span-12 md:col-span-4">
              {feature.name}
            </p>

            {/* Values for each platform → 8 columns */}
            <div className="col-span-12 md:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {columns.map((col) => (
                <div
                  key={col.key}
                  className="flex justify-between md:justify-center items-center"
                >
                  <span className="md:hidden text-[#9CA3AF] text-md">
                    {col.label}
                  </span>

                  {renderFeatureValue(
                    feature[col.key as keyof typeof feature] as string
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
