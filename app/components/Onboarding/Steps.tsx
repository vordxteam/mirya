"use client";
import GradientButton from "@/app/ui/GradientButton";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { expertsAPi } from "@/app/api/onboarding";

// Type definitions
type StepComponent = React.FC<{
  onSkip?: () => void;
  showSkipButton?: boolean;
  formData: OnboardingFormData;
  updateFormData: (field: string, value: any) => void;
  errors?: Record<string, string>;
}>;

interface OnboardingLayoutProps {
  currentStep: number;
  totalSteps: number;
  onBack: () => void;
  onContinue: () => void;
  onSkip?: () => void;
  children: React.ReactNode;
  showProgress?: boolean;
  showSkipButton?: boolean;
}

// Form data interface
interface OnboardingFormData {
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

// Onboarding Layout Component
const OnboardingLayout = ({
  currentStep,
  totalSteps,
  onBack,
  onContinue,
  onSkip,
  children,
  showProgress = true,
  showSkipButton = false,
}: OnboardingLayoutProps) => {
  return (
    <div className="h-[86vh] bg-[#020817] flex flex-col bg-[url('/images/main-gradient.png')] bg-no-repeat bg-bottom bg-contain">
      {/* Main content area */}
      <div className="flex-1 flex items-center justify-center py-8">
        <div className="relative z-10 w-full max-w-2xl px-6">
          <div className="flex gap-22"></div>
          {/* Progress bar */}
          {showProgress && (
            <div className="mb-3 sm:mb-[96px] flex items-center gap-22">
              <div className="relative w-full">
                {/* Track with 4 segments */}
                <div className="flex gap-2 items-center">
                  {[...Array(4)].map((_, i) => {
                    const segmentStart = (i * totalSteps) / 4;
                    const segmentEnd = ((i + 1) * totalSteps) / 4;
                    const segmentProgress = Math.max(
                      0,
                      Math.min(
                        1,
                        (currentStep - segmentStart) /
                          (segmentEnd - segmentStart)
                      )
                    );
                    const isCompleted = currentStep > segmentEnd;
                    const isActive =
                      currentStep > segmentStart && currentStep <= segmentEnd;

                    return (
                      <div key={i} className="flex-1 relative h-1">
                        {/* Background */}
                        <div className="absolute inset-0 bg-gray-700 rounded-full" />
                        {/* Progress */}
                        {(isCompleted || isActive) && (
                          <div
                            className="absolute inset-0 bg-blue-500 rounded-full transition-all duration-300"
                            style={{
                              width: isCompleted
                                ? "100%"
                                : `${segmentProgress * 100}%`,
                            }}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Slider handle with tooltip */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 transition-all duration-300 group"
                  style={{
                    left: `calc(${(currentStep / totalSteps) * 100}% - 6px)`,
                  }}
                >
                  <div className="w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50" />

                  {/* Tooltip */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2  transition-opacity pointer-events-none">
                    <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap border border-gray-700">
                      {currentStep}/{totalSteps}
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                      <div className="border-4 border-transparent border-t-gray-900" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mb-2">
                {showSkipButton && onSkip && (
                  <button
                    onClick={onSkip}
                    className="text-[#0274FE] cursor-pointer text-sm font-medium transition-colors"
                  >
                    Skip
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Step content */}
          {children}

          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-10">
            <div
              className="rounded-full p-[1.5px]"
              style={{
                background:
                  "linear-gradient(180deg, #4D4D4D 0%, #FFF 49.5%, rgba(255, 255, 255, 0) 100%)",
              }}
            >
              <button
                onClick={onBack}
                className="inline-block cursor-pointer text-[16px] font-normal text-white py-3 px-6 bg-[#00031C] rounded-full hover:bg-[#0a0d2e] transition-colors"
              >
                Back
              </button>
            </div>

            <div className="flex items-center gap-4">
              <GradientButton
                onClick={onContinue}
                label="Continue"
                bgColor="#0274FE"
                textColor="#FFFFFF"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer - now at bottom using flexbox */}
      <div className="mt-auto max-w-[1440px] mx-auto w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="heading-6 font-normal text-[#FFFFFFCC] text-xs mb-2 sm:mb-0">
            © 2024 Copyright - MIRYA AI Tech GmbH
          </div>
          <div className="flex gap-3 text-[#FFFFFFCC] text-xs">
            <a href="#" className="border-r pr-2 border-[#FFFFFF33]">
              Privacy Policy
            </a>
            <a href="#" className="border-r pr-2 border-[#FFFFFF33]">
              Security
            </a>
            <a href="#" className="">
              Imprint
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Step Components
const StartStep: StepComponent = () => (
  <div className="text-white space-y-10">
    <Image src="/images/miryaLogo.png" alt="Logo" height={32} width={54} />
    <p className="heading-3 font-normal text-[#FFFFFF]">
      Here is some questions about you and your company.
    </p>
  </div>
);

const Step1: StepComponent = ({ formData, updateFormData, errors }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      1. What's your first name?
    </h2>
    <input
      type="text"
      placeholder="First name"
      value={formData.first_name || ""}
      onChange={(e) => updateFormData("first_name", e.target.value)}
      className={`w-full px-4 py-3 bg-transparent border ${errors?.first_name ? 'border-red-500' : 'border-gray-700'} rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500`}
    />
    {errors?.first_name && (
      <p className="text-red-500 text-sm mt-2">{errors.first_name}</p>
    )}
  </div>
);

const Step2: StepComponent = ({ formData, updateFormData, errors }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      2. What's your last name?
    </h2>
    <input
      type="text"
      placeholder="Last name"
      value={formData.last_name || ""}
      onChange={(e) => updateFormData("last_name", e.target.value)}
      className={`w-full px-4 py-3 bg-transparent border ${errors?.last_name ? 'border-red-500' : 'border-gray-700'} rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500`}
    />
    {errors?.last_name && (
      <p className="text-red-500 text-sm mt-2">{errors.last_name}</p>
    )}
  </div>
);

const Step3: StepComponent = ({ formData, updateFormData }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      3. What's your phone number?
    </h2>
    <input
      type="tel"
      placeholder="Phone number"
      value={formData.phone_number || ""}
      onChange={(e) => {
        const value = e.target.value.replace(/\D/g, "");
        updateFormData("phone_number", value);
      }}
      className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
    />
  </div>
);

const Step4: StepComponent = ({ formData, updateFormData, errors }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      4. What's your email address?
    </h2>
    <input
      type="email"
      placeholder="Email"
      value={formData.email || ""}
      onChange={(e) => updateFormData("email", e.target.value)}
      className={`w-full px-4 py-3 bg-transparent border ${errors?.email ? 'border-red-500' : 'border-gray-700'} rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500`}
    />
    {errors?.email && (
      <p className="text-red-500 text-sm mt-2">{errors.email}</p>
    )}
  </div>
);

const Step5: StepComponent = ({ formData, updateFormData, errors }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      5. What is the name of your company?
    </h2>
    <input
      type="text"
      placeholder="Company name"
      value={formData.company_name || ""}
      onChange={(e) => updateFormData("company_name", e.target.value)}
      className={`w-full px-4 py-3 bg-transparent border ${errors?.company_name ? 'border-red-500' : 'border-gray-700'} rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500`}
    />
    {errors?.company_name && (
      <p className="text-red-500 text-sm mt-2">{errors.company_name}</p>
    )}
  </div>
);

const Step6: StepComponent = ({ formData, updateFormData, errors }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      6. What's the company website?
    </h2>
    <input
      type="text"
      placeholder="Company Website"
      value={formData.company_website || ""}
      onChange={(e) => updateFormData("company_website", e.target.value)}
      className={`w-full px-4 py-3 bg-transparent border ${errors?.company_website ? 'border-red-500' : 'border-gray-700'} rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500`}
    />
    {errors?.company_website && (
      <p className="text-red-500 text-sm mt-2">{errors.company_website}</p>
    )}
  </div>
);

const Step7: StepComponent = ({ formData, updateFormData, errors }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      7. What is your role?
    </h2>
    <input
      type="text"
      placeholder="Your Role"
      value={formData.role || ""}
      onChange={(e) => updateFormData("role", e.target.value)}
      className={`w-full px-4 py-3 bg-transparent border ${errors?.role ? 'border-red-500' : 'border-gray-700'} rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500`}
    />
    {errors?.role && (
      <p className="text-red-500 text-sm mt-2">{errors.role}</p>
    )}
  </div>
);

const Step8: StepComponent = ({ formData, updateFormData, errors }) => {
  const options = [
    { id: "just-me", label: "Just Me" },
    { id: "6-10", label: "6 - 10" },
    { id: "50-100", label: "50 - 100" },
    { id: "200-500", label: "200-500" },
    { id: "plus-1000", label: "+ 1000" },
  ];

  const handleCheckboxChange = (optionId: string) => {
    // For single selection (radio button behavior), just set the value
    updateFormData("employee_count", optionId);
  };

  return (
    <div className="text-white">
      <h2 className="text-2xl font-normal mb-6">
        8. What is the number of employees at your company?
      </h2>
      <div className="space-y-3">
        {options.map((option) => (
          <label
            key={option.id}
            className="flex items-center w-full px-5 py-4 bg-[#1a1d2e] border border-[#2d3348] rounded-lg cursor-pointer hover:border-[#3d4358] transition-colors"
          >
            <div className="relative flex items-center justify-center w-5 h-5 mr-4">
              <input
                type="checkbox"
                checked={formData.employee_count === option.id}
                onChange={() => handleCheckboxChange(option.id)}
                className="w-5 h-5 bg-transparent border-2 border-gray-600 rounded appearance-none checked:bg-white cursor-pointer"
              />
              {formData.employee_count === option.id && (
                <svg
                  className="absolute w-3 h-3 text-black pointer-events-none"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              )}
            </div>
            <span className="heading-6 text-[#FFFFFFB2] font-normal text-base">
              {option.label}
            </span>
          </label>
        ))}
      </div>
      {errors?.employee_count && (
        <p className="text-red-500 text-sm mt-2">{errors.employee_count}</p>
      )}
    </div>
  );
};

const Step9: StepComponent = ({ formData, updateFormData, errors }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      9. In which country are you currently located?
    </h2>
    <input
      type="text"
      placeholder="Country Name"
      value={formData.country || ""}
      onChange={(e) => updateFormData("country", e.target.value)}
      className={`w-full px-4 py-3 bg-transparent border ${errors?.country ? 'border-red-500' : 'border-gray-700'} rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500`}
    />
    {errors?.country && (
      <p className="text-red-500 text-sm mt-2">{errors.country}</p>
    )}
  </div>
);

const Step10: StepComponent = ({ formData, updateFormData, errors }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      10. In which city are you based?
    </h2>
    <input
      type="text"
      placeholder="City Name"
      value={formData.city || ""}
      onChange={(e) => updateFormData("city", e.target.value)}
      className={`w-full px-4 py-3 bg-transparent border ${errors?.city ? 'border-red-500' : 'border-gray-700'} rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500`}
    />
    {errors?.city && (
      <p className="text-red-500 text-sm mt-2">{errors.city}</p>
    )}
  </div>
);

const StartService: StepComponent = () => (
  <div className="text-[#FFFFFF] heading-3 font-normal max-w-[581px]">
    <p>
      Thanks for sharing your details! Next, we'll ask a few questions about
      your services and the customers you support.
    </p>
  </div>
);

const Step11: StepComponent = ({ formData, updateFormData, errors }) => {
  const options = [
    { id: "just-me", label: "Just Me" },
    { id: "6-10", label: "6 - 10" },
    { id: "50-100", label: "50 - 100" },
    { id: "200-500", label: "200-500" },
    { id: "plus-1000", label: "+ 1000" },
  ];

  const handleCheckboxChange = (optionId: string) => {
    updateFormData("client_count", optionId);
  };

  return (
    <div className="text-white">
      <h2 className="text-2xl font-normal mb-6">
        11. How many clients do you currently work with?
      </h2>
      <div className="space-y-3">
        {options.map((option) => (
          <label
            key={option.id}
            className="flex items-center w-full px-5 py-4 bg-[#1a1d2e] border border-[#2d3348] rounded-lg cursor-pointer hover:border-[#3d4358] transition-colors"
          >
            <div className="relative flex items-center justify-center w-5 h-5 mr-4">
              <input
                type="checkbox"
                checked={formData.client_count === option.id}
                onChange={() => handleCheckboxChange(option.id)}
                className="w-5 h-5 bg-transparent border-2 border-gray-600 rounded appearance-none checked:bg-white cursor-pointer"
              />
              {formData.client_count === option.id && (
                <svg
                  className="absolute w-3 h-3 text-black pointer-events-none"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              )}
            </div>
            <span className="heading-6 text-[#FFFFFFB2] font-normal text-base">
              {option.label}
            </span>
          </label>
        ))}
      </div>
      {errors?.client_count && (
        <p className="text-red-500 text-sm mt-2">{errors.client_count}</p>
      )}
    </div>
  );
};


const Step12: StepComponent = ({ formData, updateFormData, errors }) => {
  const options = [
    { id: "startups", label: "Startups (less than 20 employees)" },
    { id: "small", label: "Small Businesses (20 - 100 employees)" },
    { id: "mid", label: "Mid-sized businesses (100-500 employees)" },
    { id: "enterprise", label: "Enterprise (+ 500 employees)" },
    { id: "Other", label: "Other" },
  ];

  const handleCheckboxChange = (optionId: string) => {
    updateFormData("typical_clients", optionId);
  };

  return (
    <div className="text-white">
      <h2 className="text-2xl font-normal mb-6">
        12. Who are your typical clients?
      </h2>
      <div className="space-y-3">
        {options.map((option) => (
          <label
            key={option.id}
            className="flex items-center w-full px-5 py-4 bg-[#1a1d2e] border border-[#2d3348] rounded-lg cursor-pointer hover:border-[#3d4358] transition-colors"
          >
            <div className="relative flex items-center justify-center w-5 h-5 mr-4">
              <input
                type="checkbox"
                checked={formData.typical_clients === option.id}
                onChange={() => handleCheckboxChange(option.id)}
                className="w-5 h-5 bg-transparent border-2 border-gray-600 rounded appearance-none checked:bg-white cursor-pointer"
              />
              {formData.typical_clients === option.id && (
                <svg
                  className="absolute w-3 h-3 text-black pointer-events-none"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              )}
            </div>
            <span className="heading-6 text-[#FFFFFFB2] font-normal text-base">
              {option.label}
            </span>
          </label>
        ))}
      </div>
      {errors?.typical_clients && (
        <p className="text-red-500 text-sm mt-2">{errors.typical_clients}</p>
      )}
    </div>
  );
};

const Step13: StepComponent = ({ formData, updateFormData, errors }) => {
  const options = [
    { id: "eCommerce", label: "eCommerce Expertise" },
    { id: "noCode", label: "No Code or Low Code Expertise" },
    { id: "workFlowDesign", label: "Process and Workflow Design" },
    { id: "integrations", label: "Custom Nodes and Integration" },
    { id: "workFlowBuilding", label: "Workflow Building" },
    { id: "other", label: "other" },
  ];

  const handleCheckboxChange = (optionId: string) => {
    const currentServices = formData.services_provided || [];
    const newServices = currentServices.includes(optionId)
      ? currentServices.filter((id) => id !== optionId)
      : [...currentServices, optionId];
    updateFormData("services_provided", newServices);
  };

  return (
    <div className="text-white">
      <h2 className="text-2xl font-normal mb-6">
        13. What kind of services does your company provide?
      </h2>
      <div className="space-y-3">
        {options.map((option) => (
          <label
            key={option.id}
            className="flex items-center w-full px-5 py-4 bg-[#1a1d2e] border border-[#2d3348] rounded-lg cursor-pointer hover:border-[#3d4358] transition-colors"
          >
            <div className="relative flex items-center justify-center w-5 h-5 mr-4">
              <input
                type="checkbox"
                checked={(formData.services_provided || []).includes(option.id)}
                onChange={() => handleCheckboxChange(option.id)}
                className="w-5 h-5 bg-transparent border-2 border-gray-600 rounded appearance-none checked:bg-white cursor-pointer"
              />
              {(formData.services_provided || []).includes(option.id) && (
                <svg
                  className="absolute w-3 h-3 text-black pointer-events-none"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              )}
            </div>
            <span className="heading-6 text-[#FFFFFFB2] font-normal text-base">
              {option.label}
            </span>
          </label>
        ))}
      </div>
      {errors?.services_provided && (
        <p className="text-red-500 text-sm mt-2">{errors.services_provided}</p>
      )}
    </div>
  );
};

const Step14: StepComponent = ({ formData, updateFormData, errors }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      14. Company Description
    </h2>
    <textarea
      placeholder="Briefly describe your company's services, mission, and expertise..."
      value={formData.company_description || ""}
      onChange={(e) => updateFormData("company_description", e.target.value)}
      rows={6}
      className={`w-full px-4 py-3 bg-transparent border ${errors?.company_description ? 'border-red-500' : 'border-gray-700'} rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 resize-none`}
    />
    {errors?.company_description && (
      <p className="text-red-500 text-sm mt-2">{errors.company_description}</p>
    )}
  </div>
);

const Step15: StepComponent = ({ formData, updateFormData, errors }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      15. Any specific industry you focus on?
    </h2>
    <input
      type="text"
      placeholder="Type your Answer..."
      value={formData.industry_focus || ""}
      onChange={(e) => updateFormData("industry_focus", e.target.value)}
      className={`w-full px-4 py-3 bg-transparent border ${errors?.industry_focus ? 'border-red-500' : 'border-gray-700'} rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500`}
    />
    {errors?.industry_focus && (
      <p className="text-red-500 text-sm mt-2">{errors.industry_focus}</p>
    )}
  </div>
);

const Step16: StepComponent = ({ formData, updateFormData, errors }) => {
  const options = [
    { id: "<1,000", label: "<1,000" },
    { id: "1,000 - 5,000 ", label: "1,000 - 5,000 " },
    { id: "5,001 - 10,000", label: "5,001 - 10,000" },
    { id: "10,001 - 80,000 ", label: "10,001 - 80,000 " },
    { id: "80,001 - 100,000 ", label: "80,001 - 100,000 " },
    { id: ">100,000", label: ">100,000" },
  ];

  const handleCheckboxChange = (optionId: string) => {
    updateFormData("average_project_size", optionId);
  };

  return (
    <div className="text-white">
      <h2 className="text-2xl font-normal mb-6">
        16. What is the average project size (in EUR)?
      </h2>
      <div className="space-y-3">
        {options.map((option) => (
          <label
            key={option.id}
            className="flex items-center w-full px-5 py-4 bg-[#1a1d2e] border border-[#2d3348] rounded-lg cursor-pointer hover:border-[#3d4358] transition-colors"
          >
            <div className="relative flex items-center justify-center w-5 h-5 mr-4">
              <input
                type="checkbox"
                checked={formData.average_project_size === option.id}
                onChange={() => handleCheckboxChange(option.id)}
                className="w-5 h-5 bg-transparent border-2 border-gray-600 rounded appearance-none checked:bg-white cursor-pointer"
              />
              {formData.average_project_size === option.id && (
                <svg
                  className="absolute w-3 h-3 text-black pointer-events-none"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              )}
            </div>
            <span className="heading-6 text-[#FFFFFFB2] font-normal text-base">
              {option.label}
            </span>
          </label>
        ))}
      </div>
      {errors?.average_project_size && (
        <p className="text-red-500 text-sm mt-2">{errors.average_project_size}</p>
      )}
    </div>
  );
};

const Step17: StepComponent = ({ formData, updateFormData, errors }) => {
  const options = [
    { id: "Yes", label: "Yes" },
    { id: "No", label: "No" },
  ];

  const handleCheckboxChange = (optionId: string) => {
    updateFormData("other_partner_programs", optionId);
  };

  return (
    <div className="text-white">
      <h2 className="text-2xl font-normal mb-6">
        17. Are you part of other partner program?
      </h2>
      <div className="space-y-3">
        {options.map((option) => (
          <label
            key={option.id}
            className="flex items-center w-full px-5 py-4 bg-[#1a1d2e] border border-[#2d3348] rounded-lg cursor-pointer hover:border-[#3d4358] transition-colors"
          >
            <div className="relative flex items-center justify-center w-5 h-5 mr-4">
              <input
                type="checkbox"
                checked={formData.other_partner_programs === option.id}
                onChange={() => handleCheckboxChange(option.id)}
                className="w-5 h-5 bg-transparent border-2 border-gray-600 rounded appearance-none checked:bg-white cursor-pointer"
              />
              {formData.other_partner_programs === option.id && (
                <svg
                  className="absolute w-3 h-3 text-black pointer-events-none"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              )}
            </div>
            <span className="heading-6 text-[#FFFFFFB2] font-normal text-base">
              {option.label}
            </span>
          </label>
        ))}
      </div>
      {errors?.other_partner_programs && (
        <p className="text-red-500 text-sm mt-2">{errors.other_partner_programs}</p>
      )}
    </div>
  );
};
const LastPart: StepComponent = () => (
  <div className="text-[#FFFFFF] heading-3 font-normal max-w-[581px]">
    <p>
      You are doing great. In this last part, we'd like to know more about your
      expertise with MIRYA.
    </p>
  </div>
);

const Step18: StepComponent = ({ formData, updateFormData, errors }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      18. Would you mind listing them here?
    </h2>
    <input
      type="text"
      placeholder="Type your Answer..."
      value={formData.partner_program_list || ""}
      onChange={(e) => updateFormData("partner_program_list", e.target.value)}
      className={`w-full px-4 py-3 bg-transparent border ${errors?.partner_program_list ? 'border-red-500' : 'border-gray-700'} rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500`}
    />
    {errors?.partner_program_list && (
      <p className="text-red-500 text-sm mt-2">{errors.partner_program_list}</p>
    )}
  </div>
);

const Step19: StepComponent = ({ formData, updateFormData, errors }) => {
  const options = [
    { id: "Yes", label: "Yes, I'm ready using MIRYA with client" },
    { id: "Planning", label: "I'm planning to start ASAP" },
    { id: "No", label: "Not yet, I'm just exploring" },
    { id: "Other", label: "Other" },
  ];

  const handleCheckboxChange = (optionId: string) => {
    updateFormData("mirya_implementation_status", optionId);
  };

  return (
    <div className="text-white">
      <h2 className="text-2xl font-normal mb-6">
        19. Are you ready implementing MIRYA for your client?
      </h2>
      <div className="space-y-3">
        {options.map((option) => (
          <label
            key={option.id}
            className="flex items-center w-full px-5 py-4 bg-[#1a1d2e] border border-[#2d3348] rounded-lg cursor-pointer hover:border-[#3d4358] transition-colors"
          >
            <div className="relative flex items-center justify-center w-5 h-5 mr-4">
              <input
                type="checkbox"
                checked={formData.mirya_implementation_status === option.id}
                onChange={() => handleCheckboxChange(option.id)}
                className="w-5 h-5 bg-transparent border-2 border-gray-600 rounded appearance-none checked:bg-white cursor-pointer"
              />
              {formData.mirya_implementation_status === option.id && (
                <svg
                  className="absolute w-3 h-3 text-black pointer-events-none"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              )}
            </div>
            <span className="heading-6 text-[#FFFFFFB2] font-normal text-base">
              {option.label}
            </span>
          </label>
        ))}
      </div>
      {errors?.mirya_implementation_status && (
        <p className="text-red-500 text-sm mt-2">{errors.mirya_implementation_status}</p>
      )}
    </div>
  );
};;

const Step20: StepComponent = ({ formData, updateFormData, errors }) => {
  const options = [
    { id: "<5", label: "Less than 5" },
    { id: "5-10", label: "Between 5 and 10" },
    { id: ">10", label: "More than 10" },
  ];

  const handleCheckboxChange = (optionId: string) => {
    updateFormData("mirya_clients_count", optionId);
  };

  return (
    <div className="text-white">
      <h2 className="text-2xl font-normal mb-6">
        20. How many client are currently using MIRYA?
      </h2>
      <div className="space-y-3">
        {options.map((option) => (
          <label
            key={option.id}
            className="flex items-center w-full px-5 py-4 bg-[#1a1d2e] border border-[#2d3348] rounded-lg cursor-pointer hover:border-[#3d4358] transition-colors"
          >
            <div className="relative flex items-center justify-center w-5 h-5 mr-4">
              <input
                type="checkbox"
                checked={formData.mirya_clients_count === option.id}
                onChange={() => handleCheckboxChange(option.id)}
                className="w-5 h-5 bg-transparent border-2 border-gray-600 rounded appearance-none checked:bg-white cursor-pointer"
              />
              {formData.mirya_clients_count === option.id && (
                <svg
                  className="absolute w-3 h-3 text-black pointer-events-none"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              )}
            </div>
            <span className="heading-6 text-[#FFFFFFB2] font-normal text-base">
              {option.label}
            </span>
          </label>
        ))}
      </div>
      {errors?.mirya_clients_count && (
        <p className="text-red-500 text-sm mt-2">{errors.mirya_clients_count}</p>
      )}
    </div>
  );
};
const Step21: StepComponent = ({ formData, updateFormData }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      21. Please share a reference client:
    </h2>
    <input
      type="text"
      placeholder="Type your Answer..."
      value={formData.reference_client || ""}
      onChange={(e) => updateFormData("reference_client", e.target.value)}
      className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
    />
  </div>
);

const Step22: StepComponent = ({ formData, updateFormData }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      22. If you have a youtube or LinkedIn channel where you talk about MIRYA,
      please share your channel ID.
    </h2>
    <input
      type="text"
      placeholder="Type your Answer..."
      value={formData.social_channel_id || ""}
      onChange={(e) => updateFormData("social_channel_id", e.target.value)}
      className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
    />
  </div>
);

const Step23: StepComponent = ({ formData, updateFormData, errors }) => {
  const options = [
    { id: "0", label: "Code Contribution" },
    { id: "1", label: "Participated in the community form" },
    { id: "2", label: "Built Community Nodes" },
    { id: "3", label: "Written or Updated Documentation" },
    { id: "4", label: "Ambassador Program" },
    { id: "5", label: "Other" },
  ];

  const handleCheckboxChange = (optionId: string) => {
    const currentContributions = formData.mirya_contributions || [];
    const newContributions = currentContributions.includes(optionId)
      ? currentContributions.filter((id) => id !== optionId)
      : [...currentContributions, optionId];
    updateFormData("mirya_contributions", newContributions);
  };

  return (
    <div className="text-white">
      <h2 className="text-2xl font-normal mb-6">
        23. In which ways have you contribute to MIRYA?
      </h2>
      <div className="space-y-3">
        {options.map((option) => (
          <label
            key={option.id}
            className="flex items-center w-full px-5 py-4 bg-[#1a1d2e] border border-[#2d3348] rounded-lg cursor-pointer hover:border-[#3d4358] transition-colors"
          >
            <div className="relative flex items-center justify-center w-5 h-5 mr-4">
              <input
                type="checkbox"
                checked={(formData.mirya_contributions || []).includes(
                  option.id
                )}
                onChange={() => handleCheckboxChange(option.id)}
                className="w-5 h-5 bg-transparent border-2 border-gray-600 rounded appearance-none checked:bg-white cursor-pointer"
              />
              {(formData.mirya_contributions || []).includes(option.id) && (
                <svg
                  className="absolute w-3 h-3 text-black pointer-events-none"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              )}
            </div>
            <span className="heading-6 text-[#FFFFFFB2] font-normal text-base">
              {option.label}
            </span>
          </label>
        ))}
      </div>
      {errors?.mirya_contributions && (
        <p className="text-red-500 text-sm mt-2">{errors.mirya_contributions}</p>
      )}
    </div>
  );
};

const Step24: StepComponent = ({ formData, updateFormData }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      24. Could you share relevant documentation about any of your
      contributions?
    </h2>
    <input
      type="text"
      placeholder="Type your Answer..."
      value={formData.contribution_documentation || ""}
      onChange={(e) =>
        updateFormData("contribution_documentation", e.target.value)
      }
      className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
    />
  </div>
);

const Step25: StepComponent = ({ formData, updateFormData, errors }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      25. Anything else you would like to let us know?
    </h2>
    <input
      type="text"
      placeholder="Type your Answer..."
      value={formData.additional_info || ""}
      onChange={(e) => updateFormData("additional_info", e.target.value)}
      className={`w-full px-4 py-3 bg-transparent border ${errors?.additional_info ? 'border-red-500' : 'border-gray-700'} rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500`}
    />
    {errors?.additional_info && (
      <p className="text-red-500 text-sm mt-2">{errors.additional_info}</p>
    )}
  </div>
);

// Main App Component
export default function OnboardingSteps() {
  // Define all step components
  const allSteps: StepComponent[] = [
    StartStep, // 0
    Step1, // 1
    Step2, // 2
    Step3, // 3
    Step4, // 4
    Step5, // 5
    Step6, // 6
    Step7, // 7
    Step8, // 8
    Step9, // 9
    Step10, // 10
    StartService, // 11
    Step11, // 12
    Step12, // 13
    Step13, // 14
    Step14, // 15
    Step15, // 16
    Step16, // 17
    Step17, // 18
    LastPart, // 19
    Step18, // 20
    Step19, // 21
    Step20, // 22
    Step21, // 23
    Step22, // 24
    Step23, // 25
    Step24, // 26
    Step25, // 27
  ];

  // Indexes that should be excluded from progress calculation
  const EXCLUDED_STEP_INDEXES = [0, 11, 19];

  // Steps that should show skip button
  const STEPS_WITH_SKIP_BUTTON = [23, 24, 26];

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [formData, setFormData] = useState<OnboardingFormData>({
    email: "",
    first_name: "",
    last_name: "",
  });
  const [expertId, setExpertId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Calculate progress values
  const calculateProgressValues = (stepIndex: number) => {
    let totalVisibleSteps = 0;
    for (let i = 0; i < allSteps.length; i++) {
      if (!EXCLUDED_STEP_INDEXES.includes(i)) {
        totalVisibleSteps++;
      }
    }

    let progressStep = 0;
    for (let i = 0; i <= stepIndex; i++) {
      if (!EXCLUDED_STEP_INDEXES.includes(i)) {
        progressStep++;
      }
    }

    return {
      progressStep: Math.max(1, progressStep),
      totalVisibleSteps,
    };
  };

  const { progressStep, totalVisibleSteps } =
    calculateProgressValues(currentStepIndex);

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

  // Validation functions for each step
  const validateStep = (stepIndex: number): boolean => {
    const newErrors: Record<string, string> = {};
    
    switch (stepIndex) {
      case 1: // First name
        if (!formData.first_name?.trim()) {
          newErrors.first_name = "First name is required";
        }
        break;
      case 2: // Last name
        if (!formData.last_name?.trim()) {
          newErrors.last_name = "Last name is required";
        }
        break;
      case 4: // Email
        if (!formData.email?.trim()) {
          newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = "Please enter a valid email";
        }
        break;
      case 5: // Company name
        if (!formData.company_name?.trim()) {
          newErrors.company_name = "Company name is required";
        }
        break;
      case 6: // Company website
        if (!formData.company_website?.trim()) {
          newErrors.company_website = "Company website is required";
        }
        break;
      case 7: // Role
        if (!formData.role?.trim()) {
          newErrors.role = "Role is required";
        }
        break;
      case 8: // Employee count
        if (!formData.employee_count) {
          newErrors.employee_count = "Please select an option";
        }
        break;
      case 9: // Country
        if (!formData.country?.trim()) {
          newErrors.country = "Country is required";
        }
        break;
      case 10: // City
        if (!formData.city?.trim()) {
          newErrors.city = "City is required";
        }
        break;
      case 12: // Client count
        if (!formData.client_count) {
          newErrors.client_count = "Please select an option";
        }
        break;
      case 13: // Typical clients
        if (!formData.typical_clients) {
          newErrors.typical_clients = "Please select an option";
        }
        break;
      case 14: // Services provided
        if (!formData.services_provided || formData.services_provided.length === 0) {
          newErrors.services_provided = "Please select at least one service";
        }
        break;
      case 15: // Company description
        if (!formData.company_description?.trim()) {
          newErrors.company_description = "Company description is required";
        }
        break;
      case 16: // Industry focus
        if (!formData.industry_focus?.trim()) {
          newErrors.industry_focus = "Industry focus is required";
        }
        break;
      case 17: // Average project size
        if (!formData.average_project_size) {
          newErrors.average_project_size = "Please select an option";
        }
        break;
      case 18: // Other partner programs
        if (!formData.other_partner_programs) {
          newErrors.other_partner_programs = "Please select an option";
        }
        break;
      case 20: // Partner program list
        if (formData.other_partner_programs === "Yes" && !formData.partner_program_list?.trim()) {
          newErrors.partner_program_list = "Please list your partner programs";
        }
        break;
      case 21: // Mirya implementation status
        if (!formData.mirya_implementation_status) {
          newErrors.mirya_implementation_status = "Please select an option";
        }
        break;
      case 22: // Mirya clients count
        if (!formData.mirya_clients_count) {
          newErrors.mirya_clients_count = "Please select an option";
        }
        break;
      case 25: // Mirya contributions
        if (!formData.mirya_contributions || formData.mirya_contributions.length === 0) {
          newErrors.mirya_contributions = "Please select at least one contribution";
        }
        break;
      case 27: // Additional info
        if (!formData.additional_info?.trim()) {
          newErrors.additional_info = "This field is required";
        }
        break;
      default:
        // Steps 3, 11, 19, 23, 24, 26 are optional
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Function to handle first API errors properly
  const handleFirstApiErrors = (errorData: any) => {
    if (errorData.errors) {
      const errorFields = Object.keys(errorData.errors);
      
      if (errorFields.length > 0) {
        const firstField = errorFields[0];
        const firstError = errorData.errors[firstField];
        
        if (Array.isArray(firstError) && firstError.length > 0) {
          toast.error(`${firstField}: ${firstError[0]}`);
        } else if (typeof firstError === 'string') {
          toast.error(`${firstField}: ${firstError}`);
        } else {
          toast.error('Validation error occurred');
        }
      } else {
        toast.error('Validation error occurred');
      }
    } else if (errorData.message) {
      toast.error(errorData.message);
    } else {
      toast.error('Failed to create account');
    }
  };

  // Function to handle second API errors properly
  const handleSecondApiErrors = (errorData: any) => {
    if (errorData.errors) {
      const errorFields = Object.keys(errorData.errors);
      
      if (errorFields.length > 0) {
        const firstField = errorFields[0];
        const firstError = errorData.errors[firstField];
        
        if (Array.isArray(firstError) && firstError.length > 0) {
          toast.error(`${firstField}: ${firstError[0]}`);
        } else if (typeof firstError === 'string') {
          toast.error(`${firstField}: ${firstError}`);
        } else {
          toast.error('Validation error occurred');
        }
      } else {
        toast.error('Validation error occurred');
      }
    } else if (errorData.message) {
      toast.error(errorData.message);
    } else {
      toast.error('Failed to save details');
    }
  };

  const submitExpertCreation = async () => {
    try {
      const payload = {
        email: formData.email,
        first_name: formData.first_name,
        last_name: formData.last_name,
        phone_number: formData.phone_number || "",
      };

      const res = await expertsAPi.postExperts(payload as any);

      if (!res || !res.data) {
        toast.error("Network error");
        return false;
      }

      const data = res.data;

      if (data.status === false) {
        handleFirstApiErrors(data);
        return false;
      }

      // Store for 2nd API
      localStorage.setItem("expert_email", data?.email || payload.email);

      if (data?.message) {
        toast.success(data.message);
        return true;
      }

      return false;
    } catch (err: any) {
      const data = err?.response?.data;

      if (data?.message || data?.errors) {
        handleFirstApiErrors(data);
      } else {
        toast.error("Network error");
      }

      return false;
    }
  };

  const submitExpertDetails = async () => {
    // If this is an informational step (11 or 19), just return success without API call
    if (currentStepIndex === 11 || currentStepIndex === 19) {
      return true;
    }

    setIsSubmitting(true);
    try {
      const userEmail = localStorage.getItem("expert_email");

      // Helper function to get step field name
      const getStepFieldName = (stepIndex: number) => {
        switch (stepIndex) {
          case 5:
            return "company_name";
          case 6:
            return "company_website";
          case 7:
            return "role";
          case 8:
            return "employee_count";
          case 9:
            return "country";
          case 10:
            return "city";
          case 12:
            return "client_count";
          case 13:
            return "typical_clients";
          case 14:
            return "services_provided";
          case 15:
            return "company_description";
          case 16:
            return "industry_focus";
          case 17:
            return "average_project_size";
          case 18:
            return "other_partner";
          case 20:
            return "partner_program_list";
          case 21:
            return "mirya_implementation";
          case 22:
            return "mirya_clients_count";
          case 23:
            return "reference_client";
          case 24:
            return "social_channel_id";
          case 25:
            return "mirya_contributions";
          case 26:
            return "contribution";
          case 27:
            return "additional_info";
          default:
            return "";
        }
      };

      // Get the field name for current step
      const fieldName = getStepFieldName(currentStepIndex);

      // If no field name, don't call API (for informational steps)
      if (!fieldName) {
        return true;
      }

      // Prepare payload for each step
      const payload = {
        step: currentStepIndex,
        key: fieldName,
        metadata: "",
        email: userEmail || formData.email,
      };

      // Add step-specific metadata
      switch (currentStepIndex) {
        case 5:
          payload.metadata = JSON.stringify(formData.company_name || "");
          break;
        case 6:
          payload.metadata = JSON.stringify(formData.company_website || "");
          break;
        case 7:
          payload.metadata = JSON.stringify(formData.role || "");
          break;
        case 8:
          payload.metadata = JSON.stringify(formData.employee_count || "");
          break;
        case 9:
          payload.metadata = JSON.stringify(formData.country || "");
          break;
        case 10:
          payload.metadata = JSON.stringify(formData.city || "");
          break;
        case 12:
          payload.metadata = JSON.stringify(formData.client_count || "");
          break;
        case 13:
          payload.metadata = JSON.stringify(formData.typical_clients || "");
          break;
        case 14:
          payload.metadata = JSON.stringify(formData.services_provided || []);
          break;
        case 15:
          payload.metadata = JSON.stringify(formData.company_description || "");
          break;
        case 16:
          payload.metadata = JSON.stringify(formData.industry_focus || "");
          break;
        case 17:
          payload.metadata = JSON.stringify(formData.average_project_size || "");
          break;
        case 18:
          payload.metadata = JSON.stringify(formData.other_partner_programs || "");
          break;
        case 20:
          payload.metadata = JSON.stringify(formData.partner_program_list || "");
          break;
        case 21:
          payload.metadata = JSON.stringify(formData.mirya_implementation_status || "");
          break;
        case 22:
          payload.metadata = JSON.stringify(formData.mirya_clients_count || "");
          break;
        case 23:
          payload.metadata = JSON.stringify(formData.reference_client || "");
          break;
        case 24:
          payload.metadata = JSON.stringify(formData.social_channel_id || "");
          break;
        case 25:
          payload.metadata = JSON.stringify(formData.mirya_contributions || []);
          break;
        case 26:
          payload.metadata = JSON.stringify(formData.contribution_documentation || "");
          break;
        case 27:
          payload.metadata = JSON.stringify(formData.additional_info || "");
          break;
        default:
          return true;
      }

      // Only call API if we have valid data
      const response = await expertsAPi.postExpertsDetail(payload);

      if (!response || !response.data) {
        toast.error("Network error");
        return false;
      }

      const data = response.data;

      if (data.status === false) {
        handleSecondApiErrors(data);
        return false;
      }

      // Store step data in localStorage for debugging
      localStorage.setItem(`step_${currentStepIndex}_data`, JSON.stringify(payload));

      // For the last step, show completion message
      if (currentStepIndex === allSteps.length - 1) {
        toast.success("Onboarding completed successfully!");
        // Clear localStorage
        localStorage.removeItem("expert_email");
        // Clear all step data
        for (let i = 5; i <= 27; i++) {
          localStorage.removeItem(`step_${i}_data`);
        }

        // Reset form and go to first step
        setTimeout(() => {
          setFormData({
            email: "",
            first_name: "",
            last_name: "",
          });
          setExpertId(null);
          setCurrentStepIndex(0);
        }, 1000);
      }

      return true;
    } catch (error: any) {
      console.error("Error submitting expert details:", error);

      const data = error?.response?.data;
      if (data?.message || data?.errors) {
        handleSecondApiErrors(data);
      } else {
        toast.error("Network error");
      }

      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0 && !isSubmitting) {
      setCurrentStepIndex(currentStepIndex - 1);
      setErrors({});
    }
  };

  const handleContinue = async () => {
    if (isSubmitting) return;

    // Validate current step
    const isValid = validateStep(currentStepIndex);
    if (!isValid) {
      return;
    }

    // Check if we need to submit first API (after step 4 - email, first name, last name, phone)
    if (currentStepIndex === 4) {
      setIsSubmitting(true);
      try {
        const success = await submitExpertCreation();
        if (success) {
          setCurrentStepIndex((prev) => prev + 1);
          setErrors({});
        }
      } catch (error) {
        console.error("Error in handleContinue:", error);
      } finally {
        setIsSubmitting(false);
      }
      return;
    }

    // Skip API calls for informational steps (index 11 - StartService, index 19 - LastPart)
    if (currentStepIndex === 11 || currentStepIndex === 19) {
      // Just move to next step without API call
      setCurrentStepIndex((prev) => prev + 1);
      setErrors({});
      return;
    }

    // For steps after 4 (except informational ones), submit details for each step
    if (currentStepIndex > 4 && currentStepIndex <= 27) {
      setIsSubmitting(true);
      try {
        // Submit the current step's data
        const success = await submitExpertDetails();

        // Only move to next step if submission was successful
        if (success && currentStepIndex < allSteps.length - 1) {
          setCurrentStepIndex((prev) => prev + 1);
          setErrors({});
        }
      } catch (error) {
        console.error("Error submitting step:", error);
      } finally {
        setIsSubmitting(false);
      }
      return;
    }

    // For steps before 4 (1-3), just move to next step
    if (currentStepIndex < 4) {
      setCurrentStepIndex((prev) => prev + 1);
      setErrors({});
    }
  };

  const handleSkip = () => {
    if (!isSubmitting && currentStepIndex < allSteps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
      setErrors({});
    }
  };

  const CurrentStepComponent = allSteps[currentStepIndex];
  const showProgress = !EXCLUDED_STEP_INDEXES.includes(currentStepIndex);
  const showSkipButton = STEPS_WITH_SKIP_BUTTON.includes(currentStepIndex);

  return (
    <OnboardingLayout
      currentStep={progressStep}
      totalSteps={totalVisibleSteps}
      onBack={handleBack}
      onContinue={handleContinue}
      onSkip={handleSkip}
      showProgress={showProgress}
      showSkipButton={showSkipButton}
    >
      <CurrentStepComponent
        onSkip={handleSkip}
        showSkipButton={showSkipButton}
        formData={formData}
        updateFormData={updateFormData}
        errors={errors}
      />
    </OnboardingLayout>
  );
}