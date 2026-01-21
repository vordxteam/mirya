"use client";
import Image from "next/image";
import Link from "next/link";
import CustomCheckbox from "@/app/components/CustomCheckbox";
import { useTranslation } from "react-i18next";
export default function ContactPage() {
  const { t } = useTranslation("contact");

  const phone = t("contactInfo.availability.phone");
  const numericPhone = phone.replace(/[^\d+]/g, "");
  const data = t("contactInfo.cards", { returnObjects: true }) as {
    title: string;
    value: string;
    link: string;
    img: string;
  }[];

  return (
    <>
      <div className="flex justify-center">
        <div className="bg-linear-to-r from-[#00031C] via-[#8EA0E0] to-[#00031C] w-[50%] flex text-center h-px"></div>
      </div>
      <div className="flex flex-col items-center pt-15 relative px-3 sm:px-20 max-w-[1440px] m-auto">
        <div className="absolute top-0 z-[-1000]">
          <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[90px] w-[181px] h-[94px]"></div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between gap-8 md:gap-12">
          {/* Left Section - Improved spacing */}
          <div className="flex flex-col justify-between space-y-8 md:space-y-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-[40px] leading-11 font-medium">
                  {t("contactInfo.title")}
                </h1>
                <p className="text-FFFFFF99 font-regular heading-4 font-regular max-w-[490px] text-[#FFFFFF99]">
                  {t("contactInfo.description")}
                </p>
              </div>
            </div>

            <div className="">
              {/* Availability Label */}
              <p className="heading-4 font-medium text-white mb-3">
                {t("contactInfo.availability.label")}
              </p>

              {/* Email */}
              <p className="heading-5 font-normal text-white flex gap-2 items-center mb-2">
                <Image
                  src="/images/mail.svg"
                  alt="email"
                  height={20}
                  width={20}
                />
                <a
                  href={`mailto:${t("contactInfo.availability.mail")}`}
                  className="underline-none"
                >
                  {t("contactInfo.availability.mail")}
                </a>
              </p>

              {/* Phone */}
              <p className="heading-5 font-normal text-white flex gap-2 items-center">
                <Image
                  src="/images/phone.svg"
                  alt="phone"
                  height={20}
                  width={20}
                />
                <a
                  href={`tel:${numericPhone}`}
                  className="underline-none cursor-pointer"
                >
                  {phone}
                </a>
              </p>

              <div
                className="w-full mt-6 pt-6"
                style={{
                  borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <p className="heading-4 font-medium text-white">{t("contactInfo.followUs")}</p>

                <div className="flex gap-3 pt-5">
                  <Link href="https://www.facebook.com/" target="_blank">
                    <Image
                      src="/images/facebook.png"
                      alt="facebook"
                      height={52}
                      width={52}
                    />
                  </Link>

                  <Link href="https://www.instagram.com/" target="_blank">
                    <Image
                      src="/images/instagram.png"
                      alt="instagram"
                      height={52}
                      width={52}
                    />
                  </Link>

                  <Link href="https://twitter.com/" target="_blank">
                    <Image src="/images/X.png" alt="X" height={52} width={52} />
                  </Link>

                  <Link href="https://www.linkedin.com/" target="_blank">
                    <Image
                      src="/images/linkedin.png"
                      alt="linkedin"
                      height={52}
                      width={52}
                    />
                  </Link>
                </div>
              </div>
              {/* --- DIVIDER LINE & FOLLOW US END --- */}
            </div>
          </div>

          <div
            className="rounded-lg p-px"
            style={{
              background:
                "linear-gradient(91deg, #4542E0 5.02%, #14122C 95.9%)",
            }}
          >
            <div className="bg-[#080E34] rounded-lg p-3 sm:p-7">
              <h3 className="heading-3 font-regular text-white">
                {t("form.sendMessage")}
              </h3>

              <div className="pt-6 flex flex-col gap-4">
                <input
                  type="text"
                  placeholder={t("form.placeholders.name")}
                  className="outline outline-[#FFFFFF33] p-4 rounded-lg xl:w-lg"
                />

                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder={t("form.placeholders.email")}
                    className="outline outline-[#FFFFFF33] p-4 rounded-lg w-full"
                  />
                  <input
                    type="number"
                    placeholder={t("form.placeholders.phone")}
                    className="outline outline-[#FFFFFF33] p-4 rounded-lg w-full"
                  />
                </div>

                <select
                  className="bg-transparent border border-[#FFFFFF33] rounded-lg px-4 py-3 text-[#FFFFFFE0] outline-none appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23FFFFFFE0' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 1rem center",
                    backgroundSize: "12px",
                  }}
                >
                  <option
                    value=""
                    disabled
                    selected
                    className="bg-[#080E34] text-gray-400"
                  >
                    {t("form.placeholders.subject")}
                  </option>
                  <option value="general" className="bg-[#080E34]">
                    {t("form.subjects.general")}
                  </option>
                  <option value="support" className="bg-[#080E34]">
                    {t("form.subjects.support")}
                  </option>
                  <option value="billing" className="bg-[#080E34]">
                    {t("form.subjects.billing")}
                  </option>
                  <option value="feedback" className="bg-[#080E34]">
                    {t("form.subjects.feedback")}
                  </option>
                  <option value="other" className="bg-[#080E34]">
                    {t("form.subjects.other")}
                  </option>
                </select>

                <textarea
                  rows={8}
                  placeholder={t("form.placeholders.message")}
                  className="outline resize-none outline-[#FFFFFF33] p-4 rounded-lg w-full"
                />
              </div>

              <div className="mt-4">
                <CustomCheckbox
                  label={
                    <span className="flex flex-wrap gap-1">
                      <span>{t("form.privacy")}</span>
                      <Link href="#" className="text-[#0274FE] underline">
                        {t("form.privacyLink")}
                      </Link>
                      <span>.</span>
                    </span>
                  }
                />
              </div>

              <div
                className="rounded-full p-px w-full mt-10"
                style={{
                  background:
                    "linear-gradient(270deg, #343754 0.33%, #AAB1EC 53.7%, #343754 100%)",
                }}
              >
                <Link
                  href="#"
                  className="font-normal w-full flex items-center justify-center py-2 px-5 rounded-full"
                  style={{ background: "#0274FE", color: "white" }}
                >
                  {t("form.submit")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
