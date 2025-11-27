import GradientButton from "@/app/ui/GradientButton";
import Image from "next/image";
import React from "react";

const AiPowered = () => {
  return (
    <div className="bg-[#00031C] overflow-hidden">
      <div className="px-2 md:px-20 py-[60px] space-y-16 max-w-[1440px] m-auto relative">
         <div className="absolute top-[175px] left-[419px]">
          <div className="rounded-[68.75px] opacity-[0.6] bg-[#5935E94D] blur-[50px] w-[458px] h-[318px]"></div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center gap-5">
            <Image
              src="/images/left-line.png"
              width={73}
              height={8}
              alt="line"
            />
            <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal leading-5 text-center">
              AI-Powered Decisions
            </h1>
            <Image
              src="/images/right-line.png"
              width={73}
              height={8}
              alt="line"
            />
          </div>
          <h1 className="text-[30px] sm:text-[40px] md:text-[48px] font-medium leading-10 sm:leading-14 tracking-[-1.44px] max-w-[716px] w-full text-center">
            What MIRYA automate
          </h1>
          <p className="text-[#CAC9D1] text-[14px] font-normal leading-5 text-center max-w-[400px]">
            MIRYA’s automation intelligence works across your existing tools and
            systems, powering end-to-end flows.
          </p>
          <div>
            <GradientButton
              label="Automate With MIRYA"
              href="#"
              bgColor="#00031C"
              textColor="#fff"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center max-w-7xl gap-6 w-full">
          <div
            className="rounded-lg p-px w-full md:w-fit"
            style={{
              background:
                "linear-gradient(174deg, #3F49D8 3.3%, #1F1B48 33.52%, #00041E 55.73%)",
            }}
          >
            <div className="rounded-lg p-4 bg-[#050A29] flex items-center gap-5">
              <Image
                src="/images/automate1.svg"
                width={56}
                height={56}
                alt="automate"
              />
              <div className="space-y-1">
                <h1 className="text-[16px] font-medium leading-5 tracking-[-0.2px]">
                  Reads & understands documents
                </h1>
                <p className="opacity-80 body-5 tracking-[-0.2px] max-w-[271px]">
                  MIRYA automatically reads, interprets, and extracts meaning
                  from emails, PDFs, forms, spreadsheets, and even messy
                  unstructured documents.
                </p>
              </div>
            </div>
          </div>

          <div
            className="rounded-lg p-px w-full md:w-fit"
            style={{
              background:
                "linear-gradient(174deg, #3F49D8 3.3%, #1F1B48 33.52%, #00041E 55.73%)",
            }}
          >
            <div className="rounded-lg p-4 bg-[#050A29] flex items-center gap-5">
              <Image
                src="/images/automate2.svg"
                width={56}
                height={56}
                alt="automate"
              />
              <div className="space-y-1">
                <h1 className="text-[16px] font-medium leading-5 tracking-[-0.2px]">
                  Updates & validates systems
                </h1>
                <p className="opacity-80 body-5 tracking-[-0.2px] max-w-[271px]">
                  From ERP and CRM platforms to HR software and long-standing
                  legacy systems, MIRYA ensures every application stays
                  up-to-date and synchronized.
                </p>
              </div>
            </div>
          </div>

          <div
            className="rounded-lg p-px w-full md:w-fit"
            style={{
              background:
                "linear-gradient(174deg, #3F49D8 3.3%, #1F1B48 33.52%, #00041E 55.73%)",
            }}
          >
            <div className="rounded-lg p-4 bg-[#050A29] flex items-center gap-5">
              <Image
                src="/images/automate3.svg"
                width={56}
                height={56}
                alt="automate"
              />
              <div className="space-y-1">
                <h1 className="text-[16px] font-medium leading-5 tracking-[-0.2px]">
                  Makes intelligent decisions
                </h1>
                <p className="opacity-80 body-5 tracking-[-0.2px] max-w-[271px]">
                  It evaluates business rules, interprets numerical data,
                  applies logical conditions, understands natural language, and
                  identifies patterns within complex workflows.
                </p>
              </div>
            </div>
          </div>

          <div
            className="rounded-lg p-px w-full md:w-fit"
            style={{
              background:
                "linear-gradient(174deg, #3F49D8 3.3%, #1F1B48 33.52%, #00041E 55.73%)",
            }}
          >
            <div className="rounded-lg p-4 bg-[#050A29] flex items-center gap-5">
              <Image
                src="/images/automate4.svg"
                width={56}
                height={56}
                alt="automate"
              />
              <div className="space-y-1">
                <h1 className="text-[16px] font-medium leading-5 tracking-[-0.2px]">
                  Coordinates workflows
                </h1>
                <p className="opacity-80 body-5 tracking-[-0.2px] max-w-[271px] ">
                  Multi stage workflows become simple when MIRYA takes over. It
                  captures inputs, configures the required steps, automates
                  execution, and continuously monitors results.
                </p>
              </div>
            </div>
          </div>

          <div
            className="rounded-lg p-px w-full md:w-fit"
            style={{
              background:
                "linear-gradient(174deg, #3F49D8 3.3%, #1F1B48 33.52%, #00041E 55.73%)",
            }}
          >
            <div className="rounded-lg p-4 bg-[#050A29] flex items-center gap-5">
              <Image
                src="/images/automate5.svg"
                width={56}
                height={56}
                alt="automate"
              />
              <div className="space-y-1">
                <h1 className="text-[16px] font-medium leading-5 tracking-[-0.2px]">
                  Operates software like a human
                </h1>
                <p className="opacity-80 body-5 tracking-[-0.2px] max-w-[271px]">
                  MIRYA interacts with software applications just as a human
                  would: clicking, typing, selecting, navigating, and processing
                  data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiPowered;
