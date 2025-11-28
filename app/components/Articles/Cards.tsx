import Image from "next/image";
import React from "react";

const Cards = () => {
  const cardsData = [
    {
      id: 1,
      icon: "/images/icon1.svg",
      title: "What are the system requirements for using Nexux?",
      description:
        "Nexux runs smoothly on all modern devices with no heavy setup. Just a stable internet connection and an updated browser are all you need...",
      linkText: "Learn More",
    },
    {
      id: 2,
      icon: "/images/icon2.svg",
      title: "How can I update my account information?",
      description:
        "Nexux runs smoothly on all modern devices with no heavy setup. Just a stable internet connection and an updated browser are all you need...",
      linkText: "Learn More",
    },
    {
      id: 3,
      icon: "/images/icon3.svg",
      title: "What are the first steps to take after signing up?",
      description:
       "Nexux runs smoothly on all modern devices with no heavy setup. Just a stable internet connection and an updated browser are all you need...",
      linkText: "Learn More",
    },
    {
      id: 4,
      icon: "/images/icon4.svg",
      title: "How can I integrate Nexux with other tools?",
      description:
        "Nexux runs smoothly on all modern devices with no heavy setup. Just a stable internet connection and an updated browser are all you need...",
      linkText: "Learn More",
    },
    {
      id: 5,
      icon: "/images/icon5.svg",
      title: "Where can I find tutorials or user guides?",
      description:
        "Nexux runs smoothly on all modern devices with no heavy setup. Just a stable internet connection and an updated browser are all you need...",
      linkText: "Learn More",
    },
    {
      id: 6,
      icon: "/images/icon6.svg",
      title: "What should I do if I encounter a technical issue?",
      description:
        "Nexux runs smoothly on all modern devices with no heavy setup. Just a stable internet connection and an updated browser are all you need...",
      linkText: "Learn More",
    },
    {
      id: 7,
      icon: "/images/icon7.svg",
      title: "How do I invite team members to collaborate on the platform?",
      description:
        "Nexux runs smoothly on all modern devices with no heavy setup. Just a stable internet connection and an updated browser are all you need...",
      linkText: "Learn More",
    },
    {
      id: 8,
      icon: "/images/icon8.svg",
      title: "How do I upgrade my plan?",
      description:
        "Nexux runs smoothly on all modern devices with no heavy setup. Just a stable internet connection and an updated browser are all you need...",
      linkText: "Learn More",
    },
  ];

  return (
    <div className="bg-[#00031C] relative z-10">
      <div className="max-w-[1440px] m-auto px-5 sm:px-10 lg:px-20 py-[60px] overflow-hidden relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardsData.map((card) => (
            <div key={card.id}>
              <div
                className="rounded-xl p-0.5 h-full"
                style={{
                  background:
                    "linear-gradient(97deg, #22223C 14.82%, #22223C 25.27%, #686DDD 39.55%, #22223C 49.99%, #22223C 84.47%)",
                }}
              >
                <div className="bg-[#050A29] overflow-hidden relative p-5 h-full">
                  <div className="absolute right-[-70px] bottom-[21px]">
                    <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
                  </div>
                  <div className="relative z-20 flex flex-col items-start justify-between h-full space-y-6">
                    <div>
                      <Image
                        src={card.icon}
                        width={56}
                        height={56}
                        alt="icon"
                      />
                    </div>
                    <div className="space-y-3">
                      <h1 className="text-[#F4F7FF] text-[20px] sm:text-[24px] font-medium leading-6 sm:leading-[30px]">
                        {card.title}
                      </h1>
                      <p className="text-[14px] font-normal leading-5 text-[#F4F7FF99]">
                        {card.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between w-full cursor-pointer">
                      <button className="text-[#0F73FE] text-[16px] font-normal leading-5 cursor-pointer">
                        {card.linkText}
                      </button>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M5 12H19M19 12L12 5M19 12L12 19"
                            stroke="#0F73FE"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
