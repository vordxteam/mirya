import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Benefit {
  id: number;
  title: string;
  img: string;
  description: string;
}
export default function Problem(): React.ReactElement {
  const { t } = useTranslation("home");

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
        delay: 0.8,
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

  const translatedBenefits = t("problem.cards", {
    returnObjects: true,
  }) as Omit<Benefit, "img">[];

  const benefits: Benefit[] = translatedBenefits.map((item) => ({
    ...item,
    img: `/images/problem${item.id}.svg`,
  }));
  return (
    <>
      <div className="flex justify-center">
        <div
          className="w-[50%] opacity-80"
          style={{
            height: "1px",
            background: "linear-gradient(90deg, rgba(0,3,28,0) 0%, #8EA0E0 50%, rgba(0,3,28,0) 100%)",
            boxShadow: "0px 0px 3px 0px rgba(142, 160, 224, 0.3)",
          }}
        ></div>
      </div>
      <div className="py-20 flex flex-col items-center relative overflow-hidden">
        <div className="bg-[#00031C]"></div>
        {/* Blue dotted light behind section title */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-0 pointer-events-none">
          <div className="rounded-[68.75px] opacity-[0.9] bg-[#5935E94D] blur-[90px] w-[458px] h-[200px]" />
        </div>
        {/* Background light between sections */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
          <div className="rounded-[68.75px] opacity-[0.6] bg-[#5935E94D] blur-[90px] w-[458px] h-[318px]"></div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={backgroundVariants}
          transition={{ duration: 0.8 }}
          className="relative"
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
        </motion.div>

        <motion.div
          className="w-full flex flex-col items-center relative px-5 z-10"
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
              src="/images/label1-new.svg"
              alt="gradient1"
              height={20}
              width={20}
            />
            <h5 className="heading-5 font-regular text-[#959EFE] text-center !text-[20px] leading-6">
              {t("problem.badge")}
            </h5>
            <Image
              src="/images/label1-new.svg"
              alt="gradient1"
              height={20}
              width={20}
            />
          </motion.div>

          <motion.div
            // ref={paragraphRef}
            className="pt-4 text-[20px]  md:text-[48px] sm:leading-[56px] leading-8 font-normal text-white max-w-[788px] text-center  relative z-10"
            variants={itemVariants}
          >
            {t("problem.title")}
          </motion.div>
          <motion.div className="relative z-10 max-w-[721px] text-center mt-4 text-[#CAC9D1] text-[14px] sm:text-[18px] leading-6" variants={containerVariants}>
            {t("problem.description")}
          </motion.div>
          <motion.div
            className="relative z-10 w-full max-w-[1280px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 lg:mt-[72px]"
            variants={containerVariants}
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.id}
                variants={benefitItemVariants}
                className="relative rounded-2xl p-[1px]"
                style={{
                  background:
                    "linear-gradient(173.77deg, #3F49D8 3.3%, #1F1B48 33.52%, #00041E 55.73%)",
                }}
              >
                <div
                  className="rounded-2xl h-full flex flex-col gap-8 px-6 py-5"
                  style={{ backgroundColor: "#050A29" }}
                >
                  <div className="w-15 h-15 flex items-center justify-center">
                    <Image
                      src={benefit.img}
                      alt={benefit.title}
                      width={60}
                      height={60}
                    />
                  </div>
                  <div>
                    <h3 className="text-white sm:text-[22px] text-[17px]  font-regular leading-[26px] mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-[#FFFFFFCC] text-[16px] leading-5 font-light">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
