import { StepComponent } from "../types";

export const Step24: StepComponent = ({ formData, updateFormData ,onEnter }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      24. Could you share relevant documentation about any of your
      contributions?
    </h2>
    <input
      type="text"
      placeholder="Type your Answer..."
      onKeyDown={onEnter}
      value={formData.contribution_documentation || ""}
      onChange={(e) =>
        updateFormData("contribution_documentation", e.target.value)
      }
      className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
    />
  </div>
);
