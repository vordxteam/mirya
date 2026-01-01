"use client";
import GradientBlackButton from "@/app/ui/GradientBlackButton";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Impact = () => {
  const { t } = useTranslation("industries");
  return (
    <div className="max-w-[1440px] m-auto px-5 md:px-20 py-[60px]">
      <div className="flex flex-col md:flex-row gap-10 items-start md:items-center justify-between">
        <div className="max-w-[670px] w-full">
          <div className="flex flex-col">
            <div className="flex items-center gap-5 pb-3">
              <Image
                src="/images/label2.svg"
                width={78}
                height={16}
                alt="line"
              />
              <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal leading-5 text-center">
                {t("impact.badge")}{" "}
              </h1>
              <Image
                src="/images/label.svg"
                width={78}
                height={16}
                alt="line"
              />
            </div>
            <h1 className="text-[30px] sm:text-[40px] md:text-[48px] pb-3 sm:pb-6 font-medium leading-10 sm:leading-14 tracking-[-1.44px] max-w-[500px] w-full text-start">
              {t("impact.title")}{" "}
            </h1>
            <p className="text-[#CAC9D1] pb-3 sm:pb-6 text-[14px] font-normal leading-5 text-start max-w-[510px]">
              {t("impact.description")}
            </p>
            <div className="w-fit">
              <GradientBlackButton
                label={t("impact.button")}
                href="/user-testing"
                bgColor="#00031C"
                textColor="#fff"
              />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="hidden sm:block absolute -z-10 -top-4 md:-right-[30px]">
            <div className="rounded-[68.75px] opacity-[0.5] bg-[#1D2759] blur-[43px] w-[538px] h-[653px]"></div>
          </div>
          <Image
            src="/images/impactcard.png"
            width={464}
            height={524}
            alt="impactcard"
          />
        </div>
      </div>
    </div>
  );
};

export default Impact;
