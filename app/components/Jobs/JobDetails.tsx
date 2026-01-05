
"use client";
import GradientButton from '@/app/ui/GradientButton'
import React from 'react'
import { useTranslation } from "react-i18next";

export default function JobDetails() {
  const { t } = useTranslation("job");

  // Helper to ensure we get an array for mapping
  const responsibilityItems = t("jobDetails.responsibilities.items", { returnObjects: true }) as string[];
  const requirementItems = t("jobDetails.requirements.items", { returnObjects: true }) as string[];

  return (
    <div className='pt-5 sm:pt-15 px-3 sm:px-20 max-w-[1440px] mx-auto'>
      <div className='space-y-12'>
        {/* Description Section */}
        <div className="space-y-5">
          <h3 className="heading-3 font-medium text-white">
            {t("jobDetails.title")}
          </h3>
          <p className="heading-3 font-normal text-[#FFFFFF99]">
            {t("jobDetails.description")}
          </p>
        </div>

        {/* Responsibilities Section */}
        <div className="space-y-8">
          <h3 className="heading-3 font-medium text-white text-start">
            {t("jobDetails.responsibilities.title")}
          </h3>
          <ul className='list-disc space-y-3 pl-6 text-[#FFFFFFCC] heading-4 font-normal'>
            {Array.isArray(responsibilityItems) && responsibilityItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Requirements Section */}
        <div className="space-y-8">
          <h3 className="heading-3 font-medium text-white text-start">
            {t("jobDetails.requirements.title")}
          </h3>
          <ul className='list-disc space-y-3 pl-6 text-[#FFFFFFCC] heading-4 font-normal'>
            {Array.isArray(requirementItems) && requirementItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Button */}
      <div className="py-16 flex justify-center">
        <GradientButton 
          label={t("jobDetails.button")} 
          href='/application-form' 
          bgColor='#0274FE' 
          textColor='#FFFFFF' 
        />
      </div>  
    </div>
  )
}