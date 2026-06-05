

"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
import GradientButton from "@/app/ui/GradientButton";
import { useTranslation } from "react-i18next";

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

const topCards = [
    {
        src: "/images/new-benefit1.png",
        alt: "Automate Everything Without Changing Anything",
        title: "Automate Everything Without Changing Anything",
        description:
            "No need to redesign workflows or rebuild systems. MIRYA works with what you already have.",
    },
    {
        src: "/images/new-benefit2.png",
        alt: "Save Hundreds of Hours",
        title: "Save Hundreds of Hours",
        description:
            "Free your team from repetitive work and let MIRYA handle all operational tasks instantly.",
    },
    {
        src: "/images/new-benefit3.png",
        alt: "Reduce Manual Errors",
        title: "Zero-Error Execution",
        description:
            "Remove human errors and inconsistencies. Your processes run the same reliable way — every time.",
    },
];

const bottomCards = [
    {
        src: "/images/new-benefit4.png",
        alt: "Scale Operations Faster",
        title: "Boost Efficiency & Productivity",
        description:
            "MIRYA automates repetitive tasks instantly, allowing your team to focus on high-value work. Processes run faster, smoother, and with consistent accuracy.",
    },
    {
        src: "/images/new-benefit5.png",
        alt: "Get Clear Process Insights",
        title: "Actionable Insights",
        description:
            "By understanding your workflows and data patterns, MIRYA highlights opportunities for improvement and provides clear insights that help you optimize performance.",
    },
];

export default function Benefits(): React.ReactElement {
    const { t } = useTranslation("home");
    const translatedTopCards = t("newHome.miryaBenefits.topCards", {
        returnObjects: true,
    }) as Array<Pick<(typeof topCards)[number], "alt" | "title" | "description">>;
    const translatedBottomCards = t("newHome.miryaBenefits.bottomCards", {
        returnObjects: true,
    }) as Array<Pick<(typeof bottomCards)[number], "alt" | "title" | "description">>;
    const localizedTopCards = topCards.map((card, index) => ({
        ...card,
        ...translatedTopCards[index],
    }));
    const localizedBottomCards = bottomCards.map((card, index) => ({
        ...card,
        ...translatedBottomCards[index],
    }));

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

            <div
                className="relative z-10 mx-auto px-5 md:px-[80px] py-[80px]"
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
                    {/* Label */}
                    <motion.div className="flex items-center gap-3" variants={itemVariants}>
                        <Image
                            src="/images/label2.svg"
                            alt="gradient1"
                            height={16}
                            width={78}
                            priority={true}
                        />
                        <span className="text-[#959EFE] text-[20px] leading-6 font-normal tracking-widest uppercase">
                            {t("newHome.miryaBenefits.badge")}
                        </span>
                        <Image
                            src="/images/label.svg"
                            alt="gradient1"
                            height={16}
                            width={78}
                            priority={true}
                        />
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        className="text-white sm:text-[40px] text-[30px] md:text-[48px] font-normal leading-[1.3] tracking-[-0.01em] max-w-[788px]"
                        variants={itemVariants}
                    >
                        {t("newHome.miryaBenefits.title")}
                    </motion.h2>

                    {/* Subtext */}
                    <motion.p
                        className="text-[#CAC9D1] sm:text-[18px] text-[14px] leading-6 max-w-[721px]"
                        variants={itemVariants}
                    >
                        {t("newHome.miryaBenefits.description")}
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div variants={itemVariants}>
                        <GradientButton
                            label={t("newHome.miryaBenefits.buttonLabel")}
                            href="/contact"
                            bgColor="#0274FE"
                            textColor="#fff"
                        />
                    </motion.div>
                </motion.div>

                {/* Cards layout */}
                <motion.div
                    className="flex flex-col gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >

                    {/* Top row — 3 cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {localizedTopCards.map((card) => (
                            <motion.div
                                key={card.title}
                                variants={cardVariants}
                                className="relative w-full"
                            >
                                <Image
                                    src={card.src}
                                    alt={card.alt}
                                    width={411}
                                    height={418}
                                    className="w-full h-auto rounded-2xl"
                                />

                                <div className="absolute sm:top-6 top-2 left-8 right-8 z-10">
                                    <h3 className="text-white text-[20px] sm:leading-6 leading-8 font-medium tracking-[-0.01em] mb-2">
                                        {card.title}
                                    </h3>
                                    <p className="sm:text-[#CAC9D1] text-[12px]  sm:text-[14px] leading-5 font-normal">
                                        {card.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom row — 2 cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {localizedBottomCards.map((card) => (
                            <motion.div
                                key={card.title}
                                variants={cardVariants}
                                className="relative w-full"
                            >
                                <Image
                                    src={card.src}
                                    alt={card.alt}
                                    width={628}
                                    height={418}
                                    className="w-full h-auto rounded-2xl"
                                />

                                <div className="absolute sm:top-6 top-2 left-8 right-8 z-10">
                                    <h3 className="text-white text-[20px]  leading-6 font-normal tracking-[-0.01em] sm:mb-2 mb-1">
                                        {card.title}
                                    </h3>
                                    <p className="sm:text-[#CAC9D1] bg-[#00031C] rounded-lg sm:rounded-none p-1 sm:p-0 sm:bg-transparent sm:text-[14px] text-[12px] leading-5 font-normal">
                                        {card.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
