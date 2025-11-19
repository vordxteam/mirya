import Image from 'next/image'
import React, { useState, useCallback, useRef, useEffect } from 'react'

interface Slide {
  id: number
  title: string
  description: string
  image: string
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Planning Feature',
    description: 'Lorem ipsum dolor sit amet consectetur. Ut nulla sed id tempor a. Sagittis suscipit non eget.',
    image: '/images/slide1.png'
  },
  {
    id: 2,
    title: 'Real Time Data Tracking',
    description: 'Lorem ipsum dolor sit amet consectetur. Ut nulla sed id tempor a. Sagittis suscipit non eget.',
    image: '/images/slide2.png'
  },
  {
    id: 3,
    title: 'Gain Automation Insights',
    description: 'Lorem ipsum dolor sit amet consectetur. Ut nulla sed id tempor a. Sagittis suscipit non eget.',
    image: '/images/slide3.png'
  }
]

export default function BuildForYouSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [startX, setStartX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    setStartX(clientX)
    setIsDragging(true)
    setDragOffset(0)
  }

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    const diff = clientX - startX
    setDragOffset(diff)
  }

  const handleTouchEnd = () => {
    if (!isDragging) return

    const swipeThreshold = 50
    if (dragOffset < -swipeThreshold) {
      nextSlide()
    } else if (dragOffset > swipeThreshold) {
      prevSlide()
    }
    
    setIsDragging(false)
    setDragOffset(0)
  }

  // Auto-advance slides
//   useEffect(() => {
//     const interval = setInterval(nextSlide, 4000)
//     return () => clearInterval(interval)
//   }, [nextSlide])

  const getSlideTransform = (index: number) => {
    const position = (index - currentSlide + slides.length) % slides.length
    
    // Calculate base position without drag
    let translateX = 0
    let translateY = 0
    let opacity = 0
    let zIndex = 0
    let scale = 1

    switch (position) {
      case 0: // Current slide (front)
        translateX = dragOffset
        translateY = 0
        opacity = 1
        zIndex = 30
        scale = 1
        break
      case 1: // Next slide (behind first)
        translateX = 0
        translateY = -30
        opacity = 0.8
        zIndex = 20
        scale = 0.95
        break
      case 2: // Third slide (behind all)
        translateX = 0
        translateY = -60
        opacity = 0.6
        zIndex = 10
        scale = 0.9
        break
      default:
        translateX = 120
        translateY = 60
        opacity = 0
        zIndex = 0
        scale = 0.85
    }

    return {
      transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
      opacity,
      zIndex,
    }
  }

  return (
    <div 
      ref={containerRef}
      className="relative w-full  max-w-[464px]  h-[570px]"
      style={{
        cursor: isDragging ? 'grabbing' : 'grab'
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseMove={handleTouchMove}
      onMouseUp={handleTouchEnd}
      onMouseLeave={handleTouchEnd}
    >
      {slides.map((slide, index) => {
        const style = getSlideTransform(index)
        const isActive = index === currentSlide

        return (
          <div
            key={slide.id}
            className={`absolute top-[64px] max-w-[464px] lg:right-0 transition-all  duration-300 ease-out ${
              isDragging ? 'transition-none' : ''
            }`}
            style={{
              zIndex: style.zIndex,
              transform: style.transform,
              opacity: style.opacity,
            }}
          >
            <div className="pt-8 px-8 bg-[#050925] non-rounded overflow-hidden rounded-xl relative slide-shadow">
                <div className="absolute top-0  left-0">
            <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
          </div>
              <div className="space-y-3 pb-8">
                <h3 className="heading-2 font-regular text-[#F4F7FF]">{slide.title}</h3>
                <p className="heading-6 font-regular max-w-[400px] text-[#CAC9D1]">{slide.description}</p>
              </div>
              <Image 
                src={slide.image} 
                alt={slide.title}
                width={393} 
                height={589}  
                className="mt-[13px]"
                priority={isActive}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}