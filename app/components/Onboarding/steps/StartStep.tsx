import Image from "next/image";
import { StepComponent } from "../types";
import { useTranslation } from "react-i18next";

export const StartStep: StepComponent = () => {
  const { t } = useTranslation("onboarding");

  return (
    <div className="text-white space-y-10">
      <Image src="/images/logo-form.svg" alt="Logo" height={32} width={54} />
      <p className="heading-3 font-normal text-[#FFFFFF]">
        {t("start.intro")}
      </p>
    </div>
  );
};
