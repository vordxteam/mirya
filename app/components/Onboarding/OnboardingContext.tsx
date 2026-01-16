"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Form data interface
export interface OnboardingFormData {
  // First API data
  email: string;
  first_name: string;
  last_name: string;
  phone_number?: string;

  // Second API data
  company_name?: string;
  company_website?: string;
  role?: string;
  employee_count?: string;
  country?: string;
  city?: string;
  client_count?: string;
  typical_clients?: string;
  services_provided?: string[];
  company_description?: string;
  industry_focus?: string;
  average_project_size?: string;
  other_partner_programs?: string;
  partner_program_list?: string;
  mirya_implementation_status?: string;
  mirya_clients_count?: string;
  reference_client?: string;
  social_channel_id?: string;
  mirya_contributions?: string[];
  contribution_documentation?: string;
  additional_info?: string;
}

interface OnboardingContextType {
  currentStepIndex: number;
  setCurrentStepIndex: (index: number) => void;
  formData: OnboardingFormData;
  updateFormData: (field: string, value: any) => void;
  expertId: string | null;
  setExpertId: (id: string | null) => void;
  isSubmitting: boolean;
  setIsSubmitting: (submitting: boolean) => void;
  errors: Record<string, string>;
  setErrors: (errors: Record<string, string>) => void;
  clearErrors: () => void;
  resetFormData: () => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [formData, setFormData] = useState<OnboardingFormData>({
    email: "",
    first_name: "",
    last_name: "",
  });
  const [expertId, setExpertId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const clearErrors = () => {
    setErrors({});
  };

  const resetFormData = () => {
    setFormData({
      email: "",
      first_name: "",
      last_name: "",
    });
  };

  return (
    <OnboardingContext.Provider
      value={{
        currentStepIndex,
        setCurrentStepIndex,
        formData,
        updateFormData,
        expertId,
        setExpertId,
        isSubmitting,
        setIsSubmitting,
        errors,
        setErrors,
        clearErrors,
        resetFormData,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error("useOnboarding must be used within OnboardingProvider");
  }
  return context;
}
