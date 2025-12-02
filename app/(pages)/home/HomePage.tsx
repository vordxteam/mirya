"use client";
import Demo from "@/app/components/Home/Demo";
import HeroSection from "@/app/components/Home/HeroSection";
import Features from "@/app/components/Home/Features";
import React, { useEffect, useState } from "react";
import HowToUse from "@/app/components/Home/HowToUse";
// import Faq from "@/app/components/Home/Faq";
import Benefits from "@/app/components/Home/Benefits";
// import Indicator from "@/app/components/Home/Indicator";
// import Plans from "@/app/components/Home/Plans";
import BuildForYou from "@/app/components/Home/BuildForYou";
import Testimonials from "@/app/components/Home/Testimonials";
import WorkFlow from "@/app/components/Home/WorkFlow";
import Aiassistant from "@/app/components/Home/Aiassistant";
import Image from "next/image";
import Cookies from "./Cookies";
import Chatbot from "./Chatbot";

const HomePage = () => {
    const [cookiesOpen , setCookiesOpen] = useState(false);
    const [chatOpen , setChatOpen] = useState(false);

    const handleCookies = ()=>{
      setCookiesOpen(prev=>!prev)
    }

    const handleChat = ()=>{
      setChatOpen(prev=>!prev)
    }

    useEffect(() => {
  // Check if user has already seen the popup (using localStorage)
  const hasSeenCookies = sessionStorage.getItem('cookiesSeen');
  
  if (!hasSeenCookies) {
    setCookiesOpen(true);
    sessionStorage.setItem('cookiesSeen', 'true');
  }
}, []); // Empty dependency array = run only once on mount


  return (
    <div>
      <HeroSection />
      <Demo />
      <HowToUse />
      <WorkFlow />
      <Features />
      <BuildForYou />
      <Benefits />
      <Aiassistant />
      <Testimonials />
       {
          (!cookiesOpen && !chatOpen) && (

       <>
             <Image
              src="/images/cookies.png"
              onClick={handleCookies}
              alt="Cookies"
              height={64}
              width={64}
              className="cursor-pointer fixed bottom-3 left-7 z-[999999999999999]"
            />
          
        
           
        <div className="h-[52px] rounded-full fixed bottom-3 right-7 border border-transparent non-rounded2 p-[1px] z-10">
          <div onClick={handleChat} className="flex  cursor-pointer items-center rounded-full gap-2 p-2 h-full bg-gradient-to-r from-[#14122C] to-[#4542E0]">
            <Image
              src="/images/chatbot.png"
              alt="Chatbot"
              height={28}
              width={26}
            />
            <p className="heading-5 font-normal text-[#FFFFFF]">Chat with Us</p>
          </div>
        </div>
        

        <style jsx>{`
          .non-rounded2 {
            background: linear-gradient(#4542e0, #4542e0) padding-box,
              linear-gradient(0deg, #4542e0, #4542e0, #4542e0) border-box;
          }
        `}</style>
        </>
        )
        }
      {
        cookiesOpen && (
          <div className="flex justify-between w-full px-6 fixed bottom-10 z-10">
          <Cookies onClose={handleCookies}/>
          </div>
        )
      }

      {
        chatOpen && (
          <div className="flex justify-between  px-6 fixed bottom-10 right-0 z-10">
          <Chatbot onClose={handleChat}/>
          </div>
        )
      }
    </div>
  );
};

export default HomePage;
