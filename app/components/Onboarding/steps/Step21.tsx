import { StepComponent } from "../types";

export const Step21: StepComponent = ({ formData, updateFormData }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      21. Please share a reference client:
    </h2>
    <input
      type="text"
      placeholder="Type your Answer..."
      value={formData.reference_client || ""}
      onChange={(e) => updateFormData("reference_client", e.target.value)}
      className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
    />
  </div>
);
