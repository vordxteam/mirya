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
        { id: 1, name: "Product", href: "/about", img: "" },
        { id: 2, name: "Contact", href: "/contact", img: "" },
        { id: 3, name: "FAQs", href: "/faq", img: "" },
        { id: 4, name: "Careers", href: "/careers", img: "" },
      ],
    },
    {
      title: "TECHNOLOGY",
      childs: [
        { id: 5, name: "MIRYA vs n8n", href: "/coming-soon", img: "" },
        {
          id: 6,
          name: "MIRYA vs Power Automate",
          href: "/coming-soon",
          img: "",
        },
        { id: 7, name: "MIRYA vs Agentic Kit", href: "/coming-soon", img: "" },
        { id: 8, name: "Join user test", href: "/user-testing", img: "" },
      ],
    },

    {
      title: "CONTACT",
      childs: [
        {
          id: 12,
          name: "info@mirya.ai",
          href: "mailto:info@mirya.ai",
          img: "/images/mail.svg",
        },
        {
          id: 13,
          name: "+49 (711) 12120-802",
          href: "tel:+49 (711) 12120-802",
          img: "/images/phone.svg",
        },
        {
          id: 14,
          name: "Berlin, Germany",
          href: "https://maps.app.goo.gl/q62kGgSaWnV3uyhs5",
          img: "/images/location.svg",
        },
      ],
    },
  ];

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black w-full relative z-0 ">
      <div className="bg-[url('/images/footer-bg1.png')] bg-no-repeat bg-cover bg-bottom">
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="px-5 z-0 relative sm:px-10 md:px-20 pt-[63px] pb-[80px] max-w-[1440px] m-auto">
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
                <Image
                  src="/images/person.svg"
                  width={20}
                  height={20}
                  alt="person"
                  className="absolute top-4 left-6"
                />
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
            <div className="flex flex-col  justify-between sm:gap-18 gap-4">
              <Image
                src="/images/guarantee.png"
                alt="Guarantee card"
                height={56}
                width={100}
              />
              <Image
                src="/images/footer-logo1.png"
                alt="Guarantee card"
                height={100}
                width={274}
                className="w-[179px] sm:w-[274px]"
              />
            </div>

            <div className="flex flex-col md:flex-row mt-3 sm:mt-0  justify-end  gap-18 w-full">
              {footerLinks.map((section, index) => (
                <div key={index} className="">
                  <h3 className="text-[#FFFFFF80] heading-5 font-medium leading-5 mb-4">
                    {section.title}
                  </h3>
                  <div className="flex flex-col gap-5">
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
                          target={link.id === 14 ? "_blank" : ""}
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
              © 2024 Copyright - MIRYA AI Tech GmbH
            </p>
            <div className="flex gap-3">
              <div className="flex gap-3 border-r border-r-[#FFFFFF33] pr-2">
                <Link
                  href="/privacy-policy"
                  className="heading-6 font-normal white"
                >
                  Privacy Policy
                </Link>
              </div>
              <div className="flex gap-3 border-r border-r-[#FFFFFF33] pr-2">
                <Link href="/security" className="heading-6 font-normal white">
                  Security
                </Link>
              </div>
              <div className="flex gap-3 border-r border-r-[#FFFFFF33] pr-2">
                <Link href="/imprint" className="heading-6 font-normal white">
                  Imprint
                </Link>
              </div>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 cursor-pointer text-white text-[14px] leading-none font-normal"
            >
              <span>Back to Top</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="none"
              >
                <path
                  d="M8.52918 10.5301C8.46051 10.6038 8.37771 10.6629 8.28571 10.7039C8.19372 10.7448 8.0944 10.7669 7.9937 10.7687C7.893 10.7704 7.79297 10.7519 7.69958 10.7142C7.60619 10.6765 7.52136 10.6203 7.45014 10.5491C7.37892 10.4779 7.32278 10.3931 7.28505 10.2997C7.24733 10.2063 7.22881 10.1063 7.23059 10.0056C7.23236 9.90485 7.2544 9.80553 7.2954 9.71353C7.33639 9.62153 7.39549 9.53873 7.46918 9.47007L11.4692 5.47007C11.6098 5.32962 11.8004 5.25073 11.9992 5.25073C12.1979 5.25073 12.3886 5.32962 12.5292 5.47007L16.5292 9.47007C16.6029 9.53873 16.662 9.62153 16.703 9.71353C16.7439 9.80553 16.766 9.90485 16.7678 10.0056C16.7695 10.1063 16.751 10.2063 16.7133 10.2997C16.6756 10.3931 16.6194 10.4779 16.5482 10.5491C16.477 10.6203 16.3922 10.6765 16.2988 10.7142C16.2054 10.7519 16.1054 10.7704 16.0047 10.7687C15.904 10.7669 15.8046 10.7448 15.7126 10.7039C15.6206 10.6629 15.5378 10.6038 15.4692 10.5301L12.7492 7.81007V17.5001C12.7492 17.699 12.6702 17.8898 12.5295 18.0304C12.3889 18.1711 12.1981 18.2501 11.9992 18.2501C11.8003 18.2501 11.6095 18.1711 11.4688 18.0304C11.3282 17.8898 11.2492 17.699 11.2492 17.5001V7.81007L8.52918 10.5301Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
