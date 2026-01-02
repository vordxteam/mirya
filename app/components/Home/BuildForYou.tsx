import Image from "next/image";
import BuildForYouSlider from "./BuildForYouSlider";
import GradientBlackButton from "@/app/ui/GradientBlackButton";
import { useTranslation } from "react-i18next";
export default function BuildForYou() {
  const { t } = useTranslation("home");
  return (
    <div className="  z-100 bg-[url('/images/build-bg.png')] bg-no-repeat bg-cover mt-10 p-3 sm:p-[84px]">
      <div className="flex flex-col lg:flex-row justify-between items-center max-w-[1440px] mx-auto">
        <div>
          <div className="pb-3 flex items-center gap-5">
            <Image
              src="/images/label2.svg"
              width={78}
              height={16}
              alt="line"
            />
            <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal text-center">
{t("buildForYou.badge")}            </h1>
            <Image
              src="/images/label.svg"
              width={78}
              height={16}
              alt="line"
            />
          </div>

          {/* Main Heading */}
          <h1 className="heading-1 font-medium  tracking-[-1.44px] max-w-[430px] text-start pb-3 sm:pb-6">
{t("buildForYou.mainTitle")}          </h1>

          {/* Subheading */}
          <p className="text-[#CAC9D1] heading-6 font-normal text-start max-w-[510px] pb-3 sm:pb-6">
           {t("buildForYou.description")}
          </p>
          <div className="w-fit min-[172px]">
            <GradientBlackButton label={t("buildForYou.buttonLabel")} href="/contact" bgColor="#00031C" />
          </div>
        </div>
        <BuildForYouSlider />
      </div>
    </div>
  );
}
