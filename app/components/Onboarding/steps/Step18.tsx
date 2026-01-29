import { StepComponent } from "../types";
import { useTranslation } from "react-i18next";

export const Step18: StepComponent = ({ formData, updateFormData, errors , onEnter }) => {
  const { t } = useTranslation("onboarding");

  return (
    <div className="text-white">
      <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
        {t("step18.title")}
      </h2>
      <input
        type="text"
        placeholder={t("step18.placeholder")}
        value={formData.partner_program_list || ""}
        onChange={(e) => updateFormData("partner_program_list", e.target.value)}
        onKeyDown={onEnter}
        className={`w-full px-4 py-3 bg-transparent border ${
          errors?.partner_program_list ? "border-red-500" : "border-gray-700"
        } rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500`}
      />
      {errors?.partner_program_list && (
        <p className="text-red-500 text-sm mt-2">
          {t("step18.errors.partner_program_list")}
        </p>
      )}
    </div>
  );
};
