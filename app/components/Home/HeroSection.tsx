import GradientButton from "@/app/ui/GradientButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center pt-0 sm:pt-10 px-5 md:px-10 bg-[url('/images/herobg.png')] bg-no-repeat bg-bottom bg-contain relative">
        <div className="absolute top-0">
          <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
        </div>
        <div className="pb-3 flex items-center gap-5">
          <Image
            src="/images/label2.svg"
            alt="gradient1"
            height={16}
            width={78}
            priority={true}
          />
          <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal leading-5 text-center">
            Cognitive AI Driven
          </h1>
          <Image
            src="/images/label.svg"
            alt="gradient1"
            height={16}
            width={78}
            priority={true}
          />
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
        <div className="mt-2.5 shadow-[0_0_20px_0_rgba(2,116,254,0.32)] rounded-3xl bg-white">
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
