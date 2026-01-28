import { StepComponent } from "../types";

export const Step16: StepComponent = ({ formData, updateFormData, errors , onEnter }) => {
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
            className="flex items-center max-w-[381px] w-full px-5 py-4 bg-[#1a1d2e] border border-[#2d3348] rounded-lg cursor-pointer hover:border-[#3d4358] transition-colors"
          >
            <div className="relative flex items-center justify-center w-5 h-5 mr-4">
              <input
                type="checkbox"
                checked={formData.average_project_size === option.id}
                onChange={() => handleCheckboxChange(option.id)}
                onKeyDown={onEnter}
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
