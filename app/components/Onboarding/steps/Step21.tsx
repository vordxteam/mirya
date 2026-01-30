import { StepComponent } from "../types";
import { useTranslation } from "react-i18next";

export const Step21: StepComponent = ({ formData, updateFormData, onEnter }) => {
  const { t } = useTranslation("onboarding");

  return (
    <div className="text-white">
      <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
        {t("step21.title")}
      </h2>
      <input
        type="text"
        placeholder={t("step21.placeholder")}
        onKeyDown={onEnter}
        value={formData.reference_client || ""}
        onChange={(e) => updateFormData("reference_client", e.target.value)}
        className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};
