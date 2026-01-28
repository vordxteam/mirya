// components/Session/RegistrationForm.tsx
"use client";

import React, { useState } from "react";
import GradientButton from "@/app/ui/GradientButton";
import toast from "react-hot-toast";

export const RegistrationForm = ({
  selectedDate,
  selectedTime,
  formData,
  onChange,
  onSubmit,
}: any) => {
  // Your specific gradient border
  const customGradient = "linear-gradient(97deg, #22223C 14.82%, #22223C 25.27%, #686DDD 39.55%, #22223C 49.99%, #22223C 84.47%)";

  // Add local loading state
  const [isLoading, setIsLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!selectedDate || !selectedTime) {
      return;
    }

    if (!formData.fullName || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsLoading(true);
    
    try {
      // Call the parent's onSubmit handler
      if (onSubmit) {
        await onSubmit(e);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="sticky top-6">
      <div
        className="rounded-[12px] p-[1px] w-full"
        style={{
          background: customGradient,
        }}
      >
        <div 
          className="bg-[#050A29] rounded-[11px] p-6 space-y-6"
        >
          <h3 className="text-[25px] font-medium leading-[36px] text-white">
            Fill out the details below.
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            {["fullName", "email", "companyName", "role"].map((field) => (
              <div key={field} className="space-y-2">
                <label className="block text-[14px] font-normal text-[#FFFFFFE0] capitalize">
                  {field.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  placeholder={field.replace(/([A-Z])/g, " $1")}
                  value={formData[field]}
                  onChange={onChange}
                  className="w-full bg-transparent border border-[#FFFFFF33] rounded-lg px-4 py-3 text-white placeholder:text-[#FFFFFFE0] outline-none focus:border-[#0274FE] transition-all"
                  required={field === "fullName" || field === "email"}
                  disabled={isLoading}
                />
              </div>
            ))}

            {/* BUTTON SECTION */}
            <div className="pt-4">
              <div className="w-full">
                <button
                  type="submit"
                  disabled={isLoading || !selectedDate || !selectedTime}
                  className="w-full"
                >
                  <GradientButton
                    label={isLoading ? "Processing..." : "Submit Registration"}
                    href="#" 
                    bgColor="#0274FE"
                    onClick={handleSubmit as any}
                    width="100%"
                    
                  />
                </button>
              </div>
              
              {/* Show warning if date/time not selected */}
              {(!selectedDate || !selectedTime) && (
                <p className="mt-3 text-sm text-[#FF6B6B] text-center">
                  {!selectedDate && !selectedTime 
                    ? 'Please select a date and time slot first' 
                    : !selectedDate 
                      ? 'Please select a date first' 
                      : 'Please select a time slot first'}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};