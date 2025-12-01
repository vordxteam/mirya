"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Form = () => {
  const paragraphRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = paragraphRef.current;
    if (!element) return;

    const text = element.textContent || "";
    const words = text.split(" ");

    element.innerHTML = "";
    const spans: HTMLSpanElement[] = words.map((word, i) => {
      const span = document.createElement("span");
      span.textContent = word + (i < words.length - 1 ? " " : "");
      span.style.color = "#FFFFFF";
      span.style.display = "inline";
      element.appendChild(span);
      return span;
    });

    ScrollTrigger.create({
      trigger: element,
      start: "top 10%",
      end: "bottom 40%",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const totalSpans = spans.length;

        spans.forEach((span, index) => {
          const spanProgress = index / totalSpans;
          if (progress >= spanProgress) {
            span.style.color = "#73799B";
          } else {
            span.style.color = "#FFFFFF";
          }
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const dashVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
  };

  const pointerVariants: Variants = {
    hidden: { opacity: 0, x: 100, y: 100 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <div className=" px-3 sm:px-20">
      <div className="flex flex-col items-center justify-center  pt-10 px-2 md:px-10  relative">
        <div className="absolute top-0">
          <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
        </div>
        <div className="pb-3 flex items-center gap-5">
          <Image src="/images/left-line.png" width={73} height={8} alt="line" />
          <Link href='/enquiry-form' className="flex gap-1 items-center z-10">
            <Image src='/images/left-blue.svg' alt="Go back" height={24} width={24} />
          <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal leading-5 text-center">
            Go Back
          </h1>
          </Link>
          <Image
            src="/images/right-line.png"
            width={73}
            height={8}
            alt="line"
          />
        </div>
        <h1 className="heading-1 font-medium tracking-[-1.44px] max-w-[972px] w-full text-center pb-3 sm:pb-6">
         Talk To Our Sales Team
        </h1>
        <p className="text-[#CAC9D1] text-[14px] font-normal leading-5 pb-5 sm:pb-8 text-center max-w-[580px]">
          Interested in Premium Support, MIRYA Embed, or any of our paid solutions?
Share a few details and our team will get back to you with tailored guidance.
        </p>
       

       
      </div>
       <div className="px-4 sm:px-8 py-6 space-y-10 bg-[#080E34] rounded-lg max-w-[1280px] mx-auto">
      <h1 className="text-[25px] sm:text-[32px] font-medium leading-[36px]">Fill out the details below.</h1>
      
      {/* Personal Details Section */}
      <div className="space-y-4">
        <h2 className="heading-3 font-normal">Personal Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="First name"
            className="bg-transparent border border-[#FFFFFF33] rounded-lg px-4 py-3 text-white placeholder:text-[#FFFFFFE0] outline-none focus:border-[#0274FE]"
          />
          <input
            type="text"
            placeholder="Last name"
            className="bg-transparent border border-[#FFFFFF33] rounded-lg px-4 py-3 text-white placeholder:text-[#FFFFFFE0] outline-none focus:border-[#0274FE]"
          />
          <input
            type="text"
            placeholder="Phone number"
            className="bg-transparent border border-[#FFFFFF33] rounded-lg px-4 py-3 text-white placeholder:text-[#FFFFFFE0] outline-none focus:border-[#0274FE]"
          />
          <input
            type="email"
            placeholder="Email address"
            className="bg-transparent border border-[#FFFFFF33] rounded-lg px-4 py-3 text-white placeholder:text-[#FFFFFFE0] outline-none focus:border-[#0274FE]"
          />
        </div>
      </div>

      {/* Company Details Section */}
      <div className="space-y-4">
        <h2 className="heading-3 font-normal">Company Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Company name"
            className="bg-transparent border border-[#FFFFFF33] rounded-lg px-4 py-3 text-white placeholder:text-[#FFFFFFE0] outline-none focus:border-[#0274FE]"
          />
          <input
            type="text"
            placeholder="Company Website"
            className="bg-transparent border border-[#FFFFFF33] rounded-lg px-4 py-3 text-white placeholder:text-[#FFFFFFE0] outline-none focus:border-[#0274FE]"
          />
          <input
            type="email"
            placeholder="Business email"
            className="bg-transparent border border-[#FFFFFF33] rounded-lg px-4 py-3 text-white placeholder:text-[#FFFFFFE0] outline-none focus:border-[#0274FE]"
          />
          <input
            type="text"
            placeholder="Location"
            className="bg-transparent border border-[#FFFFFF33] rounded-lg px-4 py-3 text-white placeholder:text-[#FFFFFFE0] outline-none focus:border-[#0274FE]"
          />
          <select
            className="bg-transparent border border-[#FFFFFF33] rounded-lg px-4 py-3 text-[#FFFFFFE0] outline-none focus:border-[#0274FE] appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23FFFFFFE0' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 1rem center',
              backgroundSize: '12px'
            }}
          >
            <option value="" className="bg-[#080E34]">Team size</option>
            <option value="1-10" className="bg-[#080E34]">1-10</option>
            <option value="11-50" className="bg-[#080E34]">11-50</option>
            <option value="51-200" className="bg-[#080E34]">51-200</option>
            <option value="201-500" className="bg-[#080E34]">201-500</option>
            <option value="500+" className="bg-[#080E34]">500+</option>
          </select>
          <input
            type="text"
            placeholder="Industry"
            className="bg-transparent border border-[#FFFFFF33] rounded-lg px-4 py-3 text-white placeholder:text-[#FFFFFFE0] outline-none focus:border-[#0274FE]"
          />
        </div>
      </div>

      {/* General Information Section */}
      <div className="space-y-4">
        <h2 className="heading-3 font-normal">General Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <select
            className="bg-transparent border border-[#FFFFFF33] rounded-lg px-4 py-3 text-[#FFFFFFE0] outline-none focus:border-[#0274FE] appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23FFFFFFE0' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 1rem center',
              backgroundSize: '12px'
            }}
          >
            <option value="" className="bg-[#080E34]">What offerings are you interested in?</option>
            <option value="automation" className="bg-[#080E34]">Automation</option>
            <option value="rpa" className="bg-[#080E34]">RPA</option>
            <option value="ai-solutions" className="bg-[#080E34]">AI Solutions</option>
            <option value="consulting" className="bg-[#080E34]">Consulting</option>
          </select>
          <select
            className="bg-transparent border border-[#FFFFFF33] rounded-lg px-4 py-3 text-[#FFFFFFE0] outline-none focus:border-[#0274FE] appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23FFFFFFE0' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 1rem center',
              backgroundSize: '12px'
            }}
          >
            <option value="" className="bg-[#080E34]">What is your estimated timeline?</option>
            <option value="immediate" className="bg-[#080E34]">Immediately</option>
            <option value="1-3-months" className="bg-[#080E34]">1-3 months</option>
            <option value="3-6-months" className="bg-[#080E34]">3-6 months</option>
            <option value="6-12-months" className="bg-[#080E34]">6-12 months</option>
            <option value="exploring" className="bg-[#080E34]">Just exploring</option>
          </select>
          <select
            className="bg-transparent border border-[#FFFFFF33] rounded-lg px-4 py-3 text-[#FFFFFFE0] outline-none focus:border-[#0274FE] appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23FFFFFFE0' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 1rem center',
              backgroundSize: '12px'
            }}
          >
            <option value="" className="bg-[#080E34]">Do you need an on-premise setup?</option>
            <option value="yes" className="bg-[#080E34]">Yes</option>
            <option value="no" className="bg-[#080E34]">No</option>
            <option value="not-sure" className="bg-[#080E34]">Not sure</option>
          </select>
          <select
            className="bg-transparent border border-[#FFFFFF33] rounded-lg px-4 py-3 text-[#FFFFFFE0] outline-none focus:border-[#0274FE] appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23FFFFFFE0' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 1rem center',
              backgroundSize: '12px'
            }}
          >
            <option value="" className="bg-[#080E34]">Do you require white-label capabilities?</option>
            <option value="yes" className="bg-[#080E34]">Yes</option>
            <option value="no" className="bg-[#080E34]">No</option>
            <option value="maybe" className="bg-[#080E34]">Maybe</option>
          </select>
         <div className="relative">
          <textarea
            placeholder="Type anything here..."
            rows={3}
            className="bg-transparent border pt-[52px] border-[#FFFFFF33] rounded-lg px-4 py-3 text-white placeholder:text-[#FFFFFFB2] outline-none focus:border-[#0274FE] resize-none w-full"
          />
            <p className="text-[#FFFFFFE0] heading-5 font-normal absolute top-3 left-4">Tell us more about your current challenges or expectations.</p>
            </div>

          <div className="relative">
          <textarea
            placeholder="A short description helps us prepare the right solution for you..."
            rows={3}
            className="bg-transparent border pt-[52px] border-[#FFFFFF33] rounded-lg px-4 py-3 text-white placeholder:text-[#FFFFFFB2] outline-none focus:border-[#0274FE] resize-none w-full"
          />
            <p className="text-[#FFFFFFE0] heading-5 font-normal absolute top-3 left-4">What use case or problem are you looking to solve?</p>
            </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3">
        <div
          className="rounded-full p-px w-full"
          style={{
            background:
              "linear-gradient(0deg, #343754 0.33%, #AAB1EC 53.7%, #343754 100%)",
          }}
        >
          <button
            className="font-normal py-2 px-5 rounded-full w-full flex items-center justify-center"
            style={{
              background: "#00031C",
              color: "white",
            }}
          >
            Cancel
          </button>
        </div>
        <div
          className="rounded-full p-px w-full"
          style={{
            background:
              "linear-gradient(270deg, #343754 0.33%, #AAB1EC 53.7%, #343754 100%)",
          }}
        >
          <button
            className="flex items-center justify-center font-normal py-2 px-5 rounded-full w-full"
            style={{
              background: "#0274FE",
              color: "white",
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Form;
