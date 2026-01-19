import { StepComponent } from "../types";

export const Step9: StepComponent = ({ formData, updateFormData, errors , onEnter }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      9. In which country are you currently located?
    </h2>
    <input
      type="text"
      placeholder="Country Name"
      value={formData.country || ""}
      onKeyDown={onEnter}
      onChange={(e) => updateFormData("country", e.target.value)}
      className={`w-full px-4 py-3 bg-transparent border ${
        errors?.country ? "border-red-500" : "border-gray-700"
      } rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500`}
    />
    {errors?.country && (
      <p className="text-red-500 text-sm mt-2">{errors.country}</p>
    )}
  </div>
);
