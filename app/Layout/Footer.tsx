"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import GradientButton from "../ui/GradientButton";

const Footer = () => {
  const footerLinks = [
    {
      title: "Pages",
      childs: [
        { id: 1, name: "Product", href: "/about", img : "" },
        { id: 2, name: "Contact", href: "/contact", img : "" },
        { id: 3, name: "FAQs", href: "/faq", img : "" },
        { id: 4, name: "Careers", href: "/careers", img : "" },
      ],
    },
    {
      title: "TECHNOLOGY",
      childs: [
        { id: 5, name: "MIRYA vs n8n", href: "/coming-soon", img : "" },
        { id: 6, name: "MIRYA vs n8n", href: "/coming-soon", img : "" },
        { id: 7, name: "MIRYA vs n8n", href: "/coming-soon", img : "" },
        { id: 8, name: "Join user test", href: "/user-testing", img : "" },
      ],
    },
    
    {
      title: "CONTACT",
      childs: [
        { id: 12, name: "mirya@gmail.com", href: "mailto:mirya@gmail.com", img : "/images/mail.svg" },
        { id: 13, name: "+1 (208) 120-802", href: "tel:+1 (208) 120-802" , img : "/images/phone.svg" },
        { id: 13, name: "Los Angeles, CA", href: "https://www.google.com/maps/place/Los+Angeles,+CA,+USA/@34.0206084,-118.7413971,10z/data=!3m1!4b1!4m6!3m5!1s0x80c2c75ddc27da13:0xe22fdf6f254608f4!8m2!3d34.0549076!4d-118.242643!16s%2Fm%2F030qb3t?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D" , img : "/images/location.svg" },
      ],
    },
  ];

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#00031C] w-full relative z-0 ">
      <div className="bg-[url('/images/footer-bg1.png')] bg-no-repeat bg-cover bg-bottom">
        <div className="px-5 z-0 relative sm:px-10 md:px-20 pt-[63px] pb-[52px] max-w-[1440px] m-auto">
          <div className="flex flex-col pb-5 sm:pb-[62px] border-b border-[#FFFFFF52] sm:flex-row items-center justify-between">
            <h3 className="heading-3 font-semibold text-[#FFFFFF] max-w-[320px]">
              Join our newsletter to keep up to date with us!
            </h3>
            <div className="flex flex-col sm:flex-row  gap-3">
              <div className="relative mt-3 sm:mt-0">
              <input
                type="text"
                placeholder="Enter your email"
                className=" pl-[54px] heading-6 font-normal pr-6 py-[14px] border border-[#FFFFFF3D] rounded-full w-full lg:w-[360px]"
              />
              <Image src='/images/person.svg' width={20} height={20} alt="person" className="absolute top-4 left-6"/>
              </div>
              <button
                className="
    text-white 
    font-normal
    py-3 
    px-6
    cursor-pointer 
    rounded-full 
    relative 
    overflow-hidden 
  "
                style={{
                  background:
                    "linear-gradient(#0274FE, #0274FE) padding-box, linear-gradient(135deg, #8ea0e0, #00031c) border-box",
                  border: "2px solid transparent",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>

              <div className="flex flex-col sm:flex-row w-full justify-between py-6 border-b border-b-[#FFFFFF52]">
                  <div className="flex flex-col  justify-between gap-18">
                    <Image src='/images/guarantee.png' alt="Guarantee card" height={56} width={100} />
                    <Image src='/images/footer-logo1.png' alt="Guarantee card" height={100} width={274} />
                  </div>

          <div className="flex flex-col md:flex-row mt-3 sm:mt-0  justify-end  gap-18 w-full">
           {footerLinks.map((section, index) => (
  <div key={index} className="">
    <h3 className="text-[#FFFFFF80] heading-5 font-medium leading-5 mb-4">
      {section.title}
    </h3>
    <div className="flex flex-col gap-[14px]">
      {section.childs.map((link) => (
        <div key={link.id} className="flex gap-2 items-center">
          {link.img && (
            <Image 
              src={link.img} 
              width={20} 
              height={20} 
              alt={`${link.name} icon`}
            />
          )}
          <Link
            href={link.href}
            className={`heading-5 font-normal  text-[#FFFFFF] `}
          >
            {link.name}
          </Link>
        </div>
      ))}
    </div>
  </div>
))}
          </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-10 gap-4">
            <p className=" text-[#F4F7FF] heading-6 font-normal leading-5 text-center md:text-left">
             © 2024 Copyright - MIRYA
            </p>
            <div className="flex gap-3">
            <div className="flex gap-3 border-r border-r-[#FFFFFF33] pr-2">
              <Link href='/privacy-policy' className="heading-6 font-normal white">Privacy Policy</Link>
            </div>
            <div className="flex gap-3 border-r border-r-[#FFFFFF33] pr-2">
              <Link href='/security' className="heading-6 font-normal white">Security</Link>
            </div>
            <div className="flex gap-3 border-r border-r-[#FFFFFF33] pr-2">
              <Link href='/imprint' className="heading-6 font-normal white">Imprint</Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
