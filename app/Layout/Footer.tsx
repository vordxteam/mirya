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
        { id: 1, name: "Product", href: "/about" },
        { id: 2, name: "Contact", href: "/contact" },
        { id: 3, name: "Articles", href: "/articles" },
        { id: 4, name: "Careers", href: "/coming-soon" },
      ],
    },
    {
      title: "TECHNOLOGY",
      childs: [
        { id: 5, name: "MIRYA vs n8n", href: "/coming-soon" },
        { id: 6, name: "MIRYA vs n8n", href: "/coming-soon" },
        { id: 7, name: "MIRYA vs n8n", href: "/coming-soon" },
        { id: 8, name: "John user test", href: "/coming-soon" },
      ],
    },
    {
      title: "LEGAL",
      childs: [
        { id: 9, name: "Privacy Policy", href: "/coming-soon" },
        { id: 10, name: "Security", href: "/coming-soon" },
        { id: 11, name: "Imprint", href: "/coming-soon" },
      ],
    },
    {
      title: "CONNECT",
      childs: [
        { id: 12, name: "Youtube", href: "https://www.youtube.com/" },
        { id: 13, name: "Twitter", href: "https://x.com" },
      ],
    },
  ];

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#00031C]">
      <div className="bg-[url('/images/footer-bg.png')] bg-no-repeat bg-cover">
        <div className="px-5 sm:px-10 md:px-20 pt-[63px] pb-[52px] max-w-[1440px] m-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-0">
            {/* Logo & Description */}
            <div className="space-y-3 flex-1">
              <Image
                src="/images/footer-logo.png"
                width={199}
                height={60}
                alt="logo"
              />
              <p className="max-w-[353px] w-full text-[#CAC9D1] text-[14px] font-normal leading-5">
                Revolutionize the writing industry by making high-quality
                content generation faster
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-[22px] flex-1">
              <div className="space-y-1.5">
                <h1 className="text-[#73799B] text-[16px] font-normal leading-5">
                  Email
                </h1>
                <Link
                  href="mailto:mirya@gmail.com"
                  className="text-[#F4F7FF] text-[18px] font-normal leading-6"
                >
                  mirya@gmail.com
                </Link>
              </div>
              <div className="space-y-1.5">
                <h1 className="text-[#73799B] text-[16px] font-normal leading-5">
                  Phone number
                </h1>
                <Link
                  href="tel:+1208120802"
                  className="text-[#F4F7FF] text-[18px] font-normal leading-6"
                >
                  +1 (208) 120-802
                </Link>
              </div>
              <div className="space-y-1.5">
                <h1 className="text-[#73799B] text-[16px] font-normal leading-5">
                  Location
                </h1>
                <Link
                  href="https://www.google.com/maps?q=Los+Angeles,+CA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F4F7FF] text-[18px] font-normal leading-6"
                >
                  Los Angeles, CA
                </Link>
              </div>
            </div>

            {/* Newsletter & Social */}
            <div className="flex flex-col flex-1 w-full max-w-[300px]">
              <div className="pb-6 w-full">
                <label className="text-[#73799B] text-[16px] font-normal leading-5">
                  Subscribe to our newsletter
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="border-t-0 border-x-0 border-b border-[#CAC9D1] h-9 outline-none w-full bg-transparent text-white px-2 mt-2"
                />
              </div>
              <div className="w-fit">
                <GradientButton
                  label="Submit"
                  href="#"
                  bgColor="#00031C"
                  textColor="#fff"
                />
              </div>
              {/* <div className="flex items-center gap-4 mt-8">
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer rounded-full w-12 h-12 flex items-center justify-center border border-[#9A9DC1] bg-transparent hover:bg-[#0274FE] transition-all"
                >
                  <Image
                    src="/images/facebook.svg"
                    width={24}
                    height={24}
                    alt="Facebook"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer rounded-full w-12 h-12 flex items-center justify-center border border-[#9A9DC1] bg-transparent hover:bg-[#0274FE] transition-all"
                >
                  <Image
                    src="/images/linkedin.svg"
                    width={24}
                    height={24}
                    alt="LinkedIn"
                  />
                </Link>
                <Link
                  href="https://www.globe.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer rounded-full w-12 h-12 flex items-center justify-center border border-[#9A9DC1] bg-transparent hover:bg-[#0274FE] transition-all"
                >
                  <Image
                    src="/images/global.svg"
                    width={24}
                    height={24}
                    alt="Website"
                  />
                </Link>
              </div> */}
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-8 pt-[58px] w-full">
            {footerLinks.map((section, index) => (
              <div key={index} className="">
                <h3 className="text-[#FFFFFF80] heading-6 font-regular leading-5 mb-4">
                  {section.title}
                </h3>
                <div className="flex flex-col gap-[14px]">
                  {section.childs.map((link) => (
                    <Link
                      key={link.id}
                      href={link.href}
                      className={`heading-6 font-regular text-[#FFFFFF] ${
                        link.name === "John user test" ? "underline" : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between mt-16 md:mt-[157px] gap-4">
            <p className="max-w-[466px] text-[#F4F7FF] text-[14px] md:text-[16px] font-normal leading-5 text-center md:text-left">
              © 2024 Copyright - Nexux | Designed by "WordPress River" | License
              | Powered by WordPress
            </p>
            <button
              onClick={handleBackToTop}
              className="cursor-pointer flex items-center gap-2 text-[#F4F7FF] text-[16px] font-normal leading-5 hover:underline"
            >
              <span>Back To Top</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 5L18 11M12 5L6 11M12 5V19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
