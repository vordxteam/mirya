"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const HowToUse = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slidesRef = useRef<HTMLDivElement | null>(null);

  const slides = [
    {
      id: 1,
      title: "Record Your Workflow",
      description:
        "Complete your task just as you normally would, and MIRYA watches how you work clicks, keystrokes, decisions, and all.",
      image: "/images/how1.png",
    },
    {
      id: 2,
      title: "Understands the Logic",
      description:
        "MIRYA observes the critical decision patterns, understands the steps it sees, and automatically builds a smart logic flow under the hood.",
      image: "/images/how2.png",
    },
    {
      id: 3,
      title: "Run it Automatically",
      description:
        "Now MIRYA performs the task for you across any system, app, browser, or environment with the same intelligence and adaptability as a human.",
      image: "/images/how3.png",
    },
    {
      id: 4,
      title: "Improve & Scale",
      description:
        "Customize, repeat, or expand your automation across entire teams or departments. Zero code. Zero complexity. Maximum impact.",
      image: "/images/how3.png",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const handleSlideClick = (index: number) => {
    setActiveSlide(index);
    if (slidesRef.current) {
      slidesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="px-5 sm:px-10 md:px-[72px] pt-[72px] sm:pb-[53px] max-w-[1440px] m-auto">
      <div className="flex flex-col items-center justify-center">
        {/* Top Title Row */}
        <div className="pb-3 flex items-center justify-center gap-5">
          <Image src="/images/left-line.png" width={73} height={8} alt="line" />
          <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal text-center">
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
        <h1 className="text-[30px] sm:text-[48px] font-medium leading-[38px] sm:leading-14 tracking-[-1.44px] max-w-[972px] text-center pb-3 sm:pb-6">
          How MIRYA Works
        </h1>

        {/* Subheading */}
        <p className="text-[#CAC9D1] text-[14px] sm:text-[16px] font-normal leading-5 pb-5 sm:pb-10 text-center max-w-[820px]">
          Effortless automation starts with MIRYA — no coding, no configuration,
          no waiting. Just drag & drop your ideas, record your workflow, or
          speak your commands as your digital teammate learns and acts.
        </p>

        {/* Slider Image */}
        <div
          className="w-full rounded-3xl p-[0.5px]"
          style={{
            background:
              "linear-gradient(97deg, #22223C 14.82%, #22223C 25.27%, #686DDD 39.55%, #22223C 49.99%, #22223C 84.47%)",
          }}
        >
          <div className="bg-[url('/images/background-2.png')] bg-no-repeat bg-cover bg-center w-full rounded-3xl relative overflow-hidden">
            <div
              className="flex items-center justify-center sm:pt-20 relative z-10"
              ref={slidesRef}
            >
              <div className="relative w-full max-w-[648px] h-[286px]  sm:h-[440px]">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      activeSlide === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={slide.image}
                      width={648}
                      height={440}
                      alt={slide.title}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Progress bars and Content Section */}
        <div className="mt-3 sm:mt-6 w-full">
          {/* Desktop: show lines */}
          <div className=" flex items-center w-full relative">
            {slides.map((_, index) => (
              <div key={index} className="flex-1 relative">
                <button
                  onClick={() => handleSlideClick(index)}
                  className="w-full h-0.5 rounded-full overflow-hidden bg-[#45557C] cursor-pointer transition-all hover:bg-[#5565AC]"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <div
                    className={`h-full transition-all duration-300 ${
                      activeSlide === index ? "bg-[#4F60FA] w-full" : "w-0"
                    }`}
                  ></div>
                </button>

                {/* Slide Content under line */}
                <div
                  className={`absolute top-12 left-0 right-0 transition-all duration-700 ease-in-out hidden md:block ${
                    activeSlide === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  <div className="flex flex-col items-start text-left space-y-[25px] relative">
                    <div className="absolute -left-5 -top-5 z-0">
                      <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
                    </div>
                    <span className="text-[#4F60FA] text-[10px] md:text-[14px] font-normal leading-5 text-base relative z-10">
                      /{index + 1}
                    </span>
                    <h3 className="text-white text-2xl font-medium leading-7 relative z-10">
                      {slides[index].title}
                    </h3>
                    <p className="text-[#CAC9D1] text-[14px] leading-5 relative z-10">
                      {slides[index].description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: show only active content centered */}
          <div className="flex flex-col md:hidden items-center justify-center relative">
            <div className="absolute -left-5 -top-5 z-0">
              <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
            </div>
            <span className="text-[#4F60FA] text-[10px] md:text-[14px] font-normal leading-5 text-base relative z-10">
              /{slides[activeSlide].id}
            </span>
            <h3 className="text-white text-xl sm:text-2xl font-medium leading-7 text-center relative z-10">
              {slides[activeSlide].title}
            </h3>
            <p className="text-[#CAC9D1] text-[14px] sm:text-[16px] leading-5 text-center mt-2 relative z-10">
              {slides[activeSlide].description}
            </p>
          </div>
        </div>

        {/* Spacer */}
        <div className=" hidden sm:block h-[250px] md:h-[200px]"></div>
      </div>
    </div>
  );
};

export default HowToUse;
