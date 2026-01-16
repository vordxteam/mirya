import { StepComponent } from "../types";

export const Step10: StepComponent = ({ formData, updateFormData, errors }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      10. In which city are you based?
    </h2>
    <input
      type="text"
      placeholder="City Name"
      value={formData.city || ""}
      onChange={(e) => updateFormData("city", e.target.value)}
      className={`w-full px-4 py-3 bg-transparent border ${
        errors?.city ? "border-red-500" : "border-gray-700"
      } rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500`}
    />
    {errors?.city && <p className="text-red-500 text-sm mt-2">{errors.city}</p>}
  </div>
);
