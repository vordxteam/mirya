"use client";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { text } from "stream/consumers";

export default function BecomeExpert() {
  const { t } = useTranslation("hire");
  const Clients = [
    {
      id: 1,
      title:"Who Should Apply",
      description: "Professionals and organizations with strong automation experience, including consultants, agencies, system integrators, and industry specialists building real-world automation solutions.",
      link: "#",
      image: "/images/logo1.png",
      text: t("miryaExperts.card1.badge"),
      badges : [
        "Automation Strategy","Workflow Design","Integration","Optimization",
      ]
      
    },
    {
      id: 2,
      title: "Why Partner with MIRYA",
      description:"Gain official MIRYA expert recognition, access qualified customers, build credibility, and grow your services with platform enablement and training.",
      link: "#",
      image : "/images/logo2.png",
      text: t("miryaExperts.card2.badge"),
      badges : [
        "Automation Strategy","Workflow Design","Integration","Optimization",
      ]
    },
    {
      id: 4,
      title: "Why Partner with MIRYA",
      description:"Gain official MIRYA expert recognition, access qualified customers, build credibility, and grow your services with platform enablement and training.",
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
           MIRYA Expert
          </h1>
          <Image src="/images/blur5.png" width={16} height={8} alt="line" />
        </div>
        <h1 className="heading-1 font-medium w-full text-center pb-3 sm:pb-6 max-w-[777px]">
          Become a MIRYA Expert
        </h1>
        <p className="text-[#CAC9D1] text-[14px] font-normal leading-5 text-center max-w-[506px]">
          Join MIRYA’s official expert network and deliver trusted automation services to customers worldwide.
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
              className="inline-block text-[16px] bg-black font-normal text-white py-3 px-6  rounded-full z-10 relative"
            >
              Become a MIRYA Expert
            </Link>
          </div>
           <div className="absolute -bottom-30 z-0 ">
              <div className="rounded-[68.75px] opacity-60 bg-[#5935E94D] blur-[50px] w-[458px] h-[318px]"></div>
            </div>
      </div>

      <div className=" pt-5 sm:pt-16 pb-10 sm:pb-15 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Clients.map((item) => (
         <div
  key={item.id}
  style={{
    background:
  "linear-gradient(280deg, transparent 45%, #656ad9 65%, transparent 75%)",
  }}
  className="p-px rounded-xl z-100" 
>
  <div
    className="p-6 space-y-3 h-full overflow-hidden relative rounded-xl z-10"
    style={{
      background: "linear-gradient(176deg, #05061D 4.66%, #0B0D2B 77.35%, #0D0C2E 93.85%)"
    }}
  >
              {" "}
              <div className="absolute bottom-0 right-0 pointer-events-none z-0">
                <div className="rounded-[68.75px] opacity-[0.6] bg-[#211F9C] blur-[50px] w-[181px] h-[94px]"></div>
              </div>
              {/* <div className="absolute top-0 right-0  "> */}
            
                <p className="heading-4 text-[#F4F7FF99]">{`0${item.id}`}</p>              
              <div className="space-y-2 mt-3">
                <h3 className="heading-3 font-semibold  text-[#F4F7FF]">
                  {item.title}{" "}
                </h3>
                <p className="heading-6 font-normal text-[#F4F7FF99]">
                  {item.description}{" "}
                </p>
              </div>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
