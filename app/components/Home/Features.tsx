import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function Features() {
  return (
    <>
      <div className="flex justify-center">
        <div className="bg-linear-to-r from-[#00031C] via-[#8EA0E0] to-[#00031C] w-[50%] flex text-center h-px"></div>
      </div>

      <div className="pt-[60px] px-[80px] flex flex-col items-center 
      ">
        <Image
          src="/images/gradient1.png"
          alt="gradient"
          width={181}
          height={94}
          className="absolute left-[45%] top-0"
        />
        <Image
          src="/images/gradient2.png"
          alt="gradient"
          width={458}
          height={318}
          className="absolute hidden sm:block left-[35%] bottom-0"
        />
        <div className="flex gap-5 items-center">
          <Image src="/images/blur.svg" alt="gradient1" height={8} width={8} />
          <h5 className="heading-5 font-regular text-[#959EFE]">Features</h5>
          <Image src="/images/blur.svg" alt="gradient1" height={8} width={8} />
        </div>
        <div className="flex flex-col gap-6 items-center pt-3">
          <h1 className="heading-1 font-medium text-[#FFFFFF] max-w-[682px] text-center">
            Powerful Features That Make Automation Effortless
          </h1>
          <h6 className="headin-6 font-regular text-[#CAC9D1] max-w-[568px] text-center">
            Discover how MIRYA thinks, learns, and executes like a human —
            without code, complexity, or integrations.
          </h6>
        </div>
        <div className="pt-[64px]  flex flex-col md:flex-row gap-6">
          <div
            style={{
              borderRadius: "12px",
              background:
                "linear-gradient(#00031C, #00031C) padding-box, linear-gradient(90deg, #463BBF, #9C96E3, #463BBF) border-box",
              border: "1px solid transparent",
            }}
            className="relative p-[32px] "
          >
            <Image
              src="/images/bg-blur.png"
              alt="gradient"
              width={303}
              height={108}
              className="absolute right-0 top-0"
            />
            <div className="flex flex-col sm:flex-row items-center sm:items-start  gap-6">
              <Image
                src="/images/card-img1.png"
                alt="Card image"
                height={124}
                width={124}
              />
              <div className="space-y-2 pb-7">
                <h3 className="heading-3 font-medium text-[#F4F7FF]">
                  Secure, Scalable & Fully Yours
                </h3>
                <p className="heading-6 font-regular max-w-[414px] text-[#CAC9D1]">
                  Run MIRYA completely on-premise for total data privacy and
                  control. Scale automation across teams, and customise the
                  entire platform with your own branding—without hidden costs or
                  limitations.
                </p>
              </div>
            </div>
            <Image
              src="/images/card.png"
              alt="Graph image"
              height={259}
              width={566}
            />
          </div>
          <div
            style={{
              borderRadius: "12px",
              background:
                "linear-gradient(#00031C, #00031C) padding-box, linear-gradient(90deg, #463BBF, #9C96E3, #463BBF) border-box",
              border: "1px solid transparent",
            }}
            className="relative px-3 sm:px-0 pt-[32px] "
          >
            <Image
              src="/images/bg-blur.png"
              alt="gradient"
              width={303}
              height={108}
              className="absolute right-0 top-0"
            />
            <div className="flex flex-col sm:flex-row items-center sm:items-start  gap-6">
              <Image
                src="/images/card3.png"
                alt="Card image"
                height={124}
                width={124}
                className="ml-[32px]"
              />
              <div className="space-y-2 pb-7">
                <h3 className="heading-3 font-medium text-[#F4F7FF]">
                  Universal Compatibility
                </h3>
                <p className="heading-6 font-regular max-w-[414px] text-[#CAC9D1]">
                  MIRYA works on top of any app or system exactly like a
                  human—clicking, typing, and navigating visually. No APIs, no
                  interfaces, no tool changes. Your existing software stays the
                  same; MIRYA automates everything.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-end">
              <Image
                src="/images/robo.png"
                alt="Card image"
                height={134}
                width={134}
              />
              <Image
                src="/images/card2.png"
                alt="Card image"
                height={259}
                width={566}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            borderRadius: "12px",
            background:
              "linear-gradient(#00031C, #00031C) padding-box, linear-gradient(90deg, #463BBF, #9C96E3, #463BBF) border-box",
            border: "1px solid transparent",
          }}
          className="w-full pt-[32px] px-[72px] mt-[24px]"
        >
        <div className="flex flex-col items-center justify-center">
          <Image src='/images/card4.png' alt="Card" height={124} width={124} />
          <div>
          </div>
          <h3 className="heading-3 font-medium">Human-Level Intelligence & Zero-Code Learning</h3>
        </div>
        </div>
      </div>
    </>
  );
}
