import { StepComponent } from "../types";
import { useTranslation } from "react-i18next";

export const Step2: StepComponent = ({
  formData,
  updateFormData,
  errors,
  onEnter
}) => {
  const { t } = useTranslation("onboarding");

  return (
    <div className="text-white">
      <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
        {t("step2.title")}
      </h2>

      <input
        type="text"
        placeholder={t("step2.placeholder")}
        onKeyDown={onEnter}
        value={formData.last_name || ""}
        onChange={(e) => updateFormData("last_name", e.target.value)}
        className={`w-full px-4 py-3 bg-transparent border ${
          errors?.last_name ? "border-red-500" : "border-gray-700"
        } rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500`}
      />

      {errors?.last_name && (
        <p className="text-red-500 text-sm mt-2">
          {t("step2.error_required")}
        </p>
      )}
    </div>
  );
};
