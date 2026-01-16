import { StepComponent } from "../types";

export const Step2: StepComponent = ({ formData, updateFormData, errors }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      2. What's your last name?
    </h2>
    <input
      type="text"
      placeholder="Last name"
      value={formData.last_name || ""}
      onChange={(e) => updateFormData("last_name", e.target.value)}
      className={`w-full px-4 py-3 bg-transparent border ${
        errors?.last_name ? "border-red-500" : "border-gray-700"
      } rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500`}
    />
    {errors?.last_name && (
      <p className="text-red-500 text-sm mt-2">{errors.last_name}</p>
    )}
  </div>
);
