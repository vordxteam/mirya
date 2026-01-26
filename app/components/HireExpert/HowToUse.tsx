"use client";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { text } from "stream/consumers";

export default function HowToUse() {
  const { t } = useTranslation("hire");
  const WorkFlow = [
    {
      id: 1,
      title:t("work.process1.title"),
      description:t("work.process1.disc"),
      link: "#",
      image: "/images/logo1.png",
      text: t("miryaExperts.card1.badge"),
      badges : [
        "Automation Strategy","Workflow Design","Integration","Optimization",
      ]
      
    },
    {
      id: 2,
      title:t("work.process2.title"),
      description:t("work.process2.disc"),
      link: "#",
      image : "/images/logo2.png",
      text: t("miryaExperts.card2.badge"),
      badges : [
        "Automation Strategy","Workflow Design","Integration","Optimization",
      ]
    },
    {
      id: 3,
      title:t("work.process3.title"),
      description:t("work.process3.disc"),
      link: "#",
      image : "/images/logo2.png",
      text: t("miryaExperts.card2.badge"),
      badges : [
        "Automation Strategy","Workflow Design","Integration","Optimization",
      ]
    },
  ];
  return (
    <div className=" px-3 sm:px-20  mx-auto relative z-10 bg-[#00031C] max-w-[1440px] overflow-hidden pb-15">
    
      <div className="flex z-100 bg-[#00031C] flex-col items-center justify-center pt-15   relative">
        {/* <div className="absolute top-0 -z-10 pointer-events-none">
          <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
        </div> */}
        <div className="pb-3 flex items-center gap-5">
          <Image src="/images/label2.svg" width={78} height={16} alt="line" />
          <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal leading-[20px] text-center">
          {t("work.badge")}
          </h1>
          <Image src="/images/label.svg" width={78} height={16} alt="line" />
        </div>
        <h1 className="heading-1 font-medium w-full text-center pb-3 sm:pb-6 max-w-[777px]">
          {t("work.title")}
        </h1>
        <p className="text-[#CAC9D1] text-[14px] font-normal leading-5 text-center max-w-[506px]">
          {t("work.disc")}
        </p>
        <div className="mt-15 flex flex-col md:flex-row justify-between items-center md:items-start relative w-full">
            <div className="hidden lg:block">
                <Image src='/images/line1.png' alt="line1" width={157} height={22} className="absolute top-41 left-[28%]"/>
                <Image src='/images/line2.png' alt="line1" width={157} height={22} className="absolute top-0 right-[26%]"/>
            </div>
        {WorkFlow.map((item) => (
  <div
    key={item.id}
    className="mb-8"
  >
   
 <div className="flex items-center justify-center mb-6">
  <span className="w-[56px] h-[56px] flex items-center justify-center rounded-full border border-[#9A9DC1] text-white text-[20px] font-medium">
   {`0${item.id}`}
  </span>
</div>


    <h3 className="text-[#FFFFFF] heading-3  font-bold mb-2 text-center">
      {item.title}
    </h3>

    <p className="text-[#FFFFFFCC] heading-5 font-normal text-center max-w-[372px]">
      {item.description}
    </p>
  </div>
))}

        </div>
           {/* <div className="absolute -bottom-30 z-0 ">
              <div className="rounded-[68.75px] opacity-60 bg-[#5935E94D] blur-[50px] w-[458px] h-[318px]"></div>
            </div> */}
      </div>

            
   
    </div>
  );
}
