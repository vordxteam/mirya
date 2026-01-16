"use client";
import { StepProps } from "../types";

export const LastPart: React.FC<StepProps> = () => (
  <div className="text-[#FFFFFF] heading-3 font-normal max-w-[581px]">
    <p>
      You are doing great. In this last part, we'd like to know more about your
      expertise with MIRYA.
    </p>
  </div>
);

export const Step19: React.FC<StepProps> = ({ formData, updateFormData, errors }) => {
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
        <p className="text-red-500 text-sm mt-2">
          {errors.mirya_implementation_status}
        </p>
      )}
    </div>
  );
};

export const Step20: React.FC<StepProps> = ({ formData, updateFormData, errors }) => {
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
        <p className="text-red-500 text-sm mt-2">
          {errors.mirya_clients_count}
        </p>
      )}
    </div>
  );
};

export const Step21: React.FC<StepProps> = ({ formData, updateFormData }) => (
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

export const Step22: React.FC<StepProps> = ({ formData, updateFormData }) => (
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

export const Step23: React.FC<StepProps> = ({ formData, updateFormData, errors }) => {
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
                checked={(formData.mirya_contributions || []).includes(option.id)}
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
        <p className="text-red-500 text-sm mt-2">
          {errors.mirya_contributions}
        </p>
      )}
    </div>
  );
};

export const Step24: React.FC<StepProps> = ({ formData, updateFormData }) => (
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

export const Step25: React.FC<StepProps> = ({ formData, updateFormData, errors }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      25. Anything else you would like to let us know?
    </h2>
    <input
      type="text"
      placeholder="Type your Answer..."
      value={formData.additional_info || ""}
      onChange={(e) => updateFormData("additional_info", e.target.value)}
      className={`w-full px-4 py-3 bg-transparent border ${
        errors?.additional_info ? "border-red-500" : "border-gray-700"
      } rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500`}
    />
    {errors?.additional_info && (
      <p className="text-red-500 text-sm mt-2">{errors.additional_info}</p>
    )}
  </div>
);
