import GradientButton from '@/app/ui/GradientButton'
import Image from 'next/image'
import React from 'react'

export default function AmIEligible() {
  return (
    <div className='pt-15 px-3 sm:px-20 max-w-[1440px] mx-auto space-y-6'>
      <div className='relative flex justify-between items-center'>
        {/* Gradient border for the text content only */}
        <div className='p-px w-full rounded-xl bg-[linear-gradient(180deg,#3F49D8_14.82%,#22223C_49.99%,#22223C_84.47%)]'>
          <div className="bg-[#00031c] rounded-xl w-full h-full pb-3 pt-5 sm:pt-15 px-3 lg:px-20 flex flex-col md:flex-row justify-between ">
            <div className="space-y-16">
              <div className="space-y-3">
                <h1 className="heading-1 font-medium text-[#FFFFFF]">Am I Eligible?</h1>
                <p className='heading-6 text-start font-normal text-[#CAC9D1]'>Your startup must meet the following criteria:</p>
              </div>
              <div>
                <div className="p-3 flex gap-3 items-center">
                  <Image src='/images/tick-bg2.png' alt='Tick' height={40} width={40} />
                  <p className="heading-4 font-medium text-[#F4F7FF]">Fewer than 20 employees</p>
                </div>
                <div className="p-3 flex gap-3 items-center">
                  <Image src='/images/tick-bg2.png' alt='Tick' height={40} width={40} />
                  <p className="heading-4 font-medium text-[#F4F7FF]">Less than €5M in total funding</p>
                </div>
                <div className="p-3 flex gap-3 items-center">
                  <Image src='/images/tick-bg2.png' alt='Tick' height={40} width={40} />
                  <p className="heading-4 font-medium text-[#F4F7FF] max-w-[496px]">You can use the startup discounted plan for one year, or longer if you still meet the requirements.</p>
                </div>
              </div>
            </div>
        <Image 
          src='/images/question-mark.png' 
          alt='Question' 
          width={457} 
          height={457} 
          className='overflow-hidden -mr-3'
        />
          </div>
        </div>
        
        {/* Image placed outside the gradient border but visually aligned */}
      </div>

      <div className="p-px  mx-auto rounded-[16px]" style={{
                     background:
                       "linear-gradient(0deg, #343754 0.33%, #AAB1EC 53.7%, #343754 100%)",
                   }}>
           <div className="flex flex-col lg:flex-row items-center justify-between gap-4 px-8 py-6 overflow-hidden bg-[#00031C] rounded-[16px] relative">
             <div className="space-y-3 ">
             <p className="heading-3 font-semibold text-[#F4F7FF]">Accelerate Your Operations Today</p>
             <p className="heading-6 font-normal max-w-[709px]">Automate your first workflow and experience how quickly your team can eliminate manual work and operate smarter.</p>
             </div>
              <div className="absolute top-3 left-50">
                 <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[71px]"></div>
               </div>
                <div className="absolute bottom-0 right-0">
                 <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[71px]"></div>
               </div>
               <div className='relative z-10'>
               <GradientButton label='Start Now' bgColor='#0274FE' href='/contact' textColor='#FFFFFF' />
               </div>
           </div>
           </div>
    </div>
  )
}