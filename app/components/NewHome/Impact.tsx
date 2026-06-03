"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Impact(): React.ReactElement {
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

            {/* Blue glow — behind right image */}
            <div className="absolute top-1/2 right-[10%] -translate-y-1/2 z-0 pointer-events-none">
                <div className="rounded-full opacity-[0.55] bg-[#5935E94D] blur-[100px] w-[600px] h-[600px]" />
            </div>

            <div
                className="relative z-10 mx-auto px-5 md:px-[80px] py-[70px]"
                style={{ maxWidth: "1440px" }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">

                    {/* LEFT — content */}
                    <motion.div
                        className="flex flex-col gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {/* Label */}
                        <motion.div className="flex items-center gap-3 lg:px-16" variants={itemVariants}>
                            <Image src="/images/label1-new.svg" alt="" width={20} height={20} />
                            <span className="text-[#959EFE] text-[20px] leading-6 font-normal tracking-widest uppercase">
                                {t("newHome.impact.badge")}
                            </span>
                            <Image src="/images/label1-new.svg" alt="" width={20} height={20} />
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            className="text-white text-[40px] md:text-[48px] font-normal text-[40px] lg:leading-[56px] tracking-[-0.01em] max-w-[585px]"
                            variants={itemVariants}
                        >
                            {t("newHome.impact.title")}
                        </motion.h2>

                        {/* Subtext */}
                        <motion.p
                            className="text-[#CAC9D1] text-[18px] leading-[1.6] max-w-[585px]"
                            variants={itemVariants}
                        >
                            {t("newHome.impact.description")}
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div variants={itemVariants}>
                            <div
                                className="rounded-full p-[1px] max-w-[155px] whitespace-nowrap"
                                style={{
                                    background:
                                        "linear-gradient(180deg, #4D4D4D 0%, #FFFFFF 49.5%, #4D4D4D 100%)",
                                }}
                            >
                                <Link
                                    href="/user-testing"
                                    className="inline-block text-[16px] font-normal text-white py-3 px-6 bg-[#00031C] rounded-full"
                                >
                                    {t("newHome.impact.buttonLabel")}
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT — image */}
                    <motion.div
                        className="relative flex items-center justify-center lg:justify-end"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <Image
                            src="/images/impact-visual.png"
                            alt={t("newHome.impact.imageAlt")}
                            width={464}
                            height={524}
                            className="w-full h-auto max-w-[464px]"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
