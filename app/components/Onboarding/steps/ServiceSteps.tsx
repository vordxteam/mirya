"use client";
import { StepProps } from "../types";

export const Step11: React.FC<StepProps> = ({ formData, updateFormData, errors }) => {
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
            className="flex items-center max-w-[381px] w-full px-5 py-4 bg-[#1a1d2e] border border-[#2d3348] rounded-lg cursor-pointer hover:border-[#3d4358] transition-colors"
          >
            <div className="relative flex items-center justify-center w-5 h-5 mr-4">
              <input
                type="checkbox"
                checked={formData.client_count === option.id}
                onChange={() => handleCheckboxChange(option.id)}
                className="w-5 h-5 bg-transparent border-2 border-[#FFFFFFB2] rounded appearance-none checked:bg-white cursor-pointer"
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

export const Step12: React.FC<StepProps> = ({ formData, updateFormData, errors }) => {
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
            className="flex items-center w-full max-w-[381px] px-5 py-4 bg-[#1a1d2e] border border-[#2d3348] rounded-lg cursor-pointer hover:border-[#3d4358] transition-colors"
          >
            <div className="relative flex items-center justify-center w-5 h-5 mr-4">
              <input
                type="checkbox"
                checked={formData.typical_clients === option.id}
                onChange={() => handleCheckboxChange(option.id)}
                className="w-5 h-5 bg-transparent border-2 border-[#FFFFFFB2] rounded appearance-none checked:bg-white cursor-pointer"
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

export const Step13: React.FC<StepProps> = ({ formData, updateFormData, errors }) => {
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
            className="flex items-center w-full max-w-[381px] px-5 py-4 bg-[#1a1d2e] border border-[#2d3348] rounded-lg cursor-pointer hover:border-[#3d4358] transition-colors"
          >
            <div className="relative flex items-center justify-center w-5 h-5 mr-4">
              <input
                type="checkbox"
                checked={(formData.services_provided || []).includes(option.id)}
                onChange={() => handleCheckboxChange(option.id)}
                className="w-5 h-5 bg-transparent border-2 border-[#FFFFFFB2] rounded appearance-none checked:bg-white cursor-pointer"
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

export const Step14: React.FC<StepProps> = ({ formData, updateFormData, errors }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      14. Company Description
    </h2>
    <textarea
      placeholder="Briefly describe your company's services, mission, and expertise..."
      value={formData.company_description || ""}
      onChange={(e) => updateFormData("company_description", e.target.value)}
      rows={6}
      className={`w-full px-4 py-3 bg-transparent border ${
        errors?.company_description ? "border-red-500" : "border-gray-700"
      } rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 resize-none`}
    />
    {errors?.company_description && (
      <p className="text-red-500 text-sm mt-2">{errors.company_description}</p>
    )}
  </div>
);

export const Step15: React.FC<StepProps> = ({ formData, updateFormData, errors }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      15. Any specific industry you focus on?
    </h2>
    <input
      type="text"
      placeholder="Type your Answer..."
      value={formData.industry_focus || ""}
      onChange={(e) => updateFormData("industry_focus", e.target.value)}
      className={`w-full px-4 py-3 bg-transparent border ${
        errors?.industry_focus ? "border-red-500" : "border-gray-700"
      } rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500`}
    />
    {errors?.industry_focus && (
      <p className="text-red-500 text-sm mt-2">{errors.industry_focus}</p>
    )}
  </div>
);

export const Step16: React.FC<StepProps> = ({ formData, updateFormData, errors }) => {
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
            className="flex items-center w-full max-w-[381px] px-5 py-4 bg-[#1a1d2e] border border-[#2d3348] rounded-lg cursor-pointer hover:border-[#3d4358] transition-colors"
          >
            <div className="relative flex items-center justify-center w-5 h-5 mr-4">
              <input
                type="checkbox"
                checked={formData.average_project_size === option.id}
                onChange={() => handleCheckboxChange(option.id)}
                className="w-5 h-5 bg-transparent border-2 border-[#FFFFFFB2] rounded appearance-none checked:bg-white cursor-pointer"
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
        <p className="text-red-500 text-sm mt-2">
          {errors.average_project_size}
        </p>
      )}
    </div>
  );
};

export const Step17: React.FC<StepProps> = ({ formData, updateFormData, errors }) => {
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
            className="flex items-center w-full max-w-[381px] px-5 py-4 bg-[#1a1d2e] border border-[#2d3348] rounded-lg cursor-pointer hover:border-[#3d4358] transition-colors"
          >
            <div className="relative flex items-center justify-center w-5 h-5 mr-4">
              <input
                type="checkbox"
                checked={formData.other_partner_programs === option.id}
                onChange={() => handleCheckboxChange(option.id)}
                className="w-5 h-5 bg-transparent border-2 border-[#FFFFFFB2] rounded appearance-none checked:bg-white cursor-pointer"
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
        <p className="text-red-500 text-sm mt-2">
          {errors.other_partner_programs}
        </p>
      )}
    </div>
  );
};

export const Step18: React.FC<StepProps> = ({ formData, updateFormData, errors }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      18. Would you mind listing them here?
    </h2>
    <input
      type="text"
      placeholder="Type your Answer..."
      value={formData.partner_program_list || ""}
      onChange={(e) => updateFormData("partner_program_list", e.target.value)}
      className={`w-full px-4 py-3 bg-transparent border ${
        errors?.partner_program_list ? "border-red-500" : "border-gray-700"
      } rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500`}
    />
    {errors?.partner_program_list && (
      <p className="text-red-500 text-sm mt-2">{errors.partner_program_list}</p>
    )}
  </div>
);
