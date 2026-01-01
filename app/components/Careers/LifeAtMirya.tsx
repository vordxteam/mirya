"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";

export default function LifeAtMirya() {
  const images = [
    "/images/slide1.jpg",
    "/images/slide2.jpg",
    "/images/slide3.jpg",
    "/images/slide4.jpg",
  ];

  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef<number | null>(null);

  // Auto scroll animation
  const autoScroll = () => {
    if (!sliderRef.current || isDragging || isHovered) return;

    const speed = 0.5; // Adjust speed here
    sliderRef.current.scrollLeft += speed;

    // Reset to start for infinite effect
    if (sliderRef.current.scrollLeft >= sliderRef.current.scrollWidth / 2) {
      sliderRef.current.scrollLeft = 0;
    }

    animationRef.current = requestAnimationFrame(autoScroll);
  };

  // Mouse events for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current!.offsetLeft);
    setScrollLeft(sliderRef.current!.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current!.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll-fast multiplier
    sliderRef.current!.scrollLeft = scrollLeft - walk;
  };

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current!.offsetLeft);
    setScrollLeft(sliderRef.current!.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - sliderRef.current!.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    // Start auto scroll
    animationRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDragging, isHovered]);

  return (
    <div className="w-full mx-auto max-w-[1500px] overflow-hidden">
      <div className="flex justify-center relative">
        <div className="bg-linear-to-r from-[#00031C] via-[#8EA0E0] to-[#00031C] w-[50%] flex text-center h-[0.8px]"></div>
      </div>
      <div className="flex z-100 bg-[#00031C] flex-col items-center justify-center py-15  relative">
        <div className="absolute top-0 pointer-events-none z-0">
          <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
        </div>
        <div className="pb-3 flex items-center gap-5">
          <Image src="/images/label2.svg" width={78} height={16} alt="line" />
          <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal leading-5 text-center">
            Life at MIRYA
          </h1>
                   <Image src="/images/label.svg" width={78} height={16} alt="line" />
         
        </div>
        <h1 className="text-[30px] sm:text-[40px] md:text-[48px] font-medium leading-10 sm:leading-[50px] md:leading-[56px] tracking-[-1.44px] max-w-[548px] w-full text-center pb-3 sm:pb-6">
          The Culture That Drives MIRYA
        </h1>
        <p className="text-[#CAC9D1] text-[14px] font-normal leading-5 pb-5 sm:pb-10 text-center max-w-[656px]">
          At MIRYA, we believe work should feel meaningful, energizing, and
          creatively fulfilling.{" "}
        </p>

        {/* Draggable Full-Width Marquee */}
        <div
          ref={sliderRef}
          className={`w-full overflow-x-auto overflow-y-hidden scrollbar-hide ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          //   onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex gap-4 md:gap-6 min-w-max px-4 md:px-6">
            {/* First set */}
            {images.map((src, index) => (
              <div
                key={`img-${index}-1`}
                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[400px] lg:w-[450px] xl:w-[500px]"
              >
                <div className="relative overflow-hidden rounded-xl h-[180px] sm:h-[200px] md:h-[227px] w-full group">
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 400px, (max-width: 1280px) 450px, 500px"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    priority={index < 2}
                  />
                </div>
              </div>
            ))}
            {/* Second set for infinite effect */}
            {images.map((src, index) => (
              <div
                key={`img-${index}-2`}
                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[400px] lg:w-[450px] xl:w-[500px]"
              >
                <div className="relative overflow-hidden rounded-xl h-[180px] sm:h-[200px] md:h-[227px] w-full group">
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 400px, (max-width: 1280px) 450px, 500px"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add this to your global CSS or tailwind config for scrollbar hiding */}
        <style jsx>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
      <div className="flex justify-center relative">
        <div className="bg-linear-to-r from-[#00031C] via-[#8EA0E0] to-[#00031C] w-[50%] flex text-center h-[0.8px]"></div>
      </div>
    </div>
  );
}
