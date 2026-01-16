import React from "react";

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

// Step component type
export type StepComponent = React.FC<{
  onSkip?: () => void;
  showSkipButton?: boolean;
  formData: OnboardingFormData;
  updateFormData: (field: string, value: any) => void;
  errors?: Record<string, string>;
}>;

// Onboarding layout interface
export interface OnboardingLayoutProps {
  currentStep: number;
  totalSteps: number;
  onBack: () => void;
  onContinue: () => void;
  onSkip?: () => void;
  children: React.ReactNode;
  showProgress?: boolean;
  showSkipButton?: boolean;
}

export interface StepProps {
  formData: OnboardingFormData;
  updateFormData: (field: string, value: any) => void;
  errors?: Record<string, string>;
}
