import GradientButton from "@/app/ui/GradientButton";
import Link from "next/link";
import React from "react";

const ChoosePlan = () => {
  return (
    <div className="max-w-[1440px] m-auto px-2 md:px-20">
      <div
        style={{
          background:
            "linear-gradient(180deg, #343754 0.33%, #AAB1EC 53.7%, #343754 100%)",
        }}
        className="p-px rounded-2xl relative overflow-hidden"
      >
        <div className="absolute top-5 left-1/5">
          <div className="rounded-[68.75px] bg-[#5935E999] z-[-1000] blur-[50px] w-[181px] h-[71px]"></div>
        </div>
        <div className="absolute -bottom-5 right-10">
          <div className="rounded-[68.75px] bg-[#5935E999] z-[-1000] blur-[50px] w-[181px] h-[71px]"></div>
        </div>
        <div className="bg-[#00031C] px-8 py-6 flex flex-col lg:flex-row gap-5 lg:items-center justify-between rounded-2xl">
          <div className="space-y-3">
            <h1 className="text-[#F4F7FF] text-[24px] font-semibold leading-7">
              Automation that scales with your workflow
            </h1>
            <p className="max-w-[709px] text-[#CAC9D1] text-[14px] font-normal leading-5">
              Run smarter automation without per-step charges. Pay only for what
              delivers real value, not for every tiny interaction inside your
              workflow.
            </p>
          </div>
          <div className="w-fit flex items-end justify-end">
            <GradientButton
              label="Discover How it Works"
              href="#"
              bgColor="#0274FE"
              textColor="#fff"
            />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-5 mt-12 pb-[60px] overflow-hidden bg-[#00031c] relative z-10">
        <div className="">
          <h1 className="text-[#F4F7FF] text-[40px] font-medium leading-12 max-w-[412px] w-full">
            Need a plan that fits you better?
          </h1>
        </div>
        <div>
          <div
            style={{
              background:
                "linear-gradient(270deg, #343754 0.33%, #AAB1EC 53.7%, #343754 100%)",
            }}
            className="rounded-xl p-px h-[235px]"
          >
            <div className="px-8 py-6 bg-[#11238F] rounded-2xl flex flex-col justify-between h-full">
              <div>
                <h1 className="text-[#F4F7FF] text-[28px] font-medium leading-8">
                  Start-up Plan
                </h1>
                <p className="text-[#CAC9D1] text-[14px] font-normal leading-5">
                  Growing team under 20 employees? See if you qualify for our
                  Start-up Plan and get 50% off the Pro Plan.
                </p>
              </div>
              <div
                className="rounded-full p-px w-full"
                style={{
                  background:
                    "linear-gradient(180deg, #343754 0.33%, #AAB1EC 53.7%, #343754 100%)",
                }}
              >
                <Link
                  href="#"
                  className="font-normal py-2 px-5 rounded-full w-full flex items-center justify-center"
                  style={{
                    background: "#00031C",
                    color: "white",
                  }}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            style={{
              background:
                "linear-gradient(270deg, #343754 0.33%, #AAB1EC 53.7%, #343754 100%)",
            }}
            className="rounded-xl p-px h-[235px]"
          >
            <div
              className="px-8 py-6 rounded-2xl flex flex-col justify-between h-full bg-[#11238F]"
            >
              <div>
                <h1 className="text-[#F4F7FF] text-[28px] font-medium leading-8">
                  Developer Edition
                </h1>
                <p className="text-[#CAC9D1] text-[14px] font-normal leading-5">
                  Perfect for builders experiment, extend, and integrate
                  automation with your own stack.
                </p>
              </div>

              <div className="flex items-center justify-start gap-2">
                <div
                  className="rounded-full p-px w-fit flex items-center gap-2"
                  style={{
                    background:
                      "linear-gradient(180deg, #343754 0.33%, #AAB1EC 53.7%, #343754 100%)",
                  }}
                >
                  <Link
                    href="#"
                    className="flex items-center justify-center rounded-full bg-[#00031C] text-white p-[11px] text-[12px] leading-4 gap-2"
                  >
                    {/* Left Star Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_883_2597)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.93475 0.654994C7.61675 -0.218006 6.38275 -0.218006 6.06475 0.654994L4.62175 4.62199L0.65475 6.06499C-0.21825 6.38299 -0.21825 7.61699 0.65475 7.93499L4.62175 9.37799L6.06475 13.345C6.38275 14.218 7.61675 14.218 7.93475 13.345L9.37775 9.37799L13.3448 7.93499C14.2178 7.61699 14.2178 6.38299 13.3448 6.06499L9.37775 4.62199L7.93475 0.654994Z"
                          fill="#4AE8B6"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_883_2597">
                          <rect width="14" height="14" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    GitHub
                    {/* Right GitHub Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M8.00065 1.33331C4.31732 1.33331 1.33399 4.31665 1.33399 7.99998C1.33278 9.39951 
        1.77249 10.7639 2.59069 11.8993C3.40889 13.0348 4.56399 13.8836 5.89199 14.3253C6.22532 
        14.3833 6.35065 14.1833 6.35065 14.008C6.35065 13.85 6.34199 13.3253 6.34199 12.7666C4.66732 
        13.0753 4.23399 12.3586 4.10065 11.9833C4.02532 11.7913 3.70065 11.2 3.41732 11.0413C3.18399 
        10.9166 2.85065 10.608 3.40865 10.6C3.93399 10.5913 4.30865 11.0833 4.43399 11.2833C5.03399 
        12.2913 5.99199 12.008 6.37532 11.8333C6.43399 11.4 6.60865 11.1086 6.80065 10.942C5.31732 
        10.7753 3.76732 10.2 3.76732 7.64998C3.76732 6.92465 4.02532 6.32531 4.45065 5.85865C4.38399 
        5.69198 4.15065 5.00865 4.51732 4.09198C4.51732 4.09198 5.07532 3.91665 6.35065 4.77465C6.89343 
        4.62441 7.45414 4.54882 8.01732 4.54998C8.58399 4.54998 9.15065 4.62465 9.68399 4.77465C10.9593 
        3.90798 11.5173 4.09198 11.5173 4.09198C11.884 5.00865 11.6507 5.69198 11.584 5.85865C12.0087 
        6.32531 12.2673 6.91665 12.2673 7.64998C12.2673 10.2086 10.7093 10.7753 9.22599 10.942C9.46732 
        11.15 9.67599 11.55 9.67599 12.1753C9.67599 13.0666 9.66732 13.7833 9.66732 14.0086C9.66732 
        14.1833 9.79265 14.3913 10.126 14.3246C11.449 13.8774 12.5986 13.0267 13.413 11.8922C14.2275 
        10.7578 14.6659 9.39655 14.6667 7.99998C14.6667 4.31665 11.6833 1.33331 7.99999 1.33331"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </div>
                <div
                  className="rounded-full p-px w-fit flex items-center gap-2"
                  style={{
                    background:
                      "linear-gradient(180deg, #343754 0.33%, #AAB1EC 53.7%, #343754 100%)",
                  }}
                >
                  <Link
                    href="#"
                    className="flex items-center justify-center rounded-full bg-[#00031C] text-white p-[11px] text-[12px] leading-4 gap-2"
                  >
                    View Doc
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosePlan;
