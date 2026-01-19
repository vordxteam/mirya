"use client";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { text } from "stream/consumers";

export default function MiryaExperts() {
  const { t } = useTranslation("hire");
  const Clients = [
    {
      id: 1,
      title: t("miryaExperts.card1.title"),
      description: t("miryaExperts.card1.disc"),
      link: "#",
      image: "/images/logo1.png",
      text: t("miryaExperts.card1.badge"),
      badges : [
        "Automation Strategy","Workflow Design","Integration","Optimization",
      ]
      
    },
    {
      id: 2,
      title: t("miryaExperts.card2.title"),
      description: t("miryaExperts.card2.disc"),
      link: "#",
      image : "/images/logo2.png",
      text: t("miryaExperts.card2.badge"),
      badges : [
        "Automation Strategy","Workflow Design","Integration","Optimization",
      ]
    },
  ];
  return (
    <div className=" px-3 sm:px-20 max-w-[1440px] mx-auto relative z-10 bg-[#00031C] overflow-hidden">
      <div className="flex justify-center relative -z-10 pointer-events-none">
        <div className="bg-linear-to-r from-[#00031C] via-[#8EA0E0] to-[#00031C] w-[50%] flex text-center h-[0.8px]"></div>
      </div>
      <div className="flex z-100 bg-[#00031C] flex-col items-center justify-center  pt-15 px-2 md:px-10  relative">
        <div className="absolute top-0 -z-10 pointer-events-none">
          <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
        </div>
        <div className="pb-3 flex items-center gap-5">
          <Image src="/images/blur5.png" width={16} height={16} alt="line" />
          <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal leading-[20px] text-center">
            {t("miryaExperts.badge")}{" "}
          </h1>
          <Image src="/images/blur5.png" width={16} height={16} alt="line" />
        </div>
        <h1 className="heading-1 font-medium w-full text-center pb-3 sm:pb-6 max-w-[777px]">
          {t("miryaExperts.title")}{" "}
        </h1>
        <p className="text-[#CAC9D1] text-[14px] font-normal leading-5 text-center max-w-[506px]">
          {t("miryaExperts.desc")}{" "}
        </p>
          <div
            className="rounded-full  p-[1.5px] mt-6"
            style={{
              background:
                "linear-gradient(180deg, #4D4D4D 0%, #FFF 49.5%, rgba(255, 255, 255, 0) 100%)",
            }}
          >
            <Link
              href="/onboarding"
              className="inline-block text-[16px] bg-[#00031C] font-normal text-white py-3 px-6  rounded-full relative z-10"
            >
              {t("miryaExperts.btnText")}{" "}
            </Link>
          </div>
           <div className="absolute -bottom-70 z-0 ">
              <div className="rounded-[68.75px] opacity-60 bg-[#5935E94D] blur-[50px] w-[458px] h-[318px]"></div>
            </div>
      </div>

      <div className=" pt-5 sm:pt-16 pb-10 sm:pb-16 grid sm:grid-cols-2 md:grid-cols-2 gap-6 services-grid">
        {Clients.map((item) => (
         <div
  key={item.id}
  style={{
    background:
      "linear-gradient(280deg, #463BBF 16.47%, #9C96E3 48.87%, #463BBF 78.17%)",
  }}
  className="p-px rounded-xl z-100" 
>
  <div
    className="p-6 space-y-3 h-full overflow-hidden relative rounded-xl z-10"
    style={{
      background: "linear-gradient(176deg, #05061D 4.66%, #0B0D2B 77.35%, #0D0C2E 93.85%)"
    }}
  >
    <Link href='all-experts' className="cursor-pointer">
              {" "}
              <div className="absolute top-10 left-50 pointer-events-none z-0">
                <div className="rounded-[68.75px] opacity-[0.6] bg-[#211F9C] blur-[50px] w-[181px] h-[94px]"></div>
              </div>
              {/* <div className="absolute top-0 right-0  "> */}
            
              <div className="flex justify-between items-center">
              <Image src={item.image} width={80} height={80} alt="Client Logo" />
                <div className="flex gap-1 p-3 border-[#CCE3FF52] border items-center rounded-full bg-[#CCE3FF1F] ">
                  <Image src='/images/verify.png' alt="Verified" height={16} width={16}/>
                  <p className="text-xs font-normal text-[#CCE3FF]">{item.text}</p>
                </div>
              </div>
              <div className="space-y-4 mt-4">
                <h3 className="heading-3 font-medium  text-[#F4F7FF]">
                  {item.title}{" "}
                </h3>
                <p className="heading-6 font-normal text-[#F4F7FF99]">
                  {item.description}{" "}
                </p>
              </div>
              <div className="flex gap-4 items-center flex-wrap mt-4">
                {item.badges.map((badge, index) => (
                  <span
                    key={index}
                    className="text-xs font-normal text-[#CCE3FF] bg-[#116AF833] px-2 py-1.5 rounded-full"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              </Link>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
