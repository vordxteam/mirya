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
           About Product
          </h1>
          <Image
            src="/images/right-line.png"
            width={73}
            height={8}
            alt="line"
          />
        </div>
        <h1 className="text-[30px] sm:text-[40px] md:text-[64px] font-medium leading-10 sm:leading-[50px] md:leading-[72px] tracking-[-1.44px] max-w-[972px] w-full text-center pb-3 sm:pb-6">
         Meet MIRYA-Your Always On Automation Intelligence
        </h1>
        <p className="text-[#CAC9D1] text-[14px] font-normal leading-5 pb-5 sm:pb-10 text-center max-w-[648px]">
          Connect systems, streamline workflows, and let MIRYA handle every task with precision. No code, no interfaces—just smart automation that thinks, adapts, and executes like a human.
        </p>
        <div className="flex items-center justify-center gap-3">
          <div
            className="rounded-full p-[0.8]"
            style={{
              background:
                "linear-gradient(180deg, #463BBF 0.29%, #9C96E3 68.1%, #463BBF 100%)",
            }}
          >
            <Link
              href="#"
              className="text-[12px] leading-4 flex items-center gap-2 font-normal text-white p-3 bg-[#00031C] rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M7.58307 7.3499V5.2499C7.58307 5.08462 7.52707 4.94618 7.41507 4.83457C7.30307 4.72296 7.16463 4.66696 6.99974 4.66657C6.83485 4.66618 6.69641 4.72218 6.58441 4.83457C6.47241 4.94696 6.41641 5.0854 6.41641 5.2499V7.56865C6.41641 7.64643 6.43099 7.72187 6.46016 7.79499C6.48932 7.8681 6.53307 7.93362 6.59141 7.99157L8.22474 9.6249C8.33168 9.73185 8.4678 9.78532 8.63307 9.78532C8.79835 9.78532 8.93446 9.73185 9.04141 9.6249C9.14835 9.51796 9.20182 9.38185 9.20182 9.21657C9.20182 9.05129 9.14835 8.91518 9.04141 8.80824L7.58307 7.3499ZM6.99974 12.8332C6.27057 12.8332 5.58768 12.6948 4.95107 12.4179C4.31446 12.141 3.76029 11.7667 3.28857 11.295C2.81685 10.8233 2.44255 10.2691 2.16566 9.63249C1.88877 8.99587 1.75013 8.31279 1.74974 7.58324C1.74935 6.85368 1.88799 6.17079 2.16566 5.53457C2.44332 4.89835 2.81743 4.34418 3.28799 3.87207C3.75855 3.39996 4.31271 3.02565 4.95049 2.74915C5.58827 2.47265 6.27135 2.33401 6.99974 2.33324C7.72813 2.33246 8.41121 2.4711 9.04899 2.74915C9.68677 3.02721 10.2409 3.40151 10.7115 3.87207C11.182 4.34262 11.5564 4.89679 11.8344 5.53457C12.1125 6.17235 12.2509 6.85524 12.2497 7.58324C12.2486 8.31124 12.1101 8.99432 11.8344 9.63249C11.5587 10.2707 11.1844 10.8248 10.7115 11.295C10.2386 11.7652 9.68443 12.1395 9.04899 12.4179C8.41354 12.6963 7.73046 12.8348 6.99974 12.8332ZM1.19557 4.25824C1.08863 4.15129 1.03516 4.01518 1.03516 3.8499C1.03516 3.68462 1.08863 3.54851 1.19557 3.44157L2.85807 1.77907C2.96502 1.67212 3.10113 1.61865 3.26641 1.61865C3.43168 1.61865 3.5678 1.67212 3.67474 1.77907C3.78168 1.88601 3.83516 2.02212 3.83516 2.1874C3.83516 2.35268 3.78168 2.48879 3.67474 2.59574L2.01224 4.25824C1.9053 4.36518 1.76918 4.41865 1.60391 4.41865C1.43863 4.41865 1.30252 4.36518 1.19557 4.25824ZM12.8039 4.25824C12.697 4.36518 12.5609 4.41865 12.3956 4.41865C12.2303 4.41865 12.0942 4.36518 11.9872 4.25824L10.3247 2.59574C10.2178 2.48879 10.1643 2.35268 10.1643 2.1874C10.1643 2.02212 10.2178 1.88601 10.3247 1.77907C10.4317 1.67212 10.5678 1.61865 10.7331 1.61865C10.8984 1.61865 11.0345 1.67212 11.1414 1.77907L12.8039 3.44157C12.9109 3.54851 12.9643 3.68462 12.9643 3.8499C12.9643 4.01518 12.9109 4.15129 12.8039 4.25824ZM6.99974 11.6666C8.13724 11.6666 9.10227 11.2705 9.89482 10.4783C10.6874 9.68615 11.0835 8.72112 11.0831 7.58324C11.0827 6.44535 10.6866 5.48051 9.89482 4.68874C9.10304 3.89696 8.13802 3.50068 6.99974 3.4999C5.86146 3.49912 4.89663 3.8954 4.10524 4.68874C3.31385 5.48207 2.91757 6.4469 2.91641 7.58324C2.91524 8.71957 3.31152 9.6846 4.10524 10.4783C4.89896 11.272 5.8638 11.6681 6.99974 11.6666Z"
                  fill="url(#paint0_linear_475_3213)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_475_3213"
                    x1="7.05714"
                    y1="1.59944"
                    x2="7.02054"
                    y2="12.8527"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0029" stop-color="#463BBF" />
                    <stop offset="0.681" stop-color="#9C96E3" />
                    <stop offset="1" stop-color="#463BBF" />
                  </linearGradient>
                </defs>
              </svg>
              <span>Delivering Excellence for Over 10+ Years</span>
            </Link>
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
