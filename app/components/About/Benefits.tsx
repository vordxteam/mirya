"use client"
import GradientButton from "@/app/ui/GradientButton";
import Image from "next/image";
import React from "react";
import { useAbout } from "@/app/hooks/useAboutTranslation";

const Benefits = () => {
  const { t } = useAbout();

  const cards = t("benefits.cards", {
    returnObjects: true,
  }) as { title: string; desc: string }[];

  return (
    <>
      <div className="flex justify-center">
        <div className="bg-linear-to-r from-[#00031C] via-[#8EA0E0] to-[#00031C] w-[50%] flex text-center h-[0.5px]"></div>
      </div>
      <div className="bg-[#00031C] overflow-hidden">
        <div className="max-w-[1440px] m-auto px-5 sm:px-10 md:px-20 py-[60px]">
          {/* Top Section */}
          <div className="relative flex flex-col items-center text-center">
            {/* Glow */}
            <div className="absolute -top-16 ">
              <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
            </div>

            {/* Title */}
            <div className="pb-3 flex items-center justify-center gap-5">
              <Image
                src="/images/label2.svg"
                width={78}
                height={16}
                alt="line"
              />
              <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal">
                {t("benefits.Benefits")}
              </h1>
              <Image
                src="/images/label.svg"
                width={78}
                height={16}
                alt="line"
              />
            </div>

            {/* Main Heading */}
            <h1 className="text-[26px] sm:text-[40px] md:text-[48px] font-medium leading-tight tracking-[-1.44px] max-w-[814px] pb-3 sm:pb-6">
              {t("benefits.title")}
            </h1>

            {/* Subtitle */}
            <p className="text-[#CAC9D1] text-[14px] sm:text-[16px] leading-6 max-w-[700px] pb-8 sm:pb-12">
              {t("benefits.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Card 1 */}
            <BenefitCard
              title={cards[0]?.title}
              description={cards[0]?.desc}
              image="/images/benefit-1.svg"
              imageWidth={488}
              imageHeight={352}
              glowPosition="left"
              className="col-span-12 md:col-span-6 xl:col-span-4 "
              imageTranslate="w-[100%] translate-x-10 -translate-y-6"
              imagePaddingBottom="pb-0"
            />

            {/* Card 2 */}
            <BenefitCard
               title={cards[1]?.title}
              description={cards[1]?.desc}
              image="/images/benefit-2.svg"
              imageWidth={301}
              imageHeight={470}
              glowPosition="center"
              className="col-span-12 md:col-span-6 xl:col-span-4"
              imageTranslate=" translate-x-5 translate-y-0"
              imagePaddingBottom="pb-0"
            />

            {/* Card 3 */}
            <BenefitCard
               title={cards[2]?.title}
              description={cards[2]?.desc}
              image="/images/benefit-3.svg"
              imageWidth={301}
              imageHeight={299}
              glowPosition="right"
              className="col-span-12 md:col-span-6 xl:col-span-4"
              imageTranslate=" translate-x-5 -translate-y-2"
              imagePaddingBottom="pb-0"
            />

            {/* Card 4 (full width on desktop) */}
            <BenefitCard
              title={cards[3]?.title}
  description={cards[3]?.desc}
              image="/images/benefit4.svg"
              imageWidth={460}
              imageHeight={219}
              glowPosition="left"
              className="col-span-12 md:col-span-6 xl:col-span-6"
            />

            {/* Card 5 (full width on desktop) */}
            <BenefitCard
                title={cards[4]?.title}
  description={cards[4]?.desc}
              image="/images/benefit5.svg"
              imageWidth={623}
              imageHeight={219}
              glowPosition="left"
              className="col-span-12 md:col-span-6 xl:col-span-6"
              imageTranslate=" translate-x-11 -translate-y-3 "
            />
          </div>

          <div className="flex items-center justify-center w-full mt-8">
            <GradientButton
              label={t("button")}
              href="/contact"
              bgColor="#0274FE"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;

/* -------------------- Reusable Card Component --------------------- */

interface CardProps {
  title: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  glowPosition?: "left" | "center" | "right";
  className?: string;
  imageTranslate?: string;
  imagePaddingBottom?: string;
}

const BenefitCard: React.FC<CardProps> = ({
  title,
  description,
  image,
  imageWidth,
  imageHeight,
  glowPosition = "center",
  className = "",
  imageTranslate,
  imagePaddingBottom,
}) => {
  return (
    <>
      <div
        className={`p-px rounded-xl ${className}`}
        style={{
          background:
            "linear-gradient(270deg, #00031C 16.47%, #8EA0E0 48.87%, #00031C 78.17%)",
        }}
      >
        <div className="bg-[#050925] rounded-xl flex flex-col justify-between h-[418px] overflow-hidden">
          <div className="relative p-4 sm:p-8 0 space-y-4">
            {/* Glow */}
            <div
              className={`absolute top-10 ${
                glowPosition === "left"
                  ? "-left-24"
                  : glowPosition === "right"
                  ? "-right-24"
                  : "left-1/2 -translate-x-1/2"
              }`}
            >
              <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
            </div>

            <h1 className="text-[#F4F7FF] text-[18px] sm:text-[20px] font-semibold leading-6 relative ">
              {title}
            </h1>
            <p className="text-[#CAC9D1] text-[14px] leading-5 relative ">
              {description}
            </p>
          </div>

          <div
            className={`flex items-center justify-center ${
              imagePaddingBottom || "pb-[37px]"
            }`}
          >
            <Image
              src={image}
              width={imageWidth}
              height={imageHeight}
              alt={title}
              className={`max-w-full h-auto ${imageTranslate || ""}`}
            />
          </div>
        </div>
      </div>
    </>
  );
};
