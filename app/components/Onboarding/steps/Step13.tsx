import { StepComponent } from "../types";

export const Step13: StepComponent = ({ formData, updateFormData, errors , onEnter }) => {
  const options = [
    { id: "eCommerce", label: "Process Guardian" },
    { id: "noCode", label: "Compliance & Governance Setup" },
    { id: "workFlowDesign", label: "AI Consulting" },
    { id: "automation", label: "Automation Center of Excellence Setup" },
    { id: "workFlowBuilding", label: "Priority Support &  Success Manager" },

    { id: "training", label: "2-Day MIRYA Starter Training" },
    { id: "integrations", label: "Custom Nodes and Integration" },
    { id: "workshop", label: "Automation Discovery Workshop" },
    { id: "blueprinting", label: "Process Recording & Blueprinting" },
    { id: "proofValue", label: "MIRYA Proof of Value (4 weeks)" },
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
      
      {/* Updated Container: Grid with 2 columns on medium screens and up */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option) => (
          <label
            key={option.id}
            className="flex items-center w-full max-w-[381px] px-5 py-4 bg-[#1a1d2e] border border-[#2d3348] rounded-lg cursor-pointer hover:border-[#3d4358] transition-colors h-full"
          >
            <div className="relative flex items-center justify-center w-5 h-5 mr-4 flex-shrink-0">
              <input
                type="checkbox"
                checked={(formData.services_provided || []).includes(option.id)}
                onChange={() => handleCheckboxChange(option.id)}
                onKeyDown={onEnter}
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
            <span className="heading-6 text-[#FFFFFFB2] font-normal text-base whitespace-nowrap">
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