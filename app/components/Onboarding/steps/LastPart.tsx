// import { StepComponent } from "../types";

// export const LastPart: StepComponent = () => (
//   <div className="text-[#FFFFFF] heading-3 font-normal max-w-[581px]">
//     <p>
//       You are doing great. In this last part, we'd like to know more about your
//       expertise with MIRYA.
//     </p>
//   </div>
// );
import { StepComponent } from "../types";
import { useTranslation } from "react-i18next";

export const LastPart: StepComponent = () => {
  const { t } = useTranslation("onboarding");

  return (
    <div className="text-[#FFFFFF] heading-3 font-normal max-w-[581px]">
      <p>
        {t("lastPart.text")}
      </p>
    </div>
  );
};