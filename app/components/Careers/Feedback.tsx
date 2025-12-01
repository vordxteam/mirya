'use client'
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Feedback() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      image: '/images/attachment1.png',
      quote: '“At MIRYA, our purpose is simple — remove the world’s digital busywork so people can focus on creativity, strategy, and what truly matters. Every workflow we build brings us closer to a future where automation isn’t a luxury, but a natural part of how organizations operate.”',
      name: 'Dr. Orhan Tanriverdi',
      title: 'DCEO | Founder'
    },
    {
      image: '/images/attachment2.png',
      quote: 'Working with MIRYA has transformed how we approach daily operations. The automation capabilities have given us back countless hours that we now invest in strategic initiatives.',
      name: 'Dr. Mathias Fromberger',
      title: ' Member of the advisory board - legal'
    },
    {
      image: '/images/attachment1.png',
      quote: 'The intelligent insights provided by MIRYA have revolutionized our decision-making process. We can now respond to challenges faster and with greater precision than ever before.',
      name: 'areş Opran',
      title: 'Head of AI Strategy & Development '
    }
  ];

  // Auto slide functionality
  const startAutoSlide = useCallback(() => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    
    autoSlideRef.current = setInterval(() => {
      if (!isPaused && !isDragging) {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 5000); // Change slide every 5 seconds
  }, [isPaused, isDragging, slides.length]);

  // Initialize auto slide
  useEffect(() => {
    startAutoSlide();
    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, [startAutoSlide]);

  // Handle drag events
  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (event: any, info: any) => {
    setIsDragging(false);
    const swipeThreshold = 50;
    
    if (info.offset.x < -swipeThreshold) {
      // Swipe left - next slide
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    } else if (info.offset.x > swipeThreshold) {
      // Swipe right - previous slide
      setDirection(-1);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
    
    // Restart auto slide timer after manual interaction
    setTimeout(() => {
      if (!isPaused) {
        startAutoSlide();
      }
    }, 1000);
  };

  // Handle manual slide change
  const handleSlideChange = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    startAutoSlide();
  };

  return (
    <div className="flex flex-col bg-[#00031C] items-center max-w-[1440px] mx-auto py-5 sm:py-15 px-3 sm:px-20">
      <div className="pb-3 flex items-center gap-5">
        <img src="/images/left-line.png" width={73} height={8} alt="line" />
        <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal leading-5 text-center">
          Team Feedback
        </h1>
        <img src="/images/right-line.png" width={73} height={8} alt="line" />
      </div>
      <div className="space-y-3 sm:space-y-6">
        <h1 className="heading-1 font-medium max-w-[824px] w-full text-center">
          What Our Team Says
        </h1>
        <p className="text-[#CAC9D1] text-[14px] font-normal leading-5 pb-5 sm:pb-10 text-center max-w-[547px]">
          Take a deeper look at what our teams say about MIRYA.
        </p>
      </div>
      
      <div 
            className="pt-5 sm:pt-16  border border-[#116AF866] bg-[#00031C] overflow-hidden z-0  rounded-[20px] gap-20 items-center relative flex flex-col lg:flex-row py-10 px-8 w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          if (!isDragging) {
            setIsPaused(false);
          }
        }}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => {
          if (!isDragging) {
            setTimeout(() => setIsPaused(false), 1000);
          }
        }}
      >
        {/* <Image src='/images/team-gradient.png' alt='gradient' height={94} width={181} className=' right-0 opacity-100' /> */}

        <div className='bg-[#4F60FA] h-[94px] w-[181px] rounded-[64px] opacity-60  blur-[90px] absolute right-100 top-0 z-[-1]'></div>
        {/* Image Section with Drag */}
        <motion.div 
          className="max-h-[462px] overflow-hidden relative rounded-[20px] "
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              src={slides[currentSlide].image}
              alt="Attachment"
              height={462}
              width={574}
              className="object-cover"
              key={`img-${currentSlide}`}
              initial={{ opacity: 0, scale: 0.9, x: direction > 0 ? 50 : -50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: direction < 0 ? 50 : -50 }}
              transition={{
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
                x: { type: "spring", stiffness: 300, damping: 25 }
              }}
            />
          </AnimatePresence>
        </motion.div>

        {/* Content Section with Drag */}
        <motion.div 
          className="space-y-8 max-w-[558px]"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <motion.img 
            src='/images/commas.svg' 
            alt="Commas" 
            height={32} 
            width={48} 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          />
          
          <AnimatePresence mode="wait">
            <motion.p 
              className="heading-4 font-normal text-[#F4F7FF]"
              key={`quote-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {slides[currentSlide].quote}
            </motion.p>
          </AnimatePresence>

          <div className="space-y-1">
            <AnimatePresence mode="wait">
              <motion.p 
                className="heading-4 font-medium text-[#F4F7FF]"
                key={`name-${currentSlide}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {slides[currentSlide].name}
              </motion.p>
            </AnimatePresence>
            
            <AnimatePresence mode="wait">
              <motion.p 
                className="heading-5 font-normal text-[#F4F7FFCC]"
                key={`title-${currentSlide}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, delay: 0.15 }}
              >
                {slides[currentSlide].title}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex gap-1">
            {slides.map((_, idx) => (
              <motion.div
                key={idx}
                className="h-px cursor-pointer"
                initial={false}
                animate={{
                  width: idx === currentSlide ? "86px" : "29px",
                  backgroundColor: idx === currentSlide ? "#959EFE" : "#D9D9D9"
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onClick={() => handleSlideChange(idx)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}