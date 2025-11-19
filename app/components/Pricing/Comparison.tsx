import Image from 'next/image'
import React from 'react'

export default function Comparison() {
    const general= [
        {
            id : 1,
            tile : "Basic plan",
            amount : "€ 299,",
            period : " / month"
        },
        {
            id : 1,
            tile : "Basic plan",
            amount : "€ 299,",
            period : " / month"
        },
        {
            id : 1,
            tile : "Basic plan",
            amount : "€ 299,",
            period : " / month"
        },
    ]

    const comparison = [
        {
            
        }
    ]
  return (
    <div className='pt-[60px] flex flex-col items-center relative'>
       <div className="absolute top-0 ">
                <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] z-[-1000] blur-[50px] w-[307px] h-[94px]"></div>
              </div>
              <div className="pb-3 flex items-center gap-5">
                <Image src="/images/left-line.png" width={73} height={8} alt="line" />
                <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal leading-5 text-center">
                 Pricing Comparison 
                </h1>
                <Image
                  src="/images/right-line.png"
                  width={73}
                  height={8}
                  alt="line"
                />
              </div>
              
              <h1 className="heading-1 font-medium leading-10 sm:leading-[50px] md:leading-[72px] tracking-[-1.44px] max-w-[686px] w-full text-center pb-3 sm:pb-6">
               Choose the plan that fits your workflow
              </h1>
              <p className="text-[#CAC9D1] text-[14px] font-normal leading-5 pb-5 sm:pb-10 text-center">
              Simple, transparent pricing with all the essentials you need to build, publish, and scale.
              </p>

              <div className="pt-16 grid grid-cols-8">
  <div className=" sm:col-start-2 xl:col-start-4 col-span-6">
    <div className="grid sm:grid-cols-3 gap-3 sm:gap-[97px]">
      {
        general.map((items) => (
          <div key={items.id} className="space-y-3">
            <p className="body-3 font-regular text-[#F4F7FF]">{items.tile}</p>
            <div className="flex items-end">
              <h1 className="text-[40px] font-medium leading-[48px] text-transparent bg-clip-text bg-linear-to-r from-[#789EFF] via-[#3A38AA] to-[#3A38AA]">{items.amount}</h1>
              <p className="heading-5 font-regular text-[#73799B]">{items.period}</p>
            </div>
          </div>
        ))
      }
    </div>
  </div>
</div>
    </div>
  )
}
