import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center pt-10 px-2 md:px-10 bg-[url('/images/herobg.png')] bg-no-repeat bg-bottom bg-cover relative">
        <div className="absolute top-0">
          <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
        </div>
        <div className="pb-3 flex items-center gap-5">
          <Image src="/images/left-line.png" width={73} height={8} alt="line" />
          <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal leading-5 text-center">
            Cognitive AI Driven
          </h1>
          <Image
            src="/images/right-line.png"
            width={73}
            height={8}
            alt="line"
          />
        </div>
        <h1 className="text-[30px] sm:text-[40px] md:text-[64px] font-medium leading-10 sm:leading-[50px] md:leading-[72px] tracking-[-1.44px] max-w-[972px] w-full text-center pb-3 sm:pb-6">
          Automate Anything. <br /> No Code. On Premise. No Limits.
        </h1>
        <p className="text-[#CAC9D1] text-[14px] font-normal leading-5 pb-5 sm:pb-10 text-center">
          Turn complex workflows into simple, intelligent automations — in
          hours, not weeks.
        </p>
        <div className="flex items-center justify-center gap-3">
          <div
            className="rounded-full p-0.5"
            style={{
              background:
                "linear-gradient(180deg, #4D4D4D 0%, #FFF 49.5%, rgba(255, 255, 255, 0) 100%)",
            }}
          >
            <Link
              href="#"
              className="inline-block text-[16px] font-normal text-white py-2 px-5 bg-[#0274FE] rounded-full"
            >
              Get A Demo
            </Link>
          </div>
          <div
            className="rounded-full p-0.5"
            style={{
              background:
                "linear-gradient(180deg, #4D4D4D 0%, #FFF 49.5%, rgba(255, 255, 255, 0) 100%)",
            }}
          >
            <Link
              href="#"
              className="inline-block text-[16px] font-normal text-white py-2 px-5 bg-[#00031C] rounded-full"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="mt-10 shadow-[0_0_20px_0_rgba(2,116,254,0.32)] rounded-3xl bg-white">
          <Image
            src="/images/MIRYA.png"
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
