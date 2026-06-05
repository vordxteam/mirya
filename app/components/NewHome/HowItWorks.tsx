"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
import GradientButton from "@/app/ui/GradientButton";
import { useTranslation } from "react-i18next";
interface Step {
    id: string;
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

const stepVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function HowMiryaWorks(): React.ReactElement {
    const { t } = useTranslation("home");
    const steps = t("newHome.howMiryaWorks.steps", { returnObjects: true }) as Step[];

    return (
        <section
            className="relative overflow-hidden bg-[#00031C]"
            style={{ maxWidth: "1440px", margin: "0 auto" }}
        >
            {/* Blue glow — left-center aligned to the left column */}
            {/* <div className="absolute top-1/2 translate-x-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
        <div className="rounded-[68.75px] opacity-[0.6] bg-[#5935E94D] blur-[90px] w-[458px] h-[318px]" />
      </div> */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
                <div className="rounded-[68.75px] opacity-[0.6] bg-[#5935E94D] blur-[90px] w-[458px] h-[318px]" />
            </div>

            {/* Bottom-right decorative square image */}
            <div className="absolute bottom-7 right-0 z-0 pointer-events-none">
                <Image
                    src="/images/how-bg-shape.png"
                    alt=""
                    width={696}
                    height={373}
                    className="opacity-60"
                />
            </div>

            {/* Main content */}
            <div className="relative z-10 px-5 md:px-[80px] sm:py-[80px] py-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-start">

                    {/* ── LEFT SIDE ── */}
                    <motion.div
                        className="flex flex-col gap-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {/* Label */}
                        <motion.div className="flex items-center gap-5 px-16" variants={itemVariants}>
                            <Image
                                src="/images/label2.svg"
                                alt="gradient1"
                                height={16}
                                width={78}
                                priority={true}
                            />
                            <h5 className="text-[#959EFE] sm:text-[20px] text-[17px] text-center leading-6 font-normal tracking-widest uppercase">
                                {t("newHome.howMiryaWorks.badge")}
                            </h5>
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
                            className="text-white text-[33px] sm:text-[40px] md:text-[48px] font-normal leading-10 md:leading-[56px] tracking-[-0.02em] sm:mt-0 mt-2 sm:text-left text-center"
                            variants={itemVariants}
                        >
                            {t("newHome.howMiryaWorks.titleLine1")}
                            <br className="hidden sm:block" />
                            {t("newHome.howMiryaWorks.titleLine2")}
                        </motion.h2>

                        {/* Subtext */}
                        <motion.p
                            className="text-[#CAC9D1] sm:text-[18px] text-[14px] leading-6 max-w-[552px] sm:text-left text-center"
                            variants={itemVariants}
                        >
                            {t("newHome.howMiryaWorks.description")}
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div variants={itemVariants} className="sm:mt-4 mt-2 flex justify-center sm:block">
                            <GradientButton
                                label={t("newHome.howMiryaWorks.buttonLabel")}
                                href="/contact"
                                bgColor="#0274FE"
                                textColor="#fff"
                            />
                        </motion.div>

                        {/* 4 Step Cards */}
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10"
                            variants={containerVariants}
                        >
                            {steps.map((step) => (
                                <motion.div key={step.id} variants={stepVariants} className="flex flex-col gap-4">
                                    {/* Number with gradient */}
                                    <span
                                        className="sm:text-[40px] text-[25px] leading-11"
                                        style={{
                                            background:
                                                "linear-gradient(180.2deg, #463BBF 0.29%, #9C96E3 68.1%, #463BBF 100%)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            backgroundClip: "text",
                                        }}
                                    >
                                        {step.id}
                                    </span>

                                    <h3 className="text-white text-[22px] xl:whitespace-nowrap font-normal leading-snug">
                                        {step.title}
                                    </h3>

                                    <p className="text-[#FFFFFFCC] sm:text-[16px] text-[14px] leading-5 font-light">
                                        {step.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* ── RIGHT SIDE ── */}
                    <motion.div
                        className="relative flex items-start justify-center lg:justify-end"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        {/* Place your full dashboard screenshot here */}
                        {/* <div
                            className="relative w-full max-w-[464px]  overflow-hidden"

                        >
                            <Image
                                src="/images/planning-feature.png"
                                alt="Planning Feature"
                                width={464}
                                height={524}
                                className="w-full h-auto"
                            />
                        </div> */}
                        <div className="relative w-full max-w-[464px]">
                            <Image
                                src="/images/planning-feature-new.png"
                                alt={t("newHome.howMiryaWorks.imageAlt")}
                                width={560}
                                height={650}
                                className="w-full h-auto"
                            />

                            <div className="absolute top-2 left-1/2 -translate-x-1/2 text-center px-8 w-full">
                                <h2 className="text-[28px] font-normal text-[#F4F7FF]">
                                    {t("newHome.howMiryaWorks.imageTitle")}
                                </h2>

                                <p className="mt-2 text-[#C6C9D4] text-[14px] leading-5 max-w-[400px] mx-auto">
                                    {t("newHome.howMiryaWorks.imageDescription")}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
