// import { StepComponent } from "../types";

// export const Step23: StepComponent = ({ formData, updateFormData, errors , onEnter }) => {
//   const options = [
//     { id: "0", label: "Code Contribution" },
//     { id: "1", label: "Participated in the community form" },
//     { id: "2", label: "Built Community Nodes" },
//     { id: "3", label: "Written or Updated Documentation" },
//     { id: "4", label: "Ambassador Program" },
//     { id: "5", label: "Other" },
//   ];

//   const handleCheckboxChange = (optionId: string) => {
//     const currentContributions = formData.mirya_contributions || [];
//     const newContributions = currentContributions.includes(optionId)
//       ? currentContributions.filter((id) => id !== optionId)
//       : [...currentContributions, optionId];
//     updateFormData("mirya_contributions", newContributions);
//   };

//   return (
//     <div className="text-white">
//       <h2 className="text-2xl font-normal mb-6">
//         23. In which ways have you contribute to MIRYA?
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
//                 onKeyDown={onEnter}
//                 checked={(formData.mirya_contributions || []).includes(
//                   option.id
//                 )}
//                 onChange={() => handleCheckboxChange(option.id)}
//                 className="w-5 h-5 bg-transparent border-2 border-[#FFFFFFB2] rounded appearance-none checked:bg-white cursor-pointer"
//               />
//               {(formData.mirya_contributions || []).includes(option.id) && (
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
//       {errors?.mirya_contributions && (
//         <p className="text-red-500 text-sm mt-2">
//           {errors.mirya_contributions}
//         </p>
//       )}
//     </div>
//   );
// };
import { StepComponent } from "../types";
import { useTranslation } from "react-i18next";

export const Step23: StepComponent = ({ formData, updateFormData, errors, onEnter }) => {
  const { t } = useTranslation("onboarding");

  const options = [
    { id: "0", label: t("step23.options.codeContribution") },
    { id: "1", label: t("step23.options.communityForum") },
    { id: "2", label: t("step23.options.communityNodes") },
    { id: "3", label: t("step23.options.documentation") },
    { id: "4", label: t("step23.options.ambassador") },
    { id: "5", label: t("step23.options.other") },
  ];

  const handleCheckboxChange = (optionId: string) => {
    const currentContributions = formData.mirya_contributions || [];
    const newContributions = currentContributions.includes(optionId)
      ? currentContributions.filter((id: string) => id !== optionId)
      : [...currentContributions, optionId];
    updateFormData("mirya_contributions", newContributions);
  };

  return (
    <div className="text-white">
      <h2 className="text-2xl font-normal mb-6">
        {t("step23.title")}
      </h2>
      <div className="space-y-3">
        {options.map((option) => (
          <label
            key={option.id}
            className="flex items-center max-w-[381px] w-full px-5 py-4 bg-[#1a1d2e] border border-[#2d3348] rounded-lg cursor-pointer hover:border-[#3d4358] transition-colors"
          >
            <div className="relative flex items-center justify-center w-5 h-5 mr-4">
              <input
                type="checkbox"
                onKeyDown={onEnter}
                checked={(formData.mirya_contributions || []).includes(option.id)}
                onChange={() => handleCheckboxChange(option.id)}
                className="w-5 h-5 bg-transparent border-2 border-[#FFFFFFB2] rounded appearance-none checked:bg-white cursor-pointer"
              />
              {(formData.mirya_contributions || []).includes(option.id) && (
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
              {option.label}
            </span>
          </label>
        ))}
      </div>
      {errors?.mirya_contributions && (
        <p className="text-red-500 text-sm mt-2">
          {t("step23.errors.mirya_contributions")}
        </p>
      )}
    </div>
  );
};