import { StepComponent } from "../types";

export const Step5: StepComponent = ({ formData, updateFormData, errors , onEnter }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      5. What is the name of your company?
    </h2>
    <input
      type="text"
      placeholder="Company Name"
      onKeyDown={onEnter}
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
