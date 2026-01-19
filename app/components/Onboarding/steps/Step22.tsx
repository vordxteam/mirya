import { StepComponent } from "../types";

export const Step22: StepComponent = ({ formData, updateFormData , onEnter }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      22. If you have a youtube or LinkedIn channel where you talk about MIRYA,
      please share your channel ID.
    </h2>
    <input
      type="text"
      placeholder="Type your Answer..."
      value={formData.social_channel_id || ""}
      onKeyDown={onEnter}
      onChange={(e) => updateFormData("social_channel_id", e.target.value)}
      className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
    />
  </div>
);
