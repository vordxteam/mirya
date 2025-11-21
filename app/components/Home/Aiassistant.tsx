import GradientButton from "@/app/ui/GradientButton";
import Image from "next/image";
import React from "react";

const Aiassistant = () => {
  return (
    <div className="bg-[#00031C] relative z-10">
      <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-[84px] items-start max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-12 sm:py-[60px] relative overflow-hidden">

        {/* LEFT TEXT CONTENT */}
        <div className="max-w-[726px] w-full">
          <div className="max-w-[510px] mx-auto lg:mx-0 text-center lg:text-left">

            {/* Section Tag */}
            <div className="pb-3 flex items-center justify-center lg:justify-start gap-3 sm:gap-5">
              <Image
                src="/images/left-line.png"
                width={73}
                height={8}
                alt="line"
                className="w-[45px] sm:w-[73px]"
              />
              <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal">
                AI Assistance
              </h1>
              <Image
                src="/images/right-line.png"
                width={73}
                height={8}
                alt="line"
                className="w-[45px] sm:w-[73px]"
              />
            </div>

            {/* Main Heading */}
            <h1 className="heading-1 font-medium tracking-[-1.44px] pb-3 sm:pb-6 leading-tight">
              Meet your intelligent virtual assistant
            </h1>

            {/* Subheading */}
            <p className="text-[#CAC9D1] text-[14px] sm:text-[16px] font-normal leading-6 pb-4 sm:pb-6 mx-auto lg:mx-0">
              MIRYA comes with a built-in conversational AI assistant that
              understands your workflows, interprets context, and performs
              actions just like a highly skilled automation expert — instantly,
              accurately, and hands-free.
            </p>

            {/* Button */}
            <div className="w-fit mx-auto lg:mx-0">
              <GradientButton label="Contact Us Now" href="/contact" bgColor="#00031C" />
            </div>
          </div>

          {/* FEATURES GRID */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="p-[1px] rounded-lg"
                style={{
                  background:
                    "linear-gradient(174deg, #3F49D8 3.3%, #1F1B48 33.52%, #00041E 55.73%)",
                }}
              >
                <div className="bg-[#050A29] rounded-lg p-3 sm:p-[11px] flex items-start sm:items-center gap-3">
                  <Image src="/images/assist.svg" width={36} height={36} alt="assist" />

                  <div className="space-y-1">
                    <h1 className="text-[14px] sm:text-[16px] font-medium leading-5">
                      {item.title}
                    </h1>
                    <p className="text-[#FFFFFFCC] text-[11px] sm:text-[12px] font-light leading-4">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-fit flex justify-center lg:justify-end">
          <Image
            src="/images/right-img.png"
            width={464}
            height={544}
            alt="assistant"
            className="w-full sm:w-[360px] lg:w-[464px] h-auto"
          />
        </div>

        {/* Backdrop Blur Element */}
        <div className="absolute top-20 right-10 sm:right-20 -z-10 opacity-60">
          <div className="rounded-full bg-[#1D2759] blur-[50px] w-[380px] h-[450px] sm:w-[530px] sm:h-[653px]"></div>
        </div>

        {/* Decorative Box Image */}
        <div className="absolute -z-10 bottom-0 right-0 opacity-80">
          <Image
            src="/images/boxbg.png"
            width={635}
            height={340}
            alt="background-box"
            className="w-[280px] sm:w-[400px] lg:w-[635px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Aiassistant;


// FEATURE DATA
const features = [
  {
    title: "Create & Edit Workflows Instantly",
    description:
      "Ask, and MIRYA builds or updates workflows on the fly — no clicks, no configuration screens.",
  },
  {
    title: "Modify Node Parameters",
    description:
      "Adjust any step with a simple command. The assistant updates logic or triggers instantly.",
  },
  {
    title: "Control Executions",
    description:
      "Start, stop, pause, or resume any process with a single command — all in real time.",
  },
  {
    title: "Context Aware Understanding",
    description:
      "Get answers like “Is process X running?” or “Did step Y finish?” with full system awareness.",
  },
  {
    title: "Autonomous Navigation",
    description:
      "The assistant switches between windows or processes automatically to complete tasks.",
  },
  {
    title: "Built-In File Intelligence",
    description:
      "Search inside files and get direct summaries — instantly and in natural language.",
  },
];
