'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import GradientButton from '@/app/ui/GradientButton'

export default function WhyMirya() {
    const reasons = [
        {
            id : "01",
            title : "Work With Impact",
            discription : "Every workflow you design, every automation you build, and every idea you contribute helps organizations remove manual work and operate smarter."
        },
        {
            id : "02",
            title : "Culture Built on Ownership",
            discription : "We believe the best ideas come from people who are trusted. At MIRYA, you’ll have autonomy, flexibility, and the freedom to take projects from concept to reality."
        },
        {
            id : "03",
            title : "Innovation",
            discription : "We don’t follow trends, we create them. You’ll work with cutting-edge AI, automation intelligence, and modern engineering patterns."
        },
    ]
  return (
    <div className=' px-3 sm:px-20 max-w-[1440px] mx-auto relative z-10 bg-[#00031C]'>
       <div
               className="flex justify-center relative"
             >
               <div className="bg-linear-to-r from-[#00031C] via-[#8EA0E0] to-[#00031C] w-[50%] flex text-center h-[0.8px]"></div>
             </div>
     <div className="flex z-100 bg-[#00031C] flex-col items-center justify-center  pt-15 px-2 md:px-10  relative">
        <div className="absolute top-0">
          <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
        </div>
        <div className="pb-3 flex items-center gap-5">
          <Image src="/images/left-line.png" width={73} height={8} alt="line" />
          <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal leading-5 text-center">
           Why MIRYA
          </h1>
          <Image
            src="/images/right-line.png"
            width={73}
            height={8}
            alt="line"
          />
        </div>
        <h1 className="heading-1 font-medium w-full text-center pb-3 sm:pb-6">
         Why People Choose MIRYA
        </h1>
        <p className="text-[#CAC9D1] text-[14px] font-normal leading-5 pb-5 sm:pb-10 text-center max-w-[547px]">
          MIRYA is where innovators, builders, and problem-solvers come together to create automation that transforms how organizations work every day.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <GradientButton
            label="Join MIRYA "
            href="#"
            bgColor="#0274FE"
            textColor="#fff"
          />
         
        </div>

       
      </div>

      <div className=" pt-5 sm:pt-16 pb-10 sm:pb-15 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {
            reasons.map((item)=>(
                <div style={{
        background:
          "linear-gradient(280deg, #00031C 16.47%, #686DDD 48.87%, #00031C 78.17%)",
      }} className='p-px'>
                    <div key={item.id} className='p-6 space-y-3 bg-[#050A29] h-full  relative rounded-xl'>
                    <p className="heading-4 font-medium text-[#F4F7FF99]">{item.id}</p>
                    <div className="space-y-2">
                    <h3 className="heading-3 font-medium  text-[#F4F7FF]">{item.title}</h3>
                    <p className="heading-6 font-normal text-[#F4F7FF99]">{item.discription}</p>
                    </div>
                    <Image src='/images/card-gradient.png' alt='gradient' width={181} height={94} className='absolute right-0 bottom-0' />
                </div>
                </div>
            ))
        }
      </div>
{/* <style jsx>{`
                .non-rounded2 {
                  background: linear-gradient(#22223C, #686DDD) padding-box,
                    linear-gradient(90deg, #22223C, #8ea0e0, #22223C) border-box;
                }
              `}</style> */}

    </div>
    
  )
}
