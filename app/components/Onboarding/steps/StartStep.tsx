import Image from "next/image";
import { StepComponent } from "../types";

export const StartStep: StepComponent = () => (
  <div className="text-white space-y-10">
    <Image src="/images/miryaLogo.png" alt="Logo" height={32} width={54} />
    <p className="heading-3 font-normal text-[#FFFFFF]">
      Here is some questions about you and your company.
    </p>
  </div>
);
