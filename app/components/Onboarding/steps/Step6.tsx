import { StepComponent } from "../types";

export const Step6: StepComponent = ({ formData, updateFormData, errors , onEnter }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      6. What's the company website?
    </h2>
    <input
      type="text"
      placeholder="Company Website"
      value={formData.company_website || ""}
      onKeyDown={onEnter}
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
