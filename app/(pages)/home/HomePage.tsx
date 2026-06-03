"use client";
import Demo from "@/app/components/Home/Demo";
import HeroSection from "@/app/components/Home/HeroSection";
import Features from "@/app/components/Home/Features";
import React, { useEffect, useState } from "react";
import HowToUse from "@/app/components/Home/HowToUse";
// import Faq from "@/app/components/Home/Faq";
// import Benefits from "@/app/components/Home/Benefits";
// import Indicator from "@/app/components/Home/Indicator";
// import Plans from "@/app/components/Home/Plans";
import BuildForYou from "@/app/components/Home/BuildForYou";
import Testimonials from "@/app/components/Home/Testimonials";
import WorkFlow from "@/app/components/Home/WorkFlow";
import Aiassistant from "@/app/components/Home/Aiassistant";
import Image from "next/image";
import Cookies from "./Cookies";
import Chatbot from "./Chatbot";
import { useTranslation } from "react-i18next"; 
// new landing page components 
import Hero from "@/app/components/NewHome/Hero";
import Problem from "@/app/components/NewHome/Problem";
import HowMiryaWorks from "@/app/components/NewHome/HowItWorks";
import SeeInAction from "@/app/components/NewHome/SeeInAction";
import EyeOfMirya from "@/app/components/NewHome/Eyeofmirya";
import Benefits from "@/app/components/NewHome/MiryaBenefits";
import Impact from "@/app/components/NewHome/Impact";
import IndustryCard from "@/app/components/NewHome/IndustryCard";
import Platform from "@/app/components/NewHome/Platform";
import WhyMirya from "@/app/components/NewHome/WhyMirya";
import NewTestimonials from "@/app/components/NewHome/NewTestimonials";
const HomePage = () => {
  const { t } = useTranslation("home"); 
  const [cookiesOpen, setCookiesOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const handleCookies = () => {
    setCookiesOpen((prev) => !prev);
  };

  const handleChat = () => {
    setChatOpen((prev) => !prev);
  };

  useEffect(() => {
    // Check if user has already seen the popup (using localStorage)
    const hasSeenCookies = sessionStorage.getItem("cookiesSeen");

    if (!hasSeenCookies) {
      setCookiesOpen(true);
      sessionStorage.setItem("cookiesSeen", "true");
    }
  }, []); // Empty dependency array = run only once on mount

  // return (

  //   <div>
  //     <HeroSection />
  //     <Demo />
  //     <HowToUse />
  //     <WorkFlow />
  //     <Features />
  //     <BuildForYou />
  //     <Benefits />
  //     <Aiassistant />
  //     <Testimonials />
  //     {!cookiesOpen && !chatOpen && (
  //       <>
  //         <Image
  //           src="/images/cookies.png"
  //           onClick={handleCookies}
  //           alt="Cookies"
  //           height={64}
  //           width={64}
  //           className="cursor-pointer fixed bottom-3 left-7 z-`999999999999999`"
  //         />

  //         <div className="h-[52px] rounded-full fixed bottom-3 right-7 border border-transparent non-rounded2 p-[1px] z-10">
  //           <div
  //             onClick={handleChat}
  //             className="flex  cursor-pointer items-center rounded-full gap-2 p-2 h-full bg-gradient-to-r from-[#14122C] to-[#4542E0]"
  //           >
  //             <Image
  //               src="/images/chatbot.png"
  //               alt="Chatbot"
  //               height={28}
  //               width={26}
  //             />
  //             <p className="heading-5 font-normal text-[#FFFFFF]">
  //               Chat with Us
  //             </p>
  //           </div>
  //         </div>

  //         <style jsx>{`
  //           .non-rounded2 {
  //             background: linear-gradient(#4542e0, #4542e0) padding-box,
  //               linear-gradient(0deg, #4542e0, #4542e0, #4542e0) border-box;
  //           }
  //         `}</style>
  //       </>
  //     )}
  //     {cookiesOpen && (
  //       <div className="flex justify-between w-full px-6 fixed bottom-10 z-10">
  //         <Cookies onClose={handleCookies} />
  //       </div>
  //     )}

  //     {chatOpen && (
  //       <div className="flex justify-between  px-6 fixed bottom-8 right-0 z-10">
  //         <Chatbot onClose={handleChat} />
  //       </div>
  //     )}
  //   </div>
  // );


  return (
  <div className="relative">
    {/* // old home page content commented  */}
    {/* Page Content */}
    {/* <HeroSection /> */}
    {/* <Demo /> */}
    {/* <HowToUse /> */}
    {/* <WorkFlow /> */}
    {/* <Features /> */}
    {/* <BuildForYou /> */}
    {/* <Aiassistant /> */}
    {/* <Testimonials /> */}
{/* New home page content */}
    <Hero />
    <Problem />
    <HowMiryaWorks />
    <SeeInAction />
    <EyeOfMirya />
    <Benefits />
    <Impact />
    <IndustryCard />
    <Platform />
    <WhyMirya />
    <NewTestimonials />

    {/* --- FLOATING OVERLAY UI --- */}
    
    {/* Permanent Cookie Icon Overlay */}
    <Image
      src="/images/cookies.png"
      onClick={handleCookies}
      alt="Cookies"
      height={64}
      width={64}
      // Fixed: corrected z-index syntax and added fixed positioning
      className="cursor-pointer fixed bottom-3 left-7 z-[9999] hover:scale-110 transition-transform"
    />

    {/* Chatbot Toggle Button */}
    {!chatOpen && (
      <div className="h-[52px] rounded-full fixed bottom-3 right-7 border border-transparent non-rounded2 p-[1px] z-[9999]">
        <div
          onClick={handleChat}
          className="flex cursor-pointer items-center rounded-full gap-2 p-2 h-full bg-gradient-to-r from-[#14122C] to-[#4542E0]"
        >
          <Image
            src="/images/chatbot.png"
            alt="Chatbot"
            height={28}
            width={26}
          />
          <p className="heading-5 font-normal text-[#FFFFFF]">{t("chatbot-home.chatWithUs")}</p>
        </div>
      </div>
    )}

    {/* Cookie Modal/Popup */}
    {cookiesOpen && (
      <div className="fixed inset-0 bg-black/20 z-[10000] flex items-end justify-center pb-10 pointer-events-none">
        <div className="pointer-events-auto w-full px-6">
           <Cookies onClose={handleCookies} />
        </div>
      </div>
    )}

    {/* Chatbot Window */}
    {chatOpen && (
      <div className="fixed bottom-8 right-6 z-[10000]">
        <Chatbot onClose={handleChat} />
      </div>
    )}

    <style jsx>{`
      .non-rounded2 {
        background: linear-gradient(#4542e0, #4542e0) padding-box,
          linear-gradient(0deg, #4542e0, #4542e0, #4542e0) border-box;
      }
    `}</style>
  </div>
);
};



export default HomePage;
