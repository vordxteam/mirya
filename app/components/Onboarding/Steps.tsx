"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { expertsAPI } from "@/app/api/onboarding";


// Import types
import { OnboardingFormData, StepComponent } from "./types";

// Import layout component
import { OnboardingLayout } from "./OnboardingLayout";

// Import all step components
import {
  StartStep,
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Step7,
  Step8,
  Step9,
  Step10,
  StartService,
  Step11,
  Step12,
  Step13,
  Step14,
  Step15,
  Step16,
  Step17,
  LastPart,
  Step18,
  Step19,
  Step20,
  Step21,
  Step22,
  Step23,
  Step24,
  Step25,
} from "./steps/";

// Import utility functions
import {
  handleFirstApiErrors,
  handleSecondApiErrors,
} from "./utils/apiErrorHandler";
import { validateStep } from "./utils/validationUtils";
import { useRouter } from "next/navigation";


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


  const router = useRouter()


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

  const handleValidateStep = (stepIndex: number): boolean => {
    const newErrors = validateStep(stepIndex, formData);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const submitExpertCreation = async () => {
 
  try {
    const payload = {
      email: formData.email,
      first_name: formData.first_name,
      last_name: formData.last_name,
      phone_number: formData.phone_number || "",
      
    };

 
    const res = await expertsAPI.postExperts(payload as any);
  
    const data = res.data;
    


    // Check if the API returned an error status
    if (data.status === false) {
  
      handleFirstApiErrors(data);
      return false;
    }

    // Handle success
    if (data.status === "success" || data.message) {
      localStorage.setItem("expert_email", data?.email || payload.email);
      // toast.success(data.message || "Account created successfully!");
      return true;
    }

    // If we get here, something unexpected happened
    toast.error("Unexpected response from server");
    return false;

  } catch (err: any) {
   
    // Handle network errors or 500/404 responses
    const data = err?.response?.data;
    
    if (data) {
 
      
      // Server responded with error
      if (data.status === false) {
        handleFirstApiErrors(data);
      } else if (data.message || data.errors) {
        handleFirstApiErrors(data);
      } else {
        toast.error("An error occurred");
      }
    } else {
      // Network error
      toast.error("Network error. Please check your connection.");
    }
    
    return false;
  } finally {
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
          payload.metadata = JSON.stringify(
            formData.average_project_size || ""
          );
          break;
        case 18:
          payload.metadata = JSON.stringify(
            formData.other_partner_programs || ""
          );
          break;
        case 20:
          payload.metadata = JSON.stringify(
            formData.partner_program_list || ""
          );
          break;
        case 21:
          payload.metadata = JSON.stringify(
            formData.mirya_implementation_status || ""
          );
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
          payload.metadata = JSON.stringify(
            formData.contribution_documentation || ""
          );
          break;
        case 27:
          payload.metadata = JSON.stringify(formData.additional_info || "");
          break;
        default:
          return true;
      }

      // Only call API if we have valid data
      const response = await expertsAPI.postExpertsDetail(payload);

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
      localStorage.setItem(
        `step_${currentStepIndex}_data`,
        JSON.stringify(payload)
      );

      // For the last step, show completion message
      if (currentStepIndex === allSteps.length - 1) {
        // toast.success("Onboarding completed successfully!");
        router.push('all-experts')


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
    // Validate current step
    const isValid = handleValidateStep(currentStepIndex);
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

  const handleEnter = (e:React.KeyboardEvent)=>{
      if (e.key === 'Enter') {
        handleContinue()
      }
  }

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
        onEnter = {handleEnter}
        errors={errors}
      />
    </OnboardingLayout>
  );
}