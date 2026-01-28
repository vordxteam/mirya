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
}: any) => {
  const { t } = useTranslation("live-session");

  const customGradient = "linear-gradient(97deg, #22223C 14.82%, #22223C 25.27%, #686DDD 39.55%, #22223C 49.99%, #22223C 84.47%)";
  const [isLoading, setIsLoading] = useState(false);

  // Define fields to map through, keeping 'name' for logic and 'label' for UI
  const fields = [
    { name: "fullName", label: t("registrationForm.fields.fullName") },
    { name: "email", label: t("registrationForm.fields.email") },
    { name: "companyName", label: t("registrationForm.fields.companyName") },
    { name: "role", label: t("registrationForm.fields.role") },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime) return;

    if (!formData.fullName || !formData.email) {
      toast.error(t("registrationForm.validation.required"));
      return;
    }

    setIsLoading(true);
    try {
      if (onSubmit) await onSubmit(e);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="sticky top-6 max-w-[402px] w-full text-white">
      <div
        className="rounded-[12px] p-[1px] w-full"
        style={{ background: customGradient }}
      >
        <div className="bg-[#050A29] rounded-[11px] p-6 space-y-5">
          <h3 className="text-[24px] font-medium leading-[30px] text-white pb-3">
            {t("registrationForm.title")}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            {fields.map((field) => (
              <div key={field.name} className="space-y-3">
                <label className="block text-[16px] font-normal leading-5">
                  {field.label}
                </label>
                <input
                  type={field.name === "email" ? "email" : "text"}
                  name={field.name}
                  placeholder={field.label}
                  value={formData[field.name] || ""}
                  onChange={onChange}
                  className="w-full bg-transparent border border-[#FFFFFF33] rounded-lg px-4 py-3 text-white placeholder:text-[#FFFFFFE0] outline-none focus:border-[#0274FE] transition-all"
                  required={field.name === "fullName" || field.name === "email"}
                  disabled={isLoading}
                />
              </div>
            ))}

            <div className="pt-4">
              <div className="w-full">
                <button
                  type="submit"
                  disabled={isLoading || !selectedDate || !selectedTime}
                  className="w-full"
                >
                  <GradientButton
                    label={isLoading ? t("registrationForm.button.processing") : t("registrationForm.button.submit")}
                    href="#" 
                    bgColor="#0274FE"
                    onClick={handleSubmit as any}
                    width="100%"
                  />
                </button>
              </div>
              
              {(!selectedDate || !selectedTime) && (
                <p className="mt-3 text-sm text-[#FF6B6B] text-center">
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