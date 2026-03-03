"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import GradientButton from "@/app/ui/GradientButton";
import { useTranslation } from "react-i18next";

// Animation variants
const containerVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 30,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

const fadeInVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export default function CoreFeatures() {
  const { t } = useTranslation("feature");

  return (
    <>
      <div className="flex justify-center">
        <div className=" bg-linear-to-r from-[#00031C] via-[#8EA0E0] to-[#00031C] w-[50%] flex text-center h-px"></div>
      </div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInVariants}
        className="flex justify-center"
      ></motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="py-[60px] px-4 sm:px-[80px] flex flex-col items-center relative overflow-hidden"
      >
        {/* Optimized background images */}
        <div className="hidden sm:block"></div>
        <div className="hidden sm:block"></div>

        <motion.div
          variants={itemVariants}
          className="flex relative gap-5 items-center"
        >
          <div className="absolute -top-16 -left-16 -z-10">
            <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[90px] w-[181px] h-[94px]"></div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-6 w-full max-w-[1440px] m-auto">
          {/* ROW 1: FULL WIDTH (COL-12) - Moved to top */}
          <motion.div
            variants={itemVariants}
            style={{
              borderRadius: "12px",
              background:
                "linear-gradient(#050925, #050925) padding-box, linear-gradient(90deg, #463BBF, #9C96E3, #463BBF) border-box",
              border: "1px solid transparent",
            }}
            /* Removed mt-[24px] to fix top gap */
            className="w-full container relative pt-[32px] px-3 sm:px-[72px]"
          >
            <div className="flex flex-col items-center justify-center">
              <div className="w-[124px] h-[124px]">
                <Image
                  src="/images/card4.png"
                  alt="Card"
                  height={124}
                  width={124}
                  priority={true}
                />
              </div>
              <h3 className="heading-3 font-medium text-center sm:text-start text-[#F4F7FF] -mt-4">
                {t("cards.card1.title")}
              </h3>
              <p className="heading-6 pt-2 font-regular text-[#CAC9D1] max-w-[742px] text-center">
                {t("cards.card1.description")}{" "}
              </p>
            </div>

            <div className="mt-8 relative w-full h-[400px]">
              <Image
                src="/images/main-img2.png"
                alt="Main image"
                fill
                className="rounded-lg"
                priority={true}
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </motion.div>

          {/* ROW 2: SIDE-BY-SIDE (COL-6) */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col md:flex-row justify-between w-full gap-6 relative "
          >
            {/* LEFT CARD */}
            <motion.div
              variants={itemVariants}
              style={{
                borderRadius: "12px",
                background:
                  "linear-gradient(#050925, #050925) padding-box, linear-gradient(90deg, #463BBF, #9C96E3, #463BBF) border-box",
                border: "1px solid transparent",
              }}
              className="p-8 flex-1"
            >
              <div className="absolute top-24 left-22 pointer-events-none z-0">
                <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[90px] w-[303px] h-[208px]"></div>
              </div>
              <div className="flex relative flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="w-[124px] h-[124px] flex-shrink-0">
                  <Image
                    src="/images/card-img1.png"
                    alt="Card image"
                    height={124}
                    width={124}
                    priority={true}
                  />
                </div>
                <div className="space-y-2 pb-7">
                  <h3 className="heading-3 font-medium text-[#F4F7FF]">
                    {t("cards.card2.title")}
                  </h3>
                  <p className="heading-6 font-regular max-w-[414px] text-[#CAC9D1]">
                    {t("cards.card2.description")}
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/feature5.png"
                  alt="Graph image"
                  height={259}
                  width={600}
                  className="rounded-[12px] transform translate-y-8"
                />
              </div>
            </motion.div>

            {/* RIGHT CARD */}
            <motion.div
              variants={itemVariants}
              style={{
                borderRadius: "12px",
                background:
                  "linear-gradient(#050925, #050925) padding-box, linear-gradient(90deg, #463BBF, #9C96E3, #463BBF) border-box",
                border: "1px solid transparent",
              }}
              className="relative px-3 sm:px-0 pt-8 flex-1 overflow-hidden"
            >
              {/* TOP SECTION: Reinforcement Learning */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mr-3">
                <div className="w-[124px] h-[124px] flex-shrink-0 ml-0 sm:ml-8">
                  <Image
                    src="/images/card3.png"
                    alt="Card image"
                    height={124}
                    width={124}
                    priority={true}
                  />
                </div>
                <div className="space-y-2 pb-7">
                  <h3 className="heading-3 font-medium text-[#F4F7FF]">
                    {t("cards.card3.title")}
                  </h3>
                  <p className="heading-6 font-regular max-w-[414px] text-[#CAC9D1]">
                    {t("cards.card3.description")}
                  </p>
                </div>
              </div>

              {/* BOTTOM SECTION: Feature Image with Glow Background */}
              <div className="flex flex-col sm:flex-row items-center sm:items-end pl-[17px] pr-[18px]">
                {/* Relative container to anchor the glow behind the image */}
                <div className="order-1 sm:order-2 relative w-full flex justify-center ">
                  {/* THE GLOW LIGHT: Centered behind feature1.png */}
                  <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
                    <div className="rounded-full opacity-[0.4] bg-[#4F60FA] blur-[80px] w-[400px] h-[250px]"></div>
                  </div>

                  <Image
                    src="/images/feature1.png"
                    alt="Card interface"
                    height={259}
                    width={566}
                    className="rounded-[12px] relative z-10" // z-10 ensures image stays on top
                  />
                </div>
              </div>
            </motion.div>
            {/* ddd */}
          </motion.div>
        </div>
        <motion.div
          variants={itemVariants}
          className="flex relative gap-5 items-center"
        >
          <div className="absolute -top-16 -left-30 -z-10">
            <div className="rounded-[194px] opacity-[0.6] bg-[#5935E94D] blur-[50px] w-[458px] h-[318px]"></div>
          </div>
        </motion.div>
        <div className="flex flex-col gap-6 w-full mt-6 max-w-[1440px] m-auto">
          <motion.div
            variants={itemVariants}
            style={{
              borderRadius: "12px",
              background:
                "linear-gradient(#050925, #050925) padding-box, linear-gradient(90deg, #463BBF, #9C96E3, #463BBF) border-box",
              border: "1px solid transparent",
            }}
            /* Removed mt-[24px] to fix top gap */
            className="w-full container relative pt-[32px] px-3 sm:px-[72px]"
          >
            <div className="flex flex-col items-center justify-center">
              <div className="w-[124px] h-[124px]">
                <Image
                  src="/images/card4.png"
                  alt="Card"
                  height={124}
                  width={124}
                  priority={true}
                />
              </div>
              <h3 className="heading-3 font-medium text-center sm:text-start text-[#F4F7FF] mt-4">
                {t("cards.card4.title")}{" "}
              </h3>
              <p className="heading-6 pt-2 font-regular text-[#CAC9D1] max-w-[742px] text-center">
                {t("cards.card4.description")}
              </p>
            </div>

            <div className="mt-8 relative w-full h-[400px]">
              <Image
                src="/images/feature4.png"
                alt="Main image"
                fill
                className="rounded-lg"
                priority={true}
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="flex flex-col md:flex-row justify-between w-full gap-6 relative "
          >
            <motion.div
              variants={itemVariants}
              style={{
                borderRadius: "12px",
                background:
                  "linear-gradient(#050925, #050925) padding-box, linear-gradient(90deg, #463BBF, #9C96E3, #463BBF) border-box",
                border: "1px solid transparent",
              }}
              className="p-8 flex-1 overflow-hidden relative"
            >
              <div className="hidden sm:block">
                <Image
                  src="/images/bg-blur.png"
                  alt="gradient"
                  width={303}
                  height={108}
                  className="absolute right-0 top-0 rounded-[12px]"
                />
              </div>
              <div className="flex relative flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="w-[124px] h-[124px] flex-shrink-0">
                  <Image
                    src="/images/card-img1.png"
                    alt="Card image"
                    height={124}
                    width={124}
                    priority={true}
                  />
                </div>
                <div className="space-y-2 pb-7">
                  <h3 className="heading-3 font-medium text-[#F4F7FF]">
                    {t("cards.card5.title")}{" "}
                  </h3>
                  <p className="heading-6 font-regular max-w-[414px] text-[#CAC9D1]">
                    {t("cards.card5.description")}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <Image
                  src="/images/card.png"
                  alt="Graph image"
                  height={353}
                  width={600}
                  className="rounded-[12px]"
                />
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              style={{
                borderRadius: "12px",
                background:
                  "linear-gradient(#050925, #050925) padding-box, linear-gradient(90deg, #463BBF, #9C96E3, #463BBF) border-box",
                border: "1px solid transparent",
              }}
              className="relative px-3 sm:px-0 pt-8 flex-1 overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="w-[124px] h-[124px] flex-shrink-0 ml-0 sm:ml-8">
                  <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-0 pointer-events-none z-0">
                    <div className="rounded-full opacity-[0.4] bg-[#4F60FA] blur-[80px] w-[400px] h-[250px]"></div>
                  </div>
                  <Image
                    src="/images/card3.png"
                    alt="Card image"
                    height={124}
                    width={124}
                    priority={true}
                  />
                </div>
                <div className="space-y-2 pb-7">
                  <h3 className="heading-3 font-medium text-[#F4F7FF]">
                    {t("cards.card6.title")}
                  </h3>
                  <p className="heading-6 font-regular max-w-[414px] text-[#CAC9D1]">
                    {t("cards.card6.description")}{" "}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-end px-8">
                <div className="order-1 sm:order-2">
                  <Image
                    src="/images/feature3.png"
                    alt="Card interface"
                    height={486}
                    width={480}
                    className="rounded-[12px] transform translate-y-12  -translate-x-2"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
