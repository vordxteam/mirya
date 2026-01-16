import { OnboardingFormData } from "../types";

// Validation functions for each step
export const validateStep = (
  stepIndex: number,
  formData: OnboardingFormData
): Record<string, string> => {
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
      if (
        !formData.services_provided ||
        formData.services_provided.length === 0
      ) {
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
      if (
        formData.other_partner_programs === "Yes" &&
        !formData.partner_program_list?.trim()
      ) {
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
      if (
        !formData.mirya_contributions ||
        formData.mirya_contributions.length === 0
      ) {
        newErrors.mirya_contributions =
          "Please select at least one contribution";
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

  return newErrors;
};
