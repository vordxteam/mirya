import Image from "next/image";
import Link from "next/link";
import React from "react";
import GradientButton from "../ui/GradientButton";

const Footer = () => {
  return (
    <div>
      <div className="px-20 pt-[63px] pb-[52px]">
        <div className="flex items-start justify-between">
          <div className="space-y-3">
            <Image
              src="/images/footer-logo.png"
              width={199}
              height={60}
              alt="logo"
            />
            <p className="max-w-[353px] w-full text-[#CAC9D1] text-[14px] font-normal leading-5">
              Revolutionize the writing industry by making high- quality content
              generation faster
            </p>
          </div>

          <div className="flex flex-col items-start gap-[22px]">
            <div className="space-y-[1.5]">
              <h1 className="text-[#73799B] text-[16px] font-normal leading-5">
                Email
              </h1>
              <p className="text-[#F4F7FF] text-[18px] font-normal leading-6">
                mirya@gmail.com
              </p>
            </div>
            <div className="space-y-[1.5]">
              <h1 className="text-[#73799B] text-[16px] font-normal leading-5">
                Phone number
              </h1>
              <p className="text-[#F4F7FF] text-[18px] font-normal leading-6">
                +1 (208) 120-802
              </p>
            </div>
            <div className="space-y-[1.5]">
              <h1 className="text-[#73799B] text-[16px] font-normal leading-5">
                Location
              </h1>
              <p className="text-[#F4F7FF] text-[18px] font-normal leading-6">
                Los Angeles, CA
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <div className="pb-6">
              <label className="text-[#73799B] text-[16px] font-normal leading-5">
                Subcribe to your newsletter
              </label>
              <input
                type="text"
                name="email"
                className="border-t-0 border-x-0 border-b border-[#CAC9D1] h-[31px] outline-none w-full"
              />
            </div>
            <GradientButton
              label="Submit"
              href="#"
              bgColor="#00031C"
              textColor="#fff"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
