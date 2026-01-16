import { StepComponent } from "../types";

export const Step15: StepComponent = ({ formData, updateFormData, errors }) => (
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
