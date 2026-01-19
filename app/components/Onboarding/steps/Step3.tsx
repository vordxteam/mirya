import { StepComponent } from "../types";

export const Step3: StepComponent = ({ formData, updateFormData , onEnter }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      3. What's your phone number?
    </h2>
    <input
      type="tel"
      placeholder="Phone Number"
      onKeyDown={onEnter}
      value={formData.phone_number || ""}
      onChange={(e) => {
        const value = e.target.value.replace(/\D/g, "");
        updateFormData("phone_number", value);
      }}
      className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
    />
  </div>
);
