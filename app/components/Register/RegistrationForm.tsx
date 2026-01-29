"use client";

import React, { useState } from "react";
import GradientButton from "@/app/ui/GradientButton";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

export const RegistrationForm = ({
  selectedDate,
  selectedTime,
  formData,
  onChange,
  onSubmit,
  isLoading,
}: any) => {
  const { t } = useTranslation("live-session");
  const [showError, setShowError] = useState(false);

  const customGradient = "linear-gradient(97deg, #22223C 14.82%, #22223C 25.27%, #686DDD 39.55%, #22223C 49.99%, #22223C 84.47%)";

  // Map both label and placeholder from the JSON
  const fields = [
    { 
      name: "fullName", 
      label: t("registrationForm.fields.fullName"), 
      placeholder: t("registrationForm.placeholders.fullName") 
    },
    { 
      name: "email", 
      label: t("registrationForm.fields.email"), 
      placeholder: t("registrationForm.placeholders.email") 
    },
    { 
      name: "companyName", 
      label: t("registrationForm.fields.companyName"), 
      placeholder: t("registrationForm.placeholders.companyName") 
    },
    { 
      name: "role", 
      label: t("registrationForm.fields.role"), 
      placeholder: t("registrationForm.placeholders.role") 
    },
  ];

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime) {
      setShowError(true);
      return;
    }

    setShowError(false);

    if (!formData.fullName || !formData.email) {
      toast.error(t("registrationForm.validation.required"));
      return;
    }

    if (onSubmit) await onSubmit(e);
  };

  return (
    <div className="sticky top-6 max-w-[402px] w-full text-white">
      <div className="rounded-xl p-[1px] w-full" style={{ background: customGradient }}>
        <div className="bg-[#050A29] rounded-[11px] p-6 space-y-5">
          <h3 className="text-[24px] font-medium leading-[30px] text-white pb-3">
            {t("registrationForm.title")}
          </h3>

          <form onSubmit={handleFormSubmit} className="space-y-5">
            {fields.map((field) => (
              <div key={field.name} className="space-y-3">
                <label className="block text-[16px] font-normal leading-5">{field.label}</label>
                <input
                  type={field.name === "email" ? "email" : "text"}
                  name={field.name}
                  placeholder={field.placeholder} // Using the new placeholder property
                  value={formData[field.name] || ""}
                  onChange={onChange}
                  className="w-full bg-transparent border border-[#FFFFFF33] text-[12px] leading-4 font-light rounded-lg px-4 py-3 text-white placeholder:text-[#FFFFFF99] outline-none focus:border-[#0274FE] transition-all"
                  required={field.name === "fullName" || field.name === "email"}
                  disabled={isLoading}
                />
              </div>
            ))}

            <div className="pt-4">
              <div className="w-full">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full"
                >
                  <GradientButton
                    label={isLoading ? t("registrationForm.button.processing") : t("registrationForm.button.submit")}
                    href="#" 
                    bgColor="#0274FE"
                    onClick={handleFormSubmit as any}
                    width="100%"
                  />
                </button>
              </div>
              
              {showError && (!selectedDate || !selectedTime) && (
                <p className="mt-3 text-sm text-[#FF6B6B] text-center ">
                  {!selectedDate && !selectedTime 
                    ? t("registrationForm.validation.selectBoth")
                    : !selectedDate 
                      ? t("registrationForm.validation.selectDate") 
                      : t("registrationForm.validation.selectTime")}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};