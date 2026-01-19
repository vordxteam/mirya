import { StepComponent } from "../types";

export const Step7: StepComponent = ({ formData, updateFormData, errors ,onEnter }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      7. What is your role?
    </h2>
    <input
      type="text"
      placeholder="Your Role"
      value={formData.role || ""}
      onKeyDown={onEnter}
      onChange={(e) => updateFormData("role", e.target.value)}
      className={`w-full px-4 py-3 bg-transparent border ${
        errors?.role ? "border-red-500" : "border-gray-700"
      } rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500`}
    />
    {errors?.role && <p className="text-red-500 text-sm mt-2">{errors.role}</p>}
  </div>
);
