"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Services() {
  const services = [
    {
      id: 1,
      icon: (
        <Image src='/images/ser1.svg' alt='service' width={40} height={40} />
      ),
      title: "Automation Strategy Design",
      description: "Define automation strategies aligned with business objectives, priorities, and long-term operational goals."
    },
    {
      id: 2,
      icon: (
        <Image src='/images/ser2.svg' alt='service' width={40} height={40} />
      ),
      title: "Workflow Optimization",
      description: "Transform complex processes into optimized, scalable MIRYA workflows built for performance and reliability."
    },
    {
      id: 3,
      icon: (
        <Image src='/images/ser3.svg' alt='service' width={40} height={40} />
      ),
      title: "Implementation & Deployment",
      description: "Build, test, and deploy production-grade automation workflows using MIRYA's intelligent execution engine."
    },
    {
      id: 4,
      icon: (
       <Image src='/images/ser4.svg' alt='service' width={40} height={40} />
      ),
      title: "Data Intelligence & Decision Logic",
      description: "Design workflows that interpret data, identify patterns, and make real-time decisions across systems."
    },
    {
      id: 5,
      icon: (
        <Image src='/images/ser5.svg' alt='service' width={40} height={40} />
      ),
      title: "Industry-Specific Automation",
      description: "Design and implement automation scenarios tailored to industry requirements and operational use cases."
    },
    {
      id: 6,
      icon: (
         <Image src='/images/ser6.svg' alt='service' width={40} height={40} />
      ),
      title: "Training & Best Practices",
      description: "Enable teams through hands-on training and establish automation standards, governance, and best practices."
    },
    {
      id: 7,
      icon: (
            <Image src='/images/ser7.svg' alt='service' width={40} height={40} />
        ),
      title: "System Integrations",
      description: "Connect and orchestrate multiple applications, APIs, and systems into unified automation workflows."
    },
    {
      id: 8,
      icon: (
        <Image src='/images/ser8.svg' alt='service' width={40} height={40} />
      ),
      title: "Performance Optimization",
      description: "Optimize workflows for speed, stability, error handling, and long-term scalability in production environments."
    }
  ];

  return (
    <div className="px-3 sm:px-6 lg:px-20 max-w-[1440px] mx-auto relative z-10 bg-[#00031C] overflow-hidden py-12">
      {/* Top divider line */}
      <div className="flex justify-center relative -z-10 pointer-events-none mb-12">
        <div className="bg-gradient-to-r from-[#00031C] via-[#8EA0E0] to-[#00031C] w-[50%] h-[0.8px]"></div>
      </div>

      {/* Header Section */}
      <div className="flex flex-col items-center justify-center px-2 md:px-10 relative mb-12">
        <div className="absolute top-0 -z-10 pointer-events-none">
          <div className="rounded-full opacity-60 bg-[#4F60FA] blur-[100px] w-[300px] h-[150px]"></div>
        </div>
        
        <div className="pb-3 flex items-center gap-5">
          <div className="w-2 h-2 rounded-full bg-[#959EFE] opacity-60"></div>
          <h2 className="text-[#959EFE] text-xs sm:text-base font-normal leading-5 text-center">
            Expert Services
          </h2>
          <div className="w-2 h-2 rounded-full bg-[#959EFE] opacity-60"></div>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white text-center pb-3 sm:pb-6 max-w-[777px]">
          What MIRYA Experts Do
        </h1>

        <p className="text-[#CAC9D1] text-sm sm:text-base font-normal leading-6 text-center max-w-[794px] mb-8">
          MIRYA experts help organizations turn ideas into production-ready automation. They combine platform expertise with real-world process knowledge to deliver workflows that are reliable, scalable, and intelligent.
        </p>

        <Link
        href='all-experts'
          className="rounded-full p-[1.5px]"
          style={{
            background: "linear-gradient(180deg, #4D4D4D 0%, #FFF 49.5%, rgba(255, 255, 255, 0) 100%)",
          }}
        >
          <button className="inline-block text-sm sm:text-base bg-black font-normal text-white py-3 px-8 rounded-full  transition-colors cursor-pointer">
            Hire MIRYA Expert
          </button>
        </Link>

        <div className="absolute -bottom-20 -z-10 pointer-events-none">
          <div className="rounded-full opacity-40 bg-[#5935E9] blur-[120px] w-[400px] h-[300px]"></div>
        </div>
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
  );
}

function ServiceCard({ service }: { service: { id: number; icon: React.ReactNode; title: string; description: string } }) {
  return (
    <div
      className="p-[1px] rounded-xl"
      style={{
        background: "linear-gradient(280deg, #22223c 10.47%, #9C96E3 58.87%, #22223c 88.17%)",
      }}
    >
      <div
        className="p-6 lg:p-8 h-full rounded-xl relative overflow-hidden"
        style={{
          background: "linear-gradient(176deg, #05061D 4.66%, #0B0D2B 77.35%, #0D0C2E 93.85%)"
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