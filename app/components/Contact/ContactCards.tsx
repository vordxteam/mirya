"use client";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
const ContactCards = () => {
  const { t } = useTranslation("contact");
  return (
    <div className="max-w-[1440px] m-auto">
      <div className="px-2 sm:px-20 py-[60px] flex flex-col md:flex-row w-full items-center justify-between gap-5 sm:gap-12">
        <div className='bg-[url("/images/bgcard.png")] bg-no-repeat bg-cover bg-center w-full rounded-xl px-8 py-6 space-y-10'>
          <div className="space-y-3">
            <h1 className="heading-2 text-[#F4F7FF]">
              {" "}
              {t("cardsSection.community.title")}
            </h1>
            <p className="text-[#CAC9D1] body-4 max-w-[554px]">
              {t("cardsSection.community.description")}
            </p>
          </div>
          <div>
            <div
              className="rounded-full p-px w-full"
              style={{
                background:
                  "linear-gradient(180deg, #4D4D4D 0%, #FFF 49.5%, rgba(255, 255, 255, 0) 100%)",
              }}
            >
              <Link
                href="/enquiry-form"
                className="font-normal py-3 px-6 rounded-full w-full flex items-center justify-center"
                style={{
                  background: "#00031C",
                  color: "white",
                }}
              >
                {t("cardsSection.community.button")}
              </Link>
            </div>
          </div>
        </div>

        <div className='bg-[url("/images/bgcard.png")] bg-no-repeat bg-cover bg-center w-full rounded-xl px-8 py-6 space-y-10'>
          <div className="space-y-3">
            <h1 className="heading-2 text-[#F4F7FF]">
              {" "}
              {t("cardsSection.anythingElse.title")}
            </h1>
            <p className="text-[#CAC9D1] body-4 max-w-[554px]">
              {t("cardsSection.anythingElse.description")}
            </p>
          </div>
          <div>
            <div
              className="rounded-full p-px w-full"
              style={{
                background:
                  "linear-gradient(180deg, #4D4D4D 0%, #FFF 49.5%, rgba(255, 255, 255, 0) 100%)",
              }}
            >
              <Link
                href="#"
                className="font-normal py-3 px-6 rounded-full w-full flex items-center justify-center"
                style={{
                  background: "#00031C",
                  color: "white",
                }}
              >
                {t("cardsSection.anythingElse.button")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCards;
