
"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function Platform(): React.ReactElement {
    const { t } = useTranslation("home");

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
                <div className="rounded-[68.75px] opacity-[0.45] bg-[#5935E94D] blur-[100px] w-[500px] h-[500px]" />
            </div>

            <div
                className="relative z-10 mx-auto px-5 md:px-[80px] sm:py-[80px] py-15"
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
                        <Image
                            src="/images/label2.svg"
                            alt="gradient1"
                            height={16}
                            width={78}
                            priority={true}
                        />

                        <span className="text-[#959EFE] text-[20px] leading-6 font-normal tracking-widest uppercase">
                            {t("newHome.platform.badge")}
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
                        className="text-white sm:text-[40px] text-[30px] md:text-[48px] font-normal leading-[1.4] tracking-[-0.01em]"
                        variants={itemVariants}
                    >
                        {t("newHome.platform.title")}
                    </motion.h2>

                    <motion.p
                        className="text-[#CAC9D1] sm:text-[18px] text-[14px] leading-[1.6] max-w-[721px]"
                        variants={itemVariants}
                    >
                        {t("newHome.platform.description")}
                    </motion.p>
                </motion.div>

                {/* Full centered platform image */}
                <motion.div
                    className="relative flex justify-center"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <Image
                        src="/images/platform-image.png"
                        alt={t("newHome.platform.imageAlt")}
                        width={1180}
                        height={620}
                        priority
                        className="w-full max-w-[1180px] h-auto object-contain"
                    />
                </motion.div>
            </div>
        </section>
    );
}