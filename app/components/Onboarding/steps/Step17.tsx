// import { StepComponent } from "../types";

// export const Step17: StepComponent = ({ formData, updateFormData, errors , onEnter }) => {
//   const options = [
//     { id: "Yes", label: "Yes" },
//     { id: "No", label: "No" },
//   ];

//   const handleCheckboxChange = (optionId: string) => {
//     updateFormData("other_partner_programs", optionId);
//   };

//   return (
//     <div className="text-white">
//       <h2 className="text-2xl font-normal mb-6">
//         17. Are you part of other partner program?
//       </h2>
//       <div className="space-y-3">
//         {options.map((option) => (
//           <label
//             key={option.id}
//             className="flex items-center max-w-[381px] w-full px-5 py-4 bg-[#1a1d2e] border border-[#2d3348] rounded-lg cursor-pointer hover:border-[#3d4358] transition-colors"
//           >
//             <div className="relative flex items-center justify-center w-5 h-5 mr-4">
//               <input
//                 type="checkbox"
//                 checked={formData.other_partner_programs === option.id}
//                 onChange={() => handleCheckboxChange(option.id)}
//                 onKeyDown={onEnter}
//                 className="w-5 h-5 bg-transparent border-2 border-[#FFFFFFB2] rounded appearance-none checked:bg-white cursor-pointer"
//               />
//               {formData.other_partner_programs === option.id && (
//                 <svg
//                   className="absolute w-3 h-3 text-black pointer-events-none"
//                   fill="none"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path d="M5 13l4 4L19 7"></path>
//                 </svg>
//               )}
//             </div>
//             <span className="heading-6 text-[#FFFFFFB2] font-normal text-base">
//               {option.label}
//             </span>
//           </label>
//         ))}
//       </div>
//       {errors?.other_partner_programs && (
//         <p className="text-red-500 text-sm mt-2">
//           {errors.other_partner_programs}
//         </p>
//       )}
//     </div>
//   );
// };
import { StepComponent } from "../types";
import { useTranslation } from "react-i18next";

export const Step17: StepComponent = ({ formData, updateFormData, errors , onEnter }) => {
  const { t } = useTranslation("onboarding");

  const options = ["Yes", "No"];

  const handleCheckboxChange = (optionId: string) => {
    updateFormData("other_partner_programs", optionId);
  };

  return (
    <div className="text-white">
      <h2 className="text-2xl font-normal mb-6">{t("step17.title")}</h2>
      <div className="space-y-3">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center max-w-[381px] w-full px-5 py-4 bg-[#1a1d2e] border border-[#2d3348] rounded-lg cursor-pointer hover:border-[#3d4358] transition-colors"
          >
            <div className="relative flex items-center justify-center w-5 h-5 mr-4">
              <input
                type="checkbox"
                checked={formData.other_partner_programs === option}
                onChange={() => handleCheckboxChange(option)}
                onKeyDown={onEnter}
                className="w-5 h-5 bg-transparent border-2 border-[#FFFFFFB2] rounded appearance-none checked:bg-white cursor-pointer"
              />
              {formData.other_partner_programs === option && (
                <svg
                  className="absolute w-3 h-3 text-black pointer-events-none"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              )}
            </div>
            <span className="heading-6 text-[#FFFFFFB2] font-normal text-base">
              {t(`step17.options.${option}`)}
            </span>
          </label>
        ))}
      </div>
      {errors?.other_partner_programs && (
        <p className="text-red-500 text-sm mt-2">
          {t("step17.errors.other_partner_programs")}
        </p>
      )}
    </div>
  );
};
