"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Jobs() {
  const { t } = useTranslation("careers");

  // 1. Explicitly cast to string[] and any[] to satisfy TypeScript
  const categories = (t("jobs.categories", { returnObjects: true }) ||
    []) as string[];
  const allJobs = (t("jobs.list", { returnObjects: true }) || []) as any[];

  // 2. Initialize with a logical fallback
  const [activeCategory, setActiveCategory] = useState<string>("");

  useEffect(() => {
    if (categories.length > 0) {
      setActiveCategory(categories[0]);
    }
  }, [t]); // Re-run if language changes

  const filteredJobs =
    activeCategory === (categories[0] || "")
      ? allJobs
      : allJobs.filter((job) => job.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  };

  const tabVariants = {
    active: {
      backgroundColor: "#1A1257",
      borderColor: "#4F60FA52",
      transition: { duration: 0.2 },
    },
    inactive: {
      backgroundColor: "#FFFFFF1F",
      border: "1px solid transparent",
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="max-w-[1440px] mx-auto overflow-hidden">
      <div className="px-3 sm:px-20">
        <div className="flex justify-center relative">
          <div className="bg-linear-to-r from-[#00031C] via-[#8EA0E0] to-[#00031C] w-[50%] flex text-center h-[0.8px]"></div>
        </div>

        <div className="flex z-100 bg-[#00031C] flex-col items-center justify-center pt-15 px-2 md:px-10 relative">
          <div className="absolute top-0 z-[-1]">
            <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
          </div>

          <div className="pb-3 flex items-center gap-5">
            <Image src="/images/label2.svg" width={78} height={16} alt="line" />
            <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal leading-5 text-center">
              {t("jobs.badge")}
            </h1>
            <Image src="/images/label.svg" width={78} height={16} alt="line" />
          </div>

          <h1 className="heading-1 font-medium max-w-[824px] w-full text-center pb-3 sm:pb-6">
            {t("jobs.title")}
          </h1>

          <p className="text-[#CAC9D1] text-[14px] font-normal leading-5 pb-5 sm:pb-10 text-center max-w-[547px]">
            {t("jobs.description")}
          </p>

          <div className="flex flex-row items-start overflow-x-auto max-w-full justify-start gap-3 scrollbar-hide px-4 py-2">
            {Array.isArray(categories) &&
              categories.map((category: string) => (
                <motion.button
                  key={category}
                  variants={tabVariants}
                  initial="inactive"
                  animate={activeCategory === category ? "active" : "inactive"}
                  onClick={() => setActiveCategory(category)}
                  className={`py-3 w-[151px] rounded-xl cursor-pointer border flex-shrink-0 text-white ${
                    activeCategory === category
                      ? "bg-[#1A1257] border-[#4F60FA52]"
                      : "bg-[#FFFFFF1F]"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="pt-5 sm:pt-16 pb-10 sm:pb-15 grid sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {Array.isArray(filteredJobs) &&
              filteredJobs.map((item: any) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  layout
                 style={{
    /* First Gradient: The solid inner background of your card */
    /* Second Gradient: Your white/gray border gradient */
    backgroundImage: `
      linear-gradient(#00031C, #00031C), 
      linear-gradient(0deg, #4D4D4D, #fff, #4D4D4D)
    `,
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
    /* 1.5px is the "sweet spot" for XL screens; it looks like 1px but never hides */
    border: "1.5px solid transparent",
  }}
                  className="p-px rounded-xl"
                >
                  <div className="p-[23px] space-y-3 bg-[#050A29] h-full relative rounded-xl">
                    <div className="space-y-3">
                      <h3 className="heading-4 font-medium text-[#F4F7FF]">
                        {item.title}
                      </h3>
                      <p className="heading-5 font-normal text-[#F4F7FF99]">
                        {item.description || item.discription}
                      </p>
                    </div>

                    {/* FIXED: Removed the nested Link component */}
                    <Link
                      href={item.link || "/jobs/engineering"}
                      className="flex justify-between pt-6 items-center group cursor-pointer"
                    >
                      <p className="heading-5 font-normal text-[#0F73FE] group-hover:underline">
                        {t("jobs.cta")}
                      </p>
                      <Image
                        src="/images/arrow-right.png"
                        alt="Arrow"
                        height={24}
                        width={24}
                      />
                    </Link>

                    <Image
                      src="/images/card-gradient2.png"
                      alt="Gradient"
                      height={71}
                      width={281}
                      className="absolute top-0 right-3 pointer-events-none z-0"
                    />
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
