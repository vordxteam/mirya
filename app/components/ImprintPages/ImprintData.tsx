"use client";
import React from "react";
import { useImprint } from "@/app/hooks/useImprint";
const ImprintData = () => {
  const { t } = useImprint();

  return (
    <div className="max-w-[1440px] m-auto">
      <div className="px-5 sm:px-20 pt-0 pb-[60px] sm:pt-[60px] ">
        {/* Header Section */}
          <p className="text-[#F4F7FF] opacity-80 body-3">
            {t("imprint.content.infoNotice")}
          </p>

        {/* Company Information */}
        <div className="space-y-6">
          <div>
            <h2 className="heading-2 font-semibold text-white mt-6">
              mirya.ai
            </h2>
            <p className="text-[#F4F7FF] opacity-80 body-3">
              {t("imprint.content.productOf")}
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="heading-3 font-semibold text-white mt-6">
              {t("imprint.content.company")}
            </h3>
            <div className="text-[#F4F7FF] opacity-80 body-3 space-y-1">
              <p>{t("imprint.content.addressLine1")}</p>
              <p>{t("imprint.content.addressLine2")}</p>
            </div>
          </div>

          <div className="text-[#F4F7FF] opacity-80 body-3 space-y-2">
            <p>{t("imprint.content.register")}</p>
            <p>{t("imprint.content.registrationNumber")}</p>
            <p>{t("imprint.content.vat")}</p>
          </div>

          <div className="space-y-2">
            <p className="text-[#F4F7FF] opacity-80 body-3">
              <span className="font-semibold">
                {t("imprint.content.contact")}:
              </span>{" "}
              legal@mirya.ai
            </p>
          </div>

          <div className="text-[#F4F7FF] opacity-80 body-3 space-y-2">
            <p>{t("imprint.content.responsibleTitle")}</p>
            <p className="sm:mb-[60px] mb-[40px]">
              {t("imprint.content.responsiblePerson")}
            </p>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="space-y-6">
          <h1 className="heading-1 font-medium text-white">
            {t("imprint.disclaimer.title")}
          </h1>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4 text-white">
              {t("imprint.disclaimer.contentTitle")}
            </h2>
            <div className="text-[#F4F7FF] opacity-80 body-3 space-y-4">
              <p>{t("imprint.disclaimer.contentText1")}</p>
              <p>{t("imprint.disclaimer.contentText2")}</p>
            </div>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4 text-white">
              {t("imprint.disclaimer.linksTitle")}
            </h2>
            <div className="text-[#F4F7FF] opacity-80 body-3 space-y-4">
              <p>{t("imprint.disclaimer.linksText1")}</p>
              <p>{t("imprint.disclaimer.linksText2")}</p>
            </div>
          </div>
        </div>

        {/* Copyright Notice Section */}
        <div className="space-y-6">
          <h1 className="heading-1 font-medium text-white sm:mt-[60px] mt-[40px]">
            {t("imprint.copyright.title")}
          </h1>

          <div className="text-[#F4F7FF] opacity-80 body-3 space-y-4">
            <p>{t("imprint.copyright.text1")}</p>
            <p>{t("imprint.copyright.text2")}</p>
            <p>{t("imprint.copyright.text3")}</p>
            <p>{t("imprint.copyright.text4")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImprintData;
