import React, { useState } from "react";
import GradientButton from "@/app/ui/GradientButton";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Cards({ active }: { active: string }) {
  const planData = {
    monthly: [
      {
        id: 1,
        title: "Professional",
        description:
          "Ideal for Individuals or small teams beginning their automation journey.",
        features: [
          "All features",
          "E-mail and chat support",
          "No-code designer",
          "On cloud",
          "24/7 customer service",
        ],
        price: "€299",
        period: " /per month",
        btnColor: "#00031C",
        btnText: "Get Started",
        img: "/images/plan1.png",
      },
      {
        id: 2,
        title: "Enterprise",
        description:
          "Ideal for growing businesses that demand speed, power, and flexibility.",
        features: [
          "All premium features",
          "Support 1h/month. Email support 48hrs phone ",
          "On premise",
          "Individual onboarding",
          "24/7 customer service",
        ],
        price: "€399",
        period: " /per month",
        btnColor: "#0274FE",
        btnText: "Get Started",
        img: "/images/plan2.png",
      },
      {
        id: 3,
        title: "White Label",
        description:
          "For partners who want to offer our technology under their own brand.",
        features: [
          "Full customization brand name, logo and colors",
          "Lifetime support",
          "Sell the platform as your own product",
          "Quick deployment with minimal setup start automating immediately",
          "Dedicated account management",
        ],
        price: "€ 299",
        period: " /per month",
        btnColor: "#00031C",
        btnText: "Contact Us",
        tagline: "To give you the best deal, let's chat in person.",
        img: "/images/plan3.png",
      },
    ],
    annual: [
      {
        id: 1,
        title: "Professional",
        description:
          "Ideal for Individuals or small teams beginning their automation journey.",
        features: [
          "All features",
          "E-mail and chat support",
          "No-code designer",
          "On cloud",
          "24/7 customer service",
        ],
        price: "€2,990",
        period: " /per year",
        btnColor: "#00031C",
        btnText: "Get Started",
        img: "/images/plan1.png",
      },
      {
        id: 2,
        title: "Enterprise",
        description:
          "Ideal for growing businesses that demand speed, power, and flexibility.",
        features: [
          "All premium features",
          "Support 1h/month. Email support 48hrs phone ",
          "On premise",
          "Individual onboarding",
          "24/7 customer service",
        ],
        price: "€3,990",
        period: " /per year",
        btnColor: "#0274FE",
        btnText: "Get Started",
        img: "/images/plan2.png",
      },
      {
        id: 3,
        title: "White Label",
        description:
          "For partners who want to offer our technology under their own brand.",
        features: [
          "Full customization brand name, logo and colors",
          "Lifetime support",
          "Sell the platform as your own product",
          "Quick deployment with minimal setup start automating immediately",
          "Dedicated account management",
        ],
        price: "€2,990",
        period: " /per year",
        btnColor: "#00031C",
        btnText: "Contact Us",
        tagline: "To give you the best deal, let's chat in person.",
        img: "/images/plan3.png",
      },
    ],
  };

  //    const [activeTab, setActiveTab] = useState("monthly");
  const [activePlanId, setActivePlanId] = useState<number | null>(null);

  const currentPlans = planData[active as keyof typeof planData];

  return (
    <>
      <div className="z-[10000] bg-[#00031c]  relative pb-20">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid max-w-[1440px] mx-auto  relative md:grid-cols-2 lg:grid-cols-3 gap-25 sm:gap-10 pt-[152px] px-2 md:px-[86px]  md:pt-[152px]"
        >
          {currentPlans.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setActivePlanId(item.id)}
              style={{
                background:
                  "linear-gradient(174deg, #3F49D8 3.3%, #1F1B48 33.52%, #00041E 55.73%)",
              }}
              className={`rounded-3xl p-px transition-all ${
                index === 1 ? "translate-y-0 lg:-translate-y-[86px]" : ""
              }`}
            >
              <motion.div
                className={`bg-[#090b26] w-full md:max-w-[396px]  px-8 pt-[72px] pb-11 rounded-3xl relative cursor-pointer transition-all ${
                  activePlanId === item.id
                    ? "ring-2 ring-[#4F60FA] shadow-lg shadow-[#4F60FA]/30"
                    : ""
                }`}
              >
                {activePlanId === item.id && (
                  <div className="absolute top-16 left-17">
                    <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] sm:w-[181px] h-[94px]"></div>
                  </div>
                )}
                <Image
                  src={item.img}
                  alt={item.title}
                  height={76}
                  width={76}
                  className="absolute -top-[5%] left-40"
                />
                <h3 className="heading-3 font-semibold text-[#F4F7FF]">
                  {item.title}
                </h3>
                <p className="pt-3 heading-6 font-regular text-[#CAC9D1] max-w-[332px]">
                  {item.description}
                </p>
                <div className="mt-3 bg-linear-to-r from-[#1A1A3B] via-[#A68BEE] to-[#1A1A3B]  h-px"></div>
                <div className="pt-[46px]">
                  {item.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex flex-wrap gap-3 mb-4 items-start"
                    >
                      <Image
                        src="/images/bullet.png"
                        alt="List"
                        height={24}
                        width={24}
                        className="w-6 h-6 mt-1 "
                      />
                      <span className="heading-6 font-regular inline text-[#F4F7FF] flex-1">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <motion.div
                  className="pt-[46px] flex items-end"
                  key={item.price}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className=" heading-1 font-medium text-transparent bg-linear-to-r from-[#789EFF] via-[#3A38AA] to-[#3A38AA] bg-clip-text">
                    {item.price},
                  </span>
                  <span className="text-[#73799B] heading-5 font-regular">
                    {item.period},
                  </span>
                </motion.div>
                <div className="w-[135px] pt-10">
                  <GradientButton
                    bgColor={item.btnColor}
                    label={item.btnText}
                    textColor="white"
                    href="#"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
