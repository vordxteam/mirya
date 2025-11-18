"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Stats() {
  const stats = [
    {
      id: 1,
      title: "Active Users",
      value: "245",
    },
    {
      id: 2,
      title: "Projects Completed",
      value: "87",
    },
    {
      id: 3,
      title: "New Signups",
      value: "342",
    },
    {
      id: 4,
      title: "Support Tickets",
      value: "23",
    },
  ];

  const images = [
    {
      id: 1,
      img: "/images/panda.svg",
    },
    {
      id: 2,
      img: "/images/tollbase.svg",
    },
    {
      id: 3,
      img: "/images/polltree.svg",
    },
    {
      id: 4,
      img: "/images/krate.svg",
    },
    {
      id: 5,
      img: "/images/kinva.svg",
    },
    {
      id: 6,
      img: "/images/panda.svg",
    },
  ];
  return (
    <div className=" sm:px-20 relative z-20 bg-[#00031C]">
      <div className="flex justify-center">
        <div className="bg-linear-to-r from-[#00031C] via-[#8EA0E0] to-[#00031C] w-[50%] flex text-center h-[0.8px]"></div>
      </div>
      
      <div className="max-w-[1440px] m-auto sm:py-[60px]">
        <div className="px-5 sm:px-10 md:px-20 py-[60px] relative bg-[url('/images/bg-img.png')] bg-no-repeat bg-bottom-left ">
          <div className=" flex-col bg-[url('/images/statsbg.svg')] bg-no-repeat bg-bottom-left bg-contain">
            <div className="absolute top-0 right-40 hidden md:block -z-10 rotate-45">
              <div className="rounded-[68.75px]  bg-[#4F60FA] blur-[50px] w-[533px] h-[263px] opacity-10"></div>
            </div>
            {/* Top Title Row */}
            <div className="flex flex-col xl:flex-row justify-between">
              <div className="">
                <div className="pb-3 flex items-center gap-5">
                  <Image
                    src="/images/left-line.png"
                    width={73}
                    height={8}
                    alt="line"
                  />
                  <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal text-center">
                    Indicator
                  </h1>
                  <Image
                    src="/images/right-line.png"
                    width={73}
                    height={8}
                    alt="line"
                  />
                </div>
                {/* Main Heading */}
                <h1 className="heading-1 font-medium  tracking-[-1.44px] max-w-[430px] text-start pb-3 sm:pb-6">
                  We proud to have great indicator
                </h1>
                {/* Subheading */}
                <p className="text-[#CAC9D1] heading-6 font-normal text-start max-w-[510px] pb-3 sm:pb-6">
                  Harnessing the power of artificial intelligence to
                  revolutionise industries and enhance human experiences.
                </p>
                <div className="bg-linear-to-r from-[#00031c] via-[#4349E3] to-[#00031c] sm:w-[66%] h-px"></div>
                <div className="mt-6 custom-border  max-w-[282px] flex flex-col gap-2">
                  <div className="flex items-center  gap-2">
                    <Image
                      src="/images/reviews.png"
                      alt="Reviews"
                      width={68}
                      height={40}
                    />
                    <div>
                      <div className="flex gap-2">
                        <p className="body-2 font-semibold">4.9/5</p>
                        <Image
                          src="/images/stars.png"
                          alt="stars"
                          width={120}
                          height={24}
                        />
                      </div>
                      <p className="heading-7 font-light ">
                        Based on 24 reviews on Clutch
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-16 gap-y-6">
                {stats.map((stat) => (
                  <AnimatedStat key={stat.id} stat={stat} />
                ))}
              </div>
            </div>
          </div>
          <div className="pt-16">
            <p className="heading-5 font-regular text-center text-[#CAC9D1]">
              Trusted by 500+ Brands & Companies
            </p>
            <div className="pt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 items-center sm:gap-[58px]">
              {images.map((item) => (
                <Image
                  key={item.id}
                  src={item.img}
                  alt="Client"
                  height={40}
                  width={150}
                  className="opacity-50 cursor-pointer hover:opacity-100"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// Animated Stat Component
interface AnimatedStatProps {
  stat: {
    id: number;
    title: string;
    value: string;
  };
}
function AnimatedStat({ stat }: AnimatedStatProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateValue();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated]);
  const animateValue = () => {
    const target = parseInt(stat.value);
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.round(target * progress);
      setCount(currentCount);
      if (frame === totalFrames) {
        clearInterval(counter);
        setCount(target);
      }
    }, frameDuration);
  };
  return (
    <div ref={ref}>
      <p className="text-[30px] sm:text-[40px] md:text-[80px] font-regular text-transparent bg-linear-to-r from-[#3734C1] via-[#DAC13F] to-[#DAC13F] bg-clip-text">
        {count}
      </p>
      <p className="heading-3 font-regular">{stat.title}</p>
    </div>
  );
}
