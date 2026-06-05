"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

interface WhyCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const whyCards: WhyCard[] = [
  {
    id: 1,
    title: "No complex IT project required",
    description:
      "Business teams automate independently. IT retains control without carrying the workload.",
    icon: "/images/whynew1.svg",
  },
  {
    id: 2,
    title: "Adoption built in",
    description:
      "Training, enablement, and change systems are part of every implementation. We deliver outcomes, not software.",
    icon: "/images/whynew2.svg",
  },
  {
    id: 3,
    title: "Works with your existing stacks",
    description:
      "No rip-and-replace. MIRYA integrates with SAP, ERP, Office, email, and legacy systems you already depend on.",
    icon: "/images/whynew3.svg",
  },
  {
    id: 4,
    title: "Digital team members, not chatbots",
    description:
      "MIRYA agents understand processes, learn from actions, and operate as productive colleagues within your org.",
    icon: "/images/whynew4.svg",
  },
  {
    id: 5,
    title: "Enterprise ready by design",
    description:
      "Security, compliance, and governance not as afterthoughts, but as foundations. Secure on premise & hybrid deployment.",
    icon: "/images/whynew5.svg",
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
  "linear-gradient(97.21deg, #22223C 14.82%, #22223C 25.27%, #686DDD 39.55%, #22223C 49.99%, #22223C 84.47%)";

function WhyCardItem({ card }: { card: WhyCard }) {
  const [stars] = React.useState(() =>
    Array.from({ length: 35 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 1.5 + 0.8,
      delay: Math.random() * 2,
    }))
  );
  const [hovered, setHovered] = React.useState(false);
  return (
    <motion.div
      variants={cardVariants}
      className="relative rounded-2xl p-[1px] h-full overflow-hidden"
      style={{ background: cardBorder }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && stars.map(s => (
        <motion.span
          key={s.id}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 1, 0], y: -30 }}
          transition={{ duration: s.duration, delay: s.delay, repeat: Infinity }}
          className="absolute rounded-full bg-white pointer-events-none z-30"
          style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
        />
      ))}
      {/* Top-right blue glow inside card */}
      <div
        className="absolute top-0 right-0 w-[160px] h-[160px] pointer-events-none z-20"
        style={{
          background: "#211F9CCC",
          filter: "blur(80px)",
          borderRadius: "50%",
          transform: "translate(30%, -30%)",
        }}
      />

      <div
        className="relative z-10 rounded-2xl h-full flex flex-col gap-8 bg-[#050A29] sm:py-8 py-4 sm:px-5 px-4"

      >
        {/* Icon */}
        <div className="flex-shrink-0">
          <Image
            src={card.icon}
            alt={card.title}
            width={56}
            height={56}
          />
        </div>

        {/* Text */}
        <div className="flex flex-col sm:gap-3 gap-1">
          <h3 className="text-white sm:text-[24px] text-[20px] font-normal leading-snug">
            {card.title}
          </h3>
          <p className="text-[#FFFFFFB2] sm:text-[16px] text-[12px] leading-[1.65]">
            {card.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function WhyMirya(): React.ReactElement {
  const { t } = useTranslation("home");
  const translatedWhyCards = t("newHome.whyMirya.cards", {
    returnObjects: true,
  }) as Array<Pick<WhyCard, "id" | "title" | "description">>;
  const localizedWhyCards = whyCards.map((card) => {
    const translatedCard = translatedWhyCards.find((item) => item.id === card.id);
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
        <div className="rounded-[68.75px] opacity-[0.6] bg-[#5935E94D] blur-[90px] w-[458px] h-[318px]" />
      </div>

      {/* Blue glow — center of section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
        <div className="rounded-[68.75px] opacity-[0.4] bg-[#5935E94D] blur-[120px] w-[600px] h-[400px]" />
      </div>

      <div
        className="relative z-10 mx-auto px-5 md:px-[71px] py-[80px]"
        style={{ maxWidth: "1440px" }}
      >

        {/* Header */}
        <motion.div
          className="flex flex-col items-center gap-4 text-center mb-[64px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div className="flex items-center gap-3" variants={itemVariants}>
            <Image src="/images/label1-new.svg" alt="" width={20} height={20} />
            <span className="text-[#959EFE] text-[20px] leading-6 font-normal tracking-widest uppercase">
              {t("newHome.whyMirya.badge")}
            </span>
            <Image src="/images/label1-new.svg" alt="" width={20} height={20} />
          </motion.div>

          <motion.h2
            className="text-white sm:text-[40px] text-[30px] md:text-[48px] font-normal leading-[1.3] sm:leading-[56px] max-w-[820px]"
            variants={itemVariants}
          >
            {t("newHome.whyMirya.title")}
          </motion.h2>

          <motion.p
            className="text-[#CAC9D1] sm:text-[18px] text-[14px] leading-6 max-w-[721px]"
            variants={itemVariants}
          >
            {t("newHome.whyMirya.description")}
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
          {/* Top row — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <WhyCardItem card={localizedWhyCards[0]} />
            <WhyCardItem card={localizedWhyCards[1]} />
            <WhyCardItem card={localizedWhyCards[2]} />
          </div>

          {/* Bottom row — 2 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <WhyCardItem card={localizedWhyCards[3]} />
            <WhyCardItem card={localizedWhyCards[4]} />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
