"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Partner() {
  const { t } = useTranslation("expert");

  const services = [
    {
      id: 1,
      icon: (
        <Image
          src="/images/partner1.svg"
          alt={t("partner.card1.title")}
          width={40}
          height={40}
        />
      ),
      title: t("partner.card1.title"),
      description: t("partner.card1.description"),
      span: "col-span-1",
    },
    {
      id: 2,
      icon: (
        <Image
          src="/images/partner2.svg"
          alt={t("partner.card2.title")}
          width={40}
          height={40}
        />
      ),
      title: t("partner.card2.title"),
      description: t("partner.card2.description"),
      span: "col-span-2",
    },
    {
      id: 3,
      icon: (
        <Image
          src="/images/partner3.svg"
          alt={t("partner.card3.title")}
          width={40}
          height={40}
        />
      ),
      title: t("partner.card3.title"),
      description: t("partner.card3.description"),
      span: "col-span-2",
    },
    {
      id: 4,
      icon: (
        <Image
          src="/images/partner4.svg"
          alt={t("partner.card4.title")}
          width={40}
          height={40}
        />
      ),
      title: t("partner.card4.title"),
      description: t("partner.card4.description"),
      span: "col-span-1",
    },
  ];

  return (
    <>
      <div className="px-3 sm:px-6 lg:px-20 max-w-[1440px] mx-auto relative z-10 bg-[#00031C] overflow-hidden pb-15">
        <div className="flex justify-center relative pointer-events-none">
        <div
  className="
    bg-linear-to-r from-[#00031C] via-[#8EA0E0] to-[#00031C] 
    mx-auto
    /* Width Logic */
    w-[90%]
    md:w-[70%]
    xl:w-[60%]
    
    h-[1px]       
    2xl:h-[2px]   

    flex text-center"
></div>
        </div>
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center px-2 md:px-10 relative mb-12 mt-15">
          <div className="absolute -top-10 -z-10 pointer-events-none">
            <div className="rounded-full opacity-60 bg-[#4F60FA] blur-[90px] w-[181px] h-[94px]"></div>
          </div>

          <div className="pb-3 flex items-center gap-5">
            <Image src="/images/label2.svg" width={78} height={16} alt="line" />
            <h2 className="text-[#959EFE] heading-5">{t("partner.badge")}</h2>
            <Image src="/images/label.svg" width={78} height={16} alt="line" />
          </div>

          <h1 className="heading-1 font-medium text-white text-center pb-3 sm:pb-6 max-w-[777px]">
            {t("partner.title")}
          </h1>

          <p className="text-[#CAC9D1] heading-6 font-normal text-center max-w-[548px] mb-8">
            {t("partner.description")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-6">
          {/* First Row - 1 card (1 col) + 1 card (2 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ServiceCard service={services[0]} />
            <div className="lg:col-span-2">
              <ServiceCard service={services[1]} />
            </div>
          </div>

          {/* Second Row - 1 card (2 cols) + 1 card (1 col) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ServiceCard service={services[2]} />
            </div>
            <ServiceCard service={services[3]} />
          </div>
        </div>
      </div>
    </>
  );
}

function ServiceCard({
  service,
}: {
  service: {
    id: number;
    icon: React.ReactNode;
    title: string;
    description: string;
    span?: string;
  };
}) {
  return (
  <div
  className="rounded-xl h-full p-0.5"
  style={{
    background:
      "linear-gradient(97deg, #22223C 14.82%, #22223C 25.27%, #686DDD 39.55%, #22223C 49.99%, #22223C 84.47%)",
  }}
>
  <div
    className="py-8 px-7 h-full relative rounded-[11px] overflow-hidden bg-[#050A29]"
    style={{
      backgroundImage: "linear-gradient(176deg, #05061D 4.66%, #0B0D2B 77.35%, #0D0C2E 93.85%)",
    }}
  >
    <div className="absolute right-[-383px] top-[-91px] pointer-events-none">
      <div className="rounded-full opacity-60 bg-[#211F9CCC] blur-[90px] w-[493px] h-[213px]"></div>
    </div>

    <div className="relative z-10 mb-10">
      <div className="h-[72px] w-[72px] rounded-full bg-[#050a29] border border-[#9A9DC1] flex items-center justify-center">
        {service.icon}
      </div>
    </div>

    {/* Content */}
    <div className="relative z-10 space-y-4">
      <h3 className="text-[24px] font-medium leading-7 text-[#FFFFFF]">
        {service.title}
      </h3>
      <p className="text-[14px] md:text-[16px] font-light text-[#FFFFFFB8] max-w-[733px] leading-relaxed">
        {service.description}
      </p>
    </div>
  </div>
</div>
  );
}
