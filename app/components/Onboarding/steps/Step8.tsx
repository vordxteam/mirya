import { StepComponent } from "../types";
import { useTranslation } from "react-i18next";

export const Step8: StepComponent = ({
  formData,
  updateFormData,
  errors,
  onEnter
}) => {
  const { t } = useTranslation("onboarding");

  const options = [
    { id: "just-me", label: t("step8.options.justMe") },
    { id: "6-10", label: t("step8.options.sixToTen") },
    { id: "50-100", label: t("step8.options.fiftyToHundred") },
    { id: "200-500", label: t("step8.options.twoHundredToFiveHundred") },
    { id: "plus-1000", label: t("step8.options.plusThousand") },
  ];

  const handleCheckboxChange = (optionId: string) => {
    updateFormData("employee_count", optionId);
  };

  return (
    <div className="text-white">
      <h2 className="text-2xl font-normal mb-6">
        {t("step8.title")}
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
                onKeyDown={onEnter}
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
        <p className="text-red-500 text-sm mt-2">
          {errors.employee_count}
        </p>
      )}
    </div>
  );
};
