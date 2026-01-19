import { StepComponent } from "../types";

export const Step25: StepComponent = ({ formData, updateFormData, errors , onEnter }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      25. Anything else you would like to let us know?
    </h2>
    <input
      type="text"
      placeholder="Type your Answer..."
      onKeyDown={onEnter}
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
