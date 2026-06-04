"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

interface IndustryCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const industryCards: IndustryCard[] = [
  {
    id: 1,
    title: "Logistics & freight forwarding",
    description:
      "Automated shipment tracking, order processing, customs documentation, and ERP data entry your operations team focuses on decisions, not data.",
    icon: "/images/solution1.svg",
  },
  {
    id: 2,
    title: "Finance & accounting",
    description:
      "Invoice processing, Excel automation, payment reconciliation, and reporting your finance team delivers insights, not data entry.",
    icon: "/images/solution2.svg",
  },
  {
    id: 3,
    title: "Manufacturing & production",
    description:
      "Production reports, quality documentation, ERP/SAP processes, order management, and approval workflows automated without touching the core system.",
    icon: "/images/solution3.svg",
  },
  {
    id: 4,
    title: "E-commerce & customer service",
    description:
      "Customer inquiries, returns management, product data maintenance, and AI-powered support deliver faster responses at lower cost.",
    icon: "/images/solution4.svg",
  },
  {
    id: 5,
    title: "Healthcare & clinics",
    description:
      "Patient form processing, appointment management, document classification (IDP), and data transfer between systems freeing clinical staff from administration.",
    icon: "/images/solution5.svg",
  },
];

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

const cardBorder =
  "linear-gradient(180.2deg, #463BBF 0.29%, #9C96E3 68.1%, #463BBF 100%)";

function IndustryCardItem({ card }: { card: IndustryCard }) {
  return (
    <motion.div
      variants={cardVariants}
      className="relative rounded-2xl p-[1px] h-full"
      style={{ background: cardBorder }}
    >
      <div
        className="rounded-2xl h-full flex flex-col sm:gap-8 gap-4 sm:py-[54px] py-8 sm:px-10 px-5"
        style={{
          backgroundColor: "#050A29",
          // padding: "54px 40px",
        }}
      >
        {/* Icon */}
        <div className="flex-shrink-0">
          <Image
            src={card.icon}
            alt={card.title}
            width={72}
            height={72}
          />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white sm:text-[32px] text-[20px] leading-6 font-normal sm:leading-9">
            {card.title}
          </h3>
          <p className="text-[#FFFFFF99] sm:text-[18px] text-[12px] leading-5 sm:leading-7">
            {card.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function IndustrySolutions(): React.ReactElement {
  const { t } = useTranslation("home");
  const translatedIndustryCards = t("newHome.industrySolutions.cards", {
    returnObjects: true,
  }) as Array<Pick<IndustryCard, "id" | "title" | "description">>;
  const localizedIndustryCards = industryCards.map((card) => {
    const translatedCard = translatedIndustryCards.find((item) => item.id === card.id);
    return translatedCard ? { ...card, ...translatedCard } : card;
  });

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

      {/* Blue glow — behind heading */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none">
        <div className="rounded-[68.75px] opacity-[0.6] bg-[#5935E94D] blur-[90px] w-[400px] h-[200px]" />
      </div>
      {/* Blue glow — center of section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
        <div className="rounded-[68.75px] opacity-[0.5] bg-[#5935E94D] blur-[90px] w-[500px] h-[400px]" />
      </div>
      <div
        className="relative z-10 mx-auto px-5 md:px-[80px] py-[80px]"
        style={{ maxWidth: "1440px" }}
      >

        {/* Header */}
        <motion.div
          className="flex flex-col items-center gap-4 text-center sm:mb-[48px] mb-[32px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Label */}
          <motion.div className="flex items-center gap-3" variants={itemVariants}>
            <Image src="/images/label1-new.svg" alt="" width={20} height={20} />
            <span className="text-[#959EFE] text-[20px] leading-6 font-normal tracking-widest uppercase">
              {t("newHome.industrySolutions.badge")}
            </span>
            <Image src="/images/label1-new.svg" alt="" width={20} height={20} />
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-white sm:text-[40px] text-[33px] md:text-[48px] font-normal leading-[1.1] tracking-[-0.01em]"
            variants={itemVariants}
          >
            {t("newHome.industrySolutions.title")}
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="text-[#CAC9D1] sm:text-[18px] text-[14px] leading-6 max-w-[721px]"
            variants={itemVariants}
          >
            {t("newHome.industrySolutions.description")}
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="flex flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Top row — 2 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <IndustryCardItem card={localizedIndustryCards[0]} />
            <IndustryCardItem card={localizedIndustryCards[1]} />
          </div>

          {/* Bottom row — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <IndustryCardItem card={localizedIndustryCards[2]} />
            <IndustryCardItem card={localizedIndustryCards[3]} />
            <IndustryCardItem card={localizedIndustryCards[4]} />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
