import { StepComponent } from "../types";

export const Step13: StepComponent = ({ formData, updateFormData, errors }) => {
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
