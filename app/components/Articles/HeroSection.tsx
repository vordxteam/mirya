"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    <div>
      <div className="flex flex-col items-center justify-center pb-[75px] pt-10 px-2 md:px-10 bg-[url('/images/main-gradient.png')] bg-no-repeat bg-bottom bg-contain relative">
        <div className="absolute top-0">
          <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
        </div>
        <div className="pb-3 flex items-center gap-5">
          <Image src="/images/left-line.png" width={73} height={8} alt="line" />
          <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal leading-5 text-center">
            Articles
          </h1>
          <Image
            src="/images/right-line.png"
            width={73}
            height={8}
            alt="line"
          />
        </div>
        <h1 className="text-[30px] sm:text-[40px] md:text-[64px] font-medium leading-10 sm:leading-[50px] md:leading-[72px] tracking-[-1.44px] max-w-[824px] w-full text-center pb-3 sm:pb-6">
          Explore Ideas, Trends and Deep Research
        </h1>
        <p className="text-[#CAC9D1] text-[14px] font-normal leading-5 pb-5 sm:pb-10 text-center max-w-[580px]">
          Elevate your thinking with expert articles, AI-driven analysis, and
          the latest research tools wherever content creation meets innovation.
        </p>
        <div className="flex items-center justify-center gap-3">
          <div
            className="rounded-full p-[0.8]"
            style={{
              background:
                "linear-gradient(180deg, #463BBF 0.29%, #9C96E3 68.1%, #463BBF 100%)",
            }}
          >
            <div className="text-[12px] leading-4 flex items-center gap-2 font-normal text-white p-3 bg-[#00031C] rounded-full w-[264px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M14.0008 14L11.1074 11.1067"
                  stroke="url(#paint0_linear_546_14254)"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                  stroke="url(#paint1_linear_546_14254)"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_546_14254"
                    x1="12.568"
                    y1="11.1017"
                    x2="12.558"
                    y2="14.005"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0029" stop-color="#463BBF" />
                    <stop offset="0.681" stop-color="#9C96E3" />
                    <stop offset="1" stop-color="#463BBF" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_546_14254"
                    x1="7.38466"
                    y1="1.98173"
                    x2="7.34763"
                    y2="12.6852"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0029" stop-color="#463BBF" />
                    <stop offset="0.681" stop-color="#9C96E3" />
                    <stop offset="1" stop-color="#463BBF" />
                  </linearGradient>
                </defs>
              </svg>
              <input
                type="text"
                className="border-0 outline-none text-[12px] font-normal leading-4 placeholder:text-white"
                placeholder="Search here.."
              />
            </div>
          </div>
        </div>

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
