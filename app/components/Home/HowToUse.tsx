"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import How1Card from "./HowtouseAnimations/How1Card";
import How2Card from "./HowtouseAnimations/How2Card";
import How3Card from "./HowtouseAnimations/How3Card";
import How4Card from "./HowtouseAnimations/How4Card";

const HowToUse = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const slidesRef = useRef<HTMLDivElement | null>(null);

  const slides = [
    {
      id: 1,
      title: "Record Your Workflow",
      description:
        "Complete your task just as you normally would, and MIRYA watches how you work clicks, keystrokes, decisions, and all.",
    },
    {
      id: 2,
      title: "Understands the Logic",
      description:
        "MIRYA observes the critical decision patterns, understands the steps it sees, and automatically builds a smart logic flow under the hood.",
    },
    {
      id: 3,
      title: "Run it Automatically",
      description:
        "Now MIRYA performs the task for you across any system, app, browser, or environment with the same intelligence and adaptability as a human.",
    },
    {
      id: 4,
      title: "Improve & Scale",
      description:
        "Customize, repeat, or expand your automation across entire teams or departments. Zero code. Zero complexity. Maximum impact.",
    },
  ];

  const slideComponents = [
    <How2Card />,
    <How1Card />,
    <How3Card />,
    <How4Card />,
  ];

  // Observe section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Auto-play only when visible
  useEffect(() => {
    if (!inView) return;

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [inView, slides.length]);

  const handleSlideClick = (index: number) => {
    setActiveSlide(index);
    if (slidesRef.current) {
      slidesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={sectionRef}
      className="px-5 sm:px-10 md:px-[72px] pt-[72px] sm:pb-[53px] max-w-[1440px] m-auto bg-[#00031c] z-100"
    >
      <div className="flex flex-col items-center justify-center">
        {/* Title Row */}
        <div className="pb-3 flex items-center justify-center gap-5">
          <Image src="/images/left-line.png" width={73} height={8} alt="line" />
          <h1 className="text-[#959EFE] text-[12px] sm:text-[16px]">
            How to Use
          </h1>
          <Image
            src="/images/right-line.png"
            width={73}
            height={8}
            alt="line"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-[30px] sm:text-[48px] font-medium text-center pb-3 sm:pb-6">
          How MIRYA Works
        </h1>

        <p className="text-[#CAC9D1] text-[14px] sm:text-[16px] text-center max-w-[721px] pb-8">
          Effortless automation starts with MIRYA — no coding, no configuration,
          no waiting. Just drag & drop your ideas, record your workflow, or
          speak your commands as your digital teammate learns and acts.
        </p>

        {/* Slider */}
        <div
          className="w-full rounded-3xl p-[0.5px]"
          style={{
            background:
              "linear-gradient(97deg, #22223C 14.82%, #22223C 25.27%, #686DDD 39.55%, #22223C 49.99%, #22223C 84.47%)",
          }}
        >
          <div className="bg-[url('/images/background-2.png')] bg-cover rounded-3xl relative overflow-hidden">
            <div
              className="flex items-center justify-center sm:pt-[58px]"
              ref={slidesRef}
            >
              <div className="relative w-full max-w-[648px] h-[286px] sm:h-[510px]">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      activeSlide === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {/* FORCE REMOUNT TO RESTART ANIMATION */}
                    <div key={activeSlide}>{slideComponents[index]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Progress + Content */}
        <div className="mt-4 sm:mt-8 w-full">
          <div className="flex items-center w-full relative">
            {slides.map((slide, index) => (
              <div key={index} className="flex-1 relative">
                <button
                  onClick={() => handleSlideClick(index)}
                  className="relative w-full h-0.5 bg-[#45557C] hover:bg-[#5565AC] rounded-full
             cursor-pointer
             after:absolute after:inset-0 after:h-[250px] after:w-full after:top-1/2 after:-translate-y-1/2
             after:cursor-pointer after:bg-transparent"
                >
                  <div
                    className={`h-full transition-all ${
                      activeSlide === index ? "bg-[#4F60FA] w-full" : "w-0"
                    }`}
                  />
                </button>

                {/* Desktop Content */}
                <div
                  className={`absolute top-12 left-0 right-0 hidden md:block transition-all ${
                    activeSlide === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  <div className="flex flex-col text-left space-y-4 relative">
                    <span className="text-[#4F60FA] text-sm">/{index + 1}</span>
                    <h3 className="text-white text-2xl font-medium">
                      {slide.title}
                    </h3>
                    <p className="text-[#CAC9D1] text-sm">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Content */}
          <div className="flex flex-col md:hidden items-center mt-6">
            <span className="text-[#4F60FA] text-sm">
              /{slides[activeSlide].id}
            </span>
            <h3 className="text-white text-xl font-medium mt-2">
              {slides[activeSlide].title}
            </h3>
            <p className="text-[#CAC9D1] text-[14px] text-center mt-1">
              {slides[activeSlide].description}
            </p>
          </div>
        </div>

        <div className="hidden sm:block h-[200px]"></div>
      </div>
    </div>
  );
};

export default HowToUse;
