import GradientButton from "@/app/ui/GradientButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomCheckbox from "@/app/components/CustomCheckbox";
export default function ContactPage() {
  const data = [
    {
      id: 1,
      img: "/images/location.png",
      title: "Location",
      value: "Los Angeles, CA",
      link: "https://www.google.com/maps?q=Los+Angeles,+CA",
    },
    {
      id: 2,
      img: "/images/phone.png",
      title: "Phone",
      value: "+1 (208) 120-802",
      link: "tel:+1208120802",
    },
    {
      id: 3,
      img: "/images/mail.png",
      title: "Email Address",
      value: "mirya@gmail.com",
      link: "mailto:mirya@gmail.com",
    },
  ];

  return (
    <>
      <div className="flex justify-center">
        <div className="bg-linear-to-r from-[#00031C] via-[#8EA0E0] to-[#00031C] w-[50%] flex text-center h-px"></div>
      </div>
      <div className="flex flex-col items-center pt-15 relative px-3 sm:px-20 max-w-[1440px] m-auto">
        <div className="absolute top-0 z-[-1000]">
          <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[90px] w-[181px] h-[94px]"></div>
        </div>

        {/* Fixed Container */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pb-15">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-0"
            >
              <div className="non-rounded1 p-1 rounded-lg cursor-pointer transition-all hover:scale-[1.02]">
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
            </a>
          ))}
        </div> */}

        <div className="w-full flex flex-col md:flex-row justify-between gap-8 md:gap-12">
          {/* Left Section - Improved spacing */}
          <div className="flex flex-col justify-between space-y-8 md:space-y-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-[40px] leading-11 font-medium">
                  Get In Touch
                </h1>
                <p className="text-FFFFFF99 font-regular heading-4 font-regular max-w-[490px] text-[#FFFFFF99]">
                  "Have questions or need help with your order? We're here to
                  assist you every step of the way."
                </p>
              </div>
            </div>

            <div>
              <div className="space-y-3">
                <p className="heading-4 font-medium text-white">Availability</p>
                <p className="heading-5 font-medium text-white">
                  Sunday – Thursday, 9 AM to 6 PM
                </p>
              </div>
              <hr className="text-[#FFFFFF1F] my-6 max-w-[591px] w-full" />
              <p className="heading-4 font-medium text-white ">Follow us</p>

              <div className="flex gap-3 pt-5">
                <Link href="https://www.facebook.com/" target="_blank">
                  <Image
                    src="/images/facebook.png"
                    alt="facebook"
                    height={52}
                    width={52}
                  />
                </Link>

                <Link href="https://www.instagram.com/" target="_blank">
                  <Image
                    src="/images/instagram.png"
                    alt="instagram"
                    height={52}
                    width={52}
                  />
                </Link>

                <Link href="https://twitter.com/" target="_blank">
                  <Image src="/images/X.png" alt="X" height={52} width={52} />
                </Link>

                <Link href="https://www.linkedin.com/" target="_blank">
                  <Image
                    src="/images/linkedin.png"
                    alt="linkedin"
                    height={52}
                    width={52}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}

          <div
            className="rounded-lg p-px"
            style={{
              background:
                "linear-gradient(91deg, #4542E0 5.02%, #14122C 95.9%)",
            }}
          >
            <div className="bg-[#080E34] rounded-lg p-3 sm:p-7">
              <h3 className="heading-3 font-regular text-white">
                Send Message
              </h3>

              <div className="pt-6 flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Full name"
                  className="outline outline-[#FFFFFF33] p-4 rounded-lg xl:w-lg"
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
                    className="outline outline-[#FFFFFF33] p-4 rounded-lg w-full
          [&::-webkit-outer-spin-button]:appearance-none
          [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>

                <select
                  className="bg-transparent border border-[#FFFFFF33] rounded-lg px-4 py-3 text-[#FFFFFFE0] outline-none appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23FFFFFFE0' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 1rem center",
                    backgroundSize: "12px",
                  }}
                >
                  <option
                    value=""
                    disabled
                    selected
                    className="bg-[#080E34] text-gray-400"
                  >
                    Subject
                  </option>
                  <option value="general" className="bg-[#080E34]">
                    General Inquiry
                  </option>
                  <option value="support" className="bg-[#080E34]">
                    Technical Support
                  </option>
                  <option value="billing" className="bg-[#080E34]">
                    Billing Issue
                  </option>
                  <option value="feedback" className="bg-[#080E34]">
                    Feedback
                  </option>
                  <option value="other" className="bg-[#080E34]">
                    Other
                  </option>
                </select>

                <textarea
                  rows={8}
                  placeholder="Message..."
                  className="outline resize-none outline-[#FFFFFF33] p-4 rounded-lg w-full"
                />
              </div>

              <div className="mt-4">
                <CustomCheckbox
                  label={
                    <span className="flex flex-wrap gap-1">
                      <span>I agree to the</span>
                      <Link href="#" className="text-[#0274FE] underline">
                        Privacy Policy
                      </Link>
                      <span>.</span>
                    </span>
                  }
                />
              </div>

              <div
                className="rounded-full p-px w-full mt-10"
                style={{
                  background:
                    "linear-gradient(270deg, #343754 0.33%, #AAB1EC 53.7%, #343754 100%)",
                }}
              >
                <Link
                  href="#"
                  className="font-normal w-full flex items-center justify-center py-2 px-5 rounded-full"
                  style={{ background: "#0274FE", color: "white" }}
                >
                  Submit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
