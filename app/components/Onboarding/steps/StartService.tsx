// import { StepComponent } from "../types";

// export const StartService: StepComponent = () => (
//   <div className="text-[#FFFFFF] heading-3 font-normal max-w-[581px]">
//     <p>
//       Thanks for sharing your details! Next, we'll ask a few questions about
//       your services and the customers you support.
//     </p>
//   </div>
// );
import { StepComponent } from "../types";
import { useTranslation } from "react-i18next";

export const StartService: StepComponent = () => {
  const { t } = useTranslation("onboarding");

  return (
    <div className="text-[#FFFFFF] heading-3 font-normal max-w-[581px]">
      <p>{t("startService.text")}</p>
    </div>
  );
};
