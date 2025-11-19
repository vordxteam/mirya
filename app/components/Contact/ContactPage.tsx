import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ContactPage() {
  const data = [
    {
      id: 1,
      img: "/images/location.png",
      title: "Location",
      value: "Los Angeles, CA",
    },
    {
      id: 2,
      img: "/images/phone.png",
      title: "Phone",
      value: "+1 (208) 120-802",
    },
    {
      id: 3,
      img: "/images/mail.png",
      title: "Email Address",
      value: "mirya@gmail.com",
    },
  ];
  return (
    <>
      <div className="flex justify-center">
        <div className="bg-linear-to-r from-[#00031C] via-[#8EA0E0] to-[#00031C] w-[50%] flex text-center h-px"></div>
      </div>
      <div className="flex flex-col items-center pt-15 relative px-3 sm:px-[80px] max-w-[1440px] m-auto">
        <div className="absolute top-0 z-[-1000]">
          <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
        </div>

        {/* Fixed Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pb-15">
          {data.map((item) => (
            <div key={item.id} className="flex-1 min-w-0">
              <div className="non-rounded1 p-1 rounded-lg">
                <div className="bg-[#050A29] flex flex-col rounded-lg justify-center items-center gap-5 p-7 w-full h-full">
                  <Image
                    src={item.img}
                    alt={item.title}
                    height={28}
                    width={28}
                  />
                  <p className="heading-6 font-regular text-[#FFFFFF7A]">
                    {item.title}
                  </p>
                  <p className="heading-5 font-medium text-[#FFFFFF]">
                    {item.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="py-[64px] w-full flex flex-col md:flex-row justify-between gap-8 md:gap-12">
          {/* Left Section - Improved spacing */}
          <div className="flex flex-col justify-between space-y-8 md:space-y-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-[40px] leading-[44px] font-medium">
                  Get in Touch
                </h1>
                <p className="text-FFFFFF99 font-regular heading-4 font-regular max-w-[490px] text-[#FFFFFF99]">
                  "Have questions or need help with your order? We're here to
                  assist you every step of the way."
                </p>
              </div>
            </div>

            <div className="">
              <div className="space-y-3">
                <p className="heading-4 font-medium text-white">Availability</p>
                <p className="heading-5 font-medium text-white">
                  Sunday – Thursday, 9 AM to 6 PM
                </p>
              </div>
              <p className="heading-4 font-medium text-white pt-6 mt-6">
                Follow us
              </p>
              <div className="flex gap-3 pt-5">
                <Image
                  src="/images/facebook.png"
                  alt="facebook"
                  height={52}
                  width={52}
                />
                <Image
                  src="/images/instagram.png"
                  alt="instagram"
                  height={52}
                  width={52}
                />
                <Image src="/images/X.png" alt="X" height={52} width={52} />
                <Image
                  src="/images/linkedin.png"
                  alt="linkedin"
                  height={52}
                  width={52}
                />
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className=" non-rounded1 p-1 rounded-lg">
            <div className="bg-[#080E34] rounded-lg p-7">
              <h3 className="heading-3 font-regular text-white">
                Send Message
              </h3>
              <div className="pt-6 flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Full name"
                  className="outline outline-[#FFFFFF33] p-4 rounded-lg xl:w-[512px]"
                />
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="outline outline-[#FFFFFF33] p-4 rounded-lg w-full"
                  />
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="outline appearance-auto outline-[#FFFFFF33] p-4 rounded-lg w-full [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>
                <select className="outline outline-[#FFFFFF33] p-4 rounded-lg w-full bg-transparent text-white cursor-pointer">
                  <option
                    value=""
                    disabled
                    selected
                    className="text-gray-400 bg-[#00031C]"
                  >
                    Subject
                  </option>
                  <option value="general" className="text-black bg-white">
                    General Inquiry
                  </option>
                  <option value="support" className="text-black bg-white">
                    Technical Support
                  </option>
                  <option value="billing" className="text-black bg-white">
                    Billing Issue
                  </option>
                  <option value="feedback" className="text-black bg-white">
                    Feedback
                  </option>
                  <option value="other" className="text-black bg-white">
                    Other
                  </option>
                </select>
                <textarea
                  rows={8}
                  placeholder="Message..."
                  className="outline resize-none outline-[#FFFFFF33] p-4 rounded-lg w-full [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              </div>
              <div className="flex pt-4 gap-1">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="h-5 w-5" />

                  <span className="text-white text-[12px] sm:text-[16px]">
                    I agree to the
                  </span>
                  <Link
                    href="#"
                    className="text-[#0274FE] text-[12px] sm:text-[16px] underline"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
