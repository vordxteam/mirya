import Image from 'next/image'
import React from 'react'
import TestimonialSlider from './TestimonialSlider'

export default function Testimonials() {
  return (
    <>
    <div className="flex justify-center z-100">
        <div className="bg-linear-to-r from-[#00031C] via-[#8EA0E0] to-[#00031C] w-[50%] flex text-center h-px"></div>
      </div>
      
    <div className='flex justify-center relative'>
        <div className="absolute top-0 z-[-10]">
            <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
          </div>
      <div className='flex flex-col items-center pt-[60px]'>
        <div className="pb-3 flex items-center justify-center gap-5">
                    <Image
                      src="/images/left-line.png"
                      width={73}
                      height={8}
                      alt="line"
                    />
                    <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal">
                      Testimonials
                    </h1>
                    <Image
                      src="/images/right-line.png"
                      width={73}
                      height={8}
                      alt="line"
                    />
                  </div>
        
                  {/* Main Heading */}
                  <h1 className="text-[26px] text-center sm:text-[40px] md:text-[48px] font-medium leading-tight tracking-[-1.44px] max-w-[668px] pb-3 sm:pb-6">
                    Reviews from customers who use MIRYA
                  </h1>
        
                  {/* Subtitle */}
                  <p className="text-[#CAC9D1] text-center text-[14px] sm:text-[16px] leading-6 max-w-[700px] pb-8 sm:pb-3">
                    Harnessing the power of artificial intelligence to revolutionize industries
and enhance human experiences.
                  </p>

                <div className='bg-[url("/images/globe.png")] bg-center bg-no-repeat bg-contain h-full w-full max-w-[637px] max-h-[619px]' >
                <TestimonialSlider/>
                </div>
                </div>
      </div>
    </>
  )
}
