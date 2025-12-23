"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GradientButton from "@/app/ui/GradientButton";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Benefit {
  id: number;
  title: string;
  img: string;
}

export default function MiryaDifferent(): React.ReactElement {
  const benefits: Benefit[] = [
    {
      id: 1,
      title: "No programming skills required",
      img: "/images/star-red.png",
    },
    {
      id: 2,
      title: "Interface-independent — no API needed",
      img: "/images/star-green.png",
    },
    {
      id: 3,
      title: "On-Premise or Cloud",
      img: "/images/star-yellow.png",
    },
    {
      id: 4,
      title: "Record & Automate",
      img: "/images/star-purple.png",
    },
    {
      id: 5,
      title: "Ready in 24 hours",
      img: "/images/star-blue.png",
    },
    {
      id: 7,
      title: "White Label ready",
      img: "/images/star-yellow.png",
    },
    {
      id: 8,
      title: "Drag & Drop Visual Interface",
      img: "/images/star-red.png",
    },
    {
      id: 9,
      title: "ROI in just 4–6 weeks",
      img: "/images/star-green.png",
    },
    {
      id: 10,
      title: "Analytics Dashboard",
      img: "/images/star-yellow.png",
    },
    {
      id: 11,
      title: "Virtual AI Assistant",
      img: "/images/star-purple.png",
    },
    {
      id: 12,
      title: "Autonomous Bots",
      img: "/images/star-blue.png",
    },
    {
      id: 13,
      title: "Smart PDF Reports",
      img: "/images/star-yellow.png",
    },
  ];

  const paragraphRef = useRef<HTMLDivElement>(null);

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
        start: "top 30%",

        end: "bottom 20%",

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

  const benefitItemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const backgroundVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const dashVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
  };

  const pointerVariants: Variants = {
    hidden: { opacity: 0, x: 100, y: 100 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="bg-linear-to-r from-[#00031C] via-[#8EA0E0] to-[#00031C] w-[50%] flex text-center h-px"></div>
      </div>
      <div className="py-[60px] px-5 sm:px-[60px] flex flex-col items-center relative overflow-hidden bg-[url('/images/main-gradient.png')] bg-no-repeat bg-bottom bg-contain">
        <div className="bg-[#00031C"></div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={backgroundVariants}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -top-5 left-[45%]">
            <div className="rounded-[68.75px] bg-[#4F60FA] opacity-[0.6] blur-[90px] w-[181px] h-[94px]"></div>
          </div>
          <Image
            src="/images/gradient2.png"
            alt="gradient"
            width={458}
            height={318}
            className="absolute left-[40%] bottom-[18%]"
          />
          {/* <Image
          src="/images/main-gradient.png"
          alt="gradient"
          width={1440}
          height={331}
          className="absolute bottom-0"
        /> */}
        </motion.div>

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
              What Makes MIRYA Different
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
            Unlike traditional automation tools, MIRYA doesn’t just follow
            instructions — it understands, learns, and adapts. With MIRYA, you
            don’t need APIs, dashboards, or programming knowledge. It interacts
            with your existing systems visually, mimicking human behavior, while
            delivering speed, reliability, and accuracy far beyond what manual
            work can achieve.
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
