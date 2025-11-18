import Image from 'next/image'
import React from 'react'

export default function Indicator() {
  return (
    <div className='pt-[60px] pb-'>
        <div
        className="flex justify-center"
      >
        <div className="bg-linear-to-r from-[#00031C] via-[#8EA0E0] to-[#00031C] w-[50%] flex text-center h-[0.8px]"></div>
      </div>
      <div className="max-w-[1440px] m-auto X">
              <div className="px-5 sm:px-10 md:px-20 py-[60px] relative bg-[url('/images/bg-img.png')] bg-no-repeat bg-bottom-left ">
                <div className=" flex-col bg-[url('/images/bg-img.png')] bg-no-repeat bg-bottom-left bg-contain">
                  <div className="absolute -top-20">
                    <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
                  </div>
                  {/* Top Title Row */}
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
                   Harnessing the power of artificial intelligence to revolutionise industries and enhance human experiences.
                  </p>
                  <div className="bg-linear-to-r from-[#00031c] via-[#4349E3] to-[#00031c] w-[607px] h-px"></div>
                  <div className="mt-6 custom-border  max-w-[282px] flex flex-col gap-2">
                    <div className="flex items-center  gap-2">
                    <Image src='/images/reviews.png' alt='Reviews' width={68} height={40} />
                    <div>
                    <div className='flex gap-2'>
                      <p className="body-2 font-semibold">4.9/5</p>
                                          <Image src='/images/stars.png' alt='stars' width={120} height={24} />

                    </div>
                    <p className="heading-7 font-light ">Based on 24 reviews on Clutch</p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}
