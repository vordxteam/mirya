"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

// 1. Define the interface for the card structure
interface DecisionCard {
  id: string | number;
  title: string;
  description: string;
}

const Decisions = () => {
  const { t } = useTranslation("startup");

  // 2. Cast the result to the interface array and provide a fallback
  const cards = (t("decisions.cards", { returnObjects: true }) || []) as DecisionCard[];

  return (
    <div className="overflow-hidden px-3 md:px-20 sm:pb-15">
      <div className="flex flex-col items-center justify-center pt-15 relative">
        <div className="absolute top-0 z-0 pointer-events-none">
          <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
        </div>
        <div className="pb-3 flex items-center gap-5">
          <Image src="/images/label2.svg" width={78} height={16} alt="line" />
          <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal leading-5 text-center">
            {t("decisions.label")}
          </h1>
          <Image src="/images/label.svg" width={78} height={16} alt="line" />
        </div>
        <h1 className="heading-1 font-medium max-w-[972px] w-full text-center pb-3 sm:pb-6">
          {t("decisions.title")}
        </h1>
        <p className="text-[#CAC9D1] text-[14px] font-normal leading-5 text-center max-w-[606px]">
          {t("decisions.description")}
        </p>
      </div>
      <div className="mt-[64px] px-0 sm:px-[47px]">
        <div className="flex justify-center relative z-[-10]">
          <div className="absolute top-0">
            <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 max-w-[1280px]">
            {/* 3. Wrap with Array.isArray for extra safety */}
            {Array.isArray(cards) && cards.map((item) => (
              <div
                key={item.id}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-lg p-px"
                style={{
                  background:
                    "linear-gradient(174deg, #3F49D8 3.3%, #1F1B48 33.52%, #00041E 55.73%)",
                }}
              >
                <div className="bg-[#050A29] z-10 relative rounded-lg p-4 flex gap-5 items-center h-full">
                  <Image
                    src="/images/tick-bg.png"
                    alt="Tick"
                    height={56}
                    width={56}
                  />
                  <div className="space-y-1 flex flex-col h-full justify-center">
                    <p className="heading-5 font-medium text-[#FFFFFF]">
                      {item.title}
                    </p>
                    <p className="heading-7 font-light text-[#FFFFFFCC]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Decisions;