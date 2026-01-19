import { StepComponent } from "../types";

export const Step1: StepComponent = ({ formData, updateFormData, errors , onEnter  }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      1. What's your first name?
    </h2>
    <input
      type="text"
      onKeyDown={onEnter}
      placeholder="First Name"
      value={formData.first_name || ""}
      onChange={(e) => updateFormData("first_name", e.target.value)}
      className={`w-full px-4 py-3 bg-transparent border ${
        errors?.first_name ? "border-red-500" : "border-gray-700"
      } rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500`}
    />
    {errors?.first_name && (
      <p className="text-red-500 text-sm mt-2">{errors.first_name}</p>
    )}
  </div>
);
