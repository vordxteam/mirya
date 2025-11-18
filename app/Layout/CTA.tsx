import React from "react";
import GradientButton from "../ui/GradientButton";

const CTA = () => {
  return (
    <div className="bg-[url('/images/ctabg.png')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col items-center justify-between gap-3 sm:gap-6 text-center px-3 sm:px-20 pt-[134px] pb-[152px]">
        <h1 className="text-[28px] md:text-[48px] font-medium leading-9 sm:leading-14 tracking-[-1.44px]">
          Make your productivity <br /> more efficient. From this time.
        </h1>
        <p className="max-w-[510px] text-[14px] font-normal leading-5 text-[#CAC9D1]">
          Harnessing the power of artificial intelligence to revolutionize
          industries and enhance human experiences.
        </p>
        <GradientButton
          label="Get A Demo"
          href="#"
          bgColor="#fff"
          textColor="#0274FE"
        />
      </div>
    </div>
  );
};

export default CTA;
