"use client";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation("pricing");
  const reasons = [
    {
      id: 1,
      title: t("services.items.guardian.title"),
      description: t("services.items.guardian.description"),
      link: "",
    },
    {
      id: 2,
      title: t("services.items.starter.title"),
      description: t("services.items.starter.description"),
      link: "",
    },
    {
      id: 3,
      title: t("services.items.compliance.title"),
      description: t("services.items.compliance.description"),
      link: "",
    },
    {
      id: 4,
      title: t("services.items.expert.title"),
      description: t("services.items.expert.description"),
      link: "",
    },
    {
      id: 5,
      title: t("services.items.ai.title"),
      description: t("services.items.ai.description"),
      link: "",
    },
  ];
  return (
    <div className=" px-3 sm:px-20 max-w-[1440px] mx-auto relative z-10 bg-[#00031C] overflow-hidden">
      <div className="flex justify-center relative -z-10 pointer-events-none">
        <div className="bg-linear-to-r from-[#00031C] via-[#8EA0E0] to-[#00031C] w-[50%] flex text-center h-[0.8px]"></div>
      </div>
      <div className="flex z-100 bg-[#00031C] flex-col items-center justify-center  pt-15 px-2 md:px-10  relative">
        <div className="absolute top-0 -z-10 pointer-events-none">
          <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
        </div>
        <div className="pb-3 flex items-center gap-5">
          <Image src="/images/label2.svg" width={78} height={16} alt="line" />
          <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal leading-[20px] text-center">
            {t("services.badge")}{" "}
          </h1>
          <Image src="/images/label.svg" width={78} height={16} alt="line" />
        </div>
        <h1 className="heading-1 font-medium w-full text-center pb-3 sm:pb-6 max-w-[777px]">
          {t("services.mainTitle")}{" "}
        </h1>
        <p className="text-[#CAC9D1] text-[14px] font-normal leading-5 text-center max-w-[676px]">
          {t("services.mainDescription")}{" "}
        </p>
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
              {" "}
              <div className="absolute top-6 left-30 pointer-events-none z-0">
                <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
              </div>
              {/* <div className="absolute top-0 right-0  "> */}
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
              <div className="pt-8 w-fit min[147px]">
                <div
                  className="rounded-full p-px w-full"
                  style={{
                    background:
                      "linear-gradient(180deg, #4D4D4D 0%, #FFF 49.5%, rgba(255, 255, 255, 0) 100%)",
                  }}
                >
                  <Link
                    href={(item.link as string) || "/live-session"}
                    className="font-normal py-3 px-6 rounded-full w-full flex items-center justify-center"
                    style={{
                      background: "#00031C",
                      color: "white",
                    }}
                  >
                    {t("services.buttonLabel")}{" "}
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
