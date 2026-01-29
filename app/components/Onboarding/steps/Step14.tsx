// import { StepComponent } from "../types";

// export const Step14: StepComponent = ({ formData, updateFormData, errors , onEnter }) => (
//   <div className="text-white">
//     <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
//       14. Company Description
//     </h2>
//     <textarea
//       placeholder="Briefly describe your company's services, mission, and expertise..."
//       value={formData.company_description || ""}
//       onChange={(e) => updateFormData("company_description", e.target.value)}
//       onKeyDown={onEnter}
//       rows={6}
//       className={`w-full px-4 py-3 bg-transparent border ${
//         errors?.company_description ? "border-red-500" : "border-gray-700"
//       } rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 resize-none`}
//     />
//     {errors?.company_description && (
//       <p className="text-red-500 text-sm mt-2">{errors.company_description}</p>
//     )}
//   </div>
// );
import { StepComponent } from "../types";
import { useTranslation } from "react-i18next";

export const Step14: StepComponent = ({ formData, updateFormData, errors , onEnter }) => {
  const { t } = useTranslation("onboarding");

  return (
    <div className="text-white">
      <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
        {t("step14.title")}
      </h2>
      <textarea
        placeholder={t("step14.placeholder")}
        value={formData.company_description || ""}
        onChange={(e) => updateFormData("company_description", e.target.value)}
        onKeyDown={onEnter}
        rows={6}
        className={`w-full px-4 py-3 bg-transparent border ${
          errors?.company_description ? "border-red-500" : "border-gray-700"
        } rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 resize-none`}
      />
      {errors?.company_description && (
        <p className="text-red-500 text-sm mt-2">{t("step14.errors.company_description")}</p>
      )}
    </div>
  );
};
