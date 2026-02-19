
"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import CustomCheckbox from "../CustomCheckbox";

const DetailsPanel = () => {
  const { t } = useTranslation('userTesting');

  const getOptions = (key: string): string[] => {
    const options = t(`form.checkboxOptions.${key}`, { returnObjects: true });
    
    return Array.isArray(options) ? (options as string[]) : [];
  };

  return (
    <div className="px-2 relative sm:px-20">
      <div className="absolute top-24 z-[-1] left-[40%] ">
        <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[71px]"></div>
      </div>
      <div
        className="p-px max-w-[964px] mx-auto rounded-[16px]"
        style={{
          background:
            "linear-gradient(0deg, #343754 0.33%, #AAB1EC 53.7%, #343754 100%)",
        }}
      >
        <div className="flex items-start gap-4 px-8 py-6 overflow-hidden bg-[#00031C] rounded-[16px] relative">
          <Image src="/images/reward.png" alt="reward" height={72} width={72} />
          <div className="space-y-3 ">
            <p className="heading-3 font-medium text-[#F4F7FF]">
              {t('rewards.title')}
            </p>
            <p className="heading-6 font-normal max-w-[709px]">
              {t('rewards.description')}
            </p>
          </div>
          <div className="absolute top-3 left-50 pointer-events-none z-0">
            <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[71px]"></div>
          </div>
          <div className="absolute bottom-0 right-0">
            <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[71px]"></div>
          </div>
        </div>
      </div>
      <div className="py-15">
        <div
          className="max-w-[964px] m-auto  rounded-lg p-px"
          style={{
            background: "linear-gradient(91deg, #4542E0 5.02%, #14122C 95.9%)",
          }}
        >
          <div className="px-4  sm:px-8 py-6 space-y-6 bg-[#080E34] rounded-lg">
            <h1 className="heading-3 font-normal">
              {t('form.title')}
            </h1>
            <div className="grid grid-cols-2 gap-x-3 gap-y-4">
              <input
                type="text"
                placeholder={t('form.placeholders.firstName')}
                className="input-box placeholder:text-[#FFFFFFE0]"
              />
              <input
                type="text"
                placeholder={t('form.placeholders.lastName')}
                className="input-box placeholder:text-[#FFFFFFE0]"
              />
              <input
                type="text"
                placeholder={t('form.placeholders.phone')}
                className="input-box placeholder:text-[#FFFFFFE0]"
              />
              <input
                type="text"
                placeholder={t('form.placeholders.email')}
                className="input-box placeholder:text-[#FFFFFFE0]"
              />
              <input
                type="text"
                placeholder={t('form.placeholders.company')}
                className="input-box placeholder:text-[#FFFFFFE0]"
              />
              <input
                type="text"
                placeholder={t('form.placeholders.website')}
                className="input-box placeholder:text-[#FFFFFFE0]"
              />
              <input
                type="text"
                placeholder={t('form.placeholders.occupation')}
                className="input-box placeholder:text-[#FFFFFFE0]"
              />
              <input
                type="text"
                placeholder={t('form.placeholders.jobTitle')}
                className="input-box placeholder:text-[#FFFFFFE0]"
              />
              <input
                type="text"
                placeholder={t('form.placeholders.location')}
                className="input-box placeholder:text-[#FFFFFFE0]"
              />
              <input
                type="text"
                placeholder={t('form.placeholders.address')}
                className="input-box placeholder:text-[#FFFFFFE0]"
              />
              
              {/* Question Sections Mapping */}
              {[
                { id: 'employees', q: 'employees' },
                { id: 'tools', q: 'tools' },
                { id: 'processes', q: 'processes' },
                { id: 'automationTools', q: 'automationTools' },
                { id: 'deploymentType', q: 'deploymentType' },
                { id: 'itResources', q: 'itResources' },
                { id: 'plans', q: 'plans' },
                { id: 'outcome', q: 'outcome' },
                { id: 'miryaFamiliar', q: 'miryaFamiliar' },
                { id: 'aiFamiliar', q: 'aiFamiliar' },
                { id: 'automationTiming', q: 'automationTiming' },
                { id: 'referral', q: 'referral' }
              ].map((item) => (
                <div key={item.id} className="rounded-lg border-[#FFFFFF33] border p-4 space-y-4 col-span-2 sm:col-span-1">
                  <h1 className="text-[#FFFFFFE0] text-[16px] leading-5">
                    {t(`form.questions.${item.q}`)}
                  </h1>
                  <div className="space-y-3">
                    {getOptions(item.id).map((opt, index) => (
                      <CustomCheckbox key={index} label={opt} />
                    ))}
                  </div>
                </div>
              ))}

              {/* Question: Challenges Textarea */}
              <div className="rounded-lg border-[#FFFFFF33] border p-4 space-y-4 col-span-2">
                <h1 className="text-[#FFFFFFE0] text-[16px] leading-5">
                  {t('form.questions.challenges')}
                </h1>
                <div>
                  <textarea
                    className="border-none outline-none text-[#FFFFFFB2] body-4 w-full bg-transparent"
                    placeholder={t('form.placeholders.challenges')}
                  ></textarea>
                </div>
              </div>

              <CustomCheckbox
                className="col-span-2 sm:col-span-1"
                  labelClassName="text-[16px] leading-5 font-medium text-white"

                label={
                  <span className="flex flex-wrap gap-1 ">
                    <span>{t('form.privacy')}</span>
                    <Link href="/privacy-policy" className="text-[#0274FE] underline">
                      {t('form.privacyLink')}
                    </Link>
                    <span>.</span>
                  </span>
                }
              />
            </div>
            
            {/* Buttons */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3">
              <div
                className="rounded-full p-px w-full"
                style={{
                  background:
                    "linear-gradient(180deg, #4D4D4D 0%, #FFF 49.5%, rgba(255, 255, 255, 0) 100%)",
                }}
              >
                <Link
                  href="#"
                  className="font-normal py-2 px-5 rounded-full w-full flex items-center justify-center"
                  style={{
                    background: "#00031C",
                    color: "white",
                  }}
                >
                  {t('form.buttons.cancel')}
                </Link>
              </div>
              <div
                className="rounded-full p-px w-full"
                style={{
                  background:
                    "linear-gradient(270deg, #343754 0.33%, #AAB1EC 53.7%, #343754 100%)",
                }}
              >
                <Link
                  href="#"
                  className="flex items-center justify-center font-normal py-2 px-5 rounded-full w-full"
                  style={{
                    background: "#0274FE",
                    color: "white",
                  }}
                >
                  {t('form.buttons.submit')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPanel;