import GradientButton from "@/app/ui/GradientButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center pt-10 px-2 md:px-10 bg-[url('/images/herobg.png')] bg-no-repeat bg-bottom bg-contain relative">
        <div className="absolute top-0">
          <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
        </div>
        <div className="pb-3 flex items-center gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="78"
            height="16"
            viewBox="0 0 78 16"
            fill="none"
          >
            <g filter="url(#filter0_f_1649_3879)">
              <path
                d="M70 12C72.2091 12 74 10.2091 74 8C74 5.79086 72.2091 4 70 4C67.7909 4 66 5.79086 66 8C66 10.2091 67.7909 12 70 12Z"
                fill="#4F60FA"
              />
            </g>
            <g filter="url(#filter1_f_1649_3879)">
              <path d="M1 8H68" stroke="url(#paint0_linear_1649_3879)" />
            </g>
            <defs>
              <filter
                id="filter0_f_1649_3879"
                x="62"
                y="0"
                width="16"
                height="16"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="2"
                  result="effect1_foregroundBlur_1649_3879"
                />
              </filter>
              <filter
                id="filter1_f_1649_3879"
                x="0"
                y="6.5"
                width="69"
                height="3"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="0.5"
                  result="effect1_foregroundBlur_1649_3879"
                />
              </filter>
              <linearGradient
                id="paint0_linear_1649_3879"
                x1="nan"
                y1="nan"
                x2="nan"
                y2="nan"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4A56FF" stop-opacity="0" />
                <stop offset="1" stop-color="#4A56FF" />
              </linearGradient>
            </defs>
          </svg>{" "}
          <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal leading-5 text-center">
            Cognitive AI Driven
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="78"
            height="16"
            viewBox="0 0 78 16"
            fill="none"
          >
            <g filter="url(#filter0_f_1649_3885)">
              <path
                d="M8 12C5.79086 12 4 10.2091 4 8C4 5.79086 5.79086 4 8 4C10.2091 4 12 5.79086 12 8C12 10.2091 10.2091 12 8 12Z"
                fill="#4F60FA"
              />
            </g>
            <g filter="url(#filter1_f_1649_3885)">
              <path d="M77 8H10" stroke="url(#paint0_linear_1649_3885)" />
            </g>
            <defs>
              <filter
                id="filter0_f_1649_3885"
                x="0"
                y="0"
                width="16"
                height="16"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="2"
                  result="effect1_foregroundBlur_1649_3885"
                />
              </filter>
              <filter
                id="filter1_f_1649_3885"
                x="9"
                y="6.5"
                width="69"
                height="3"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="0.5"
                  result="effect1_foregroundBlur_1649_3885"
                />
              </filter>
              <linearGradient
                id="paint0_linear_1649_3885"
                x1="nan"
                y1="nan"
                x2="nan"
                y2="nan"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4A56FF" stop-opacity="0" />
                <stop offset="1" stop-color="#4A56FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h1 className="text-[30px] sm:text-[40px] md:text-[64px] font-medium leading-10 sm:leading-[50px] md:leading-[72px] tracking-[-1.44px] max-w-[972px] w-full text-center pb-3 sm:pb-6">
          Automation That Thinks, Learns & Works Like a Human
        </h1>
        <p className="text-[#CAC9D1] text-[14px] font-normal leading-5 pb-5 sm:pb-10 text-center">
          Turn complex workflows into simple, intelligent automations — in
          hours, not weeks.
        </p>
        <div className="flex items-center justify-center gap-3">
          <GradientButton
            label="Get Started"
            href="/contact"
            bgColor="#0274FE"
            textColor="#fff"
          />
          <div
            className="rounded-full p-[1.5px]"
            style={{
              background:
                "linear-gradient(180deg, #4D4D4D 0%, #FFF 49.5%, rgba(255, 255, 255, 0) 100%)",
            }}
          >
            <Link
              href="/contact"
              className="inline-block text-[16px] font-normal text-white py-2 px-5 bg-[#00031C] rounded-full"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="mt-10 shadow-[0_0_20px_0_rgba(2,116,254,0.32)] rounded-3xl bg-white">
          <Image
            src="/images/mirya2.png"
            width={1200}
            height={833}
            alt="MIRYA"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
