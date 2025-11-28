import Image from 'next/image'
import React from 'react'
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});


export default function Cookies({onClose} : {onClose : ()=>void}) {
  return (
    <div className={`${inter.className}`}>
       <div className="rounded-[20px] border border-transparent non-rounded2 p-[1px]">
                    <div className=" rounded-[20px] gap-2 p-[19px] h-full bg-[#060B26] max-w-[426px] py-[19px] px-[23px]">
                        <div className="space-y-3">
                            <div className="flex justify-between items-end">
                 <h4 className="heading-4 font-light text-[#FFFFFF]">Cookie Settings</h4>
                 <Image onClick={onClose} src='/images/close.svg' alt='Close' height={16} width={16} className='cursor-pointer'/>
                 </div>
                    <p className="heading-7 font-normal text-[#FFFFFF]">We use cookies to personalise content, ads and to analyse our traffic. We also share information about your use of our site with our advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services.</p>
                    <div className="w-full flex items-center justify-between">
                        <div className='flex gap-2 items-center leading-[14px]'>
                        <input type="checkbox" className='h-4 w-4'/>
                        <p className=" text-[6px] sm:text-[10px] font-light text-[#FFFFFFE5]">Strictly necessary</p>
                        </div>
                        <div className='flex gap-2 items-center leading-[14px]'>
                        <input type="checkbox" className='h-4 w-4'/>
                        <p className=" text-[6px] sm:text-[10px] font-light text-[#FFFFFFE5]">Targeting only</p>
                        </div>
                        <div className='flex gap-2 items-center leading-[14px]'>
                        <input type="checkbox" className='h-4 w-4'/>
                        <p className=" text-[6px] sm:text-[10px] font-light text-[#FFFFFFE5]">Performance only</p>
                        </div>
                    </div>
                        </div>
                        <div className="pt-9 flex flex-col sm:flex-row w-full items-center justify-between gap-4">
    <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 sm:gap-2 order-2 sm:order-1">
        <button onClick={onClose} className='cursor-pointer heading-6 font-light text-[#FFFFFF] bg-linear-to-b from-[#00082F] to-[#0274FE] px-4 py-2 rounded-lg w-full sm:w-auto text-center'>Accept All</button>
    </div>
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 w-full sm:w-auto order-1 sm:order-2">
        <button onClick={onClose} className='bg-[#FFFFFF14] heading-6 font-light text-[#FFFFFFCC] cursor-pointer border border-[#FFFFFF1F] rounded-lg py-2 px-4 w-full sm:w-auto text-center'>Reject All</button>
        <button onClick={onClose} className='bg-[#FFFFFF14] heading-6 font-light text-[#FFFFFFCC] cursor-pointer border border-[#FFFFFF1F] rounded-lg py-2 px-4 w-full sm:w-auto text-center'>Manage Cookies</button>
    </div>
</div>
                </div>
              </div>
      
              <style jsx>{`
                .non-rounded2 {
                  background: linear-gradient(#4542e0, #4542e0) padding-box,
                    linear-gradient(0deg, #00031c, #8ea0e0, #00031c) border-box;
                }
              `}</style>
    </div>
  )
}
