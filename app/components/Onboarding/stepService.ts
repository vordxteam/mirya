import { OnboardingFormData } from "./OnboardingContext";
import { expertsAPI } from "@/app/api/onboarding";

export const submitStepData = async (
  stepIndex: number,
  formData: OnboardingFormData,
  email: string
): Promise<{ success: boolean; expertId?: string; error?: string }> => {
  // Skip API calls for informational steps
  if (stepIndex === 0 || stepIndex === 11 || stepIndex === 19) {
    return { success: true };
  }

  // Step 4 is the first step that creates the expert
  if (stepIndex === 4) {
    try {
      const payload = {
        email: formData.email,
        first_name: formData.first_name,
        last_name: formData.last_name,
        phone_number: formData.phone_number || "",
      };

      const res = await expertsAPI.postExperts(payload as any);
      console.log("res", res)
      const data = res.data;

      // ❌ Explicit failure
      if (data?.status !== "success") {
        return {
          success: false,
          error: data?.message || "Failed to create expert account",
        };
      }

      // ✅ Success
      localStorage.setItem("expert_email", payload.email);

      return {
        success: true,
        // backend doesn't return id → don't depend on it
      };
    } catch (err: any) {
      return {
        success: false,
        error: err?.response?.data?.message || "Network error",
      };
    }
  }

  // Steps 5+ use the detail submission API
  try {
    const userEmail = localStorage.getItem("expert_email") || email;

    // Map step to field name
    const fieldMap: Record<number, { key: string; metadataGetter: () => any }> =
      {
        5: { key: "company_name", metadataGetter: () => formData.company_name },
        6: {
          key: "company_website",
          metadataGetter: () => formData.company_website,
        },
        7: { key: "role", metadataGetter: () => formData.role },
        8: {
          key: "employee_count",
          metadataGetter: () => formData.employee_count,
        },
        9: { key: "country", metadataGetter: () => formData.country },
        10: { key: "city", metadataGetter: () => formData.city },
        12: {
          key: "client_count",
          metadataGetter: () => formData.client_count,
        },
        13: {
          key: "typical_clients",
          metadataGetter: () => formData.typical_clients,
        },
        14: {
          key: "services_provided",
          metadataGetter: () => formData.services_provided,
        },
        15: {
          key: "company_description",
          metadataGetter: () => formData.company_description,
        },
        16: {
          key: "industry_focus",
          metadataGetter: () => formData.industry_focus,
        },
        17: {
          key: "average_project_size",
          metadataGetter: () => formData.average_project_size,
        },
        18: {
          key: "other_partner_programs",
          metadataGetter: () => formData.other_partner_programs,
        },
        20: {
          key: "partner_program_list",
          metadataGetter: () => formData.partner_program_list,
        },
        21: {
          key: "mirya_implementation_status",
          metadataGetter: () => formData.mirya_implementation_status,
        },
        22: {
          key: "mirya_clients_count",
          metadataGetter: () => formData.mirya_clients_count,
        },
        23: {
          key: "reference_client",
          metadataGetter: () => formData.reference_client,
        },
        24: {
          key: "social_channel_id",
          metadataGetter: () => formData.social_channel_id,
        },
        25: {
          key: "mirya_contributions",
          metadataGetter: () => formData.mirya_contributions,
        },
        26: {
          key: "contribution_documentation",
          metadataGetter: () => formData.contribution_documentation,
        },
        27: {
          key: "additional_info",
          metadataGetter: () => formData.additional_info,
        },
      };

    const fieldConfig = fieldMap[stepIndex];
    if (!fieldConfig) {
      return { success: true }; // Skip if no mapping
    }

    const payload = {
      step: stepIndex,
      key: fieldConfig.key,
      metadata: JSON.stringify(fieldConfig.metadataGetter() || ""),
      email: userEmail,
    };

    const response = await expertsAPI.postExpertsDetail(payload);

    if (!response || !response.data) {
      return { success: false, error: "Network error" };
    }

    const data = response.data;

    if (data.status === false) {
      return {
        success: false,
        error: data.message || "Failed to save step data",
      };
    }

    return { success: true };
  } catch (error: any) {
    const errorMsg = error?.response?.data?.message || "Network error";
    return { success: false, error: errorMsg };
  }
};
