"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Services() {
  const services = [
    {
      id: 1,
      icon: (
        <Image src="/images/ser1.svg" alt="service" width={40} height={40} />
      ),
      title: "Process Guardian",
      description:
        "Process guardian is a hands-on support service where MIRYA experts guide you through designing, building.",
    },
    {
      id: 2,
      icon: (
        <Image src="/images/ser2.svg" alt="service" width={40} height={40} />
      ),
      title: "2-Day MIRYA Starter Training",
      description:
        "A focused, instructor-led training experience designed to help your team master MIRYA in just two days.",
    },
    {
      id: 3,
      icon: (
        <Image src="/images/ser3.svg" alt="service" width={40} height={40} />
      ),
      title: "Compliance & Governance Setup ",
      description:
        "We set up secure, governed automation with roles, audit logs, versioning, and failover.",
    },
    {
      id: 4,
      icon: (
        <Image src="/images/ser9.svg" alt="service" width={40} height={40} />
      ),
      title: "2-day MIRYA Expert Training",
      description:
        "Advanced training for building complex, scalable workflows with logic and integrations.",
    },
    {
      id: 5,
      icon: (
        <Image src="/images/ser10.svg" alt="service" width={40} height={40} />
      ),
      title: "AI Consulting",
      description:
        "Our AI experts provide tailored consulting to identify automation potential and design AI-driven workflows.",
    },
  ];

  return (
    <>
      <div className="px-3 sm:px-6 lg:px-20 max-w-[1440px] mx-auto relative z-10 bg-[#00031C] overflow-hidden pb-15">
        <div className="flex justify-center relative pointer-events-none">
          <div className="bg-linear-to-r from-[#00031C] via-[#8EA0E0] to-[#00031C] w-[50%] flex text-center h-[0.8px]"></div>
        </div>
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center px-2 md:px-10 relative mb-12 mt-15">
          <div className="absolute -top-10 -z-10 pointer-events-none">
            <div className="rounded-full opacity-60 bg-[#4F60FA] blur-[90px] w-[181px] h-[94px]"></div>
          </div>

          <div className="pb-3 flex items-center gap-5">
            <Image src="/images/label2.svg" width={78} height={16} alt="line" />
            <h2 className="text-[#959EFE] heading-5">Services</h2>
            <Image src="/images/label.svg" width={78} height={16} alt="line" />
          </div>

          <h1 className="heading-1 font-medium text-white text-center pb-3 sm:pb-6 max-w-[777px]">
            Professional services for high impact automation
          </h1>

          <p className="text-[#CAC9D1] heading-6 font-normal  text-center max-w-[794px] mb-8">
            Whether you're launching your first workflow or scaling automation
            across your organization, MIRYA’s specialists provide the expertise
            and support to guide you every step of the way.{" "}
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-6">
          {/* First Row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Second Row - 2 cards taking full width */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.slice(3, 5).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Third Row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(5, 8).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
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
  };
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
        <div className="absolute top-2 -right-2 ">
          <div className="rounded-[68.75px]  bg-[#211F9CCC] blur-[50px] w-[181px] h-[94px]"></div>
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
