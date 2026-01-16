import { StepComponent } from "../types";

export const Step4: StepComponent = ({ formData, updateFormData, errors }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      4. What's your email address?
    </h2>
    <input
      type="email"
      placeholder="Email"
      value={formData.email || ""}
      onChange={(e) => updateFormData("email", e.target.value)}
      className={`w-full px-4 py-3 bg-transparent border ${
        errors?.email ? "border-red-500" : "border-gray-700"
      } rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500`}
    />
    {errors?.email && (
      <p className="text-red-500 text-sm mt-2">{errors.email}</p>
    )}
  </div>
);
