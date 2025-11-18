import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import GradientButton from "@/app/ui/GradientButton";

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
  return (
    <>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
        className="flex justify-center"
      >
        <div className="bg-linear-to-r from-[#00031C] via-[#8EA0E0] to-[#00031C] w-[50%] flex text-center h-[0.8px]"></div>
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="pt-[60px] px-2 sm:px-[80px] flex flex-col items-center"
      >
        <motion.div variants={fadeInVariants}>
          <Image
            src="/images/gradient1.png"
            alt="gradient"
            width={181}
            height={94}
            className="absolute left-[45%] top-0"
          />
        </motion.div>
        <motion.div variants={fadeInVariants}>
          <Image
            src="/images/gradient2.png"
            alt="gradient"
            width={458}
            height={318}
            className="absolute hidden sm:block left-[35%] bottom-0"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-5 items-center">
          <Image src="/images/blur.svg" alt="gradient1" height={8} width={8} />
          <h5 className="heading-5 font-regular text-[#959EFE]">Features</h5>
          <Image src="/images/blur.svg" alt="gradient1" height={8} width={8} />
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="flex flex-col gap-6 items-center pt-3"
        >
          <motion.h1
            variants={itemVariants}
            className="heading-1 font-medium text-[#FFFFFF] max-w-[682px] text-center"
          >
            Powerful Features That Make Automation Effortless
          </motion.h1>
          <motion.h6
            variants={itemVariants}
            className="headin-6 font-regular text-[#CAC9D1] max-w-[568px] text-center"
          >
            Discover how MIRYA thinks, learns, and executes like a human —
            without code, complexity, or integrations.
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
              className="p-[32px]"
            >
              <motion.div variants={fadeInVariants}>
                <Image
                  src="/images/blur4.png"
                  alt="gradient"
                  width={458}
                  height={318}
                  className="absolute hidden sm:block left-[30%] top-[65%] z-[-10]"
                />
              </motion.div>
              <div className="flex relative flex-col sm:flex-row items-center sm:items-start gap-6">
                <motion.div variants={itemVariants}>
                  <Image
                    src="/images/card-img1.png"
                    alt="Card image"
                    height={124}
                    width={124}
                  />
                </motion.div>
                <motion.div variants={itemVariants} className="space-y-2 pb-7">
                  <h3 className="heading-3 font-medium text-[#F4F7FF]">
                    Secure, Scalable & Fully Yours
                  </h3>
                  <p className="heading-6 font-regular max-w-[414px] text-[#CAC9D1]">
                    Run MIRYA completely on-premise for total data privacy and
                    control. Scale automation across teams, and customise the
                    entire platform with your own branding—without hidden costs
                    or limitations.
                  </p>
                </motion.div>
              </div>
              <motion.div variants={itemVariants}>
                <Image
                  src="/images/card.png"
                  alt="Graph image"
                  height={259}
                  width={566}
                />
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
              className="relative px-3 sm:px-0 pt-8 z-100"
            >
              <motion.div variants={fadeInVariants}>
                <Image
                  src="/images/bg-blur.png"
                  alt="gradient"
                  width={303}
                  height={108}
                  className="absolute right-0 top-0"
                />
              </motion.div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <motion.div variants={itemVariants}>
                  <Image
                    src="/images/card3.png"
                    alt="Card image"
                    height={124}
                    width={124}
                    className="ml-8"
                  />
                </motion.div>
                <motion.div variants={itemVariants} className="space-y-2 pb-7">
                  <h3 className="heading-3 font-medium text-[#F4F7FF]">
                    Universal Compatibility
                  </h3>
                  <p className="heading-6 font-regular max-w-[414px] text-[#CAC9D1]">
                    MIRYA works on top of any app or system exactly like a
                    human—clicking, typing, and navigating visually. No APIs, no
                    interfaces, no tool changes. Your existing software stays
                    the same; MIRYA automates everything.
                  </p>
                </motion.div>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-end">
                <motion.div variants={itemVariants}>
                  <Image
                    src="/images/robo.png"
                    alt="Card image"
                    height={134}
                    width={134}
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Image
                    src="/images/card2.png"
                    alt="Card image"
                    height={259}
                    width={566}
                  />
                </motion.div>
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
            className="w-full  container bg-white relative pt-[32px] px-3 sm:px-[72px] mt-[24px]"
          >
            <motion.div
              variants={containerVariants}
              className="flex flex-col items-center  justify-center"
            >
              <motion.div variants={itemVariants}>
                <Image
                  src="/images/card4.png"
                  alt="Card"
                  height={124}
                  width={124}
                />
              </motion.div>
              <motion.h3
                variants={itemVariants}
                className="heading-3 font-medium text-center sm:text-start text-[#F4F7FF]"
              >
                Human-Level Intelligence & Zero-Code Learning
              </motion.h3>
              <motion.p
                variants={itemVariants}
                className="heading-6 pt-2 font-regular text-[#CAC9D1] max-w-[742px] text-center"
              >
                MIRYA learns tasks by simply watching you work. It understands
                screens, interprets data, and builds smart automations without
                writing a single line of code. Just record once, and MIRYA
                handles the rest with human-like precision.
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-[32px] relative w-full h-[400px]"
            >
              <Image
                src="/images/main-img.png"
                alt="Main image"
                fill
                className="rounded-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
        className="flex justify-center items-center mt-[60px] mb-[40px]"
      >
        <div className="bg-linear-to-r from-[#00031C] via-[#8EA0E0] to-[#00031C] w-[50%] flex text-center h-[0.8px]"></div>
      </motion.div>

      <div className="max-w-[1440px] m-auto">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="sm:px-20 px-3"
        >
          <motion.div
            variants={itemVariants}
            style={{
              borderRadius: "12px",
              background:
                "linear-gradient(#050925, #050925) padding-box, linear-gradient(90deg, #463BBF, #9C96E3, #463BBF) border-box",
              border: "1px solid transparent",
            }}
            className="w-full py-11 container mx-auto px-2 sm:px-[84px] flex gap-3 sm:gap-0  overflow-hidden flex-col md:flex-row items-center justify-between relative"
          >
            <motion.div variants={fadeInVariants} className="absolute top-0">
              <div>
                <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInVariants}
              className="absolute right-16 bottom-0"
            >
              <Image
                src="/images/blur3.png"
                alt="blur"
                height={71}
                width={181}
              />
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="heading-5 font-regular text-[#F4F7FF]"
            >
              <p>Simple. Intelligent. Autonomous.</p>
              <p>
                MIRYA connects and controls any system, any app, any process —
                with zero code..
              </p>
              <p>Built for business users. Powered by Cognitive AI.</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <GradientButton
                label="Get A Demo"
                href="#"
                bgColor="#0274FE"
                textColor="#fff"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
