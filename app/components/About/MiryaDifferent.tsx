"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAbout } from "@/app/hooks/useAboutTranslation";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MiryaDifferent(): React.ReactElement {
  const paragraphRef = useRef<HTMLDivElement>(null);
  const { t } = useAbout();

  useEffect(() => {
    const element = paragraphRef.current;
    if (!element) return;

    const text = element.textContent || "";
    const words = text.split(" ");

    // 1. Prepare the spans
    element.innerHTML = "";
    const spans = words.map((word, i) => {
      const span = document.createElement("span");
      span.textContent = word + (i < words.length - 1 ? " " : "");
      span.style.color = "#FFFFFF"; // Initial color
      element.appendChild(span);
      return span;
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 80%",

        end: "bottom 40%",

        scrub: 1.5,
      },
    });

    // 3. Animate each span color
    tl.to(spans, {
      color: "#73799B",
      stagger: 0.1,
      ease: "none",
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <div className="flex justify-center">
        <div className=" bg-linear-to-r from-[#00031C] via-[#8EA0E0] to-[#00031C] w-[50%] flex text-center h-px"></div>
      </div>
      <div className="py-[60px] px-5 sm:px-[60px] flex flex-col items-center relative overflow-hidden bg-[url('/images/main-gradient.png')] bg-no-repeat bg-bottom bg-contain">
        <div className="bg-[#00031C"></div>
        <div className="absolute top-[9%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
          <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[90px] w-[181px] h-[94px]"></div>
        </div>
        <motion.div
          className="w-full flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            className=" sm:gap-5 gap-2 flex items-center justify-center"
            variants={itemVariants}
          >
            <Image
              src="/images/label2.svg"
              alt="gradient1"
              height={16}
              width={78}
            />
            <h5 className="heading-5 font-regular text-[#959EFE] text-center">
              {t("different.badge")}
            </h5>
            <Image
              src="/images/label.svg"
              alt="gradient1"
              height={16}
              width={78}
            />
          </motion.div>

          <motion.div
            ref={paragraphRef}
            className="pt-3 text-[20px] md:text-[36px] leading-8 sm:leading-[48px] font-medium text-white max-w-[1190px]          
    text-center mb-6"
            variants={itemVariants}
          >
            {t("different.title")}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
