"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

export default function AddOnServices() {
  const { t } = useTranslation("hire");

  const services = [
    {
      id: 1,
      icon: (
        <Image src="/images/ser11.svg" alt="service" width={40} height={40} />
      ),
      title: t("additionalServices.card1.title"),
      description: t("additionalServices.card1.disc"),
    },
    {
      id: 2,
      icon: (
        <Image src="/images/ser12.svg" alt="service" width={40} height={40} />
      ),
      title: t("additionalServices.card2.title"),
      description: t("additionalServices.card2.disc"),
    },
    {
      id: 3,
      icon: (
        <Image src="/images/ser13.svg" alt="service" width={40} height={40} />
      ),
      title: t("additionalServices.card3.title"),
      description: t("additionalServices.card3.disc"),
    },
    {
      id: 4,
      icon: (
        <Image src="/images/ser14.svg" alt="service" width={40} height={40} />
      ),
      title: t("additionalServices.card4.title"),
      description: t("additionalServices.card4.disc"),
    },
    {
      id: 5,
      icon: (
        <Image src="/images/ser15.svg" alt="service" width={40} height={40} />
      ),
      title: t("additionalServices.card5.title"),
      description: t("additionalServices.card5.disc"),
    },
  ];

  return (
    <>
      <div className="px-3 sm:px-6 lg:px-20 max-w-[1440px] mx-auto relative z-10 bg-[#00031C] overflow-hidden ">
        <div className="flex justify-center relative pointer-events-none">
          <div className="bg-linear-to-r from-[#00031C] via-[#8EA0E0] to-[#00031C] w-[50%] flex text-center h-[0.8px]"></div>
        </div>
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center px-2 md:px-10 relative mb-12 mt-15">
          <div className="absolute -top-10 -z-10 pointer-events-none">
            <div className="rounded-full opacity-60 bg-[#211F9CCC] blur-[90px] w-[493px] h-[213px]"></div>
          </div>

          <div className="pb-3 flex items-center gap-5">
            <Image src="/images/label2.svg" width={78} height={16} alt="line" />
            <h2 className="text-[#959EFE] heading-5">
              {t("additionalServices.badge")}
            </h2>
            <Image src="/images/label.svg" width={78} height={16} alt="line" />
          </div>

          <h1 className="heading-1 font-medium text-white text-center pb-3 sm:pb-6 max-w-[777px]">
            {t("additionalServices.title")}
          </h1>
        </div>

        {/* Services Grid */}
        <div className="space-y-6">
          {/* First Row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} row="row1" />
            ))}
          </div>

          {/* Second Row - 2 cards taking full width */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.slice(3, 5).map((service) => (
              <ServiceCard key={service.id} service={service} row="row2"  />
            ))}
          </div>

          {/* Third Row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(5, 8).map((service) => (
              <ServiceCard key={service.id} service={service} row="row1" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function ServiceCard({
  service,
  row,
}: {
  service: {
    id: number;
    icon: React.ReactNode;
    title: string;
    description: string;
  };
  row: "row1" | "row2";
}) {
  return (
    <div
      className="p-[1px] rounded-xl"
      style={{
        background:
          "linear-gradient(280deg, #22223c 10.47%, #9C96E3 58.87%, #22223c 88.17%)",
      }}
    >
      <div
        className="p-6 lg:p-8 h-full rounded-xl relative overflow-hidden"
        style={{
          background:
            "linear-gradient(176deg, #05061D 4.66%, #0B0D2B 77.35%, #0D0C2E 93.85%)",
        }}
      >
        {/* Blur background effect */}
        <div
          className="absolute"
          style={{
            top: "-41.621px",
            right: row === "row1" ? "-388.858px" : "-171.525px",
          }}
        >
          <div className="rounded-[68.75px] bg-[#211F9CCC] blur-[90px] w-[493px] h-[213px]"></div>
        </div>

        {/* Icon container */}
        <div className="relative z-10 mb-10">
          <div className=" h-[72px] w-[72px] rounded-full bg-[#050a29] border border-[#9A9DC1] flex items-center justify-center">
            {service.icon}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-4">
          <h3 className="text-xl sm:text-2xl font-medium text-[#FFFFFF]">
            {service.title}
          </h3>
          <p className="text-sm sm:text-base font-normal text-[#FFFFFF] leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}
