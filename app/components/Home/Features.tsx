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

export default function Features() {
  const { t } = useTranslation("home");

  return (
    <>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInVariants}
        className="flex justify-center relative"
      >
        <div className="bg-linear-to-r from-[#00031C] via-[#8EA0E0] to-[#00031C] w-[50%] flex text-center h-[0.8px]"></div>
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="pt-[60px] px-4 sm:px-[80px] flex flex-col items-center"
      >
        {/* Optimized background images */}
        <div className="hidden sm:block">
          <Image
            src="/images/gradient1.png"
            alt="gradient"
            width={181}
            height={94}
            className="absolute left-[45%] top-0"
            priority={false}
            loading="lazy"
          />
        </div>
        <div className="hidden sm:block">
          <Image
            src="/images/gradient2.png"
            alt="gradient"
            width={458}
            height={318}
            className="absolute left-[35%] bottom-0"
            priority={false}
            loading="lazy"
          />
        </div>

        <motion.div
          variants={itemVariants}
          className="flex relative gap-5 items-center"
        >
          <Image
            src="/images/label2.svg"
            alt="gradient1"
            height={16}
            width={78}
            priority={true}
          />
          <h5 className="heading-5 font-regular text-[#959EFE]">
            {t("sectionBadge")}
          </h5>
          <Image
            src="/images/label.svg"
            alt="gradient1"
            height={16}
            width={78}
            priority={true}
          />
          <div className="absolute -top-16 left-6 -z-10">
            <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="flex flex-col gap-6 items-center pt-3"
        >
          <motion.h1
            variants={itemVariants}
            className="heading-1 font-medium text-[#FFFFFF] max-w-[736px] text-center"
          >
            {t("mainHeading")}{" "}
          </motion.h1>
          <motion.h6
            variants={itemVariants}
            className="text-[14px] font-regular text-[#CAC9D1] max-w-[568px] text-center"
          >
            {t("subHeading")}
          </motion.h6>
        </motion.div>

        <div className="">
          <motion.div
            variants={containerVariants}
            className="pt-16 flex flex-col md:flex-row justify-between w-full gap-6 relative"
          >
            <motion.div
              variants={itemVariants}
              style={{
                borderRadius: "12px",
                background:
                  "linear-gradient(#050925, #050925) padding-box, linear-gradient(90deg, #463BBF, #9C96E3, #463BBF) border-box",
                border: "1px solid transparent",
              }}
              className="p-8"
            >
              <div className="hidden sm:block">
                <Image
                  src="/images/blur4.png"
                  alt="gradient"
                  width={458}
                  height={318}
                  className="absolute left-[30%] top-[65%] -z-10"
                  priority={false}
                  loading="lazy"
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
                    {t("cards.0.title")}{" "}
                  </h3>
                  <p className="heading-6 font-regular max-w-[414px] text-[#CAC9D1]">
                    {t("cards.0.description")}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <Image
                  src="/images/card.png"
                  alt="Graph image"
                  height={259}
                  width={566}
                  priority={false}
                  loading="lazy"
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
              className="relative px-3 sm:px-0 pt-8"
            >
              <div className="hidden sm:block">
                <Image
                  src="/images/bg-blur.png"
                  alt="gradient"
                  width={303}
                  height={108}
                  className="absolute right-0 top-0 rounded-[12px]"
                  priority={false}
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
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
                    {t("cards.1.title")}{" "}
                  </h3>
                  <p className="heading-6 font-regular max-w-[414px] text-[#CAC9D1]">
                    {t("cards.1.description")}
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-end">
                <div className="w-[134px] h-[134px] flex-shrink-0 order-2 sm:order-1">
                  <Image
                    src="/images/robo.png"
                    alt="Card image"
                    height={134}
                    width={134}
                    priority={false}
                    loading="lazy"
                  />
                </div>
                <div className="order-1 sm:order-2">
                  <Image
                    src="/images/card2.png"
                    alt="Card image"
                    height={259}
                    width={566}
                    priority={false}
                    loading="lazy"
                    className="rounded-[12px]"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            style={{
              borderRadius: "12px",
              background:
                "linear-gradient(#050925, #050925) padding-box, linear-gradient(90deg, #463BBF, #9C96E3, #463BBF) border-box",
              border: "1px solid transparent",
            }}
            className="w-full container relative pt-[32px] px-3 sm:px-[72px] mt-[24px]"
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
                {t("cards.2.title")}
              </h3>
              <p className="heading-6 pt-2 font-regular text-[#CAC9D1] max-w-[742px] text-center">
                {t("cards.2.description")}
              </p>
            </div>

            <div className="mt-8 relative w-full h-[400px]">
              <Image
                src="/images/main-img.png"
                alt="Main image"
                fill
                className="rounded-lg"
                priority={true}
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="flex items-center justify-center w-full mt-[64px]">
        <GradientButton
          // label="Explore More Features"
                          label={t("footer.featureLabel")}

          href="/features"
          bgColor="#0274FE"
        />
      </div>
      {/* <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInVariants}
        className="flex justify-center items-center mt-[60px] mb-[40px] px-4"
      >
        <div
          className="w-[50%] relative"
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent 0%, #8EA0E0 50%, transparent 100%)",
            boxShadow: "0px 0px 4px 0px rgba(142, 160, 224, 0.4)",
          }}
        >
          <div
            className="absolute inset-0 opacity-50"
            style={{
              background:
                "linear-gradient(90deg, #00031C 0%, #FFFFFF 50%, #00031C 100%)",
              height: "1px",
            }}
          />
        </div>
      </motion.div> */}

      <motion.div
  initial="offscreen"
  whileInView="onscreen"
  viewport={{ once: true, amount: 0.1 }}
  variants={fadeInVariants}
  className="flex justify-center items-center mt-[60px] mb-[40px] px-4"
>
  <div
    className="
      relative mx-auto
      /* Responsive Widths */
      w-[50%] 
      md:w-[40%] 
      xl:w-[50%] 
      2xl:w-[31%]
      
      /* Responsive Heights */
      h-[1px]
      2xl:h-[2px]
    "
    style={{
      background: "linear-gradient(90deg, transparent 0%, #8EA0E0 50%, transparent 100%)",
         }}
  >
    {/* Inner White Glow Overlay */}
    <div
      className="absolute inset-0 opacity-40"
      style={{
        background: "linear-gradient(90deg, transparent 0%, #FFFFFF 50%, transparent 100%)",
      }}
    />
  </div>
</motion.div>

      <div className="max-w-[1440px] m-auto">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="sm:px-20 px-3"
        >
          <div
            style={{
              borderRadius: "12px",
              background: `
                linear-gradient(#050925, #050925) padding-box,
                linear-gradient(to bottom, #4D4D4D, #FFFFFF, #4D4D4D) border-box
              `,
              border: "1px solid transparent",
            }}
            className="w-full py-11 container mx-auto px-3 sm:px-[84px] flex gap-3 sm:gap-0 flex-col md:flex-row overflow-hidden items-center justify-between relative"
          >
            <div className="absolute top-0 z-0">
              <div className="rounded-[68.75px] bg-[#5935E999] blur-[50px] w-[181px] h-[94px] opacity-70"></div>
            </div>

            <div className="hidden sm:block absolute right-16 bottom-0">
              <div className="absolute bottom-0 z-0 -right-4">
                <div className="rounded-[68.75px] bg-[#5935E999] blur-[50px] w-[181px] h-[94px] "></div>
              </div>
            </div>

            <div className="heading-5 font-regular text-[#F4F7FF] relative z-10 max-w-[653px] text-left">
              <p>{t("footer.text1")} </p>
              <p>{t("footer.text2")}</p>
            </div>

            <div
              className="relative z-20 self-start sm:self-center"
              style={{ pointerEvents: "auto" }}
            >
              <GradientButton
                label={t("footer.ctaLabel")}
                href="/user-testing"
                bgColor="#0274FE"
                textColor="#fff"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
