import Image from "next/image";
import React, { useState, useCallback, useRef, useEffect } from "react";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "MIRYA has completely simplified our workflow. Our team picked it up within hours, and it runs smoothly with the systems we already use. No complicated integrations or setup time.",
    author: "Sarah Mitchell",
    role: "Product Manager",
    avatar: "/api/placeholder/40/40",
  },
  {
    id: 2,
    text: "We were able to automate repetitive tasks that used to take days. MIRYA feels intuitive, fast, and genuinely built for real teams, not just tech experts.",
    author: "James Carter",
    role: "Operations Lead",
    avatar: "/api/placeholder/40/40",
  },
  {
    id: 3,
    text: "The white-labeling option is a huge advantage. We now provide automation solutions under our brand, and our clients think we built the whole system ourselves.",
    author: "Emily Rodriguez",
    role: "Agency Owner",
    avatar: "/api/placeholder/40/40",
  },
  {
    id: 4,
    text: "This tool allowed us to scale without hiring more staff. Automation is now part of every department, and the results are visible in just weeks.",
    author: "Michael Thompson",
    role: "CEO",
    avatar: "/api/placeholder/40/40",
  },
  {
    id: 5,
    text: "Everything just works. MIRYA integrates naturally into our daily processes, and configuring automations is as easy as dragging and dropping steps.",
    author: "Laura Bennett",
    role: "Team Lead",
    avatar: "/api/placeholder/40/40",
  },
];

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );
  const containerRef = useRef<HTMLDivElement>(null);

  // Check screen size for responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize("mobile");
      } else if (width >= 768 && width < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setIsDragging(true);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const diff = clientX - startX;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;

    const swipeThreshold = screenSize === "mobile" ? 30 : 50;
    if (dragOffset < -swipeThreshold) {
      nextSlide();
    } else if (dragOffset > swipeThreshold) {
      prevSlide();
    }

    setIsDragging(false);
    setDragOffset(0);
  };

  const getSlideTransform = (index: number) => {
    const position =
      (index - currentSlide + testimonials.length) % testimonials.length;

    if (screenSize === "mobile") {
      // Mobile layout - only show current slide
      const translateX = (index - currentSlide) * 100;

      return {
        transform: `translateX(${translateX}%)`,
        opacity: index === currentSlide ? 1 : 0,
        zIndex: index === currentSlide ? 30 : 0,
        pointerEvents: index === currentSlide ? "auto" : "none",
      };
    }

    if (screenSize === "tablet") {
      // Tablet layout - simplified carousel with fewer visible cards
      let translateX = 0;
      let opacity = 0;
      let zIndex = 0;
      let scale = 1;

      switch (position) {
        case 0: // Center card
          translateX = dragOffset;
          opacity = 1;
          zIndex = 30;
          scale = 1;
          break;
        case 1: // Right card
          translateX = 120 + dragOffset * 0.3;
          opacity = 0.6;
          zIndex = 20;
          scale = 0.9;
          break;
        case testimonials.length - 1: // Left card
          translateX = -120 + dragOffset * 0.3;
          opacity = 0.6;
          zIndex = 20;
          scale = 0.9;
          break;
        default:
          translateX = 0;
          opacity = 0;
          zIndex = 0;
          scale = 0.8;
      }

      return {
        transform: `translateX(${translateX}px) scale(${scale})`,
        opacity,
        zIndex,
      };
    }

    // Desktop layout - original 3D carousel
    let translateX = 0;
    let translateY = 0;
    let rotate = 0;
    let opacity = 0;
    let zIndex = 0;
    let scale = 1;

    switch (position) {
      case 0: // Center card (front)
        translateX = dragOffset;
        translateY = 0;
        rotate = 0;
        opacity = 1;
        zIndex = 30;
        scale = 1;
        break;
      case 1: // Right card
        translateX = 200 + dragOffset * 0.3;
        translateY = 20;
        rotate = 8;
        opacity = 0.7;
        zIndex = 20;
        scale = 0.85;
        break;
      case 2: // Far right card
        translateX = 300 + dragOffset * 0.1;
        translateY = 30;
        rotate = 12;
        opacity = 0.4;
        zIndex = 10;
        scale = 0.75;
        break;
      case testimonials.length - 1: // Left card
        translateX = -200 + dragOffset * 0.3;
        translateY = 20;
        rotate = -8;
        opacity = 0.7;
        zIndex = 20;
        scale = 0.85;
        break;
      case testimonials.length - 2: // Far left card
        translateX = -300 + dragOffset * 0.1;
        translateY = 30;
        rotate = -12;
        opacity = 0.4;
        zIndex = 10;
        scale = 0.75;
        break;
      default:
        translateX = 0;
        translateY = 60;
        rotate = 0;
        opacity = 0;
        zIndex = 0;
        scale = 0.7;
    }

    return {
      transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`,
      opacity,
      zIndex,
    };
  };

  // Responsive card and container sizing
  const getCardWidth = () => {
    switch (screenSize) {
      case "mobile":
        return "w-[85vw] max-w-[320px]";
      case "tablet":
        return "w-[320px]";
      case "desktop":
        return "w-[320px]";
      default:
        return "w-[320px]";
    }
  };

  const getContainerHeight = () => {
    switch (screenSize) {
      case "mobile":
        return "h-[380px]";
      case "tablet":
        return "h-[400px]";
      case "desktop":
        return "h-[400px]";
      default:
        return "h-[400px]";
    }
  };

  const cardWidth = getCardWidth();
  const containerHeight = getContainerHeight();

  return (
    <div className="w-full pt-6 sm:pt-10 px-4 sm:px-6">
      <div className="max-w-[637px] mx-auto">
        {/* Slider Container */}
        <div
          ref={containerRef}
          className={`relative w-full mx-auto ${containerHeight} flex items-center justify-center ${
            screenSize === "mobile" ? "overflow-hidden" : "overflow-visible"
          }`}
          style={{
            cursor: isDragging ? "grabbing" : "grab",
            perspective: screenSize === "desktop" ? "1500px" : "none",
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={screenSize === "mobile" ? undefined : handleTouchStart}
          onMouseMove={screenSize === "mobile" ? undefined : handleTouchMove}
          onMouseUp={screenSize === "mobile" ? undefined : handleTouchEnd}
          onMouseLeave={screenSize === "mobile" ? undefined : handleTouchEnd}
        >
          {testimonials.map((testimonial, index) => {
            const style = getSlideTransform(index);

            return (
              <div
                key={testimonial.id}
                className={`absolute ${cardWidth} transition-all duration-500 ease-out ${
                  isDragging ? "transition-none" : ""
                } ${
                  screenSize === "mobile" ? "left-1/2 -translate-x-1/2" : ""
                }`}
                style={{
                  zIndex: style.zIndex,
                  transform: `${style.transform}`,
                  opacity: style.opacity,
                  transformStyle: "preserve-3d",
                  pointerEvents:
                    (style.pointerEvents as React.CSSProperties["pointerEvents"]) ||
                    "auto",
                }}
              >
                <div
                  className="rounded-2xl p-px"
                  style={{
                    background:
                      "linear-gradient(174deg, #3F49D8 3.3%, #1F1B48 33.52%, #00041E 55.73%)",
                  }}
                >
                  <div className="relative bg-gradient-to-b from-[#1F1B48] to-[#00041E] rounded-2xl p-4 sm:p-6 lg:p-[22px] shadow-2xl overflow-hidden h-full">
                    {/* Wavy pattern overlay */}
                    <div className="absolute z-0 -top-16 left-10">
                      <div className="rounded-[68.75px] bg-[#5935E999] blur-[70px] w-[181px] h-[94px]"></div>
                    </div>
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `repeating-linear-gradient(
                      0deg,
                      transparent,
                      transparent 2px,
                      rgba(139, 146, 184, 0.05) 2px,
                      rgba(139, 146, 184, 0.05) 4px
                    )`,
                      }}
                    ></div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col">
                      <p className="text-[#F4F7FF] font-regular mb-4 sm:mb-6 lg:mb-[111px] text-sm sm:text-[18px] leading-6 grow">
                        {testimonial.text}
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center justify-between mt-auto">
                        <div>
                          <p className="text-[#FFFFFF] font-semibold text-sm sm:text-[18px] leading-6">
                            {testimonial.author}
                          </p>
                          <p className="text-[#FFFFFF] font-light text-[12px] leading-4">
                            {testimonial.role}
                          </p>
                        </div>
                        <div className="relative w-8 h-8 sm:w-10 sm:h-10 shrink-0">
                          <Image
                            src="/images/person.png"
                            alt={`${testimonial.author}'s avatar`}
                            fill
                            className="object-cover rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8 sm:mt-12 lg:mt-[100px] mb-6 sm:mb-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-blue-500"
                  : "bg-gray-600 hover:bg-gray-500"
              } ${
                screenSize === "mobile"
                  ? "w-2 h-2 sm:w-3 sm:h-3"
                  : index === currentSlide
                  ? "w-8 sm:w-12 h-1"
                  : "w-6 sm:w-8 h-1"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
