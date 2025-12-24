import React, { useState } from "react";
import GradientButton from "@/app/ui/GradientButton";
import { motion } from "framer-motion";
import Image from "next/image";

type Plan = {
  id: number;
  title: string;
  description: string;
  features: string[];
  price?: string;
  period?: string;
  btnColor: string;
  btnText: string;
  img: string;
  tagline?: string;
};

export default function Cards({ active }: { active: "monthly" | "annual" }) {
  const planData: Record<"monthly" | "annual", Plan[]> = {
    monthly: [
      {
        id: 1,
        title: "Most popular",
        description:
          "Ideal for Individuals or small teams beginning their automation journey.",
        features: [
          "All features",
          "E-mail and chat support",
          "No-code designer",
          "On cloud",
          "24/7 customer service",
        ],
        price: "€23,94",
        period: "/per Half Yearly",
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
          "Support 1h/month. Email support 48hrs phone",
          "On premise",
          "Individual onboarding",
          "24/7 customer service",
        ],
        btnColor: "#0274FE",
        btnText: "Contact Us",
        tagline: "Custom Pricing Designed For Your Scale",
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
          " Quick deployment with minimal setup start automating immediately    ",
          "Dedicated account management",
        ],
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
          "Support 1h/month. Email support 48hrs phone",
          "On premise",
          "Individual onboarding",
          "24/7 customer service",
        ],
        btnColor: "#0274FE",
        btnText: "Contact Us",
        tagline: "Custom Pricing Designed For Your Scale",
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
          "Quick deployment with minimal setup",
          "Dedicated account management",
        ],
        btnColor: "#00031C",
        btnText: "Contact Us",
        tagline: "To give you the best deal, let's chat in person.",
        img: "/images/plan3.png",
      },
    ],
  };

  const [activePlanId, setActivePlanId] = useState<number | null>(null);
  const currentPlans = planData[active];

  return (
    <div className="z-[10000] bg-[#00031c] relative pb-20">
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid max-w-[1440px] mx-auto md:grid-cols-2 lg:grid-cols-3 gap-10 pt-17 sm:pt-[152px] px-2 md:px-[86px]"
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
            className={`rounded-3xl p-px ${
              index === 1 ? "lg:-translate-y-[86px]" : ""
            }`}
          >
            <div
              className={`bg-[#090b26] px-8 pt-[72px] pb-11 rounded-3xl relative cursor-pointer transition-all ${
                activePlanId === item.id
                  ? "ring-2 ring-[#4F60FA] shadow-lg shadow-[#4F60FA]/30"
                  : ""
              }`}
            >
              {activePlanId === item.id && (
                <div className="absolute top-16 left-16">
                  <div className="bg-[#4F60FA] opacity-60 blur-[50px] w-[181px] h-[94px] rounded-full"></div>
                </div>
              )}

              <Image
                src={item.img}
                alt={item.title}
                width={76}
                height={76}
                className="absolute h-auto -top-[5%] left-40"
              />

              <h3 className="heading-3 font-semibold text-[#F4F7FF]">
                {item.title}
              </h3>

              {index === 1 ? (
                <>
                  <div className="mt-3 h-px bg-gradient-to-r from-[#9e9ebb] via-[#A68BEE] to-[#1A1A3B]" />
                  <p className="pt-3 heading-6 text-[#CAC9D1] max-w-[332px]">
                    {item.description}
                  </p>
                </>
              ) : (
                <>
                  <p className="pt-3 heading-6 text-[#CAC9D1] max-w-[332px]">
                    {item.description}
                  </p>
                  <div className="mt-3 h-px bg-gradient-to-r from-[#9e9ebb] via-[#A68BEE] to-[#1A1A3B]" />
                </>
              )}
              <div className="pt-[40px] space-y-5">
                {item.features.map((feature, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <Image
                      src="/images/bullet.png"
                      alt="bullet"
                      width={24}
                      height={24}
                      className="h-6 w-6"
                    />
                    <span className="text-[#F4F7FF]  heading-6">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="pt-[40px]">
                {item.price ? (
                  <div className="flex items-end">
                    <span className="heading-1 font-medium text-transparent h-14 bg-gradient-to-r from-[#789EFF] via-[#3A38AA] to-[#3A38AA] bg-clip-text">
                      {item.price},
                    </span>
                    <span className="text-[#73799B] heading-5 mb-2 ml-2">
                      {item.period}
                    </span>
                  </div>
                ) : (
                  <p
                    className="text-[24px] font-medium leading-7 max-w-[298px]
                      bg-linear-to-r from-[#789EFF] to-[#3A38AA]
                      bg-clip-text text-transparent"
                  >
                    {item.tagline}
                  </p>
                )}
              </div>

              <div className="w-[135px] pt-10">
                <GradientButton
                  bgColor={item.btnColor}
                  label={item.btnText}
                  textColor="white"
                  href="#"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
