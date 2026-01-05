import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";
import CustomCheckbox from "@/app/components/CustomCheckbox";
import { useTranslation } from "react-i18next";
const inter = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Cookies({ onClose }: { onClose: () => void }) {
  const { t } = useTranslation("home");
  return (
    <div className={`${inter.className}`}>
      <div className="rounded-[20px] border border-transparent non-rounded2 p-[1px] max-w-[426px]">
        <div className="rounded-[20px] gap-2 p-[19px] bg-[#060B26]">
          <div className="space-y-3">
            <div className="flex justify-between items-end">
              <h4 className="heading-4 font-light text-[#FFFFFF]">
                {t("cookies.title")}{" "}
              </h4>
              <Image
                onClick={onClose}
                src="/images/close.svg"
                alt="Close"
                height={16}
                width={16}
                className="cursor-pointer"
              />
            </div>
            <p className="heading-7 font-normal text-[#FFFFFF]">
              {t("cookies.description")}
            </p>
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center leading-[14px]">
                <CustomCheckbox
                  label={t("cookies.strictlyNecessary")}
                  labelClassName="text-[6px] sm:text-[10px] font-light text-[#FFFFFFE5]"
                />
              </div>
              <div className="flex  items-center leading-[14px]">
                <CustomCheckbox
                  label={t("cookies.targetingOnly")}
                  labelClassName="text-[6px] sm:text-[10px] font-light text-[#FFFFFFE5]"
                />
              </div>
              <div className="flex  items-center leading-[14px]">
                <CustomCheckbox
                  label={t("cookies.performanceOnly")}
                  labelClassName="text-[6px] sm:text-[10px] font-light text-[#FFFFFFE5]"
                />
              </div>
            </div>
          </div>

          {/* Buttons section with responsive ordering */}
          <div className="pt-9 flex flex-col sm:flex-row w-full items-center justify-between gap-4">
            {/* Accept All - Top on sm, Left on lg */}
            <div className="w-full sm:w-auto order-1 sm:order-1">
              <button
                onClick={onClose}
                className="cursor-pointer heading-6 font-light text-[#FFFFFF] bg-linear-to-b from-[#00082F] to-[#0274FE] px-4 py-2 rounded-lg w-full text-center"
              >
                {t("cookies.acceptAll")}{" "}
              </button>
            </div>

            {/* Manage Cookies - Center on sm, Right side (first) on lg */}
            <div className="w-full sm:w-auto order-2 sm:order-2">
              <button
                onClick={onClose}
                className="bg-[#FFFFFF14] heading-6 font-light text-[#FFFFFFCC] cursor-pointer border border-[#FFFFFF1F] rounded-lg py-2 px-4 w-full text-center"
              >
                {t("cookies.manageCookies")}{" "}
              </button>
            </div>

            {/* Reject All - Bottom on sm, Right side (second) on lg */}
            <div className="w-full sm:w-auto order-3 sm:order-2 ">
              <button
                onClick={onClose}
                className="bg-[#FFFFFF14] heading-6 font-light text-[#FFFFFFCC] cursor-pointer border border-[#FFFFFF1F] rounded-lg py-2 px-4 w-full text-center"
              >
                {t("cookies.rejectAll")}{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .non-rounded2 { 
          background: linear-gradient(#4542e0, #4542e0) padding-box,
            linear-gradient(0deg, #00031c, #8ea0e0, #00031c) border-box;
        }
      `}</style>
    </div>
  );
}
