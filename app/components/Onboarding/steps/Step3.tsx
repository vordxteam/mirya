import { StepComponent } from "../types";
import { useTranslation } from "react-i18next";

export const Step3: StepComponent = ({
  formData,
  updateFormData,
  onEnter
}) => {
  const { t } = useTranslation("onboarding");

  return (
    <div className="text-white">
      <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
        {t("step3.title")}
      </h2>

      <input
        type="tel"
        placeholder={t("step3.placeholder")}
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
};
