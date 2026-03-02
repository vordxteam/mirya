import GradientButton from "@/app/ui/GradientButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
const HeroSection = () => {
  const { t } = useTranslation("home");
  return (
    <div>
      <div className="relative z-10 flex flex-col items-center justify-center pt-0 sm:pt-10 px-5 md:px-10 bg-[url('/images/herobg.png')] bg-no-repeat bg-bottom bg-contain">
        <div className="absolute top-0 inset-x-0 flex justify-center pointer-events-none z-0">
          <div className="rounded-[68.75px] bg-[#4F60FA] opacity-[0.45] blur-[50px] w-[181px] h-[94px]"></div>
        </div>

        <div className="pb-3 flex items-center gap-2 sm:gap-5">
          <Image
            src="/images/label2.svg"
            alt="gradient1"
            height={16}
            width={78}
            priority={true}
          />
          <div className="flex flex-col items-center">
            <Image
              src="/images/content.svg"
              alt="gradient1"
              height={32}
              width={121}
              priority={true}
            />

            <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal leading-5 text-center">
              {t("hero.badge")}{" "}
            </h1>
          </div>

          <Image
            src="/images/label.svg"
            alt="gradient1"
            height={16}
            width={78}
            priority={true}
          />
        </div>
        <h1 className="text-[30px] sm:text-[40px] md:text-[64px] font-medium leading-10 sm:leading-[50px] md:leading-[72px] tracking-[-1.44px] max-w-[1004px] w-full text-center pb-3 sm:pb-6">
          {t("hero.mainTitle")}{" "}
        </h1>
        <p className="text-[#CAC9D1] text-[14px] font-normal leading-5 pb-5 sm:pb-10 text-center">
          {t("hero.description")}
        </p>
        <div className="flex items-center justify-center gap-3">
          <GradientButton
            label={t("hero.buttons.getStarted")}
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
              className="inline-block text-[16px] font-normal text-white py-3 px-6 bg-[#00031C] rounded-full"
            >
              {t("hero.buttons.contactUs")}{" "}
            </Link>
          </div>
        </div>
        <div
          className="p-px rounded-3xl mt-2.5 shadow-[0_0_20px_0_rgba(2,116,254,0.32)]"
          style={{
            background:
              "linear-gradient(270deg, #00031C 16.47%, #8EA0E0 48.87%, #00031C 78.17%)",
          }}
        >
          {/* Inner container (transparent) */}
          <div className="relative rounded-3xl overflow-hidden flex items-center justify-center">
            {/* Glow effect at top center */}

            {/* Image */}
            <Image
              src="/images/mirya2-update.png"
              width={1200}
              height={833}
              alt="MIRYA"
              className="max-w-full h-auto rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
