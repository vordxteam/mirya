"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Cards from "./Cards";

const HeroSection = () => {
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
    <div className="">
      <div className="flex z-100 bg-[#00031c] flex-col items-center justify-center sm:pb-[75px] pt-10 px-2 md:px-10 bg-[url('/images/main-gradient.png')] bg-no-repeat bg-bottom bg-contain relative">
        <div className="absolute top-0">
          <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
        </div>
        <div className="pb-3 flex items-center gap-5">
          <Image src="/images/left-line.png" width={73} height={8} alt="line" />
          <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal leading-5 text-center">
            Contact Us
          </h1>
          <Image
            src="/images/right-line.png"
            width={73}
            height={8}
            alt="line"
          />
        </div>
        <h1 className="text-[30px] sm:text-[40px] md:text-[64px] font-medium leading-10 sm:leading-[50px] md:leading-[72px] tracking-[-1.44px] max-w-[708px] w-full text-center pb-3 sm:pb-6">
          Get in Touch With the MIRYA Team
        </h1>
        <p className="text-[#CAC9D1] text-[14px] font-normal leading-5 pb-5 sm:pb-10 text-center max-w-[580px]">
          Tell us what you’re looking for, and we’ll point you in the right direction. Fast, friendly, and tailored support always.
        </p>
       

        <div className="relative">
          <motion.div
            variants={dashVariants}
            initial="hidden"
            animate="visible"
            className=" bottom-0"
          >
            <Image src="/images/dash.png" alt="dash" width={530} height={121} />
          </motion.div>

          <motion.div
            variants={pointerVariants}
            initial="hidden"
            animate="visible"
            className="bottom-0 left-[50%] absolute"
          >
            <Image
              src="/images/gradient-pointer.png"
              alt="gradient pointer"
              width={40}
              height={42}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
