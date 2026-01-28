"use client";
import { StepProps } from "../types";

export const Step5: React.FC<StepProps> = ({ formData, updateFormData, errors }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      5. What is the name of your company?
    </h2>
    <input
      type="text"
      placeholder="Company name"
      value={formData.company_name || ""}
      onChange={(e) => updateFormData("company_name", e.target.value)}
      className={`w-full px-4 py-3 bg-transparent border ${
        errors?.company_name ? "border-red-500" : "border-gray-700"
      } rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500`}
    />
    {errors?.company_name && (
      <p className="text-red-500 text-sm mt-2">{errors.company_name}</p>
    )}
  </div>
);

export const Step6: React.FC<StepProps> = ({ formData, updateFormData, errors }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      6. What's the company website?
    </h2>
    <input
      type="text"
      placeholder="Company Website"
      value={formData.company_website || ""}
      onChange={(e) => updateFormData("company_website", e.target.value)}
      className={`w-full px-4 py-3 bg-transparent border ${
        errors?.company_website ? "border-red-500" : "border-gray-700"
      } rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500`}
    />
    {errors?.company_website && (
      <p className="text-red-500 text-sm mt-2">{errors.company_website}</p>
    )}
  </div>
);

export const Step7: React.FC<StepProps> = ({ formData, updateFormData, errors }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      7. What is your role?
    </h2>
    <input
      type="text"
      placeholder="Your Role"
      value={formData.role || ""}
      onChange={(e) => updateFormData("role", e.target.value)}
      className={`w-full px-4 py-3 bg-transparent border ${
        errors?.role ? "border-red-500" : "border-gray-700"
      } rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500`}
    />
    {errors?.role && <p className="text-red-500 text-sm mt-2">{errors.role}</p>}
  </div>
);

export const Step8: React.FC<StepProps> = ({ formData, updateFormData, errors }) => {
  const options = [
    { id: "just-me", label: "Just Me" },
    { id: "6-10", label: "6 - 10" },
    { id: "50-100", label: "50 - 100" },
    { id: "200-500", label: "200-500" },
    { id: "plus-1000", label: "+ 1000" },
  ];

  const handleCheckboxChange = (optionId: string) => {
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
            className="flex items-center w-full max-w-[381px] px-5 py-4 bg-[#1a1d2e] border border-[#2d3348] rounded-lg cursor-pointer hover:border-[#3d4358] transition-colors"
          >
            <div className="relative flex items-center justify-center w-5 h-5 mr-4">
              <input
                type="checkbox"
                checked={formData.employee_count === option.id}
                onChange={() => handleCheckboxChange(option.id)}
                className="w-5 h-5 bg-transparent border-2 border-[#FFFFFFB2] rounded appearance-none checked:bg-white cursor-pointer"
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

export const Step9: React.FC<StepProps> = ({ formData, updateFormData, errors }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      9. In which country are you currently located?
    </h2>
    <input
      type="text"
      placeholder="Country Name"
      value={formData.country || ""}
      onChange={(e) => updateFormData("country", e.target.value)}
      className={`w-full px-4 py-3 bg-transparent border ${
        errors?.country ? "border-red-500" : "border-gray-700"
      } rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500`}
    />
    {errors?.country && (
      <p className="text-red-500 text-sm mt-2">{errors.country}</p>
    )}
  </div>
);

export const Step10: React.FC<StepProps> = ({ formData, updateFormData, errors }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      10. In which city are you based?
    </h2>
    <input
      type="text"
      placeholder="City Name"
      value={formData.city || ""}
      onChange={(e) => updateFormData("city", e.target.value)}
      className={`w-full px-4 py-3 bg-transparent border ${
        errors?.city ? "border-red-500" : "border-gray-700"
      } rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500`}
    />
    {errors?.city && <p className="text-red-500 text-sm mt-2">{errors.city}</p>}
  </div>
);

export const StartService: React.FC<StepProps> = () => (
  <div className="text-[#FFFFFF] heading-3 font-normal max-w-[581px]">
    <p>
      Thanks for sharing your details! Next, we'll ask a few questions about
      your services and the customers you support.
    </p>
  </div>
);
