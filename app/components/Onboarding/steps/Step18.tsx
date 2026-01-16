import { StepComponent } from "../types";

export const Step18: StepComponent = ({ formData, updateFormData, errors }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      18. Would you mind listing them here?
    </h2>
    <input
      type="text"
      placeholder="Type your Answer..."
      value={formData.partner_program_list || ""}
      onChange={(e) => updateFormData("partner_program_list", e.target.value)}
      className={`w-full px-4 py-3 bg-transparent border ${
        errors?.partner_program_list ? "border-red-500" : "border-gray-700"
      } rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500`}
    />
    {errors?.partner_program_list && (
      <p className="text-red-500 text-sm mt-2">{errors.partner_program_list}</p>
    )}
  </div>
);
