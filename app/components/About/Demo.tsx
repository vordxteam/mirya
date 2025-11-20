'use client'

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

export default function Demo(): React.ReactElement {
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

    element.innerHTML = "";
    const spans: HTMLSpanElement[] = words.map((word, i) => {
      const span = document.createElement("span");
      span.textContent = word + (i < words.length - 1 ? " " : "");
      span.style.color = "#FFFFFF";
      span.style.display = "inline";
      element.appendChild(span);
      return span;
    });

    ScrollTrigger.create({
      trigger: element,
      start: "top 10%",
      end: "bottom 40%",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const totalSpans = spans.length;

        spans.forEach((span, index) => {
          const spanProgress = index / totalSpans;
          if (progress >= spanProgress) {
            span.style.color = "#73799B";
          } else {
            span.style.color = "#FFFFFF";
          }
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
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
      <div className="pt-[60px] py-100 pb-[229px] flex flex-col items-center relative overflow-hidden bg-[url('/images/main-gradient.png')] bg-no-repeat bg-bottom bg-contain">
        <div className="bg-[#00031C"></div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={backgroundVariants}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/gradient1.png"
            alt="gradient"
            width={181}
            height={94}
            className="absolute left-[45%] top-0"
          />
          <Image
            src="/images/gradient2.png"
            alt="gradient"
            width={458}
            height={318}
            className="absolute left-[35%] bottom-[30%]"
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
          variants={dashVariants}
          initial="hidden"
          animate="visible"
          className="absolute bottom-[60px]"
        >
          <Image src="/images/dash.png" alt="dash" width={530} height={121} />
        </motion.div>

        <motion.div
          variants={pointerVariants}
          initial="hidden"
          animate="visible"
          className="absolute bottom-[60px]"
        >
          <Image
            src="/images/gradient-pointer.png"
            alt="gradient pointer"
            width={40}
            height={42}
          />
        </motion.div>

        <motion.div
          className="w-full flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            className="flex gap-5 items-center"
            variants={itemVariants}
          >
            <Image
              src="/images/blur.svg"
              alt="gradient1"
              height={8}
              width={8}
            />
            <h5 className="heading-5 font-regular text-[#959EFE]">
              Who We Are
            </h5>
            <Image
              src="/images/blur.svg"
              alt="gradient1"
              height={8}
              width={8}
            />
          </motion.div>

          <motion.div
            ref={paragraphRef}
            className="pt-3 text-[20px] md:text-[36px] leading-12 font-medium text-white max-w-[1190px] text-center mb-6"
            variants={itemVariants}
          >
           MIRYA is more than an automation tool we are a team on a mission to make intelligent automation accessible, effortless, and reliable. We believe that technology should work for humans, not the other way around. Our platform connects and controls any system, any app, and any process, learning from your actions to execute workflows with precision and speed.
          </motion.div>

          <GradientButton
            label="Get A Demo"
            href="#"
            bgColor="black"
            textColor="#fff"
          />

          <motion.div className="pt-12" variants={containerVariants}>
            <div className="benefits-grid">
              {benefits.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="custom-border"
                  variants={benefitItemVariants}
                  custom={index}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    height={14}
                    width={14}
                    className="shrink-0"
                  />
                  <p className="benefit-text">{item.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
