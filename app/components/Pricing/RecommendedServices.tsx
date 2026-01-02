"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Recommended() {
  const { t } = useTranslation("pricing");

  const reasons = [
    {
      id: 1,
      title: t("recommended.items.automationWorkshop.title"),
      description: t("recommended.items.automationWorkshop.description"),
      link: "#",
      btnLabel: t("recommended.items.automationWorkshop.btnLabel"),
    },
    {
      id: 2,
      title: t("recommended.items.coeSetup.title"),
      description: t("recommended.items.coeSetup.description"),
      link: "#",
      btnLabel: t("recommended.items.coeSetup.btnLabel"),
    },
    {
      id: 3,
      title: t("recommended.items.processRecording.title"),
      description: t("recommended.items.processRecording.description"),
      link: "#",
      btnLabel: t("recommended.items.processRecording.btnLabel"),
    },
    {
      id: 4,
      title: t("recommended.items.prioritySupport.title"),
      description: t("recommended.items.prioritySupport.description"),
      link: "#",
      btnLabel: t("recommended.items.prioritySupport.btnLabel"),
    },
    {
      id: 5,
      title: t("recommended.items.proofOfValue.title"),
      description: t("recommended.items.proofOfValue.description"),
      link: "",
      btnLabel: t("recommended.items.proofOfValue.btnLabel"),
    },
  ];
  return (
    <div className=" px-3 sm:px-20 max-w-[1440px] mx-auto relative z-10 bg-[#00031C] overflow-hidden">
      <div className="flex justify-center relative">
        <div className="bg-linear-to-r from-[#00031C] via-[#8EA0E0] to-[#00031C] w-[50%] flex text-center h-[0.8px]"></div>
      </div>
      <div className="flex z-100 bg-[#00031C] flex-col items-center justify-center  pt-15 px-2 md:px-10  relative">
        <div className="absolute top-0 -z-10 pointer-events-none">
          <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
        </div>
        <div className="pb-3 flex items-center gap-5">
          <Image src="/images/label2.svg" width={78} height={16} alt="line" />
          <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal leading-[20px] text-center">
            {t("recommended.badge")}{" "}
          </h1>
          <Image src="/images/label.svg" width={78} height={16} alt="line" />
        </div>
        <h1 className="heading-1 font-medium w-full text-center max-w-[750px]">
          {t("recommended.mainTitle")}{" "}
        </h1>
      </div>

      <div className=" pt-5 sm:pt-16 pb-10 sm:pb-16 grid sm:grid-cols-2 md:grid-cols-2 gap-6 services-grid">
        {reasons.map((item) => (
          <div
            key={item.id}
            style={{
              background:
                "linear-gradient(280deg, #00031C 16.47%, #686DDD 48.87%, #00031C 78.17%)",
            }}
            className="p-px rounded-xl"
          >
            <div
              className="p-6 space-y-3 h-full overflow-hidden relative rounded-xl z-10"
              style={{
                background:
                  "linear-gradient(52deg, rgba(17, 35, 143, 0.60) 58.88%, rgba(89, 53, 233, 0.60) 96.79%), #00031C",
              }}
            >
              <div className="absolute top-6 left-30 pointer-events-none z-0">
                <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
              </div>

              <div className="absolute top-0 right-0 pointer-events-none z-0">
                <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
              </div>

              <div className="space-y-2">
                <h3 className="heading-3 font-semibold  text-[#F4F7FF]">
                  {item.title}{" "}
                </h3>
                <p className="heading-6 font-normal text-[#F4F7FF99]">
                  {item.description}{" "}
                </p>
              </div>

              <div className="pt-8 max-w-full w-fit min-[179px]: inline-flex">
                <div
                  className="rounded-full p-[1.5px]"
                  style={{
                    background:
                      "linear-gradient(180deg, #4D4D4D 0%, #FFF 49.5%, rgba(255, 255, 255, 0) 100%)",
                  }}
                >
                  <Link
                    href={(item.link as string) || "/contact"}
                    className="inline-block text-[16px] font-normal text-white py-3 px-6 bg-[#00031C] rounded-full"
                  >
                    {item.btnLabel}{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
