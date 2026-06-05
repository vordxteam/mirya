"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

interface ActionCard {
  id: number;
  title: string;
  description: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function SeeInAction(): React.ReactElement {
  const { t } = useTranslation("home");
  const actionCards = t("newHome.seeInAction.cards", { returnObjects: true }) as ActionCard[];

  return (
    <section className="relative bg-[#00031C] overflow-hidden">
      {/* Top divider */}
      <div className="flex justify-center">
        <div
          className="w-full opacity-80"
          style={{
            height: "1px",
            background:
              "linear-gradient(270deg, #00031C 16.47%, #8EA0E0 48.87%, #00031C 78.17%)",
          }}
        />
      </div>

      {/* Blue glow behind heading */}
      <div className="absolute top-[10px] left-1/2 -translate-x-1/2 z-0 pointer-events-none">
        <div className="rounded-[68.75px] opacity-[0.6] bg-[#5935E94D] blur-[90px] w-[300px] h-[300px]" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 mx-auto px-5 md:px-[80px] sm:py-[80px] py-10"
        style={{ maxWidth: "1440px" }}
      >
        {/* Header */}
        <motion.div
          className="flex flex-col items-center gap-4 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Label */}
          <motion.div className="flex items-center gap-3" variants={itemVariants}>
            <Image src="/images/label1-new.svg" alt="" width={20} height={20} />
            <span className="text-[#959EFE] text-[20px] leading-6 font-normal tracking-widest uppercase">
              {t("newHome.seeInAction.badge")}
            </span>
            <Image src="/images/label1-new.svg" alt="" width={20} height={20} />
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-white sm:text-[40px] text-[30px] md:text-[48px] font-normal leading-[1.1] tracking-[-0.01em]"
            variants={itemVariants}
          >
            {t("newHome.seeInAction.title")}
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="text-[#CAC9D1] sm:text-[16px] text-[14px] md:text-[18px] leading-[1.6] max-w-[721px]"
            variants={itemVariants}
          >
            {t("newHome.seeInAction.description")}
          </motion.p>
        </motion.div>

        {/* Video / Image block */}
        <motion.div
          className="mt-[48px] w-full rounded-[16px] px-10   overflow-hidden"
       
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src="/images/mirya-in-action.png"
            alt={t("newHome.seeInAction.imageAlt")}
            width={1200}
            height={632}
            className="w-full h-auto block shadow-[0px_0px_10px_0px_#0274FE52]"
            priority
          />
        </motion.div>

        {/* Bottom 3 cards */}
        <motion.div
          className="mt-18 grid grid-cols-1 sm:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {actionCards.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.015 }}
              className="relative rounded-2xl p-[1px]"
              style={{
                background:
                  "linear-gradient(173.77deg, #3F49D8 3.3%, #1F1B48 33.52%, #00041E 55.73%)",
                     transition: "transform 0.45s cubic-bezier(0.23, 1, 0.32, 1)",
              }}
            >
              <div
                className="rounded-2xl h-full flex flex-col gap-5 px-6 py-5"
                style={{ backgroundColor: "#050A29" }}
              >
                <h3 className="text-white text-[22px] font-normal leading-[26px]">
                  {card.title}
                </h3>
                <p className="text-[#FFFFFFCC] text-[16px] font-light leading-[1.65]">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
