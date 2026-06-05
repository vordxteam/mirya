"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  isCenter?: boolean;
}

const featureCards: FeatureCard[] = [
  {
    id: 1,
    title: "Desktop recording",
    description:
      "Capture and automate any Windows or Mac desktop application ERP, legacy tools, internal software.",
    icon: "/images/eye1.svg",
  },
  {
    id: 2,
    title: "",
    description: "",
    icon: "",
    isCenter: true,
  },
  {
    id: 3,
    title: "Email & outlook recording",
    description:
      "Capture email classification, drafting, sending, and inbox management workflows at scale and just a few clicks away.",
    icon: "/images/eye3.svg",
  },
  {
    id: 4,
    title: "Web recording",
    description:
      "Automate browser-based workflows portals, CRMs, web apps with intelligent element recognition.",
    icon: "/images/eye4.svg",
  },
  {
    id: 5,
    title: "Prompt to workflow",
    description:
      "Simply tell MIRYA your goal, and it automatically generates the logic, steps, and connections needed to automate the process.",
    icon: "/images/eye2.svg",
  },
  {
    id: 6,
    title: "Excel & office automation",
    description:
      "Record complex Excel workflows, formulas, and data transformations. Run them without the spreadsheet open.",
    icon: "/images/eye5.svg",
  },
  {
    id: 7,
    title: "ERP/SAP process recording",
    description:
      "Record and replay complete SAP or ERP transactions data entry, reporting, approvals without scripting.",
    icon: "/images/eye6.svg",
  },
  {
    id: 8,
    title: "AI assisted smart recording",
    description:
      "MIRYA uses AI to understand intent, not just actions capturing the why behind each step for smarter automation.",
    icon: "/images/eye7.svg",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const regularBorder =
  "linear-gradient(173.77deg, #3F49D8 3.3%, #1F1B48 33.52%, #00041E 55.73%)";

const centerBorder =
  "linear-gradient(270deg, #00031C 16.47%, #8EA0E0 48.87%, #00031C 78.17%)";

function FeatureCardItem({ card }: { card: FeatureCard }) {
  return (

    <motion.div
      variants={cardVariants}
      className="relative rounded-2xl p-[1px] h-full cursor-pointer"
      style={{
        background: regularBorder,
        transition: "filter 0.4s ease, box-shadow 0.4s ease",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.filter = "brightness(1.8)";
        e.currentTarget.style.boxShadow = "0 0 32px rgba(63, 73, 216, 0.4)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.filter = "brightness(1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div
        className="rounded-2xl h-full flex flex-col gap-8 px-6 py-5 bg-[#050A29]"
        style={{ transition: "filter 0.4s ease" }}
        onMouseEnter={e => e.currentTarget.style.filter = "brightness(0.556)"}
        onMouseLeave={e => e.currentTarget.style.filter = "brightness(1)"}
      >
        <div className="w-15 h-15 flex items-center justify-center">
          <Image src={card.icon} alt={card.title} width={60} height={60} />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-white text-[22px] font-normal leading-snug">
            {card.title}
          </h3>
          <p className="text-[#FFFFFFCC] text-[16px] font-light leading-[1.65]">
            {card.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function EyeOfMirya(): React.ReactElement {
  const { t } = useTranslation("home");
  const translatedFeatureCards = t("newHome.eyeOfMirya.cards", {
    returnObjects: true,
  }) as Array<Pick<FeatureCard, "id" | "title" | "description">>;
  const cards = featureCards.map((card) => {
    const translatedCard = translatedFeatureCards.find((item) => item.id === card.id);
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

      {/* Blue glow — top behind heading */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none">
        <div className="rounded-[68.75px] opacity-[0.6] bg-[#5935E94D] blur-[70px] w-[400px] h-[150px]" />
      </div>

      {/* Blue glow — center behind tall middle card */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <div className="rounded-[68.75px] opacity-[0.5] bg-[#5935E94D] blur-[90px] w-[458px] h-[318px]" />
      </div>

      <div
        className="relative z-10 mx-auto px-5 md:px-[80px] py-[80px]"
        style={{ maxWidth: "1440px" }}
      >

        {/* Header */}
        <motion.div
          className="flex flex-col gap-4 mb-[30px] lg:mb-[72px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div className="flex items-center justify-center sm:justify-start gap-3 lg:mx-16" variants={itemVariants}>
            <Image
              src="/images/label2.svg"
              alt="gradient1"
              height={16}
              width={78}
              priority={true}
            />
            <span className="text-[#959EFE] text-[20px] leading-6 font-normal tracking-widest uppercase">
              {t("newHome.eyeOfMirya.badge")}
            </span>
            <Image
              src="/images/label.svg"
              alt="gradient1"
              height={16}
              width={78}
              priority={true}
            />
          </motion.div>

          <motion.h2
            className="text-white sm:text-[40px] text-[27px] sm:text-left text-center md:text-[48px] font-normal leading-[1.3] tracking-[-0.01em] max-w-[788px]"
            variants={itemVariants}
          >
            {t("newHome.eyeOfMirya.titleLine1")}
            <br className="hidden sm:block" />
            {t("newHome.eyeOfMirya.titleLine2")}
          </motion.h2>

          <motion.p
            className="text-[#CAC9D1] sm:text-[18px] text-[14px] leading-[1.6] max-w-[721px] sm:text-left text-center"
            variants={itemVariants}
          >
            {t("newHome.eyeOfMirya.description")}
          </motion.p>
        </motion.div>

        {/* GRID WRAPPER */}
        <motion.div
          className="flex flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >

          {/* TOP + MIDDLE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">

            {/* [col1, row1] Desktop recording */}
            <FeatureCardItem card={cards[0]} />

            {/* [col3, row1] Email & outlook recording */}
            <div className="lg:col-start-3 lg:row-start-1">
              <FeatureCardItem card={cards[2]} />
            </div>

            {/* [col1, row2] Web recording */}
            <div className="lg:col-start-1 lg:row-start-2">
              <FeatureCardItem card={cards[3]} />
            </div>

            {/* [col2, row1+2] Tall center card */}
            <motion.div
              variants={cardVariants}
              className="relative rounded-2xl p-[1px] lg:col-start-2 lg:row-start-1 lg:row-span-2 cursor-pointer"
              style={{
                background: centerBorder,
                transition: "filter 0.4s ease, box-shadow 0.4s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.filter = "brightness(1.8)";
                e.currentTarget.style.boxShadow = "0 0 32px rgba(63, 73, 216, 0.4)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.filter = "brightness(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                className="rounded-2xl h-full flex flex-col justify-end gap-8 px-6 py-5 bg-[#050A29]"
                style={{ transition: "filter 0.4s ease" }}
                onMouseEnter={e => e.currentTarget.style.filter = "brightness(0.556)"}
                onMouseLeave={e => e.currentTarget.style.filter = "brightness(1)"}
              >
                <div className="w-15 h-15 flex items-center justify-center">
                  <Image
                    src={cards[4].icon}
                    alt={cards[4].title}
                    width={60}
                    height={60}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-[22px] font-normal leading-snug">
                    {cards[4].title}
                  </h3>
                  <p className="text-[#FFFFFFCC] font-light text-[16px] leading-5">
                    {cards[4].description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* [col3, row2] Excel & office automation */}
            <div className="lg:col-start-3 lg:row-start-2">
              <FeatureCardItem card={cards[5]} />
            </div>

          </div>

          {/* BOTTOM ROW — two wide cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCardItem card={cards[6]} />
            <FeatureCardItem card={cards[7]} />
          </div>

        </motion.div>
      </div>
    </section>
  );
}
